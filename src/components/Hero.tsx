import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <Container>
        <div className="relative w-full h-[650px] lg:h-[438px]">
          {/* Hero Image */}
          <Link className="w-full h-full" href={""}>
            <Image
              src="/images/hero_img.png"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </Link>

          {/* Overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[450px] lg:h-[280px] px-3 md:px-5 bg-black/70 flex items-center justify-center text-white">
            {/* Title */}
            <div className="">
              <Link
                href={""}
                className="text-xl md:text-2xl font-semibold line-clamp-2"
              >
                She Said She Was Going to Ibadan’- Mother of 3 kidnapped in
                Abuja on her way to boyfriend’s house
              </Link>
              {/* First two line */}
              <p className="text-sm md:text-base font-light line-clamp-2">
                A mother of three was reportedly abducted in Abuja after
                secretly traveling there to meet her boyfriend, having told her
                husband she was going to Ibadan. Kidnappers are demanding a ₦50
                million ransom. The boyfriend
              </p>
              <ol className="pl-5 mt-3  ">
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
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
