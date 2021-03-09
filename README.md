# 🪶 BigBirds 🪶
__updated: 03/08/2020__

---
#### Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Techologies)
- [Artist Credits](#Artist-Credits)
- [Contributions](#Contributions)
- [Authors](#Authors)
---
## Introduction

<img width="283" alt="BigBirds User Flow" src="https://media.giphy.com/media/k62QMcVWi3nX3vP9y1/giphy.gif">

This project is for the new birders of Colorado who are overwhelmed by field guides and options. If you're just starting, you're not worried about the difference between a sanderling and semipalmated sandpiper anyways.

This app provides a top 30 species list of your area. When you see one, check it off! Click to view details about these birds, too. You will see an accumulated list of viewed birds & when you checked them off. As you gain confidence in your identification stills, the more birds you'll check off and soon, you'll take flight into more advanced options such as [eBird](https://ebird.org/home), [Merlin](https://merlin.allaboutbirds.org/), and the [Audubon's Society's](https://www.audubon.org/) apps.

Originally, this project was built for a project with Turing School of Software & Design. [See rubric here](https://frontend.turing.io/projects/module-3/niche-audience.html).

## Features

To view please:
- This app has yet to be deployed
- please come back at a later date

### Categories:
- [Home Page](#Home-Page)

- [Top 30 List](#Top-30-List)

- [Seen List](#Seen-List)

- [Updating Lists](#Updating-Lists)

- [Viewing Details](#Viewing-Details)

- [Cypress User Flow Testing](#Cypress-User-Flow-Testing)

#### Home Page

<details>
<summary>Example of Home Page</summary>
<br>
 <img width="283" alt="home page with guess that bird" src="https://user-images.githubusercontent.com/68332132/110414660-e6f01000-8055-11eb-8eba-de63358b64a7.png">
</details>

#### Top 30 List

<details>
<summary>Example of Top 30</summary>
<br>
 <img width="283" alt="top 30 list" src="https://user-images.githubusercontent.com/68332132/110414529-9bd5fd00-8055-11eb-8c19-972c3cd11189.png">
</details>

#### Seen List

<details>
<summary>Example of Seen List</summary>
<br>
 <img width="283" alt="seen list" src="https://user-images.githubusercontent.com/68332132/110414563-adb7a000-8055-11eb-9ce7-f37c1718b064.png">
</details>

#### Updating Lists

<details>
<summary>Example of Updating Lists</summary>
<br>
 <img width="283" alt="clicking a newly seen bird and adding it to my list" src="">
</details>

#### Viewing Details

<details>
<summary>Example of Top 30</summary>
<br>
 <img width="283" alt="details about a canvasback" src="https://user-images.githubusercontent.com/68332132/110414589-be681600-8055-11eb-8da5-919fb143dc9e.png">
</details>

#### Cypress User Flow Testing
Testing the UX & UI of our app.

<details>
<summary>Example of Cypress Experience</summary>
<br>
<img width="600" alt="testing user flow in cypress" src="https://media.giphy.com/media/R0BA734oMWtAc8haon/giphy.gif">
</details>

## Technologies
- React
- Router
- Cypress for Testing
- CSS
- HTML
- Webpack
- WAVE for accessibility auditing
- Lighthouse accessibility auditing

## Artist Credits
Thanks to [allaboutbirds.org](allaboutbirds.org) for their photo credits.

## Future Iterations

I would like to ensure a proper link is created for the "Guess this Bird". I feel as if it would improve user experience if they could click this bird and view the details.

Additional look at SAD path testing and stubbing of the API calls should be applied.

The biggest refactoring would be surrounding creating an additional backend for user data to be posted rather than relying on localStorage as I temporarily have.

More specifics about future work or refactoring can be found in this projects [GH issues](https://github.com/gaj23/bigbirds/issues).

## Contributions

Thank you <a href="https://github.com/srslie">Alice Ruppert</a>, <a href="https://github.com/kristenmb" target="_blank">Kristen Bair</a>, <a href="https://github.com/letakeane" target="_blank">Leta Keane</a>, and <a href="https://github.com/sertmer" target="_blank">Scott Ertmer</a> for their time and patience.

#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git clone git@github.com:gaj23/bigbirds.git <renameHere>`
- API documentation & endpoints are [here](https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest#4e020bc2-fc67-4fb6-a926-570cedefcc34)
  - **You Will Need A Key**
- from there please create a new branch following this pattern: `git checkout -b initials/feature-fix/focus-of-branch`
- cd into your local copy and run `npm install`
- Use Cypress for testing
 - check that the following key-value pair in `scripts` is in your `package.json`
 - `"cypress": "cypress open"`
 - if not please download Cypress with `npm i -D cypress` and add the above to `scripts`.
- contribute as you'd like and push up your work for review
Thank you.

## Author
<table>
    <tr>
        <td> Gabrielle Joyce <a href="https://github.com/gaj23">GH</td>
    </tr>
    <td><img src="https://avatars1.githubusercontent.com/u/68332132?s=460&u=a54dd9d3eede7c5ae0704846c510001c89dc88f7&v=4" alt="Gabrielle Joyce"
 width="150" height="auto" /></td>
</table>
