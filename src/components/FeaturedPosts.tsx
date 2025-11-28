import Container from "./Container";

const FeaturedPosts = () => {
  return (
    <section className="w-full h-full py-12">
      <Container>
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-6">Featured Posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">
                How Next.js Powers Modern Blogs
              </h4>
              <p className="text-sm text-gray-600">
                Explore the benefits of server-side rendering and static
                generation.
              </p>
            </article>
            <article className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">
                Tailwind CSS: Utility-First Design
              </h4>
              <p className="text-sm text-gray-600">
                Build beautiful UIs faster with Tailwind’s atomic classes.
              </p>
            </article>
            <article className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">
                Sanity CMS for Scalable Content
              </h4>
              <p className="text-sm text-gray-600">
                Manage structured content with GROQ and real-time editing.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPosts;
