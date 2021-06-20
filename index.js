// Code your solution in this file!
const hqBlock = 42;
function distanceFromHqInBlocks(block) {
  return Math.abs(hqBlock - block);
}

function distanceFromHqInFeet(block) {
  const blocks = distanceFromHqInBlocks(block);
  return blocks * 264; // 264 ft. in 1 block
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  return distanceInBlocks * 264; // 264 ft. in 1 block
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  let fare;
  if (distanceInFeet <= 400) {
    fare = 0; // first 400ft are free
  } else if (distanceInFeet <= 2000) {
    fare = (distanceInFeet - 400) * 0.02; // first 400ft are free
  } else if (distanceInFeet <= 2500) {
    fare = 25; 
  } else {
    fare = 'cannot travel that far';
  }

  return fare;
}