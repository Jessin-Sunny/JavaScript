function cc(card)
{
    var count=0;
    var holdbet="hold";
    switch (card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "K":
        case "Q":
        case "A":
        case "J":
            count--;
            break;    
    }
    if (count > 0)
    {
        holdbet="Bet";
    }
    return count + " " + holdbet;
}

//cc(2);cc(3);cc(7);cc('K');cc('A');
//console.log(cc(4));

cc(10);cc('K');cc(10);cc('K');cc('A');
console.log(cc(4));
