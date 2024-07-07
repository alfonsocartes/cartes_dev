import Image from "next/image";

export const Avatar = ({ name, picture }) => {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8">
        <Image
          className="visible rounded-full object-cover object-center group-hover:hidden"
          src={picture.url}
          width={picture.width}
          height={picture.height}
          alt={name}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </div>
      <div className="ml-4 text-lg font-bold">{name}</div>
    </div>
  );
};
