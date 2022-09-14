import { memo } from "react";
import H3 from "./H3";
const HomeBox = (props: any) => {
  return (
    <div className=" bg-gray-400 hover:bg-yellow-500 p-6 border-4 rounded-lg w-96 h-86 border-black">
      <div className="flex flex-col md:p-4 space-y-2 md:space-y-2 xl:space-y-6 items-center bg-white p-10 rounded-lg w-86 h-72">
        <H3>{props.heading}</H3>
        <img src={props.img} />
        <p>{props.children}</p>
      </div>
    </div>
  );
};
export default memo(HomeBox);
