import { anton } from "@/config/fonts";

export default function HeroSection() {
    return (
        <div className="relative bg-cover bg-center w-screen h-full py-50 drop-shadow-xl" style={{ backgroundImage: "url('/splash.png')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className={`${anton.className}relative z-10 flex flex-col items-center justify-center h-full text-center text-white`}>
                <p className="font-bold font-chonburi">
                    <span className="text-inherit text-5xl">Welcome to </span>
                    <span className="text-inherit text-5xl">Beam</span>
                    <span className="text-indigo-700 text-5xl">Addicts</span>
                    <span className="text-inherit text-5xl"> Gaming!</span>
                </p>
            </div>
        </div>
    );
}