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
 * @category InitializeVaultWithMint
 * @category generated
 */
export const InitializeVaultWithMintStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'InitializeVaultWithMintInstructionArgs'
)

export const initializeVaultWithMintInstructionDiscriminator = 2

/**
 * Creates a _InitializeVaultWithMint_ instruction.
 *
 * @category Instructions
 * @category InitializeVaultWithMint
 * @category generated
 */
export function createInitializeVaultWithMintInstruction(
  programId = new web3.PublicKey('Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8')
) {
  const [data] = InitializeVaultWithMintStruct.serialize({
    instructionDiscriminator: initializeVaultWithMintInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = []

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
