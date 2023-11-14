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
      <div className="bg-gray pb-20 pt-4">
        <h1 className="pb-4 pt-4 text-center text-xl text-primary">
          Read Our Stories
        </h1>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => {
              return <StoryCard key={i} />;
            })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
