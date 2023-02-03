import { navbarLinks } from "@/mocks/links";
import Link from "next/link";
import style from "./styleNavbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <ul>
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
