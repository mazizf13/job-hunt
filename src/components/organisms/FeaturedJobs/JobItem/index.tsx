import { Badge } from "@/components/ui/badge";
import { JobType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface JobItemProps extends JobType {}

const JobItem: FC<JobItemProps> = ({
  image,
  jobType,
  name,
  type,
  location,
  desc,
  categories,
}) => {
  return (
    <div className="border border-border p-6 cursor-pointer">
      <div className="flex flex-row justify-between items-start">
        <Image src={image} alt={image} width={48} height={48} />
        <span className="px-4 py-1 border rounded-xl bg-background text-sm font-semibold text-primary border-primary">
          {jobType}
        </span>
      </div>
      <div className="my-4">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-muted-foreground mb-3">
          {type} | {location}
        </div>
        <div className="text-muted-foreground h-12 line-clamp-2 text-ellipsis">
          {desc}
        </div>
      </div>
      <div className="space-x-2">
        {categories.map((item: string, index: number) => (
          <Badge
            key={index}
            variant="outline"
            className="rounded border-primary bg-primary/5 text-primary"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default JobItem;
