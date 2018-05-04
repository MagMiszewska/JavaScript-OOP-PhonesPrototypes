function Phone(brand, model, price, color) {
    //Here we put interior of the constructing function.
    this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
    this.model = model;
    this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", model name is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}
var SamsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", 1950, "red");
SamsungGalaxyS6.printInfo();

var iPhone6S = new Phone("Apple", "iPhone6S", 2250, "silver");
iPhone6S.printInfo();

var OnePlusOne = new Phone("OnePlus", "One", 1300, "black");
OnePlusOne.printInfo();


