'use server';

import {playerRepository} from "@/repository/playerRepository";
import {PlayerDTO} from "@/types/dtos/playerDTO";
import {Player} from "@/types/entities/player";

export const createPlayer = async (playerDTO: PlayerDTO): Promise<Player> => {
    alert('Creating player: ' + JSON.stringify(playerDTO));
    const player = await playerRepository.create(playerDTO);

    return JSON.parse(JSON.stringify(player));
}
