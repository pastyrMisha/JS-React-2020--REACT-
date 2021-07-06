

let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
    employersNames = employers.filter((name) => name).map((name) => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash( donate, own = 0) {
    let total = donate.map(name => name).reduce((prev, next) => prev + next) + +own;
// let total = donate.map(i=>x+=i, x=0).reverse()[0] + +own; // вариант 2 (сложение эл-ов массива)
    return total
}
let money = calcCash(sponsors.cash);



function makeBusiness(owner, cash, emp, director = 'Victor') { 
    let {eu, rus} = sponsors,
    formatEu = eu.join(" "),
    formatRus = rus.join(" ");
    
console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}\nAnd we have a sponsors: \n${formatEu} ${formatRus} unexpected sponsor\nNote. Be careful with ${eu[0]}. It's a huge risk.`);

}

makeBusiness('Sam', money, employersNames);



// We have a business. Owner: Sam, director: Victor. Our budget: 87400. And our employers: alex,ludmila,viktor,oleg,inna,ivan,alex,olga,ann
// And we have a sponsors: 
// SRL PLO J&K RusAuto SBO unexpected sponsor
// Note. Be careful with SRL. It's a huge risk.