import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header subHeader={"Public Library"} title={"All Videos"} />
      {dummyCards.map((card) => (
        <VideoCard {...card} />
      ))}
    </main>
  );
};

export default Page;
