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
 * @category CooldownNcnVaultSlasherTicket
 * @category generated
 */
export const CooldownNcnVaultSlasherTicketStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'CooldownNcnVaultSlasherTicketInstructionArgs'
)
/**
 * Accounts required by the _CooldownNcnVaultSlasherTicket_ instruction
 *
 * @property [] config
 * @property [] ncn
 * @property [] vault
 * @property [] slasher
 * @property [_writable_] ncnVaultSlasherTicket
 * @property [**signer**] admin
 * @category Instructions
 * @category CooldownNcnVaultSlasherTicket
 * @category generated
 */
export type CooldownNcnVaultSlasherTicketInstructionAccounts = {
  config: web3.PublicKey
  ncn: web3.PublicKey
  vault: web3.PublicKey
  slasher: web3.PublicKey
  ncnVaultSlasherTicket: web3.PublicKey
  admin: web3.PublicKey
}

export const cooldownNcnVaultSlasherTicketInstructionDiscriminator = 14

/**
 * Creates a _CooldownNcnVaultSlasherTicket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CooldownNcnVaultSlasherTicket
 * @category generated
 */
export function createCooldownNcnVaultSlasherTicketInstruction(
  accounts: CooldownNcnVaultSlasherTicketInstructionAccounts,
  programId = new web3.PublicKey('RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q')
) {
  const [data] = CooldownNcnVaultSlasherTicketStruct.serialize({
    instructionDiscriminator:
      cooldownNcnVaultSlasherTicketInstructionDiscriminator,
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
