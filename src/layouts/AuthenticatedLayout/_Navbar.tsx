import { Box, DEFAULT_THEME, NavLink } from "@mantine/core";
import { IconDatabase, IconUser, type Icon } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { type CSSProperties } from "react";

const defaultIconStyle: CSSProperties = {
  padding: 2,
  borderRadius: 4,
};

type TopLevelLink = {
  route?: string;
  label: string;
  icon?: Icon;
  children?: TopLevelLink[];
};

export const Navbar: React.FC = () => {
  const router = useRouter();
  const topLevelLinks: TopLevelLink[] = [
    {
      route: "/cms/stock-barang",
      label: "Stock Barang",
      icon: IconDatabase,
    },
    {
      route: "/cms/stock-keluar",
      label: "Stock keluar",
      icon: IconDatabase,
    },
    {
      route: "/cms/stock-masuk",
      label: "Stock Masuk",
      icon: IconDatabase,
    },
    {
      label: "Master Data",
      children: [
        {
          label: "Users",
          icon: IconUser,
        },
        {
          route: "/cms/master/kategori/kategoribarang",
          label: "Kategori Barang",
          icon: IconDatabase,
        },
        {
          route: "/cms/master/barang/namabarang",
          label: "Nama Barang",
          icon: IconDatabase,
        },
      ],
    },
  ];

  return (
    <Box p={"md"}>
      {topLevelLinks.map((link) => (
        <NavLink
          key={link.label}
          active={link.route ? router.route.startsWith(link.route) : undefined}
          onClick={() => {
            if (link.route) void router.push(link.route);
          }}
          leftSection={
            link.icon && (
              <link.icon
                strokeWidth={1.5}
                style={{
                  ...defaultIconStyle,
                  color: DEFAULT_THEME.colors.cyan[6],
                }}
              />
            )
          }
          label={link.label}
          childrenOffset={28}
        >
          {link.children?.map((linkChild) => (
            <NavLink
              key={linkChild.label}
              label={linkChild.label}
              active={
                linkChild.route
                  ? router.route.startsWith(linkChild.route)
                  : undefined
              }
              onClick={() => {
                if (linkChild.route) void router.push(linkChild.route);
              }}
              leftSection={
                linkChild.icon && (
                  <linkChild.icon
                    strokeWidth={1.5}
                    style={{
                      ...defaultIconStyle,
                      color: DEFAULT_THEME.colors.cyan[6],
                    }}
                  />
                )
              }
            />
          ))}
        </NavLink>
      ))}
    </Box>
  );
};
