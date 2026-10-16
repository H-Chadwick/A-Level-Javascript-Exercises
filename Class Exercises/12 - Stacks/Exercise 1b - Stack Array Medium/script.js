// =============================
// Stack implemented with an array (manual push/pop)
// =============================
document.addEventListener("DOMContentLoaded", function() {

// --- Stack setup ---
const STACK_LIMIT = 10; // Maximum stack size
const stack = [];
let top = -1; // Index of the top element

function push(value) {
// --- Push operation ---
  if (top >= STACK_LIMIT - 1) {
    // Stack is full
    return -1;
  } else {
    top = top + 1;
    stack[top] = value;
    return top;
  }
}

function pop() {
// --- Pop operation ---
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

function peek() {
// --- Peek operation ---
  if (top >= 0) {
    return stack[top];
  } else {
    return -1;
  }
}

function clear() {
// --- Clear operation ---
  var i = 0;
  while (i <= top) {
    stack[i] = undefined;
    i = i + 1;
  }
  top = -1;
}

function updateOutput() {
// --- Display stack contents ---
  var contents = [];
  var i = 0;
  while (i <= top) {
    contents.push(stack[i]);
    i = i + 1;
  }
  var out = "Stack contents (top at right): [" + contents.join(", ") + "]\n";
  document.getElementById("output").innerText = out;
}

document.getElementById("btnPush").onclick = function() {
// --- Push button handler ---
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

document.getElementById("btnPop").onclick = function() {
// --- Pop button handler ---
  var popped = pop();
  updateOutput();
  if (popped === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Cannot pop.";
  } else {
    document.getElementById("output").innerText += "\nPopped: " + popped;
  }
};

document.getElementById("btnPeek").onclick = function() {
// --- Peek button handler ---
  var topValue = peek();
  updateOutput();
  if (topValue === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Nothing to peek.";
  } else {
    document.getElementById("output").innerText += "\nTop: " + topValue;
  }
};

document.getElementById("btnClear").onclick = function() {
// --- Clear button handler ---
  clear();
  updateOutput();
};


});
//updateOutput();
