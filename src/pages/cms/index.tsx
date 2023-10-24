import { type NextPageWithLayout } from "@/layouts";
import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout";
import { Button } from "@mantine/core";

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Button variant="filled">Button</Button>
    </>
  );
};

Page.getLayout = AuthenticatedLayout;

export default Page;
