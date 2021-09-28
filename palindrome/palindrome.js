function check(input){
    let change = input.toLowerCase();
    let rev="";
    for(let i=change.length-1; i>=0; i--){
        rev += change[i];
    }
    console.log(rev);

    if(change == rev)
    console.log("yes");
    else
    console.log("no");

    console.log(typeof(rev));
}

check("RaDaR")