class HashTable{
    constructor(size = 7){
        this.dataMap = new Array(size);
    }

    _hash(key){
        let hash = 0
        for(let i = 0;  i<key.length ; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key,value){
        let index = this._hash(key);
        if(!this.dataMap[index]){
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key,value])
    }

    get(key){
        // getting index 
        let index = this._hash(key);

        // if this.dataMap[index] is not undefined / null
        if(this.dataMap[index]){

            // loop for outer Array | which contains all array of key and value pair
            for(let i = 0 ; i<this.dataMap[index].length; i++){
                // i row and 0 col ( 0 => key , 1 => value )
                if(this.dataMap[index][i][0]===key){
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined;     // if not found than return undefined
    }
}

let myHL = new HashTable()
myHL.set('hello','world')
myHL.set('abc','xyz')
myHL.set('hhh','yyy')
// console.log(myHL)
console.log(myHL.get('hello'))
console.log(myHL.get('hhh'))