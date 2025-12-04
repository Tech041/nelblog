import Comment from "@/components/Comment";
import Container from "@/components/Container";
import RelatedPostsCard from "@/components/RelatedPostsCard";
import SocialIcons from "@/components/SocialIcons";
import { formatDate } from "@/lib/formatDate";
import { blogDetailsCardProp } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { BsPersonFill } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import { PortableText } from "@portabletext/react";
export const revalidate = 60; // Revalidate every 60 seconds


// Fetch blog details
async function getBlogDetails(slug: string) {
  const query = `
*[_type == 'blog' && slug.current == "${slug}"]{
  "currentSlug": slug.current,
  title,
  content,
  titleImage,
  category,
  publishedAt
}[0]
`;

  const data = await client.fetch(query);
  return data;
}

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const data: blogDetailsCardProp = await getBlogDetails(slug);

  console.log("Details is:", data);
  return (
    <main className="min-h-screen mt-5  shadow-2xl bg-white">
      <Container>
        <div className="w-full h-full md:w-[70%] pb-6 pt-3 ">
          <div className="w-full border-t border-b py-2 border-t-gray-100 border-b-gray-100 ">
            <div className="w-full text-gray-300 text-sm">
              <Link href="#" className="inline mr-2 font-semibold">
                Home
              </Link>
              <IoMdArrowRoundForward size={17} className="inline tmr-2" />
              <Link href="#" className="inline mr-2 font-semibold">
                Entertainment
              </Link>
              <IoMdArrowRoundForward size={17} className="inline  mr-2" />
              <span className="inline  ">
                It Wasn’t Just an Introduction” – Mohbad’s Friend Debunks Mr
                Aloba’s Wedding Claims With Receipts
              </span>
            </div>
          </div>
          <div className="w-full  border-t border-b py-2 border-t-gray-100 border-b-gray-100 ">
            <h1 className="text-[24px] md:text-[32px] font-bold">
              {data.title}
            </h1>
          </div>
          <div className="border-t border-b py-2 border-t-gray-100 border-b-gray-100 ">
            <div className="w-full text-gray-300 text-sm">
              <p className=" mr-2  inline items-center gap-2">
                {" "}
                <LuClock4 className="inline mr-2" />
                <span className="">{formatDate(data.publishedAt)}</span>
              </p>
              <p className="inline items-center">
                <BsPersonFill size={14} className="inline tmr-2" />
                <Link href="#" className="inline mr-2 ml-1 font-semibold">
                  Nelson
                </Link>
              </p>
              <p className="inline uppercase">{data.category}</p>
            </div>
          </div>
          {/* Highlights */}
          <div className="mt-6">
            <ul className="pl-5 italic text-sm">
              <li className="list-disc py-2">
                Mohbad’s friend, Damola, has released video evidence to dispute
                the claim made by the singer’s father, Joseph Aloba, that Mohbad
                and his partner, Wunmi, never had a traditional wedding.
              </li>
              <li className="list-disc py-2">
                Mohbad’s friend, Damola, has released video evidence to dispute
                the claim made by the singer’s father, Joseph Aloba, that Mohbad
                and his partner, Wunmi, never had a traditional wedding.
              </li>
              <li className="list-disc py-2">
                Mohbad’s friend, Damola, has released video evidence to dispute
                the claim made by the singer’s father, Joseph Aloba, that Mohbad
                and his partner, Wunmi, never had a traditional wedding.
              </li>
            </ul>
          </div>
          <div className="w-full h-[207px] md:h-[283px] relative">
            <Image
              fill
              src={urlFor(data.titleImage).url()}
              alt="blog_image"
              priority
              className="object-cover"
            />
          </div>
          {/* Blog content */}
          <div className=" mt-5 text-lg leading-8 prose prose-blue prose-lg prose-headings:underline prose-a:text-blue-500">
            <PortableText value={data.content} />
          </div>
          {/* social icons */}
          <SocialIcons />
          <div className="w-full  flex items-center bg-gray-200 px-2 py-1 ">
            <p className="font-semibold text-orange-400">Related Articles</p>
          </div>

          {/* Related posts */}
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-4">
            <RelatedPostsCard />
            <RelatedPostsCard />
            <RelatedPostsCard />
          </div>
          {/* comments */}
          <Comment />
        </div>
      </Container>
    </main>
  );
};

export default BlogDetailsPage;
