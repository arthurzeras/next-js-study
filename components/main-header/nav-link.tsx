"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

interface Props {
  href: string;
}

export default function NavLink({
  href,
  children,
}: React.PropsWithChildren<Props>) {
  const path = usePathname();
  let className = styles["nav-link"];

  if (path.startsWith(href)) {
    className += ` ${styles["active"]}`;
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
