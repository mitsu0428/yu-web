import Link from "next/link";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        結う -web
      </h1>
      <div className="flex flex-col items-left">
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          <Link href="/about">About</Link>
        </h4>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          <Link href="/mail">Mail</Link>
        </h4>
      </div>
    </section>
  );
};

export default Intro;
