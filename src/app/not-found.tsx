import Link from "next/link";

const NotFound = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-white">
      <div className="px-5 xl:px-10">
        <div className="text-lg md:text-xl text-red-700 py-2">
          <h1 className="text-center">
            404 - Page Not Found or temporarily unavailable
          </h1>
        </div>
        <div className="text-blue-600 underline flex items-center justify-center py-2">
          <Link href="/">Back to home</Link>
        </div>
      </div>
    </main>
  );
};
export default NotFound;
