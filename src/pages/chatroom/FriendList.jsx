export default function FriendList({ cName = "md:block hidden" }) {
  return (
    <div className={`${cName} md:w-[30%] bg-white p-4`}>
      <h3 className="text-xl mb-5">Friends - (25)</h3>
      <div className="mt-3">
        {users.map((user) => (
          <div
            className="bg-gray-100 flex items-center px-3 py-2 rounded mb-3"
            key={user.id}
          >
            <img className="h-12 w-12 rounded-full" src={user.avatar} alt="" />
            <div className="flex-1 ml-2">
              <h3 className="">{user.name}</h3>
              <p>
                <span>{user.grade}</span>- (
                <span className="text-sm">{user.school}</span>)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const users = [
  {
    id: 2,
    name: "Buay Moses",
    grade: "Senior 4",
    school: "Mahad Juba",
    avatar: "/avatars/image-1.png",
  },
  {
    id: 3,
    name: "Suzan John",
    grade: "Senior 2",
    school: "Sopiri Juba",
    avatar: "/avatars/image-2.png",
  },
  {
    id: 4,
    name: "Kon Akech",
    grade: "Senior 4",
    school: "Mahad Juba",
    avatar: "/avatars/image-3.png",
  },
  {
    id: 3,
    name: "James Mayen",
    grade: "Senior 2",
    school: "Sopiri Juba",
    avatar: "/avatars/image-4.png",
  },
  {
    id: 4,
    name: "Kon Akech",
    grade: "Senior 4",
    school: "Mahad Juba",
    avatar: "/avatars/image-5.png",
  },
];
