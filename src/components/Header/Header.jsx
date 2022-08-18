import { memo } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
function Header() {
  return (
    <header className="h-[72px] font-bold flex items-center  py-[20px] lg:w-[70vw] mx-auto ">
      <Link to="/">
        <div className="flex items-center">
          <img
            className="w-[30px] inline-block translate-y-[1px]"
            src={logo}
            alt="logo"
          />
          <h1 className="text-[28px] text-white">Slept</h1>
        </div>
      </Link>
    </header>
  );
}

export default memo(Header);
