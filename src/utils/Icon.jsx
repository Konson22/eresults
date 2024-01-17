export default function Icon({ icon, cName = "" }) {
  return (
    <div
      className={`md:text-xl hover:scale-110 md:shadow-md bg-white rounded-full md:p-3 p-1 ${cName}`}
    >
      {icon}
    </div>
  );
}
