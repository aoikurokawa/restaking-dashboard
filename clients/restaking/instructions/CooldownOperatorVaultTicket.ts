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
 * @category CooldownOperatorVaultTicket
 * @category generated
 */
export const CooldownOperatorVaultTicketStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'CooldownOperatorVaultTicketInstructionArgs'
)
/**
 * Accounts required by the _CooldownOperatorVaultTicket_ instruction
 *
 * @property [] config
 * @property [] operator
 * @property [] vault
 * @property [_writable_] operatorVaultTicket
 * @property [**signer**] admin
 * @category Instructions
 * @category CooldownOperatorVaultTicket
 * @category generated
 */
export type CooldownOperatorVaultTicketInstructionAccounts = {
  config: web3.PublicKey
  operator: web3.PublicKey
  vault: web3.PublicKey
  operatorVaultTicket: web3.PublicKey
  admin: web3.PublicKey
}

export const cooldownOperatorVaultTicketInstructionDiscriminator = 16

/**
 * Creates a _CooldownOperatorVaultTicket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CooldownOperatorVaultTicket
 * @category generated
 */
export function createCooldownOperatorVaultTicketInstruction(
  accounts: CooldownOperatorVaultTicketInstructionAccounts,
  programId = new web3.PublicKey('RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q')
) {
  const [data] = CooldownOperatorVaultTicketStruct.serialize({
    instructionDiscriminator:
      cooldownOperatorVaultTicketInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.operator,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.operatorVaultTicket,
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
