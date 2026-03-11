import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const navigation = [
  { href: "#community", label: "Clubs" },
  { href: "#events", label: "Events" },
  { href: "#challenges", label: "Challenges" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#journal", label: "Journal" }
] as const;

export function Header() {
  return (
    <header className="container" style={{ paddingTop: "1.2rem" }}>
      <nav
        aria-label="Main"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #2f3130",
          paddingBottom: "1rem"
        }}
      >
        <Link href="/" style={{ fontWeight: 700, letterSpacing: "0.14em" }}>
          BERLANDO RUN
        </Link>
        <NavigationMenu.Root>
          <NavigationMenu.List
            style={{
              display: "flex",
              gap: "1rem",
              fontSize: "0.85rem",
              listStyle: "none",
              margin: 0,
              padding: 0
            }}
          >
            {navigation.map((item) => (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link href={item.href}>{item.label}</NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </nav>
    </header>
  );
}
