import AskedQuestions from "@/Components/Home/AskedQuestions/AskedQuestions";
import HowToUse from "@/Components/Home/HTU/HowToUse";
import Hero from "@/Components/Home/Hero/Hero";
import ViewMore from "@/Components/Home/ViewMore/ViewMore";
import WhoAreWe from "@/Components/Home/WAW/WhoAreWe";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ViewMore />
      <WhoAreWe />
      <HowToUse />
      <AskedQuestions />
    </main>
  )
}
