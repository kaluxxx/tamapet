// src/app/page.tsx
'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import TopBar from "@/components/TopBar/TopBar";
import egg1 from "@/app/_assets/egg-1.png";
import egg2 from "@/app/_assets/egg-2.png"; // Image de l'oeuf éclos

// Définir les caractéristiques de l'œuf
const eggCharacteristics = {
    rarity: "Rare", // Exemples: "Common", "Rare", "Epic", "Legendary"
    hatchTime: 600, // Temps d'éclosion en secondes
    generation: 1,  // Génération de l'œuf
    color: "Blue"   // Couleur de l'œuf
};

export default function Home() {
    const [timeRemaining, setTimeRemaining] = useState(eggCharacteristics.hatchTime);
    const [currency, setCurrency] = useState(100); // Monnaie initiale
    const [eggHatched, setEggHatched] = useState(false);

    useEffect(() => {
        if (timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            setEggHatched(true);
        }
    }, [timeRemaining]);

    const reduceTime = () => {
        const reductionAmount = 60; // Réduire d'une minute
        const cost = 10; // Coût en monnaie de jeu

        if (currency >= cost) {
            setCurrency(currency - cost);
            setTimeRemaining(timeRemaining - reductionAmount);
        } else {
            alert("Not enough currency!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center overflow-y-scroll">
            <TopBar coins={1000}/>
            <div className="flex flex-col items-center justify-center space-y-6 mt-8">
                <h1 className="text-3xl font-bold text-center text-black">
                    Egg N°XXXX
                </h1>
                <div className="flex flex-row items-center justify-center">

                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="p-2 rounded-md bg-gray-400">
                        <Image src={eggHatched ? egg2 : egg1} alt="egg" className="w-48 h-48" priority={true} />
                    </div>
                    <p className="text-lg text-center text-gray-700 mt-4">
                        {eggHatched ? "Your egg has hatched!" : `Time remaining: ${Math.floor(timeRemaining / 60)}:${timeRemaining % 60}`}
                    </p>
                    {!eggHatched && (
                        <button
                            className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                            onClick={reduceTime}
                        >
                            Reduce Time (Cost: 10)
                        </button>
                    )}
                </div>
                <div className="text-lg text-center text-gray-700 mt-4">
                    <p>Rarity: {eggCharacteristics.rarity}</p>
                    <p>Generation: {eggCharacteristics.generation}</p>
                    <p>Color: {eggCharacteristics.color}</p>
                </div>
                <p className="text-lg text-center text-gray-700 mt-4">
                    Currency: {currency}
                </p>
            </div>
            <Navigation />
        </div>
    );
}
