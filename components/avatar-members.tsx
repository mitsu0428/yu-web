import Avatar from "./avatar";

const AvatarMembers = () => {
  return (
    <div className="flex flex-col items-left">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight">
        Members
      </h2>
      <div className="flex items-center mt-4">
        <Avatar
          name="Mitsuhiro Okada"
          picture="assets/blog/authors/mitsu.jpg"
        />
      </div>
      <div className="flex items-center mt-4">
        <Avatar
          name="Hyogo Tobari"
          picture="assets/blog/authors/hyogo.jpg"
        />
      </div>
    </div>
  );
};

export default AvatarMembers;
