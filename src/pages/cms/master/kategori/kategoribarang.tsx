import { type NextPageWithLayout } from "@/layouts";
import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout";
import { api } from "@/utils/api";
import {
  ActionIcon,
  Button,
  Container,
  Paper,
  Table,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { PrismaClient } from "@prisma/client";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";

const prisma = new PrismaClient();

// const getKategori = async () => {
//   const res = await prisma.kategoriBarang.findMany({
//     select: {
//       id: true,
//       nama_kategori: true,
//     },
//   });
//   return res;
// };

const mainContainer = {
  h: 50,
  mt: "md",
  pt: 100,
  px: 50,
};

const tablePaper = {
  pt: 50,
  w: "60%",
};

const button = {
  ml: 20,
};

const tabel = {};

export const Page: NextPageWithLayout = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data, isLoading } = api.kategoriBarang.getAll.useQuery();
  const router = useRouter();
  const { id } = router.query;
  const { mutateAsync } = api.kategoriBarang.delete.useMutation();
  const handleHapusData = async (id: number) => {
    if (confirm("Anda yakin ingin menghapus data ini?")) {
      try {
        await mutateAsync({ id });
        notifications.show({
          title: "Sukses!",
          message: "Data berhasil ditambahkan",
          autoClose: 3000,
          color: "teal",
        });
        router.reload(); // Mengganti data setelah penghapusan berhasil
      } catch (error) {
        notifications.show({
          title: "Gagal",
          message: "Gagal menambah data",
          autoClose: 3000,
          color: "red",
        });
      }
    }
  };

  // const handleEditData = async (id: number) => {
  //   try {
  //     await router.push(`/cms/master/kategori/editkategoribarang/${id}`);
  //   } catch (error) {
  //     console.error("Error while navigating to KategoriFormEdit:", error);
  //   }
  // };

  const rows = (data?.data ?? []).map((KategoriBarang) => (
    <Table.Tr key={KategoriBarang.nama_kategori}>
      <Table.Td>{KategoriBarang.id}</Table.Td>
      <Table.Td>{KategoriBarang.nama_kategori}</Table.Td>
      <Table.Td>
        <Button
          variant="primary"
          onClick={() =>
            router.push(
              `/cms/master/kategori/editkategoribarang/${KategoriBarang.id}`,
            )
          }
        >
          Edit
        </Button>
        <Button
          variant="filled"
          color="red"
          {...button}
          onClick={() => handleHapusData(KategoriBarang.id)}
        >
          Delete
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Container fluid {...mainContainer}>
        <Text size="lg" fw={600}>
          Tambah Kategori
          <ActionIcon
            onClick={() =>
              router.push("/cms/master/kategori/tambahkategoribarang")
            }
            ml={10}
            variant="filled"
            aria-label="Settings"
          >
            <IconPlus style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        </Text>
        <Paper {...tablePaper} shadow="xs" p="xl">
          <Table {...tabel} verticalSpacing="sm" striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Kategori Barang</Table.Th>
                <Table.Th></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Paper>
      </Container>
    </>
  );
};

Page.getLayout = AuthenticatedLayout;

export default Page;
