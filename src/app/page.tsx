
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Index from "@/components/dashboard";

export const metadata: Metadata = {
  title:
    "Drug Research Platform ",
  description: "This is Next.js Home for Drug Research Platform",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
      
    </>
  );
}
