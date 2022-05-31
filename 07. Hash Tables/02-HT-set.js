class HashTable{
    constructor(size = 7){
        this.dataMap = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash
    }

    set(key,value){

        // generating address | index
        let index = this._hash(key);

        // if generated address does not have empty array
        if(!this.dataMap[index]){
            this.dataMap[index] = []
        }
        
        // generated index | address per key,value ko push kardo
        this.dataMap[index].push([key,value])
    }
}

let myHL = new HashTable()
myHL.set('hello','world')
console.log(myHL)