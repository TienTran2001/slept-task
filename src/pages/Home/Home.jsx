import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GiStabbedNote } from "react-icons/gi";

import { audioBack } from "../../assets/index";

import { banner } from "../../assets";
function Home() {
  const [text, setText] = useState(true);
  useEffect(() => {
    document.title = "Slept";
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setText((prev) => !prev);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log(text);
  return (
    <section className="mt-[10px] text-white md:text-center">
      <audio className="hidden" src={audioBack} autoPlay />
      <div className="text-[34px] font-extrabold ">
        Manage your <br />
        team & everything with{" "}
        <span className="underline text-purple-800">slept</span>
      </div>
      {/* icon */}
      <div className="mx-auto text-center mb-[40px] mt-[40px] ">
        <GiStabbedNote className="text-[100px] mx-auto " />
      </div>
      <p className=" mb-[30px] mt-[10px] text-[18px] font-normal text-justify w-[80%] md:text-center md:mx-auto">
        {text ? (
          <>
            Chúc bạn một ngày tốt lành, cảm ơn vì ghé qua con web nhỏ này của
            mình 💝
            {/* When you're overwhelmed by the amount of work you have on your
            plate, stop and rethink */}
          </>
        ) : (
          <>
            Công nghệ sử dụng React, Tailwind, React icon, React router v6,
            React Memo
            <br />
            hook: useState, useEffect, useRef
          </>
        )}
      </p>
      <button className="absolute bottom-[25vh] translate-x-[50%] right-[50%] border border-purple-600 block mx-auto px-[30px] py-[15px] bg-wlight rounded-[15px] text-white text-[20px] font-semibold md:mt-[60px]">
        <Link to="/todos">Let's started</Link>
      </button>
    </section>
  );
}

export default Home;
