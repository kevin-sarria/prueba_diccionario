"use client"

import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { Translation } from "@/components/Translation";

export default function Home() {

  return (
    <div className="sm:w-2xl mx-4 md:mx-auto my-5 p-2">
      <Header />
      <SearchBar />

      <Translation />

    </div>
  );
}
