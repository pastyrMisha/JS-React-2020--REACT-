// result:
// We have a business. Owner: Sam, director: Victor. Our budget: 87400. And our employers: alex,ludmila,viktor,oleg,inna,ivan,alex,olga,ann
// And we have a sponsors: 
// SRL PLO J&K RusAuto SBO unexpected sponsor
// Note. Be careful with SRL. It's a huge risk.

// let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
//     employersNames = employers.filter((name) => name).map((name) => name.toLowerCase().trim());

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own, donate) {

   let total = donate.forEach((name) => {
    let result += name;
   } );
   
console.log(total);
    return total
}
let money = calcCash(null, sponsors.cash);


// function makeBusiness(owner, director = 'Victor', cash, emp) {
    
//     var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
//     console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp} \nAnd we have a sponsors: `);
    
//     console.log.apply(null, sumSponsors);
//     console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
// }

// makeBusiness.apply(null, ['Sam', null, money, employersNames]);

