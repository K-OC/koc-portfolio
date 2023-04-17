import { ChronikClient } from "chronik-client"
const util = require('util');

// For XEC, eCash chain:
const chronik = new ChronikClient('https://chronik.be.cash/xec');

// txid
// const txid = '0f3c3908a2ddec8dea91d2fe1f77295bbbb158af869bff345d44ae800f0a5498';
// // etoken txid
// const etokenTxid =
//     '82a3fe0b03ab07a564351443634da1b1ed3960e4771c59b6f8abbf7ef4b3258d';
// const etokenGenesis =
//     'acba1d7f354c6d4d001eb99d31de174e5cea8a31d692afd6e7eb8474ad541f55';

export async function getTxDetails(txid) {
    let txDetails;
    try {
        txDetails = await chronik.tx(txid);
        //console.log(txDetails);
        console.log(
            util.inspect(txDetails, {
                showHidden: false,
                depth: null,
                colors: true,
            }),
        );
    } catch (err) {
        console.log(`Error in chronik.tx(${txid})`);
        console.log(err);
    }
    return txDetails;
}

