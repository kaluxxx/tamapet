'use client';
import hatchery from "@/app/_assets/hatchery.png";
import earn from "@/app/_assets/earn.png";
import care from "@/app/_assets/care.png";
import Image from "next/image";
import {Link} from "@/components/Link/Link";

export default function Home() {
    return (
        <div className="flex-1 flex flex-col items-center my-4">
            <div className="relative p-2 rounded-md">
                <Link href={"/hatchery"}>
                    <Image src={hatchery} alt="Hatchery" className="rounded-md h-[179.67px]"/>
                    <div className="absolute inset-2 bg-black opacity-50 rounded-md"></div>
                    <div className="absolute inset-2 flex flex-col items-center justify-center gap-2">
                        <span className="text-white font-bold text-xl">Hatchery</span>
                        <span className="text-white font-semibold text-md">Let&apos;s hatch some eggs!</span>
                    </div>
                </Link>
            </div>
            <div className="relative p-2 rounded-md">
                <Link href={"/earn"}>
                    <Image src={earn} alt="Earn" className="rounded-md"/>
                    <div className="absolute inset-2 bg-black opacity-50 rounded-md"></div>
                    <div className="absolute inset-2 flex flex-col items-center justify-center">
                        <span className="text-white font-bold text-xl">Earn</span>
                        <span className="text-white font-semibold text-md">Earn coins with your pets!</span>
                    </div>
                </Link>
            </div>
            <div className="relative p-2 rounded-md">
                <Link href={"/care"}>
                    <Image src={care} alt="Care" className="rounded-md"/>
                    <div className="absolute inset-2 bg-black opacity-50 rounded-md"></div>
                    <div className="absolute inset-2 flex flex-col items-center justify-center">
                        <span className="text-white font-bold text-xl">Care</span>
                        <span className="text-white font-semibold text-md">Take care of your pets!</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}