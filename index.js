var katzDeliLine = [];
function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine === 0){
    return "There is nobody waiting to be served!"
  } else {return `currently serving ${katzDeliLine.shift()}.`
}
}
