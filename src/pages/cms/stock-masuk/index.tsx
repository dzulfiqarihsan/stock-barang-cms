import { type NextPageWithLayout } from "@/layouts";
import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout";
import { ActionIcon, Container, Paper, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/router";

const mainContainer = {
  h: 50,
  mt: "md",
  pt: 100,
  px: 50,
};

const tablePaper = {
  pt: 50,
};

export const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const handleClick = (to: string) => {
    void router.push(to);
  };

  return (
    <>
      <Container fluid {...mainContainer}>
        <Text size="lg" fw={600}>
          Tambah Stock
          <ActionIcon
            onClick={() => handleClick("/cms/stock-masuk/tambah-stock-masuk")}
            ml={10}
            variant="filled"
            aria-label="Settings"
          >
            <IconPlus style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        </Text>
        <Paper {...tablePaper} shadow="xs" p="xl">
          <Text>Tabel Stock Masuk</Text>
        </Paper>
      </Container>
    </>
  );
};

Page.getLayout = AuthenticatedLayout;

export default Page;
