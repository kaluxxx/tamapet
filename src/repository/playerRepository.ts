import {PlayerDTO} from "@/types/dtos/playerDTO";
import {Egg, Player} from "../../models/associations";
export const playerRepository = {
    create: async (playerDTO: PlayerDTO): Promise<Player> => {
        try {
            alert('Creating player: ' + JSON.stringify(playerDTO));
            return await Player.create(playerDTO)
        } catch (error) {
            alert('Error creating player: ' + error);
            console.error('Error creating player:', error);
            throw error;
        }
    },
    update: async (playerDTO: PlayerDTO): Promise<Player> => {
        try {
            const player = await Player.findOne({
                where: {telegramId: playerDTO.telegramId},
                include: [{
                    model: Egg,
                    as: 'eggs'
                }]
            });
            if (!player) {
                throw new Error('Player not found');
            }

            await player.update(playerDTO);
            return player;
        } catch (error) {
            console.error('Error updating player:', error);
            throw error;
        }
    },
    get: async (id: number): Promise<Player | null> => {
        try {
            return await Player.findOne({
                where: {telegramId: id},
                include: [{
                    model: Egg,
                    as: 'eggs'
                }]
            });
        } catch (error) {
            console.error('Error getting player:', error);
            throw error;
        }
    }
};