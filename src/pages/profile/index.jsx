import { useContextApi } from "../../manager/ContextProvider";

export default function ProfilePage() {
  const { profile } = useContextApi();

  return (
    <div className="md:px-[10%] y-3">
      {profile ? (
        <>
          <div className="flex items-center bg-gray-100 px-4 py-6">
            <img
              className="h-24 w-24 rounded-full"
              src={profile.avatar}
              alt=""
            />
            <div className="flex-1 ml-4">
              <h3 className="font-bold text-2xl">{profile.name}</h3>
              <span className="">Senior 4</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-b-2 px-4">
            <span className="py-3">My Fav</span>
            <span className="py-3">Profile</span>
            <span className="py-3">Friends</span>
            <span className="py-3">Setting</span>
          </div>
          <div className="px-4 pt-5 pb-40">my profile</div>
        </>
      ) : (
        <div className="">Loading....</div>
      )}
    </div>
  );
}
