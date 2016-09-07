nr = 600851475143;
d = 2;
while(d * d <= nr) {
    while(nr % d == 0) {
        nr = nr / d;
        ans = d;
    }
    ++ d;
}
if(nr > 1)
    ans = Math.max(ans, nr);
 
console.log(ans);
