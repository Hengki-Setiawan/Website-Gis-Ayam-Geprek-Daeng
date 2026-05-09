import React, { useState, useEffect, useRef } from 'react';
import {
  MapContainer, TileLayer, GeoJSON, Marker, Popup,
  Circle, Polyline, LayerGroup, useMap, Tooltip
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';
import {
  Map as MapIcon, Globe, Users, GraduationCap,
  Store, Route, Layers, ChevronDown, ChevronUp, Info
} from 'lucide-react';
import {
  kecamatanMakassar,
  fasilitasPendidikan,
  jalanUtama,
  kompetitorHotspot,
  kompetitorTitik
} from '../data/makassarData';

// Fix Leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ── Custom Icons ──────────────────────────────────────────────
const makeIcon = (emoji, bg) => new L.DivIcon({
  className: '',
  html: `<div style="background:${bg};width:30px;height:30px;border-radius:50%;border:2.5px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;font-size:14px;">${emoji}</div>`,
  iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, -18]
});

const iconPendidikan = makeIcon('🎓', '#3b82f6');
const iconKompetitor = makeIcon('🍗', '#ef4444');

// ── Kecamatan GeoJSON Styling ─────────────────────────────────
const getKecStyle = (feature) => {
  const k = feature.properties.kepadatan;
  if (k === 'padat') return { color: '#7f1d1d', weight: 1.5, fillColor: '#ef4444', fillOpacity: 0.65 };
  if (k === 'sedang') return { color: '#7f1d1d', weight: 1.5, fillColor: '#fca5a5', fillOpacity: 0.55 };
  return { color: '#6b7280', weight: 1.5, fillColor: '#f3f4f6', fillOpacity: 0.3 };
};

const onEachKec = (feature, layer) => {
  const p = feature.properties;
  const warna = p.kepadatan === 'padat' ? '🔴 Padat' : p.kepadatan === 'sedang' ? '🟡 Sedang' : '⚪ Tidak Padat';
  layer.bindPopup(`
    <div style="font-family:sans-serif;min-width:160px;">
      <b style="font-size:15px;color:#1e293b;">Kec. ${p.nama}</b><br/>
      <hr style="margin:6px 0;border-color:#e2e8f0"/>
      <span style="color:#64748b;">Kepadatan Penduduk:</span><br/>
      <b style="color:#dc2626;">${warna}</b>
    </div>
  `);
  layer.on({ mouseover: e => e.target.setStyle({ fillOpacity: 0.85, weight: 3 }),
             mouseout: e => layer.resetStyle ? undefined : e.target.setStyle(getKecStyle(feature)) });
};

// ── Legend Chip ───────────────────────────────────────────────
const Chip = ({ color, label }) => (
  <div className="flex items-center gap-1.5">
    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: color, border: '1px solid rgba(0,0,0,0.2)' }}></div>
    <span className="text-xs text-slate-300">{label}</span>
  </div>
);

// ── Toggle Switch ─────────────────────────────────────────────
const Toggle = ({ active, onClick, label, icon: Icon, color, legend }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200"
    style={{
      background: active ? `${color}22` : 'rgba(30,41,59,0.6)',
      borderColor: active ? color : 'rgba(71,85,105,0.5)',
    }}
  >
    <div className="flex items-center gap-2.5">
      <Icon size={18} style={{ color: active ? color : '#94a3b8' }} />
      <div className="text-left">
        <p className="text-sm font-medium text-white leading-none">{label}</p>
        {active && legend && (
          <div className="flex gap-2 mt-1.5 flex-wrap">{legend}</div>
        )}
      </div>
    </div>
    <div className="w-10 h-5 rounded-full flex-shrink-0 relative transition-colors duration-300"
      style={{ background: active ? color : '#334155' }}>
      <div className="absolute top-1 w-3 h-3 rounded-full bg-white transition-all duration-300"
        style={{ left: active ? '22px' : '4px' }}></div>
    </div>
  </button>
);

// ── Map Mode Fly ───────────────────────────────────────────────
const FlyToCenter = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => { map.flyTo(center, zoom, { animate: true, duration: 1.2 }); }, [center, zoom]);
  return null;
};

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
const PetaInteraktifSection = () => {
  const [mapMode, setMapMode] = useState('simple');
  const [activeLayers, setActiveLayers] = useState({
    kepadatan: true,
    pendidikan: true,
    jalan: false,
    kompetitor: false,
  });

  const CENTER = [-5.135, 119.430];
  const ZOOM = 12;

  const toggle = (k) => setActiveLayers(p => ({ ...p, [k]: !p[k] }));

  const tileLayers = {
    simple: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attr: '&copy; <a href="https://carto.com/">CARTO</a> &amp; OSM contributors'
    },
    satellite: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attr: '&copy; <a href="https://www.esri.com">Esri</a> World Imagery'
    }
  };

  return (
    <section id="peta-interaktif" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.05),transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Web GIS Interaktif
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Eksplorasi Peta <span className="text-orange-500">Analisis Spasial</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mb-6">
            Temukan lokasi strategis Ayam Geprek Daeng melalui 4 lapisan data spasial Kota Makassar.
            Nyalakan/matikan lapisan dan ubah mode peta sesuai kebutuhan.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-4 py-2 rounded-full text-sm font-medium">
            <Info size={16} />
            <span>Fitur Peta Interaktif ini masih dalam tahap eksperimental (Beta)</span>
          </div>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-5">
          {/* ── CONTROL PANEL ── */}
          <motion.div
            className="w-full xl:w-72 flex-shrink-0 space-y-4"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Mode Peta */}
            <div className="bg-slate-800/80 backdrop-blur p-5 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                <MapIcon size={16} className="text-orange-500" /> Mode Peta
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMapMode('simple')}
                  className="py-3 px-3 rounded-xl flex flex-col items-center gap-1.5 transition-all text-sm font-medium"
                  style={{
                    background: mapMode === 'simple' ? 'linear-gradient(135deg,#f97316,#ea580c)' : 'rgba(51,65,85,0.8)',
                    color: mapMode === 'simple' ? 'white' : '#94a3b8',
                    boxShadow: mapMode === 'simple' ? '0 4px 15px rgba(249,115,22,0.35)' : 'none'
                  }}
                >
                  <MapIcon size={20} /> Sederhana
                </button>
                <button
                  onClick={() => setMapMode('satellite')}
                  className="py-3 px-3 rounded-xl flex flex-col items-center gap-1.5 transition-all text-sm font-medium"
                  style={{
                    background: mapMode === 'satellite' ? 'linear-gradient(135deg,#2563eb,#1d4ed8)' : 'rgba(51,65,85,0.8)',
                    color: mapMode === 'satellite' ? 'white' : '#94a3b8',
                    boxShadow: mapMode === 'satellite' ? '0 4px 15px rgba(37,99,235,0.35)' : 'none'
                  }}
                >
                  <Globe size={20} /> Satelit
                </button>
              </div>
            </div>

            {/* Lapisan Data */}
            <div className="bg-slate-800/80 backdrop-blur p-5 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Layers size={16} className="text-orange-500" /> Lapisan Data
              </h3>
              <div className="space-y-2.5">
                <Toggle
                  active={activeLayers.kepadatan}
                  onClick={() => toggle('kepadatan')}
                  label="Kepadatan Penduduk"
                  icon={Users}
                  color="#ef4444"
                  legend={[
                    <Chip key="p" color="#ef4444" label="Padat" />,
                    <Chip key="s" color="#fca5a5" label="Sedang" />,
                    <Chip key="t" color="#e2e8f0" label="Tidak Padat" />
                  ]}
                />
                <Toggle
                  active={activeLayers.pendidikan}
                  onClick={() => toggle('pendidikan')}
                  label="Fasilitas Pendidikan"
                  icon={GraduationCap}
                  color="#3b82f6"
                  legend={[<Chip key="1" color="#3b82f6" label="Kampus / Sekolah" />]}
                />
                <Toggle
                  active={activeLayers.jalan}
                  onClick={() => toggle('jalan')}
                  label="Aksesibilitas Jalan"
                  icon={Route}
                  color="#a855f7"
                  legend={[
                    <Chip key="1" color="#a855f7" label="500m buffer" />,
                    <Chip key="2" color="#22c55e" label="200m buffer" />,
                    <Chip key="3" color="#3b82f6" label="50m buffer" />
                  ]}
                />
                <Toggle
                  active={activeLayers.kompetitor}
                  onClick={() => toggle('kompetitor')}
                  label="Hotspot Kompetitor"
                  icon={Store}
                  color="#f97316"
                  legend={[<Chip key="1" color="#f97316" label="Kepadatan Kompetitor" />]}
                />
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-2xl">
              <div className="flex items-start gap-2">
                <Info size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-orange-200 leading-relaxed">
                  Klik area peta untuk melihat informasi detail. Scroll/pinch untuk zoom in/out.
                  Data spasial berdasarkan analisis Kota Makassar (14 Kecamatan).
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── MAP ── */}
          <motion.div
            className="flex-1 rounded-3xl overflow-hidden shadow-2xl"
            style={{ height: '600px', border: '2px solid rgba(71,85,105,0.5)' }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <MapContainer
              center={CENTER}
              zoom={ZOOM}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                key={mapMode}
                attribution={tileLayers[mapMode].attr}
                url={tileLayers[mapMode].url}
              />

              {/* ── KEPADATAN PENDUDUK (GeoJSON Choropleth) ── */}
              {activeLayers.kepadatan && (
                <GeoJSON
                  key="kepadatan"
                  data={kecamatanMakassar}
                  style={getKecStyle}
                  onEachFeature={onEachKec}
                />
              )}

              {/* ── AKSESIBILITAS JALAN (Buffer 3 lapis: ungu=500m, hijau=200m, biru=50m) ── */}
              {activeLayers.jalan && (
                <LayerGroup>
                  {jalanUtama.map(j => {
                    // Warna dan ketebalan buffer berdasarkan kategori
                    const outerW = j.buffer === 500 ? 28 : j.buffer === 200 ? 18 : 10;
                    const midW   = j.buffer === 500 ? 18 : j.buffer === 200 ? 11 : 6;
                    const bufColor = j.buffer === 500 ? '#a855f7' : j.buffer === 200 ? '#22c55e' : '#3b82f6';
                    return (
                      <React.Fragment key={j.id}>
                        {/* Layer 3: Outer buffer (warna kategori, transparan) */}
                        <Polyline
                          positions={j.path}
                          pathOptions={{ color: bufColor, weight: outerW, opacity: 0.30, lineCap:'round', lineJoin:'round' }}
                        />
                        {/* Layer 2: Mid buffer */}
                        <Polyline
                          positions={j.path}
                          pathOptions={{ color: bufColor, weight: midW, opacity: 0.50, lineCap:'round', lineJoin:'round' }}
                        />
                        {/* Layer 1: Center line hijau terang (aksesibilitas) */}
                        <Polyline
                          positions={j.path}
                          pathOptions={{ color: '#4ade80', weight: 3.5, opacity: 1.0, lineCap:'round', lineJoin:'round' }}
                        >
                          <Popup>
                            <div style={{fontFamily:'sans-serif',minWidth:'180px'}}>
                              <b style={{color:'#5b21b6'}}>{j.nama}</b><br/>
                              <hr style={{margin:'4px 0',borderColor:'#e2e8f0'}}/>
                              <span style={{color:'#64748b',fontSize:'12px'}}>Kategori: </span>
                              <span style={{fontSize:'12px'}}>{j.kat}</span><br/>
                              <span style={{color:'#64748b',fontSize:'12px'}}>Buffer: </span>
                              <b style={{fontSize:'12px',color:bufColor}}>{j.buffer}m</b>
                            </div>
                          </Popup>
                        </Polyline>
                      </React.Fragment>
                    );
                  })}
                </LayerGroup>
              )}

              {/* ── HOTSPOT KOMPETITOR (Circles gradient) ── */}
              {activeLayers.kompetitor && (
                <LayerGroup>
                  {kompetitorHotspot.map(h => (
                    <React.Fragment key={h.id}>
                      <Circle
                        center={h.pos}
                        radius={h.r * 1.6}
                        pathOptions={{ color: 'transparent', fillColor: '#ef4444', fillOpacity: 0.08 }}
                      />
                      <Circle
                        center={h.pos}
                        radius={h.r}
                        pathOptions={{ color: '#ef4444', weight: 1, fillColor: '#ef4444', fillOpacity: 0.25 }}
                      />
                      <Circle
                        center={h.pos}
                        radius={h.r * 0.45}
                        pathOptions={{ color: '#dc2626', weight: 1.5, fillColor: '#b91c1c', fillOpacity: 0.5 }}
                      >
                        <Popup>
                          <b style={{color:'#dc2626'}}>{h.nama}</b><br/>
                          <span>Intensitas: {h.intensitas.toLocaleString()}</span>
                        </Popup>
                      </Circle>
                    </React.Fragment>
                  ))}
                  {kompetitorTitik.map(k => (
                    <Marker key={k.id} position={k.pos} icon={iconKompetitor}>
                      <Tooltip direction="top" offset={[0,-14]} opacity={0.95}>{k.nama}</Tooltip>
                      <Popup>
                        <div style={{fontFamily:'sans-serif',minWidth:'160px'}}>
                          <b style={{color:'#dc2626'}}>{k.nama}</b><br/>
                          <hr style={{margin:'4px 0',borderColor:'#e2e8f0'}}/>
                          <span style={{color:'#64748b',fontSize:'12px'}}>Kecamatan: </span>
                          <span style={{fontSize:'12px'}}>{k.kec}</span>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              )}

              {/* ── FASILITAS PENDIDIKAN ── */}
              {activeLayers.pendidikan && (
                <LayerGroup>
                  {fasilitasPendidikan.map(f => (
                    <Marker key={f.id} position={f.pos} icon={iconPendidikan}>
                      <Tooltip direction="top" offset={[0, -12]} opacity={0.95}>
                        {f.nama}
                      </Tooltip>
                      <Popup>
                        <div style={{ fontFamily: 'sans-serif', minWidth: '170px' }}>
                          <b style={{ color: '#1e40af', fontSize: '14px' }}>{f.nama}</b><br/>
                          <hr style={{ margin: '5px 0', borderColor: '#e2e8f0' }} />
                          <span style={{ color: '#64748b', fontSize: '12px' }}>Tipe: </span>
                          <span style={{ fontSize: '12px' }}>{f.tipe}</span><br/>
                          <span style={{ color: '#64748b', fontSize: '12px' }}>Kecamatan: </span>
                          <span style={{ fontSize: '12px' }}>{f.kecamatan}</span>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              )}

            </MapContainer>
          </motion.div>
        </div>

        {/* ── LEGEND FOOTER ── */}
        <motion.div
          className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          {[
            { label: 'Kepadatan Tinggi (Padat)', color: '#ef4444', desc: 'Potensi pasar maksimal — 9 Kecamatan' },
            { label: 'Kepadatan Sedang', color: '#fca5a5', desc: 'Potensi menengah — 3 Kecamatan' },
            { label: 'Fasilitas Pendidikan', color: '#3b82f6', desc: '25 titik: Kampus PTN/PTS + SMA/SMK' },
            { label: 'Hotspot Kompetitor', color: '#ef4444', desc: '6 cluster + 16 lokasi warung geprek' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-3 flex items-start gap-3">
              <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0 mt-0.5" style={{ background: item.color }}></div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">{item.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PetaInteraktifSection;
