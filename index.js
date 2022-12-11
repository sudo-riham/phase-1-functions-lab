const distanceFromHqInBlocks = (endBlock, startBlock=42) => Math.abs(endBlock - startBlock);

const distanceFromHqInFeet = endBlock => distanceFromHqInBlocks(endBlock) * 264;

const distanceTravelledInFeet = (endBlock, startBlock) => distanceFromHqInBlocks(endBlock, startBlock) * 264

const calculatesFarePrice = (endBlock, startBlock) => {
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    let cost = 0

    distance = distance - 400

    if (distance <= 0) {
        return 0
    } else {
        while (distance > 0 && cost < 32) {
            distance--
            cost = cost + .02
        }
    
        if (distance === 0){
            return Math.round(cost * 100) / 100
        }
        else if (distance <= 500) {
            return 25
        } else {
            return 'cannot travel that far'
        }
    }

}