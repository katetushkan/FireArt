# Trivia Challenge Quiz App

This app is created to spend your time on useful things such as eductaion. Have a free minute? Just answer a few questions in this Quiz App and increase your erudition!

## Technologies & Tools

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

## Description 

2 versions: mobile and desltop are provided for this web-app. Both of them have full set of available functions. 


### The first screen. Welcome Page provide us: 
 - set of configurable parameters such as **Difficulty** and **Amount** of questions 
    > Input field for Amount is configured to numeric input, and Difficulty could be        changed by using Select

 - Button "PLAY" to start the game
    > There is no possibilities to start the game until all paremeters are provided.
    > Button is performed in 5 states: active, hover, focus, disabled and basic state
 - Loader appear and will be placed on the screen until the results from the api would be placed in Redux


### The second screen. Quiz Page provide us:
 - The topic, the question, a progress bar to see how many questions was already answered, the level - number of current question, and buttons with possible answers.
   > Answer's buttons are performed in 4 states: active, hover, focus and basic state
 - The :negative_squared_cross_mark: button let us come back to the Welcome Page
   > Button made with <a> tag because this action redirects us to another page

### The third screen. Final Page provide us:
 - User's score and relative rating
    > To avoid unnesseasry screen size increasing, it was made a decision to make a star           rating relative. Now it is showing us the percentage of successfully answered questions. 
 - List of questions with user's answers
 - The :negative_squared_cross_mark: button let us come back to the Welcome Page
    > Button made with <a> tag because this action redirects us to another page
 - Button "PLAY AGAIN" to restart this game with the same questions.
    > Button is performed in 4 states: active, hover, focus and basic state
    > Button made with <a> tag because this action redirects us to another page

## Design Details

 - It was decided to make dropdown with a <select> tag because as we have a mobile version means that  usage of <select> will call a native select for this case. This behavior would be more comfortable for mobile users. 

