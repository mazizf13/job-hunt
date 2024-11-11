import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
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
                <span className="text-4xl font-semibold">PT GO-JEK INDONESIA</span>
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
                <div className="items-center inline-flex gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <Flame className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">October 5, 2010</div>
                  </div>
                </div>
                <div className="items-center inline-flex gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <Flame className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">October 5, 2010</div>
                  </div>
                </div>
                <div className="items-center inline-flex gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <Flame className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">October 5, 2010</div>
                  </div>
                </div>
                <div className="items-center inline-flex gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <Flame className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">October 5, 2010</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCompanyPage;
