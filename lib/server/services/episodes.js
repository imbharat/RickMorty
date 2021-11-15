import { EPISODES_END_POINT } from "../constants";
import axios from "axios";

export default class EpisodesServices{
    getEpisodes(){
        return axios.get(EPISODES_END_POINT);
    }
}