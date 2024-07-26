'use client';
import coinIcon from "@/app/_assets/coin.svg";
import walletIcon from "@/app/_assets/wallet.svg";
import bagIcon from "@/app/_assets/bag.svg";
import Image from "next/image";
import {Link} from "@/components/Link/Link";

interface TopBarProps {
    coins: number;

}

export default function TopBar({coins}: TopBarProps) {
    return (
        <div className="sticky z-10 top-0 left-0 right-0 bg-white shadow-sm border border-gray-200 w-full">
            <div className="flex justify-between items-center gap-4 px-4 py-2">
                <div className="flex-1 flex justify-start items-center space-x-4">
                    <div className="flex flex-col items-center justify-center font-bold">
                        <Image src={coinIcon} alt="coin" className="w-12 h-12"/>
                        <span className="text-black">{coins ?? 0}</span>
                    </div>
                </div>
                <div className="flex-1 flex justify-between items-center">
                    <div className="flex-1 flex flex-col items-center justify-center font-bold">
                        <Link href='/ton-connect' className="w-full flex flex-col justify-center items-center">
                            <Image src={walletIcon} alt="wallet" className="w-12 h-12"/>
                            <span className="text-black text-sm">Wallet</span>
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center font-bold">
                        <Image src={bagIcon} alt="bag" className="w-12 h-12"/>
                        <span className="text-black text-sm">Inventory</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
