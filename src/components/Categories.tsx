import Link from "next/link";
import Container from "./Container";
import BlogCard from "./BlogCard";
const headingStyle = " uppercase border-b-3 font-semibold border-b-orange-400";

const Categories = () => {
  return (
    <section className="bg-white py-5">
      <Container>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/"}>Tech News</Link>
            </h1>{" "}
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/artificial-intelligence"}>
                Artificial Intelligence
              </Link>
            </h1>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/security"}>Security </Link>
            </h1>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/applications"}>Applications </Link>
            </h1>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/tech-jobs"}>Tech Jobs </Link>
            </h1>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="">
            <h1 className={headingStyle}>
              <Link href={"/category/health-tech"}>Health Tech </Link>
            </h1>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
