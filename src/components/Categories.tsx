import Link from "next/link";
import Container from "./Container";
import BlogCard from "./BlogCard";
import { client, urlFor } from "@/lib/sanity";
import { blogCardProp } from "@/lib/interface";
import { formatDate } from "@/lib/formatDate";
const headingStyle = " uppercase border-b-3 font-semibold border-b-orange-400";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(publishedAt desc){
title,
"currentSlug":slug.current,
category,
 titleImage, 
publishedAt
}`;

  const data = await client.fetch(query, {}, { next: { revalidate: 300 } });

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
              <Link href={"/"}>Technology</Link>
            </h1>{" "}
            {data
              .slice()
              .filter((d) => d.category === "technology")
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
              <Link href={"/category/health"}>Health</Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "health")
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
              <Link href={"/category/finance"}>Finance</Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "finance")
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
              <Link href={"/category/education"}>Education</Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "education")
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
              <Link href={"/category/public-sector"}>Public Sector </Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "public-sector")
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
              <Link href={"/category/extra"}>Extra </Link>
            </h1>
            {data
              .slice()
              .filter((d) => d.category === "extra")
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
