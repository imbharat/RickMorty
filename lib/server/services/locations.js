import { LOCATIONS_END_POINT } from "../constants";
import axios from "axios";

export default class LocationsServices{
    getLocations(){
        return axios.get(LOCATIONS_END_POINT)
    }
}