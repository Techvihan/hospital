import { Navigate, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Detail from "./Detail";
import Form from "./Form";
import Home from "./Home";
import TopBar from "./TopBar";

function App() {
  return (
    <div>
      <div className="sm:h-20 md:h-24 xl:h-24 h-20 " id="top">
        <div className="fixed w-screen">
          <TopBar></TopBar>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="detail" element={<Detail />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="">
        <a
          href="#top"
          className="text-7xl font-extrabold fixed right-10 bottom-10 h-12 w-12 border-2 bg-white rounded-full hover:bg-indigo-500  "
        >
          <img src="https://img.icons8.com/ios-filled/344/up--v1.png" />
        </a>
      </div>
      <div className="flex justify-center bg-black py-2 ">
        <a
          href="https://techvihan.info"
          target="_blank"
          className="border-2 sm:w-96 w-full flex justify-center hover:transition   hover:-translate-y-1 
    hover:scale-110  duration-150  bg-gradient-to-r from-red-500 via-gray-500 to-blue-500
    text-2xl rounded-lg py-2"
        >
          Developed By :TechVihan
        </a>
      </div>
    </div>
  );
}

export default App;
