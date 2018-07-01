function BankProfile(name, ssn, ) {
    this.id = id;
    this.name = name;
    this.ssn = ssn;
    this.accounts = [];
    this.addAccount = function(account){
        this.accounts.push(account);
    }
}

function BankAccount(number, alias, balance){
    this.number = number;
    this.alias = alias;
    this.balance = balance;
    this.withdraw = function (amount){
        this.balance = this.balance -amount;
        return this.balance;
    }
    this.deposit = function (amount){
        this.balance = this.balance + amount;
        return this.balance;
    }
}

CheckingAccount.prototype = BankAccount.prototype.;