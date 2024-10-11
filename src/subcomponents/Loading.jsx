import { H5 } from "./Headings";
import "./Loading.css";

const Loading = () => {
  return (
    <>
      <div className="overlay bg-black opacity-70 fixed top-0 bottom-0 left-0 right-0 z-50">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="loading-comp"></span>
          <H5 className="text-white mt-10" text={"Loading. Please Wait"} />
        </div>
      </div>
    </>
  );
};

export default Loading;
