import Header from "@/app/components/header";
import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
  categories: React.ReactNode;
}

export default function Layout({ categories, children }: LayoutProps) {
  return (
    <div>
      {children}
      {/*Header */}
      <main className="grid grid-cols-12 gap-5 py-10 pl-10 pr-7">
        <div>{categories}</div> {/*small segment element*/}
        <div>Layout inside Dashboard</div>
        <div className="col-span-12">stats</div>
        <div className="col-span-5">sales</div>
        <div className="col-span-7">categories</div>
        <div className="col-span-6">countries</div>
        <div className="col-span-6">promotions</div>
      </main>
    </div>
  );
}
