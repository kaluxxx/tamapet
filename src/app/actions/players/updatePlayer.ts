'use server';

import {playerRepository} from "@/repository/playerRepository";
import {PlayerDTO} from "@/types/dtos/playerDTO";
import {Player} from "@/types/entities/player";

export const updatePlayer = async (playerDTO: PlayerDTO): Promise<Player> => {
    const player = await playerRepository.update(playerDTO);

    return JSON.parse(JSON.stringify(player));
}