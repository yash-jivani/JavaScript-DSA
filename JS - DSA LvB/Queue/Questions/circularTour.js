/*
class PetrolPump{
    constructor(p, d){
        this.petrol = p;
        this.distance = d;
    }
}
*/

class Solution {
    //Function to find starting point where the truck can start to get through
    //the complete circle without exhausting its petrol in between.
    tour(p, n)
    {
        //your code here
        let neededPetrol = 0;
        let balance  = 0;
        let startFrom = 0;
        
        for(let i=0;i<n;i++){
            balance += p[i].petrol - p[i].distance;
            if(balance<0){
                neededPetrol += balance;
                balance = 0;
                startFrom = i+1;
            }
        }
        
        if(neededPetrol + balance >= 0){
            return startFrom;
        }
        return -1;
    }
}