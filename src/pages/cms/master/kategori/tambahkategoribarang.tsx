import { KategoriBarangForm } from "@/components/ContohKategoriBarangForm";
import { type NextPageWithLayout } from "@/layouts";
import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout";

export const Page: NextPageWithLayout = () => {
  return (
    <>
      {/* <KategoriForm /> */}
      <KategoriBarangForm.Create />
    </>
  );
};

Page.getLayout = AuthenticatedLayout;

export default Page;
