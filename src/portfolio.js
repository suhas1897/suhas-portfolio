// import ReactTyped from "./components/TypedComponent"

// import ReactTyped from "react-typed";
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/suhas1897/suhas_portfolio.git',
  title: 'CH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'CHALAMCHARLA SUHAS',
  // role: 'Front End Developer',


  description:
    'I am a dedicated and creative front-end developer with a passion for crafting responsive, user-friendly websites and applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in translating design concepts into interactive and visually appealing digital experiences. My expertise extends to modern frameworks and libraries such as Reactjs, React-Native enabling me to build dynamic and performant interfaces.',
  resume: 'https://suhasresume.tiiny.site/',
  social: {
    linkedin: 'https://www.linkedin.com/in/suhas-chalam-charla-438787220/',
    github: 'https://github.com/suhas1897',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LSB Steganography',
    description:
      'Develop a tool that uses Least Significant Bit (LSB) steganography to embed hidden text within an image and later extract that text from the image.',
    stack: ['Python', 'HTML', 'JavaScript'],
    sourceCode: 'https://github.com/suhas1897/LSB-STEGANOGRAPHY.git',
    livePreview: 'https://github.com',
  },
  {
    name: 'Indium App',
    description:
      'The application seamlessly integrates health-related features, allowing users to access vital healthcare information conveniently. it offers functionalities such as locating nearby hospitals',
    stack: ['JavaScript', 'TypeScript', 'React', 'React-Native'],
    sourceCode: 'https://github.com/suhas1897/indium-App.git',
    livePreview: 'https://github.com',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React-Native',
  'Kali',
  'Ethical Hacking',
  'mongoDB',
  'Linux'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'chalamcherlasuhas1980@gmail.com',
  
}

export { header, about, projects, skills, contact }
