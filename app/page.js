// import Image from "next/image";
// import Logo from "../public/logo MS.png"
import Alert from "@/components/Alert";
import Navbar from "@/components/Navbar";
import TestBody from "@/components/TestBody";
import MainBody from "@/components/MainBody";

export default function Home() {
  return <div className=" w-full text-foreground flex flex-col">
    <Alert/>
    <Navbar/>
    {/* <TestBody/> */}
    <MainBody/>
    {/* <Image src={Logo} alt="MyShop" width={50}></Image> */}
  </div>;
}
