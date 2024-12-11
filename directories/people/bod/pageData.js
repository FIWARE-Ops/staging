var companies = [
        'ADDIX',
        'Atos',
        'Ficodes',
        'Hopu – Libelium',
        'Madinah Region Development Authority',
        'MedITech',
        'NEC',
        'Secmotic',
]; var departments = [
]; var domains = [
        'Gold',
        'Platinum',
]; var titles = [
        'CEO',
        'Co-Founder',
        'CSO',
        'CTO',
        'Director',
        'Fellow',
        'General Manager',
        'Managing Director',
        'VP',
]; var countries = [
        'France',
        'Germany',
        'Italy',
        'Japan',
        'Saudi Arabia',
        'Spain',
]; var modalData = [
    { name: "José Benitez", img: "https://www.fiware.org/wp-content/directories/people/images/200px/jose-benitez.jpg", position: "Co-Founder &amp; Chief Executive Officer", company: "Secmotic", "company-link": "https://secmotic.com/",
    content: "Jose has been Secmotic’s CEO since 2014 and founder of FIWOO, a smart city platform based on FIWARE, created in 2021. He has been a member of the FIWARE Board of Directors since 2018, being keen at any moment in time to represent the vision of SMEs and their interests. Jose is a vibrant and active player in the FIWARE Community and is deeply motivated bringing in cutting edge innovation technologies. As a Telecommunications Engineer, he is continuously investigating what’s happening in the space of data acquisition through wireless communications such as 5G, LoRA, WiFi, LTE, among others.", linkedin: "https://www.linkedin.com/in/jose-benitez-secmotic", twitter: "https://twitter.com/josesecmotic", domain: "Gold", location: "Spain"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png"
    { name: "Francisco de la Vega", img: "https://www.fiware.org/wp-content/directories/people/images/200px/francisco-de-la-vega.jpg", position: "Chief Technology Officer", company: "Ficodes", "company-link": "https://www.ficodes.com/en/",
    content: "Francisco de la Vega (male) is co-founder and CTO of the spanish startup FICODES as well as FIWARE architect. Francisco held a Master of Science in Computer Science from Universidad Politécnica de Madrid in 2015. Currently, he is making his Ph.D. in Computer Science in Universidad Politécnica de Madrid focusing on digital service management and monetization, automated revenue sharing, and value chain aggregation. As a researcher of the Computer Networks and Web Technologies Laboratory (CoNWeT Lab.) of UPM, he was engaged in several EU projects around the FIWARE platform starting in 2012, including FI-WARE and FI-CORE. Later, as CTO of FICODES he has been involved in multiple projects as FIWARE Architect, with a special focus in logistics, Smart Port and Smart City platforms. He has been actively participating on the FIWARE Community initially as the FIWARE Business Framework GEs owner (Store, Marketplace, Repository, and Revenue Settlement and Sharing system), and later as the FIWARE/TMF Business API Ecosystem GE owner, which integrates the aforementioned GEs with standard TMForum technologies. He is a member of the Data/API Management, Publication and Monetization FIWARE’s Technical Steering Committee.", linkedin: "https://www.linkedin.com/in/fdelavegagarcia", twitter: "https://twitter.com/frandlvega", domain: "", location: "Spain"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png"
    { name: "Angelo Giuliana", img: "https://www.fiware.org/wp-content/directories/people/images/200px/angelo-giuliana.jpg", position: "General Manager", company: "MedITech", "company-link": "https://meditech4.com/",
    content: "Angelo Giuliana has many years of experience in commercial development and sales in IT companies of international scope, where he has held increasing managerial roles up to dealing with EMEA sales management. Giuliana has long-term experience in R&amp;D, has been a consultant to the European Commission for H2020 projects, and has been involved in innovation for some time. His vocation for technology transfer leads him to be a founding member of some innovative startups both in the ICT and manufacturing sectors. Angelo currently plays the role of General Manager of the MISE Competence Center for South Italy – Meditech. He graduated with a degree in Physics in 1982.", linkedin: "https://www.linkedin.com/in/angelogiuliana/", twitter: "https://twitter.com/dirgenmeditech", domain: "Gold", location: "Italy"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png"
    { name: "Antonio Jara", img: "https://www.fiware.org/wp-content/directories/people/images/200px/antonio-jara.jpg", position: "Chief Scientific Officer", company: "Hopu – Libelium", "company-link": "https://hopu.eu/",
    content: "Antonio has a PhD from the University of Murcia (Spain) and a MBA from the ENAE business school and UCAM (2012). He has received entrepreneurship awards from ENAE, emprendeGo, IPSO Alliance Award for its disruptive innovation in the IoT. As part of HOP Ubiquitous, Jara is focused on the Smart Cities market with solutions for citizens engagements, tourism, active participation, physical web and environmental monitoring (air quality sensors) in projects such as ENIAC SAFESENS, interoperability / pilots (SmartSDK, Synchronicity, Organicity, BeinCPPS) and also in several actions related to security/privacy (INPUT and FORTIKA).", linkedin: "https://www.linkedin.com/in/jara-libelium/", twitter: "https://twitter.com/antonio_jara", domain: "Gold", location: "Spain"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png"
    { name: "Abdulmajeed Mangara", img: "https://www.fiware.org/wp-content/directories/people/images/200px/abdulmajeed-mangara.jpg", position: "Smart City Program Director", company: "Madinah Region Development Authority", "company-link": "https://www.mda.gov.sa/",
    content: "Eng. Abdulmajeed Mangara, is the Smart City Program Director at Madinah Region Development Authority in Saudi Arabia. He pioneers the development of a comprehensive approach to transform Madinah into one of a leading smart city worldwide, while focusing on its religious and cultural identity. The approach he designed for Madinah consists of three strategic tracks: the smart city framework and strategy, the city innovation labs, and the smart city platform. Under his leadership, Madinah is among the first Saudi cities to develop a cohesive smart city strategy that aspires to transform Madinah into the most tranquil smart city in the world. The strategy includes six priority sectors for Madinah. He established Madinah Innovation Labs as the sandbox to develop Madinah’s solutions to address its pan-city or area-based challenges. Moreover, he led the team of experts to design, develop, and implement Raseel Platform in Madinah as the first smart city platform in Saudi Arabia.", linkedin: "https://www.linkedin.com/in/abdulmajeedsaud/", twitter: "", domain: "Platinum", location: "Saudi Arabia"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_SaudiArabia.png"
    { name: "Pierryl Massal", img: "https://www.fiware.org/wp-content/directories/people/images/200px/pierryl-massal.jpg", position: "VP Head of Business development", company: "Atos", "company-link": "https://atos.net/en/",
    content: "Pierryl Massal is Vice President, Head of Global Business development at Atos, a global IT company empowering and driving progress through digital innovation to create a livable and efficient future for the citizens. In this role, Pierryl oversees Atos’ relations and operations especially in the Smart City field enabling Atos to capitalize on opportunities across all industries, including Public Sector, Hospitality, Retail, …. Pierryl has been instrumental in providing central leadership to explore, develop and recommend approaches for sustainable business growth in that domain and manage strategic and brand-promotional partnership opportunities, representation at industry events and government/legislative relations.", linkedin: "https://www.linkedin.com/in/pierryl-massal-8939aa74/", twitter: "https://twitter.com/pierrylmassal", domain: "Platinum", location: "France"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png"
    { name: "Yasunori Mochizuki", img: "https://www.fiware.org/wp-content/directories/people/images/200px/yasunori-mochizuki.jpg", position: "NEC Fellow", company: "NEC Corporation", "company-link": "https://www.nec.com/",
    content: "Yasunori joined NEC in 1987, straight after concluding his PhD in Electronics Engineering. He went on to spend over two decades at NEC’s corporate R&amp;D center, first as a research scientist and later as a department manager, gaining broader technical expertise, including solid-state physics, semiconductor devices/LSIs, and computer science. Later in 2013, Yasunori started working at NEC’s newly-created Business Innovation Unit. As a senior vice president, he was responsible for the corporate-wide technology strategy and IoT business strategy. His current title of NEC Fellow means that he actively participates in innovation policy proposals, global ecosystem building related to smart society, and digital transformation. He is also a BoD member of FIWARE Foundation, World Economic Forum. Fellow, and member of Business at OECD (BIAC) Committee for Digital Economy Policy.", linkedin: "https://www.linkedin.com/in/yasunori-mochizuki-93bab674/", twitter: "https://twitter.com/yasunorimochiz", domain: "Platinum", location: "Japan"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Japan.png"
    { name: "Björn Schwarze", img: "https://www.fiware.org/wp-content/directories/people/images/200px/bjorn-schwarze.jpg", position: "Managing Director", company: "ADDIX", "company-link": "https://www.addix.net/",
    content: "", linkedin: "https://www.linkedin.com/in/bjoernschw/", twitter: "", domain: "Gold", location: "Germany"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png"
];