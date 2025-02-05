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
 * @category WarmupNcnVaultSlasherTicket
 * @category generated
 */
export const WarmupNcnVaultSlasherTicketStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'WarmupNcnVaultSlasherTicketInstructionArgs'
)
/**
 * Accounts required by the _WarmupNcnVaultSlasherTicket_ instruction
 *
 * @property [] config
 * @property [] ncn
 * @property [] vault
 * @property [] slasher
 * @property [] ncnVaultTicket
 * @property [_writable_] ncnVaultSlasherTicket
 * @property [**signer**] admin
 * @category Instructions
 * @category WarmupNcnVaultSlasherTicket
 * @category generated
 */
export type WarmupNcnVaultSlasherTicketInstructionAccounts = {
  config: web3.PublicKey
  ncn: web3.PublicKey
  vault: web3.PublicKey
  slasher: web3.PublicKey
  ncnVaultTicket: web3.PublicKey
  ncnVaultSlasherTicket: web3.PublicKey
  admin: web3.PublicKey
}

export const warmupNcnVaultSlasherTicketInstructionDiscriminator = 13

/**
 * Creates a _WarmupNcnVaultSlasherTicket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category WarmupNcnVaultSlasherTicket
 * @category generated
 */
export function createWarmupNcnVaultSlasherTicketInstruction(
  accounts: WarmupNcnVaultSlasherTicketInstructionAccounts,
  programId = new web3.PublicKey('RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q')
) {
  const [data] = WarmupNcnVaultSlasherTicketStruct.serialize({
    instructionDiscriminator:
      warmupNcnVaultSlasherTicketInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ncn,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.slasher,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ncnVaultTicket,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ncnVaultSlasherTicket,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.admin,
      isWritable: false,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
