# Creative Spaces
(Developer: Ulrike Riemenschneider)

![Mockup image](docs/iamresponsive.png)

[Live webpage](https://uriem.github.io/geography-game/)

## Table of Content

1. [Introduction](#introduction)
2. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
3. [User Experience](#user-experience)
    1. [Strategy](#strategy)
        * [Target Audience](#target-audience)
        * [User Requirements & Expectations](#user-requirements-and-expectations)
        * [User Stories](#user-stories)
    2. [Scope](#scope)
        * [Initial Stage](#intial-stage)
        * [Future Additions](#future-additions)
    3. [Structure](#structure)
        * [Wireframes](#wireframes)
    4. [Skeleton](#skeleton)
        * [Header](#header)
        * [Footer](#footer)
        * [Services offered](#services-offered)
        * [Calls to action](#call-to-action)
        * [About page](#about-page)
        * [Contact page](#contact-page)
        * [Gallery and Images](#gallery-page-and-images)
        * [Future Additions](#future-additions)
    5. [Surface](#surface)
        * [Color Scheme](#color-scheme)
        * [Font](#font)
4. [Technologies Used](#technologies-used)
    1. [Language](#languages)
    2. [Frameworks & Tools](#frameworks--tools)
5. [Testing and Validation](#testing-and-validation)
    1. [HTML](#html-validation)
    2. [CSS](#css-validation)
    3. [Accessibility & Performance](#accessibility--performance)
    4. [Browser Compatability](#browser-compatability)
    5. [Testing User Stories](#testing-user-stories)
6. [Bugs & Fixes](#bugs--fixes)
7. [Deployment & Development](#deployment--development)
8. [Credits](#credits)


## Introduction

The Geography Game is a multiple choice online quiz testing the users knowledge on the capital cities of the world.

## Project Goals

### User Goals
- The site's user wants to play an online quiz to test their geographic knowledge about capital cities of the world.

### Site Owner Goals
- The site owner's goal is to provided an entertaining and appropriately challenging quiz to the online user.

## User Experience

### Strategy

#### Target Audience
- Users with an interest in geography.
- Users looking for entertaining content online.


#### User Requirements and Expectations
- Simple and intuitive navigation system.
- Links work as expected.
- Immediate feedback on progress.
- Visually appealing responsive design.
- Accessibility.

#### User Stories

##### First-time User
As a first time user, I want to ...
1. ... easily navigate thought the quiz.
2. ... get clear feedback on my score.
3. ... easily return to the beginning of the game and play again.


##### Returning Users
As a returning user, I want to ...
1. ... try a higher-level game.
2. ... see my previous scores.
3. ... find out more about the game developer.

##### Site owner
As the site owner, I want users to ...
1. ... interact with the game, stay engaged and enjoy the challenge.
2. ... return to the game in the future.

### Scope

#### Intial Stage

At the initial stage the site will include a welcome page that gives the user a choice of four levels of difficulty of the game. Then the game will start and run though 10 questions at the chosen level. A final end of game page will then be shown where the user can opt to save the results and play the game again.

#### Future Additions

 

### Structure

#### Wireframes

The structure of the initial site will include three pages:

1. **Welcome Page** with four difficulty levels of the game to choose from.

![Welcome]()


2. **Game Page** which runs through ten questions at the users chosen level of difficulty. It keeps track of the score in a score area below the answers.

![Game]()

3. **End of Game Page** which displays the users final score and level at which the game was played with a matching message. It gives and option to play the game again or enter a username and save the score and level of play.

![End of Game]()

4. **Score Tally Page** displays the users past game scores including the level at which the game was played.

![Gallery]()

5. **404 Page** - a simple 404 Error page is also included.

### Skeleton

As described in the previous section with the aid of wireframes, the online game site includes four pages, which all have a heading, a central display area and a footer. The welcome page allows the user to choose the level at which they would like to play the game, upon choosing a level the game loads and runs, adding to the score of correct or wrong answers as the answers are chosen. At the end of the game a page displaying the final score is displayed.

#### Welcome page
<details>
<summary>Screenshot of Welcome page</summary>
<img src="docs/welcomepage.png" width="700">
</details>

- Features four clickable elements containing the choices of levels the user can opt for: Easy, Intermediate, Advanced, and Expert.

#### Quiz page
<details>
<summary>Screenshot of Quiz page</summary>
<img src="docs/quizpage.png" width="700">
</details>

- Features the question displayed at the top of the central content area.
- Four clickable text elements contain the multiple choice answers.
- A score area below the answers updates the correct and wrong answer tally every time the user chooses and answer.

#### End of Game page
<details>
<summary>Screenshot of End of Game </summary>
<img src="docs/endgamepage.png" width="700">
</details>

- Features the score and level at which the game was played.
- An image in the center of the page makes the display more eye catching and appealing.
- Below the image a button allows the user to return to the welcome page and play again.

#### Footer
<details>
<summary>Screenshot of Footer</summary>
<img src="docs/footer.png" width="500">
</details>

- Featured on all pages (and the 404 page).
- Includes links to the LinkedIn and GitHub page of the developer.
- All links open in a new window.


#### Future Additions



### Surface

The surface design of the website is aimed to convey an adventurous and global feel, while remaining uncluttered, and maintaining easy of readability. The backgroundimage of a world map was choosen with this aim in mind and the color schemes was choosen to match the image.

#### Color Scheme

The color scheme is a balance of vibrant colors that draw attention and convey artistic energy. A vibrant purple color was chosen in conjunction with the hero image and a desire for them to blend together. It was used to frame all important information on the site and all clickable buttons are styled with this color. The remaining features on the site and font are a balance of a dark grey or black, as well as white or off white in order to maintain contrast and readability.

![Color Scheme](docs/colorscheme.png)

#### Font

Roboto Slab is the font used for high level headings in the game, the clickable text of level choices and answers as well as the score counter ar in a matching Lato font. 

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Git
- GitHub
- Gitpod
- Balsamiq
- Google Fonts
- Font Awesome
- Coolors.co

### Helpful sites

Several sites came in handy while developing the code to help with problem solving:

- W3 Schools
- stackoverflow.com
- mdn web docs (https://developer.mozilla.org/)

## Testing and Validation

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. All pages passed with no errors or warnings.

<details>
<summary>Welcome and Quiz Page</summary>
<img src="documentation/indexhtmlval.png" width="700">
</details>

<details>
<summary>End of Game Page</summary>
<img src="documentation/abouthtmlval.png" width="700">
</details>


### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. The code passed with no errors or warnings.

<details>
<summary>CSS Validation Screenshot</summary>
<img src="documentation/cssvalidation.png" width="700">
</details>

### JavaScript Validation

The JSHint (https://jshint.com/) was used to validate the JavaScript files.

<details>
<summary>JS Validation Screenshot</summary>
<img src="documentation/cssvalidation.png" width="700">
</details>


### Accessibility & Performance

The Lighthouse feature on Google Devtools was used to assess accessibility and performance. All pages score high on accessibility. The gallery page scores lowest on performance due to the large number of images.

<details>
<summary>Welcome and Quiz Page</summary>
<img src="documentation/indexlh.png" width="700">
</details>

<details>
<summary>End of Game Page</summary>
<img src="documentation/aboutlh.png" width="700">
</details>


#### Outstanding Issues



### Browser Compatability

The websites compatability was tested on the following browsers:

* Google Chrome
* Mozilla Waterfox
* Microsoft Edge
* Safari

### Testing User Stories


As the site owner, I want users to ...
1. ... interact with the game, stay engaged and enjoy the challenge.
2. ... return to the game in the future.


1. As a first time user, I want to easily navigate thought the quiz.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome Page | Choose the level at which you want to play | The game starts | Works as expected |


2. As a first time user, I want to get clear feedback on my score.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Quiz page | Click quiz answers | Wrong and correct answer scores are updated and displayed below the answers | Works as expected |

3. As a first time user, I want to easily return to the beginning of the game and play again.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| End of Game page | Click on the Play Again button | Links back to the welcome page and the game starts over | Works as expected |


4. As a returning user, I want to try a higher-level game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome page | Choose level of game at which to play | Game will play at chosen level | Works as expected |

4. As a returning user, I want to see my previous scores.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| End of Game Page | Enter username, click submit, and the score is saved | A page displays with saved scores | Not yet implemented |

5. As a returning user, find out more about the game developer.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer-social media links  | On any page scroll down to the footer | Find social media links | Works as expected | 


6. As the site owner, I want users to interact with the game, stay engaged and enjoy the challenge.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome Page | Choose from four challenge levels | Game commences with different questions | Works as expected |
| End of Game Page | Choose to play again | Game starts over | Works as expected |

7. As the site owner, I want users to return to the game in the future.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|   |  |  |  | 

#### Room for improvement on User Stories

While all the minimum criteria for fullfilling the user stories are met, there are several items that could be improved upon:

1. Links to share game on social media.
2. Implement score saving mechanism.

## Bugs & Fixes

| **Bug** | **Fix** |
| ----------- | ----------- |
| Bug | Fix |

## Deployment & Development

The website was deployed using GitHub Pages by following these steps:

1. In the GitHub respository navigate to the Settings tab.
2. Select Pages from the menu on the left-hand side of the page.
3. For the source select Branch: 'main' and then select: 'save'.
4. After the webpage refreshes automatically a ribbon at the top will displays the following message: "Your site is live at https://uriem.github.io/geography-game/"

The website repository can be forked by the following steps:

1. Go to the GitHub repository.
2. Click on the Fork button in the upper right hand corner.

The repository can be cloned by the following steps:

1. Got to the GitHub repository.
2. Locade the Code button above the list of files and click on it.
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard.
4. Open Git Bash.
5. Change the current working directory to the one where you want the cloned directory.
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Press Enter to create your local clone.

## Credits

### Media

Images not referenced below are owned by the developer.

Images:
* Background image by <a href="https://unsplash.com/@drwmrk">Andrew Stutesman</a> on <a href="https://unsplash.com/photos/l68Z6eF2peA">Unsplash</a>
* End of Game page image by <a href="https://unsplash.com/@dinoreichmuth">Dino Reichmuth</a>  on <a href="https://unsplash.com/photos/A5rCN8626Ck">Unsplash</a>

### Code

Resources and inspiration came from a few sources:

- Movie Quotes Quiz by Jose Maciel https://zemaciel.github.io/project-02/index.html - is where I got the idea for my quiz. I enjoyed much of the functionality and features of his game and took inspriration from it as I was developing my own.
- Code by Marek https://www.codehim.com/vanilla-javascript/javascript-multiple-choice-questions-code/ helped me to set up the core functionality of the quiz.
- https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/

### Acknowledgements

I would like to thank:
- My mentor Brian O'Hare for his feedback, advice, guidance and support.
- Cohort fascilitator Paul Thomas O'Rirodan, for his general advice on the management of the course and pointing us to a plethora of resources to help with the projects.
- My husband, Matt, for his encouragement and support along the way.