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
 * @category CreateTokenMetadata
 * @category generated
 */
export type CreateTokenMetadataInstructionArgs = {
  name: string
  symbol: string
  uri: string
}
/**
 * @category Instructions
 * @category CreateTokenMetadata
 * @category generated
 */
export const CreateTokenMetadataStruct = new beet.FixableBeetArgsStruct<
  CreateTokenMetadataInstructionArgs & {
    instructionDiscriminator: number
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['name', beet.utf8String],
    ['symbol', beet.utf8String],
    ['uri', beet.utf8String],
  ],
  'CreateTokenMetadataInstructionArgs'
)
/**
 * Accounts required by the _CreateTokenMetadata_ instruction
 *
 * @property [] vault
 * @property [**signer**] admin
 * @property [] vrtMint
 * @property [_writable_, **signer**] payer
 * @property [_writable_] metadata
 * @property [] mplTokenMetadataProgram
 * @category Instructions
 * @category CreateTokenMetadata
 * @category generated
 */
export type CreateTokenMetadataInstructionAccounts = {
  vault: web3.PublicKey
  admin: web3.PublicKey
  vrtMint: web3.PublicKey
  payer: web3.PublicKey
  metadata: web3.PublicKey
  mplTokenMetadataProgram: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const createTokenMetadataInstructionDiscriminator = 29

/**
 * Creates a _CreateTokenMetadata_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateTokenMetadata
 * @category generated
 */
export function createCreateTokenMetadataInstruction(
  accounts: CreateTokenMetadataInstructionAccounts,
  args: CreateTokenMetadataInstructionArgs,
  programId = new web3.PublicKey('Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8')
) {
  const [data] = CreateTokenMetadataStruct.serialize({
    instructionDiscriminator: createTokenMetadataInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.vault,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.admin,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.vrtMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mplTokenMetadataProgram,
      isWritable: false,
      isSigner: false,
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
