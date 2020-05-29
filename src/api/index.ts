/* eslint-disable @typescript-eslint/camelcase */

import { StashTabsOptions, StashTabsResponse } from "../type";
import client from "./client";

class PoeApi {
    static client = client.client;

    static stashTabs(params?: StashTabsOptions): Promise<StashTabsResponse> {
        return client.get<StashTabsResponse>({
            path: "/public-stash-tabs",
            params,
        });
    }
}

export default PoeApi;
