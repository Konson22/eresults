export default function Icon({ icon, cName = "" }) {
  return <div className={`text-2xl ${cName}`}>{icon}</div>;
}
