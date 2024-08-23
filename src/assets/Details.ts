import mercariMin from 'assets/icons/mercari.min.webp';
import mercari from 'assets/icons/mercari.webp';
import meijiMin from 'assets/icons/meiji.min.webp';
import meiji from 'assets/icons/meiji.webp';
import suffescomMin from 'assets/icons/suffescom.min.webp';
import suffescom from 'assets/icons/suffescom.webp';
import googleMin from 'assets/icons/google.min.webp';
import google from 'assets/icons/google.webp';
import toyotaMin from 'assets/icons/toyota.min.webp';
import toyota from 'assets/icons/toyota.webp';

const details = {
  name: {
    first: 'Tatsuo',
    last: 'Tanaka',
    nickname: 'Tan',
  },
  education: [
    {
      school: 'Meiji University',
      url: 'https://www.meiji.ac.jp/cip/english/',
      icon: meiji,
      iconMin: meijiMin,
      location: 'Chiyoda-ku, Tokyo, Japan',
      degree: 'Bachelor',
      major: 'Computer Science',
      start: 'Sep 2013',
      end: 'Oct 2017',
    },
  ],
  experience: [
    {
      company: 'Suffescom Solutions Inc',
      url: 'https://suffescom.co/',
      icon: suffescom,
      iconMin: suffescomMin,
      location: 'Los Angeles, California, United States',
      contract: 'Remote',
      position: 'Senior Full Stack Engineer',
      start: 'Mar 2023',
      end: 'Present',
      description: [
        'Built the MVP app using react-native and expo and ticket dashboard using react.',
        'Implemented UI designs of several game ideas to pixel perfect and optimized UI components.',
        'Used redux and react context for sharing the global states.',
        'Used react hooks for state management and ui optimization.',
        'Defined and used custom hooks and used apollo-graphql for backend integration.',
        'Implemented beautiful animations using react-spring/native.',
        'Collaborated with a cross-functional team using tools such as Github, Jira, and Discord, ensuring effective communication and streamlined development processes.',
      ],
      skills: [
        'React',
        'React Native',
        'Expo',
        'Angular',
        'VueJS',
        'Apollo',
        'NodeJS',
        'AWS',
        'GraphQL',
      ],
    },
    {
      company: 'Google Japan',
      // url: 'https://www.google.com/',
      icon: google,
      iconMin: googleMin,
      location: 'Tokyo, Japan',
      contract: 'On-site',
      position: 'Software Developer',
      start: 'Sep 2021',
      end: 'Feb 2023',
      description: [
        'Developed several web applications using React, Next.js, and TypeScript.',
        'Clarified project goals by creating wireframes, use-cases, and information architectures.',
        'Implemented web-accessible and mobile-optimized UI using Material-UI, TailWindCSS, Bootstrap5, Emotion, etc.',
        'CMS experience with Storyblok and contentful.',
        'Built animations of page transition, menus, and slideout using react-spring, gsap, and framer motion.',
        'Mentored advanced TDD practices and set the standards for the team members.',
        'Reduced initial page load speed by 60% with incremental SSG and partial hydration.',
        'Integrated Storm, Clerk, and Unifaun for checkout, product recommendations, etc.',
      ],
      skills: [
        'TypeScript',
        'React',
        'React Native',
        'VueJS',
        'NextJS',
        'NodeJS',
        'TailWindCSS',
        'Material UI',
        'GSAP',
      ],
    },
    {
      company: 'Toyota Motor Corporation',
      url: 'https://global.toyota/en/',
      icon: toyota,
      iconMin: toyotaMin,
      location: 'Toyota City, Aichi, Japan',
      contract: 'Hybrid',
      position: 'Full Stack Engineer',
      start: 'Apr 2019',
      end: 'Aug 2021',
      description: [
        'Built the Next.js based React Front-end and Node/DynamoDB/Lambda based serverless functions.',
        'Used AWS CloudFormation for seamless provisioning of the backend service.',
        'Set up AWS Cloudwatch logs, Budget alerts, Cognito, and AWS WAF for the back-end',
        'Built the mobile app in React Native, tested and published to iOS and Android stores.',
        'Worked on reusing React web components for React Native mobile app.',
        'Used React Native SVG library to fully rely on SVG images.',
        'Used React Navigation for navigation and Styled Components for the UI.',
        'Used Yarn workspace to build the monorepo of the backend, web frontend, and mobile app.',
      ],
      skills: [
        'NextJS',
        'React',
        'NodeJS',
        'DynamoDB',
        'Lambda',
        'AWS CloudFormation',
        'AWS Cloudwatch',
        'React Native',
        'iOS/Android',
      ],
    },
    {
      company: 'Mercari',
      url: 'https://about.mercari.com/en/',
      icon: mercari,
      iconMin: mercariMin,
      location: 'Minatoku, Tokyo, Japan',
      contract: 'On-site',
      position: 'Full Stack Developer',
      start: 'Nov 2017',
      end: 'Mar 2019',
      description:
      [
        'Developed a web version of the application using React.',
        'Implement fully responsive pixel-perfect cross-platform designs in React and SASS.',
        'Refactored an application due to issues with performance and looming bottlenecks.',
        'Oversaw code quality and code review process in the engineering team.',
        'Built mobile-responsive CSS components and organized the front-end with them.',
      ],

      skills: [
        'NodeJS',
        'Docker',
        'GitHub CI/CD',
        'React',
        'Bootstrap',
      ],
    },
  ],
  languages: [
    {
      name: 'Japanese',
      level: 'C2',
      native: true,
    },
    {
      name: 'English',
      level: 'C1',
    },
  ],
  contact: {
    address: 'Barcelona, España',
    email: 'contact@bsodium.fr',
    phone: '+33 7 83 79 29 25',
    website: 'https://www.bsodium.fr',
    linkedin: 'https://',
    github: 'https://www.github.com/bsodium',
    researchgate: 'https://www.researchgate.net/profile/Elliot-Negrel-Jerzy',
    gitlab: 'https://www.gitlab.com/bsodium',
    deviantart: 'https://www.deviantart.com/bsodium',
  },
};

export default details;
