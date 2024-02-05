import SocialMedia from "./SocialMedia";

export default function Footer() {
  const copyRight = (cn = "md:block hidden") => (
    <p className={`${cn}`}>
      &copy; copy right reserved for Amal Group {new Date().getFullYear()}
    </p>
  );
  return (
    <footer className="bg-gray-200">
      <div className="md:flex justify-between px-[15%] py-8">
        <div className="">
          <h3 className="text-xl font-bold text-gray-700">Quick Links</h3>
          <ul>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-bold text-gray-700">Populer Authors</h3>
          <ul>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-bold text-gray-700">New Books</h3>
          <ul>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-bold text-gray-700">Review of Books</h3>
          <ul>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
            <li className="mb-3">how to get book</li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-gray-400 md:flex items-center justify-between px-[8%] py-4">
        {copyRight()}
        <SocialMedia cName="border border-gray-400 text-xl md:ml-5 p-2" />
        {copyRight("md:hidden text-sm mt-6 block")}
      </div>
    </footer>
  );
}
