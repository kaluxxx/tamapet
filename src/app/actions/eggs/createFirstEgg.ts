'use server';

import {eggRepository} from "@/repository/eggRepository";

export const createFirstEgg = async (playerId: number) => {
    const egg = await eggRepository.createFirstEgg(playerId);

    return JSON.parse(JSON.stringify(egg));
}