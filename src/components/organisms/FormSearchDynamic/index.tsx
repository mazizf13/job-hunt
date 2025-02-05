import { MapPin, Search } from "lucide-react";
import React, { FC } from "react";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LOCATION_OPTIONS } from "@/constant";
import { OptionType } from "@/types";

interface FormSearchDynamicProps {
  className?: string;
}

const FormSearchDynamic: FC<FormSearchDynamicProps> = () => {
  return (
    <div className="mx-auto w-max">
      <div className="p-4 bg-background shadow-md inline-flex items-center gap-4 relative w-max z-10 text-center">
        <div className="inline-flex gap-3 items-center">
          <Search className="w-6 h-6" />
          <Input
            className="py-5 w-[400px] border-none"
            placeholder="Job Title or Keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <MapPin className="w-6 h-6" />
          <Select>
            <SelectTrigger className="w-[400px] py-5 border-none outline-none text-gray-500">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_OPTIONS.map((item: OptionType, index: number) => (
                <SelectItem key={index} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <Button>Search</Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-3 text-sm">
          Popular: Software Engineer, UI/UX, Project Management
        </div>
      </div>
    </div>
  );
};

export default FormSearchDynamic;
