import { type kategoriBarangValidation } from "@/server/api/inputs/kategoriBarang.input";
import { api } from "@/utils/api";
import { Button, Container, Paper, Text, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type KategoriFormSchema = {
  nama_kategori?: string;
};

type KategoriFormProps = {
  onSubmit: (submitValues: typeof kategoriBarangValidation._output) => void;
  defaultValues?: KategoriFormSchema;
};

const Form: React.FC<KategoriFormProps> = (props) => {
  const { setValue, getValues, watch, handleSubmit } = useForm<
    KategoriFormSchema,
    undefined,
    typeof kategoriBarangValidation._output
  >();

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

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
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

export const KategoriFormUpdateHandler: React.FC<{ id: number }> = ({ id }) => {
  const { mutate, error, isSuccess } = api.kategoriBarang.update.useMutation();
  const { data: defaultValues, isLoading } =
    api.kategoriBarang.getById.useQuery({
      id,
    });

  useEffect(() => {
    notifications.show({
      message: "Berhasil memperbarui kategori barang",
    });
  }, [isSuccess]);

  useEffect(() => {
    notifications.show({
      message: "Gagal memperbarui kategori barang",
    });
  }, [error]);

  return (
    <Form
      onSubmit={(submitValues) => void mutate({ ...submitValues, id })}
      defaultValues={defaultValues}
    />
  );
};

export const KategoriFormCreateHandler: React.FC = () => {
  const { mutate, error, isSuccess } = api.kategoriBarang.create.useMutation();

  useEffect(() => {
    notifications.show({
      message: "Berhasil membuat kategori barang",
    });
  }, [isSuccess]);

  useEffect(() => {
    notifications.show({
      message: "Gagal membuat kategori barang",
    });
  }, [error]);

  return (
    <Form
      onSubmit={(submitValues) => {
        void mutate(submitValues);
      }}
    />
  );
};

export const KategoriBarangForm = {
  Create: KategoriFormCreateHandler,
  Update: KategoriFormUpdateHandler,
};
