import React from "react";
import "./style.css";

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
        <div className=" px-3">
          <h3 className="text-lg carter ml-10  relative text-white mt-9 tracking-widest">
            JOHN CARTER
          </h3>
          <h1
            className="text-4xl  py-4 pb-5 text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            The #1 Lawyer in Los Angeles, CA
          </h1>
          <p className="text-lg text-white opacity-80 pr-7 tracking-wide">
            Lorem ipsum dolor sit omet, consectetur adipiscing elit. Vitae
            aenean tincidant pretium quam id. Massa
          </p>
          <div className="flex flex-col mt-6">
            <button className="bg-Primary text-white text-base p-5">
              CONTACT ME
            </button>
            <button className="p-5 border  text-white text-base mt-3">
              CASE RESULTS
            </button>
          </div>
          <div className="mt-8">
            <img src="/assets/lawyerPicture.jpeg" alt="lawyer" />
          </div>
        </div>
        {/* hero section ending */}
        {/* awards section starting */}
        <div className="bg-white px-3 pt-32 pb-14 -mt-20">
          <h1 className="text-Neutral-800 text-xl tracking-wider mb-4">
            AWARDS &<br /> RECOGNITIONS
          </h1>
          <div className="flex justify-between">
            <img className="w-1/5" src="/assets/logo2.png" alt="logo" />
            <img className="w-1/5" src="/assets/logo1.png" alt="logo" />
            <img className="w-1/5" src="/assets/logo3.png" alt="logo" />
            <img className="w-1/5" src="/assets/logo5.png" alt="logo" />
          </div>
        </div>
        {/* awards section ending */}

        {/* practice area section starting */}
        <div className="px-3">
          <p className="text-lg carter ml-10  relative text-white mt-14 tracking-widest">
            PRACTICE AREAS
          </p>
          <h1
            className="text-3xl mt-2 pb-5 text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            A range of Practice Areas
          </h1>
          <button className="bg-Primary  w-full text-white text-sm p-4">
            CONTACT ME
          </button>
          <div className="grid gap-12 mt-20 ">
            {data.map((item, i) => (
              <div key={i} className="border-b border-opacity-40 pb-12 ">
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
        <div className="bg-white pb-20 px-3 pt-5">
          <div className="border-b pb-8">
            <h2 className="text-lg carter ml-10  relative opacity-80 mt-14 tracking-widest">
              ABOUT JOHN CARTER
            </h2>
            <h1
              className="text-3xl  py-4 pb-5 opacity-80"
              style={{ fontFamily: "Playfair Display" }}
            >
              A professional lawyer ready to assist you
            </h1>
            <p className="text-base tracking-wide opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipicint elit, justo,
              euidemd frlsi, eros mi puris ins est. Vitae sodales tellu vitae,
              tincidat in sed orci. Blandit parin posure dui vitae, Nisi in in
              nam vivera librrta. Tincidubt viverra congue marbi ut fermentr id
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
            <div className="mt-10 img-overlay relative z-10">
              <div className="absolute h-full bg-Primary w-11/12"></div>
              <img
                className="w-11/12 ml-auto relative top-5 "
                src="/assets/lawpic2.jpeg"
                alt="law"
              />
            </div>
          </div>
        </div>
        {/* about area section end */}
        {/* free consultation area section starting */}
        <div className="px-3 pt-6 mt-8 pb-20">
          <h1
            className="text-2xl relative  py-4 pb-5 text-white opacity-95"
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
          <div className="flex flex-col mt-6">
            <button className="bg-Primary text-white text-sm p-5">
              CONTACT ME
            </button>
            <button className="p-5 border  text-white text-sm mt-4">
              CASE RESULTS
            </button>
          </div>
        </div>
        {/* free consultation area section end */}

        {/* case results section start */}
        <div className="bg-white px-3 pt-6">
          <div className="pb-10">
            <p className="text-lg carter ml-10  relative text-Neutral-800 mt-14 tracking-widest">
              CASE RESULTS
            </p>
            <h1
              className="text-2xl pr-20  py-4 pb-5 "
              style={{ fontFamily: "Playfair Display" }}
            >
              Great past results for our clients
            </h1>
            <button className="border w-full tracking-wider border-gray-700 text-base p-5">
              BROWSE CASE RESULTS
            </button>
          </div>
          <div className="pb-8">
            {data2.map((item) => (
              <div key={Math.random() * 100}>
                <img src="/assets/img2.jpg" alt="logo" />
                <div
                  style={{ width: "97%" }}
                  className="px-3 pb-8 mb-4 pt-4 shadow-2xl -top-10 bg-white relative z-10 "
                >
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

                  <button className="mt-4 tracking-wider border-gray-800 pb-1 text-base text-black opacity-90 border-b">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end of caestudies */}

        {/* start of resources */}
        <div className="px-3 pt-20 pb-20">
          <div>
            <h3 className="text-lg carter ml-10  relative text-white opacity-80 tracking-widest">
              RESOURCES
            </h3>
            <h1
              className="text-2xl  py-4 text-white"
              style={{ fontFamily: "Playfair Display" }}
            >
              Browse our Resource Center
            </h1>
            <button className="w-full p-5 text-base border border-gray-100 text-white opacity-80">
              ALL ARTICLES
            </button>
          </div>
          <div className="mt-12">
            <img
              className="h-64 w-full object-cover"
              src="/assets/img3.jpg"
              alt="logo"
            />
            <div className="flex justify-between py-5 border-b border-opacity-80">
              <p className="text-base text-Primary text-white opacity-80tracking-widest">
                RESOURCE
              </p>
              <p className="text-base text-white opacity-80tracking-widest">
                JANUARY 14, 2021
              </p>
            </div>
            <div>
              <h1 className="text-white text-lg tracking-widest opacity-90 py-5">
                8 TIPS IN CHOOSING THE RIGHT LAW FIRM FOR YOUR CASE AND NEEDS
              </h1>
              <p className="text-base text-white opacity-80">
                {" "}
                Lorem ipsum dolor sit amet,cmsectectur asipsicing elit, Purus
                gravida in ipsu in quia Metus ametet risus platea
              </p>
              <button className="border-b-2 text-base text-white mt-5 pb-1">
                READ MORE
              </button>
            </div>
          </div>
          <div className="mt-14">
            <img
              className="h-64 w-full object-cover"
              src="/assets/img3.jpg"
              alt="logo"
            />
            <div className="flex justify-between py-5 border-b border-opacity-80">
              <p className="text-base text-Primary text-white opacity-80tracking-widest">
                RESOURCE
              </p>
              <p className="text-base text-white opacity-80tracking-widest">
                JANUARY 14, 2021
              </p>
            </div>
            <div>
              <h1 className="text-white text-lg tracking-widest opacity-90 py-5">
                8 TIPS IN CHOOSING THE RIGHT LAW FIRM FOR YOUR CASE AND NEEDS
              </h1>
              <p className="text-base text-white opacity-80">
                {" "}
                Lorem ipsum dolor sit amet,cmsectectur asipsicing elit, Purus
                gravida in ipsu in quia Metus ametet risus platea
              </p>
              <button className="border-b-2 text-base text-white mt-5 pb-1">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        {/* end of resources */}

        {/* start of testimonials section */}
        <div className="bg-Neutral-200 pt-20 pb-20 px-3">
          <div>
            <h3 className="text-lg carter ml-10  relative text-black opacity-80 tracking-widest">
              TESTIMONIALS
            </h3>
            <h1
              className="text-2xl pt-2 pb-4 text-black"
              style={{ fontFamily: "Playfair Display" }}
            >
              Hear what our past clients say
            </h1>
            <p className="text-base text-black opacity-70">
              {" "}
              Lorem ipsum dolor sit amet,cmsectectur asipsicing elit, Purus
              gravida in ipsu in quia Metus ametet risus platea
            </p>
            <button className="w-full mt-5 p-4 text-base border bg-Primary text-white ">
              CONTACT ME
            </button>
          </div>
          <div className="bg-white shadow-2xl mt-7 flex flex-col  px-5 py-10">
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
        {/* end of testimonials section */}

        {/* start of lawyer section */}
        <div className="bg-Base pt-10 pb-8 border-b border-opacity-40 px-3">
          <figure>
            <img src="/assets/navlogo.svg" alt="logo" />
          </figure>
          <p className="text-base text-white opacity-80 py-4">
            Lorem ipsum dolor sit amet, consecter adispicing eeit, Feugiat sed
            fsmes curseus
          </p>
          <h2 className="text-lg mt-5 font-bold text-white tracking-wider">
            SUBSCRIBE TO MY NEWSLETTER
          </h2>
          <button className="text-white opacity-80 p-5 text-left text-base my-3 w-full border tracking-wide">
            WHAT'S YOUR EMAIL?
          </button>
          <button className="text-white bg-Primary p-5 text-base w-full ">
            SUBSCRIBE
          </button>
        </div>
        {/* end of lawyer section */}
        <div className="pt-10 px-3">
          <div>
            <h1 className="text-white tracking-widest mb-4 text-lg">MENU</h1>
            <ul className="text-white tracking-widest text-base opacity-70">
              <li className="mb-2">HOME</li>
              <li className="mb-2">ABOUT</li>
              <li className="mb-2">CONTACT</li>
              <li className="mb-2">BLOG</li>
              <li className="mb-2">BLOG POST</li>
              <li className="mb-2">PACKAGES</li>
              <li className="mb-2">PACKAGES SINGLE</li>
              <li className="mb-2">CASE RESULTS</li>
              <li className="mb-2">SINGLEESULTS</li>
              <li className="mb-2">PRACTICE AREAS</li>
            </ul>
          </div>
          <div className="mt-10">
            <h1 className="text-white tracking-widest mb-4 text-lg">
              UTILITY PAGES
            </h1>
            <ul className="text-white  text-base tracking-widest opacity-70">
              <li className="mb-2">START HERE</li>
              <li className="mb-2">STYLE GUIDE</li>
              <li className="mb-2">404 NOT FOUND</li>
              <li className="mb-2"> PASSWORD PROTECTED</li>
              <li className="mb-2">LICENSES</li>
              <li className="mb-2">CHANGELOG</li>
            </ul>
          </div>
          <div className="mt-10">
            <h1 className="text-white tracking-widest mb-4  text-lg">
              CONTACT
            </h1>
            <ul className="text-white text-base tracking-widest opacity-70">
              <li className="mb-2">CONTACT@LAWYER.COM</li>
              <li className="mb-2">(487) 806 - 7204</li>
              <li className="mb-2">
                {" "}
                FINANCIAL DISTRICT, NEW YORK, NY 10006, USA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
