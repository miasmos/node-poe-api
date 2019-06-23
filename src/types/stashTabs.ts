export enum StashType {
    Normal = 'NormalStash',
    Premium = 'PremiumStash',
    Quad = 'QuadStash',
    Essence = 'EssenceStash',
    Currency = 'CurrencyStash',
    Map = 'MapStash',
    Fragment = 'FragmentStash',
    Divination = 'DivinationStash'
}

export enum League {
    Standard = 'Standard',
    Hardcore = 'Hardcore'
}

export interface Item {
    abyssJewel?: boolean;
    additonalProperties?: [];
    artFilename?: string;
    category: ItemCategory[];
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
    socketedItems?: Item[];
    sockets?: ItemSockets[];
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

export interface ItemProperties {
    name: string;
    values: ItemPropertyValuePair[];
    displayMode: number;
    type: number;
    progress: number;
}

export interface ItemPropertyValuePair {
    [key: string]: ItemValueType;
}

export enum ItemValueType {
    White = 0,
    Blue = 1,
    Fire = 4,
    Cold = 5,
    Lightning = 6,
    Chaos = 7
}

export enum ItemFrameType {
    Normal = 0,
    Magic = 1,
    Rare = 2,
    Unique = 3,
    Gem = 4,
    Currency = 5,
    DivinationCard = 6,
    QuestItem = 7,
    Prophecy = 8,
    Relic = 9
}

export interface Stashes {
    id: string;
    public: boolean;
    accountName: string | null;
    lastCharacterName: string | null;
    stash: string | null;
    stashType: StashType;
    league: League;
    items: Item[];
}

export interface StashTabsResponse {
    next_change_id: string;
    stashes: Stashes[];
}
