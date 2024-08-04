// skills Icons from react-icons
import ReactjsIcon from '../assets/react-js-icon.svg';
import NextjsIcon from '../assets/nextjs-icon.svg';
import ReduxIcon from '../assets/redux-icon.svg';
import JavacriptIcon from '../assets/javascript-icon.svg';
import HtmlIcon from '../assets/html-icon.svg';
import CssIcon from '../assets/css-icon.svg';
import SassIcon from '../assets/sass-icon.svg';
import TailwindCssIcon from '../assets/tailwind-icon.svg';
import MaterialUiIcon from '../assets/material-ui-icon.svg';
import FramerMotionIcon from '../assets/framer-icon.svg';
import NodejsIcon from '../assets/nodejs-icon.svg';
import ExpressjsIcon from '../assets/express-icon.svg';
import DjangoIcon from '../assets/django-icon.svg';
import MongodbIcon from '../assets/mongodb-icon.svg';
import GitIcon from '../assets/git-icon.svg';
import GithubIcon from '../assets/github-icon.svg';

// Project Images
import ChatAppImage from '../assets/chat-app.png';
import EcommerceImage from '../assets/Ecommerce.png';
import PasswordManager from '../assets/Password-manager.png';
import MusicPlayerImage from '../assets/Music-player.png';

export const skills = [
  { id: 101, icon: ReactjsIcon.src, name: 'React.js' },
  { id: 102, icon: NextjsIcon.src, name: 'Next.js' },
  { id: 103, icon: ReduxIcon.src, name: 'Redux' },
  { id: 104, icon: JavacriptIcon.src, name: 'Javascript' },
  { id: 105, icon: ReactjsIcon.src, name: 'React Native' },
  { id: 106, icon: HtmlIcon.src, name: 'HTML5' },
  { id: 107, icon: CssIcon.src, name: 'CSS3' },
  { id: 108, icon: SassIcon.src, name: 'SASS' },
  { id: 109, icon: TailwindCssIcon.src, name: 'Tailwind' },
  { id: 110, icon: MaterialUiIcon.src, name: 'MUI' },
  { id: 111, icon: FramerMotionIcon.src, name: 'Framer' },
  { id: 112, icon: NodejsIcon.src, name: 'Node.js' },
  { id: 113, icon: ExpressjsIcon.src, name: 'Express.js' },
  { id: 114, icon: DjangoIcon.src, name: 'Django' },
  { id: 115, icon: MongodbIcon.src, name: 'Mongodb' },
  { id: 116, icon: GitIcon.src, name: 'Git' },
  { id: 117, icon: GithubIcon.src, name: 'Github' },
] as const;

export const navbarItems = [
  { name: 'Home', link: '' },
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skill' },
  // { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#project' },
] as const;

export const projectDetails = [
  {
    name: 'Global Talk',
    image: ChatAppImage.src,
    gitHubLink: 'https://github.com/shahnawaz46/chatApp-frontend',
    websiteLink: 'https://chatapp-socket.netlify.app/',
    stack: [
      { id: 1, name: 'Mern Stack' },
      { id: 2, name: 'Context Api' },
      { id: 3, name: 'Socket.io' },
      { id: 4, name: 'Cloudinary' },
      { id: 5, name: 'PWA' },
    ],
    about:
      'In the Global Talk chat web app, users can send friend requests to individuals who have accounts, engage in real-time conversations, update their profiles, statuses, and utilize a variety of additional functionalities. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time connections.',
  },
  {
    name: 'ShopNow',
    image: EcommerceImage.src,
    gitHubLink: 'https://github.com/shahnawaz46/shop-now-frontend-in-reactjs',
    websiteLink: 'https://shop-now-reactjs.netlify.app/',
    stack: [
      { id: 1, name: 'Mern Stack' },
      { id: 2, name: 'Redux' },
      { id: 3, name: 'Cloudinary' },
      { id: 4, name: 'Framer' },
      { id: 5, name: 'Razor' },
    ],
    about:
      'Single vendor Ecommerce website using modern tools (React.js, Node.js, MongoDB, Express.js). This user-friendly website allows customers to browse products, filter and search for specific items, and seamlessly manage their shopping carts. Secure checkout functionalities ensure a smooth and trustworthy purchasing experience.',
  },
  {
    name: 'Gaurd Vault',
    image: PasswordManager.src,
    websiteLink: null,
    gitHubLink: 'https://github.com/shahnawaz46/password-manager-app',
    stack: [
      { id: 1, name: 'React Native' },
      { id: 2, name: 'Crypto-js' },
      { id: 3, name: 'Node js' },
      { id: 4, name: 'Express js' },
      { id: 5, name: 'Mongodb' },
      { id: 6, name: 'Cloudinary' },
      { id: 7, name: 'Joi' },
      { id: 8, name: 'Formik' },
      { id: 9, name: 'Yup' },
    ],
    about:
      "I built this password manager(GuardVault) app in React Native for my personal use. If you're looking for a simple and secure way to manage your passwords, you might be interested in trying it out! (Let me know if you'd like more information).",
  },
  {
    name: 'Music Player',
    image: MusicPlayerImage.src,
    gitHubLink: 'https://github.com/shahnawaz46/music-player-frontend',
    websiteLink: 'https://music-player-mern.netlify.app/',
    stack: [{ id: 1, name: 'Mern Stack' }],
    about:
      "In this project, I'm creating a basic Music Player app using the MERN (MongoDB, Express.js, React.js, Node.js) stack. I'm utilizing my own API to manage song information, stored in the 'music-player-backend' repository.",
  },
] as const;

export const experienceDetails = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    companyName: 'Nicheby Pvt Ltd',
    date: 'December 2022 - May 2023',
    location: 'Delhi, India',
    tasks: [
      {
        id: 11,
        description:
          'Assisted in the development of Next.js-based projects, gaining hands-on experience in building dynamic and interactive web applications.',
      },
      {
        id: 12,
        description:
          'Contributed to the optimization of web performance through efficient use of React components, state management, and server-side rendering techniques',
      },
    ],
  },
  {
    id: 2,
    title: 'Frontend Developer Intern',
    companyName: 'Nicheby Pvt Ltd',
    date: 'December 2022 - May 2023',
    location: 'Delhi, India',
    tasks: [
      {
        id: 21,
        description:
          'Assisted in the development of Next.js-based projects, gaining hands-on experience in building dynamic and interactive web applications.',
      },
      {
        id: 22,
        description:
          'Contributed to the optimization of web performance through efficient use of React components, state management, and server-side rendering techniques',
      },
    ],
  },
] as const;
