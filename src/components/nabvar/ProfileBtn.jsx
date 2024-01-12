import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContextApi } from "../../manager/ContextProvider";

export default function ProfileBtn() {
  const { profile } = useContextApi();
  return (
    <>
      {profile ? (
        <Link className="flex mx-4" to="/profile">
          <img className="h-9 w-9 rounded-full" src={profile.avatar} alt="" />
        </Link>
      ) : (
        <Link className="text-2xl mx-4" to="/login">
          <FiUser />
        </Link>
      )}
    </>
  );
}
