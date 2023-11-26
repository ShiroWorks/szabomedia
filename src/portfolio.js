

import emoji from 'react-easy-emoji';

const greeting = {

  username: 'Szabó Vilmos',
  title: 'Sziasztok, Vili vagyok',
  subTitle: emoji(
    'Egy szenvedélyes full stack webfejlesztő 🚀 aki tapasztalattal rendelkezik webes alkalmazások készítésében JavaScript / Reactjs / Nodejs / PHP és még sok más könyvtár / keretrendszer használatával.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/15VMKeZ5wajmxRRny-qSf1z5HBUp7pjNp/view?usp=sharing',
};



const socialMediaLinks = {
  github: 'https://github.com/ShiroWorks?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/vilmos-szab%C3%B3-4b4b74201/?locale=hu_HU',
  gmail: 'szabomediaweb@gmail.com',
  twitter: 'https://twitter.com/___Vili___',
  codepen: 'https://codepen.io/Shirox',
};



const skillsSection = {
  title: 'Amivel foglalkozok',
  subTitle:
    'ŐRÜLT FULL STACK WEBFEJLESZTŐ, AKI MINDEN TECH STACK-OT SZERETNE FELFEDEZNI',
  skills: [
    emoji(
      'Rendkívül interaktív Felhasználói Felület fejlesztése web és mobil applikációkhoz'
    ),
    emoji('Progresszív webes alkalmazások ( PWA ) normál és SPA Stack-ban'),
    emoji(
      'Harmadik féltől származó szolgáltatások, mint például a Firebase integrálása'
    ),
    emoji('E-kereskedelmi platformok, fizetési kapuk, egyedi terméksablonok integrációja'
    ),
    emoji('Szeretnéd javítani a webhelyed teljesítményét, SEO-t vagy a felhasználói élményt? \n Kérj ingyenes webhely felmérést'
    ),
  ],



  softwareSkills: [
    {
      skillName: 'HTML-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'Sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'ReactJS',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'NodeJS',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'PHP',
      fontAwesomeClassname: 'fab fa-php',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'Laravel',
      fontAwesomeClassname: 'fab fa-laravel',
    },
    {
      skillName: 'Firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'MongoDB',
      fontAwesomeClassname: 'icon-mongodb',
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'icon-docker',
    },
    {
      skillName: 'Wordpress',
      fontAwesomeClassname: 'icon-wordpress',
    }

  ],
};



const educationInfo = {
  viewEducation: false,
  schools: [
    {
      schoolName: '',
      logo: '',
      subHeader: '',
      duration: '',
      desc: '',
      descBullets: [
        '',
        '',
      ],
    },
    {
      schoolName: '',
      logo: '',
      subHeader: '',
      duration: '',
      desc:
        '',
      descBullets: [''],
    },
  ],
};



const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: 'Frontend/Dizájn',
      progressPercentage: '90%',
    },
    {
      Stack: 'Backend',
      progressPercentage: '75%',
    },
    {
      Stack: 'Programozás',
      progressPercentage: '70%',
    },
  ],
};



const workExperiences = {
  viewExperiences: false,
  experience: [
    {
      role: '',
      company: '',
      companylogo: '',
      date: '',
      desc:
        '',
      descBullets: [
        '',
        '',
      ],
    },
    {
      role: '',
      company: '',
      companylogo: '',
      date: '',
      desc:
        '',
    },
    {
      role: '',
      company: '',
      companylogo: '',
      date: '',
      desc:
        '',
    },
  ],
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'ShiroWorks',
  showGithubProfile: 'true',
};





const bigProjects = {
  title: "Munkáim",
  subtitle: "VÁLOGATÁS A MUNKÁIM KÖZÜL",
  projects: [

    {
      image: require("./assets/images/oceanblue.jpg"),
      projectName: "OceanBlue",
      projectDesc: "Reszponzív weboldal",
      footerLink: [
        {
          name: "Weboldal Megtekintése",
          url: "https://oceanbluecss.netlify.app/index.html"
        }
      ]
    },
    {
      image: require("./assets/images/movies.jpg"),
      projectName: "React Movies",
      projectDesc: "Legnépszerűbb filmek, kereső funkcióval",
      footerLink: [
        {
          name: "Weboldal Megtekintése",
          url: "https://popular-movies-movie-db.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/tasty.jpg"),
      projectName: "Tasty Food",
      projectDesc: "Reszponzív weboldal light/dark móddal",
      footerLink: [
        {
          name: "Weboldal Megtekintése",
          url: "https://tasty-foodcss.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/reactLandingPage.gif"),
      projectName: "Dolla",
      projectDesc: "React Landing Page \"Smooth Scroll'-al",
      footerLink: [
        {
          name: "Weboldal Megtekintése",
          url: "https://react-landing-page-smooth-scroll.netlify.app/"
        }
        
      ]
    },
    {
      image: require("./assets/images/gallery.jpg"),
      projectName: "Galéria",
      projectDesc: "Galéria a pixabay API segítségével",
      footerLink: [
        {
          name: "Weboldal Megtekintése",
          url: "https://react-pixabay-gallery.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/restaurantLandingPage.png"),
      projectName: "Restaurant Landing Page",
      projectDesc: "Egy egyszerű étterem landing page",
      footerLink: [
        {
          name: "Weboldal Megtekintése",
          url: "https://react-restaurant-landing-page.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/pacman.jpg"),
      projectName: "Pac-Man",
      projectDesc: "Pac-Man játék",
      footerLink: [
        {
          name: "Weboldal Megtekintése",
          url: "https://pacman-js-sound.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/reactDashboard.png"),
      projectName: "Admin Dashboard",
      projectDesc: "React Admin Dashboard App témával, táblázatokkal, diagramokkal, naptárral, kanbannal és egyebekkel",
      footerLink: [
        {
          name: "View Website",
          url: "https://react-admin-dashboard-app.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/property.jpg"),
      projectName: "Ingatlan",
      projectDesc: "Weboldal a React Context API használatával",
      footerLink: [
        {
          name: "Weboldal Megtekintése",
          url: "https://my-real-estate-website.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/fitnessapp.png"),
      projectName: "Fitness App",
      projectDesc: "React Fitness Application",
      footerLink: [
        {
          name: "View Website",
          url: "https://react-mui-fitness-app.netlify.app/"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: 'Kedvenc Könyveim 📚 ',
  subtitle:
    'Pár Darab A Kedvenc Könyveim Közül',

  achievementsCards: [
    {
      title: 'Eloquent JavaScript',
      subtitle:
        '',
      image: require('./assets/images/jsbook1.jpg'),
      footerLink: [
        {
          name: 'Online Kiadás',
          url:
            'https://eloquentjavascript.net/',
        }

      ],
    },
    {
      title: 'PHP The Right Way',
      subtitle:
        '',
      image: require('./assets/images/php.jpg'),
      footerLink: [
        {
          name: 'Online Kiadás',
          url:
            'https://phptherightway.com/',
        },
      ],
    },

    {
      title: 'Code Complete: A Practical Handbook of Software Construction',
      subtitle: '',
      image: require('./assets/images/ydkjs.jpg'),
      footerLink: [
        { name: 'Amazon', url: 'https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=pd_sbs_1?pd_rd_w=wHdci&pf_rd_p=3ec6a47e-bf65-49f8-80f7-0d7c7c7ce2ca&pf_rd_r=6K8TVCVW71RVC6R3BGRJ&pd_rd_r=22b59947-fda8-4f42-9fdc-7ed84e381854&pd_rd_wg=OMvuf&pd_rd_i=0735619670&psc=1' },

      ],
    },
  ],
};



const blogSection = {
  title: 'Blog',
  subtitle:
    'Szeretek írni és segíteni másoknak',

  blogs: [
    {
      url:
        'https://szabovilmos.netlify.app/cikkek/hogyan-rakd-ossze-a-sajat-mernokinformatikai-vegzettseged-online-ingyert',
      title: 'Hogyan rakd össze a saját mérnökinformatikai végzettséged online, ingyért',
      description:
        'Manapság egyre több cégnél, amik fejlesztéssel foglalkoznak nem elvárás a jelentkezésnél, hogy legyen végzettséged. Már nagyobb cégekhez is, mint például a Google jelentkezhetsz végzettség nélkül. Ettől függetlenül, fel kell tudnod mutatnod, hogy eddig milyen applikációkat vagy weboldalakat készítettél, és be kell tudnod bizonyítanod, hogy tudásban sem vagy rosszabb annál mint aki egyetemen végzett.',
    },
    {
      url: 'https://szabovilmos.netlify.app/cikkek/css4',
      title: 'CSS4',
      description:
        'Mostanában találkoztam egy bejegyzéssel Peter-Paul Koch blogján, aminek a címe CSS4 is here!. Néha azt látom, hogy az emberek időről időre a CSS4-t használják, hogy kattintásokat szerezzenek, és ez kicsit bosszant engem, szóval általában nem törődök velük, de valamiért úgy döntöttem, hogy erre a cikkre rákattintok és megnézem, hogy miről szól.',
    },
  ],
};


const talkSection = {
  viewTalkSection: false,
  title: '',
  subtitle: ''
  ,

  talks: [
    {
      title: '',
      subtitle: '',
      slides_url: '',
      event_url: '',
    },
  ],
};



const podcastSection = {
  viewPodcastSection: false,
  title: '',
  subtitle: '',


  podcast: [
    '',
  ],
};

const contactInfo = {
  title: 'Keress Fel ☎️',
  subtitle:
    'Van egy projekted, amit el szeretnél kezdeni, vagy csak kérdésed van? A postaládám mindenki számára nyitva áll',
  number: '+3670 668-6562',
  email_address: 'szabomediaweb@gmail.com',
};



const twitterDetails = {
  userName: '___Vili___',
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
