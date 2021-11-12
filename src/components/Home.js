import React from "react";
import "./style.css";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const data2 = [
  {
    title: "",
    img: "",
    price: "",
    id: "",
  },
  {
    title: "",
    img: "",
    price: "",
    id: "",
  },
];

const data = [
  {
    details:
      " Lorem ipsum dolor sit amet, consecter asipicing elit. Vitae   aenaen tincidant pretium quam id. Massa leo",

    title: "CORPORATE & COMPLIANCE",
    logo: "/assets/logo6.svg",
  },
  {
    details:
      " Lorem ipsum dolor sit amet, consecter asipicing elit. Vitae   aenaen tincidant pretium quam id. Massa leo",

    title: "LABOR & EMPLOYMENT",
    logo: "/assets/logo7.svg",
  },
  {
    details:
      " Lorem ipsum dolor sit amet, consecter asipicing elit. Vitae   aenaen tincidant pretium quam id. Massa leo",

    title: "INTELLECTUAL PROPERTY",
    logo: "/assets/logo8.svg",
  },
  {
    details:
      " Lorem ipsum dolor sit amet, consecter asipicing elit. Vitae   aenaen tincidant pretium quam id. Massa leo",

    title: "MERGERS & ACQUISITION",
    logo: "/assets/logo9.svg",
  },
  {
    details:
      " Lorem ipsum dolor sit amet, consecter asipicing elit. Vitae   aenaen tincidant pretium quam id. Massa leo",

    title: "BUSINESS TAXATION",
    logo: "/assets/logo10.svg",
  },
  {
    details:
      " Lorem ipsum dolor sit amet, consecter asipicing elit. Vitae   aenaen tincidant pretium quam id. Massa leo",

    title: "DISPUTE RESOLUTION",
    logo: "/assets/logo11.svg",
  },
];
export default function Home() {
  return (
    <div className="bg-Base">
      <div>
        {/* hero section starting */}
        <div className="home-hero ">
          <div className="  px-3 xl:flex lg:w-1/10 xl:mt-16 xl:m-auto xl:justify-between">
            <div className="xl:mt-14 lg:w-hero-width-bg  ">
              <h3 className="text-xl carter ml-10  relative text-white mt-9 tracking-widest">
                JOHN CARTER
              </h3>
              <h1
                className="text-4xl xl:pr-20 xl:mt-8 xl:leading-12 xl:text-large  py-4 pb-5 text-white"
                style={{ fontFamily: "Playfair Display" }}
              >
                The #1 Lawyer in Los Angeles, CA
              </h1>
              <p className="text-lg xl:mt-6  text-white opacity-80 pr-7 tracking-wide">
                Lorem ipsum dolor sit omet, consectetur adipiscing elit. Vitae
                aenean tincidant pretium quam id. Massa tincidant pretium quam
                id. Massa
              </p>
              <div className="flex xl:grid xl:grid-cols-2 xl:gap-5 xl:w-3/4  flex-col mt-6 xl:mt-10 xl:flex-row ">
                <button className="bg-Primary transition duration-500 ease-in-out transform hover:scale-95  xl:w-full text-white text-base p-7">
                  CONTACT ME
                </button>
                <button className="p-5 border transition duration-500 ease-in-out transform hover:scale-95 hover:bg-Primary hover:border-opacity-0  xl:w-full  text-white text-base xl:mt-0 mt-3">
                  CASE RESULTS
                </button>
              </div>
            </div>

            <div className="mt-8 xl:mt-16  ">
              <img src="/assets/lawyerPicture.jpeg" alt="lawyer" />
            </div>
          </div>
        </div>
        {/* hero section ending */}
        {/* awards section starting */}
        <div className="bg-white px-3 pt-32 xl:pt-48 xl:pb-44 bg-Neutral-100 pb-14 -mt-20">
          <div className="lg:flex xl:items-center xl:justify-between  xl:w-1/10 xl:m-auto">
            <h1 className="text-black opacity-80 text-xl lg:text-2xl tracking-wider mb-4">
              AWARDS &<br /> RECOGNITIONS
            </h1>
            <div className="flex justify-between  xl:w-9/12">
              <img
                className="w-1/5 xl:w-40 lg:h-40"
                src="/assets/logo2.png"
                alt="logo"
              />
              <img
                className="w-1/5 xl:w-40 lg:h-40"
                src="/assets/logo1.png"
                alt="logo"
              />
              <img
                className="w-1/5 xl:w-40 lg:h-40"
                src="/assets/logo3.png"
                alt="logo"
              />
              <img
                className="w-1/5 xl:w-40 lg:h-40"
                src="/assets/logo5.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        {/* awards section ending */}

        {/* practice area section starting */}
        <div className="px-3 xl:w-1/10 lg:m-auto lg:pt-24 lg:pb-36">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="">
              <p className="text-lg  carter ml-10  relative text-white mt-14 tracking-widest ">
                PRACTICE AREAS
              </p>
              <h1
                className="text-3xl xl:text-4xl mt-2 pb-5 text-white"
                style={{ fontFamily: "Playfair Display" }}
              >
                A range of Practice Areas
              </h1>
            </div>

            <button className="bg-Primary transition duration-500 ease-in-out transform hover:scale-95  lg:mt-8 w-full lg:w-44 lg:py-6  text-white text-sm p-4">
              CONTACT ME
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-12   mt-20 ">
            {data.map((item, i) => (
              <div
                key={i}
                className="border-b lg:border-0  border-opacity-40 pb-12 "
              >
                <img className="mb-8" src={item.logo} alt="logo" />
                <h1 className="text-white tracking-widest text-lg">
                  {item.title}
                </h1>
                <p className="text-base mt-2 text-white tracking-wider opacity-80">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* practice area section end */}

        {/* about area section starting */}
        <div className="bg-white pb-20 lg:pt-28 lg:pb-36 px-3 pt-5">
          <div className="lg:flex lg:justify-between  lg:flex-row-reverse xl:w-1/10 xl:m-auto ">
            <div className=" lg:w-2/5 lg:mt-8 ">
              <div className="border-b pb-8">
                <h2 className="text-lg carter ml-10  relative opacity-80 mt-14 tracking-widest">
                  ABOUT JOHN CARTER
                </h2>
                <h1
                  className="text-3xl lg:text-4xl  py-4 pb-5 opacity-80"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  A professional lawyer ready to assist you
                </h1>
                <p className="text-base tracking-wide opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipicint elit, justo,
                  euidemd frlsi, eros mi puris ins est. Vitae sodales tellu
                  vitae, tincidat in sed orci. Blandit parin posure dui vitae,
                  Nisi in in nam vivera librrta. Tincidubt viverra congue marbi
                  ut fermentr id
                </p>
              </div>
              <div className="pt-4 pb-5">
                <div className="flex py-4 items-end">
                  <img src="/assets/signature.svg" alt="sig" />
                  <div className="ml-4 mb-2">
                    <p className="text-lg text-black opacity-80 tracking-widest">
                      JOHN CARTER
                    </p>
                    <p className="text-sm tracking-widest text-Primary">
                      FOUNDER OF LAWYER
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 img-overlay lg:w-1/2 relative z-10">
              <div className="absolute h-full bg-Primary w-11/12"></div>
              <img
                className="w-11/12 ml-auto relative top-5 lg:top-8 "
                src="/assets/lawpic2.jpeg"
                alt="law"
              />
            </div>
          </div>
        </div>
        {/* about area section end */}
        {/* free consultation area section starting */}
        <div className="consultation-bg">
          <div className="px-3 pt-6  mt-8 lg:pt-28 lg:pb-28 pb-20 lg:w-1/10 lg:m-auto">
            <div className="lg:w-1/2">
              <h1
                className="text-2xl lg:text-4xl relative  py-4 pb-5 text-white opacity-95"
                style={{ fontFamily: "Playfair Display" }}
              >
                {" "}
                Get a Free Consultation
                <div className="absolute top-0 bg-Primary w-24 h-0.5"></div>
              </h1>
              <p className="text-base w-11/12 text-white opacity-70">
                {" "}
                euidemd frlsi, eros mi puris ins est. Vitae sodales tellu vitae,
                tincidat in sed orci. Blandit parin posure dui vitae, Nisi in in
              </p>
              <div className="flex flex-col mt-6 lg:flex-row">
                <button className="bg-Primary transition duration-500 ease-in-out transform hover:scale-95  lg:px-12  lg:mr-8  text-white text-sm p-6">
                  CONTACT ME
                </button>
                <button className="p-6 transition duration-500 ease-in-out transform hover:scale-95 hover:bg-Primary hover:border-opacity-0 border lg:px-12 text-white text-sm mt-4 lg:mt-0">
                  CASE RESULTS
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* free consultation area section end */}

        {/* case results section start */}
        <div className="bg-white lg:pb-20 lg:pt-20 px-3 pt-6">
          <div className="lg:w-1/10 lg:m-auto">
            <div className="pb-10 lg:flex lg:items-center lg:justify-between">
              <div>
                <p className="text-lg lg:text-xl carter ml-10  relative text-Neutral-800 mt-14 tracking-widest">
                  CASE RESULTS
                </p>
                <h1
                  className="text-2xl pr-20 lg:text-4xl  py-4 pb-5 "
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Great past results for our clients
                </h1>
              </div>

              <button className="border transition duration-500 ease-in-out transform hover:scale-95 hover:bg-Primary hover:border-opacity-0 hover:text-white border  lg:mt-8 lg:w-64 w-full tracking-wider border-gray-700 text-base p-5">
                BROWSE CASE RESULTS
              </button>
            </div>
            <div className="pb-8 lg:grid lg:grid-cols-2 lg:gap-10">
              {data2.map((item) => (
                <div key={Math.random() * 100} className="cursor-pointer group">
                  <div className=" overflow-hidden">
                    <img
                      src="/assets/img2.jpg"
                      className="group-hover:scale-110  transform transition ease-in-out duration-500"
                      alt="logo"
                    />
                  </div>
                  <div className="px-3 group-hover:-translate-y-6 transform transition duration-500 ease-in-out w-img-card-width lg:w-img-card-width-lg pb-8 lg:p-10 mb-4 pt-4 shadow-2xl -top-10 bg-white relative z-10 ">
                    <p className="text-lg carter ml-10  relative text-Primary tracking-widest">
                      $46,000,000
                    </p>
                    <h1 className="text-lg py-3 text-Neutral-800">
                      CORPORATE & COMPLIANCE
                    </h1>
                    <p className="text-base opacity-70">
                      Lorem ipsum dolor sit amet,cmsectectur asipsicing elit,
                      Purus gravida in ipsu in quia Metus ametet risus platea
                    </p>

                    <button className="mt-4 transition duration-500 ease-in-out group-hover:border-Primary group-hover:text-Primary tracking-wider border-gray-800 pb-1 text-base text-black opacity-90 border-b">
                      READ MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end of caestudies */}

        {/* start of resources */}
        <div className="px-3 pt-20 lg:pb-44 lg:pt-44 pb-20">
          <div className="lg:w-1/10 lg:m-auto">
            <div className="lg:flex lg:items-center lg:mb-10 lg:justify-between">
              <div>
                <h3 className="text-lg lg:text-xl lg:mb-3 carter ml-10  relative text-white opacity-80 tracking-widest">
                  RESOURCES
                </h3>
                <h1
                  className="text-2xl lg:text-4xl  py-4 text-white"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Browse our Resource Center
                </h1>
              </div>

              <button className="w-full p-6 transition duration-500 ease-in-out transform hover:scale-95 hover:bg-Primary hover:border-opacity-0 lg:mt-2 lg:w-64  text-base border border-gray-100 text-white opacity-80">
                ALL ARTICLES
              </button>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-10">
              <div className="mt-12 lg:mt-0 group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="h-80 w-full object-cover group-hover:scale-110  transform transition ease-in-out duration-500"
                    src="/assets/img3.jpg"
                    alt="logo"
                  />
                </div>

                <div className="flex justify-between py-7 border-b border-opacity-80">
                  <p className="text-base text-Primary text-white opacity-80tracking-widest">
                    RESOURCE
                  </p>
                  <p className="text-base text-white opacity-80tracking-widest">
                    JANUARY 14, 2021
                  </p>
                </div>
                <div>
                  <h1 className="text-white text-lg group-hover:text-Primary transition duration-500 ease-in-out tracking-widest opacity-90 py-5">
                    8 TIPS IN CHOOSING THE RIGHT LAW FIRM FOR YOUR CASE AND
                    NEEDS
                  </h1>
                  <p className="text-base text-white opacity-80">
                    {" "}
                    Lorem ipsum dolor sit amet,cmsectectur asipsicing elit,
                    Purus gravida in ipsu in quia Metus ametet risus platea
                  </p>
                  <button className="border-b-2 group-hover:text-Primary transition duration-500 ease-in-out group-hover:border-Primary text-base text-white mt-5 pb-1">
                    READ MORE
                  </button>
                </div>
              </div>
              <div className="mt-14 lg:mt-0 group">
                <div className="overflow-hidden">
                  <img
                    className="h-80 w-full object-cover group-hover:scale-110  transform transition ease-in-out duration-500"
                    src="/assets/img3.jpg"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-between py-7 border-b border-opacity-80">
                  <p className="text-base text-Primary text-white opacity-80tracking-widest">
                    RESOURCE
                  </p>
                  <p className="text-base text-white opacity-80tracking-widest">
                    JANUARY 14, 2021
                  </p>
                </div>
                <div>
                  <h1 className="text-white group-hover:text-Primary transition duration-500 ease-in-out text-lg tracking-widest opacity-90 py-5">
                    8 TIPS IN CHOOSING THE RIGHT LAW FIRM FOR YOUR CASE AND
                    NEEDS
                  </h1>
                  <p className="text-base text-white opacity-80">
                    {" "}
                    Lorem ipsum dolor sit amet,cmsectectur asipsicing elit,
                    Purus gravida in ipsu in quia Metus ametet risus platea
                  </p>
                  <button className="border-b-2 group-hover:text-Primary transition duration-500 ease-in-out group-hover:border-Primary  text-base text-white mt-5 pb-1">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of resources */}

        {/* start of testimonials section */}
        <div className="bg-Neutral-200 pt-20 pb-20 px-3">
          <div className="lg:w-1/10 lg:m-auto lg:flex lg:justify-between ">
            <div className="lg:w-5/12 lg:mt-5">
              <h3 className="text-lg lg:mb-4 lg:text-xl carter ml-10  relative text-black opacity-80 tracking-widest">
                TESTIMONIALS
              </h3>
              <h1
                className="text-2xl lg:text-5xl pt-2 pb-4 text-black"
                style={{ fontFamily: "Playfair Display" }}
              >
                Hear what our past clients say
              </h1>
              <p className="text-base lg:my-4 text-black opacity-70">
                {" "}
                Lorem ipsum dolor sit amet,cmsectectur asipsicing elit, Purus
                gravida in ipsu in quia Metus ametet risus platea
              </p>
              <button className="w-full  transition duration-500 ease-in-out transform hover:scale-95  mt-5 p-6 text-base border bg-Primary text-white ">
                CONTACT ME
              </button>
            </div>
            <div className="bg-white lg:w-1/2 shadow-2xl mt-7 lg:mt-0 flex flex-col  lg:py-16 lg:px-10 px-5 py-10">
              <p className="text-base ml-5 w-full pr-10 tracking-wide relative  text-black opacity-80">
                {" "}
                "Lorem ipsum dolor sit amet,cmsectectur asipsicing elit, Purus
                gravida in ipsu in quia Metus ametet risus platea Lorem ipsum
                gravida in ipsu in quia Metus ametet risus platea Lorem ipsum
                gravida in ipsu in quia Metus ametet risus platea Lorem ipsum"
                <div className="absolute -left-5  bg-Primary w-0.5 h-full top-0"></div>
              </p>
              <div className="flex items-center pt-8 py-4 ml-3">
                <figure>
                  <img
                    className="w-20 h-20 rounded-full"
                    src="/assets/avatar.jpg"
                    alt="avatar"
                  />
                </figure>
                <div className="ml-4">
                  <h2 className="text-base tracking-wider">ANDREW MOORE</h2>
                  <h2 className="text-base tracking-wider text-Primary">
                    CEO AT FIRST VENTURES
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of testimonials section */}

        {/* start of lawyer section */}
        <div className="bg-Base pt-10 pb-12 lg:py-20 border-b border-opacity-40 px-3">
          <div className="lg:flex lg:justify-between lg:w-1/10 lg:m-auto ">
            <div className="lg:w-5/12 lg:mt-7">
              <figure>
                <img src="/assets/navlogo.svg" alt="logo" />
              </figure>
              <p className="text-base text-white opacity-80 py-4">
                Lorem ipsum dolor sit amet, consecter adispicing eeit, Feugiat
                sed fsmes curseus
              </p>
            </div>
            <div className=" lg:w-2/5">
              <h2 className="text-lg mt-5 font-bold text-white tracking-wider">
                SUBSCRIBE TO MY NEWSLETTER
              </h2>
              <div className="lg:flex lg:items-center lg:mt-3 lg:hover:border-Primary  lg:border">
                {/* <button className="text-white lg:p-2 opacity-80 p-5 bg-red-100 text-left text-base my-3 lg:my-0 w-full lg:px-28  border tracking-wide">
                  WHAT'S YOUR EMAIL?
                </button> */}
                <input
                  className="p-5 lg:outline-none focus:outline-none focus:ring-1 text-Primary lg:focus:ring-0 focus:ring-Primary focus:border-transparent w-full lg:w-9/12 lg:border-0 border my-3  lg:p-2.5 text-white opacity-80 bg-transparent"
                  type="text"
                  placeholder="WHAT'S YOUR EMAIL?"
                />
                <button className="text-white transition duration-500 ease-in-out transform hover:scale-95   lg:mr-3 lg:w-2/5  bg-Primary p-5  lg:p-1 lg:py-3 text-base w-full ">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of lawyer section */}
        <div className="pt-12 px-3 lg:py-32 border-b pb-14 border-opacity-40">
          <div className="lg:w-1/10 cursor-pointer   lg:m-auto lg:flex lg:justify-between">
            <div>
              <h1 className="text-white tracking-widest mb-4 text-lg">MENU</h1>
              <ul className="text-white tracking-widest text-sm opacity-70">
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">HOME</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">ABOUT</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">CONTACT</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">BLOG</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">BLOG POST</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">PACKAGES</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">PACKAGES SINGLE</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">CASE RESULTS</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">SINGLEESULTS</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">PRACTICE AREAS</li>
              </ul>
            </div>
            <div className="mt-14 lg:mt-0">
              <h1 className="text-white tracking-widest mb-4 text-lg">
                UTILITY PAGES
              </h1>
              <ul className="text-white  text-sm tracking-widest opacity-70">
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">START HERE</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">STYLE GUIDE</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">404 NOT FOUND</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out"> PASSWORD PROTECTED</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">LICENSES</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">CHANGELOG</li>
              </ul>
            </div>
            <div className="mt-14  lg:mt-0">
              <h1 className="text-white tracking-widest mb-4  text-lg">
                CONTACT
              </h1>
              <ul className="text-white text-sm tracking-widest opacity-70">
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">CONTACT@LAWYER.COM</li>
                <li className="mb-3 hover:text-Primary transition duration-500 ease-in-out">(487) 806 - 7204</li>
                <li className="mb-3 pr-10 hover:text-Primary transition duration-500 ease-in-out">
                  {" "}
                  FINANCIAL DISTRICT, NEW YORK, NY 10006, USA
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* start of footer section */}
        <div className="pt-5 pb-5 px-3">
          <div className="lg:flex lg:w-1/10 lg:m-auto lg:justify-between lg:items-center">
            <div className="text-white text-xl cursor-pointer  py-5 lg:w-1/5  w-2/4 justify-between flex opacity-60">
              <FaFacebookF className="transition  duration-500 ease-in-out hover:-translate-y-1 transform hover:text-Primary" />
              <AiOutlineTwitter className="transition duration-500 ease-in-out hover:-translate-y-1 transform hover:text-Primary" />
              <AiOutlineInstagram className="transition duration-500 ease-in-out hover:-translate-y-1 transform hover:text-Primary" />
              <FaLinkedinIn className="transition duration-500 ease-in-out hover:-translate-y-1 transform hover:text-Primary" />
              <AiFillYoutube className="transition duration-500 ease-in-out hover:-translate-y-1 transform hover:text-Primary" />
              <FaTelegramPlane className="transition duration-500 ease-in-out hover:-translate-y-1 transform hover:text-Primary" />
            </div>
            <p className="text-xs lead-10 tracking-wider  text-white opacity-80">
              COPYRIGHT &copy; LAWYER | DESIGNED BY{" "}
              <span className="text-Primary"> BRIX TEMPLATES- </span> POWERED BY
              <span className="text-Primary"> REACT</span>
            </p>
          </div>
        </div>

        {/* end of footer section */}
      </div>
    </div>
  );
}
