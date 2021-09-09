import ReactWApp from "../../pictures/screenshot_react_weather_app.png";
import ShoppingCart from "../../pictures/front-end-shopping-cart.jpg";
import idcom from "../../pictures/idcommerce.jpg";

export const projectData = [
  {
    title: "idcom",
    imgUrl: idcom,
    description: (
      <p>
        iDCom is a frontend part of a MERN Stack eCommerce website. It includes numerous functions
        such as search, sign-in, register, and Google Oauth 2.0. <br/>
        <b>
          Note: the app will take some time to run the first time because I do not have paid dyno on Heroku for the server.
        </b>
      </p>
    ),
    siteLink: `https://idcom.netlify.app/`,
    codeLink: `https://github.com/IsmaelDembele/iDCom`,
  },
  {
    title: "IDCOM-SERVER",
    imgUrl: idcom,
    description: (
      <p>
        iDCom-server is the back-end part of a MERN Stack website. It includes functionality such as
        bcrypt hashing, connection to a MongoDB database, Google Oauth 2.0, and secure sign-in with
        Cookies and Session. You can read the project readme file for more information.
      </p>
    ),
    codeLink: `https://github.com/IsmaelDembele/iDCom-server`,
    siteLink: `https://idcom-server.herokuapp.com/`,
  },
  {
    title: "React Weather App",
    imgUrl: ReactWApp,
    description: (
      <p>
        This project is based on &nbsp;
        <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
          "OpenWeatherMap"
        </a>
        API. It gets the information of a city and displays it on the screen. It is built with
        Reactjs and SASS.
      </p>
    ),
    siteLink: `https://ismaelweatherapp.netlify.app/`,
    codeLink: `https://github.com/IsmaelDembele/react-weather-app`,
  },
  {
    title: "Shopping Cart",
    imgUrl: ShoppingCart,
    description: <p>This project is built with React and Sass.</p>,
    siteLink: `https://frontend-shopping-cart.netlify.app/`,
    codeLink: `https://github.com/IsmaelDembele/front-end-shopping-cart`,
  },
];
