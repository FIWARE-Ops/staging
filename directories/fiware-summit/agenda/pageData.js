var tracks = [
        'AI &amp; Data-Driven Urban Mngmt',
        'Grand Opening',
        'Organization',
        'Secure Smart City',
        'Smart Governance &amp; Digital PA',
        'Sustainable Smart City',
        'Tech &amp; Trends',
];
var summitDates = [
        '22-may',
        '23-may',
];
var sessions = [
]; 
var speakers = [
        'Alberto Abella',
        'Martin Bauer',
        'Anna Beyer',
        'Chandra Challagonda',
        'Stefano De Panfilis',
        'Juanjo Hierro',
        'Francisco Meléndez',
        'Joaquín Salvachúa',
        'Tonia Sapia',
]; 
var modalData = {
    "chandra-challagonda":
        { name: "Chandra Challagonda", img: "https://www.fiware.org/wp-content/directories/people/images/200px/chandra-challagonda.jpg", position: "Chief Executive Officer", company: "FIWARE Foundation", "company-link": "https://www.fiware.org/",
        content: "Chandra Challagonda has 26 years of experience in the technology industry, focusing on Machine Learning, Artificial Intelligence, and open-source technologies. Recognized as a business transformer, he emphasizes innovation and customer-centric strategies in executive roles such as Co-Founder, Board Member, CEO, and CTO. Over the last year, Chandra was working as a FIWARE community and board member, architect and Vice President, growing its global network and ecosystem and helping to develop sustainable strategies and partnerships in the organisation.", linkedin: "https://linkedin.com/in/challagonda", twitter: "https://twitter.com/challagonda", domain: "", location: "",
        flag: "", },
    "anna-beyer":
        { name: "Anna Beyer", img: "https://www.fiware.org/wp-content/directories/people/images/200px/anna-katharina-beyer.jpg", position: "Project Manager", company: "FIWARE Foundation", "company-link": "https://www.fiware.org/",
        content: "Anna is an urbanist with a background in business administration and an experienced forensic expert in the field of Austrian white-collar crime. She has more than 10 years of experience in (international) project management as well as in the conception and facilitation of ideation processes in national and international contexts. Her passion lies in sustainable spaces, combining innovation, technology and a human angle to foster a just and resilient handling of resources.", linkedin: "https://www.linkedin.com/in/anna-katharina-beyer-01aa09106/", twitter: "https://twitter.com/annachronismus1", domain: "", location: "",
        flag: "", },
    "stefano-de-panfilis":
        { name: "Stefano De Panfilis", img: "https://www.fiware.org/wp-content/directories/people/images/200px/stefano-depanfilis.jpg", position: "Chief Operations Officer", company: "FIWARE Foundation", "company-link": "https://www.fiware.org/",
        content: "Stefano de Panfilis (m) is the Chief Operating Officer at FIWARE Foundation. He graduated cum laude in Mathematics at the University of Rome “La Sapienza”. In 1984, he was hired in Engineering Ingegneria Informatica S.P.A as a software engineer. In 1986, he became Project Manager to then move to the R&amp;D department managing the “Formal Methods” unit. In 1993, he supported Engineering to receive the ISO-9001 compliancy. From 1994, he was involved in European R&amp;D. He coordinated SeCSE (IST 6FP), aiming at implement a platform for Service-Centric Systems Engineering, CBSEnet (IST-5FP NoE), CLARiFi (IST 5FP), DOOR (ESPRIT 4FP), SQUAD (INCO-DC), and VALSE (TV&amp;TT) projects, and the ENG- SODEPRO, DECO’ and DOMINARE ESSI Process Improvement Experiments. He also coordinated QualiPSo (IST 6FP) aiming at leverage Open Source Software development to recognised industrial standards, leading a consortium of 20 partners from Europe, Brazil and China. He actively participated to create and set-up the NESSI ETP of which he is the Coordinator of the Strategic Research Agenda Committee. Since 2017, he is employed by FIWARE Foundation as Chief Operations Officer.", linkedin: "https://www.linkedin.com/in/stefano-de-panfilis-1928a11/", twitter: "https://twitter.com/depa01", domain: "", location: "",
        flag: "", },
    "juanjo-hierro":
        { name: "Juanjo Hierro", img: "https://www.fiware.org/wp-content/directories/people/images/200px/juanjo-hierro.jpg", position: "Chairman FIWARE TSC", company: "", "company-link": "",
        content: "Juanjo Hierro (m) obtained a degree in Computer Science in 1990 from the Universidad Politecnica de Madrid (UPM) and owns a certificate of research proficiency. In 1990, Juanjo joined Telefónica I+D where he stayed until he joined FIWARE Foundation. During his career at Telefónica, Juanjo had different management responsibilities in the development of mission-critical systems for Telefónica as well as several R&amp;D projects. In April 2011, he became the Chief Architect of the FIWARE programme combining this role with the one of the CTO of the IoT Division at Telefónica R&amp;D since November 2013. Now a days Juanjo is the Chairman of the FIWARE Technical Steering Committee.", linkedin: "https://www.linkedin.com/in/jhierro/", twitter: "https://twitter.com/JuanjoHierro", domain: "", location: "",
        flag: "", },
    "martin-bauer":
        { name: "Martin Bauer", img: "https://www.fiware.org/wp-content/directories/people/images/200px/martin-bauer.jpg", position: "Senior Researcher", company: "NEC Lab Europe", "company-link": "https://www.neclab.eu/",
        content: "", linkedin: "https://www.linkedin.com/in/martin-bauer-a722141/", twitter: "", domain: "", location: "",
        flag: "", },
    "francisco-meléndez":
        { name: "Francisco Meléndez", img: "https://www.fiware.org/wp-content/directories/people/images/200px/francisco-melendez.jpg", position: "Technical Expert &amp; Evangelist", company: "FIWARE Foundation", "company-link": "https://www.fiware.org/",
        content: "Francisco Melendez (m) is a Telecommunications &amp; Robotics Engineer and is FIWARE’s Technical Expert in Robotics, Automation and Industry 4.0. He is also one of the representatives of FIWARE in the Digital Twin Consortium and some international projects where FIWARE is developing its technical roadmap in robotics and automation. As a mobile robotics engineer and researcher with more than 8 years of experience in web-enabled robot applications, his work is currently focused on the development of convenient interfaces between cyber physical systems and digital twins in FIWARE-based solutions.", linkedin: "https://www.linkedin.com/in/franmelfer/", twitter: "", domain: "", location: "",
        flag: "", },
    "joaquín-salvachúa":
        { name: "Joaquín Salvachúa", img: "https://www.fiware.org/wp-content/directories/people/images/200px/joaquin-salvachua.jpg", position: "Professor", company: "UPM", "company-link": "https://www.upm.es/internacional",
        content: "Prof. Joaquín Salvachúa received a master degree in Computer Science. He holds the Orange Chair for the “Science of Complex Networks” and the Kairos Chair on “Bank Middleware and Blockchain” at UPM and is a member of the UPM-ING and CyberAula groups. He has participated in several European research projects with several publications at international magazines, books and conferences. (https://orcid.org/0000-0002-7269-8079). Also have participated in several standardization activities, including been coauthor one RFC ( RFC 8802 ).His research focuses today on WebRTC, Cloud infrastructure, social graphs and recommendation, agile cloud infrastructures, P2P, DHT (Distributed HashTables), IOT, Non SQL Data Bases, Big data processing architectures, Identity Management and BlockChain distributed agreement algorithms.His teaching duties includes cloud computing, distributed application development, Databases, Web Full-stack development, Blockchain architecture, Data Engineering and Big data architecture and applications. Has been involved in the FIWARE Initiative since it started (2010) and he is architect and developer of several GE related to security, data persistence and Big Data analysis.", linkedin: "https://es.linkedin.com/in/jsalvachua", twitter: "https://twitter.com/jsalvachua", domain: "", location: "",
        flag: "", },
    "tonia-sapia":
        { name: "Tonia Sapia", img: "https://www.fiware.org/wp-content/directories/people/images/200px/tonia-sapia.jpg", position: "Leader of Strategic Programs", company: "FIWARE Foundation", "company-link": "https://www.fiware.org/",
        content: "Tonia (f) holds a PhD in Intercultural Sociology from 2010-2013. With more than 10 years of Experiences, Tonia comes with a profound expertise in working as a commercial coach and evaluator in European projects like frontierCities (2014-2016) and frontierCities2 (2016-2018) FIWARE Accelerator programme. She joined FIWARE Foundation in 2018 as a project manager for European projects with a strong focus on “Connecting Europe Facility (CEF)”. Since then, she has extended her responsibilities to several highly strategic projects to position and grow FIWARE Foundation in the academic as well as in the Accelerators/VC world through her additional role as a Marketing Manager. Projects include a FIWARE University Programme for students and professors, the foundation of the FIWARE Scientific Advisory Board, publication of FIWARE Impact Stories and Open Calls matching for SMEs and Startups and a new programme around Reference Marketing. Her involvement with European projects has been extended ever since, including Open Data under the umbrella of CEF grants, CEFAT4Cities (eGov and Smart Cities domains), ODALA (Smart Cities and Open Data), INTERSTAT (Public Administrations and Open Data), and since October 2020, as project manager, to i4Trust, specifically for the DIH engagement and community building (DIH Ambassador Programme), SPOTTED, focus on Earth Observation and Satellite Data, GreenMov, more related to smart Mobility and Smart Cities, Enershare, focused on Smart Solutions for Smart Energy domain. She regularly contributes to the writing of proposals to the European Commission.", linkedin: "https://www.linkedin.com/in/tonia-sapia-a171bb63/", twitter: "", domain: "", location: "",
        flag: "", },
    "alberto-abella":
        { name: "Alberto Abella", img: "https://www.fiware.org/wp-content/directories/people/images/200px/alberto-abella.jpg", position: "Chief Operations Officer", company: "FIWARE Foundation", "company-link": "https://www.fiware.org/",
        content: "Alberto Abella (m) is PhD in Business (Open data) and Telecommunications Engineer and Master in Total Quality Management, Business Administration and Business Organization. He works as a Data Modelling Expert and Technical Evangelist at FIWARE and currently is the responsible person for the smart data models initiative.", linkedin: "https://www.linkedin.com/in/albertoabella/", twitter: "https://twitter.com/aabella", domain: "", location: "",
        flag: "", },
};