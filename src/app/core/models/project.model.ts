export interface Project {
  company: string;
  role: string;
  period: string;
  tasks: string[];
  tech: string[];
}

export interface SkillCategory {
  key: string;
  label: string;
  tags: SkillTag[];
}

export interface SkillTag {
  name: string;
  highlight?: boolean;
}

export interface TranslationSet {
  nav: NavTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  skills: SkillsTranslations;
  projects: ProjectsTranslations;
  education: EducationTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  languages: Record<string, string>;
}

export interface NavTranslations {
  about: string;
  skills: string;
  projects: string;
  education: string;
  contact: string;
}

export interface HeroTranslations {
  greeting: string;
  title: string;
  subtitle: string;
  cta: string;
  contact: string;
  downloadCv: string;
}

export interface AboutTranslations {
  heading: string;
  text: string;
  mission: string;
  location: string;
  experience: string;
  freelance: string;
}

export interface SkillsTranslations {
  heading: string;
  categories: Record<string, string>;
}

export interface ProjectsTranslations {
  heading: string;
  current: string;
  items: Project[];
}

export interface EducationTranslations {
  heading: string;
  degree: string;
  cert: string;
}

export interface ContactTranslations {
  heading: string;
  subtitle: string;
  name: string;
  email: string;
  message: string;
  send: string;
  success: string;
  errorRequired: string;
  errorEmail: string;
  phone: string;
}

export interface FooterTranslations {
  rights: string;
  imprint: string;
  privacy: string;
}
