function getCPS(buildingCounts, jscUpgrades, cbUpgrades, ivUpgrades, youUpgrades) {
    let nonCursors = 0
    for (let j=1; j < buildingCounts.length; j++) {
        nonCursors += buildingCounts[j]
    }
    let missingTiers = [document.getElementById("iridium").checked, document.getElementById("glucosmium").checked, document.getElementById("glimmeringue").checked].filter(value => value === false).length
    let antimUpgradeMult = document.getElementById("antimatterCondensers").checked ? 2.8 : 2
    let prismUpgradeMult = document.getElementById("prisms").checked ? 2.7 : 2
    let chancemakerUpgradeMult = document.getElementById("chancemakers").checked ? 2.6 : 2
    let feUpgradeMult = document.getElementById("fractalEngines").checked ? 2.5 : 2
    let jscUpgradeMult = document.getElementById("javascriptConsoles").checked ? 2.4 : 2
    let ivUpgradeMult = document.getElementById("idleverses").checked ? 2.2 : 2
    let cbUpgradeMult = document.getElementById("cortexBakers").checked ? 2.3 : 2
    let youUpgradeMult = document.getElementById("yous").checked ? 2.1 : 2
    let cps = 0
    cps += buildingCounts[0]*(0.1+64*1000**4)*nonCursors*(1+0.05*buildingCounts[15])*2**3 // cursor
    cps += buildingCounts[1]*2**22*2.5**(15-missingTiers)*2**missingTiers*(1+0.05*buildingCounts[16])*(1+0.04*buildingCounts[1]+0.05*buildingCounts[10]) // grandma
    cps += buildingCounts[2]*8*3.8**(15-missingTiers)*2**missingTiers*(1+0.01*buildingCounts[1])*(1+0.05*buildingCounts[6])*(1+0.05*buildingCounts[7])*(1+0.05*buildingCounts[10])*(1+0.05*buildingCounts[11])*(1+0.05*buildingCounts[18]) // farm
    cps += buildingCounts[3]*47*3.7**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/200)*(1+0.05*buildingCounts[7])*(1+0.05*buildingCounts[8])**2*(1+0.05*buildingCounts[9])*(1+0.05*buildingCounts[14]) // mine
    cps += buildingCounts[4]*260*3.6**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/300)*(1+0.05*buildingCounts[5])*(1+0.05*buildingCounts[8])*(1+0.05*buildingCounts[11])*(1+0.05*buildingCounts[12]) // factory
    cps += buildingCounts[5]*1400*3.5**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/400)*(1+buildingCounts[4]/1000)*(1+0.05*buildingCounts[9])*(1+0.05*buildingCounts[10])*(1+0.05*buildingCounts[12]) // bank
    cps += buildingCounts[6]*7800*3.4**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/500)*(1+buildingCounts[2]/1000)*(1+0.05*buildingCounts[10])*(1+0.05*buildingCounts[12])*(1+0.05*buildingCounts[13])*(1+0.05*buildingCounts[18]) // temple
    cps += buildingCounts[7]*44000*3.3**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/600)*(1+buildingCounts[2]/1000)*(1+buildingCounts[3]/1000)*(1+0.05*buildingCounts[13])*(1+0.05*buildingCounts[9]) // wizard tower
    cps += buildingCounts[8]*260000*3.2**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/700)*(1+buildingCounts[3]/1000)**2*(1+buildingCounts[4]/1000)*(1+buildingCounts[11]*0.05) // shipment
    cps += buildingCounts[9]*1.6*1000**2*3.1**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/800)*(1+0.05*buildingCounts[12])*(1+buildingCounts[3]/1000)*(1+buildingCounts[5]/1000)*(1+buildingCounts[7]/1000) // alchemy lab
    cps += buildingCounts[10]*10*1000**2*3**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/900)*(1+0.05*buildingCounts[13])*(1+0.05*buildingCounts[17])*(1+buildingCounts[2]/1000)*(1+buildingCounts[6]/1000)*(1+buildingCounts[5]/1000) // portal
    cps += buildingCounts[11]*65*1000**2*2.9**(15-missingTiers)*2**missingTiers*(1+0.05*buildingCounts[13])*(1+0.05*buildingCounts[19])*(1+buildingCounts[8]/1000)*(1+buildingCounts[4]/1000)*(1+buildingCounts[2]/1000)*(1+buildingCounts[1]/1000) // time machine
    cps += buildingCounts[12]*430*1000**2*antimUpgradeMult**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/1100)*(1+0.05*buildingCounts[14])*(1+buildingCounts[5]/1000)*(1+buildingCounts[6]/1000)*(1+buildingCounts[4]/1000)*(1+buildingCounts[9]/1000) // antimatter condenser
    cps += buildingCounts[13]*2.9*1000**3*prismUpgradeMult**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/1200)*(1+0.05*buildingCounts[15])*(1+buildingCounts[6]/1000)*(1+buildingCounts[7]/1000)*(1+buildingCounts[11]/1000)*(1+buildingCounts[10]/1000) // prism
    cps += buildingCounts[14]*21*1000**3*chancemakerUpgradeMult**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/1300)*(1+0.05*buildingCounts[16])*(1+buildingCounts[3]/1000)*(1+buildingCounts[12]/1000) // chancemaker
    cps += buildingCounts[15]*150*1000**3*feUpgradeMult**(15-missingTiers)*2**missingTiers*(1+buildingCounts[1]/1400)*(1+0.05*buildingCounts[17])*(1+buildingCounts[0]/1000)*(1+buildingCounts[13]/1000) // fractal engine
    cps += buildingCounts[16]*1.1*1000**4*jscUpgradeMult**(Math.min(jscUpgrades, 15-missingTiers))*2**Math.max(missingTiers-(15-jscUpgrades), 0)*(1+buildingCounts[1]/1500)*(1+0.05*buildingCounts[19])*(1+buildingCounts[1]/1000)*(1+buildingCounts[14]/1000) // javascript console
    cps += buildingCounts[17]*8.3*1000**4*ivUpgradeMult**(Math.min(cbUpgrades, 15-missingTiers))*2**Math.max(missingTiers-(15-cbUpgrades), 0)*(1+buildingCounts[1]/1600)*(1+buildingCounts[10]/1000)*(1+buildingCounts[15]/1000) // idleverse
    cps += buildingCounts[18]*64*1000**4*cbUpgradeMult**(Math.min(ivUpgrades, 15-missingTiers))*2**Math.max(missingTiers-(15-ivUpgrades), 0)*(1+buildingCounts[6]/1000)*(1+buildingCounts[2]/1000) // cortex baker
    cps += buildingCounts[19]*510*1000**4*youUpgradeMult**(Math.min(youUpgrades, 15-missingTiers))*2**Math.max(missingTiers-(15-youUpgrades), 0)*(1+buildingCounts[1]/1800)*(1+buildingCounts[11]/1000)*(1+buildingCounts[16]/1000) // you
    return cps*1.07 //1.07x is from the fortune upgrade for every individual building
}
function calculateBuildingCounts(jscUpgrades, cbUpgrades, ivUpgrades, youUpgrades){
// inputs
const cookieUpgrades = [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false]
const buildingBiscuits = [true, true, false, false]
const buyYous = Number(document.getElementById("buyYous").value)
const days = 26
const pl = 144.012846338119000
const fhrb = document.getElementById("fhrb").checked ? 0.978 : 1
const emg = document.getElementById("emg").checked ? 0.95 : 1
const esrb = document.getElementById("esrb").checked ? 0.6025425 : 0.2875
const ascensionGoal = Number(document.getElementById("ascensionGoal").value) * 10**60

let costs = [15, 100, 1_100, 12_000, 130_000, 1_400_000, 20_000_000, 330_000_000, 5_100_000_000, 75_000_000_000, 
    1_000_000_000_000, 14_000_000_000_000, 170_000_000_000_000, 2_100_000_000_000_000, 26_000_000_000_000_000, 
    310_000_000_000_000_000, 36_000_000_000_000_000_000, 4_100_000_000_000_000_000_000, 
    470_000_000_000_000_000_000_000, 106_000_000_000_000_000_000_000_000]
let buildingCounts = [10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let buildingCostTotal = 0
let individualBuildingCosts = Array(20).fill(0);
let individualBuildingCostsAdjusted;
let youCostTotal = 0
let idealBuildingCost;
const buyHundredMult = (1.15**100-1)/0.15
    // hardcoded % of ascension goal numbers from jessie
    if (fhrb == 1) {
        if (emg == 1) {
            if (esrb == 0.2875){
                idealBuildingCost = ascensionGoal*0.06691168169902452
            } else {
                idealBuildingCost = ascensionGoal*0.1136213922568368
            }
        } else {
            if (esrb == 0.2875) {
                idealBuildingCost = ascensionGoal*0.06825948077069768
            } else {
                idealBuildingCost = ascensionGoal*0.1222090247012816
            }
        }
    } else {
        if (emg == 1) {
            if (esrb == 0.2875){
                idealBuildingCost = ascensionGoal*0.06748116655708162
            } else {
                idealBuildingCost = ascensionGoal*0.117139515259374
            }
        } else {
            if (esrb == 0.2875) {
                idealBuildingCost = ascensionGoal*0.06888372371974738
            } else {
                idealBuildingCost = ascensionGoal*0.1265108722266798
            }
        }
    }
for (let i=0; true; i++){
let youSellsCost = costs[19]*0.7125*buyYous+costs[19]*0.884420746407

    let cps = getCPS(buildingCounts, jscUpgrades, cbUpgrades, ivUpgrades, youUpgrades)
    let nextBuildings = []
    for (let j=0; j < buildingCounts.length; j++) {
        let buyBuilding = [...buildingCounts]
        buyBuilding[j]++
        if (j !== 19) {
        nextBuildings.push((getCPS(buyBuilding, jscUpgrades, cbUpgrades, ivUpgrades, youUpgrades)-cps)/(costs[j]/10**44)) 
        } else {
        nextBuildings.push((getCPS(buyBuilding, jscUpgrades, cbUpgrades, ivUpgrades, youUpgrades)-cps)/(youSellsCost/10**44))
        }
    }
    let increaseBuilding = nextBuildings.indexOf(Math.max(...nextBuildings))
    let costBeforeBuy = buildingCostTotal*(1-esrb/(emg*fhrb))+youCostTotal
    if (costBeforeBuy * 5e7 > idealBuildingCost) {
    buildingCostTotal +=  costs[increaseBuilding]*0.884420746407*emg*fhrb-costs[increaseBuilding]*0.884420746407*esrb
    if (increaseBuilding == 19) {
    youCostTotal += costs[increaseBuilding]*0.884420746407*0.7125*buyYous
    }
    individualBuildingCosts[increaseBuilding] += costs[increaseBuilding]*0.884420746407*emg*fhrb
    costs[increaseBuilding] *= 1.15
    } else {
    // increase the things as if 100 buildings were bought, if really far from the goal
    let costOfOne = costs[increaseBuilding]*0.884420746407*emg*fhrb-costs[increaseBuilding]*0.884420746407*esrb
    buildingCostTotal += costOfOne * buyHundredMult
    individualBuildingCosts[increaseBuilding] += costOfOne * buyHundredMult
    if (increaseBuilding == 19){
        costOfOne = costs[increaseBuilding]*0.884420746407*0.7125*buyYous
        youCostTotal += costOfOne*buyHundredMult
    }
    costs[increaseBuilding] *= 1.15**100
    buildingCounts[increaseBuilding] += 99 // plus 1 more later on
    }

    let buildingCostsTotalNoEsrb = buildingCostTotal/(1-esrb/(emg*fhrb))

    if ((buildingCostsTotalNoEsrb+youCostTotal) > idealBuildingCost){
        console.log(idealBuildingCost-(idealBuildingCost-(buildingCostsTotalNoEsrb+youCostTotal)), idealBuildingCost-(costBeforeBuy), idealBuildingCost)
        if (idealBuildingCost-(idealBuildingCost-(buildingCostsTotalNoEsrb+youCostTotal)) < idealBuildingCost-(costBeforeBuy)) {
            buildingCounts[increaseBuilding]++
        } else {
        buildingCostTotal = costBeforeBuy - youCostTotal // cost with esrb discount
        youCostTotal = costBeforeBuy - buildingCostTotal
        buildingCostTotal /= 1-esrb/(emg*fhrb) // cost without esrb discount
        }
        individualBuildingCostsAdjusted = individualBuildingCosts.map(cost => cost * emg * fhrb);
        break
    }
    buildingCounts[increaseBuilding]++
}
return [buildingCounts, buildingCostTotal/(emg*fhrb - esrb), buildingCostTotal/(emg*fhrb - esrb)+youCostTotal, 
        buildingCostTotal / (1-esrb/(emg*fhrb)), buildingCostTotal / (1-esrb/(emg*fhrb))+youCostTotal, youCostTotal, 
        buildingCostTotal/(emg*fhrb - esrb) * esrb, individualBuildingCosts, individualBuildingCostsAdjusted];
}

const button = document.getElementById("calculate");
const output = document.getElementById("output");
button.addEventListener("click", function() {
const buildingUpgrades = [
    document.getElementById("600 JSC").checked, 
    document.getElementById("550 CB").checked, 
    document.getElementById("600 IV").checked, 
    document.getElementById("550 You").checked, 
    document.getElementById("600 CB").checked, 
    document.getElementById("600 You").checked
]
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
let numberNames = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UnD", "DoD", "TrD", "QaD", "QiD", "SxD", "SpD", "OcD", "NoD", "V", "UnV", "DoV", "TrV", "QaV", "QiV", "SxV"]

let buildings;
if (document.getElementById("bd").checked) {
    buildings = ["Rolling Pins", "Ovens", "Kitchens", "Secret Recipes", "Factories", "Investors", "Likes", "Memes", "Supermarkets", "Stock Shares", "TV Shows", "Theme Parks", "Cookiecoins", "Corporate Countries", "Privitized Planets", "Senate Seats", "Doctrines", "Lateral Expansions", "Think Tanks", "Yous"];
} else {
    buildings = ["Cursors", "Grandmas", "Farms", "Mines", "Factories", "Banks", "Temples", "Wizard Towers", "Shipments", "Alchemy Labs", "Portals", "Time Machines", "Antimatter Condensers", "Prisms", "Chancemakers", "Fractal Engines", "Javascript Consoles", "Idleverses", "Cortex Bakers", "Yous"];
}
let results = calculateBuildingCounts(jscUpgrades, cbUpgrades, ivUpgrades, youUpgrades);

let outputText = "";
    if (document.getElementById("individualbuildingcosts").checked) {
    for (let i = 0; i < results[7].length; i++){
        let individualCostIndex = Math.max(0, Math.floor(Math.log10(results[7][i]) / 3));
        results[7][i] /= 10 ** (individualCostIndex * 3);
        results[7][i] = results[7][i].toFixed(3) + " " + numberNames[individualCostIndex]

        let individualAdjustedCostIndex = Math.max(0, Math.floor(Math.log10(results[8][i]) / 3));
        results[8][i] /= 10 ** (individualAdjustedCostIndex * 3);
        results[8][i] = results[8][i].toFixed(3) + " " + numberNames[individualAdjustedCostIndex]
    }
    results[8][19] += " (without you sells)"
    for (let i = 0; i < results[0].length; i++) {
        outputText += `${buildings[i]}: ${results[0][i]} <br> Base Cost: ${results[7][i]}, Adjusted Cost: ${results[8][i]} <br> <br>`;
    }
    } else {
    for (let i = 0; i < results[0].length; i++) {
        outputText += `${buildings[i]}: ${results[0][i]} <br>`;
    }
    }
    output.innerHTML = outputText;

const days = Number(document.getElementById("days").value)
const ambergris = document.getElementById("ambergris").checked ? 1.06 : 1
const pl = Number(document.getElementById("pl").value * 10 ** 13) // in terms of quadrillions, divided by 100 to get the actual multiplier
const cookieUpgrades = [
    document.getElementById("cookie1").checked, document.getElementById("cookie2").checked, document.getElementById("cookie3").checked, 
    document.getElementById("cookie4").checked, document.getElementById("cookie5").checked, document.getElementById("cookie6").checked, 
    document.getElementById("cookie7").checked, document.getElementById("cookie8").checked, document.getElementById("cookie9").checked, 
    document.getElementById("cookie10").checked, document.getElementById("cookie11").checked, document.getElementById("cookie12").checked, 
    document.getElementById("cookie13").checked, document.getElementById("cookie14").checked, document.getElementById("cookie15").checked,
    document.getElementById("cookie16").checked, document.getElementById("cookie17").checked,document.getElementById("cookie18").checked].filter(value => value === true).length
const buildingBiscuits = [
    document.getElementById("550 Biscuit").checked, document.getElementById("600 Biscuit").checked,
    document.getElementById("650 Biscuit").checked, document.getElementById("700 Biscuit").checked].filter(value => value === true).length
const milkMults = [0.11025, 0.1378125, 0.165375, 0.1929375, 0.2205, 0.2205, 0.2205, 0.2205, 0.2205, 0.1929375, 0.165375, 0.1378125, 0.1267875, 0.121275, 0.1157625, 0.055125, 0.11025];
let milkMult = 1;
let milkPercent = document.getElementById("achievements").value/25
for (i=0; i < milkMults.length; i++) {
    milkMult *= 1+(milkPercent*milkMults[i])
}
let trueCps =
    (getCPS(results[0], jscUpgrades, cbUpgrades, ivUpgrades, youUpgrades) + 9)
    * 1.05 ** cookieUpgrades
    * 1.1 ** buildingBiscuits
    * pl
    * ambergris
    * (1 + (1 - (1 - Math.min(days / 100, 1)) ** 3) / 10)
    * 25716.13
    * milkMult;
let cpsIndex = Math.max(0, Math.floor(Math.log10(trueCps) / 3));
trueCps /= 10 ** (cpsIndex * 3);
document.getElementById("cps").innerHTML = `CPS (BoM+RA, GS on): ${trueCps.toFixed(3)} ${numberNames[cpsIndex]}`;

let costText = ""

costText += `Note: Adjusted cost is the cost with FH+RB and EMG factored in, while base building cost is with those not factored in. <br> <br>`

let costIndex1 = Math.max(0, Math.floor(Math.log10(results[1]) / 3));
results[1] /= 10 ** (costIndex1 * 3);
costText += `Base Building cost: ${results[1].toFixed(3)} ${numberNames[costIndex1]} <br>`

let costIndex2 = Math.max(0, Math.floor(Math.log10(results[2]) / 3));
results[2] /= 10 ** (costIndex2 * 3);
costText += `Base Building cost (with you sells) ${results[2].toFixed(3)} ${numberNames[costIndex2]} <br>`

let costIndex3 = Math.max(0, Math.floor(Math.log10(results[3]) / 3));
results[3] /= 10 ** (costIndex3 * 3);
costText += `Adjusted Building cost: ${results[3].toFixed(3)} ${numberNames[costIndex3]} <br>`

let costIndex4 = Math.max(0, Math.floor(Math.log10(results[4]) / 3));
results[4] /= 10 ** (costIndex4 * 3);
costText += `Adjusted Building cost (with you sells): ${results[4].toFixed(3)} ${numberNames[costIndex4]} <br>`

let costIndex5 = Math.max(0, Math.floor(Math.log10(results[5]) / 3));
results[5] /= 10 ** (costIndex5 * 3);
costText += `Cost of You sells: ${results[5].toFixed(3)} ${numberNames[costIndex5]} <br>`

let costIndex6 = Math.max(0, Math.floor(Math.log10(results[6]) / 3));
results[6] /= 10 ** (costIndex6 * 3);
costText += `Sell All Buildings' gains: ${results[6].toFixed(3)} ${numberNames[costIndex6]} <br>`

document.getElementById("costs").innerHTML = costText;
});
