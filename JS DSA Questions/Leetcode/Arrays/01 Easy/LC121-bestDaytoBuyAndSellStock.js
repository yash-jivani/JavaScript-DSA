// brute force solution

var maxProfit2 = function(prices) {
    let myMaxProfit =-Infinity;
    let dayIndex = -1;
    
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            
            let currentProfit = prices[j]-prices[i];
            if(myMaxProfit<currentProfit){
                myMaxProfit = currentProfit;
                dayIndex = i;
            }
        }
    }
    return myMaxProfit>0?myMaxProfit:0;
};

console.log(maxProfit2([7,1,5,3,6,4]))
console.log(maxProfit2([7,6,5,4,2,1]))
console.log(maxProfit2([2,1,4]))

// optimal solution 

var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for(let i=0; i<prices.length;i++){

        // keep track of minPrice
        minPrice = Math.min(minPrice,prices[i]);
        // currentProfit = price[i] - minPrice thn find max
        maxProfit = Math.max(maxProfit,prices[i]-minPrice);
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,5,4,2,1]))
console.log(maxProfit([2,1,4]))
