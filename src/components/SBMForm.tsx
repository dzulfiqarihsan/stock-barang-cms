import {
  Button,
  Container,
  Input,
  InputWrapper,
  Paper,
  Text,
  TextInput,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { IconChevronDown } from "@tabler/icons-react";
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

const textInputCode = {
  w: "20%",
};

const textInput = {
  w: "50%",
  mt: 20,
};

const calendar = {
  mt: 50,
};

// const inputDropdown = {
//   w: "50%",
//   mt: -20,
// };

const buttonSubmit = {
  mt: "30",
};
type BarangMasuk = {
  kode_barang: string;
  kategori_barang: string;
  nama_barang: string;
  harga_perkg: number;
  supplier: string;
  jumlah_masuk: number;
  tanggal_masuk: null;
};

const barangmasuk: BarangMasuk = {
  kode_barang: "TMN912931",
  kategori_barang: "Tuna",
  nama_barang: "Steak Tuna",
  harga_prkg: 20.0,
  supplier: "Medan",
  jumlah_masuk: 133.21,
  tanggal_masuk: null,
};

export const SBMForm: React.FC<{ defaultValues?: BarangMasuk }> = (props) => {
  const { defaultValues } = props;
  const { setValue, getValues, watch, handleSubmit } = useForm<BarangMasuk>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<BarangMasuk> = (data) => {
    alert(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container fluid {...demoProps}>
        <Text size="lg" fw={600}>
          Tambah Barang Masuk
        </Text>
        <Paper {...tablePaper} shadow="xs" p="xl">
          <TextInput
            {...textInputCode}
            label="Kode Barang"
            withAsterisk
            placeholder="Kode Barang"
            onChange={(e) => setValue("kode_barang", e.target.value)}
            defaultValue={getValues("kode_barang")}
          />
          <InputWrapper {...textInput} label="Kategori">
            <Input
              component="select"
              rightSection={<IconChevronDown size={14} stroke={1.5} />}
              pointer
            >
              <option value="tuna">Tuna</option>
              <option value="kakap">Kakap</option>
            </Input>
          </InputWrapper>
          <TextInput
            {...textInput}
            label="Nama Barang"
            withAsterisk
            placeholder="Nama Barang"
            onChange={(e) => setValue("nama_barang", e.target.value)}
            defaultValue={getValues("nama_barang")}
          />
          <TextInput
            {...textInput}
            label="Harga/Kg"
            withAsterisk
            placeholder="Harga/Kg"
            onChange={(e) => setValue("harga_perkg", parseInt(e.target.value))}
            defaultValue={getValues("harga_perkg")}
          />
          <TextInput
            {...textInput}
            label="Supplier"
            placeholder="Supplier"
            onChange={(e) => setValue("supplier", e.target.value)}
            defaultValue={getValues("supplier")}
          />
          <TextInput
            {...textInput}
            label="Jumlah Masuk"
            placeholder="Jumlah Masuk"
            onChange={(e) => setValue("jumlah_masuk", parseInt(e.target.value))}
            defaultValue={getValues("jumlah_masuk")}
          />
          <Calendar {...calendar} />
          <Button {...buttonSubmit} type="submit" variant="filled">
            Submit
          </Button>
        </Paper>
      </Container>
    </form>
  );
};
