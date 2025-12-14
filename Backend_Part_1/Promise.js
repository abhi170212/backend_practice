function divideFunction(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("Can not perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFunction(2, 0)
  .then((res) => console.log(`got it ${res}`))
  .catch((res) => console.log(`error happened and error is ${res}`));

// example 2

function passwordFunction(password) {
  return new Promise((resolve, reject) => {
    if (password == "admin@123") {
      resolve("Login Successful");
    } else {
      reject("sorry ! check password again");
    }
  });
}

passwordFunction("abhishek")
  .then((res) => {
    console.log(`${res}`);
  })
  .catch((res) => {
    console.log(`${res}`);
  });

// chaining in promise
function userDetails(id) {
  return new Promise((resolve, reject) => {
    if (id === 1) {
      let userObject = {
        name: "Abhishek",
        courseId: 123,
        subscription: "personal",
        money: 23,
      };

      resolve(userObject);
    } else {
      reject("Looking for Id=1");
    }
  });
}

userDetails(1)
  .then((res) => {
    const moneyAmt = res.money;
    let finalPrice = moneyAmt - moneyAmt * 0.1;
    const updatedUser = { ...res, subscription: "pro", money: finalPrice };
    return updatedUser;
  })
  .catch((res) => console.log("error happened"))

  .then((res) => {
    return new Promise((resolve, reject) => {
      if (res.subscription == "pro") {
        resolve("New pro memeber added");
      } else {
        reject("No New memeber added");
      }
    });
  })
  .then((res) => console.log(`${res}`))
  .catch((err) => console.log(`${err}`));

// Promise Methods
function validEmail(email) {
  email.includes("@")
    ? Promise.resolve("Email valid")
    : Promise.reject("Invalid email");
}

function passwordLength(password) {
  if (password.length > 10) {
    Promise.resolve("Length is okay");
  } else {
    Promise.reject("length is not okay");
  }
}

Promise.all([validEmail('abhi@xyz.com'),passwordLength('dhhhhhhhhhcbdh')])
.then(()=>console.log(`all set`))
.catch((err)=>console.log(`error happened`))