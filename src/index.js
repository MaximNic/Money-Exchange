// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    
    ob={};
    var h, q, d, n , p;   //  50¢, 25¢, 10¢, 5¢ and 1¢}
    //   currency=43;
    if (currency>10000){
        ob.error= "You are rich, my friend! We don't have so much coins for exchange";
        return (ob);
    } 
    h=Math.floor(currency/50);
    currency=currency % 50;
    q=Math.floor(currency/25);
    currency=currency % 25;
    d=Math.floor(currency/10);
    currency=currency % 10;
    n=Math.floor(currency/5);
    currency=currency % 5;
    p=currency;
    if (h>0) ob.H=h;
    if (q>0) ob.Q=q;
    if (d>0) ob.D=d;
    if (n>0) ob.N=n;
    if (p>0) ob.P=p;
    return (ob);
    //   console.log (ob);
}
