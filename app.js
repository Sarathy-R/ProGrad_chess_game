var queen1 = {
  position: {
    x: 0,
    y: 0,

  },
  name: 'Queen1'
};
var queen2 = {
  position: {
    x: 0,
    y: 0,
  },

  name: 'Queen2'
};


var board = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

function move(numberOfSteps, direction, queen) {
  let temp;
  let temp1;
  let flag1 = 0;


  switch (direction) {
    case "E":
      temp = queen.position.y + numberOfSteps;
      console.log("Temp E", temp);
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary E");
        document.getElementById('message-1').innerText = queen.name + ` went out of boundary`;
        flag1 = 1;
      } else {
        queen.position.y = temp;
      }
      break;

    case "W":

      temp = queen.position.y - numberOfSteps;
      console.log("Temp W", temp);
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary W");
        document.getElementById('message-1').innerText = queen.name + ` went out of boundary`;
        flag1 = 1;
      } else {
        queen.position.y = temp;
      }
      break;

    case "N":
      temp = queen.position.x - numberOfSteps;
      console.log("Temp N", temp);
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary N");
        document.getElementById('message-1').innerText = queen.name + ` went out of boundary`;
        flag1 = 1;
      } else {
        queen.position.x = temp;
      }
      break;

    case "S":

      temp = queen.position.x + numberOfSteps;
      console.log("Temp S", temp);
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary S");
        document.getElementById('message-1').innerText = queen.name + ` went out of boundary`;
        flag1 = 1;
      } else {
        queen.position.x = temp;
      }
      break;

      //DIAGONAL DIRECTIONS
    case "NE":
      temp = queen.position.x - numberOfSteps;
      temp1 = queen.position.y + numberOfSteps;
      if ((temp > 8 || temp < 0) || (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary NE");
        document.getElementById('message-1').innerText = queen.name + ` went out of boundary`;
        flag1 = 1;
      } else {
        queen.position.x = temp;
        queen.position.y = temp1;
      }
      break;

    case "NW":
      temp = queen.position.x - numberOfSteps;
      temp1 = queen.position.y - numberOfSteps;
      if ((temp > 8 || temp < 0) || (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary NW");
        document.getElementById('message-1').innerText = queen.name + ` went out of boundary`;
        flag1 = 1;
      } else {
        queen.position.x = temp;
        queen.position.y = temp1;
      }
      break;

    case "SE":
      temp = queen.position.x + numberOfSteps;
      temp1 = queen.position.y + numberOfSteps;
      if ((temp > 8 || temp < 0) || (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary SE");
        document.getElementById('message-1').innerText = queen.name + ` went out of boundary`;
        flag1 = 1;
      } else {
        queen.position.x = temp;
        queen.position.y = temp1;
      }
      break;
    case "SW":
      temp = queen.position.x + numberOfSteps;
      temp1 = queen.position.y - numberOfSteps;
      if ((temp > 8 || temp < 0) || (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary SW");
        document.getElementById('message-1').innerText = queen.name + ` went out of boundary`;
        flag1 = 1;
      } else {
        queen.position.x = temp;
        queen.position.y = temp1;
      }
      break;

    default:
      console.log("Default swicth");
      flag1 = 1;
      document.getElementById('message-1').innerText = "Invalid Input";
      break;

  }
  return flag1;
}

function play() {

  document.getElementById('message-1').innerText = "";

  var flag = 0;
  //Value of Queen-1
  var value1 = document.getElementById("position-1").value;


  //Value of Queen-2
  var value2 = document.getElementById("position-2").value;

  if (value1.length > 3 || value2.length > 3) {
    flag = 1;
    document.getElementById('message-1').innerText = "Invalid Input ";
  }

  if (value2 != "" && value1 != "") {
    var Q2 = value2.split(" ");
    var Queen2Position;
    var Q1 = value1.split(" ");
    var Queen1Position;


    console.log("Q1", Q1);

    console.log("Q2", Q2);




    Q1.forEach((element) => {
      let sub = element.length > 3 ? 2 : 1;

      let number = Number(element.slice(element.length - sub));
      let dir = element.slice(0, element.length - sub);
      console.log("Q!", number, dir);
      let status = checkInp(number, dir);
      console.log("status for Q-1", status);
      if (status) {
        if (move(number, dir, queen1) == 1) {
          flag = 1;
        };
      } else {
        document.getElementById('message-1').innerText = "Invalid Input for Queen 1";
        flag = 1;
        return 0;
      }
    });


    Q2.forEach((element) => {

      let sub = element.length > 3 ? 2 : 1;
      let number2 = Number(element.slice(element.length - sub));
      let dir2 = element.slice(0, element.length - sub);

      console.log("values-2", number2, dir2);
      let status = checkInp(number2, dir2);

      console.log("status for Q-2", status);
      if (status) {
        if (move(number2, dir2, queen2) == 1) {
          flag = 1;
        };
      } else {
        if (flag == 0) {
          document.getElementById('message-1').innerText = "Invalid Input for Queen 2";
          flag = 1;
          return 0;
        }
      }
    });

    Queen1Position = board[queen1.position.x][queen1.position.y];
    Queen2Position = board[queen2.position.x][queen2.position.y];

    if (Queen1Position == Queen2Position && flag == 0) {


      document.getElementById('message-1').innerText = "Queens are getting Crashed !!";
    }
    console.log(
      "Queen-1 current position :" + board[queen1.position.x][queen1.position.y]
    );
    console.log(
      "Queen-2 current position :" + board[queen2.position.x][queen2.position.y]
    );

    console.log("POS Q1", queen1.position.x, queen1.position.y);
    console.log("POS Q2", queen2.position.x, queen2.position.y);

    if (flag == 0) {

      document.getElementById('message').innerText =
        `Queen-1 current position :` + board[queen1.position.x][queen1.position.y] +
        `\n Queen-2 current position :` + board[queen2.position.x][queen2.position.y]

    } else {
      document.getElementById('message').innerText = "";
    }


  } else {

    refresh();
    document.getElementById('message-1').innerText = "Kindly enter the values for Both the Queens";
  }


}

function refresh() {

  //Initializing the Positions to origin
  queen1.position.x = 0;
  queen1.position.y = 0;
  queen2.position.x = 0;
  queen2.position.y = 0;

  document.getElementById('message').innerText = "";
  //Display of the position to user
  // document.getElementById('message').innerText =
  //   `Queen-1 current position :` + board[queen1.position.x][queen1.position.y] +
  //   `\n Queen-2 current position :` + board[queen2.position.x][queen2.position.y]

  //Resetting the inputs 
  document.getElementById('message-1').innerText = "";
  document.getElementById("position-1").value = "";
  document.getElementById("position-2").value = "";

}

function checkInp(number, dir) {
  //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
  var regex = /^[A-Za-z]+$/

  //Validate TextBox value against the Regex.
  var isValid = regex.test(dir);

  if (number == "" || dir == "") {
    return false;
  }
  console.log("CHCK", isNaN(number), isValid);

  if (isNaN(number) == false && isValid == true) {
    return true;
  } else {
    return false;
  }
}