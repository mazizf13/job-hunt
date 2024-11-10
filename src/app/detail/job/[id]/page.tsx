import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface DetailJobPageProps {}

const DetailJobPage: FC<DetailJobPageProps> = ({}) => {
  return (
    <div className="bg-slate-100 px-32 pt-10 pb-14">
      <div className="inline-flex gap-2 text-sm text-muted-foreground ">
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
        </Link>{" "}
        /{" "}
        <Link href="/detail/job/1" className="hover:underline hover:text-black">
          Digital Marketing
        </Link>
      </div>
      <div className="bg-white shadow-sm mt-10 p-5 w-11/12 mx-auto flex flow-row justify-between items-center">
        <div className="inline-flex items-center gap-5">
          <Image
            src="/images/company2.png"
            alt="/images/company2.png"
            width={88}
            height={88}
          />
          <div>
            <div className="text-2xl font-semibold mb-1">Digital Marketing</div>
            <div className="text-sm text-muted-foreground">
              Software House | Jakarta, Indonesia | Full Time
            </div>
          </div>
        </div>
        <Button size="lg" className="text-lg px-12 py-6">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default DetailJobPage;
