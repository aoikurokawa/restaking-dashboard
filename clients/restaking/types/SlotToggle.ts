/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type SlotToggle = {
  slotAdded: beet.bignum
  slotRemoved: beet.bignum
  reserved: number[] /* size: 32 */
}

/**
 * @category userTypes
 * @category generated
 */
export const slotToggleBeet = new beet.BeetArgsStruct<SlotToggle>(
  [
    ['slotAdded', beet.u64],
    ['slotRemoved', beet.u64],
    ['reserved', beet.uniformFixedSizeArray(beet.u8, 32)],
  ],
  'SlotToggle'
)
