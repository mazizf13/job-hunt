import Image from "next/image";
import React, { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="flex float-row justify-between items-center">
      <div className="w-1/2">
        <div className="text-7xl font-sembold text-slate-600 w-max relative">
          Discover <br /> more than <br />{" "}
          <span className="text-primary font-bold">5000+ Jobs</span>
          <Image
            src="/images/pattern2.png"
            alt="/images/pattern2.png"
            width={455}
            height={32}
            className="mb-5"
          />
          <div className="text-muted-foreground text-lg">
            Your gateway to ambitious career growth <br />
            and exciting opportunities in innovative startups
          </div>
        </div>
      </div>
      <div className="block mt-2">
        <Image
          src={"/images/hero.png"}
          alt="/images/hero.png"
          height={700}
          width={500}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
