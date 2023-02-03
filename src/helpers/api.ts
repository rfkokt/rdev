import axios from 'axios'
import {TRepoRes} from "@/types";

export const getRepo = async () => {
    try {
        const {data} = await axios.get<TRepoRes>(`https://api.github.com/users/rfkokt/repos`)
        return data;
    } catch (e) {
        //
    }
}