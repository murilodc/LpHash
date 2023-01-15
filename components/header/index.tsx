import Link from "next/link";
import { Button } from "../button";
import Styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className="logo">
        <h1>HASH</h1>
      </div>
      <nav className={Styles.menu}>
        <div className={Styles.menuContainer}>
          <Link href="/">Home</Link>
          <Link href="/">Sobre nós</Link>
          <Link href="/">Contato</Link>
          <Button>Login</Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
