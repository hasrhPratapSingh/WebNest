import earth from "../assets/earth.jpg";
export const Main = () => {
  return (
    <div
      className=" flex-1 pt-20 w-full"
      style={{
        backgroundImage: `url(${earth})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid place-content-center h-64 md:h-80 lg:h-96 ">
        <div className="flex justify-evenly md:justify-center lg:justify-center text-xl md:text-3xl lg:text-4xl font-bold text-cyan-500 mb-3 md:mb-6 lg:mb-10 ">
          Your Digital Success Starts Here
        </div>
        <div className="flex justify-center md:justify-center lg:justify-center text-white pl-10 pr-10 text-xl text-center">
          At Webnest, we craft cutting-edge websites, dynamic mobile apps, and
          impactful brand identities that drive growth. Let’s build something
          amazing together!
        </div>
      </div>
    </div>
  );
};
