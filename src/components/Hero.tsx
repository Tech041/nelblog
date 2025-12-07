import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { fetchDataProp } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export const revalidate = 300; // Revalidate every 5 minutes

async function fetchData() {
  const query = `
  *[_type == 'blog'] | order(publishedAt desc)[0]{
title,
"currentSlug":slug.current,
category,
titleImage, 
content,
publishedAt
}`;

  const data = await client.fetch(query);
  return data;
}

const Hero = async () => {
  const data: fetchDataProp = await fetchData();
  return (
    <section className="">
      <Container>
        <div className="relative w-full h-[400px] lg:h-[438px]">
          {/* Hero Image */}
          <Link className="w-full h-full" href={`/${data.currentSlug}`}>
            <Image
              src={urlFor(data.titleImage).url()}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
          </Link>

          {/* Overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] lg:h-[180px] px-3 md:px-5 bg-black/70 flex items-center justify-center text-white">
            {/* Title */}
            <div className="">
              <Link
                href={`/${data.currentSlug}`}
                className="text-2xl md:text-3xl font-semibold line-clamp-2"
              >
                {data.title}
              </Link>
              {/* First two line */}
              <div className="mt-3 text-lg md:text-base font-light line-clamp-3">
                <PortableText value={data.content} />
              </div>
              {/* <ol className="pl-5 mt-3  ">
                <Link href={""}>
                  <li className="list-disc  py-1  ">
                    Bride’s Heartwarming Hug With Fola Steals The Show At
                    Wedding
                  </li>
                </Link>
                <Link href={""}>
                  <li className="list-disc py-1  ">
                    Goodluck Jonathan Is Safe, Out Of Guinea-Bissau – FG Clears
                    The Air
                  </li>
                </Link>
                <Link href={""}>
                  <li className="list-disc py-1">
                    Nigerian Actress Seeks UK Asylum, Says Fame Endangers Her
                    Life After End SARS Activism
                  </li>
                </Link>
                <Link href={""}>
                  <li className="list-disc py-1 ">
                    Newlywed Couple Abducted in Edo State; Kidnappers Demand ₦50
                    Million Ransom
                  </li>
                </Link>
              </ol> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
