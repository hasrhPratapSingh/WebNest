import { useState } from "react";
import earth from "../assets/earth.jpg";

export const HomeMain = () => {
  const [clicked, setClicked] = useState<string[] | null>(null);

  const arr = [
    "Innovate. Design. Build. Scale.",
    "Trusted by startups and growing businesses for their IT solutions",
  ];

  return (
    <div
      className=" flex-1 pt-20 w-full"
      style={{
        backgroundImage: `url(${earth})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 grid place-content-center h-64 md:h-80 lg:h-96 ">
        <div className="flex justify-evenly md:justify-center lg:justify-center text-xl md:text-3xl lg:text-4xl font-bold text-cyan-500 mb-3 md:mb-6 lg:mb-10 ">
          Your Digital Success Starts Here
        </div>
        <div className="flex justify-center md:justify-center lg:justify-center text-white pl-10 pr-10 text-xl text-center">
          At Webnest, we craft cutting-edge websites, dynamic mobile apps, and
          impactful brand identities that drive growth. Let’s build something
          amazing together!
        </div>
      </div>
      <div className=" bg-white py-5 mb-15 md:mb-5 lg:mb-4 ">
        <div className="flex justify-center md:justify-center lg:justify-center text-xl md:text-3xl lg:text-4xl font-bold text-center pt-2">
          Who We Are
        </div>
        <div className="flex justify-center ">
          <p className="text-center max-w-lg md:max-w-xl lg:max-w-2xl px-4 py-4">
            Webnest is a technology-driven startup passionate about helping
            businesses establish a powerful digital presence. Whether you need a
            website, a custom mobile app, or a compelling brand identity, we
            bring expertise and creativity to the table.
          </p>
        </div>
        <div className="flex justify-center pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-center p-2">
          {clicked === null ? (
            <button
              className="px-4 py-2 bg-cyan-500 text-white rounded"
              onClick={() => setClicked(arr)}
            >
              Click Here
            </button>
          ) : (
            <div className="text-center">
              {clicked.map((item, index) => (
                <p key={index} className="text-lg text-gray-700 font-bold ">
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="relative z-1 flex flex-col items-center h-auto md:h-auto lg:h-auto pt-1 pb-10">
        <div className="text-xl md:text-3xl lg:text-4xl font-bold text-cyan-500 mb-6 lg:mb-10 mt-10">
          What We Offer
        </div>
        <div className="text-white px-6 text-lg text-center max-w-screen-lg">
          At Webnest, we specialize in delivering top-notch digital solutions
          that bring brands to life. Explore our range of services tailored to
          meet your business needs:
          <ul className="pt-5 space-y-5">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 leading-6 text-white text-sm md:text-base lg:text-lg">
                <span className="font-bold">Website Development -</span>{" "}
                Responsive, fast, and SEO-friendly websites.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 leading-6 text-white text-sm md:text-base lg:text-lg">
                <span className="font-bold">App Development -</span> Scalable
                mobile applications with a seamless user experience.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 leading-6 text-white text-sm md:text-base lg:text-lg">
                <span className="font-bold">Branding & Design -</span> Creative
                logo design and brand identity solutions.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-stone-300 py-2 justify-between text-center py-4 md:py-5 lg:py-6 font-bold text-xl md:text-3xl lg:text-4xl">
        Why Choose Webnest?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="bg-stone-400 p-5 flex flex-col items-center justify-center text-center hover:bg-[#f8f8f8] transition duration-300 h-36 md:h-32 lg:h-48">
          <div className="pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z" />
            </svg>
          </div>
          <div className="font-bold pb-2">Expert Team </div>
          <div>Experienced professionals committed to excellence.</div>
        </div>
        <div className="bg-stone-500 p-5 flex flex-col items-center justify-center text-center hover:bg-[#f8f8f8] transition duration-300 h-36 md:h-32 lg:h-48">
          <div className="pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path d="M6 6v4h4V6H6Z" />
              <path
                fill-rule="evenodd"
                d="M5.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3a2 2 0 0 0 2 2v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13a2 2 0 0 0 2-2h1.25a.75.75 0 0 0 0-1.5H13v-.75h1.25a.75.75 0 0 0 0-1.5H13V6.5h1.25a.75.75 0 0 0 0-1.5H13a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-.75V1.75a.75.75 0 0 0-1.5 0V3H6.5V1.75A.75.75 0 0 0 5.75 1ZM11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="font-bold pb-2">Modern Technologies </div>
          <div>We use the latest tools & frameworks.</div>
        </div>
        <div className="bg-stone-600 p-5 flex flex-col items-center justify-center text-center hover:bg-[#f8f8f8] transition duration-300 h-36 md:h-32 lg:h-48">
          <div className="pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M1.75 2a.75.75 0 0 0 0 1.5H2V9a2 2 0 0 0 2 2h.043l-1.005 3.013a.75.75 0 0 0 1.423.474L4.624 14h6.752l.163.487a.75.75 0 0 0 1.423-.474L11.957 11H12a2 2 0 0 0 2-2V3.5h.25a.75.75 0 0 0 0-1.5H1.75Zm8.626 9 .5 1.5H5.124l.5-1.5h4.752Zm1.317-5.833a.75.75 0 0 0-.892-1.206 8.789 8.789 0 0 0-2.465 2.814L7.28 5.72a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l1.47-1.47L8.028 8.59a.75.75 0 0 0 1.228-.255 7.275 7.275 0 0 1 2.437-3.167Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="font-bold pb-2">Tailored Solutions </div>{" "}
          <div>Every project is customized to meet your needs.</div>
        </div>
        <div className="bg-stone-700 p-5 flex flex-col items-center justify-center text-center hover:bg-[#f8f8f8] transition duration-300 h-36 md:h-32 lg:h-48 ">
          <div className="pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="font-bold pb-2">On-Time Delivery </div> We respect
          deadlines and deliver quality work.
        </div>
      </div>
      <div className="bg-stone-300 py-2 justify-between text-center py-4 md:py-5 lg:py-6 font-bold text-xl md:text-3xl lg:text-4xl text-green-700">
        We turn ideas into reality—efficiently and beautifully.
      </div>
    </div>
  );
};
