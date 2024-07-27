'use server';

import {Player} from "@/types/entities/player";
import {playerRepository} from "@/repository/playerRepository";

export const getPlayer = async (id: number): Promise<Player> => {
    console.log('Fetching player:', id);
    const player = await playerRepository.findById(id);

    return JSON.parse(JSON.stringify(player));
}