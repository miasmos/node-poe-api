import axios, { AxiosPromise, AxiosResponse } from "axios";

import { HOSTNAME } from "../constants";

interface GetOptions {
    path: string;
    params?: unknown;
}

class PoeClient {
    client = axios.create();

    sessionId: string | undefined;

    async get<T>({ path, params }: GetOptions): Promise<T> {
        const callback = this.client.get.bind(this.client, `https://${HOSTNAME}${path}`, {
            params,
        });
        const response = await this.resolve<T>(callback);
        return response;
    }

    async resolve<T>(callback: () => AxiosPromise): Promise<T> {
        const { data, status } = (await callback()) as AxiosResponse<T>;
        if (status !== 200) {
            throw new Error(`Got status code ${status}`);
        }

        return data as T;
    }
}

const poeClient = new PoeClient();

export default poeClient;
