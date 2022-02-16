# Simple React Login Form with Validation

> A React app created using Create-React-App that consists of a login form that sends a login REST post request to this stubbed REST service: https://reqres.in. To increase the user experience of this project, I have added a home page, profile page and authorization page using react-router v6. In addition, I utilize local storage to persist user sessions across reloads.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Status](#project-status)
- [Contact](#contact)

## General Information

- Login form with an email input and a password input.
- Login form validates that the email is a valid email input.
- The password field checks for at least five characters before you process the submit action.
- Includes unit test for the form – testing both a valid login and an invalid login. (React Testing Library + Jest)
- Local storage used to storage user session data and persist logged in status.
- React Router used to add pages and create seamless experience for users.

## Technologies Used

![image](https://img.icons8.com/office/40/000000/react.png)
![image](https://img.icons8.com/color/48/000000/javascript--v1.png)
![image](https://img.icons8.com/color/48/000000/git.png)
![image](https://img.icons8.com/fluent/48/000000/github.png)

#### Other technologies used:

- React Router v6
- React Testing Library
- Jest

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

---

## Usage

- Form can be used to login or register a user.
- Due to Reqres API not accepting new data for login or register, you will need to use a valid email. Below is a list of valid options.

1. george.bluth@reqres.in
2. janet.weaver@reqres.in
3. emma.wong@reqres.in

- Submit form to sign in and get access to user profile page.

## Project Status

Project is: _complete_

## Contact

Created by [Chris DeCleene](https://chrisdecleene.github.io/) - feel free to contact me!

<!-- Optional -->
<!-- ## License -->
