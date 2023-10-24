import { api } from "@/utils/api";
import { Button, Container, Paper, Text, TextInput, rem } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useQuery } from "react-query"; // Ubah impor ini

const KategoriFormEdit = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery(["kategoriBarang", id], () =>
    api.kategoriBarang.getById(id),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const defaultValues = {
    id: data?.id || "",
    nama_kategori: data?.nama_kategori || "",
  };
};

const demoProps = {
  h: 50,
  mt: "md",
};
const tablePaper = {
  bg: "var(--mantine-color-cyan-1)",
  mt: "md",
  pt: "md",
  mx: "md",
  px: "md",
};

const textInput = {
  w: "20%",
};

const buttonSubmit = {
  mt: "30",
};

const notif = {
  c: "teal",
  title: "Berhasil",
  mt: "md",
};
type KategoriBarang = {
  id: number;
  nama_kategori: string;
};

const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

export const KategoriForm: React.FC<{
  defaultValues?: KategoriBarang;
  isEditForm: string;
  id?: string;
  nama_kategori?: string;
}> = ({ defaultValues, isEditForm }) => {
  const router = useRouter();
  const { reset, setValue, getValues, watch, handleSubmit } =
    useForm<KategoriBarang>({
      defaultValues,
    });

  const { mutateAsync: updateKategoriBarangAsync } =
    api.kategoriBarang.update.useMutation();
  const { mutateAsync: createKategoriBarangAsync } =
    api.kategoriBarang.create.useMutation();

  const onSubmit: SubmitHandler<KategoriBarang> = async (data) => {
    const res = isEditForm;
    await updateKategoriBarangAsync({
      id: data.id,
      nama_kategori: data.nama_kategori,
    });
    await createKategoriBarangAsync({
      nama_kategori: data.nama_kategori,
    });

    if (res.nama_kategori === data.nama_kategori) {
      notifications.show({
        title: "Sukses!",
        message: "Data berhasil disimpan",
        autoClose: 3000,
        color: "teal",
      });
      reset();
      router.reload();
    } else {
      notifications.show({
        title: "Gagal",
        message: "Gagal menyimpan data",
        autoClose: 3000,
        color: "red",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container fluid {...demoProps}>
        <Text size="lg" fw={600}>
          {isEditForm ? "Edit Kategori Barang" : "Tambah Kategori Barang"}
        </Text>
        <Paper {...tablePaper} shadow="xs" p="xl">
          {isEditForm && ( // Jika ini adalah formulir edit, tampilkan ID dalam mode edit
            <TextInput
              {...textInput}
              label="ID"
              placeholder="ID"
              disabled
              defaultValue={getValues("id")}
            />
          )}
          <TextInput
            {...textInput}
            label="Nama Kategori"
            withAsterisk
            placeholder="Nama Kategori"
            onChange={(e) => setValue("nama_kategori", e.target.value)}
            defaultValue={getValues("nama_kategori")}
          />
          <Button {...buttonSubmit} type="submit" variant="filled">
            {isEditForm ? "Simpan" : "Submit"}
          </Button>
        </Paper>
      </Container>{" "}
    </form>
  );
};
export default KategoriFormEdit;
