"use client";
import dynamic from "next/dynamic";
import React from "react";

import CTACard from "./components/CTACard";
import { AtomIcon, MessageCircle, Network, SearchIcon } from "lucide-react";

const DashboardCardMap = dynamic(
  () => import("@/components/Dashboard/components/DashboardCardMap"),
  {
    ssr: false,
  },
);

const DashboardCardChat = dynamic(
  () => import("@/components/Dashboard/components/DashboardCardChat"),
  {
    ssr: false,
  },
);

const Index: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CTACard subtitle="get access to more molecules" title="Molecule Bank" links="/molecule-bank">
          <AtomIcon />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Generate Molecule"
          links="/model"
        >
          <Network />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Search Compounds"
          links="/research"
        >
          <SearchIcon />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Collaborative Research"
          links="/message"
        >
          <MessageCircle />
        </CTACard>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DashboardCardChat />
        <DashboardCardMap />
      </div>
    </>
  );
};

export default Index;
