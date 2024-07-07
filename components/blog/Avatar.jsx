import Image from "next/legacy/image";

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
          layout="responsive"
        />
      </div>
      <div className="ml-4 text-lg font-bold">{name}</div>
    </div>
  );
};
