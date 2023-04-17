const { ChronikClient } = require('chronik-client');
const util = require('util');

// For XEC, eCash chain:
const chronik = new ChronikClient('https://chronik.be.cash/xec');


export async function getTokenDetails(eTokenAddress) {
    let tokenDetails;
    try {
        tokenDetails = await chronik.token(eTokenAddress);
        console.log(
            util.inspect(tokenDetails, {
                showHidden: false,
                depth: null,
                colors: true,
            }),
        );
    } catch (err) {
        console.log(`Error in chronik.tx(${eTokenAddress})`);
        console.log(err);
    }
    return tokenDetails;
}

