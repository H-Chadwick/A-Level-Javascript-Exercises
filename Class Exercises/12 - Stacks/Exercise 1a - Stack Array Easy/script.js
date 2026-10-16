// =============================
// Stack implemented with an array (manual push/pop)
// =============================

// --- Stack setup ---
const STACK_LIMIT = 10; // Maximum stack size
const stack = [];
let top = -1; // Index of the top element

// --- Push operation ---
function push(value) {
  // TODO: Fill in the blank to add value to the stack
  if (top >= STACK_LIMIT - 1) {
    // Stack is full
    return -1;
  } else {
    top = top + 1;
    stack[top] = value;
    return top;
  }
}

// --- Pop operation ---
function pop() {
  // TODO: Fill in the blank to remove and return the top value
  if (top === -1) {
    // Stack is empty
    return -1;
  } else {
    var popped = stack[top];
    stack[top] = undefined;
    top = top - 1;
    return popped;
  }
}

// --- Peek operation ---
function peek() {
  if (top >= 0) {
    return stack[top];
  } else {
    return -1;
  }
}

// --- Clear operation ---
function clear() {
  var i = 0;
  while (i <= top) {
    stack[i] = undefined;
    i = i + 1;
  }
  top = -1;
}

// --- Display stack contents ---
function updateOutput() {
  var contents = [];
  var i = 0;
  while (i <= top) {
    contents.push(stack[i]);
    i = i + 1;
  }
  var out = "Stack contents (top at right): [" + contents.join(", ") + "]\n";
  document.getElementById("output").innerText = out;
}

// --- Push button handler ---
document.getElementById("btnPush").onclick = function() {
  var value = document.getElementById("value").value;
  if (value === "") {
    return;
  }
  var result = push(value);
  updateOutput();
  if (result === -1) {
    document.getElementById("output").innerText += "\nStack is full. Cannot push.";
  }
};

// --- Pop button handler ---
document.getElementById("btnPop").onclick = function() {
  var popped = pop();
  updateOutput();
  if (popped === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Cannot pop.";
  } else {
    document.getElementById("output").innerText += "\nPopped: " + popped;
  }
};

// --- Peek button handler ---
document.getElementById("btnPeek").onclick = function() {
  var topValue = peek();
  updateOutput();
  if (topValue === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Nothing to peek.";
  } else {
    document.getElementById("output").innerText += "\nTop: " + topValue;
  }
};

// --- Clear button handler ---
document.getElementById("btnClear").onclick = function() {
  clear();
  updateOutput();
};

updateOutput();
