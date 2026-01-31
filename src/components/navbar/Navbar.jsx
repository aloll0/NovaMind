"use client";

import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import DarkModeToogel from "../DarkModeToogel/DarkModeToogel";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiMail,
  HiDocumentText,
  HiViewGrid,
} from "react-icons/hi";

const icons = {
  home: <HiHome />,
  about: <HiUser />,
  portfolio: <HiBriefcase />,
  contact: <HiMail />,
  blog: <HiDocumentText />,
  dashboard: <HiViewGrid />,
};

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: "home",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
    icon: "portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
    icon: "blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
    icon: "about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
    icon: "contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
    icon: "dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const [open, setOpen] = useState(false);
  
  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.menuIcon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <Link href="/" className={styles.logo}>
        <Image
          src="/FullLogo-removebg-preview.png"
          alt="logo"
          width={200}
          height={200}
          className={styles.logoImage}
        />
      </Link>
      <div className={styles.linksContainer}>
        <DarkModeToogel />
        <div className={styles.links}>
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
      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        <div className={styles.cancel} onClick={() => setOpen(false)}>
        <span className={styles.menuTitle}>Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.closeIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            <span className={styles.icon}>{icons[link.icon]}</span>
            {link.title}
          </Link>
        ))}

        {session.status === "authenticated" && (
          <button className={styles.mobileLogout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
