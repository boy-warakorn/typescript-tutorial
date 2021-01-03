var userInput;
var userName;
userInput = 5;
userInput = "Max";
//Type unknown can't assign to type string
//Type any can
//userName = userInput;
//Must check type first
if (typeof userInput === "string")
    userName = userInput;
//No return No undefined
//Never mean **never return anything**
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
