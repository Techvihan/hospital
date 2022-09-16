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
      <div className="border-4  border-indigo-700">
        <div className="overflow-x-scroll flex ">
          <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

          <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

          <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

          <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

          <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
      </div>
    </div>
  );
};
Detail.defaultProps = {};
export default memo(Detail);
