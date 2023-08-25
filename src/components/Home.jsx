import React, {useState} from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiSuitcaseBold } from "react-icons/pi";
import { SiMoleculer } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Home() {
const menus = [
  {name: "Projects", link:"/", icon:PiSuitcaseBold, margin:true},
  {name: "Modelisations", link:"/", icon:SiMoleculer},
  {name: "Team", link:"/", icon:RiTeamFill},
  {name: "Marketplace", link:"/", icon:GiEarthAfricaEurope}
]

const [open, setOpen] = useState(false);

  return (
    <>
      <div className="font-inter flex gap-6">
        <div className={`bg-white min-h-screen ${open ? "w-72" : "w-16"} duration-500 px-4 border-x-2`}>
          <div className="py-3 flex justify-end">
            <MdKeyboardDoubleArrowRight size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
          </div>
          <div>
              <div>
                <img src={logo} alt="logo sapiologie" className="w-6"/>
              </div>
              <h2>Sapiologie</h2>
          </div>
          <div className="mt-4 flex flex-col gap-4 realtive">
            {
              menus.map((menu) => (
              <Link to={menu.link} key="menu" className={` ${menu.margin && "mt-5"} flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md`}>
              <div>
                {React.createElement(menu.icon)}
              </div>
              <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu.name}</h2>
            </Link>
            ))
}
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold">hello</div>
      </div>
    </>
  );
}

export default Home;
