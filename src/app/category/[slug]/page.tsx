import CategoryCard from "@/components/CategoryCard";
import Container from "@/components/Container";
import { formatDate } from "@/lib/formatDate";
import { blogCategoryCardProp } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
export const revalidate = 300; // Revalidate every 5 minutes

async function fetchByCategory(slug: string) {
  const query = `
   *[_type == "blog" && category == "${slug}"]
  | order(publishedAt desc) {
    title,
    "currentSlug": slug.current,
    titleImage,
    content,
    publishedAt
} `;
  const data = await client.fetch(query);
  return data;
}

const Categories = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const data: blogCategoryCardProp[] = await fetchByCategory(slug);

  return (
    <main className="min-h-screen w-full">
      <Container>
        <div className="w-full  h-full md:w-[70%] pb-6">
          <div className="w-full  flex items-center bg-gray-200 p-2 ">
            <p className="font-semibold text-orange-400 capitalize">{slug}</p>
          </div>
          {/* Cards */}
          {data.map((item, index) => (
            <CategoryCard
              key={index}
              href={item.currentSlug}
              title={item.title}
              content={<PortableText value={item.content} />}
              publishedAt={formatDate(item.publishedAt)}
              src={urlFor(item.titleImage).url()}
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Categories;
