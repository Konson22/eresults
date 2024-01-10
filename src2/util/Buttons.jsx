export default function Button({ text, cName = "" }) {
  return <button className={`${cName} `}>{text}</button>;
}
