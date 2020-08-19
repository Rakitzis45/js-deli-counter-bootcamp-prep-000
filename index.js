var katzDeliLine = [];
function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {return `Currently serving ${katzDeliLine.shift()}.`
}
}

function currentLine(katzDeliLine){
  let line = [];
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else if (katzDeliLine.length>0){ let (i = 0; i < katzDeliLine.length; i++)
  }

}
