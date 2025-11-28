import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <Container>
        <div className=" px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Gist 24/7. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
