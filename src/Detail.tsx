import { FC, memo } from "react";
type Props = {};
const Detail: FC<Props> = (props) => {
  return (
    <div>
      <div className="bg-hero-family bg-cover">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around h-screen items-center">
          <div className="text-white flex flex-col text-shadow ">
            <h1 className="text-6xl font-bold text-center">Why we ?</h1>
            <div className=" text-xl font-bold list-outside mt-4">
              <li>Adding Care to your Life</li>
              <li>Giving Power to your Health</li>
              <li>Lets you Feel Better</li>
              <li>Healing is a new Skill</li> <li>Ideas for Better Health</li>
              <li>heart of Perfect Care</li>
              <li>We care for you most</li>
              <li>Bringing Joy of health</li>
              <li>A new Perspective of care</li>
              <li>A new Discovery of health</li>
            </div>
          </div>
          <div className="border-2 border-black">
            <iframe width="350" height="300" src="./medicine.mp4"></iframe>
          </div>
        </div>
      </div>
      <div className="border-4  border-indigo-700 p-10">
        <div className="overflow-x-scroll flex space-x-20 ">
          <img
            className="w-80 object-cover"
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          />

          <img
            className="w-80 object-cover"
            src="https://images.unsplash.com/photo-1550831106-f8d5b6f1abe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />

          <img
            className="w-80 object-cover"
            src="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />

          <img
            className="w-80 object-cover"
            src="https://images.unsplash.com/photo-1574706473559-81d64e951abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />

          <img
            className="w-80 object-cover"
            src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <img
            className="w-80 object-cover"
            src="https://images.unsplash.com/photo-1582560469781-1965b9af903d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=793&q=80"
          />
          <img
            className="w-80 object-cover"
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
      </div>
    </div>
  );
};
Detail.defaultProps = {};
export default memo(Detail);
