---
title: "Todo List with Vanilla.js"
date: "2020-11-14"
topic: vanilla js
github: "https://github.com/dom-the-dev/todo-list-vanilla"
demo: "https://dom-the-dev.github.io/todo-list-vanilla/"
abstract: "Simple ToDo-List made with pure JavaScript."
tags: vanilla js
---

#### Todo List built with pure vanilla.js.

Feel free to copy any code!

[Demo](https://dom-the-dev.github.io/todo-list-vanilla/)

You can find this projects also on 
- [GitHub](https://github.com/dom-the-dev/todo-list-vanilla)
- [CodePen](https://codepen.io/dom-the-dev/pen/WNxPygL)

The HTML:
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style/style.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <form class="todolist">
      <h1 class="title">Doms Todo List</h1>

      <div class="box addItem">
        <input
          id="js-input"
          class="listElement"
          name="add-item"
          placeholder="Add new"
        />
        <button id="js-add" class="" for="add-item">Add</button>
      </div>

      <div class="box">
        <h2 class="subtitle">Things to get done:</h2>
        <ul id="js-list-todo" class="list"></ul>
      </div>

      <div class="box">
        <h3 class="subtitle">Already done:</h3>
        <ul id="js-list-done" class="list list--done"></ul>
      </div>
    </form>
    <script src="js/script.js"></script>
  </body>
</html>


```  
<br />  
The CSS:  

```
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

body {
  background: #00c3ff;
}

.todolist {
  width: 400px;
  margin: 150px auto 0 auto;
}

.title {
  text-align: center;
  color: #ffffff;
}

.subtitle {
  text-align: center;
  font-size: 22px;
}

.box {
  border-radius: 3px;
  padding: 5px;
  margin: 15px 0;
  background-color: #ffffff;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
  font-size: 22px;
}

.addItem {
  display: flex;
}

.list {
  list-style-type: none;

  &--done {
    color: grey;
  }
}

.listElement {
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  width: 100%;
  border: none;
  padding: 7px 12px;
  outline: none;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid transparent;

  &.error {
    border-bottom-color: red;
  }
}

.listElement:first-of-type {
  border-top-color: transparent;
}

```
<br />
The JavaScript:

```
const addButton = document.getElementById("js-add");
const input = document.getElementById("js-input");
const todoList = document.getElementById("js-list-todo");
const doneList = document.getElementById("js-list-done");

addButton.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();

  if (input.value !== "") {
    let listElement = createListElement(input.value);
    todoList.appendChild(listElement);
    input.value = "";
  } else {
    input.classList.add("error");
  }
}

function createListElement(title) {
  const text = document.createTextNode(title);
  const listElement = document.createElement("li");

  listElement.classList.add("listElement");
  listElement.appendChild(text);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("buttonWrapper");

  const doneButton = document.createElement("button");
  doneButton.innerText = "done";
  doneButton.classList.add = "js-done";
  doneButton.addEventListener("click", finishTodo);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.classList.add = "js-delete";
  deleteButton.addEventListener("click", deleteTodo);

  buttonWrapper.appendChild(doneButton);
  buttonWrapper.appendChild(deleteButton);

  listElement.appendChild(buttonWrapper);

  return listElement;
}

function finishTodo(e) {
  e.preventDefault();
  let listElement = this.parentElement.parentElement;
  listElement.removeChild(listElement.querySelector(".buttonWrapper"));
  doneList.appendChild(listElement);
}

function deleteTodo(e) {
  e.preventDefault();
  this.parentElement.parentElement.remove();
}

```
<br>
Hit me up for any kind of feedback.
<br><br>