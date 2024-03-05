/*const people=[
    {name:'Mena', age:20},
    {name:'Rina', age:15},
    {name:'Suchorita', age:22}
   ];
   1. Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here?
   20+15+22=57. The output will be 57
   What are you thinking? Yeah! Do it with for loop. I know you can do it.
   But! Wait!! Wait!!! Do the same task using array.reudce() method.
   */
   const people=[
    {name:'Mena', age:20},
    {name:'Rina', age:15},
    {name:'Suchorita', age:22}
   ];
   const sumOfAges= people.reduce((acumolator,currentValue)=>{return acumolator+currentValue.age;},0);
   console.log(sumOfAges);