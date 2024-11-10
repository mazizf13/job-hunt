"use client";

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constant";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData = [
  {
    applicants: 5,
    categories: ["Technology", "Design"],
    image: "/images/company2.png",
    jobType: "Full Time",
    name: "Frontend Engineer",
    location: "Jakarta, Indonesia",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta.",
    needs: 10,
    type: "Developer",
  },
];

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="Dream Job"
      subtitle="Find your next career at companies like Gojek, Traveloka, and Halodoc."
      loading={false}
      type="job"
      data={dummyData}
    />
  );
}
