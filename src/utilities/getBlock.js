import { ChronikClient } from "chronik-client"
// For XEC, eCash chain:
const chronik = new ChronikClient("https://chronik.be.cash/xec")

// Get Genesis block (on eCash):
// const genesisHash = '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'
export async function getBlock(blockhash) {
  let blockDetails;
  try {
    blockDetails = await chronik.block(blockhash)
    console.log(blockDetails)
  }
  catch (err) {
    console.log(`Error in chronik.block(${blockhash})`)
    console.log(err)
  }
  return blockDetails
}

