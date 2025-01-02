export default function HeroSection() {
    return (
        <div className="relative bg-cover bg-center w-screen h-full m-0 p-0 drop-shadow-xl" style={{ backgroundImage: "url('/splash.png')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <p className="font-bold font-chonburi">
                    <span className="text-inherit text-3xl">Welcome to </span>
                    <span className="text-inherit text-3xl">Beam</span>
                    <span className="text-indigo-700 text-3xl">Addicts</span>
                    <span className="text-inherit text-3xl"> Gaming!</span>
                </p>
            </div>
        </div>
    );
}