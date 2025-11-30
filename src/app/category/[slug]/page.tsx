import CategoryCard from "@/components/CategoryCard";
import Container from "@/components/Container";
import React from "react";

const Categories = () => {
  return (
    <main className="min-h-screen w-full">
      <Container>
        <div className="w-full  h-full md:w-[70%] pb-6">
          <div className="w-full  flex items-center bg-gray-200 px-2 py-4 ">
            <p className="font-semibold text-orange-400">Tech News</p>
          </div>
          {/* Cards */}
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </Container>
    </main>
  );
};

export default Categories;
