import { FC, memo } from "react";
type Props = {};
const DetailImage = (props: any) => {
  return (
    <div>
      <img className="w-64 h-64 object-cover" src={props.image} />
    </div>
  );
};
export default memo(DetailImage);
