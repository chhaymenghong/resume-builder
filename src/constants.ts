export const initialContextData = {
    resumeData: {
        personalInfo: {
            authorName: 'First Name Last Name',
            jobTitle: 'Full Stack Developer',
            phoneNum: '(xxx)-xxx-xxx',
            email: 'youremail@yahoo.com',
            github: 'github.com/username',
            professionalSummary: `Experienced Full Stack Developer with a strong background in developing and deploying comprehensive web solutions. Skilled in both front-end and back-end development, adept at creating responsive, user-friendly interfaces, and robust server-side applications. Excel at project management, from conceptualization to launch, ensuring optimal performance, scalability, and security.`,
        },
        companyMetaData: {
            placeholder: {
                key: -1,
                companyName: "Other Company",
                jobTitle: "Full Stack Developer",
                startDate: "MM/YYYY",
                endDate: "MM/YYYY",
                location: "City, State",
                jobDescription: `Job description`,
                achievements: [
                    {
                        key: 0,
                        description: `Add achievement / responsibility here`,
                    },
                ]
            },
            initialData: [
                {
                    key: 0,
                    companyName: "NASA, Jet Propulsion Laboratory",
                    jobTitle: "Full Stack Developer",
                    startDate: "MM/YYYY",
                    endDate: "Present",
                    location: "City, State",
                    jobDescription:
                        "Worked in three teams over the years and contributed to the success of many ground system projects",
                    achievements: [
                        {
                            key: 0,
                            description: `Developing and implementing full stack software solutions to manage and optimize the operations of the Deep Space Network (DSN) antennas, involving complex back-end algorithms for data processing and a user-friendly front-end interface for real-time monitoring and control.`,
                        },
                        {
                            key: 1,
                            description: 'Collaborating with scientists and engineers to integrate and analyze data from the DSN antennas, ensuring reliable communication with space missions, and contributing to the enhancement of signal processing and data visualization tools.',
                        }
                    ]
                },
                {
                    key: 1,
                    companyName: "Netflix",
                    jobTitle: "Full Stack Developer",
                    startDate: "MM/YYYY",
                    endDate: "MM/YYYY",
                    location: "City, State",
                    jobDescription: `At Netflix, as a Full Stack Engineer on the Productivity Team, I'm all about building and fine-tuning the internal tools and platforms that keep our teams running smoothly. I dive into both the nitty-gritty of back-end systems and the sleek front-end interfaces, utilizing a mix of React, Node.js, and a variety of databases to craft user-friendly solutions. Collaboration is key in my role.`,
                    achievements: [
                        {
                            key: 0,
                            description: `Designing, developing, and maintaining robust full stack applications that streamline internal workflows and improve team productivity, utilizing technologies like React for front-end and Node.js for back-end development.`,

                        },
                        {
                            key: 1,
                            description: 'Collaborating closely with cross-functional teams to gather requirements, providing innovative solutions and regular updates, while ensuring the scalability and security of internal tools and platforms.',

                        }
                    ]
                },
            ]
        },
        skillMetaData: {
            skillCategories: [
                {
                    key: 0,
                    categoryName: "Frontend",
                    skills: [
                        {
                            key: 0,
                            title: 'HTML5'
                        },
                        {
                            key: 1,
                            title: 'CSS3'
                        },
                        {
                            key: 2,
                            title: 'SASS'
                        },
                        {
                            key: 3,
                            title: 'Typescript'
                        },
                        {
                            key: 4,
                            title: 'Javascript'
                        },
                        {
                            key: 5,
                            title: 'React'
                        },
                    ]
                },
                {
                    key: 1,
                    categoryName: "Backend",
                    skills: [
                        {
                            key: 0,
                            title: 'NodeJS'
                        },
                        {
                            key: 1,
                            title: 'ElectronJS'
                        },
                        {
                            key: 2,
                            title: 'ExpressJS'
                        },
                        {
                            key: 3,
                            title: 'Socket.IO'
                        },
                        {
                            key: 4,
                            title: 'MongoDB'
                        },

                    ]
                },
                {
                    key: 2,
                    categoryName: "Test / Automation",
                    skills: [
                        {
                            key: 0,
                            title: 'Spectron'
                        },
                        {
                            key: 1,
                            title: 'Puppeteer'
                        },
                        {
                            key: 2,
                            title: 'Playwright'
                        },
                        {
                            key: 3,
                            title: 'React Testing Library'
                        },
                        {
                            key: 4,
                            title: 'Mocha'
                        },
                    ]
                },
                {
                    key: 3,
                    categoryName: "Third Party Integration",
                    skills: [
                        {
                            key: 0,
                            title: 'Stripe'
                        },
                        {
                            key: 1,
                            title: 'SendGrid'
                        },
                        {
                            key: 2,
                            title: 'Twilio'
                        },
                        {
                            key: 3,
                            title: 'Algolia'
                        },
                        {
                            key: 4,
                            title: 'DiscordJS'
                        },
                    ]
                }
            ],
            skillCategoryPlaceholder: {
                key: -1,
                categoryName: "Other Category",
                skills: [
                    {
                        key: 0,
                        title: 'Skill'
                    }
                ]
            },
            skillPlaceholder: {
                key: -1,
                title: 'Skill'
            }
        },
        sideProjectMetaData: {
            sideProjects: [
                {
                    key: 0,
                    sideProjectName: "Plant Buddy",
                    description: `This application provides users with a personalized dashboard where they can add and manage their plants. Key features include a plant database with details like optimal watering schedules, sunlight requirements, and growth tips. Users can track their plants' growth, set reminders for watering and fertilizing, and even diagnose common plant diseases. The backend, built with Node.js and Express, handles user data and integrates with a MongoDB database for storing plant information.`,
                }
            ],
            placeholder: {
                key: -1,
                sideProjectName: "Project Name",
                description: `Project Description`,
            }
        }
    }
};