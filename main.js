function calculateBuildingCounts(){
// inputs
const buildingUpgrades = [document.getElementById("600 JSC").checked, document.getElementById("550 CB").checked, document.getElementById("600 IV").checked, document.getElementById("550 You").checked, document.getElementById("600 CB").checked, document.getElementById("600 You").checked]
const cookieUpgrades = [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false]
const buildingBiscuits = [true, true, false, false]
const buyYous = parseInt(document.getElementById("buyYous").value)
const days = 26
const pl = 144.012846338119000
const fhrb = document.getElementById("fhrb").checked ? 0.978 : 1
const emg = document.getElementById("emg").checked ? 0.95 : 1
const esrb = document.getElementById("esrb").checked ? 0.6025425 : 0
const ascensionGoal = parseInt(document.getElementById("ascensionGoal").value) * 10**60

let costs = [15, 100, 1_100, 12_000, 130_000, 1_400_000, 20_000_000, 330_000_000, 5_100_000_000, 75_000_000_000, 
    1_000_000_000_000, 14_000_000_000_000, 170_000_000_000_000, 2_100_000_000_000_000, 26_000_000_000_000_000, 
    310_000_000_000_000_000, 36_000_000_000_000_000_000, 4_100_000_000_000_000_000_000, 
    470_000_000_000_000_000_000_000, 106_000_000_000_000_000_000_000_000]
let buildingCounts = [10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let youUpgrades = 13
let cbUpgrades = 13
let ivUpgrades = 14
let jscUpgrades = 14

if (buildingUpgrades[0]) {
    jscUpgrades++
}
if (buildingUpgrades[1]) {
    cbUpgrades++
}
if (buildingUpgrades[2]) {
    ivUpgrades++
}
if (buildingUpgrades[3]) {
    youUpgrades++
}
if (buildingUpgrades[4]) {
    cbUpgrades++
}
if (buildingUpgrades[5]) {
    youUpgrades++
}
console.log(jscUpgrades, cbUpgrades, ivUpgrades, youUpgrades)
function getCPS(buildingCounts) {
    let nonCursors = 0
    for (let j=1; j < buildingCounts.length; j++) {
        nonCursors += buildingCounts[j]
    }
    
    let cps = 0
    cps += buildingCounts[0]*(0.1+64*1000**4)*nonCursors*1.07*(1+0.05*buildingCounts[15])*2**3 // cursor
    cps += buildingCounts[1]*2**22*2.5**15*(1+0.05*buildingCounts[16])*1.07*(1+0.04*buildingCounts[1]+0.05*buildingCounts[10]) // grandma
    cps += buildingCounts[2]*8*3.8**15*(1+0.01*buildingCounts[1])*(1+0.05*buildingCounts[6])*(1+0.05*buildingCounts[7])*(1+0.05*buildingCounts[10])*(1+0.05*buildingCounts[11])*(1+0.05*buildingCounts[18])*1.07 // farm
    cps += buildingCounts[3]*47*3.7**15*(1+buildingCounts[1]/200)*1.07*(1+0.05*buildingCounts[7])*(1+0.05*buildingCounts[8])**2*(1+0.05*buildingCounts[9])*(1+0.05*buildingCounts[14]) // mine
    cps += buildingCounts[4]*260*3.6**15*1.07*(1+buildingCounts[1]/300)*(1+0.05*buildingCounts[5])*(1+0.05*buildingCounts[8])*(1+0.05*buildingCounts[11])*(1+0.05*buildingCounts[12]) // factory
    cps += buildingCounts[5]*1400*3.5**15*1.07*(1+buildingCounts[1]/400)*(1+buildingCounts[4]/1000)*(1+0.05*buildingCounts[9])*(1+0.05*buildingCounts[10])*(1+0.05*buildingCounts[12]) // bank
    cps += buildingCounts[6]*7800*3.4**15*1.07*(1+buildingCounts[1]/500)*(1+buildingCounts[2]/1000)*(1+0.05*buildingCounts[10])*(1+0.05*buildingCounts[12])*(1+0.05*buildingCounts[13])*(1+0.05*buildingCounts[18]) // temple
    cps += buildingCounts[7]*44000*3.3**15*1.07*(1+buildingCounts[1]/600)*(1+buildingCounts[2]/1000)*(1+buildingCounts[3]/1000)*(1+0.05*buildingCounts[13])*(1+0.05*buildingCounts[9]) // wizard tower
    cps += buildingCounts[8]*260000*3.2**15*1.07*(1+buildingCounts[1]/700)*(1+buildingCounts[3]/1000)**2*(1+buildingCounts[4]/1000)*(1+buildingCounts[11]*0.05) // shipment
    cps += buildingCounts[9]*1.6*1000**2*3.1**15*1.07*(1+buildingCounts[1]/800)*(1+0.05*buildingCounts[12])*(1+buildingCounts[3]/1000)*(1+buildingCounts[5]/1000)*(1+buildingCounts[7]/1000) // alchemy lab
    cps += buildingCounts[10]*10*1000**2*3**15*1.07*(1+buildingCounts[1]/900)*(1+0.05*buildingCounts[13])*(1+0.05*buildingCounts[17])*(1+buildingCounts[2]/1000)*(1+buildingCounts[6]/1000)*(1+buildingCounts[5]/1000) // portal
    cps += buildingCounts[11]*65*1000**2*2.9**15*1.07*(1+0.05*buildingCounts[13])*(1+0.05*buildingCounts[19])*(1+buildingCounts[8]/1000)*(1+buildingCounts[4]/1000)*(1+buildingCounts[2]/1000)*(1+buildingCounts[1]/1000) // time machine
    cps += buildingCounts[12]*430*1000**2*2.8**15*1.07*(1+buildingCounts[1]/1100)*(1+0.05*buildingCounts[14])*(1+buildingCounts[5]/1000)*(1+buildingCounts[6]/1000)*(1+buildingCounts[4]/1000)*(1+buildingCounts[9]/1000) // antimatter condenser
    cps += buildingCounts[13]*2.9*1000**3*2.7**15*1.07*(1+buildingCounts[1]/1200)*(1+0.05*buildingCounts[15])*(1+buildingCounts[6]/1000)*(1+buildingCounts[7]/1000)*(1+buildingCounts[11]/1000)*(1+buildingCounts[10]/1000) // prism
    cps += buildingCounts[14]*21*1000**3*2.6**15*1.07*(1+buildingCounts[1]/1300)*(1+0.05*buildingCounts[16])*(1+buildingCounts[3]/1000)*(1+buildingCounts[12]/1000) // chancemaker
    cps += buildingCounts[15]*150*1000**3*2.5**15*1.07*(1+buildingCounts[1]/1400)*(1+0.05*buildingCounts[17])*(1+buildingCounts[0]/1000)*(1+buildingCounts[13]/1000) // fractal engine
    cps += buildingCounts[16]*1.1*1000**4*2.4**jscUpgrades*1.07*(1+buildingCounts[1]/1500)*(1+0.05*buildingCounts[19])*(1+buildingCounts[1]/1000)*(1+buildingCounts[14]/1000) // javascript console
    cps += buildingCounts[17]*8.3*1000**4*2.3**ivUpgrades*1.07*(1+buildingCounts[1]/1600)*(1+buildingCounts[10]/1000)*(1+buildingCounts[15]/1000) // idleverse
    cps += buildingCounts[18]*64*1000**4*2.2**cbUpgrades*1.07*(1+buildingCounts[1]/1700)*(1+buildingCounts[6]/1000)*(1+buildingCounts[2]/1000) // cortex baker
    cps += buildingCounts[19]*510*1000**4*2.1**youUpgrades*1.07*(1+buildingCounts[1]/1800)*(1+buildingCounts[11]/1000)*(1+buildingCounts[16]/1000) // you
    return cps
}
let buildingCostTotal = 0
let youCostTotal = 0
for (let i=0; true; i++){
let youSellsCost = costs[19]*0.7125*buyYous+costs[19]*0.884420746407

    let cps = getCPS(buildingCounts)
    let nextBuildings = []
    for (let j=0; j < buildingCounts.length; j++) {
        let buyBuilding = [...buildingCounts]
        let thing = [...buildingCounts]
        buyBuilding[j]++
        thing[j]++
        if (j !== 19) {
        nextBuildings.push((getCPS(buyBuilding)-cps)/(costs[j]/10**44))
        thing.push(getCPS(buyBuilding)-cps, costs[j]/10**44) 
        } else {
        nextBuildings.push((getCPS(buyBuilding)-cps)/(youSellsCost/10**44))
        thing.push((getCPS(buyBuilding)-cps), (youSellsCost/10**44))
        }
    }
    let increaseBuilding = nextBuildings.indexOf(Math.max(...nextBuildings))
    if (increaseBuilding !== 19) {
    buildingCostTotal +=  costs[increaseBuilding]*0.884420746407*emg*fhrb-costs[increaseBuilding]*0.884420746407*esrb
    } else {
    youCostTotal += costs[increaseBuilding]*0.884420746407*0.7125*buyYous
    }
    costs[increaseBuilding] *= 1.15 
    if ((buildingCostTotal+youCostTotal)*(100/12.65) > ascensionGoal) {
        let buyBuilding = [...buildingCounts]
        buyBuilding[5]++
        console.log(getCPS(buyBuilding)-cps)
            buildingCounts[increaseBuilding]++
        break
    }
    buildingCounts[increaseBuilding]++
}
return buildingCounts;
}

const button = document.getElementById("calculate");
const output = document.getElementById("output");
button.addEventListener("click", function() {
    let buildings
if (document.getElementById("bd").checked) {
    buildings = ["Rolling Pins", "Ovens", "Kitchens", "Secret Recipes", "Factories", "Investors", "Likes", "Memes", "Supermarkets", "Stock Shares", "TV Shows", "Theme Parks", "Cookiecoins", "Corporate Countries", "Privitized Planets", "Senate Seats", "Doctrines", "Lateral Expansions", "Think Tanks", "You"];
} else {
    buildings = ["Cursor", "Grandma", "Farm", "Mine", "Factory", "Bank", "Temple", "Wizard Tower", "Shipment", "Alchemy Lab", "Portal", "Time Machine", "Antimatter Condenser", "Prism", "Chancemaker", "Fractal Engine", "Javascript Console", "Idleverse", "Cortex Baker", "You"];
}
const results = calculateBuildingCounts();

let outputText = "";

    for (let i = 0; i < results.length; i++) {
        outputText += `${buildings[i]}: ${results[i]}<br>`;
    }

    output.innerHTML = outputText;
});
