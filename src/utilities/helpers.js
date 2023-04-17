import { getBlock } from "./getBlock";
import { getTxHistory } from "./getTxHistory";
import { getTxDetails } from "./getTxDetails";
import { getUtxos } from "./getUtxos";
import { getTokenDetails } from "./getTokenDetails";
export const getBlockHashHelper = async (input) => {
  let res;
  await getBlock(input).then((blockInfo) => {
    res = JSON.stringify(blockInfo, null, "\t");
  });
  return res;
};

export const getTxDetailsHelper = async (input) => {
  let res;
  await getTxDetails(input).then((txDetails) => {
    res = JSON.stringify(txDetails, null, "\t");
  });
  return res;
};

export const getTxHistoryHelper = async (input) => {
  let result;
  await getTxHistory(input)
    .then((res) => JSON.stringify(res, null, "\t"))
    .then((res) => (result = res));

  return result;
};

export const getUtxosHelper = async (input) => {
  let res;
  await getUtxos(input).then((blockInfo) => {
    res = JSON.stringify(blockInfo, null, "\t");
  });
  return res;
};

export const getTokenDetailsHelper = async (input) => {
    let res;
    await getTokenDetails(input).then((blockInfo) => {
      res = JSON.stringify(blockInfo, null, "\t");
    });
    return res;
  };
  