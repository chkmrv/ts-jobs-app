import { ENDPOINTS } from '../config';
import api from './fetch';
import {Career} from "../types";

const mapFromCareerList = (jobs: Career[] = []): Map<string, Career>  => {
    const result = new Map<string, Career>();
    jobs.forEach((item) => {
        result[item.pathId] = item;
    });
    return result;
};

export const getCareerList = async (): Promise<Map<string, Career>> => {
    let res: Career[] = (await api.get(ENDPOINTS.JOBS)) as any as Career[];
    return mapFromCareerList(res)
};
