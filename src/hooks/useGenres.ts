import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";


const apiclient = new APIClient<Genre>('/genres');

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiclient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
})


export default useGenres;