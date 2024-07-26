'use client';

import {usePlayer} from "@/store/usePlayer";
import {useRouter} from "next/navigation";
import {useInitData} from "@telegram-apps/sdk-react";
import {create} from "@/app/actions/players/createPlayer";
import {useEffect, useState} from "react";
import {get} from "@/app/actions/players/getPlayer"; // Import the get function

export default function Home() {
    const initData = useInitData();
    const {setPlayer} = usePlayer();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [playerExists, setPlayerExists] = useState(false);

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const user = initData?.user;

                if (!user) {
                    throw new Error('Invalid user data');
                }

                const {id} = user;

                if (!id) {
                    throw new Error('Invalid user data');
                }

                const playerData = await get(id);
                if (playerData) {
                    setPlayer(playerData);
                    setPlayerExists(true);
                    router.push('/home');
                } else {
                    setPlayerExists(false);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching player:', error);
                setLoading(false);
            }
        };

        fetchPlayer();
    }, [initData, router, setPlayer]);

    const createPlayer = async () => {
        try {
            const user = initData?.user;

            if (!user) {
                throw new Error('Invalid user data');
            }

            const {id, username} = user;

            if (!id || !username) {
                throw new Error('Invalid user data');
            }

            const newPlayer = await create({
                telegramId: id,
                username
            });

            setPlayer(newPlayer);
            router.push('/home');
        } catch (error) {
            console.error('Error creating player:', error);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-center">Welcome to the Hatchery!</span>
            <span className="text-lg font-semibold text-center">Your adventure just began! Click the button below to start!</span>
            {!playerExists && (
                <button
                    className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                    onClick={() => createPlayer()}
                >
                    Start Game
                </button>
            )}
        </div>
    )
}