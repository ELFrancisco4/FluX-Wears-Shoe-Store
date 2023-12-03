import { useState } from "react";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const NavLayout = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="relative px-4 md:px-8">
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between py-4">
        <div className="text-xl md:text-2xl font-bold">Flux-Wear-Shoe</div>
        <ul className="hidden md:flex gap-4 text-sm">
          <li className="hover:border-b-2 hover:border-orange-500 transition duration-300">
            Collections
          </li>
          <li className="hover:border-b-2 hover:border-orange-500 transition duration-300">
            Men
          </li>
          <li className="hover:border-b-2 hover:border-orange-500 transition duration-300">
            Women
          </li>
          <li className="hover:border-b-2 hover:border-orange-500 transition duration-300">
            About
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <div className="text-xl">
            <FaCartShopping />
          </div>
          <div onClick={handleDropdown} className="text-xl sm:hidden">
            {dropdown ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      {dropdown && (
        <div className="absolute right-4 top-16 sm:top-20 w-40 bg-white border shadow-md p-4">
          <ul className="text-sm flex flex-col items-center justify-center">
            <li className="p-2" onClick={() => setDropdown(false)}>
              Collections
            </li>
            <li className="p-2" onClick={() => setDropdown(false)}>
              Men
            </li>
            <li className="p-2" onClick={() => setDropdown(false)}>
              Women
            </li>
            <li className="p-2" onClick={() => setDropdown(false)}>
              About
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavLayout;
