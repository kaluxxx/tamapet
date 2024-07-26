import {PlayerDTO} from "@/types/dtos/playerDTO";
import Player from "@/db/models/player";

export const playerRepository = {
    create: async (playerDTO: PlayerDTO) => {
        try {
            return await Player.create(playerDTO);
        } catch (error) {
            console.error('Error creating player:', error);
            throw error;
        }
    },
    get: async (id: number) => {
        try {
            return await Player.findOne({where: {telegramId: id}});
        } catch (error) {
            console.error('Error getting player:', error);
            throw error;
        }
    }
};