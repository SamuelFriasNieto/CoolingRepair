import Image from "next/image";
import NavBar from "./_components/NavBar";
import MainContainer from "@/components/MainContainer";
import MainServices from "./_components/MainServices";
import ComfortSection from "./_components/ComfortSection";
import MainPageBudgetRequest from "./_components/MainPageBudgetRequest";
import BrandsSection from "./_components/BrandsSection";
import FAQSection from "./_components/FAQSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <MainContainer>
        <MainPageBudgetRequest />
      </MainContainer>
      <MainServices />
      <MainContainer>
        <ComfortSection />
      </MainContainer>
      <BrandsSection />
      <FAQSection />
    </div>
  );
}
