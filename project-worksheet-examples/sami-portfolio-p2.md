# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| Pseudocode / actual code | Complete
|Day 5| Initial Clickable Model  | Complete
|Day 6| MVP | 50%
|Day 7| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I am doing my portfolio for this project. In addition to featuring my web development work I would like to incorporate my art portfolio. I plan on having four main components; a landing page, a web dev portfolio page, a art portfolio page, and an about me page. I will plan on using an google doc API to pull in img url and description to populate the art portfolio.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- Sketch Wireframes: https://imgur.com/a/0lTkOmy
- Whiteboard Wireframes: https://imgur.com/a/DaQVyNv

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

- https://imgur.com/H5Rg4qI

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

- referenced in priority matrix: https://imgur.com/H5Rg4qI

#### MVP 

- Build out html and CSS for all pages.
- Break out pages into components.
- Hardcode art portfolio assets.
- Hardcode dev portfolio assets.
- Route between pages.
- Pull in art portfolio info from google sheet API.
- Break down subpages into smaller components.

#### PostMVP 

- Pull in web portfolio data from G-sheet API.
- Create components for all divs.
- Get form to trigger email.
- Create random pull for Artsy API to render on Artsy page.

## React Architectural Design

Define the the React components and the architectural design of your app.

App Architecture: https://imgur.com/gS8UOpn

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Main.js | This will render the landing page (statless) | 
| Card | This will render the cards within the landing page (statless)| 
| Skills | This will render the skills section within the landing page (statless) | 
| WebDev | This will render the web dev page (stateful)| 
| WD - Portfolio Sections | This will render the portfolio sections within the landing page (stateful)| 
| Web Dev Api | this object will hold the data for the portfolio sections | 
| Art.js | This will render the art portfolio page (stateful)| 
| Aside| This will render the aside section in the art portfolio page (stateful)| 
| Aside Item| This will render the details within the aside section of the art portfolio page (stateful)| 
| Gdoc Art API| This will hold the data for the aside section | 
| About | This will render the about me page | 
| Form | This will render the form within the about page (stateful)| 
| Blurb | This will render the blurb on the about page (statless)| 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML & CSS | H | 8hrs| 8hrs | 8hrs |
| Break out Components | H | 4hrs| 4hrs | 5hrs |
| HardCode Art Assets | H | 3hrs| 2hrs | 2hrs |
| HardCode Dev Assets | H | 2hrs| 2hrs | 2hrs |
| Router | H | 3hrs| 2hrs | 2hrs |
| Google Sheet Art API | H | 4hrs| 2hrs | 3hrs |
| Google Sheet Dev API | L | 2hrs| 1hrs | 1hrs  |
| Minor Components | L | 3hrs| 2hrs | 3hrs |
| Form email trigger | L | 1hrs|  1hrs| 1hrs |
| Masonry Layout ArtPortfolio | L | 2hrs| 2hrs | 2hrs |
| Total | H | 34hrs| 26hrs | 28hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

No known helper functions at this time

| Function | Description | 
| --- | :---: |  
| ComponentDidMount | This loads the art api on page load | 
| HandleChange | Updates current to filter through the artwork and save state as the one that's been clicked |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

Javascript
HTML 
CSS
React

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
 componentDidMount() {
    d3.csv("https://accesscontrolalloworiginall.herokuapp.com/https://raw.git.generalassemb.ly/samischonefeld/schonefeld_portfolio_p2/master/art_work_Sheet1.csv")
      .then(
        data => {
          console.log(data)
          this.setState(prevState => ({
            artwork: data
          }))
        }
      )
  }

  ---> using D3 to pull in a homemade csv, and set the state of artwork to be the api pull instead of using fetch


handleChange(id){
    let current = this.props.artwork.filter( d => d.id === id)
    this.setState(prevState =>({
      current: current[0]
    }))
  }

---> updating the state of current to be the clicked on API. Filtering through to only find the item with the matching id number. 
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
 Ended up using D3 instead of fetch to pull API.
 Did not use API for web dev work as there weren't really enough items. Will do so as a secondary task.
 Updated CSS layout on art portfolio page to masonry.

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 No major issues. 
 ERROR: Had some issuses getting art feature to render with clicked art portfolio item. 
 RESOLUTION:  Making sure things were correlating in the data between array and object.
 ERROR: Masonry layout for the thumbnail aside made the formatting of the feature image off, especially since there are differently sized images. Additionally the scroll no longer worked in the way it had before. 
 RESOLUTION: Created a fixed position for the feature image. So it is always in the middle of the page. Took away scroll functionality on the aside. 

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
