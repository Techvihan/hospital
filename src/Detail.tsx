import { FC, memo } from "react";
type Props = {};
const Detail: FC<Props> = (props) => {
  return (
    <div>
      <div className="h-screen">
        <h1 className="text-5xl">Detail</h1>
        <h1 className="text-5xl">Detail</h1>
        <h1 className="text-5xl">Detail</h1>
        <h1 className="text-5xl">Detail</h1>
      </div>
    </div>
  );
};
Detail.defaultProps = {};
export default memo(Detail);
