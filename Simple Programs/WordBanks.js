function WordBanks(myNoun,myAdjective,myVerb,myAdverb)
{
    var myStr = "";
    myStr += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return myStr;
}

console.log(WordBanks("dog","big","ran","quickly"));
console.log(WordBanks("bike","slow","flew","slowly"));
