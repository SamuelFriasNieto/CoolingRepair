import Image from "next/image";
import NavBar from "./_components/NavBar";
import SolicitarPresupuestoMain from "./_components/SolicitarPresupuestoMain";
import MainContainer from "@/components/MainContainer";
import MainServices from "./_components/MainServices";
import ComfortSection from "./_components/ComfortSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <MainContainer>
        <SolicitarPresupuestoMain />
      </MainContainer>
      <MainServices />
      <MainContainer>
        <ComfortSection />
      </MainContainer>
    </div>
  );
}
