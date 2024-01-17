export default function Input({ type, name, placeholder }) {
  return (
    <div className="mb-5">
      <input
        className="md:h-[3rem] h-[2.7rem] bg-gray-5 border border-green-400 shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </div>
  );
}
