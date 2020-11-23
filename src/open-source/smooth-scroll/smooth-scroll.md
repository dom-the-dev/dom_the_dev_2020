---
title: "Smooth Scroll with Vanilla.js"
date: "2020-11-05"
topic: vanilla js
abstract: "Smooth Scoll to Anchor - Build with pure JavaScript"
github: "https://github.com/dom-the-dev/smooth-scroll-vanilla"
codepen: "https://codepen.io/dom-the-dev/pen/RwRBvPv"
demo: "https://dom-the-dev.github.io/smooth-scroll-vanilla/"
tags: vanilla js
---

#### Small vanilla.js function for smooth scroll movement on your page. No need of jQuery or any other Framework.

Feel free to copy any code!
- [Demo](https://dom-the-dev.github.io/smooth-scroll-vanilla/)

You can find this projects also on 
- [GitHub](https://github.com/dom-the-dev/smooth-scroll-vanilla)
- [CodePen](https://codepen.io/dom-the-dev/pen/RwRBvPv)

The HTML:
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="initial-scale=1.0" />
    <link rel="stylesheet" href="style/style.css" />
  </head>

  <body>
    <section id="section1">
      <a class="js-scroll" href="#section2">Scroll down</a>
    </section>
    <section id="section2">
      <a class="js-scroll" href="#section3">Mooore!</a>
    </section>
    <section id="section3">
      <a class="js-scroll" href="#section1">Bring me back!</a>
    </section>
  </body>

  <script src="js/smooth-scroll.js"></script>
</html>

```  
<br />  
The CSS:  

```
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background: #ff7e5f;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #feb47b, #ff7e5f);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #feb47b, #ff7e5f);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

section {
    height: calc(100vh - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
}


a {
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
}

a:hover {
    text-decoration: underline;
}
```
<br />
The JavaScript:

```
// Put all links in a variable
const links = document.querySelectorAll('.js-scroll');

// Add event listener to all links
links.forEach(function (elem) {
    elem.addEventListener('click', smoothScroll)
});

// Magic function to scroll smooth!
function smoothScroll(e) {
    // Prevent default anchor behaviour
    e.preventDefault();

    // Get clicked links href attribute
    const link = this.getAttribute("href");

    // Get the targets position
    const offsetTop = document.querySelector(link).offsetTop;

    // Finally scroll to target
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
```
<br>
Hit me up for any kind of feedback.
<br><br>