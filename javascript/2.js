sum = 0;
a = 1;
b = 1;
while(a + b <= 4000000) {
    c = a + b;
    if(c % 2 == 0) {
        sum = sum + c;
    }
    a = b;
    b = c;
}
console.log(sum)
