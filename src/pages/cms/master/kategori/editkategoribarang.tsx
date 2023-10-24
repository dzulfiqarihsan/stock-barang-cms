import { KategoriBarangForm } from "@/components/ContohKategoriBarangForm";
import { type NextPageWithLayout } from "@/layouts";
import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout";
import { GetStaticProps } from "next";

type PageProps = {
  id: string;
};
export const Page: NextPageWithLayout<PageProps> = (props) => {
  return (
    <>
      <KategoriBarangForm.Update id={parseInt(props.id)} />
    </>
  );
};

export const getStaticProps: GetStaticProps = (props) => {
  return {
    props: {
      id: props.params?.id,
    },
  };
};
Page.getLayout = AuthenticatedLayout;

export default Page;
