export default function Skeleton({ h=12, w="100%", r=10, style }) {
  return <div className="skel" style={{ height:h, width:w, borderRadius:r, ...style }} />;
}
