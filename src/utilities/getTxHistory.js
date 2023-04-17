
import { ChronikClient } from "chronik-client"
// For XEC, eCash chain:
const chronik = new ChronikClient('https://chronik.be.cash/xec');

// const GENESIS_PK =
//     '04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f';

// const TripDos_PK =
//     '03771805b54969a9bea4e3eb14a82851c67592156ddb5e52d3d53677d14a40fba6';

// const TripDos_PK_hash160 = '95E79F51D4260BC0DC3BA7FB77C7BE92D0FBDD1D';

export async function getTxHistory(publickey) {
    let history;
    try {
        history = await chronik
            .script('p2pkh', publickey)
            .history(/*page=*/ 0, /*page_size=*/ 10);
        console.log(history);
    } catch (err) {
        console.log(`Error in chronik.script('p2pkh', ${publickey}).history()`);
        console.log(err);
    }
    return history
}

