const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0

batteryBatches.reduce(function(accum, battery){
    console.log(battery)
    totalBatteries += battery
    console.log(totalBatteries)
},0)
