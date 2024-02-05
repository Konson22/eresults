export default function Button({ text, cName = "border-primary" }) {
  return (
    <button className={`${cName} border px-4 md:py-2 rounded`}>{text}</button>
  );
}
