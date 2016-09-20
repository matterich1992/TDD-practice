/*==========TDD Algorithms codeWars============*/
 
 /*
For numbers, strings and booleans use Test.assertEquals();
For arrays and objects use Test.assertSimilar();

DON'T use expect();
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

function removeSmallest (array){
var smallest = Math.min.apply(Math, array);
array.splice(array.indexOf(smallest),1);
return array;

}

removeSmallest([5,3,2,1,4]);


Test.decribe("removeSmallest", function(){
  Test.it("works for the following examples", function(){
    Test.assertSimilar(removeSmallest([1,2,3,4,5], [2,3,4,5], "Wrong answer result for [1,2,3,4,5]");
    Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5,3,2,4], "Wrong answer for [5,3,2,1,4]");  
  });
});



function stutter (str){
  str = str.split('');
  var results=[];
  for(var i=0;i<str.length;i++){
    results.push(str[i].toUpperCase()+ new Array(i+1).join(str[i].toLowerCase()));
  }
  return results;
}

stutter ("ZpglnRxqenU");

Test.describe("stutter",function() {
Test.it("Basic tests",function() {   
                Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
                Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
                Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
                Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
                Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})})


function statusEmp (name){
  for(var i=0;i<employees.length;i++){
    if(employees[i].firstName + ' ' + employees[i].lastName===name){
      return employees[i].role;
    }
  }
  return "Does not work here!";
}

Test.assertEquals(statusEmp("Dipper Pines"), "Does not work here");
Test.assertEquals(statusEmp("Morty Smith"), "Truck Driver");
