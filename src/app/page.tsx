import Image from "next/image";
import NavBar from "./_components/NavBar";
import MainContainer from "@/components/MainContainer";
import MainServices from "./_components/MainServices";
import ComfortSection from "./_components/ComfortSection";
import MainPageBudgetRequest from "./_components/MainPageBudgetRequest";

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
    </div>
  );
}
