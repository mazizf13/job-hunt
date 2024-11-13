"use client";

import { CATEGORIES_OPTIONS } from "@/constant";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FindCompaniesPageProps {}

const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData: CompanyType[] = [
  {
    name: "Traveloka",
    image: "/images/company2.png",
    categories: "Travel & Tourism",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta.",
    totalJobs: 10,
  },
  {
    name: "Shopee",
    image: "/images/company.png",
    categories: "E-commerce",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    totalJobs: 20,
  },
  {
    name: "Gojek",
    image: "/images/company2.png",
    categories: "Delivery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta.",
    totalJobs: 15,
  },
  {
    name: "E-fishery",
    image: "/images/company.png",
    categories: "Fishery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta.",
    totalJobs: 10,
  },
];

const FindCompaniesPage: FC<FindCompaniesPageProps> = () => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
    console.log(val);
  };

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmit}
      filterForms={FILTER_FORMS}
      title="Dream Companies"
      subtitle="Find the dream companies you dream work for"
      loading={false}
      type="company"
      data={dummyData}
    />
  );
};

export default FindCompaniesPage;
