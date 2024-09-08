import Link from "next/link";
import { Companies, People } from "./icons";

const menuItems = [
  {
    label: "CEOs",
    path: "/ceos",
    icon: <Companies />,
  },
  {
    label: "Companies",
    path: "/companies",
    icon: <People />,
  },
];

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center border-b border-[rgb(140 140 140 / .25)]">
        <Link href="/">Brand</Link>
        <ul className="flex items-center min-h-[52px]">
          {menuItems.map((item) => {
            return (
              <li
                key={item.label}
                className="inline-block min-w-[80px] text-xs text-black opacity-90"
              >
                <Link href={item.path} className="flex flex-col items-center">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
