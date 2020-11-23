---
title: "CSS Flip Card Hover Effect"
date: "2020-11-07"
topic: CSS
abstract: "Cool Flip-Card Hover - Effect made with simple CSS3"
github: "https://github.com/dom-the-dev/css-flip-card"
codepen: "https://codepen.io/dom-the-dev/pen/MWeqaJq"
demo: "https://dom-the-dev.github.io/css-flip-card"
tags: css,html
---

#### CSS Flip Card effect on Hover.

Feel free to copy any code!
- [Demo](https://dom-the-dev.github.io/css-flip-card)

You can find this projects also on 
- [GitHub](https://github.com/dom-the-dev/css-flip-card)
- [CodePen](https://codepen.io/dom-the-dev/pen/MWeqaJq)

The HTML:
```
<h1>CSS-FLIP-CARD</h1>
    <div class="card">
      <div class="card__inner">
        <div class="card__content card_content--front">
          <h2>FRONT</h2>
        </div>
        <div class="card__content card__content--back">
          <h2>BACK</h2>
        </div>
      </div>
    </div>
    <h3>by Dom the Dev</h3>
```  
<br />  
The CSS:  

```
* {
    margin: 0;
    padding: 0
}

body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #FFFFFF;
    background: #41295a;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2F0743, #41295a);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2F0743, #41295a);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.card {
    cursor: pointer;
    margin: 50px;
    border-radius: 3px;
    perspective: 1000px;
}

.card__inner {
    background-color: #FFFFFF;
    color: #41295a;

    height: 350px;
    width: 300px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.card:hover .card__inner {
    transform: rotateY(180deg);
}

.card__content {
    position: absolute;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

.card__content--back {
  transform: rotateY(180deg);
} 
```

<br>
Hit me up for any kind of feedback.
<br><br>