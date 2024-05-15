"use client";

import React from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

enum Countries {
  US = "United States",
  CA = "Canada",
  UK = "United Kingdom",
  AU = "Australia",
  DE = "Germany",
  FR = "France",
  JP = "Japan",
  CN = "China",
  KR = "South Korea",
  IN = "India",
  BR = "Brazil",
  MX = "Mexico",
  RU = "Russia",
  ZA = "South Africa",
  NG = "Nigeria",
  EG = "Egypt",
  KE = "Kenya",
  SA = "Saudi Arabia",
  AE = "United Arab",
  VI = "Vietnam",
}

type UserForm = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  profileImage?: File;
  bio?: string;
  country: Countries;
  overtime?: boolean;
  experiences: Array<{
    title: string;
    company: string;
    location?: string;
  }>;
  skills: Array<string>;
  projects: Array<{
    title: string;
    description: string;
    url?: string;
  }>;
};

const YupForm = () => {
  const form = useForm<UserForm>({
    defaultValues: {
      first_name: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data) => {
    //
  };

  return (
    <div className="w-full max-w-[800px] m-auto py-20">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col"
        >
          <div className="flex gap-4">
            <FormField
              name="first_name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Validate: required, max-length: 30, includes [a-zA-Z\s]
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="last_name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Validate: required, max-length: 30, includes [a-zA-Z\s]
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <FormField
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>Validate: ...</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription>Validate: Password...</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </form>
      </Form>
    </div>
  );
};

export default YupForm;