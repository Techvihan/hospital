import { memo } from "react";

const Input = (props: any) => {
  return (
    <div>
      <input
        className="outline-none px-2 py-1 border-2 bg-indigo-600 border-yellow-500 rounded-lg lg:w-96 md:w-96 capitalize bg-transparent hover:border-white text-white text-xl"
        placeholder={props.placeholder}
        type={props.type}
      ></input>
    </div>
  );
};
export default memo(Input);
