import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <p className="text-sm text-center lg:text-left text-neutral-500">
            Copyright © 2023 結う -web All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
