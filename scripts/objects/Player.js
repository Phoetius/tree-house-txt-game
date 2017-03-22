Player =
{
    location : Porch,
    hasKey : false,
    
    enter : function()
    {
        this.location.enter.call(this.location);
        turnUpdate();
    },
}