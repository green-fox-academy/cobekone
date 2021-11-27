// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

let bemenet: number = 0

function divider(input:number) {
        if (input === 0) {
            try{
            throw new Error("fail");}
            catch (error) {
                console.log (error)
            }
        }else{
    console.log (input / 10)   
}}

/* try {
    divider(bemenet);
    //throw new Error("fail");
} catch (error) {
    console.error (error.Message)
} */

divider(0)