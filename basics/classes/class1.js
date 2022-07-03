class Sample {
    name = 'Ram';
    age = 23;

    fullName() {
        return `${this.name} ${this.age}`
    }

    static fullName2() {
        return `Hello`
    }
}

const obj = new Sample();
console.log(obj.fullName());

console.log(Sample.fullName2());