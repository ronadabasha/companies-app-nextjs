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
    <header className="fixed bg-white w-full left-0 top-0 border-b border-[rgb(140 140 140 / .25)] z-10">
      <nav className="flex justify-between items-center max-w-[1112px] mx-auto">
        <Link href="/">ama</Link>
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
