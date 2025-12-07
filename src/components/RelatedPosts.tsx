import { blogCardProp } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import RelatedPostsCard from "./RelatedPostsCard";

export const revalidate = 300; // Revalidate every 5 minutes

async function getRelatedData() {
  const query = `
  *[_type == 'blog'] | order(publishedAt desc)[0...3]{
title,
"currentSlug":slug.current,
category,
 titleImage, 
publishedAt
}`;

  const data = await client.fetch(query);
  return data;
}

const RelatedPosts = async () => {
  const data: blogCardProp[] = await getRelatedData();

  return (
    <section className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-4">
      {data.map((item, index) => (
        <RelatedPostsCard
          key={index}
          href={item.currentSlug}
          src={urlFor(item.titleImage).url()}
          publishedAt={item.publishedAt}
          title={item.title}
        />
      ))}{" "}
    </section>
  );
};

export default RelatedPosts;
