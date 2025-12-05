import Link from "next/link";
import Container from "./Container";
import BlogCard from "./BlogCard";
import { client, urlFor } from "@/lib/sanity";
import { blogCardProp } from "@/lib/interface";
import { formatDate } from "@/lib/formatDate";
const headingStyle = " uppercase border-b-3 font-semibold border-b-orange-400";

export const revalidate = 60; // Revalidate every 60 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(publishedAt desc){
title,
"currentSlug":slug.current,
category,
 titleImage, 
publishedAt
}`;

  const data = await client.fetch(query);
  return data;
}

const Categories = async () => {
  const data: blogCardProp[] = await getData();
  return (
    <section className="bg-white py-5">
      <Container>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/"}>Tech News</Link>
            </h1>{" "}
            {data
              .slice()
              .filter((d) => d.category === "tech-news")
              .slice(0, 6)
              .map((item, index) => (
                <BlogCard
                  key={index}
                  href={item.currentSlug}
                  title={item.title}
                  publishedAt={formatDate(item.publishedAt)}
                  src={urlFor(item.titleImage).url()}
                />
              ))}
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/artificial-intelligence"}>
                Artificial Intelligence
              </Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "artificial-intelligence")
              .slice(0, 6)
              .map((item, index) => (
                <BlogCard
                  key={index}
                  href={item.currentSlug}
                  title={item.title}
                  publishedAt={formatDate(item.publishedAt)}
                  src={urlFor(item.titleImage).url()}
                />
              ))}
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/security"}>Security </Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "security")
              .slice(0, 6)
              .map((item, index) => (
                <BlogCard
                  key={index}
                  href={item.currentSlug}
                  title={item.title}
                  publishedAt={formatDate(item.publishedAt)}
                  src={urlFor(item.titleImage).url()}
                />
              ))}
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/applications"}>Applications </Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "applications")
              .slice(0, 6)
              .map((item, index) => (
                <BlogCard
                  key={index}
                  href={item.currentSlug}
                  title={item.title}
                  publishedAt={formatDate(item.publishedAt)}
                  src={urlFor(item.titleImage).url()}
                />
              ))}
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/tech-jobs"}>Tech Jobs </Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "jobs")
              .slice(0, 6)
              .map((item, index) => (
                <BlogCard
                  key={index}
                  href={item.currentSlug}
                  title={item.title}
                  publishedAt={formatDate(item.publishedAt)}
                  src={urlFor(item.titleImage).url()}
                />
              ))}
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/health-tech"}>Health Tech </Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "health-tech")
              .slice(0, 6)
              .map((item, index) => (
                <BlogCard
                  key={index}
                  href={item.currentSlug}
                  title={item.title}
                  publishedAt={formatDate(item.publishedAt)}
                  src={urlFor(item.titleImage).url()}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
