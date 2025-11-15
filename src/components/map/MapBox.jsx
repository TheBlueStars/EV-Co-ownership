// src/components/map/MapBox.jsx
/**
 * MapBox component – mock dùng OpenStreetMap embed.
 * Bạn có thể thay thế bằng mapbox-gl sau.
 */
export default function MapBox({
  lat = 10.776,
  lng = 106.7,
  zoom = 13,
  height = 320,
}) {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.05}%2C${lat - 0.05}%2C${lng + 0.05}%2C${lat + 0.05}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_16px_60px_rgba(15,23,42,.18)]">
      <iframe
        title="map"
        src={src}
        style={{ border: 0, width: "100%", height }}
        loading="lazy"
      />
    </div>
  );
}
