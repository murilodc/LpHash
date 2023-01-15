import { FC } from "react";
import Styles from "./home.module.scss";

export const Home: FC = () => {
  return (
    <div className="">
      <h2>SOLUÇÕES PERSONALIZADAS PARA O MERCADO MAIS PROMISSOR DA DÉCADA</h2>
      <h1 className={Styles.text}>Descentralização</h1>
      <h1 className={Styles.textMain}>transparente e descomplicada</h1>
      <p>
        Somos uma acessoria de alta performance especializada em criptoativos e
        criamos <br />
        os melhores serviços para proteger e aumentar o seu capital
      </p>
    </div>
  );
};
