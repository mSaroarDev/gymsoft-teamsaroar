import { PrimaryButton } from "@/subcomponents/Buttons";
import { H1, P } from "@/subcomponents/Headings";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="pt-24 lg:pt-0">
        <main className="h-auto lg:h-[600px] w-full flex flex-col lg:flex-row items-center justify-between">
          <div>
            <H1
              className={
                "text-2xl md:text-3xl lg:text-5xl text-white leading-normal"
              }
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
          <div className="relative w-full h-[300px] lg:w-[700px] lg:h-[500px] mt-auto flex items-end justify-end">
            <Image
              src="/img.png"
              alt="Image"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;
