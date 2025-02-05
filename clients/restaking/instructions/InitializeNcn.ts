/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category InitializeNcn
 * @category generated
 */
export const InitializeNcnStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'InitializeNcnInstructionArgs')
/**
 * Accounts required by the _InitializeNcn_ instruction
 *
 * @property [_writable_] config
 * @property [_writable_] ncn
 * @property [_writable_, **signer**] admin
 * @property [**signer**] base
 * @category Instructions
 * @category InitializeNcn
 * @category generated
 */
export type InitializeNcnInstructionAccounts = {
  config: web3.PublicKey
  ncn: web3.PublicKey
  admin: web3.PublicKey
  base: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const initializeNcnInstructionDiscriminator = 1

/**
 * Creates a _InitializeNcn_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitializeNcn
 * @category generated
 */
export function createInitializeNcnInstruction(
  accounts: InitializeNcnInstructionAccounts,
  programId = new web3.PublicKey('RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q')
) {
  const [data] = InitializeNcnStruct.serialize({
    instructionDiscriminator: initializeNcnInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.ncn,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.admin,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.base,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
