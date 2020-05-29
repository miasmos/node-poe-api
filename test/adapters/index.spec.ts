import { expect } from "chai";
import api, { StashTabsResponse } from "../../src";
import { intercept } from "../util";

const stashJson = require("../responses/stashTab.json");

describe("api/index", () => {
    describe("stabTabs()", () => {
        it("should return the expected response", async () => {
            intercept<StashTabsResponse>(stashJson);

            const response = await api.stashTabs({
                id: "1"
            });

            expect(response).deep.equal(stashJson);
        });
    });
});
