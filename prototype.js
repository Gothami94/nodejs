function person() {

    this.name=" ";
    this.life=100;
    this.giveLife=function giveLife(dependent) {

        dependent.life+=1;
        this.life-=1;
        console.log(this.name + " gave 1 life to " + dependent.name);
    }

}

var buddhi=new person();
buddhi.name="buddhi";

var gothami=new person();
gothami.name="Gothami";

buddhi.giveLife(gothami);

console.log(buddhi.life);
console.log(gothami.life);

//prototype give permission to every user objects to access this method,properties
person.prototype.salary=20000;
person.prototype.uppercut=function uppercut(donator) {

    donator.salary-=10000;
    console.log(this.name+" uppercutted "+ donator.name);

};

gothami.uppercut(buddhi);

console.log(buddhi.salary);
console.log(gothami.salary);