//Print odds from 1-20
for (var i = 1; i <= 20; i++) { //if i is less than or equal to 20

    if(i%2 != 0) { //if i modulus 2 does not equal 0

        console.log(i);//print value of i
        //when it gets here, it increments i and goes back through the loop if it meets the conditions
    }
}

//Sum and print from 1-5
var sum = 0; //var is set to 0

for(var num = 1; num <= 5; num++) { 

    console.log(num); //print num
    sum = sum + num; //set sum to equal sum plus num
    console.log(sum);  //print sum
    //when it gets here, incremement i. sum will stay what it was for this loop. go thru loop again if it meets the conditions

}