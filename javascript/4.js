ans = 0
for(x = 100; x < 1000; ++ x)
    for(y = 100; y < 1000; ++ y) {
        act = x * y;
        rev = 0;
        while(act > 0) {
            rev = rev * 10 + act % 10;
            act = Math.floor(act / 10);
        }
        if(rev == x * y)
            ans = Math.max(ans, rev);
    }

console.log(ans);
