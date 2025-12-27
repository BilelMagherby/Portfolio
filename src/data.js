
const personalInfo = {
    name: "BILEL MAGHERBY",
    phone: "+216 90 388 911",
    email: "bilelmagherby@gmail.com",
    linkedin: "https://www.linkedin.com/in/bilel-magherby-4ab8b927b/",
    github: "https://github.com/BilelMagherby",
    location: "Hammamet, Tunisia 8050",
};

const commonSkills = {
    frontend: ["HTML", "CSS", "JavaScript", "Angular"],
    backend: ["Symfony", "PHP", "Java"],
    frameworksTools: ["Node.js", "Express.js", "WordPress"],
    versionControl: ["Git", "GitHub"],
    architecture: ["MVC"],
    os: ["Windows"],
    databases: ["MySQL"],
    mobile: ["Flutter", "Dart"],
};

export const data = {
    en: {
        personalInfo: {
            ...personalInfo,
            title: "Junior Software Developer",
        },
        profile: `As a software developer with solid experience in building modern web and mobile applications, I have worked on varied projects requiring creativity and precision. My experience covers designing intuitive user experiences, developing secure and scalable systems, and solving real-world problems through technology. I have contributed to both individual and team projects, often taking the initiative to structure solutions, manage deadlines, and adapt to client or user needs. I thrive in environments that encourage innovation, collaboration, and continuous improvement, and I am driven by the impact thoughtful digital solutions can have on users and organizations alike.`,
        skills: {
            ...commonSkills,
            other: ["API Integration", "UI/UX Principles"],
        },
        experience: [
            {
                role: "Web Development Intern",
                company: "Tunisia Telecom",
                location: "Nabeul",
                period: "June 2023 - July 2023",
                description: [
                    "Developed a dynamic internal web platform to manage and connect partner doctors to the organization, improving communication and operational efficiency.",
                    "Led UI design and database integration, ensuring secure access and compliance with client requirements and professional standards.",
                    "Contributed to testing, optimization, and feature refinement, resulting in smoother data management and improved user experience.",
                ],
            },
            {
                role: "Web Development Intern",
                company: "Hammamet Service",
                location: "Hammamet",
                period: "June 2024 - July 2024",
                description: [
                    "Designed and developed a restaurant management web app to handle menus, orders, reservations, and staff coordination.",
                    "Implemented secure authentication, an intuitive admin dashboard, and an interactive client interface to optimize restaurant operations.",
                    "Strengthened skills in system architecture, database design, and data processing, delivering a robust and scalable solution tailored to business needs.",
                ],
            },
        ],
        education: [
            {
                degree: "Web Developer Certification",
                institution: "Collège de Paris / Amilcar University, Tunisia",
                period: "August 2025",
            },
            {
                degree: "Artificial Intelligence Certification",
                institution: "HP LIFE Online Course",
                period: "June 2025",
            },
            {
                degree: "Diploma in Computer Science",
                institution: "Elite Private Training, Nabeul, Tunisia",
                period: "October 2023 - July 2025",
            },
        ],
        projects: [
            {
                title: "Price Comparison",
                technologies: ["React", "Node.js", "MongoDB"],
                type: "Freelance",
                period: "August 2025 - September 2025",
                description: [
                    "Developed a price comparison platform in Tunisia integrating 7+ e-commerce sites with real-time scraping and smart search.",
                    "Designed a modern, responsive interface with fluid animations and optimized user experience.",
                    "Strengthened full-stack skills (React, Node.js, MongoDB) and implemented a scalable, high-performance architecture.",
                ],
                link: "https://github.com/BilelMagherby/SmartPriceTN"
            },
            {
                title: "Resto-Luxe",
                technologies: ["Symfony", "Php", "Boostrap", "Angular"],
                type: "Freelance",
                period: "June 2025 - July 2025",
                description: [
                    "Developed a cross-platform restaurant application focused on a smooth and engaging user experience.",
                    "Applied clean architecture with reusable components and a centralized theme system for consistent UI/UX.",
                    "Designed for scalability and cross-platform compatibility, enabling deployment on Android, iOS, web, and desktop to expand business reach.",
                ],
                link: "https://github.com/BilelMagherby/restaurant"
            },
            {
                title: "Habilux (PFE)",
                technologies: ["Symfony", "Php", "Boostrap", "Html", "Css"],
                type: "Elite Private Training, Nabeul",
                period: "December 2024 - March 2025",
                description: [
                    "Developed a dynamic real estate web platform in collaboration with a partner to improve the buying and selling experience for clients and agents.",
                    "Designed a personalized homepage, advanced search functionality, and optimized navigation for an intuitive user journey.",
                    "Created a dynamic property showcase with filtering options and detailed listings, enhancing user engagement and accessibility.",
                ],
                link: "https://github.com/BilelMagherby/Habilux"
            },
            {
                title: "Doctors with Tunisie telecom",
                technologies: ["Php", "Boostrap", "Html", "Css"],
                type: "Tunisie Telecome",
                period: "June 2024 - September 2024",
                description: [
                    "Designed and developed a dynamic hospital management system to optimize patient, appointment, staff, and service management.",
                    "Created a user-friendly interface with secure authentication and centralized data management to improve efficiency and data accessibility.",
                    "Improved full-stack development skills and delivered a solution tailored to specific healthcare sector needs.",
                ],
                link: "https://github.com/BilelMagherby/website-medical-using-php-"
            },
            {
                title: "Gaming Platform",
                technologies: ["JavaScript", "HTML5", "CSS3"],
                type: "Personal Project",
                period: "September 2025",
                description: [
                    "Developed an interactive gaming platform focused on performance and user experience.",
                    "Used modern JavaScript for game logic and real-time animations.",
                    "Modular and maintainable code available as open source."
                ],
                link: "https://github.com/BilelMagherby/react-gaming-platform-"
            },
            {
                title: "Funday Resto",
                technologies: ["JavaScript", "CSS"],
                type: "Personal Project",
                period: "July 2025",
                description: [
                    "Web application for managing and displaying restaurant menus with a playful interface.",
                    "Optimized display for different devices (Responsive Design).",
                    "Implemented interactive features to enhance customer engagement."
                ],
                link: "https://github.com/BilelMagherby/funday-resto"
            },
            {
                title: "Support Client",
                technologies: ["Dart", "Flutter"],
                type: "Mobile Application",
                period: "May 2025",
                description: [
                    "Cross-platform mobile application developed with Flutter for customer support.",
                    "Fluid and native user interface on iOS and Android.",
                    "Efficient state management and backend service integration."
                ],
                link: "https://github.com/BilelMagherby/support-client"
            },
        ],
        languages: {
            Arabic: "Native",
            French: "Advanced",
            English: "Advanced",
        },
        strengths: [
            "Creativity: Generating innovative ideas that significantly improve projects.",
            "Team Collaboration: Enjoy working in a collaborative and motivating environment; value collective problem solving and code review culture.",
        ],
        ui: {
            contactMe: "Contact Me",
            viewWork: "View Work",
            aboutMe: "About Me",
            myStrengths: "My Strengths",
            techExpertise: "Technical Expertise",
            professionalJourney: "Professional Journey",
            featuredProjects: "Featured Projects",
            viewDetails: "View Details",
            educationCert: "Education & Certifications",
            letsWork: "Let's Work Together",
            haveProject: "Have a project in mind or want to discuss modern web technologies? I'm just a message away.",
            sendMessage: "Send Message",
            name: "Name",
            message: "Message",
            nav: {
                about: "About",
                skills: "Skills",
                experience: "Experience",
                projects: "Projects",
                education: "Education",
                contact: "Contact",
                hireMe: "Hire Me"
            }
        }
    },
    fr: {
        personalInfo: {
            ...personalInfo,
            title: "Junior Développeur Logiciel",
        },
        profile: `En tant que développeur logiciel doté d'une solide expérience dans la création d'applications web et mobiles modernes, j'ai travaillé sur des projets variés exigeant créativité et précision. Mon expérience couvre la conception d'expériences utilisateur intuitives, le développement de systèmes sécurisés et évolutifs, et la résolution de problèmes concrets grâce à la technologie. J'ai contribué à des projets individuels et collectifs, prenant souvent l'initiative de structurer des solutions, de gérer les délais et de m'adapter aux besoins des clients ou des utilisateurs. Je m'épanouis dans des environnements qui encouragent l'innovation, la collaboration et l'amélioration continue, et je suis motivé par l'impact que des solutions numériques réfléchies peuvent avoir sur les utilisateurs comme sur les organisations.`,
        skills: {
            ...commonSkills,
            other: ["Intégration d'API", "Principes UI/UX"],
        },
        experience: [
            {
                role: "Stage en développement web",
                company: "Tunisia Telecom",
                location: "Nabeul",
                period: "Juin 2023 - Juillet 2023",
                description: [
                    "Développer une plateforme web interne dynamique pour gérer et connecter les médecins partenaires à l'organisation, améliorant ainsi la communication et l'efficacité opérationnelle.",
                    "Diriger la conception de l'interface utilisateur et l'intégration de la base de données, garantissant un accès sécurisé et le respect des exigences des clients et des normes professionnelles.",
                    "Contribuer aux tests, à l'optimisation et au perfectionnement des fonctionnalités, ce qui a permis de fluidifier la gestion des données et d'améliorer l'expérience utilisateur.",
                ],
            },
            {
                role: "Stage en développement web",
                company: "Hammamet Service",
                location: "Hammamet",
                period: "Juin 2024 - Juillet 2024",
                description: [
                    "Conception et développement d'une application web de gestion de restaurant pour gérer les menus, les commandes, les réservations et la coordination du personnel.",
                    "Mise en place d'une authentification sécurisée, d'un tableau de bord d'administration intuitif et d'une interface client interactive pour optimiser les opérations du restaurant.",
                    "Renforcement des compétences en architecture système, conception de bases de données et traitement des données, aboutissant à une solution robuste et évolutive, adaptée aux besoins réels de l'entreprise.",
                ],
            },
        ],
        education: [
            {
                degree: "Certification de Développeur Web",
                institution: "Collège de Paris / Université Amilcar, Tunisie",
                period: "Aout 2025",
            },
            {
                degree: "Certification d’ intelligence artificielle",
                institution: "Cours en ligne HP LIFE",
                period: "Juin 2025",
            },
            {
                degree: "Diplome en Science Informatique",
                institution: "Elite Formation Privée, Nabeul, Tunisie",
                period: "Octobre 2023 - Juillet 2025",
            },
        ],
        projects: [
            {
                title: "Price Comparison",
                technologies: ["React", "Node.js", "MongoDB"],
                type: "Freelance",
                period: "Aout 2025- Septembre 2025",
                description: [
                    "Développement d’une plateforme de comparaison des prix en Tunisie intégrant 7+ sites e-commerce avec scraping temps réel et recherche intelligente.",
                    "Conception d’une interface moderne et responsive avec animations fluides et expérience utilisateur optimisée.",
                    "Renforcement des compétences en full-stack (React, Node.js, MongoDB) et mise en place d’une architecture scalable et performante.",
                ],
                link: "https://github.com/BilelMagherby/SmartPriceTN"
            },
            {
                title: "Resto-Luxe",
                technologies: ["Symfony", "Php", "Boostrap", "Angular"],
                type: "Freelance",
                period: "Juin 2025- juillet 2025",
                description: [
                    "Développement d'une application de restaurant multiplateforme axée sur une expérience utilisateur fluide et engageante.",
                    "Application d'une architecture épurée avec des composants réutilisables et un système de thèmes centralisé pour une interface utilisateur et une expérience utilisateur cohérentes.",
                    "Conçue pour l'évolutivité et la compatibilité multiplateforme, elle permet un déploiement sur Android, iOS, le web et les ordinateurs de bureau afin d'étendre la portée de l'entreprise.",
                ],
                link: "https://github.com/BilelMagherby/restaurant"
            },
            {
                title: "Habilux (PFE)",
                technologies: ["Symfony", "Php", "Boostrap", "Html", "Css"],
                type: "Elite formation privée, Nabeul",
                period: "Decembre 2024 - Mars 2025",
                description: [
                    "Développement d'une plateforme web immobilière dynamique en collaboration avec un binôme pour améliorer l'expérience d'achat et de vente des acheteurs et des agents immobiliers.",
                    "Conception d'une page d'accueil personnalisée, d'une fonctionnalité de recherche avancée et d'une navigation optimisée pour un parcours utilisateur intuitif.",
                    "Création d'une vitrine immobilière dynamique avec options de filtrage et fiches détaillées, améliorant l'engagement et l'accessibilité des utilisateurs.",
                ],
                link: "https://github.com/BilelMagherby/Habilux"
            },
            {
                title: "Doctors with Tunisie telecom",
                technologies: ["Php", "Boostrap", "Html", "Css"],
                type: "Tunisie Telecome",
                period: "Juin 2024 - Septembre 2024",
                description: [
                    "Conception et développement d'un système de gestion hospitalière dynamique pour optimiser la gestion des patients, des rendez-vous, du personnel et des services.",
                    "Création d'une interface conviviale avec authentification sécurisée et gestion centralisée des données pour améliorer l'efficacité et l'accessibilité des données.",
                    "Amélioration des compétences en développement full-stack et fourniture d'une solution adaptée aux besoins spécifiques du secteur de la santé.",
                ],
                link: "https://github.com/BilelMagherby/website-medical-using-php-"
            },
            {
                title: "Gaming Platform",
                technologies: ["JavaScript", "HTML5", "CSS3"],
                type: "Projet Personnel",
                period: "Septembre 2025",
                description: [
                    "Développement d'une plateforme de jeux interactive axée sur la performance et l'expérience utilisateur.",
                    "Utilisation de JavaScript moderne pour la logique de jeu et les animations en temps réel.",
                    "Code modulaire et maintenable disponible en open source."
                ],
                link: "https://github.com/BilelMagherby/react-gaming-platform-"
            },
            {
                title: "Funday Resto",
                technologies: ["JavaScript", "CSS"],
                type: "Projet Personnel",
                period: "Juillet 2025",
                description: [
                    "Application web pour la gestion et l'affichage de menus de restaurant avec une interface ludique.",
                    "Optimisation de l'affichage pour différents appareils (Responsive Design).",
                    "Mise en œuvre de fonctionnalités interactives pour améliorer l'engagement des clients."
                ],
                link: "https://github.com/BilelMagherby/funday-resto"
            },
            {
                title: "Support Client",
                technologies: ["Dart", "Flutter"],
                type: "Application Mobile",
                period: "Mai 2025",
                description: [
                    "Application mobile cross-platform développée avec Flutter pour le support client.",
                    "Interface utilisateur fluide et native sur iOS et Android.",
                    "Gestion efficace des états et intégration de services backend."
                ],
                link: "https://github.com/BilelMagherby/support-client"
            },
        ],
        languages: {
            Arabic: "Langue maternelle",
            French: "Avancé",
            English: "Avancé",
        },
        strengths: [
            "Créativité : Générer des idées innovantes qui améliorent significativement.",
            "Collaboration d'équipe : Aime travailler dans un environnement collaboratif et motivant ; valorise la résolution collective de problèmes et la culture de révision de code.",
        ],
        ui: {
            contactMe: "Me Contacter",
            viewWork: "Voir Mes Projets",
            aboutMe: "À Propos",
            myStrengths: "Mes Forces",
            techExpertise: "Expertise Technique",
            professionalJourney: "Parcours Professionnel",
            featuredProjects: "Projets Récents",
            viewDetails: "Voir Détails",
            educationCert: "Éducation & Certifications",
            letsWork: "Travaillons Ensemble",
            haveProject: "Vous avez un projet en tête ou souhaitez discuter de technologies web modernes ? Je suis à votre écoute.",
            sendMessage: "Envoyer Message",
            name: "Nom",
            message: "Message",
            nav: {
                about: "À Propos",
                skills: "Compétences",
                experience: "Expérience",
                projects: "Projets",
                education: "Éducation",
                contact: "Contact",
                hireMe: "Engagez-moi"
            }
        }
    }
};
