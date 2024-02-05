import {
  FaFacebook,
  FaRegCommentAlt,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import FriendList from "./FriendList";
import Chat from "./Chat";
import MediaGroup from "./MediaGroup";
import { useState } from "react";

export default function ChatRoomPage() {
  const [currentPage, setCurrentPage] = useState("chat");
  return (
    <div className="md:px-[5%] px-4 mt-4">
      <div className="flex items-center justify-between md: bg-white mb-5 md:p-5 p-3 rounded-md">
        <ul className="flex flex-1 md:justify-start justify-between">
          {links.map((link) => (
            <li
              className="md:mr-6 md:flex items-center"
              onClick={() => setCurrentPage(link.name)}
            >
              <div className="text-2xl mx-auto w-max md:mr-2">{link.icon}</div>
              {link.name}
            </li>
          ))}
        </ul>
        <div className="md:flex hidden items-center">
          <button className="border border-primary">Share group</button>
        </div>
      </div>
      <div className="md:flex">
        <div className="flex-1 md:bg-white md:p-8 md:mr-8">
          {currentPage === "Chat" && <Chat />}
          {currentPage === "friends" && <FriendList cName="" />}
          {currentPage === "Facebook" && (
            <MediaGroup
              title="Facebook Groups"
              icon={<FaFacebook className="text-sky-500" />}
              data={facebookGroups}
            />
          )}
          {currentPage === "whatsApp" && (
            <MediaGroup
              title="WhatsApp Groups"
              icon={<FaWhatsapp className="text-green-500" />}
              data={whatsAppGroups}
            />
          )}
        </div>
        <FriendList />
      </div>
    </div>
  );
}

const facebookGroups = [
  {
    name: "Learn togather",
    bio: "this group is for senior fout students and here we share stuff related to education only",
    avatar: "/book-cover/cove-3.jpg",
  },
  {
    name: "Learn togather",
    bio: "this group is for senior fout students and here we share stuff related to education only",
    avatar: "/book-cover/cover.jpg",
  },
  {
    name: "Learn togather",
    bio: "this group is for senior fout students and here we share stuff related to education only",
    avatar: "/book-cover/cover-2.jpg",
  },
  {
    name: "Learn togather",
    bio: "this group is for senior fout students and here we share stuff related to education only",
    avatar: "/book-cover/cover-4.jpg",
  },
];

const whatsAppGroups = [
  {
    name: "Learn togather",
    bio: "this group is for senior fout students and here we share stuff related to education only",
    avatar: "/book-cover/cove-3.jpg",
  },
  {
    name: "Learn togather",
    bio: "this group is for senior fout students and here we share stuff related to education only",
    avatar: "/book-cover/cover.jpg",
  },
  {
    name: "Learn togather",
    bio: "this group is for senior fout students and here we share stuff related to education only",
    avatar: "/book-cover/cover-2.jpg",
  },
  {
    name: "Learn togather",
    bio: "this group is for senior fout students and here we share stuff related to education only",
    avatar: "/book-cover/cover-4.jpg",
  },
];

const links = [
  {
    name: "Chat",
    icon: <FaRegCommentAlt />,
  },
  {
    name: "friends",
    icon: <FaUsers />,
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
  },
  {
    name: "whatsApp",
    icon: <FaWhatsapp />,
  },
];
