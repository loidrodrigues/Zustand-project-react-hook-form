import BannerImg from "../assets/Banner.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

export default function Banner() {
  return (
    <div className="flex justify-between w-[1000px] m-auto items-center mt-20 gap-14 ">
      <div>
        <img src={BannerImg} alt="" className="mix-blend-screen rounded-full" />
      </div>
      <div className="flex flex-col gap-5">
        <span className="">
          IA PROJECT -{" "}
          <span className="text-rose-500 font-bold italic">ZUSTAND</span>
        </span>
        <h1 className="text-5xl font-bold">
          Don't disregard it because it's cute, it has claws! Lots of time
        </h1>
        <p className="text-gray-300 font-thin">
          A small, fast, and scalable bearbones state management solution.
          Zustand has a comfy API based on hooks. It isn't boilerplatey or
          opinionated, but has enough convention to be explicit and flux-like.
        </p>
        <button className="bg-slate-900 text-white py-3 px-4 rounded border  cursor-pointer">
          Get Started
        </button>
        <div className="flex  items-center justify-between">
          <div className="flex gap-2 items-cente mt-2">
            <img src={img1} alt="" className="h-8 w-8 rounded-full" />
            <img src={img2} alt="" className="h-8 w-8 rounded-full" />
            <img src={img3} alt="" className="h-8 w-8 rounded-full" />
            <img src={img4} alt="" className="h-8 w-8 rounded-full" />
          </div>
          <p className="text-sm text-gray-400 mx-8 italic">
            Loid Lourenco R. Padre -{" "}
            <span className="text-rose-500 italic">2025</span>
          </p>
        </div>
      </div>
    </div>
  );
}
