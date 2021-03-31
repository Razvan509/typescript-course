class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(){
    console.log('Department: ' + this.name);
  }
}

const hr = new Department('HR');
hr.describe();

const hrCopy = {describe: hr.describe};

hrCopy.describe();

//describe