/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from "@solana/web3.js";
import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";
import { DelegationState, delegationStateBeet } from "../types/DelegationState";

/**
 * Arguments used to create {@link Vault}
 * @category Accounts
 * @category generated
 */
export type VaultArgs = {
  base: web3.PublicKey;
  vrtMint: web3.PublicKey;
  supportedMint: web3.PublicKey;
  vrtSupply: beet.bignum;
  tokensDeposited: beet.bignum;
  depositCapacity: beet.bignum;
  delegationState: DelegationState;
  additionalAssetsNeedUnstaking: beet.bignum;
  vrtEnqueuedForCooldownAmount: beet.bignum;
  vrtCoolingDownAmount: beet.bignum;
  vrtReadyToClaimAmount: beet.bignum;
  admin: web3.PublicKey;
  delegationAdmin: web3.PublicKey;
  operatorAdmin: web3.PublicKey;
  ncnAdmin: web3.PublicKey;
  slasherAdmin: web3.PublicKey;
  capacityAdmin: web3.PublicKey;
  feeAdmin: web3.PublicKey;
  delegateAssetAdmin: web3.PublicKey;
  feeWallet: web3.PublicKey;
  mintBurnAdmin: web3.PublicKey;
  metadataAdmin: web3.PublicKey;
  vaultIndex: beet.bignum;
  ncnCount: beet.bignum;
  operatorCount: beet.bignum;
  slasherCount: beet.bignum;
  lastFeeChangeSlot: beet.bignum;
  lastFullStateUpdateSlot: beet.bignum;
  depositFeeBps: number;
  withdrawalFeeBps: number;
  nextWithdrawalFeeBps: number;
  rewardFeeBps: number;
  programFeeBps: number;
  bump: number;
  isPaused: boolean;
  lastStartStateUpdateSlot: beet.bignum;
  reserved: number[] /* size: 251 */;
};
/**
 * Holds the data for the {@link Vault} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Vault implements VaultArgs {
  private constructor(
    readonly base: web3.PublicKey,
    readonly vrtMint: web3.PublicKey,
    readonly supportedMint: web3.PublicKey,
    readonly vrtSupply: beet.bignum,
    readonly tokensDeposited: beet.bignum,
    readonly depositCapacity: beet.bignum,
    readonly delegationState: DelegationState,
    readonly additionalAssetsNeedUnstaking: beet.bignum,
    readonly vrtEnqueuedForCooldownAmount: beet.bignum,
    readonly vrtCoolingDownAmount: beet.bignum,
    readonly vrtReadyToClaimAmount: beet.bignum,
    readonly admin: web3.PublicKey,
    readonly delegationAdmin: web3.PublicKey,
    readonly operatorAdmin: web3.PublicKey,
    readonly ncnAdmin: web3.PublicKey,
    readonly slasherAdmin: web3.PublicKey,
    readonly capacityAdmin: web3.PublicKey,
    readonly feeAdmin: web3.PublicKey,
    readonly delegateAssetAdmin: web3.PublicKey,
    readonly feeWallet: web3.PublicKey,
    readonly mintBurnAdmin: web3.PublicKey,
    readonly metadataAdmin: web3.PublicKey,
    readonly vaultIndex: beet.bignum,
    readonly ncnCount: beet.bignum,
    readonly operatorCount: beet.bignum,
    readonly slasherCount: beet.bignum,
    readonly lastFeeChangeSlot: beet.bignum,
    readonly lastFullStateUpdateSlot: beet.bignum,
    readonly depositFeeBps: number,
    readonly withdrawalFeeBps: number,
    readonly nextWithdrawalFeeBps: number,
    readonly rewardFeeBps: number,
    readonly programFeeBps: number,
    readonly bump: number,
    readonly isPaused: boolean,
    readonly lastStartStateUpdateSlot: beet.bignum,
    readonly reserved: number[] /* size: 251 */,
  ) {}

  /**
   * Creates a {@link Vault} instance from the provided args.
   */
  static fromArgs(args: VaultArgs) {
    return new Vault(
      args.base,
      args.vrtMint,
      args.supportedMint,
      args.vrtSupply,
      args.tokensDeposited,
      args.depositCapacity,
      args.delegationState,
      args.additionalAssetsNeedUnstaking,
      args.vrtEnqueuedForCooldownAmount,
      args.vrtCoolingDownAmount,
      args.vrtReadyToClaimAmount,
      args.admin,
      args.delegationAdmin,
      args.operatorAdmin,
      args.ncnAdmin,
      args.slasherAdmin,
      args.capacityAdmin,
      args.feeAdmin,
      args.delegateAssetAdmin,
      args.feeWallet,
      args.mintBurnAdmin,
      args.metadataAdmin,
      args.vaultIndex,
      args.ncnCount,
      args.operatorCount,
      args.slasherCount,
      args.lastFeeChangeSlot,
      args.lastFullStateUpdateSlot,
      args.depositFeeBps,
      args.withdrawalFeeBps,
      args.nextWithdrawalFeeBps,
      args.rewardFeeBps,
      args.programFeeBps,
      args.bump,
      args.isPaused,
      args.lastStartStateUpdateSlot,
      args.reserved,
    );
  }

  /**
   * Deserializes the {@link Vault} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [Vault, number] {
    return Vault.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Vault} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<Vault> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    );
    if (accountInfo == null) {
      throw new Error(`Unable to find Vault account at ${address}`);
    }
    return Vault.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      "Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8",
    ),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, vaultBeet);
  }

  /**
   * Deserializes the {@link Vault} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Vault, number] {
    return vaultBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link Vault} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return vaultBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Vault}
   */
  static get byteSize() {
    return vaultBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Vault} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Vault.byteSize,
      commitment,
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Vault} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Vault.byteSize;
  }

  /**
   * Returns a readable version of {@link Vault} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      base: this.base.toBase58(),
      vrtMint: this.vrtMint.toBase58(),
      supportedMint: this.supportedMint.toBase58(),
      vrtSupply: (() => {
        const x = <{ toNumber: () => number }>this.vrtSupply;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      tokensDeposited: (() => {
        const x = <{ toNumber: () => number }>this.tokensDeposited;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      depositCapacity: (() => {
        const x = <{ toNumber: () => number }>this.depositCapacity;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      delegationState: this.delegationState,
      additionalAssetsNeedUnstaking: (() => {
        const x = <{ toNumber: () => number }>(
          this.additionalAssetsNeedUnstaking
        );
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      vrtEnqueuedForCooldownAmount: (() => {
        const x = <{ toNumber: () => number }>this.vrtEnqueuedForCooldownAmount;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      vrtCoolingDownAmount: (() => {
        const x = <{ toNumber: () => number }>this.vrtCoolingDownAmount;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      vrtReadyToClaimAmount: (() => {
        const x = <{ toNumber: () => number }>this.vrtReadyToClaimAmount;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      admin: this.admin.toBase58(),
      delegationAdmin: this.delegationAdmin.toBase58(),
      operatorAdmin: this.operatorAdmin.toBase58(),
      ncnAdmin: this.ncnAdmin.toBase58(),
      slasherAdmin: this.slasherAdmin.toBase58(),
      capacityAdmin: this.capacityAdmin.toBase58(),
      feeAdmin: this.feeAdmin.toBase58(),
      delegateAssetAdmin: this.delegateAssetAdmin.toBase58(),
      feeWallet: this.feeWallet.toBase58(),
      mintBurnAdmin: this.mintBurnAdmin.toBase58(),
      metadataAdmin: this.metadataAdmin.toBase58(),
      vaultIndex: (() => {
        const x = <{ toNumber: () => number }>this.vaultIndex;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      ncnCount: (() => {
        const x = <{ toNumber: () => number }>this.ncnCount;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      operatorCount: (() => {
        const x = <{ toNumber: () => number }>this.operatorCount;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      slasherCount: (() => {
        const x = <{ toNumber: () => number }>this.slasherCount;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      lastFeeChangeSlot: (() => {
        const x = <{ toNumber: () => number }>this.lastFeeChangeSlot;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      lastFullStateUpdateSlot: (() => {
        const x = <{ toNumber: () => number }>this.lastFullStateUpdateSlot;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      depositFeeBps: this.depositFeeBps,
      withdrawalFeeBps: this.withdrawalFeeBps,
      nextWithdrawalFeeBps: this.nextWithdrawalFeeBps,
      rewardFeeBps: this.rewardFeeBps,
      programFeeBps: this.programFeeBps,
      bump: this.bump,
      isPaused: this.isPaused,
      lastStartStateUpdateSlot: (() => {
        const x = <{ toNumber: () => number }>this.lastStartStateUpdateSlot;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      reserved: this.reserved,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const vaultBeet = new beet.BeetStruct<Vault, VaultArgs>(
  [
    ["base", beetSolana.publicKey],
    ["vrtMint", beetSolana.publicKey],
    ["supportedMint", beetSolana.publicKey],
    ["vrtSupply", beet.u64],
    ["tokensDeposited", beet.u64],
    ["depositCapacity", beet.u64],
    ["delegationState", delegationStateBeet],
    ["additionalAssetsNeedUnstaking", beet.u64],
    ["vrtEnqueuedForCooldownAmount", beet.u64],
    ["vrtCoolingDownAmount", beet.u64],
    ["vrtReadyToClaimAmount", beet.u64],
    ["admin", beetSolana.publicKey],
    ["delegationAdmin", beetSolana.publicKey],
    ["operatorAdmin", beetSolana.publicKey],
    ["ncnAdmin", beetSolana.publicKey],
    ["slasherAdmin", beetSolana.publicKey],
    ["capacityAdmin", beetSolana.publicKey],
    ["feeAdmin", beetSolana.publicKey],
    ["delegateAssetAdmin", beetSolana.publicKey],
    ["feeWallet", beetSolana.publicKey],
    ["mintBurnAdmin", beetSolana.publicKey],
    ["metadataAdmin", beetSolana.publicKey],
    ["vaultIndex", beet.u64],
    ["ncnCount", beet.u64],
    ["operatorCount", beet.u64],
    ["slasherCount", beet.u64],
    ["lastFeeChangeSlot", beet.u64],
    ["lastFullStateUpdateSlot", beet.u64],
    ["depositFeeBps", beet.u16],
    ["withdrawalFeeBps", beet.u16],
    ["nextWithdrawalFeeBps", beet.u16],
    ["rewardFeeBps", beet.u16],
    ["programFeeBps", beet.u16],
    ["bump", beet.u8],
    ["isPaused", beet.bool],
    ["lastStartStateUpdateSlot", beet.u64],
    ["reserved", beet.uniformFixedSizeArray(beet.u8, 251)],
  ],
  Vault.fromArgs,
  "Vault",
);
