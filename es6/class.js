class Animal{
    name;
    color;
    constructor(n,c){
        this.name=n;
        this.color=c;
    }
    show(){
        console.log(`The name is ${this.name} and the color is ${this.color}`);
    }
}
const cat=new Animal;
cat.name='My cat';
cat.color='White';
cat.show();
const cow=new Animal('hamba','gray');
cow.show();