import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = () => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="Jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[1, 2, 3, 4].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full time"
            name="  Marketing Specialist"
            type="Agency"
            location="Jakarta, Indonesia"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta."
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};
export default FeaturedJobs;
