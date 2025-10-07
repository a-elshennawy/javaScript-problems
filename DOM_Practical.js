// DOM & Practical Challenges
//1- Create infinite scroll

function infiniteScroll(container, loadMore) {
  let loading = false;
  container.addEventlister("scroll", () => {
    //check if near bottom (within 100px)

    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      loading = true;
      loadMore().then(() => {
        loading = false;
      });
    }
  });
}

// usage:
// infiniteScroll(document.querySelector(".container"), async () => {
//   const items = await fetchItems();
//   apendToDom(items);
// });

// time: O(1)
// space: O(1)
// The total runtime depends on
// how often scroll events occur and the complexity of loadMore.

//###################################################################

// 2- DRAG AND DROP
function makeDraggable(element) {
  let offsetX, offsetY;

  element.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;

    const onMouseMove = (e) => {
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
}

makeDraggable(document.querySelector(".draggable"));

// time: O(n), wjere n is number of mouse events
// spcae: O(1)

//###################################################################

// 3- MODAL/POPUP
class Modal {
  constructor(content) {
    // create modal structure
    this.overlay = document.createElement("div");
    this.overlay.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:none";
    this.modal = document.createElement("div");
    this.modal.style.cssText =
      "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border-radius:8px";
    this.modal.innerHTML = content;

    this.overlay.appendChild(this.modal);
    document.body.appendChild(this.overlay);

    // close on overlay click
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.close();
    });
  }

  open() {
    this.overlay.style.display = "block";
  }

  close() {
    this.overlay.style.display = "none";
  }
}

// usage :
const modal = new Modal(
  '<h2>Hello</h2><button onclick="modal.close()">Close</button>'
);
modal.open();

// time: O(1) for setup per instance, assuming fixed content size.
// space: O(1) per instance, dominated by DOM elements and content size.

//###################################################################
// 4- stopwatch / timer
class stopwatch {
  constructor() {
    this.startTime = 0;
    this.elapsed = 0;
    this.interval = null;
  }

  start() {
    if (this.interval) return; //already running
    this.startTime = Date.now() - this.elapsed;
    this.interval = setInterval(() => {
      this.elapsed = Date.now() - this.startTime;
    }, 10); //update every 10ms for precision
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.pause();
    this.elapsed = 0;
  }

  getTime() {
    return this.elapsed; //return milliseconds
  }
}
// usage:
// create an instance

// 1. Create a new stopwatch instance
// const timer = new stopwatch();

// // 2. Start the stopwatch
// timer.start();

// // 3. Get the elapsed time (in milliseconds)
// console.log(timer.getTime());

// // 4. pause it
// timer.pause();

// // 5. Start again (continues from where it paused)
// timer.start();
// // 6. Reset to zero
// timer.reset();

// but the method up there will give you 0 instantly in console
// as it runs instantly after start()

// option 1:
// const timer = new stopwatch();
// timer.start();

// // Wait 2 seconds, then check
// setTimeout(() => {
//   console.log(timer.getTime()); // Will show ~2000ms
// }, 2000);

// option 2:
// const timer = new stopwatch();
// timer.start();

// // Log every second
// setInterval(() => {
//   console.log(timer.getTime()); // 1000, 2000, 3000, 4000...
// }, 1000);

// option 3:
// check stopWatch.html

// time: O(1)
// space: O(1)
// for each method and overall class, respectively.

//###################################################################

// 5- to-do list
class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  add(text) {
    const todo = { id: this.nextId++, text, completed: false };
    this.todos.push(todo);
    return todo;
  }

  delete(id) {
    // find and remove by id
    const index = this.todos.findIndex((t) => t.id === id);
    if (index !== -1) this.todos.splice(index, -1);
  }

  edit(id, newText) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.text = newText;
  }

  toggle(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  getAll() {
    return this.todos;
  }
}

// check toDo.html for visual illustration

// time:
// add(text): O(1)
// delete(id): O(n)
// edit(id, newText): O(n)
// toggle(id): O(n)
// getAll(): O(1)
// space: O(n), where n is the number of items in the list

//###################################################################

// 6- simple calculator
class calculator {
  constructor() {
    this.result = 0;
  }

  add(n) {
    this.result += n;
    return this;
  }

  sub(n) {
    this.result -= n;
    return this;
  }

  multiply(n) {
    this.result *= n;
    return this;
  }

  divide(n) {
    if (n === 0) throw new Error("division by zer ?? really ??");
    this.result /= n;
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }
}

// usage:
// option 1:
console.log(new calculator().add(5).multiply(2).getResult());

// option 2:
// check calculator.html

// time: Each method (add, sub, multiply, divide, clear, getResult) executes in O(1)
// space: O(1), as the class maintains a single numeric property (result)

//###################################################################

//  7- autocomplete feature
class autocomplete {
  constructor(items) {
    this.items = items;
  }

  search(prefix) {
    if (!prefix) return [];

    const lower = prefix.toLowerCase();
    // filter items that start with prefix

    return this.items.filter((item) => item.toLowerCase().startsWith(lower));
  }
}

// usage:
const ac = new autocomplete(["apple", "samsung", "nokia", "HTC", "HP", "dell"]);
console.log(ac.search("ap"));

// time: O(n * m), n is items & m is length of each item
// space: O(n)
