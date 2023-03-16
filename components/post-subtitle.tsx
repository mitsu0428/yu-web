import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostSubTitle = ({ children }: Props) => {
  return (
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h2>
  );
};

export default PostSubTitle;
