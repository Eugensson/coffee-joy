import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="relative w-25 h-10 xl:w-30 z-50">
      <Image
        src="/assets/logo.svg"
        alt="logo"
        fill
        className="object-contain"
      />
    </Link>
  );
};
