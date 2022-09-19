import { memo, useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const showNavigation = () => setNavOpen(true);
  const hideNavigation = () => setNavOpen(false);
  return (
    <div>
      {/* desktop view--------------- */}
      <div className="bg-black px-8 py-1 shadow-xl shadow-gray-600 h-20">
        <div className="flex  justify-center ">
          <img
            className="sm:w-20 w-16 object-cover"
            src="https://img.icons8.com/clouds/344/hospital.png"
          />
          <h1 className="text-yellow-500 text-center font-extrabold text-2xl sm:text-4xl my-auto">
            City Hospital
          </h1>
          <img
            className="sm:w-20 w-16 object-cover"
            src="https://img.icons8.com/clouds/344/hospital.png"
          />
        </div>

        <div className="hidden sm:hidden md:hidden lg:block">
          <div className="text-white relative flex flex-row justify-end -top-10 space-x-4">
            <Link to="/home">Home</Link>
            <Link to="/form">Form</Link>
            <Link to="/detail">Detail</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div className=" h-full sticky left-full w-52 bg-black right-0">
          {/* mobile view -------------------- */}
          {!navOpen && (
            <div onClick={showNavigation} className="fixed right-2 top-6 ">
              <img
                className="w-12  h-8 block sm:block md:block lg:hidden p-1 bg-white"
                src="https://img.icons8.com/ios-glyphs/344/view-headline.png"
              />
            </div>
          )}
          <div>
            {navOpen && (
              <div className="block sm:block md:block lg:hidden py-10">
                <div onClick={hideNavigation}>
                  <img
                    className="w-12 h-12 absolute right-8 -top-16 rounded-full  bg-white"
                    src="https://img.icons8.com/ios/344/xbox-x.png"
                  />
                </div>
                <div className="text-white flex flex-col justify-center items-center text-2xl space-y-10">
                  <Link
                    className="hover:bg-slate-600 px-2 py-1 rounded-lg w-40 text-center"
                    to="/home"
                  >
                    Home
                  </Link>
                  <Link
                    className="hover:bg-slate-600 px-2 py-1 rounded-lg w-40 text-center"
                    to="/form"
                  >
                    Form
                  </Link>
                  <Link
                    className="hover:bg-slate-600 px-2 py-1 rounded-lg w-40 text-center"
                    to="/detail"
                  >
                    Detail
                  </Link>
                  <Link
                    className="hover:bg-slate-600 px-2 py-1 rounded-lg w-40 text-center"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(TopBar);
