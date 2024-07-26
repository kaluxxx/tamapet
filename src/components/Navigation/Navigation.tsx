
import homeIcon from "@/app/_assets/home.svg";
import swordIcon from "@/app/_assets/sword.svg";
import cartIcon from "@/app/_assets/cart.svg";
import petIcon from "@/app/_assets/pet.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="w-full sticky bottom-0 left-0 right-0 bg-white shadow-md rounded-t-2xl border border-gray-200">
            <ul className="flex justify-between items-center space-x-4 px-4 py-2">
                <li className="flex-1">
                    <Link href={"/"} className="flex flex-col items-center justify-center font-bold p-2 rounded-lg bg-gray-200 hover:rounded-lg hover:bg-gray-300">
                        <Image src={homeIcon} alt="home" className="w-12 h-12"/>
                        <span className="text-black">
                            Home
                        </span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link href={"/"} className="flex flex-col items-center justify-center font-bold p-2 hover:rounded-lg hover:bg-gray-300">
                        <Image src={petIcon} alt="pet" className="w-12 h-12"/>
                        <span className="text-black">
                            Pets
                        </span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link href={"/"} className="flex flex-col items-center justify-center font-bold p-2 hover:rounded-lg hover:bg-gray-300">
                        <Image src={swordIcon} alt="sword" className="w-12 h-12"/>
                        <span className="text-black">
                            Quests
                        </span>
                    </Link>
                </li>
                <li className="flex-1">
                    <Link href={"/"} className="flex flex-col items-center justify-center font-bold p-2 hover:rounded-lg hover:bg-gray-300">
                        <Image src={cartIcon} alt="cart" className="w-12 h-12"/>
                        <span className="text-black">
                            Shop
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}