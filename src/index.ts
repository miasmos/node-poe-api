import * as rp from 'request-promise';
import { StashTabsResponse } from './types/stashTabs';

export class NodePoeApi {
    public static origin = 'http://www.pathofexile.com/api';

    public static stashTabs = (nextChangeId?: string): Promise<StashTabsResponse> =>
        NodePoeApi.get('/public-stash-tabs', {
            id: nextChangeId
        }).promise();

    private static get = (path: string, qs: unknown): rp.RequestPromise =>
        rp.get({
            uri: `${NodePoeApi.origin}${path}`,
            qs,
            json: true
        });
}
