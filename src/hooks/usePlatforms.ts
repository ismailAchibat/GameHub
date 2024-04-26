import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from "ms"
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => 
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('24 h'),
        initialData: platforms
    })

export default usePlatforms;