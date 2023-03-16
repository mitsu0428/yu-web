import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostSubTitle = ({ children }: Props) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-2 text-black dark:text-white">
      {children}
    </h2>
  );
};

export default PostSubTitle;
