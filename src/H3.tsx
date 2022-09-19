import { FC, HtmlHTMLAttributes, memo } from "react";
type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const H3: FC<Props> = (props: any) => {
  return (
    <>
      <h3 className="text-2xl font-bold">{props.children}</h3>
    </>
  );
};
export default memo(H3);
