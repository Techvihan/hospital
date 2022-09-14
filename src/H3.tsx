import { FC, memo } from "react";
type Props = {};
const H3 = (props: any) => {
  return (
    <>
      <h3 className="text-2xl font-bold">{props.children}</h3>
    </>
  );
};
export default memo(H3);
