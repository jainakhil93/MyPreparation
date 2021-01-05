// LIFO, we use push and pop.
// Stacks with no arrays, so our storage is strings
var Stack =  function() {
    this.storage = ""
}

Stack.prototype.push = function(val) {
    this.storage = this.storage.concat('---', val);
    console.log(val, "added to menu")
}

Stack.prototype.viewMenu = function() {
    return this.storage
}

Stack.prototype.pop = function() {
// slice off the last characters up untill the "---"
var item = this.storage.slice(this.storage.lastIndexOf("---") + 3)
// update storage without the last item
this.storage = this.storage.substring(0, this.storage.lastIndexOf('---'))
// return the last item
return item
}

Stack.prototype.size = function() {
    return this.storage.split('---').length - 1;
}

var myWeeklyMenu = new Stack();
myWeeklyMenu.push("Muesli");
myWeeklyMenu.push("Juice");
myWeeklyMenu.push("Beef Mince");
console.log(myWeeklyMenu.viewMenu())
console.log(myWeeklyMenu.pop());
console.log(myWeeklyMenu.viewMenu())
console.log(myWeeklyMenu.size());
