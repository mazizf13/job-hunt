import { Form } from "@/components/ui/form";
import React, { FC } from "react";
import CheckboxForms from "./CheckboxForms";
import { filterFormType } from "@/types";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: filterFormType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  formFilter,
  onSubmitFilter,
  filterForms,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        {filterForms.map((item: filterFormType, index: number) => (
          <CheckboxForms
            key={index}
            formFilter={formFilter}
            items={item.items}
            name={item.name}
            label={item.label}
          />
        ))}

        <Button className="mt-5 w-full">Apply Filter</Button>
        <Button className="mt-3 w-full" variant="outline">
          Reset Filter
        </Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
