var companies = [
        'Artech International',
        'Libelium',
        'Madinah Region Development Authority',
        'MedITech',
        'NEC',
        'Telefonica',
        'Ubiwhere',
]; var departments = [
]; var domains = [
        'Gold',
        'Platinum',
]; var titles = [
        'CEO',
        'CSO',
        'Director',
        'Fellow',
        'General Manager',
]; var countries = [
        'Belgium',
        'Italy',
        'Japan',
        'Portugal',
        'Saudi Arabia',
        'Spain',
]; var modalData = [
    { name: "Suna Akbayir", img: "https://www.fiware.org/wp-content/directories/people/images/200px/suna-akbayir.jpg", position: "Chief Executive Officer", company: "Artech International BVBA", "company-link": "https://artechconsulting.net/",
    content: "Suna Akbayir is a Turkish entrepreneur with an extensive international business presence, well-recognized in Europe’s R&amp;D and innovation ecosystem. She is the Founder &amp; CEO of Artech International BVBA, a Brussels- headquartered in Brussels consulting and technology firm with an R&amp;D office in Leuven specializing in AI-driven solutions, Digital Product Passports (DPPs), and regulatory technology (RegTech) for industries such as automotive, electronics, and healthcare. With deep expertise in R&amp;D funding, technology transfer, and business development, she has led and contributed to multi-million-euro EU-funded projects, working closely with global industry leaders, SMEs, and policymakers. Through Artech, she has been at the forefront of innovation commercialization and market expansion, positioning the company as a key partner in Horizon Europe, Eureka, ITEA, and Celtic+ initiatives. Her expertise spans advisory roles, project evaluations, and mentoring for startups, SMEs, and research institutions, with a focus on bridging technology, business, and policy to drive real-world impact. She is known for her pragmatic approach and strategic foresight, actively shaping Europe’s innovation landscape. She has also been acting as the principal R&amp;D consultant for International Programs for Vestel Electronics, Vestel Home Appliances, Koç Sistem, Koç Digital, and Sestek; University of Maastrciht, RWTH Aachen etc.  She holds an MBA and a bachelor’s degree in Political Science and International Relations and speaks English, French, and Turkish.", linkedin: "https://www.linkedin.com/in/sunaakbayir/", twitter: "", domain: "Gold", location: "Belgium"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Belgium.png"
    },
    { name: "Agustín Cardenas Fernandez", img: "https://www.fiware.org/wp-content/directories/people/images/200px/agustin-cardenas-fernandez.jpg", position: "Director of Company Business Transformation", company: "Telefonica S.A.", "company-link": "https://www.telefonica.com/en/",
    content: "", linkedin: "https://www.linkedin.com/in/agucardenas/", twitter: "https://twitter.com/agucardenas", domain: "Platinum", location: "Spain"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png"
    },
    { name: "Rui Costa", img: "https://www.fiware.org/wp-content/directories/people/images/200px/rui-costa.jpg", position: "Chief Executive Officer", company: "Ubiwhere", "company-link": "https://www.ubiwhere.com/",
    content: "", linkedin: "https://www.linkedin.com/in/ruiarnaldo/", twitter: "", domain: "Gold", location: "Portugal"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Portugal.png"
    },
    { name: "Angelo Giuliana", img: "https://www.fiware.org/wp-content/directories/people/images/200px/angelo-giuliana.jpg", position: "General Manager", company: "MedITech", "company-link": "https://meditech4.com/",
    content: "Angelo Giuliana has many years of experience in commercial development and sales in IT companies of international scope, where he has held increasing managerial roles up to dealing with EMEA sales management. Giuliana has long-term experience in R&amp;D, has been a consultant to the European Commission for H2020 projects, and has been involved in innovation for some time. His vocation for technology transfer leads him to be a founding member of some innovative startups both in the ICT and manufacturing sectors. Angelo currently plays the role of General Manager of the MISE Competence Center for South Italy – Meditech. He graduated with a degree in Physics in 1982.", linkedin: "https://www.linkedin.com/in/angelogiuliana/", twitter: "https://twitter.com/dirgenmeditech", domain: "Gold", location: "Italy"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png"
    },
    { name: "Antonio Jara", img: "https://www.fiware.org/wp-content/directories/people/images/200px/antonio-jara.jpg", position: "Chief Scientific Officer", company: "Libelium", "company-link": "https://www.libelium.com/",
    content: "", linkedin: "https://www.linkedin.com/in/jara-libelium/", twitter: "https://twitter.com/antonio_jara", domain: "Gold", location: "Spain"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png"
    },
    { name: "Abdulmajeed Mangara", img: "https://www.fiware.org/wp-content/directories/people/images/200px/abdulmajeed-mangara.jpg", position: "Smart City Program Director", company: "Madinah Region Development Authority", "company-link": "https://www.mda.gov.sa/",
    content: "Eng. Abdulmajeed Mangara, is the Smart City Program Director at Madinah Region Development Authority in Saudi Arabia. He pioneers the development of a comprehensive approach to transform Madinah into one of a leading smart city worldwide, while focusing on its religious and cultural identity. The approach he designed for Madinah consists of three strategic tracks: the smart city framework and strategy, the city innovation labs, and the smart city platform. Under his leadership, Madinah is among the first Saudi cities to develop a cohesive smart city strategy that aspires to transform Madinah into the most tranquil smart city in the world. The strategy includes six priority sectors for Madinah. He established Madinah Innovation Labs as the sandbox to develop Madinah’s solutions to address its pan-city or area-based challenges. Moreover, he led the team of experts to design, develop, and implement Raseel Platform in Madinah as the first smart city platform in Saudi Arabia.", linkedin: "https://www.linkedin.com/in/abdulmajeedsaud/", twitter: "", domain: "Platinum", location: "Saudi Arabia"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_SaudiArabia.png"
    },
    { name: "Yasunori Mochizuki", img: "https://www.fiware.org/wp-content/directories/people/images/200px/yasunori-mochizuki.jpg", position: "NEC Fellow", company: "NEC Corporation", "company-link": "https://www.nec.com/",
    content: "Yasunori joined NEC in 1987, straight after concluding his PhD in Electronics Engineering. He went on to spend over two decades at NEC’s corporate R&amp;D center, first as a research scientist and later as a department manager, gaining broader technical expertise, including solid-state physics, semiconductor devices/LSIs, and computer science. Later in 2013, Yasunori started working at NEC’s newly-created Business Innovation Unit. As a senior vice president, he was responsible for the corporate-wide technology strategy and IoT business strategy. His current title of NEC Fellow means that he actively participates in innovation policy proposals, global ecosystem building related to smart society, and digital transformation. He is also a BoD member of FIWARE Foundation, World Economic Forum. Fellow, and member of Business at OECD (BIAC) Committee for Digital Economy Policy.", linkedin: "https://www.linkedin.com/in/yasunori-mochizuki-93bab674/", twitter: "https://twitter.com/yasunorimochiz", domain: "Platinum", location: "Japan"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Japan.png"
    }
];