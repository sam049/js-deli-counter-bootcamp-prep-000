var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var CurrentlyServing = [];
    for (i=0; i < katzDeliLine.length; i++) {
      CurrentlyServing.push(katzDeliLine[i+1]);
    }
    return `Currently serving ${CurrentlyServing}.`;
    katzDeliLine.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var NumberPlusCustomer = []
    for (let i = 0; i < line.length; i++) {
      NumberPlusCustomer.push(i+1 + ". " + line[i]);
    }
  }
  return "The line is currently: " + NumberPlusCustomer.join(", ")
}