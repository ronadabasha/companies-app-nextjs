"use client";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  return (
    <header className="px-4 min-[1125px]:px-0 fixed bg-white w-full left-0 top-0 border-b border-[rgb(140 140 140 / .25)] z-10">
      <nav className="flex justify-between items-center max-w-[1112px] mx-auto">
        <Link href="/" className="font-bold text-md">
          ama
        </Link>
        <ul className="flex items-center min-h-[52px]">
          {menuItems.map((item) => {
            return (
              <li
                key={item.label}
                className="inline-block min-w-[80px] text-xs text-black"
              >
                <Link
                  href={item.path}
                  className={`link ${
                    pathname === item.path
                      ? "border-black"
                      : "border-transparent opacity-90"
                  } border-b-2 flex flex-col items-center pb-[2px]`}
                >
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
