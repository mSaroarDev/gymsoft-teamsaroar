import { PrimaryButton } from "@/subcomponents/Buttons";
import { H1, P } from "@/subcomponents/Headings";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="pt-24 md:pt-0">
        <main className="h-[600px] w-full flex flex-col lg:flex-row items-center justify-between">
          <div>
            <H1
              className={"text-2xl md:text-3xl lg:text-5xl text-white leading-loose"}
              text={"get healthy body with the perfect excercise"}
            />
            <P
              className={"text-white my-5 leading-relaxed"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />

            <PrimaryButton className={"mt-3"} text={"Get Started"} />
          </div>
          <div className="mt-auto">
            <img src="/img.png" alt="Image" className="w-[400px] lg:w-[700px]" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;
