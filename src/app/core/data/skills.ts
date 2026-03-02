import { SkillCategory } from '../models/project.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: 'frameworks',
    label: '',
    tags: [
      { name: 'Spring Boot' },
      { name: 'Angular' },
      { name: 'React.js' },
      { name: 'Vue.js' },
      { name: 'Spring WebFlux' },
      { name: 'NodeJs' },
      { name: 'Flutter' },
      { name: 'JavaFX' }
    ]
  },
  {
    key: 'languages',
    label: '',
    tags: [
      { name: 'Java', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'Kotlin' },
      { name: 'Dart' },
      { name: 'HTML' },
      { name: 'CSS' }
    ]
  },
  {
    key: 'testing',
    label: '',
    tags: [
      { name: 'JUnit' },
      { name: 'Mockito' },
      { name: 'Cypress' },
      { name: 'Karate' },
      { name: 'Jasmine' }
    ]
  },
  {
    key: 'devops',
    label: '',
    tags: [
      { name: 'Docker', highlight: true },
      { name: 'Kubernetes', highlight: true },
      { name: 'AWS' },
      { name: 'GitLab CI/CD' },
      { name: 'Maven' },
      { name: 'Gradle' },
      { name: 'Keycloak' },
      { name: 'OpenAPI' }
    ]
  },
  {
    key: 'databases',
    label: '',
    tags: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'PostGIS' }
    ]
  },
  {
    key: 'architecture',
    label: '',
    tags: [
      { name: 'REST' },
      { name: 'Domain-Driven Design' },
      { name: 'Event-Driven Architecture' },
      { name: 'Reactive Programming' },
      { name: 'Message Queuing' },
      { name: 'SOAP' },
      { name: 'Onion Architecture' }
    ]
  },
  {
    key: 'other',
    label: '',
    tags: [
      { name: 'Scrum' },
      { name: 'Git' },
      { name: 'Jira' },
      { name: 'Confluence' },
      { name: 'Postman' }
    ]
  }
];
