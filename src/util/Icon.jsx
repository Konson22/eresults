export default function Icon({ icon, cName = "rounded-full mr-3" }) {
  return <span className={`${cName} border p-1 text-xl`}>{icon}</span>;
}
