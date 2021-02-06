import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12">
        <Image
          src={picture}
          width={700}
          height={700}
          alt={name}
          className="object-cover object-center rounded-full visible group-hover:hidden"
        />
      </div>
      <div className="ml-4 text-xl font-bold">{name}</div>
    </div>
  );
}
