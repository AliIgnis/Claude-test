import { TranslationSet } from '../models/project.model';

export const DE_TRANSLATIONS: TranslationSet = {
  nav: {
    about: 'Über mich',
    skills: 'Skills',
    projects: 'Projekte',
    education: 'Bildung',
    contact: 'Kontakt'
  },
  hero: {
    greeting: 'Hallo, ich bin',
    title: 'Senior Backend-Entwickler',
    subtitle: 'Seit über einem Jahrzehnt entwickle ich qualitative Softwarelösungen für namhafte Unternehmen in Deutschland.',
    cta: 'Projekte ansehen',
    contact: 'Kontakt aufnehmen',
    downloadCv: 'Lebenslauf herunterladen'
  },
  about: {
    heading: 'Über mich',
    text: 'Seit einem Jahrzehnt habe ich kontinuierlich meine technischen Fähigkeiten innerhalb von Projekten verbessert, um eine Vielzahl an Problemen zu lösen und Qualitätssicherung durch Testautomatisierung durchzuführen. Hierbei habe ich unter anderem für die Deutsche Flugsicherung an Drohnenkontrollsystemen und Flugsimulationen, für die Union Investment an der Verarbeitung und Konsolidierung von Wertpapier- und Fondsdaten, für die Volkswagen Group an der Internationalen Betreuung und Entwicklung des Tools GRP und GSA und für 3spin an der Verarbeitung und Visualisierung von Positionsdaten und Machine-Learning mithilfe von Objekterkennung gearbeitet.',
    mission: 'Ich verfolge stets das Ziel, meine Kundenbedürfnisse vollständig zu erfüllen, diese zu beraten und langfristig qualitative Lösungswege zu finden.',
    location: 'Standort: Deutschland',
    experience: '10+ Jahre Erfahrung',
    freelance: 'Freelance verfügbar'
  },
  skills: {
    heading: 'Skills',
    categories: {
      frameworks: 'Frameworks & Libraries',
      languages: 'Sprachen & Technologien',
      testing: 'Testing',
      devops: 'DevOps & Tools',
      databases: 'Datenbanken',
      architecture: 'Architektur & APIs',
      other: 'Sonstige Skills'
    }
  },
  projects: {
    heading: 'Projekterfahrung',
    current: 'aktuell',
    items: [
      {
        company: 'Bundesamt für Migration und Flüchtlinge',
        role: 'Freelance Backend-Developer',
        period: '07.2025 \u2013 aktuell',
        tasks: [
          'Projektinhalt und Technologien dürfen erst nach Genehmigung des Kunden mitgeteilt werden'
        ],
        tech: []
      },
      {
        company: 'E-Commerce Plattform',
        role: 'Backend-Developer',
        period: '01.2025 \u2013 06.2025',
        tasks: [
          'Entwicklung eines event-getriebenen Microservice-Backends für einen E-Commerce-Shop zur Verwaltung verteilter Geschäftslogik',
          'Umsetzung einer skalierbaren Architektur auf Basis von Onion Architecture',
          'Containerisierte Bereitstellung mit Docker und Orchestrierung via Kubernetes',
          'Entwicklung von REST-Schnittstellen und Persistenz mit PostgreSQL, DTO-Mapping und Testautomatisierung',
          'Migration zur Nutzung von MongoDB, Spring WebFlux und reaktiver Programmierung'
        ],
        tech: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Kubernetes', 'MongoDB', 'Spring WebFlux', 'REST', 'Maven']
      },
      {
        company: 'Deutsche Flugsicherung GmbH',
        role: 'Freelance Backend-Developer',
        period: '05.2024 \u2013 01.2025',
        tasks: [
          'Integration eines Open-Source-Flugsimulators: Entwurf und Implementierung der Schnittstellen und automatisierte Tests',
          'Entwurf & Implementierung einer Schnittstellenschicht für Echtzeitzugriff auf geographische Informationen'
        ],
        tech: ['Java', 'Python', 'Spring Boot 3', 'Docker', 'PostgreSQL/PostGIS', 'REST', 'Message Queuing', 'Karate', 'GitLab CI/CD']
      },
      {
        company: 'Re:think Innovations GmbH',
        role: 'Full-Stack-Developer',
        period: '11.2022 \u2013 01.2024',
        tasks: [
          'Analyse, Refactoring und Weiterentwicklung einer Full-Stack-Anwendung zur Verwaltung von Infrastrukturen',
          'Implementierung von AWS Funktionalitäten'
        ],
        tech: ['React.js', 'Spring Boot', 'Java 8', 'AWS', 'Docker', 'REST', 'Mockito', 'CI/CD']
      },
      {
        company: 'PROFI Engineering Systems AG',
        role: 'Full-Stack-Developer',
        period: '04.2022 \u2013 10.2022',
        tasks: [
          'Analyse, Optimierung und Weiterentwicklung einer Anwendung zur Übermittlung von Behördendaten'
        ],
        tech: ['Java 7', 'Spring Boot', 'SOAP', 'Swagger']
      },
      {
        company: 'Cofinpro AG',
        role: 'IT-Berater',
        period: '10.2021 \u2013 03.2022',
        tasks: [
          'Konzeption und Entwicklung einer Full-Stack-Anwendung zur Sitzplatzreservierung',
          'Weiterentwicklung einer Anwendung zur Verwaltung von Emittenten, Wertpapieren und Fondsdaten für die Union Investment'
        ],
        tech: ['Angular', 'Spring Boot', 'TypeScript', 'Java 17', 'REST', 'JavaFX', 'Mockito', 'JUnit']
      },
      {
        company: '3spin Learning GmbH & Co. KG',
        role: 'Full-Stack-Developer',
        period: '08.2015 \u2013 09.2021',
        tasks: [
          'Entwicklung eines webbasierten Inventarisierungssystems',
          'Entwicklung & Konzeption von automatisierten UI-Tests einer interaktiven Webanwendung zur Erstellung von AR & VR',
          'Qualitätssicherung mithilfe von manuellen Tests und Produktabnahme',
          'Projektmanagement und Entwicklung eines Projektes für Objekterkennung mithilfe von Machine Learning/KI'
        ],
        tech: ['Java', 'JavaScript', 'Vue.js', 'Python', 'Spring Boot', 'Docker', 'Cypress', 'Laravel', 'C#', 'CI/CD']
      }
    ]
  },
  education: {
    heading: 'Bildung & Zertifikate',
    degree: 'B. Sc. Informatik (Dual)',
    cert: 'AWS Developer Associate'
  },
  contact: {
    heading: 'Kontakt',
    subtitle: 'Haben Sie ein Projekt oder eine Idee? Lassen Sie uns darüber sprechen.',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Nachricht senden',
    success: 'Vielen Dank! Ihre Nachricht wurde gesendet.',
    errorRequired: 'Bitte füllen Sie alle Pflichtfelder aus.',
    errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    phone: 'Telefon'
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz'
  },
  languages: {
    de: 'DE',
    en: 'EN'
  }
};
