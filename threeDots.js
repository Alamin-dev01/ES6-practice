const ages=[12, 11, 14, 16, 17];
const ages2=[15, 25, 34];
const ages3=[19, 28, 37];
const allAges2=[... ages, ...ages2,5,...ages3];
const allAges=ages.concat(ages2).concat(ages3);
// console.log(allAges2);
 const business = 654;
 const minister=7894;
 const sochib = 250;
 const takaPoisa=[650,450,250,87573];
//  const maximun=Math.max( business,minister,sochib);
 const maximum=Math.max(...takaPoisa);
 console.log(maximum);
