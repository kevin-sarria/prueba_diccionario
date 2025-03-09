"use client"
import { useSelector } from "react-redux";

import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { Translation } from "@/components/Translation";
import { userConfigState } from "@/interfaces/userConfigState.interface";

export default function Home() {

  const { fontFamily } = useSelector( (state: { config: userConfigState }) => state.config );

  return (
    <div className={`${fontFamily} sm:w-2xl mx-4 md:mx-auto my-5 p-2`}>
      <Header />
      <SearchBar />
      <Translation />
    </div>
  );
}
