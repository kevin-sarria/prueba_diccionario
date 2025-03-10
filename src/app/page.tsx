"use client"
import { useSelector } from "react-redux";

import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { Translation } from "@/components/Translation";
import { userConfigState } from "@/interfaces/userConfigState.interface";
import { HistoryButton } from "@/components/HistoryButton";
import { DrawerHistory } from "@/components/DrawerHistory";
import { useState } from "react";

export default function Home() {

  const { fontFamily } = useSelector( (state: { config: userConfigState }) => state.config );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={`${fontFamily} sm:w-2xl mx-4 md:mx-auto my-5 p-2 overflow-y-auto overflow-x-hidden min-h-screen`}>
      <Header />
      <SearchBar />
      <HistoryButton setIsDrawerOpen={setIsDrawerOpen} />
      <Translation />
      <DrawerHistory isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
}
