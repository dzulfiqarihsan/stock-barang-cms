import { api } from "@/utils/api";
import { Button, Container, Paper, Text, TextInput, rem } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useForm, type SubmitHandler } from "react-hook-form";

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
  nama_kategori: string;
};
const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
// const kategori: KategoriBarang = {
//   nama_kategori: "test",
// };

export const KategoriForm: React.FC<{
  defaultValues?: KategoriBarang;
  id?: string;
  nama_kategori?: string;
}> = (props) => {
  const { defaultValues } = props;

  const router = useRouter();
  const { reset, setValue, getValues, watch, handleSubmit } =
    useForm<KategoriBarang>({
      defaultValues,
    });
  const { mutateAsync } = api.kategoriBarang.create.useMutation();
  const onSubmit: SubmitHandler<KategoriBarang> = async (data) => {
    // mutate({ ...data });
    const res = await mutateAsync({ nama_kategori: data.nama_kategori });
    if (res.nama_kategori === data.nama_kategori) {
      notifications.show({
        title: "Sukses!",
        message: "Data berhasil ditambahkan",
        autoClose: 3000,
        color: "teal",
      });
      reset();
      router.reload();
    } else {
      notifications.show({
        title: "Gagal",
        message: "Gagal menambah data",
        autoClose: 3000,
        color: "red",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container fluid {...demoProps}>
        <Text size="lg" fw={600}>
          Tambah Kategori Barang
        </Text>
        <Paper {...tablePaper} shadow="xs" p="xl">
          <TextInput
            {...textInput}
            label="Nama Kategori"
            withAsterisk
            placeholder="Nama Kategori"
            onChange={(e) => setValue("nama_kategori", e.target.value)}
            defaultValue={getValues("nama_kategori")}
          />
          <Button {...buttonSubmit} type="submit" variant="filled">
            Submit
          </Button>
        </Paper>
      </Container>{" "}
    </form>
  );
};
