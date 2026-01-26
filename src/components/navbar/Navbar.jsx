"use client";

import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import DarkModeToogel from "../DarkModeToogel/DarkModeToogel";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/FullLogo-removebg-preview.png" alt="logo" width={200} height={200} />
      </Link>
      <div className={styles.links}>
        <DarkModeToogel />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
