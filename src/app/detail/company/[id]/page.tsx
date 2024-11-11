import CompanyInfo from "@/components/organisms/CompanyInfo";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Facebook,
  Flame,
  Instagram,
  Linkedin,
  MapPinned,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface DetailCompanyPageProps {}

const DetailCompanyPage: FC<DetailCompanyPageProps> = () => {
  return (
    <div>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
        <div className="inline-flex gap-3 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline hover:text-black">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/find-companies"
            className="hover:underline hover:text-black"
          >
            Companies
          </Link>{" "}
          /{" "}
          <Link
            href="/detail/company/1"
            className="hover:underline hover:text-black"
          >
            Gojek
          </Link>
        </div>

        <div>
          <div className="mt-10 inline-flex gap-6 items-start">
            <Image
              src="/images/company2.png"
              alt="/images/company2.png"
              width={150}
              height={150}
            />
            <div>
              <div className="inline-flex gap-4 items-center">
                <span className="text-4xl font-semibold">
                  PT GO-JEK INDONESIA
                </span>
                <Badge>10 Jobs</Badge>
              </div>
              <div className="mt-2">
                <Link
                  href="/"
                  className="hover:underline text-primary font-semibold"
                >
                  https://gojek.com
                </Link>
              </div>
              <div className="inline-flex items-center mt-6 gap-10">
                <CompanyInfo
                  icon={<Flame className="" />}
                  label="Founded"
                  value="October 5, 2010"
                />
                <CompanyInfo
                  icon={<Users className="" />}
                  label="Employees"
                  value="101 - 1001"
                />
                <CompanyInfo
                  icon={<MapPinned className="" />}
                  label="Location"
                  value="Indonesia"
                />
                <CompanyInfo
                  icon={<Building2 className="" />}
                  label="Industry"
                  value="Transportation Service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 py-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="mb-12">
            <div className="text-3xl font-semibold mb-3">Company Profile</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                magnam deleniti iste tempore a aspernatur vitae quisquam harum
                praesentium minima.
              </p>
            </div>
          </div>
          <div className="text-3xl font-semibold mb-4">Social Media</div>
          <div className="flex items-center gap-5 w-[400px] flex-wrap">
            <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold rounded-md">
              <Link
                href="https://linkedin.com/showcase/gojek-gotogroup/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
            <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold rounded-md">
              <Link
                href="https://instagram.com/gojekindonesia/"
                target="_blank"
              >
                <Instagram />
              </Link>
            </div>
            <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold rounded-md">
              <Link href="https://facebook.com/gojekindonesia/" target="_blank">
                <Facebook />
              </Link>
            </div>
            <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold rounded-md">
              <Link href="https://x.com/gojekindonesia/" target="_blank">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-3xl font-semibold mb-4">Tech Stack</div>
          <div className="text-gray-500 text-sm">
            Learn about the technology and tools that Pattern uses.
          </div>
          <div className="mt-5 inline-flex gap-4">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCompanyPage;
