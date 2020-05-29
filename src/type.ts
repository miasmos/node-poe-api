/* eslint-disable camelcase */

import { ItemFrameType, StashType, League, ItemValueType } from "./enum";

export interface Item {
    abyssJewel?: boolean;
    additonalProperties?: [];
    artFilename?: string;
    category?: ItemCategory[];
    corrupted?: boolean;
    cosmeticMods?: string[];
    craftedMods?: string[];
    descrText?: string;
    duplicated?: boolean;
    elder?: boolean;
    enchantMods?: string[];
    explicitMods?: string[];
    flavourText?: string[];
    frameType: ItemFrameType;
    h: number;
    icon: string;
    id: string;
    identified: boolean;
    ilvl: number;
    implicitMods?: string[];
    inventoryId?: string;
    isRelic?: boolean;
    league: string;
    lockedToCharacter?: boolean;
    maxStackSize?: number;
    name: string;
    nextLevelRequirements?: ItemProperties[];
    note?: string;
    properties?: ItemProperties[];
    prophecyDiffText?: string;
    prophecyText?: string;
    requirements?: ItemProperties[];
    secDescrText?: string;
    shaper?: boolean;
    socketedItems?: (Item | GemItem)[];
    sockets?: ItemSockets[];
    additionalProperties?: ItemProperties[];
    stackSize?: number;
    support?: boolean;
    talismanTier?: number;
    typeLine: string;
    utilityMods?: string[];
    verified: boolean;
    w: number;
    x: number;
    y: number;
}

export interface GemItem extends Omit<Item, "x" | "y"> {
    socket: number;
    colour: string;
}

export interface ItemCategory {
    accessories: string[];
    armour: string[];
    jewels: string[];
    weapons: string[];
}

export interface ItemSockets {
    group: number;
    attr: string | boolean;
    sColour: string;
}

export interface ItemPropertyValuePair {
    [key: string]: ItemValueType;
}

export interface ItemProperties {
    name: string;
    values?: [string, number][];
    displayMode: number;
    type?: number;
    progress?: number;
    suffix?: string;
}

export interface Stashes {
    id: string;
    public: boolean;
    accountName: string | null;
    lastCharacterName: string | null;
    stash: string | null;
    stashType: StashType;
    league?: League;
    items: (Item | GemItem)[];
}

export interface StashTabsOptions {
    id: string;
}

export interface StashTabsResponse {
    next_change_id: string;
    stashes: Stashes[];
}
