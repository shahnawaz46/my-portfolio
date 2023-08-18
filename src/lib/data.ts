// skills Icons from react-icons
import ReactjsIcon from "../assets/react-js-icon.svg";
import NextjsIcon from "../assets/nextjs-icon.svg";
import ReduxIcon from "../assets/redux-icon.svg";
import JavacriptIcon from "../assets/javascript-icon.svg";
import HtmlIcon from "../assets/html-icon.svg";
import CssIcon from "../assets/css-icon.svg";
import SassIcon from "../assets/sass-icon.svg";
import TailwindCssIcon from "../assets/tailwind-icon.svg";
import MaterialUiIcon from "../assets/material-ui-icon.svg";
import FramerMotionIcon from "../assets/framer-icon.svg";
import NodejsIcon from "../assets/nodejs-icon.svg";
import ExpressjsIcon from "../assets/express-icon.svg";
import DjangoIcon from "../assets/django-icon.svg";
import MongodbIcon from "../assets/mongodb-icon.svg";
import GitIcon from "../assets/git-icon.svg";
import GithubIcon from "../assets/github-icon.svg";

// Project Images
import ChatAppImage from "../assets/chat-app.png";
import EcommerceImage from "../assets/Ecommerce.png";
import PasswordSaverImage from "../assets/Password-Saver.png";
import MusicPlayerImage from "../assets/Music-player.png";

export const skills = [
  { id: 101, icon: ReactjsIcon.src, name: "React.js" },
  { id: 102, icon: NextjsIcon.src, name: "Next.js" },
  { id: 103, icon: ReduxIcon.src, name: "Redux" },
  { id: 104, icon: JavacriptIcon.src, name: "Javascript" },
  { id: 105, icon: HtmlIcon.src, name: "HTML5" },
  { id: 106, icon: CssIcon.src, name: "CSS3" },
  { id: 107, icon: SassIcon.src, name: "SASS" },
  { id: 108, icon: TailwindCssIcon.src, name: "Tailwind" },
  { id: 109, icon: MaterialUiIcon.src, name: "MUI" },
  { id: 110, icon: FramerMotionIcon.src, name: "Framer" },
  { id: 111, icon: NodejsIcon.src, name: "Node.js" },
  { id: 112, icon: ExpressjsIcon.src, name: "Express.js" },
  { id: 113, icon: DjangoIcon.src, name: "Django" },
  { id: 114, icon: MongodbIcon.src, name: "Mongodb" },
  { id: 115, icon: GitIcon.src, name: "Git" },
  { id: 116, icon: GithubIcon.src, name: "Github" },
] as const;

export const navbarItems = [
  { name: "Home", link: "" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skill" },
  { name: "Project", link: "#project" },
] as const;

export const projectDetails = [
  {
    name: "Global Talk",
    image: ChatAppImage.src,
    gitHubLink: "https://github.com/shahnawaz46/chatApp-frontend",
    websiteLink: "https://chatapp-socket.netlify.app/",
    stack: [
      { id: 1, name: "Mern Stack" },
      { id: 2, name: "Context Api" },
      { id: 3, name: "Socket.io" },
      { id: 4, name: "Cloudinary" },
      { id: 5, name: "PWA" },
    ],
    about:
      "This is the Global Talk chat web app where you can send a friend request to any one who have an account and chat with each other and lots of other functionality. In this chat web app, I am using Mern Stack and socket io (for realtime connection).",
  },
  {
    name: "Fuzicon",
    image: EcommerceImage.src,
    gitHubLink: "https://github.com/shahnawaz46/fuzicon-frontend-in-reactjs",
    websiteLink: "https://fuzicon-ecommerce.netlify.app/",
    stack: [
      { id: 1, name: "Mern Stack" },
      { id: 2, name: "Redux" },
      { id: 3, name: "Cloudinary" },
      { id: 4, name: "Framer" },
    ],
    about:
      "This is a Single Vendor E-commerce Website where you can Checkout, Search, Filter, Add to Cart, Update profile, Buy Products and etc. In this Website, I am using Mern Stack.",
  },
  {
    name: "Password Saver",
    image: PasswordSaverImage.src,
    gitHubLink: "https://github.com/shahnawaz46/password-saver-client",
    websiteLink: "https://manage-password.netlify.app/",
    stack: [
      { id: 1, name: "Mern Stack" },
      { id: 2, name: "SASS" },
    ],
    about:
      "In this project i am creating a website where you can store and get your passwords. Your password will be stored on mongodb and don't worry about your password because your password is completly encrypted.",
  },
  {
    name: "Music Player",
    image: MusicPlayerImage.src,
    gitHubLink: "https://github.com/shahnawaz46/music-player-frontend",
    websiteLink: "https://music-player-mern.netlify.app/",
    stack: [{ id: 1, name: "Mern Stack" }],
    about:
      "Simple Music Player app in Mern Stack and in this project i am using my own Api for songs information which is store in music-player-bakend repo.",
  },
] as const;
