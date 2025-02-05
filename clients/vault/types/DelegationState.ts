/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type DelegationState = {
  stakedAmount: beet.bignum
  enqueuedForCooldownAmount: beet.bignum
  coolingDownAmount: beet.bignum
  reserved: number[] /* size: 256 */
}

/**
 * @category userTypes
 * @category generated
 */
export const delegationStateBeet = new beet.BeetArgsStruct<DelegationState>(
  [
    ['stakedAmount', beet.u64],
    ['enqueuedForCooldownAmount', beet.u64],
    ['coolingDownAmount', beet.u64],
    ['reserved', beet.uniformFixedSizeArray(beet.u8, 256)],
  ],
  'DelegationState'
)
