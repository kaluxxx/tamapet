'use server';

import {Player} from "@/types/entities/player";
import {playerRepository} from "@/repository/playerRepository";

export const get = async (id: number): Promise<Player> => {
    const player = await playerRepository.get(id);

    return JSON.parse(JSON.stringify(player));
}