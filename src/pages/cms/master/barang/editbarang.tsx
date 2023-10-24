import { NamaBarangForm } from "@/components/NamaBarangForm";
import { type NextPageWithLayout } from "@/layouts";
import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout";

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <NamaBarangForm
        defaultValues={{
          nama_kategori: "",
          nama_barang: "",
        }}
      />
    </>
  );
};

Page.getLayout = AuthenticatedLayout;

export default Page;
