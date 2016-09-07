/*==========TDD Algorithms codeWars============*/
 
 /*
For numbers, strings and booleans use Test.assertEquals()
For arrays and objects use Test.assertSimilar()
 */

 
function SeriesSum(n){
var total = 0;
for(var i=0;i<n;i++){
  total+=1/(3*i+1);
}
return total.toFixed(2);
}
 
TDD:
 
Test.assertEquals(SeriesSum(1), "1.00")
Test.assertEquals(SeriesSum(2), "1.25")
Test.assertEquals(SeriesSum(3), "1.39")
Test.assertEquals(SeriesSum(4), "1.49")

//assertEquals(function(arg), 'Expected output');

function maxProduct(a) {
a.sort(function(a,b){return b-a;});
return a[0]*a[1];
}
 
describe("Max Product", function(){
  it("should return the max product of a pair in given array", function(){
    Test.assertEquals(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
    Test.assertEquals(maxProduct([154, 428, 455, 346]), 194740);
    Test.assertEquals(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827);
    Test.assertEquals(maxProduct([136, 376, 10, 146, 105, 63, 234]), 87984);
    Test.assertEquals(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]), 218536);
    Test.assertEquals(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]), 192672);
    Test.assertEquals(maxProduct([134, 320, 266, 299]), 95680);
    Test.assertEquals(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]), 139496);
    Test.assertEquals(maxProduct([375, 56, 337, 466, 203]), 174750);
  });
});

//assertEquals(function(arg), 'Expected output');