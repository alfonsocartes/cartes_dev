import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8">
        <Image
          src={picture.url}
          width={picture.width}
          height={picture.height}
          alt={name}
          className="object-cover object-center rounded-full visible group-hover:hidden"
        />
      </div>
      <div className="ml-4 text-lg font-bold">{name}</div>
    </div>
  );
}
