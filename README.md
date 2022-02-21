# Simple React Login Form with Validation

> A React app created using Create-React-App that consists of a login form that sends a login REST post request to this stubbed REST service: https://reqres.in. To increase the user experience of this project, I utilize local storage to persist user sessions between visits.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)

## General Information

- Login form with an email input and a password input.
- Login form validates that the email is a valid email input.
- The password field checks for at least five characters before you process the submit action.
- Includes unit test for the Auth form – testing both a valid login and an invalid login. (React Testing Library + Jest)
- Local storage used to storage user session data and persist logged in status.

## Technologies Used

![image](https://img.icons8.com/office/40/000000/react.png)
![image](https://img.icons8.com/color/48/000000/javascript--v1.png)
![image](https://img.icons8.com/color/48/000000/git.png)
![image](https://img.icons8.com/fluent/48/000000/github.png)

#### Other technologies used:

- React Testing Library
- Jest
- [validator v13](https://www.npmjs.com/package/validator)

---

## Installation

Fork or clone the repo and install node modules:

```bash
npm install
```

Run application in development environment:

```bash
npm start
```

Run React Testing Library Suite:

```bash
npm run test
```

Create local static build and run:

```bash
npm run build
```

```bash
npm run start
```

---

## Usage

- Form can be used to login or register a user.
- Since Reqres API does not accept new data for login or register, you will need to use a valid email. Below is a list of valid options.

1. george.bluth@reqres.in
2. janet.weaver@reqres.in
3. emma.wong@reqres.in

- Submit form to sign in and get access to user profile page.

## Project Status

Project is: _in progress_

## Room for Improvement

Below is a list of areas that I would like to improve, as well as, a list of to-do items for this project:

Room for improvement:

- Move state into Context API or Redux store to improve scalability.
- Add Redux middleware for managing local storage and store rehydration.

To do:

- Moving fetch from Auth.js into a utils file to handle calls to API in one place (Single Responsibility Principle)
- Create a modal and overlay for error notifications to replace current use of "alert" api (UI/UX).

## Contact

Created by [Chris DeCleene](https://chrisdecleene.github.io/) - feel free to contact me!

<!-- Optional -->
<!-- ## License -->
