import defaults from "$lib/translations/defaults";

export default {
	name: "EN",
	level: "🗣️",
	content: {
		madeWith: "This site was made with:",
		curriculum: "Curriculum",
		contacts: "Contacts",

		httpStatus: {
			buttons: {
				goHome: "Go back home 🏠",
				webSite: "Personal website",
			},
			401: {
				message: "Unauthorized access. You do not have permission to access this page.",
				goBackText: "Use one of the links below to navigate to an allowed page."
			},
			404: {
				message: "The page you tried to access was not found or does not exist.",
				goBackText: "Use one of the links below to access an existing page.",
			},
			any: {
				message: "An unexpected error has occurred. Please try again later.<br><br>Error code: ",
				goBackText: "Use one of the links below to access another page.",
			}
		},

		noSummarized: {
			text: "The summarized version is not available for the selected language."
		},


		intro: {
			declaration: {
				title: "PROFESSIONAL STATEMENT",
				subjects: [{ content: `I am from Bahia, Brazil, ${defaults.age} years old, and seeking a professional opportunity that provides a journey of learning and development. I am flexible, creative, efficient, and easily adapt to new challenges and changes. I am excited to apply my skills and embark on this journey towards professional success!` }]
			},
			differential: {
				title: "DIFFERENTIATORS",
				subjects: [{
					list: true, content: [
						"Driver's license",
						"Fluent in English",
						"Basic French",
						"Proficient in JavaScript",
						"Strong expertise in Design",
						"Experience with JSX scripts for Adobe applications",
						"Experience in WEB and Mobile development",
						"Experience in system creation",
						"Experience in Arduino development",
					]
				}]
			},
			characteristics: {
				title: "CHARACTERISTICS",
				subjects: [{
					list: true,
					content: [
						"Passionate about challenges",
						"Quick learner",
						"Versatile and adaptable",
						"Sincere and ethical",
						"Dedicated to organization",
						"Committed to excellence and quality",
						"Collaborative and efficient in teamwork",
						"Creative and innovative in technological solutions",
					]
				}]
			},
		},
		education: {
			title: "ACADEMIC BACKGROUND",
			subjects: [
			/* CS50 */ {
					title: "CS50's Web Programming with Python and JavaScript",
					type: "SPECIALIZED TRAINING",
					time: "2023",
					content: "I participated in the course offered by Harvard, where I deepened my knowledge in web programming. I acquired essential concepts to develop modern and dynamic web applications.",
				},
			/* LCI IF */ {
					title: "Computer Science",
					type: "UNDERGRADUATE - INCOMPLETE",
					time: "2019/2023",
					content: "I further consolidated my programming and technology knowledge during the Licentiate course at IF Baiano - Sr. do Bonfim, Bahia, Brazil, where I applied most of my projects.",
				},
			/* SENAI */ {
					title: "Technical Support in IT",
					type: "PROFESSIONAL COURSE",
					time: "2017/2018",
					content: "I began my academic career with a Technical Support in IT course at SENAI Cetind in Lauro de Freitas, Bahia, Brazil, gaining a solid foundation in networking, programming, technical support, and other topics, strengthening my passion for the field.",
				},
			]
		},
		educationPlus: {
			title: "ADDITIONAL COURSES",
			subjects: [
		/* LGPD */ {
					title: "LGPD",
					type: "PROFESSIONAL COURSE",
					time: "4 hours - 2021",
					content: `I took an online course at SENAI São Paulo, Brazil, on "Privacy and Data Protection", learning about information security and privacy regulations.`,
				},
		/* LOGICA DE PROGRAMAÇAO */ {
					title: "Cross-Functional Skills in Programming Logic",
					type: "PROFESSIONAL COURSE",
					time: "14 hours - 2017",
					content: "I took an online Programming Logic course at SENAI Bahia, Brazil, acquiring fundamentals in programming and logic.",
				},
		/* EMPREENDEDORISMO */ {
					title: "Cross-Functional Skills in Entrepreneurship",
					type: "PROFESSIONAL COURSE",
					time: "14 hours - 2017",
					content: "I took an online Entrepreneurship course at SENAI Bahia, Brazil, acquiring essential skills related to entrepreneurship and business management.",
				}
			]
		},
		projects: {
			title: "WORKS AND PROJECTS",
			subjects: [
		/* PROJETOS */ {
					title: "Personal Projects",
					type: "HOBBY",
					time: "PERIODICALLY",
					content: `In addition to the projects listed here, I have a wide range of projects available on my GitHub profile: ${defaults.link("github.com/NaN-NaN-sempai", "https://github.com/NaN-NaN-sempai")} or on my personal website: ${defaults.link(defaults.site, "https://" + defaults.site + "/")}. My projects demonstrate my passion for learning and my ability to create innovative solutions through programming.`,
				},
		/* PDEF */ {
					title: "PDEF",
					type: "ACADEMIC PROJECT",
					time: "2021",
					content: `Function Plotter (PDEF), a project required during the Graphics Applications course at IF Baiano. PDEF is a platform that allows the creation of graphs using JavaScript. This project has become a valuable tool for visualizing and understanding graphic concepts, as well as being a personal achievement as a programmer. It can be accessed at: ${defaults.link(defaults.site + "/PdeF", "https://" + defaults.site + "/PdeF")}`,
				},
		/* LICA APP */ {
					title: "LiCA App",
					type: "ACADEMIC PROJECT",
					time: "2021",
					content: `The LiCA App was my first Android application, developed with my colleague Joel Junior as part of the Graphics Applications course at IF Baiano. This app was designed to display the syllabus for the Licentiate Course in Agricultural Sciences and was available on the Google Play Store until 03/14/2024. Available at: ${defaults.link("applica." + defaults.site, "https://applica." + defaults.site)}`
				},
		/* OFICINA */ {
					title: "Workshop on Computing",
					type: "ACADEMIC INTERNSHIP",
					time: "2022",
					content: `In the Stage I course at IF Baiano, my colleague Marcos Santos and I organized an online workshop (due to the COVID-19 pandemic) on "Introduction to Computing", covering topics such as the history of computing, hardware, software, networks, programming, web development, and job opportunities. Some information (in pt-BR) at: ${defaults.link("oficina-introducao-computacao.vercel.app", "https://oficina-introducao-computacao.vercel.app/")}`
				},
		/* ARTIGO */ {
					title: "Published Article",
					type: "ACADEMIC PROJECT",
					time: "2022",
					content: `I participated in the Institutional Program of Teaching Initiation Scholarships (PIBID) working with physics teacher Damon Ferreira Farias, and along with colleagues, published an article at Conedu about information security in schools. PDF available (in pt-BR) at: ${defaults.link("editorarealize.com", "https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf")}`
				},
		/* WINDOWS APP FOLDER */ {
					title: "Computer Program",
					type: "HOBBY / PERSONAL NEED",
					time: "2023",
					content: `The Windows App Folder is a Windows application made with Electron.js that creates custom folders to organize apps or files, inspired by Samsung's app folders on Android. Access: ${defaults.link("github.com/NaN-NaN-sempai/Windows-App-Folder", "https://github.com/NaN-NaN-sempai/Windows-App-Folder")}`
				},
		/* USEBASE */ {
					title: "UseBase",
					type: "HOBBY / PERSONAL NEED",
					time: "2023",
					content: `UseBase is a versatile JavaScript library designed to simplify the process of encoding and decoding numbers using various numeric bases. Whether for representing integers in binary, hexadecimal, custom character sets, or even emojis, UseBase offers a flexible solution. Available at ${defaults.link("npmjs.com/package/usebase", "https://www.npmjs.com/package/usebase")}`
				},
		/* CONSOFY */ {
					title: "ConsoFy",
					type: "HOBBY / PERSONAL NEED",
					time: "2025",
					content: `ConsoFy is a simple tool to organize and style the JavaScript console. The name ConsoFy was chosen due to its similarity to the word "console" used in JavaScript, making its usage more intuitive. Access: ${defaults.link("npmjs.com/package/consofy", "https://www.npmjs.com/package/consofy")}`
				}
			]
		},
		projectsPlus: {
			title: "PROJECTS IN DEVELOPMENT",
			subjects: [
		/* MPJS */ {
					title: "MPJS",
					type: "Personal project",
					time: "2023 / IN DEVELOPMENT",
					content: `Math Plotter Javascript (MPJS) is an evolution of PDEF, now with an improved interface incorporating the Monaco Editor and more advanced JavaScript syntax for creating complex graphs. Available at: ${defaults.link(defaults.site + "/MPJS", "https://" + defaults.site + "/MPJS")}`
				},
		/* LDP WHATSAPP */ {
					title: "Production Line with WhatsApp",
					type: "Personal Project",
					time: "IN DEVELOPMENT",
					content: `LDP WhatsApp is a system in production that will be used to manage a production line of products or services, with customer chat via WhatsApp directly in the system. Private project still in development.`
				}
			]
		},
		works: {
			title: "PROFESSIONAL EXPERIENCE",
			subjects: [
		/* INOVAR */ {
					title: "GRAPHIC DESIGNER",
					type: "INFORMAL",
					time: "2021/2024",
					content: `I worked at Inovar Personalizações as a designer, creating unique designs for binders and cartons. During this period, I applied my developer skills by introducing a new methodology for creating designs and creating JSX scripts for Adobe, as well as improving the client and order management system used by the company.`
				}
			]
		},
		worksPlus: {
			title: "OTHERS",
			subjects: [
		/* RESEARCHER */ {
					title: "RESEARCHER",
					type: "CONTRACT",
					time: "1 month - 2023",
					content: `For one month, I traveled to various cities in Bahia conducting research on behalf of UniFel.`
				},
		/* DELIVERY PERSON */ {
					title: "PACKAGE DELIVERY",
					type: "CONTRACT",
					time: "2 months - 2023",
					content: `I worked as a delivery person at J&T Express, enhancing organizational skills, route management efficiency, and meeting targets. Responsible for timely delivery of packages, I maintained a high performance standard.`
				},
		/* FREELANCER */ {
					title: "FREELANCER",
					type: "INFORMAL",
					time: "PERIODICALLY",
					content: `I work as a freelancer, offering my services in both programming and design. I also teach and provide tutorials in the field.`
				}
			]
		}
	}
};
