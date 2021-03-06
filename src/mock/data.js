import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sundaram Dubey', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sundaram Dubey',
  subtitle: '',
  cta: 'More..',
};

// ABOUT DATA
export const aboutData = {
  img: 'sundaram.jpg',
  paragraphOne: "I am a pre-final year undergraduate student at Harcourt Butler Technical University in the Computer Science and Engineering Branch. I have mentored two organizations in Google Code-In this year - @FOSSASIA, @Tensorflow.Besides this, I also mentor IIT Kharagpur Winter of Code. I was selected as a “finalist winner” in this year's fossasia’s open-source competition `Codeheat` and actively contributing to open-source organizations.Also, I have three internships in Web Development",
  paragraphTwo: 'I work on the Ubuntu operating system. Visual Studio Code is my primary text-editor and Sublime text otherwise. My primary languages are Python and javascript. I am efficient and most comfortable in working with React + Django. This is mainly in my Domain. Besides this, I am good at Flask + Ember, UI/UX, RestAPI, Testing, Research and exploring new things. I have good experience in UI as I have worked on the fossasia project Open Event in this field for 6 months.',
  paragraphThree: 'Good At Data Structure and Algorithms and Working on Natural Language Processing.',
  resume: 'https://docs.google.com/document/d/1QheGvmvWwf40qcWWPoFSxybnQ5zI_59NtUGghKjjeMo/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'scholar.jpg',
    title: 'Google-Scholar',
    info: 'Google scholar is a metric computation system for researchers with a Google Scholar profile. Google Scholar provides researchers with stats such as the number of publications, citations, h-index and i10 index. But, these metrics are flawed. my Google Scholar extracts some basic information form Google Scholar and computes better metrics, and displays them on another website. So, researchers can now see better, effective metrics with a single click.',
    info2: '',
    url:'https://friendly-poincare-d05cd9.netlify.app',
    repo: 'https://github.com/maze-runnar/Google-Scholar', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gitedge.png',
    title: 'GitEdge',
    info: 'A React native mobile application. Using github api V3. Currently the app is fetching User persional information as name , profile picture, email, following , followers , repositories and contribution details. In future version I am planning to use a github calender contribution chart. The app also have the dark and light mode feature.',
    info2: '',
    url: 'https://expo.io/@mazerunner/redemption',
    repo: 'https://github.com/maze-runnar/GitEdge', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'blogs.png',
    title: 'RedBlogs',
    info: 'A basic Blog platform made using ReactJs with Django API for backend. The website has authentication feature, responsive UI, and Dark-mode/Light-mode implementation.',
    info2: '',
    url: '',
    repo: 'https://github.com/maze-runnar/stranger-things', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'modal.png',
    title: 'Social-Share-Modal',
    info: 'This is a reusable modal component for social sharing and currently under development for "archive.org" website. This project uses lit-element for making components. Initially there was a doubt in project feasibility so I tried to initialize it by myself and try if the solution is feasible or not. I used these polymers to solve the problem.',
    info2: '',
    url: '',
    repo: 'https://github.com/maze-runnar/modal-component', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'alca.png',
    title: 'Through the Songs',
    info: 'Alcatraz is an application that lets you upload, store, and play all of your music from the cloud. You can now manage and listen to your music from any device, anywhere in the world.',
    info2: 'The project is totally written in Django(frontend + backend)',
    url: '',
    repo: 'https://github.com/maze-runnar/through-the-songs', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'guide.png',
    title: 'The Tourists',
    info: 'Social Networking platform for tourists and guides to interact. The platform for tourists to share their experience and get more reach by your passion. Write Blogs about places you visit, share your memories, interact with more peoples.',
    info2: 'The project is totally written in Django(frontend + backend)',
    url: 'https://thetouristsguides.herokuapp.com/login/',
    repo: 'https://github.com/maze-runnar/thetourists', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'env.png',
    title: 'API Orbital',
    info: 'Web application uses 5 different API with a flask APP. And Also a Dialogflow chat-bot assistant.',
    info2: '',
    url: 'http://envorbital.herokuapp.com/',
    repo: 'http://envorbital.herokuapp.com/', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Gmail',
  email: 'dubeysundaram057@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@dubesundaram99/',
    },
    {
      id: uuidv1(),
      name: 'gitlab',
      url: 'https://gitlab.com/maze-runnar',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sundaram-dubey/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/maze-runnar/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
