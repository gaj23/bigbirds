# 🪶 BigBirds 🪶
__updated: 03/02/2020__

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

This project is for the new birders of the mid-west who are overwhelmed by field guides and options. If you're just starting, you're not worried about the difference between a sanderling and semipalmated sandpiper anyways.

This app provides a top 100 species list of your area. When you see one, check it off! Click to view details about these birds, too. You will see an accumulated list of viewed birds & when you checked them off. As you gain confidence in your identification stills, the more birds you'll check off and soon, you'll take flight into more advanced options such as eBird, Merlin, and the Audubon's Society's apps.

Check back later to see when the recent, notable sightings tab is ready for viewing.

Originally, this project was built for a project with Turing School of Software & Design. [See rubric here](https://frontend.turing.io/projects/module-3/niche-audience.html).

## Features

To view please:
- This app has yet to be deployed
- please come back at a later data

### Categories:
- [Home Page](#Home-Page)

- [Navigation Bar](#Navigation-Bar)

- [Error Message](#Error-Message)

- [Desktop Additions](#Desktop-View)

- [Cypress User Flow Testing](#Cypress-User-Flow-Testing)

__Under Construction__

#### Home Page

<details>
<summary>Example of Home Page</summary>
<br>
 <img width="283" alt="" src="">
</details>

#### Navigation Bar

<details>
<summary>Example of Nav Bar</summary>
<br>
 <img width="283" alt="" src="">
</details>

#### Error Message
If there's a failure to load data from the API or if there's been a user-side error, an error message will display to let the user know there's been a problem.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="error message" src="" />
</details>

#### Desktop Additions

<details>
<summary>Example of Desktop Experience</summary>
<br>
<img width="283" alt="desktop view" src="" />
</details>

#### Cypress User Flow Testing
Testing the UX & UI of our app.

<details>
<summary>Example of Cypress Experience</summary>
<br>
<img width="600" alt="testing user flow in cypress" src="">
</details>

## Technologies
- React
- Router
- Cypress for Testing
- CSS
- HTML
- Webpack
- WAVE for accessibility auditing
- Lighthouse for PWA & accessibility auditing

## Artist Credits
Thanks to the following artists from [Unsplash](https://unsplash.com/):
- @noahbuscher
- @brookelark
- @daniele_franchi
- @kellysikkema
- @igorrand
- @joannakosinska
- @raphaellovaski
- @pesce
- @laurachouette

## Future Iterations

More specifics about future work or refactoring can be found in this projects [GH issues](https://github.com/gaj23/face-it/issues).

## Contributions

Thank you <a href="https://github.com/lo-la-do-li">Lola Dolinsky</a>, <a href="https://github.com/GreyMatteOr" target="_blank">Matthew Lane</a>, <a href="https://github.com/yiranli624" target="_blank">Elle Li</a>, <a href="https://github.com/letakeane" target="_blank">Leta Keane</a>, and <a href="https://github.com/sertmer" target="_blank">Scott Ertmer</a> for their time and patience.

#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git clone git@github.com:gaj23/rancid.git <renameHere>`
- API documentation & endpoints are [here](https://makeup-api.herokuapp.com/)
  - Due to low rate limit of our chosen API you may choose to use the `Data` folder contained inside or our [server](https://github.com/kelsiebesingeryeh/face-it-server)
  - To use the local server in you CLI: `git clone git@github.com:kelsiebesingeryeh/face-it-server.git <renameHere>`
  - `cd <nameOfServer>`
  - `npm init --yes`
  - `npm i express --save`
  - `node server.js`
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
        <td> Kelsie Besinger Yeh <a href="https://github.com/kelsiebesingeryeh">GH</td>
        <td> Connie Hong <a href="https://github.com/conconartist">GH</td>
        <td> Gabrielle Joyce <a href="https://github.com/gaj23">GH</td>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/66699027?s=400&u=d42fb1a3e7238d769ea9a7b1cea57c17a6d53ed2&v=4" alt="Kelsie Besinger Yeh" width="150" height="auto" /></td>
    <td><img src="https://avatars.githubusercontent.com/u/67291333?s=400&u=d69914a734d609cf34dd7c65d185d9380b2a4d46&v=4" alt="Connie Hong" width="150" height="auto" /></td>
    <td><img src="https://avatars1.githubusercontent.com/u/68332132?s=460&u=a54dd9d3eede7c5ae0704846c510001c89dc88f7&v=4" alt="Gabrielle Joyce"
 width="150" height="auto" /></td>
</table>
