# Lemonade Clicker Tycoon

Welcome to Lemonade Clicker Tycoon. A casual clicker game where you click your way to riches by hiring employees and buying upgrades!

## Getting Started

Go here to play: [Lemonade Clicker Tycoon!](https://lemonade-clicker-tycoon.netlify.com/)

Server [repo](https://github.com/darrenrjones/Lemonade-Clicker-Server)

### Screenshots

![Responsive Mockup](https://image.ibb.co/c47KGK/smartmockups.jpg "responsive mockup")

Here is the play screen. You can click anywhere in the orange section to sell lemonade.
![playscreen](https://image.ibb.co/iyHDAe/playscreen.png "play screen")

These are the modals that show up when you reach checkpoint of being able to purchase your first employee, truck or plane. A similar one appears upon landing at the game to welcome you and give instruction. 
![notice](https://image.ibb.co/bFNDAe/modal_Screenshot.png "onboarding modal")

This is the menu screen where you can buy employees, trucks or planes. 
![menu](https://image.ibb.co/cYxrwK/menu.png "menu")

The upgrade screen allows you to purchase upgrades to increase the amount gained for each sold lemonade.
![upgrades](https://image.ibb.co/kyUobK/upgrades.png "upgrades")

The login screen uses react-modal and will give proper warnings upon local and backend checks.
![login screen](https://image.ibb.co/d99X3z/login.png "login")


## Built With

* **React**
* **React-Redux**
* **Redux-Form**
* **React-Modal**
* **React-Spinkit**
* **create-react-app** - deployed via Netlify
* **Enzyme** 
* **Node** - deployed via Heroku
* **Express**
* **Passport**
* **Bcrypt**
* **Mongoose**
* **Chai** 
* **Mocha** 
* **Mongo** - hosted by Mlab

## Where key parts live in codebase:

All components, actions and reducers are in [**src**](https://github.com/darrenrjones/Lemonade-Clicker-Tycoon/tree/master/src) folder

```
project
│   README.md
│   package.json         
│   
└───src
│   │   index.js
│   │   store.js
│   │   
│   └───components
│       │   header
│       │   modal
│       │   playScreen
│       │
│       actions
│       │   index.js
│       │
│       reducers
│       │   index.js
│       │   mainReducer.js
│       │
└───public          
```

## Authors

**Darren Jones** - [github](https://github.com/darrenrjones)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



