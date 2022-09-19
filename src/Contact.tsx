import { FC, memo } from "react";
import Input from "./Input";
type Props = {};
const Contact: FC<Props> = (props) => {
  return (
    <div className="h-screen flex  justify-center items-center border-10 border-yellow-500">
      <div className="bg-gray-400 p-10 rounded-lg flex sm:flex-row flex-col space-x-0 sm:space-x-20 space-y-10 sm:space-y-0">
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="text-2xl font-bold">
            Email address is:
            <br /> abhishek13arya@gmail.com
            <br />
            Website: TechVihan.info <br />
            Phone: 8439488558
          </p>
        </div>
        <div className="space-y-8">
          <p className="text-2xl font-bold">
            Great vision without great people is <br />
            irrelevant. Let's work together.
          </p>
          <div className="space-y-6 bg-gray-700 flex flex-col justify-center items-center rounded-lg py-8">
            <Input placeholder="Enter your name" type="text"></Input>
            <Input placeholder="Enter email address" type="email"></Input>
            <Input placeholder="Enter the message" type="text"></Input>
            <div className="flex justify-center">
              <button className="bg-yellow-500 px-2 py-1 text-white rounded-lg hover:bg-green-500 text-2xl">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Contact);
