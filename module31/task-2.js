//Task-2 console.log output Petersberg, Herry
let students={
    2222:{
        name:"Jack",
        section:"C",
        class:"IX",
        address:{
            "building no":12,
            "street":"St. Jonson",
            "city":"Petersburg",
            "country":"UK"
        }
    },

    3333:{
        name:"Herry",
        section:"D",
        class:"X",
        address:{
            "building no":85,
            "street":"DC road",
            "city":"Kachukhet",
            "country":"Bangladesh"
        }
    }
}

console.log(students['2222'].address.city);
console.log(students['3333'].name)