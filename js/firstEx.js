function exFirst() {
  var a, c, n, res;
  a = document.getElementById('a').value;
  a = parseInt(a);
  c = document.getElementById('c').value;
  c = parseInt(c);
  n = document.getElementById('n').value;
  n = parseInt(n);
  if (a == c && c == n){
  res = a + c + n;
    document.getElementById('out1').innerHTML = Math.cos(res);
 }
 else if (a < c && c == n) {
   res = a * c * n ;
      document.getElementById('out1').innerHTML = Math.cos(res);
 }
 else if (a < c && c < n) {
   res = a * n + c * n ;
      document.getElementById('out1').innerHTML = Math.cos(res);
 }
 else {
   res=0;;
    document.getElementById('out1').innerHTML = res;
 }
}
function exSecond(){
  var a; res = 0; b = 1;
  while( a = prompt(b,0) )
      {
          b++;
          if( a % 2 == 0 ){
            res += 1;
            alert(a);
          }
      }
document.getElementById('out2').innerHTML = res;
}
function exThird(){
  var a, b;
  b = prompt("Введіть 2-цифрове число:",0)
    parseInt(b);
  if(b>9 && b<100){
  a=b*5;
  alert(a);
  document.getElementById('out3').innerHTML = a;
} else b = 0;
alert(a);

}
function exFourth(){
  var a,c,res, x,q;
  a = document.getElementById('num1').value;
  a = parseInt(a);
  c = document.getElementById('num2').value;
  c = parseInt(c);
x=2/a;
  for(var i = 0; i <= c; i++){
res=2*c/a*a+a*c;
  }
  document.getElementById('out4').innerHTML = res;
}
