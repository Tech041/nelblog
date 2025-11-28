import Container from "./Container";

const Categories = () => {
  return (
    <section className="bg-gray-100 py-12">
      <Container>
        <div className="w-full h-full">
          <h3 className="text-2xl font-bold mb-6">Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <span className="bg-yellow-200 px-4 py-2 rounded text-sm font-medium">
              Guides
            </span>
            <span className="bg-green-200 px-4 py-2 rounded text-sm font-medium">
              News
            </span>
            <span className="bg-blue-200 px-4 py-2 rounded text-sm font-medium">
              Reviews
            </span>
            <span className="bg-purple-200 px-4 py-2 rounded text-sm font-medium">
              Opinion
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
