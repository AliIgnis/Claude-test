import { TranslationSet } from '../models/project.model';

export const EN_TRANSLATIONS: TranslationSet = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact'
  },
  hero: {
    greeting: 'Hello, I am',
    title: 'Senior Backend Developer',
    subtitle: 'For over a decade, I have been developing high-quality software solutions for renowned companies in Germany.',
    cta: 'View Projects',
    contact: 'Get in Touch',
    downloadCv: 'Download CV'
  },
  about: {
    heading: 'About Me',
    text: 'For over a decade, I have continuously improved my technical skills within projects to solve a wide range of problems and ensure quality through test automation. Among others, I have worked for Deutsche Flugsicherung on drone control systems and flight simulations, for Union Investment on processing and consolidating securities and fund data, for Volkswagen Group on the international support and development of the tools GRP and GSA, and for 3spin on processing and visualizing position data and machine learning with object recognition.',
    mission: 'I consistently pursue the goal of fully meeting my clients\u2019 needs, advising them, and finding long-term, high-quality solutions.',
    location: 'Location: Germany',
    experience: '10+ Years Experience',
    freelance: 'Available for Freelance'
  },
  skills: {
    heading: 'Skills',
    categories: {
      frameworks: 'Frameworks & Libraries',
      languages: 'Languages & Technologies',
      testing: 'Testing',
      devops: 'DevOps & Tools',
      databases: 'Databases',
      architecture: 'Architecture & APIs',
      other: 'Other Skills'
    }
  },
  projects: {
    heading: 'Project Experience',
    current: 'present',
    items: [
      {
        company: 'Federal Office for Migration and Refugees',
        role: 'Freelance Backend Developer',
        period: '07.2025 \u2013 present',
        tasks: [
          'Project content and technologies may only be disclosed after client approval'
        ],
        tech: []
      },
      {
        company: 'E-Commerce Platform',
        role: 'Backend Developer',
        period: '01.2025 \u2013 06.2025',
        tasks: [
          'Development of an event-driven microservice backend for an e-commerce shop managing distributed business logic',
          'Implementation of a scalable architecture based on Onion Architecture',
          'Containerized deployment with Docker and orchestration via Kubernetes',
          'Development of REST interfaces and persistence with PostgreSQL, DTO mapping and test automation',
          'Migration to MongoDB, Spring WebFlux and reactive programming'
        ],
        tech: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Kubernetes', 'MongoDB', 'Spring WebFlux', 'REST', 'Maven']
      },
      {
        company: 'Deutsche Flugsicherung GmbH',
        role: 'Freelance Backend Developer',
        period: '05.2024 \u2013 01.2025',
        tasks: [
          'Integration of an open-source flight simulator: design and implementation of interfaces and automated tests',
          'Design & implementation of an interface layer for real-time access to geographic information'
        ],
        tech: ['Java', 'Python', 'Spring Boot 3', 'Docker', 'PostgreSQL/PostGIS', 'REST', 'Message Queuing', 'Karate', 'GitLab CI/CD']
      },
      {
        company: 'Re:think Innovations GmbH',
        role: 'Full-Stack Developer',
        period: '11.2022 \u2013 01.2024',
        tasks: [
          'Analysis, refactoring and further development of a full-stack application for infrastructure management',
          'Implementation of AWS functionalities'
        ],
        tech: ['React.js', 'Spring Boot', 'Java 8', 'AWS', 'Docker', 'REST', 'Mockito', 'CI/CD']
      },
      {
        company: 'PROFI Engineering Systems AG',
        role: 'Full-Stack Developer',
        period: '04.2022 \u2013 10.2022',
        tasks: [
          'Analysis, optimization and further development of an application for transmitting government data'
        ],
        tech: ['Java 7', 'Spring Boot', 'SOAP', 'Swagger']
      },
      {
        company: 'Cofinpro AG',
        role: 'IT Consultant',
        period: '10.2021 \u2013 03.2022',
        tasks: [
          'Conception and development of a full-stack application for seat reservations',
          'Further development of an application for managing issuers, securities and fund data for Union Investment'
        ],
        tech: ['Angular', 'Spring Boot', 'TypeScript', 'Java 17', 'REST', 'JavaFX', 'Mockito', 'JUnit']
      },
      {
        company: '3spin Learning GmbH & Co. KG',
        role: 'Full-Stack Developer',
        period: '08.2015 \u2013 09.2021',
        tasks: [
          'Development of a web-based inventory management system',
          'Development & conception of automated UI tests for an interactive web application for creating AR & VR',
          'Quality assurance through manual testing and product acceptance',
          'Project management and development of an object recognition project using Machine Learning/AI'
        ],
        tech: ['Java', 'JavaScript', 'Vue.js', 'Python', 'Spring Boot', 'Docker', 'Cypress', 'Laravel', 'C#', 'CI/CD']
      }
    ]
  },
  education: {
    heading: 'Education & Certifications',
    degree: 'B. Sc. Computer Science (Dual)',
    cert: 'AWS Developer Associate'
  },
  contact: {
    heading: 'Contact',
    subtitle: 'Have a project or an idea? Let\u2019s talk about it.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    success: 'Thank you! Your message has been sent.',
    errorRequired: 'Please fill in all required fields.',
    errorEmail: 'Please enter a valid email address.',
    phone: 'Phone'
  },
  footer: {
    rights: 'All rights reserved.',
    imprint: 'Imprint',
    privacy: 'Privacy Policy'
  },
  languages: {
    de: 'DE',
    en: 'EN'
  }
};
