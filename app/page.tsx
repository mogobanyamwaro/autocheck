import Experience from "@/components/home/experience";
import Explore from "@/components/home/explore/explore";
import ExploreCard from "@/components/home/explore/explore-card";
import Footer from "@/components/footer";
import Banner from "@/components/home/header/banner";
import Header from "@/components/home/header/header";
import InstallApp from "@/components/home/install-app";
import Reviews from "@/components/home/reviews";
import Search from "@/components/home/search";
import StoryCard from "@/components/home/story-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Search />
      <Explore />
      <ExploreCard />
      <Experience />
      <Reviews />
      <InstallApp />
      <StoryCard />
      <Footer />
    </main>
  );
}
