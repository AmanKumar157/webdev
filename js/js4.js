////class concept 
class rectangle{
    constructor(width, height , color){
        this.width = width;
        this.height = height;
        this.color= color;


    }

    area(){
        const area= this.width*this.height;
        return area;

    }

    print(){
        console.log(`painting with color ${this.color}`);

    }
}
const rect1= new rectangle(4,5,"red"); //instance or object of rectangle class
console.log(rect1);
console.log(rect1.area());
rect1.print();

///date class
const now = new Date();
console.log(now.toISOString());

//map class
const map =  new Map();
map.set('name' , 'aman');
map.set('age' , 22);
console.log(map.get('name'));

