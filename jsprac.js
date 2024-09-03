//03-09-204 test sums

//2nd sum
let num=4;
if (num%2==0){
    console.log("even");
}
else{
    console.log("not even");
}

//1st sum
let teamScore=150;
let targetScore=145;
let oversLeft=0;
if (teamScore>=targetScore){
    console.log("Team wins by DL method")
}
else if(teamScore<targetScore && oversLeft>0){
    console.log("Match to be continued")
}
else if(teamScore<targetScore && oversLeft === 0){
    console.log("Team lose by DL method")
}