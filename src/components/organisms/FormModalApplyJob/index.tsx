"use client";

import React, { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formApplySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

interface FormModalApplyJobProps {}

const FormModalApplyJob: FC<FormModalApplyJobProps> = () => {
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });

  const onSubmitForm = (val: z.infer<typeof formApplySchema>) => {
    console.log(val);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg px-12 py-6">
          Apply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div>
          <div className="inline-flex items-center gap-4">
            <div>
              <Image
                src="/images/company2.png"
                alt="/images/company2.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <div className="text-lg font-semibold">Digital Marketing</div>
              <div className="text-gray-500 text-sm">
                Software House | Jakarta, Indonesia | Full Time
              </div>
            </div>
          </div>

          <Separator className="my-5" />

          <div className="mb-5">
            <div className="font-semibold text-lg">Submit your application</div>
            <div className="text-gray-500 text-sm mt-2">
              The following is required and will only be shared with Nomad
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmitForm)}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModalApplyJob;
