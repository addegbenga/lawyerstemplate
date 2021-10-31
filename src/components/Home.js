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
          <p className="text-sm carter ml-10  relative text-white mt-7 tracking-widest">
            JOHN CARTER
          </p>
          <h1
            className="text-3xl  py-4 pb-5 text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            The #1 Lawyer in Los Angeles, CA
          </h1>
          <p className="text-sm text-Neutral-500 pr-7 tracking-wide">
            Lorem ipsum dolor sit omet, consectetur adipiscing elit. Vitae
            aenean tincidant pretium quam id. Massa
          </p>
          <div className="flex flex-col mt-6">
            <button className="bg-Primary text-white text-sm p-3">
              CONTACT ME
            </button>
            <button className="p-3 border  text-white text-sm mt-3">
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
          <h1 className="text-Neutral-800 text-lg tracking-wider mb-4">
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
          <p className="text-sm carter ml-10  relative text-white mt-14 tracking-widest">
            PRACTICE AREAS
          </p>
          <h1
            className="text-2xl mt-2 pb-5 text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            A range of Practice Areas
          </h1>
          <button className="bg-Primary  w-full text-white text-sm p-3">
            CONTACT ME
          </button>
          <div className="grid gap-14 mt-20 ">
            {data.map((item, i) => (
              <div key={i} className="border-b pb-5 ">
                <img className="mb-4" src={item.logo} alt="logo" />
                <h1 className="text-white tracking-wide text-lg">
                  {item.title}
                </h1>
                <p className="text-sm text-white tracking-wider opacity-80">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* practice area section end */}

        {/* about area section starting */}
        <div className="bg-white pb-20 px-3 pt-5">
          <div className="border-b pb-4">
            <p className="text-sm carter ml-10  relative text-Neutral-800 mt-14 tracking-widest">
              ABOUT JOHN CARTER
            </p>
            <h1
              className="text-xl  py-4 pb-5 text-Neutral-800"
              style={{ fontFamily: "Playfair Display" }}
            >
              A professional lawyer ready to assist you
            </h1>
            <p className="text-sm tracking-wide opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipicint elit, justo,
              euidemd frlsi, eros mi puris ins est. Vitae sodales tellu vitae,
              tincidat in sed orci. Blandit parin posure dui vitae, Nisi in in
              nam vivera librrta. Tincidubt viverra congue marbi ut fermentr id
            </p>
          </div>
          <div className="pt-4">
            <div className="flex items-end">
              <img src="/assets/signature.svg" alt="sig" />
              <div className="ml-4 mb-2">
                <p className="text-sm text-Neutral-800 tracking-widest">
                  JOHN CARTER
                </p>
                <p className="text-sm text-Primary">FOUNDER OF LAWYER</p>
              </div>
            </div>
            <div className="mt-14 img-overlay relative z-10">
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
        <div className="px-3 mt-8 pb-14">
          <h1
            className="text-xl  py-4 pb-5 text-white opacity-90"
            style={{ fontFamily: "Playfair Display" }}
          >
            {" "}
            Get a Free Consultation
          </h1>
          <p className="text-sm text-white opacity-80">
            {" "}
            euidemd frlsi, eros mi puris ins est. Vitae sodales tellu vitae,
            tincidat in sed orci. Blandit parin posure dui vitae, Nisi in in
          </p>
          <div className="flex flex-col mt-6">
            <button className="bg-Primary text-white text-sm p-3">
              CONTACT ME
            </button>
            <button className="p-3 border  text-white text-sm mt-3">
              CASE RESULTS
            </button>
          </div>
        </div>
        {/* free consultation area section end */}

        {/* case results section start */}
        <div className="bg-white px-3 pt-6">
          <div className="pb-10">
            <p className="text-sm carter ml-10  relative text-Neutral-800 mt-14 tracking-widest">
              CASE RESULTS
            </p>
            <h1
              className="text-xl pr-20  py-4 pb-5 text-Neutral-800"
              style={{ fontFamily: "Playfair Display" }}
            >
              Great past results for our clients
            </h1>
            <button className="border w-full border-gray-700 text-sm p-3">
              BROWSE CASE RESULTS
            </button>
          </div>
          <div>
            {data2.map((item) => (
              <div key={Math.random() * 100}>
                <img src="/assets/img2.jpg" alt="logo" />
                <div className="px-3 pb-6 pt-4 shadow-lg -top-10 bg-white relative z-10 w-11/12">
                  <p className="text-lg carter ml-10  relative text-Primary tracking-widest">
                    $46,000,000
                  </p>
                  <h1 className="text-lg py-2 text-Neutral-800">
                    CORPORATE & COMPLIANCE
                  </h1>
                  <p className="text-sm opacity-80">
                    Lorem ipsum dolor sit amet,cmsectectur asipsicing elit,
                    Purus gravida in ipsu in quia Metus ametet risus platea
                  </p>

                  <button className="mt-4 border-gray-800 pb-1 text-sm text-Neutral-800 border-b">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end of caestudies */}

        {/* start of resources */}
        <div className="px-3 pb-20">
          <div>
            <p className="text-sm carter ml-10  relative text-white opacity-80 mt-14 tracking-widest">
              RESOURCES
            </p>
            <h1
              className="text-xl  py-4 pb-5 text-white"
              style={{ fontFamily: "Playfair Display" }}
            >
              Browse our Resource Center
            </h1>
            <button className="w-full p-3 text-sm border border-gray-100 text-white opacity-80">
              ALL ARTICLES
            </button>
          </div>
          <div className="mt-10">
            <img
              className="h-64 w-full object-cover"
              src="/assets/img3.jpg"
              alt="logo"
            />
            <div className="flex justify-between py-4 border-b border-opacity-80">
              <p className="text-sm text-Primary text-white opacity-80tracking-widest">
                RESOURCE
              </p>
              <p className="text-sm text-white opacity-80tracking-widest">
                JANUARY 14, 2021
              </p>
            </div>
            <div>
              <h1 className="text-white text-lg opacity-90 py-3">
                8 TIPS IN CHOOSING THE RIGHT LAW FIRM FOR YOUR CASE AND NEEDS
              </h1>
              <p className="text-sm text-white opacity-80">
                {" "}
                Lorem ipsum dolor sit amet,cmsectectur asipsicing elit, Purus
                gravida in ipsu in quia Metus ametet risus platea
              </p>
              <button className="border-b text-sm text-white mt-3 pb-1">
                READ MORE
              </button>
            </div>
          </div>
          <div className="mt-10">
            <img
              className="h-64 w-full object-cover"
              src="/assets/img3.jpg"
              alt="logo"
            />
            <div className="flex justify-between py-4 border-b border-opacity-80">
              <p className="text-sm text-Primary text-white opacity-80tracking-widest">
                RESOURCE
              </p>
              <p className="text-sm text-white opacity-80tracking-widest">
                JANUARY 14, 2021
              </p>
            </div>
            <div>
              <h1 className="text-white text-lg opacity-90 py-3">
                8 TIPS IN CHOOSING THE RIGHT LAW FIRM FOR YOUR CASE AND NEEDS
              </h1>
              <p className="text-sm text-white opacity-80">
                {" "}
                Lorem ipsum dolor sit amet,cmsectectur asipsicing elit, Purus
                gravida in ipsu in quia Metus ametet risus platea
              </p>
              <button className="border-b text-sm text-white mt-3 pb-1">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        {/* end of resources */}
      </div>
    </div>
  );
}
