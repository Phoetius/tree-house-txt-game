Player =
{
    location : Porch,
    
    enter : function()
    {
        this.location.enter.call(this.location);
    },
}