import { SBMForm } from "@/components/SBMForm";
import { type NextPageWithLayout } from "@/layouts";
import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout";

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <SBMForm />
    </>
  );
};

Page.getLayout = AuthenticatedLayout;

export default Page;
