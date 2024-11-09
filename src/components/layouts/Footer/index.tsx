import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface FooterProps {}

const aboutLinks = [
  "Companies",
  "Pricing",
  "Blog",
  "Terms",
  "Advice",
  "Privacy Policy",
];
const resourceLinks = [
  "Help Center",
  "Job Seekers",
  "Guide",
  "Updates",
  "Contact Support",
];
const socialMediaImg = [
  "/images/soc-Linkedin.png",
  "/images/soc-Instagram.png",
  "/images/soc-Facebook.png",
  "/images/soc-Twitter.png",
  "/images/soc-Dribbble.png",
];

const Footer: FC<FooterProps> = () => {
  return (
    <div className="bg-slate-900 px-32 text-foreground pt-16 pb-16">
      <div className="flex flex-row items-start justify-between">
        <div>
          <Image
            src="/images/logo.png"
            alt="/images/logo.png"
            width={150}
            height={36}
          />
          <div className="text-mutes mt-8 text-muted">
            Great platform fot the job seeker that <br />
            passionate about startups. Find your <br /> dream job easier.
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-5 text-primary-foreground">
            About
          </div>
          <div className="space-y-4">
            {aboutLinks.map((item: string, index: number) => (
              <Link className="block text-muted" key="item" href="/">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-5 text-primary-foreground">
            Resources
          </div>
          <div className="space-y-4">
            {resourceLinks.map((item: string, index: number) => (
              <Link className="block text-muted" key="item" href="/">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-5 text-primary-foreground">
            Get job notifications
          </div>
          <div className="text-muted">
            The latest job news, articles, sent to <br /> your inbox weekly
          </div>
          <div className="mt-10 inline-flex items-center gap-3">
            <Input placeholder="Email Address" className="py-5" />
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator className="mt-20 mb-10 bg-gray-100" />
      <div className="flex flex-row justify-between items-center">
        <div className="text-slate-600">
          2024 @ JobHuntly. All rights reserved.
        </div>
        <div className="space-x-3">
          {socialMediaImg.map((item: string, index: number) => (
            <Image
              src={item}
              key={index}
              alt={item}
              width={32}
              height={32}
              className="inline cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
