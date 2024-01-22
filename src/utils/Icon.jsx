export default function Icon({ icon, cName = "" }) {
  return <div className={`md:text-2xl hover:scale-110 ${cName}`}>{icon}</div>;
}
