import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = () => {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company2.png"
            jobType="Full time"
            name="Marketing Specialist"
            type="Agency"
            location="Surabaya, Indonesia"
            categories={["Marketing", "Design"]}
            desc="description"
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
