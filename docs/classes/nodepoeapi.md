> ## [Path of Exile API](../README.md)

[Globals](../globals.md) / [NodePoeApi](nodepoeapi.md) /

# Class: NodePoeApi

## Hierarchy

* **NodePoeApi**

### Index

#### Properties

* [origin](nodepoeapi.md#static-origin)

#### Methods

* [get](nodepoeapi.md#static-private-get)
* [stashTabs](nodepoeapi.md#static-stashtabs)

## Properties

### `Static` origin

■ **origin**: *string* = "http://www.pathofexile.com/api"

Defined in dist/index.d.ts:3

*Defined in [src/index.ts:5](https://github.com/stephenpoole/poe-api/blob/e4f2593/src/index.ts#L5)*

___

## Methods

### `Static` `Private` get

▸ **get**(`path`: string, `qs`: unknown): *`rp.RequestPromise`*

*Defined in [src/index.ts:12](https://github.com/stephenpoole/poe-api/blob/e4f2593/src/index.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`qs` | unknown |

**Returns:** *`rp.RequestPromise`*

___

### `Static` stashTabs

▸ **stashTabs**(`nextChangeId?`: string): *`Promise<StashTabsResponse>`*

*Defined in [src/index.ts:7](https://github.com/stephenpoole/poe-api/blob/e4f2593/src/index.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`nextChangeId?` | string |

**Returns:** *`Promise<StashTabsResponse>`*

___