//Object Oriented Programming with TypeScript MyBank Console App


interface ibankaccount {
    credit (amount: number): void;
    debit (amount: number): void;

}

//class

class Bankaccount implements ibankaccount {
    accountbalance: number
    constructor (accountbalance: number){
    this.accountbalance = accountbalance
    }

// publically credit

public credit(amount: number){
    if (amount > 0) {
        this.accountbalance += amount
        console.log("Credit successfully get into new account and your balance is :" +this.accountbalance);
    }
    else {
        console.log("Credit unsuccessfully")
    }
}

// publically debit

public debit(amount: number){
    if (amount > 0 && amount < this.accountbalance) {
        this.accountbalance -= amount
        console.log("Debit successfully share in new account :" +this.accountbalance)
    }
    else {
        console.log("Debit unsuccessfully")
    }
}

}



//customer details
class Customer {
    person: {
        firstName: string;
        lastName: string;
    }
    age: number;
    gender: string;
    mobile_number: number;
    bankaccount: Bankaccount;

    constructor(person: {firstName: string, lastName: string}, age: number, gender: string, mobile_number: number, bankaccount: Bankaccount) {
        // this property utalization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }


    //publically user access
    public display() {
        console.log("Name: "+this.person.firstName+""+this.person.lastName);
        console.log("Age: "+this.age);
        console.log("Gender: "+this.gender);
        console.log("Mobile Number: "+this.mobile_number);
        console.log("Amount In Bank: "+this.bankaccount.accountbalance)
        console.log()
    }

}

const a1 = new Bankaccount(8000)
const c1 = new Customer ({firstName: "Muhammad ", lastName: "Ibrahim"}, 18, "Male", 12421521125, a1)
c1.display()
c1.bankaccount.debit(500)
console.log()


const a2 = new Bankaccount(800)
const c2 = new Customer ({firstName: "Salman ", lastName: "Zada"}, 22, "Male", 55512421521125, a2)
c2.display()
c2.bankaccount.debit(200)
console.log()

















