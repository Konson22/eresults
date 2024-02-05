import { FiSearch } from "react-icons/fi";

export default function MediaGroup({ title, icon, data }) {
  return (
    <div>
      <div className="md:flex items-center justify-between mb-8">
        <div className="flex items-center md:mb-0 mb-6">
          <span className="text-4xl mr-3">{icon}</span>
          {title}
        </div>
        <form className="flex items-center md:h-[3rem] h-[3.5rem] md:w-[50%] rounded-xl border overflow-hidden bg-gray-50">
          <input
            className="h-full flex-1 focus:border-none border-none bg-transparent focus:outline-none px-3"
            type="search"
            placeholder="Search for group"
            required
          />
          <button
            className="h-full flex items-center justify-center  text-primary px-4"
            type="submit"
          >
            <FiSearch className="md:text-xl text-2xl " />
          </button>
        </form>
      </div>
      <div className="">
        {data.map((item) => (
          <div
            className="bg-white flex md:items-center px-3 py-2 rounded mb-3"
            key={item.id}
          >
            <img className="h-14 w-14 rounded-full" src={item.avatar} alt="" />
            <div className="md:flex flex-1 ml-2">
              <div className="">
                <h3 className="text-xl">{item.name}</h3>
                <p>{item.bio}</p>
              </div>
              <button className="border border-primary rounded mt-3 px-4 py-1">
                Join Group
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
