/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { DelegationState, delegationStateBeet } from '../types/DelegationState'

/**
 * Arguments used to create {@link VaultOperatorDelegation}
 * @category Accounts
 * @category generated
 */
export type VaultOperatorDelegationArgs = {
  vault: web3.PublicKey
  operator: web3.PublicKey
  delegationState: DelegationState
  lastUpdateSlot: beet.bignum
  index: beet.bignum
  bump: number
  reserved: number[] /* size: 263 */
}
/**
 * Holds the data for the {@link VaultOperatorDelegation} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class VaultOperatorDelegation implements VaultOperatorDelegationArgs {
  private constructor(
    readonly vault: web3.PublicKey,
    readonly operator: web3.PublicKey,
    readonly delegationState: DelegationState,
    readonly lastUpdateSlot: beet.bignum,
    readonly index: beet.bignum,
    readonly bump: number,
    readonly reserved: number[] /* size: 263 */
  ) {}

  /**
   * Creates a {@link VaultOperatorDelegation} instance from the provided args.
   */
  static fromArgs(args: VaultOperatorDelegationArgs) {
    return new VaultOperatorDelegation(
      args.vault,
      args.operator,
      args.delegationState,
      args.lastUpdateSlot,
      args.index,
      args.bump,
      args.reserved
    )
  }

  /**
   * Deserializes the {@link VaultOperatorDelegation} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [VaultOperatorDelegation, number] {
    return VaultOperatorDelegation.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link VaultOperatorDelegation} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<VaultOperatorDelegation> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(
        `Unable to find VaultOperatorDelegation account at ${address}`
      )
    }
    return VaultOperatorDelegation.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(
      programId,
      vaultOperatorDelegationBeet
    )
  }

  /**
   * Deserializes the {@link VaultOperatorDelegation} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(
    buf: Buffer,
    offset = 0
  ): [VaultOperatorDelegation, number] {
    return vaultOperatorDelegationBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link VaultOperatorDelegation} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return vaultOperatorDelegationBeet.serialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link VaultOperatorDelegation}
   */
  static get byteSize() {
    return vaultOperatorDelegationBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link VaultOperatorDelegation} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      VaultOperatorDelegation.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link VaultOperatorDelegation} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === VaultOperatorDelegation.byteSize
  }

  /**
   * Returns a readable version of {@link VaultOperatorDelegation} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      vault: this.vault.toBase58(),
      operator: this.operator.toBase58(),
      delegationState: this.delegationState,
      lastUpdateSlot: (() => {
        const x = <{ toNumber: () => number }>this.lastUpdateSlot
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      index: (() => {
        const x = <{ toNumber: () => number }>this.index
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      bump: this.bump,
      reserved: this.reserved,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const vaultOperatorDelegationBeet = new beet.BeetStruct<
  VaultOperatorDelegation,
  VaultOperatorDelegationArgs
>(
  [
    ['vault', beetSolana.publicKey],
    ['operator', beetSolana.publicKey],
    ['delegationState', delegationStateBeet],
    ['lastUpdateSlot', beet.u64],
    ['index', beet.u64],
    ['bump', beet.u8],
    ['reserved', beet.uniformFixedSizeArray(beet.u8, 263)],
  ],
  VaultOperatorDelegation.fromArgs,
  'VaultOperatorDelegation'
)
