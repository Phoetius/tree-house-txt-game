Player =
{
    location : TreeHouse,
    
    enter : function()
    {
        this.location.enter.call(this.location);
    },
}