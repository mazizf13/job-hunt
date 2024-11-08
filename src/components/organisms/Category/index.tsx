import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import CategoryItem from "./CategoryItem";

interface CategoryProps {}

const Category: FC<CategoryProps> = () => {
  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="Category" />
      <div className="grid grid-cols-5 gap-8 mt-12">
        {[1, 2, 3, 4, 5].map((item: number) => (
          <CategoryItem key={item} name="Category" totalJobs={1000} />
        ))}
      </div>
    </div>
  );
};

export default Category;
