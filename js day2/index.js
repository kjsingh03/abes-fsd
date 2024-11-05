const dom = document.createElement('div')

dom.style.backgroundColor = "brown";
dom.style.display = 'flex';
dom.style.flexDirection = 'column';
dom.style.gap = '1rem';

// Div 

const div = document.createElement('div');

div.innerHTML = "<h6>Heading by DOM</h6>";

div.classList.add('h1');

div.setAttribute('id', 'h1');

dom.append(div);

// Image

const img = document.createElement('img');

img.setAttribute('src', './amzn.png');

img.setAttribute('width', '200');

dom.append(img);

// Button

const button = document.createElement('button');

function handleClick() {
    button.innerHTML = button.innerHTML !== "Clicked" ? "Clicked" : "Click Me";
    console.log("clicked");
};

button.addEventListener('click', handleClick);

button.innerText = "Click Me";

dom.append(button);

// Prepending Dom div into body

document.querySelector('body').prepend(dom);

// Accessing all divs

const divs = document.getElementsByClassName('h1');

console.log(divs);
