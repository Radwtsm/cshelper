import Image from "next/image";
import SearchAppBar from "./AppBar";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex gap-2 align-center items-around">
    <Link href="/mirage">MIRAGE</Link>
    <Link href="/dust">DUST2</Link>
    <Link href="/inferno">INFERNO</Link>
    </div>
  );
}
