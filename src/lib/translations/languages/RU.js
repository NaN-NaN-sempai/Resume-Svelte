function calculateAge(birthDate) {
	const today = new Date();
	const birth = new Date(birthDate);

	let age = today.getFullYear() - birth.getFullYear();
	const month = today.getMonth() - birth.getMonth();

	if (month < 0 || (month === 0 && today.getDate() < birth.getDate()))
		age--;

	return age;
}

const age = calculateAge('2001-05-18');
export default {
	name: "RU",
	level: "🤖",
	content: {
		madeWith: "Этот сайт сделан с помощью:",
		curriculum: "Резюме",
		contacts: "Контакты",

		intro: {
			declaration: {
				title: "ПРОФЕССИОНАЛЬНОЕ ЗАЯВЛЕНИЕ",
				subjects: [{
					content: `Я из Баии, Бразилия, мне ${age} лет, и я ищу профессиональную возможность, которая обеспечит мне путь обучения и развития. Я гибкий, креативный, эффективный и легко адаптируюсь к новым вызовам и изменениям. Я взволнован, чтобы применить свои навыки и начать это путешествие к профессиональному успеху!`
				}]
			},
			differential: {
				title: "ПРЕИМУЩЕСТВА",
				subjects: [{
					list: true,
					content: [
						"Водительские права",
						"Свободно владею английским",
						"Базовый французский",
						"Отличный в JavaScript",
						"Сильная экспертиза в дизайне",
						"Опыт работы со скриптами JSX для приложений Adobe",
						"Опыт веб-разработки и мобильной разработки",
						"Опыт создания систем",
						"Опыт разработки с Arduino",
					]
				}]
			},
			characteristics: {
				title: "ХАРАКТЕРИСТИКИ",
				subjects: [{
					list: true,
					content: [
						"Страстный к вызовам",
						"Быстрое обучение",
						"Универсальный и адаптируемый",
						"Честный и этичный",
						"Посвященный организации",
						"Преданный качеству и выдающимся результатам",
						"Коллаборативный и эффективный в командной работе",
						"Креативный и инновационный в технологических решениях",
					]
				}]
			},
		},
		education: {
			title: "ОБРАЗОВАНИЕ",
			subjects: [
				/* CS50 */ {
					title: "CS50's Web Programming with Python and JavaScript",
					type: "СПЕЦИАЛИЗИРОВАННОЕ ОБУЧЕНИЕ",
					time: "2023",
					content: "Я прошел курс, предложенный Гарвардом, где углубил свои знания в веб-программировании. Я приобрел основные понятия для разработки современных и динамичных веб-приложений.",
				},
				/* LCI IF */ {
					title: "Компьютерные науки",
					type: "НЕЗАВЕРШЕННОЕ ВЫСШЕЕ ОБРАЗОВАНИЕ",
					time: "2019/2023",
					content: "Я еще больше укрепил свои знания в программировании и технологиях во время курса обучения в IF Baiano - Сеньор до Бонфим, Бразилия, где я применял на практике большинство своих проектов.",
				},
				/* SENAI */ {
					title: "Техническая поддержка в ИТ",
					type: "ПРОФЕССИОНАЛЬНЫЙ КУРС",
					time: "2017/2018",
					content: "Я начал свою академическую карьеру с курса технической поддержки в ИТ в SENAI Cetind в Лауро де Фрейтас, Бразилия, получив солидную основу по сетям, программированию, технической поддержке и другим вопросам, укрепив свою страсть к этой области.",
				},
			]
		},
		educationPlus: {
			title: "ДОПОЛНИТЕЛЬНЫЕ КУРСЫ",
			subjects: [
				/* LGPD */ {
					title: "LGPD",
					type: "ПРОФЕССИОНАЛЬНЫЙ КУРС",
					time: "4 часа - 2021",
					content: `Я прошел онлайн-курс в SENAI в Сан-Паулу, Бразилия, о "Конфиденциальности и защите данных", изучая безопасность информации и нормы конфиденциальности.`,
				},
				/* ЛОГИКА ПРОГРАММИРОВАНИЯ */ {
					title: "Трансверсальные навыки в логике программирования",
					type: "ПРОФЕССИОНАЛЬНЫЙ КУРС",
					time: "14 часов - 2017",
					content: "Я прошел дистанционный курс в SENAI в Баии, Бразилия, по логике программирования, приобретая основы в программировании и логике.",
				},
				/* ПРЕДПРИНИМАТЕЛЬСТВО */ {
					title: "Трансверсальные навыки в предпринимательстве",
					type: "ПРОФЕССИОНАЛЬНЫЙ КУРС",
					time: "14 часов - 2017",
					content: "Я прошел дистанционный курс в SENAI в Баии, Бразилия, по предпринимательству, приобретая важные навыки, связанные с предпринимательством и управлением бизнесом.",
				}
			]
		},
		projects: {
			title: "РАБОТЫ И ПРОЕКТЫ",
			subjects: [
				/* ПРОЕКТЫ */ {
					title: "Личные проекты",
					type: "ХОББИ",
					time: "ПЕРИОДИЧЕСКИ",
					content: `Кроме этих проектов, упомянутых здесь, у меня есть широкий выбор проектов на моем профиле GitHub: <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> или на моем личном сайте: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. Мои проекты демонстрируют мою страсть к обучению и мою способность создавать инновационные решения через программирование.`,
				},
				/* PDEF */ {
					title: "PDEF",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2021",
					content: `Плоттер функций (PDEF), проект, требуемый в рамках курса графических приложений в IF Baiano. PDEF - это платформа, которая позволяет создавать графики с использованием JavaScript. Этот проект стал ценным инструментом для визуализации и понимания графических концепций и личным достижением как программиста. Доступно по адресу: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>`,
				},
				/* LICA APP */ {
					title: "Приложение LiCA App",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2021",
					content: `LiCA App был моим первым приложением для Android, разработанным вместе с моим коллегой Джоэлем Джуниором в рамках курса графических приложений в IF Baiano. Это приложение было предназначено для отображения содержания курса лицензирования по агрономии и было доступно в Google Play Store до 14/03/2024. Доступно по адресу: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>`
				},
				/* СЕМИНАР */ {
					title: "Семинар по вычислительной технике",
					type: "АКАДЕМИЧЕСКАЯ СТАЖИРОВКА",
					time: "2022",
					content: `На курсе Стажировка I в IF Baiano, мой коллега Маркос Сантос и я организовали онлайн-семинар (из-за пандемии COVID-19) "Введение в вычислительную технику", охватывающий такие темы, как история вычислительной техники, аппаратное обеспечение, программное обеспечение, сети, программирование, веб-разработка и возможности трудоустройства. Дополнительная информация: <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>`
				},
				/* СТАТЬЯ */ {
					title: "Опубликованная статья",
					type: "АКАДЕМИЧЕСКИЙ ПРОЕКТ",
					time: "2022",
					content: `Я участвовал в Программе институциональных стипендий для начального обучения (PIBID), работая с преподавателем физики Дэймоном Феррейра Фариасом, и вместе с коллегами опубликовал статью на Conedu о безопасности информации в школах. PDF доступен по адресу: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>`
				},
				/* WINDOWS APP FOLDER */ {
					title: "Папка для Windows App",
					type: "ХОББИ",
					time: "2019",
					content: `В 2019 году я выпустил на GitHub проект папки Windows App. Эта папка предназначена для быстрого доступа к важным папкам и файлам в Windows. Она стала полезным инструментом для пользователей, которые хотят улучшить свою продуктивность на ПК. Доступно по адресу: <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>`,
				},
				/* USEBASE */ {
					title: "UseBase",
					type: "ХОББИ / ЛИЧНАЯ ПОТРЕБНОСТЬ",
					time: "2023",
					content: `UseBase — это универсальная библиотека JavaScript, предназначенная для упрощения процесса кодирования и декодирования чисел с использованием различных числовых систем. Независимо от того, требуется ли представление целых чисел в двоичном, шестнадцатеричном формате, пользовательских наборах символов или даже эмодзи, UseBase предлагает гибкое решение. Доступно по адресу <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>`
				},
			],
		},
		projectsPlus: {
			title: "ПРОЕКТЫ В РАЗРАБОТКЕ",
			subjects: [
				/* MPJS */ {
					title: "MPJS",
					type: "Личный проект",
					time: "2023 / В РАЗРАБОТКЕ",
					content: `Math Plotter Javascript (MPJS) — это эволюция PDEF, теперь с улучшенным интерфейсом, который включает редактор Monaco и более продвинутый синтаксис JavaScript для создания сложных графиков. Доступно по адресу: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>`
				}
			]
		},
		works: {
			title: "ПРОФЕССИОНАЛЬНЫЙ ОПЫТ",
			subjects: [
				/* INOVAR */ {
					title: "ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
					type: "НЕФОРМАЛЬНО",
					time: "2021/2024",
					content: `Я работал в Inovar Personalizações в качестве дизайнера, создавая уникальные дизайны для переплетов и картонной продукции. В этот период я применил свои навыки разработчика, внедрив новую методологию для создания дизайнов и создав скрипты JSX для Adobe, а также улучшил систему управления клиентами и заказами, используемую компанией.`
				}
			]
		},
		worksPlus: {
			title: "ДРУГИЕ",
			subjects: [
				/* PESQUISADOR */ {
					title: "ИССЛЕДОВАТЕЛЬ",
					type: "КОНТРАКТ",
					time: "1 месяц - 2023",
					content: `В течение месяца я путешествовал по нескольким городам Баии, проводя исследования от имени компании UniFel.`
				},
				/* ENTREGADOR */ {
					title: "ДОСТАВЩИК ПОСЫЛОК",
					type: "КОНТРАКТ",
					time: "2 месяца - 2023",
					content: `Я работал курьером в J&T Express, улучшая организационные навыки, эффективность управления маршрутами и выполнение целей. Ответственный за своевременную доставку посылок, я поддерживал высокий уровень производительности.`
				},
				/* FREELANCER */ {
					title: "ФРИЛАНСЕР",
					type: "НЕФОРМАЛЬНО",
					time: "ПЕРИОДИЧЕСКИ",
					content: `Я работаю как фрилансер, предлагая свои услуги как в программировании, так и в дизайне. Также я провожу занятия и мастер-классы в этой области.`
				}
			]
		}
		
	}
};