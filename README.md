# Clicky Game

## Description
This application is a memory game that showcases a small sample of the capabilities of the React library. Components and state are managed throughout the application to provide the user with an experience similar to that of native mobile apps. Although the app is built desktop first, the mobile UI/UX was factored into the development process, and thus provides a satisfactory experience across devices/platforms. The array of cartoons images is shuffled at each page loading, as well as at each image selection, using a javaScript variation of the Fisher-Yates shuffling algorithm. After each shuffling event, the resulting array is used to build the elements dynamically, and output them to the virtual DOM in the desired structure. I chose 16 images to maintain symmetry, and to provide an adequate challenge. 

## Instructions
To begin, simply click an image, which will trigger a new random arrangement of the images. Upon clicking an image that has been previously clicked, the game will end, and a new game will begin after 3 seconds. A game is won when all 16 images have been clicked without clicking an element that was previously clicked. At any point, clicking the title logo in the header, "Clicky-Game", will reset the current score and start a new game. Upon winning, a new game will begin after 3 seconds.  

## Incorporated Technologies
* React
* Bootstrap
* JavaScript
* Node.js
* CSS
* JSX/HTML

[Link to live deployment](https://chrisjones0517.github.io/clicky-game/)
