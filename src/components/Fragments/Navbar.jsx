import { NavLink } from "react-router-dom";
import Logo from "../Elements/Logo";
import { FaHome } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { TbDropletSearch } from "react-icons/tb";
import { FcDataSheet } from "react-icons/fc";

const Navbar = () => {
  const menus = [
    {
      id: "home",
      link: "/",
      icon: <FaHome size={23} />,
      label: "Home",
    },
    {
      id: "features",
      link: "/balance",
      icon: <MdOutlineFeaturedPlayList size={23} />,
      label: "Features",
    },

    {
      id: "predictions",
      link: "/expense",
      icon: <TbDropletSearch size={24} />,
      label: "Predictions",
    },
    {
      id: "goal",
      link: "/goal",
      icon: <FcDataSheet size={24} />,
      label: "Visualisation",
    },
  ];

  return (
    <div className="bg-[#202020]">
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <NavLink to="/" className="flex justify-center mb-10">
            <Logo variant="text-primary text-sm sm:text-2xl" />
          </NavLink>
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>
        <div className="mt-10 text-left text-special-bg2">
          <img src="/images/aqualogo.png" alt="AquaSense Logo" className="w-12 h-12 mb-4" />
          <p className="font-bold text-base">AquaSense</p>
          <p className="text-xs">© 2022 Aquasense, Inc. All rights reserved.</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
