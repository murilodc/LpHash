import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Home } from "../components/home";
import Header from "../components/header";

export default function Index() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
