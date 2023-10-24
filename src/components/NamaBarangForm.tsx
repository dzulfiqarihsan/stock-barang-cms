import {
  Button,
  Container,
  Input,
  InputWrapper,
  Paper,
  Text,
  TextInput,
} from "@mantine/core";
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

const textInput = {
  w: "20%",
  mt: 10,
};

const buttonSubmit = {
  mt: "30",
};
type NamaBarang = {
  nama_kategori: string;
  nama_barang: string;
};

const kategori: NamaBarang = {
  nama_kategori: "tuna",
  nama_barang: "Tuna Hitam",
};

export const NamaBarangForm: React.FC<{ defaultValues?: NamaBarang }> = (
  props,
) => {
  const { defaultValues } = props;
  const { setValue, getValues, watch, handleSubmit } = useForm<NamaBarang>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<NamaBarang> = (data) => {
    alert(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container fluid {...demoProps}>
        <Text size="lg" fw={600}>
          Tambah Nama Barang
        </Text>
        <Paper {...tablePaper} shadow="xs" p="xl">
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
          <Button {...buttonSubmit} type="submit" variant="filled">
            Submit
          </Button>
        </Paper>
      </Container>{" "}
    </form>
  );
};
