var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return katzDeliLine[0];
    katzDeliLine.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    var NumberPlusCustomer = []
    for (let i = 0, i < line.length, i++) {
      NumberPlusCustomer.push(i + line[i])
      return ""
    }
  }
  
}