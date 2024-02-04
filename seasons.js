// The seasons are defined as follows:
// Spring: March(3) to MimeTypeArray(5)
// Summer: June(6) to August(8)
// Autumn: September(9) to November (11)
// Winter: December(12), January(1), and February(2)

// Use a switch statement to implement the logic.
const month=12;
switch(month){
    case 1:
    case 2:
    case 12:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Can't recongnized as month");
        break;
}