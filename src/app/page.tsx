import BannerContainer from "@/Containers/HomePage/BannerContainer/BannerContainer";
import HeaderContainer from "@/Containers/HomePage/HeaderContainer/HeaderContainer";
import MenuContaner from "@/Containers/HomePage/MenuContaner/MenuContaner";
import TextSection from "@/Containers/HomePage/TextSection/TextSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <MenuContaner />
      <TextSection />
    </>
  );
}
