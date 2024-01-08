import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/lib/service/auth-service";

import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

interface CreatorLayoutProps {
  children: React.ReactNode;
  params: { username: string };
}

const CreatorLayout = async ({ children, params }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    return redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
