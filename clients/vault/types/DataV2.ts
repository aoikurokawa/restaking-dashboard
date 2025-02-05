/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type DataV2 = {
  name: string
  symbol: string
  uri: string
  sellerFeeBasisPoints: number
  creators: beet.COption<number>
  collection: beet.COption<number>
  uses: beet.COption<number>
}

/**
 * @category userTypes
 * @category generated
 */
export const dataV2Beet = new beet.FixableBeetArgsStruct<DataV2>(
  [
    ['name', beet.utf8String],
    ['symbol', beet.utf8String],
    ['uri', beet.utf8String],
    ['sellerFeeBasisPoints', beet.u16],
    ['creators', beet.coption(beet.u8)],
    ['collection', beet.coption(beet.u8)],
    ['uses', beet.coption(beet.u8)],
  ],
  'DataV2'
)
