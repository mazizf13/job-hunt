import { Search } from "lucide-react";
import React, { FC } from "react";
import { Input } from "../../ui/input";

interface FormSearchProps {
  className?: string;
}

const FormSearch: FC<FormSearchProps> = () => {
  return (
    <div className="mt-6 bg-white shadow-sm inline-flex items-center gap-4 w-max z-10">
      <div className="inline-flex gap-3 items-center">
        <Search className="w-6 h-6" />
        <Input
          className="py-8 w-[300px] border-none"
          placeholder="Job title or keywords"
        />
      </div>
    </div>
  );
};

export default FormSearch;
