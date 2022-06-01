class HashTable{
    constructor(size = 7){
        this.dataMap = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i)*23) % this.dataMap.length
        }
        return hash
    }

    set(key,value){
        let index = this._hash(key);
        if(!this.dataMap[index]){
            this.dataMap[index]=[]
        }
        this.dataMap[index].push([key,value]);
    }

    get(key){
        let index = this._hash(key);
        if(this.dataMap[index]){
            for(let i=0; i<this.dataMap[index].length;i++){
                if(this.dataMap[index][i][0]===key){
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    getKeys(){
        let allKeys = [];
        for(let i = 0; i<this.dataMap.length;i++){
            if(this.dataMap[i]){
                for(let j = 0;j<this.dataMap[i].length;j++){
                    allKeys.push(this.dataMap[i][j][0]); 
                }
            }
        }
        return allKeys;
    }
}

let myHL = new HashTable()
myHL.set('hello','world')
myHL.set('hello2','world2')
myHL.set('hello3','world3')
myHL.set('hello4','world4')
console.log(myHL.getKeys())