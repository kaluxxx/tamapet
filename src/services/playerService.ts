import httpRequest from "@/utils/httpRequest";
import {PlayerDTO} from "@/types/dtos/playerDTO";
import {PlayerResponse} from "@/types/payload/response";
import {PLAYER_ENDPOINTS} from "@/app/api/endpoints";

export const playerService = {
    create: async (playerDTO: PlayerDTO): Promise<PlayerResponse> =>
        httpRequest.post({url: PLAYER_ENDPOINTS, body: playerDTO}),
}