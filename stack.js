class stack
{
    stk()
    {
        this.items=[];
    }
}
push(n)
{
    this.items.push(n);
}
pop()
{
    if(this.items.length==0)
    return "NaN"
    z=this.items.pop();
    return z; 
}