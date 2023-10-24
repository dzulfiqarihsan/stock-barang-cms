import { SBKForm } from "@/components/SBKForm";
import { type NextPageWithLayout } from "@/layouts";
import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout";

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <SBKForm />
    </>
  );
};

Page.getLayout = AuthenticatedLayout;

export default Page;
