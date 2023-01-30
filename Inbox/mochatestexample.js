//example class
class Car{
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

//ceated a vairable
let car;

//for re use of object cerate code
beforeEach(()=>{
    car = new Car();
});


//descriv is group of test we need
describe('Car Class',()=>{
    //it is test case
    //test case 1
    it('can park',()=>{
        const car = new Car();
        assert.equal(car.park(),'stopped');
    });
    //test case 2
    it('can drive',()=>{
        const car = new Car();
        assert.equal(car.drive(),'vroom');
    });
});