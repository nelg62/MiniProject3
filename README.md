<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">
  <a href="https://github.com/nelg62/MiniProject3">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Mini Project 3 Blog App</h3>

  <p align="center">
   This is the third project I created as a group assignment as part of my course at the Institute of Data (IOD). After gaining a strong foundation in databases, we were tasked with working collaboratively to build an application of our choosing that integrates our knowledge of frontend, backend, and databases. We explored both MongoDB and MySQL and ultimately decided to use MySQL for this project.

This project is a Blog application built using React and Material-UI (MUI) for the frontend, and Express.js for the backend. The application allows users to create, view, update, and delete blog posts, as well as add and delete comments on posts. Users can also like and unlike posts to engage with the content. This app demonstrates a full CRUD (Create, Read, Update, Delete) functionality for posts and comments, with a responsive design currently implemented using MUI, and future plans to migrate to Tailwind CSS for enhanced styling and customization.
<br />
<a href="https://github.com/nelg62/MiniProject3"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://github.com/nelg62/MiniProject3">View Demo</a>
·
<a href="https://github.com/nelg62/MiniProject3/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
·
<a href="https://github.com/nelg62/MiniProject3/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project showcases a full CRUD (Create, Read, Update, Delete) application for blog posts and comments. Users can manage blog posts, including creating, editing, and deleting them. Additionally, users can like or unlike posts to engage with the content. Users can also add comments to posts and delete them when needed. The frontend is currently styled using MUI components for a clean and responsive design, and the backend is developed using Node.js with Express.js and Sequelize to interact with a MySQL database hosted on Render. The frontend is hosted on Netlify.

<h4>Features</h4>
<ul>
<li>Full CRUD functionality for blog posts and comments.</li>
<li>Ability to like and unlike posts.</li>
<li>Commenting system: add and delete comments on blog posts.</li>
<li>Custom theming using the Context API.</li>
<li>Responsive design with Material-UI (future migration to Tailwind CSS).</li>
</ul>

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Frontend:

- [![React][React.js]][React-url]
- [![React Router][ReactRouter-shield]][ReactRouter-url]
- [![MUI][mui-shield]][mui-url]
- [![Axios][Axios-shield]][Axios-url]

Backend:

- [![Node.js][NodeJs-shield]][NodeJs-url]

- [![Express.js][ExpressJs-shield]][ExpressJs-url]
- [![Sequelize][Sequelize-shield]][Sequelize-url]
- [![MySQL][MySQL-shield]][MySQL-url]

Deployment Platforms:
Frontend:

- [![Netlify][Netlify-shield]][Netlify-url]

Backend:

- [![Render][Render-shield]][Render-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Node.js and npm installed on your machine.
MySQL database setup.
Git installed on your machine.
Docker Desktop

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nelg62/MiniProject3.git
   ```

Container Setup

2. Navigate to backend folder

   ```sh
   cd Backend
   ```

3. Open Docker

4. Create Docker container in terminal
   ```sh
   docker-compose -f .\compose.mysql.yml up
   ```

Backend Setup

5. navigate to backend folder

   ```sh
   cd Backend
   ```

6. Install NPM packages
   ```sh
   npm install
   ```
7. Run Backend
   ```sh
   npm start
   ```

Frountend Setup

8. navigate to frountend folder
   ```sh
   cd Frontend
   cd MiniProject3FrontEnd
   ```
9. Install NPM packages
   ```sh
   npm install
   ```
10. Run frountend
    ```sh
    npm run dev
    ```
11. connect to frount end
    ```sh
    http://localhost:5173/
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Coming Soon...

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add froundend to cloud (Netlify)
- [x] Add Backend to cloud (Render)
- [ ] update ui and make with tailwidn to make more responsive
- [ ] add login feature
- [ ] fix liking comments
- [ ] add images
- [ ] real time chat app
- [ ] support app feature

See the [open issues](https://github.com/nelg62/MiniProject3/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/nelg62/MiniProject3/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nelg62/MiniProject3" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information. -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Glen Harding - glen.harding.nz@gmail.com

Project Link: [https://github.com/nelg62/MiniProject3](https://github.com/nelg62/MiniProject3)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nelg62/MiniProject3.svg?style=for-the-badge
[contributors-url]: https://github.com/nelg62/MiniProject3/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nelg62/MiniProject3.svg?style=for-the-badge
[forks-url]: https://github.com/nelg62/MiniProject3/network/members
[stars-shield]: https://img.shields.io/github/stars/nelg62/MiniProject3.svg?style=for-the-badge
[stars-url]: https://github.com/nelg62/MiniProject3/stargazers
[issues-shield]: https://img.shields.io/github/issues/nelg62/MiniProject3.svg?style=for-the-badge
[issues-url]: https://github.com/nelg62/MiniProject3/issues
[license-shield]: https://img.shields.io/github/license/nelg62/MiniProject3.svg?style=for-the-badge
[license-url]: https://github.com/nelg62/MiniProject3/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/glen-harding-5a1317114
[product-screenshot]: Frontend/MiniProject3FrontEnd/src/assets/MiniProject3mainpage.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[mui-url]: https://mui.com/
[mui-shield]: https://img.shields.io/badge/mui-06B6D4?style=for-the-badge&logo=mui&logoColor=white
[ExpressJs-url]: https://expressjs.com/
[ExpressJs-shield]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[NodeJs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[NodeJs-url]: https://nodejs.org/
[ReactRouter-shield]: https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white
[ReactRouter-url]: https://reactrouter.com/
[Axios-shield]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/
[Sequelize-shield]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org/
[MySQL-shield]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
[Netlify-shield]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[Netlify-url]: https://www.netlify.com/
[Render-shield]: https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white
[Render-url]: https://render.com/
