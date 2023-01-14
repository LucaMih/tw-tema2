function addTokens(input, tokens) {
  //test 1
  if (typeof input == "string") {
    console.log("is a string" + input);
  } else {
    console.log("Input should be a string");
    throw "Invalid input";
  }
  //test 2
  if (input.length < 6) {
    console.log("Input should have at least 6 characters" + input);
    throw "Input should have at least 6 characters";
  }
  //test 3

  if (!Array.isArray(tokens)) {
    throw "Invalid array format";
  }
  tokens.forEach((element) => {
    if ("string" != typeof element.tokenName) {
      throw "Invalid array format";
    }
  });

  //test 4

  if (input.indexOf("...") == -1) {
    console.log("luca: index =" + input.indexOf);
    return input;
  }
  //test 5
  if (input.includes("...") == true) {
    let j = 0;
    while (input.includes("...") == true) {
      input = input.replace("...", "${" + tokens[j].tokenName + "}");
      j++;
    }
    return input;
  }
}

const app = {
  addTokens: addTokens,
};

module.exports = app;
