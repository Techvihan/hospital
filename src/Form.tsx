import { FC, memo } from "react";
import H3 from "./H3";
import Input from "./Input";
type Props = {};
const Form: FC<Props> = () => {
  return (
    <div className="flex justify-center items-center bg-hero-hospital bg-cover px-2 h-screen px-18 ">
      <div className="space-y-6 bg-indigo-400 p-4 rounded-md shadow-xl  sm:mx-24 -mt-8">
        <div className="flex  justify-between">
          <H3>Patient Name :</H3>
          <Input placeholder="Patient Name" type="text"></Input>
        </div>
        <div className="flex justify-between">
          <H3>Address :</H3>
          <Input placeholder="Address" type="text"></Input>
        </div>
        <div className="flex justify-between">
          <H3>Room No. :</H3>
          <Input placeholder="Room No." type="number"></Input>
        </div>
        <div className="flex justify-between">
          <H3>Mobile No. :</H3>
          <Input placeholder="Mobile No." type="number"></Input>
        </div>
        <div className="flex justify-around">
          <div className="flex">
            <H3>Age :</H3>
            <input
              placeholder="Age"
              type="number"
              className="outline-none border-2 border-yellow-500 hover:border-white rounded-lg ml-8 w-16 px-2 py-1"
            ></input>
          </div>
          <div className="flex">
            <H3>Gender :</H3>
            <select
              name="cars"
              id="cars"
              className="border-2 border-yellow-500 rounded-lg ml-8 hover:border-white px-2 py-1"
            >
              <option value="volvo">None</option>
              <option value="volvo">Male</option>
              <option value="saab">Female</option>
              <option value="mercedes">Other</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-500 px-2 py-1 text-white rounded-lg hover:bg-green-500 text-2xl">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(Form);
