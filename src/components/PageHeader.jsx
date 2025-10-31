export default function PageHeader({ title, subtitle, right }) {
  return (
    <div className="page-header">
      <div>
        <h1 className="page-title">{title}</h1>
        {subtitle && <div className="page-subtitle">{subtitle}</div>}
      </div>
      <div className="page-right">{right}</div>
    </div>
  );
}
