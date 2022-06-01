class HashTable{

    // create array of given size 
    constructor(size = 7){
        this.dataMap = new Array(size)
    }

    // create hash for given key
    _hash(key){
        let hash = 0;

        for(let i = 0; i < key.length ; i++){
            // every character has it own ascii =>  key.charCodeAt(char)
            // 23 => prime number ( give more random numbers ) | prefered
            // % dataMap.length => give number under defined array
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash
    }
}

// console.log("yash".charCodeAt(0)) 
// console.log("yash".charCodeAt(1))
console.log("yash".charCodeAt(2))
// console.log("yash".charCodeAt(3))

let myHashTable = new HashTable()
console.log(myHashTable)
