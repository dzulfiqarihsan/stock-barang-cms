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

// const inputDropdown = {
//   w: "50%",
//   mt: -20,
// };

const buttonSubmit = {
  mt: "30",
};
type BarangKeluar = {
  kode_nota: string;
  nama_pembeli: string;
  kode_barang: string;
  kategori_barang: string;
  nama_barang: string;
  harga_perkg: number;
  jumlah_perkg: number;
  total_harga: number;
  tanggal_keluar: null;
};

//   const barangkeluar: BarangKeluar = {
//     kode_barang: "TMN912931",
//     kategori_barang: "Tuna",
//     nama_barang: "Steak Tuna",
//     supplier: "Medan",
//     jumlah_masuk: 133.21,
//     tanggal_masuk: null,
//   };

export const SBKForm: React.FC<{ defaultValues?: BarangKeluar }> = (props) => {
  const { defaultValues } = props;
  const { setValue, getValues, watch, handleSubmit } = useForm<BarangKeluar>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<BarangKeluar> = (data) => {
    alert(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container fluid {...demoProps}>
        <Text size="lg" fw={600}>
          Tambah Barang Keluar
        </Text>
        <Paper {...tablePaper} shadow="xs" p="xl">
          <TextInput
            {...textInput}
            label="Kode Nota"
            withAsterisk
            placeholder="Kode Nota"
            onChange={(e) => setValue("kode_nota", e.target.value)}
            defaultValue={getValues("kode_nota")}
          />
          <TextInput
            {...textInput}
            label="Nama Pembeli"
            withAsterisk
            placeholder="Nama Pembeli"
            onChange={(e) => setValue("nama_pembeli", e.target.value)}
            defaultValue={getValues("nama_pembeli")}
          />
          <TextInput
            {...textInput}
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
            placeholder="Harga/Kg"
            onChange={(e) => setValue("harga_perkg", parseInt(e.target.value))}
            defaultValue={getValues("harga_perkg")}
          />
          <TextInput
            {...textInput}
            label="Jumlah/Kg"
            placeholder="Jumlah/Kg"
            onChange={(e) => setValue("jumlah_perkg", parseInt(e.target.value))}
            defaultValue={getValues("jumlah_perkg")}
          />
          <TextInput
            {...textInput}
            disabled
            label="Total Harga"
            placeholder="Total Harga"
            onChange={(e) => setValue("total_harga", parseInt(e.target.value))}
            defaultValue={getValues("total_harga")}
          />
          <Calendar />
          <Button {...buttonSubmit} type="submit" variant="filled">
            Submit
          </Button>
        </Paper>
      </Container>
    </form>
  );
};
