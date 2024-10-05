import Image from "next/image";
import Link from "next/link";
import ARTHUR from "@/public/images/arthur_white.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex pl-2" aria-label="Cruip">
      <Image
        className=""
        src={ARTHUR}
        width={160}
        height={140}
        alt="Arthur Logo"
        draggable={false}
      />
    </Link>
  );
}
