import { H3 } from "./Headings";

const CommonTitle = ({ text }) => {
  return (
    <>
      <div className="_heading-underline">
        <h3 className="text-base font-bold">{text || 'Enter Title Name Here'}</h3>
      </div>
    </>
  );
};

export default CommonTitle;
