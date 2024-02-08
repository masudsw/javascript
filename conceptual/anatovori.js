function anaToVori(ana){
    if(typeof ana!=='number')
        return "The value should be a number";
    else if(ana<=0)
        return "The value should be a positive number";
    const vori=0.0625*ana;
    return vori;
}

const result=anaToVori(-3);
console.log(result);