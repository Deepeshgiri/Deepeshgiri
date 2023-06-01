let a = [20,"ranjit", 50,"kumar", "gouda","ranjit","hunda","ranjit"]
let count=0;
for(let i=0;i<a.length; ++i)
{
    if(a[i]=="ranjit")
    {
        count++
    }
    console.log(a[i]);
}
console.log(count);