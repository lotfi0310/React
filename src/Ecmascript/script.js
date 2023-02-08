
export const findLongestWord = ()=>{
    let tabword=['lotfi','fir','louiz','4twin4']
    var i=0;
    let mot;
    let longueur;
    // var obj = {mot, longueur};
    let tabword2=[]
    
 tabword.map((w)=>{
    let leng= w.length;
    let obj = {mot, longueur};
    obj.mot=w;
    obj.longueur=leng;
    
    tabword2[i]=obj;
    i=i+1;
})

const getLongestWord=(tab)=>tab.reduce((previousValue, currentValue)=>{
    previousValue.longueur>currentValue.longueur? previousValue:currentValue;
    // var longestobj;
    // if(previousValue.longueur>currentValue.longueur){
    //     longestobj=previousValue
    // }
    // else{
    //     longestobj=currentValue;
    // }
    // return longestobj;
})

console.log(tabword2)
console.log(getLongestWord(tabword2))
 return(tabword2);

}

