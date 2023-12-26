import BannerContainer from "@/Containers/HomePage/BannerContainer/BannerContainer";
import HeaderContainer from "@/Containers/HomePage/HeaderContainer/HeaderContainer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
    </>
  );
}
