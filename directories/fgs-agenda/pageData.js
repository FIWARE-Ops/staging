var tracks = [
        'Hands-On Use Cases',
        'Innovation with FIWARE',
        'Tech &amp; Trends',
];
var summitDates = [
        'september-18',
        'september-19',
];
var sessions = [
        'Data Space Technology',
        'Digital Twins',
        'FISAB &amp; Universities',
        'Innovation projects on data interoperability',
        'Innovation projects on data platforms and Data Spaces',
        'Innovation projects on green and industry digital twins',
        'Smart Communities &amp; Mobility',
        'Smart Energy',
]; 
var speakers = [
        'Alberto Abella',
        'Andrea Maioli',
        'Antonella Longo',
        'Antonello Monti',
        'Antonio Filograna',
        'Antonio Jara',
        'Carmen Polcaro',
        'Davor Meersman',
        'Francesco Mureddu',
        'Franck Le Gall',
        'Gaetano Volpe',
        'Giovanni Vaglica',
        'Ifat Tariq',
        'Ilaria Bortone',
        'Jesús Ruiz Martinez',
        'Joan Antonio Bernejo',
        'Joaquín Salvachúa',
        'Jorge Hernandez',
        'Jose Benítez',
        'Luigi Coppolino',
        'Luis Muñoz',
        'Martin Bauer',
        'Matteo Repetto',
        'Mireya de Diego',
        'Nejib Moalla',
        'Raza Jafri',
        'Roberto Di Bernardo',
        'Sebastian Blechmann',
        'Sophie Meszaros',
        'Tomohiro Kuwahara',
]; 
var modalData = {
    "roberto-di-bernardo":
        { name: "Roberto Di Bernardo", img: "https://www.fiware.org/wp-content/directories/people/images/200px/roberto-di-bernardo.jpg", position: "Head of Open Government R&amp;D Unit", company: "Engineering", "company-link": "https://www.eng.it/en/",
        content: "Roberto Di Bernardo is Senior Researcher and Head of the Open Government R&amp;D Group (part of Open Public Service Innovation Lab). He is an Electronic Engineer with Professional Master’s diplomas in “Clinical Engineering” and in “Internet Software Engineering”. He has been working as researcher at Engineering R&amp;D Laboratory since 2004, being involved in management and technical activities in many Italian and European projects. He is also acting as R&amp;D opportunity and network developer for the entire Public Sector R&amp;D area. At the moment, he is coordinating URBANAGE project (H2020-DT-Transforations-02) and his group is leading/involved in, among others, the following projects: DECIDO (H2020-DT-Governance-12), INTERSTAT (CEF-Public Open Data), SPOTTED (CEF-Public Open Data), ACROSS (H2020-DT-Governance-05), URBANITE (H2020-DT-Transformations-02). Currently he is leading the Smart Governance and Smart Cities sub-group of the Big Data Value Association and co-leading the Smart Cities Domain Committee of the FIWARE Foundation and the Digital Water Systems Working Group of Water Europe.", linkedin: "https://www.linkedin.com/in/robertodibernardo/", twitter: "", domain: "", location: "",
        flag: "", },
    "antonio-jara":
        { name: "Antonio Jara", img: "https://www.fiware.org/wp-content/directories/people/images/200px/antonio-jara.jpg", position: "General Manager Smart Cities", company: "Libelium", "company-link": "https://www.libelium.com/",
        content: "Antonio has a PhD from the University of Murcia (Spain) and a MBA from the ENAE business school and UCAM (2012). He has received entrepreneurship awards from ENAE, emprendeGo, IPSO Alliance Award for its disruptive innovation in the IoT. As part of HOP Ubiquitous, Jara is focused on the Smart Cities market with solutions for citizens engagements, tourism, active participation, physical web and environmental monitoring (air quality sensors) in projects such as ENIAC SAFESENS, interoperability / pilots (SmartSDK, Synchronicity, Organicity, BeinCPPS) and also in several actions related to security/privacy (INPUT and FORTIKA).", linkedin: "https://www.linkedin.com/in/jara-libelium/", twitter: "https://twitter.com/antonio_jara", domain: "", location: "",
        flag: "", },
    "martin-bauer":
        { name: "Martin Bauer", img: "https://www.fiware.org/wp-content/directories/people/images/200px/martin-bauer.jpg", position: "Senior Researcher", company: "NEC Lab Europe", "company-link": "https://www.neclab.eu/",
        content: "", linkedin: "https://www.linkedin.com/in/martin-bauer-a722141/", twitter: "", domain: "", location: "",
        flag: "", },
    "antonio-filograna":
        { name: "Antonio Filograna", img: "https://www.fiware.org/wp-content/directories/people/images/200px/antonio-filograna.jpg", position: "Researcher", company: "Engineering", "company-link": "https://www.eng.it/en/",
        content: "Antonio is an expert in ICTs with special skills in areas like Open &amp; eGovernment, Social Innovation, Smart City, Data Protection and Privacy-preserving technologies, Cloud Computing, Architectural Design, Policy making. He has been involved in several European and Italian research projects dealing with several domains (public service for PA, smart mobility, smart environment, energy, FIWARE architecture) as project manager, technical designer, work package and task leader. At present, he is the Project Coordinator of DECIDO project (H202-SC6-GOVERNANCE-2020), he is also involved in SPOTTED project (CEF-TC-2020-2 Public Open Data; 2021-2024) as project leader and REBUILD project (H2020-DT-MIGRATION-06-2108 – Grant 822215) as work package leader.", linkedin: "https://www.linkedin.com/in/antoniofilograna/", twitter: "https://twitter.com/afilograna", domain: "", location: "",
        flag: "", },
    "sebastian-blechmann":
        { name: "Sebastian Blechmann", img: "https://www.fiware.org/wp-content/directories/people/images/200px/sebastian-blechmann.jpg", position: "Research Associate", company: "RWTH Aachen University", "company-link": "https://www.rwth-aachen.de/",
        content: "Sebastian Blechmann is working as research associate at the Institute for Energy Efficient Buildings and Indoor Climate in the E.ON Energy Research Center of the RWTH Aachen University. He is member of a research group targeting digital energy neighborhoods and specializes in semantic interoperability and efficient data utilization. In his research, he applies FIWARE to handle data from building energy systems, structure them semantically and apply control algorithms to control various test facilities. Thereby, he focuses on control and knowledge representation in heating, ventilation and air conditioning systems. In his presentation, he will talk about his past and present developments in the building energy sector using FIWARE.", linkedin: "https://www.linkedin.com/in/sebastian-blechmann-a2b19a119/", twitter: "", domain: "", location: "",
        flag: "", },
    "franck-le-gall":
        { name: "Franck Le Gall", img: "https://www.fiware.org/wp-content/directories/people/images/200px/franck-le-gall.jpg", position: "Chief Executive Officer", company: "Easy Global Market", "company-link": "https://www.egm.io/en/egm-the-innovation-factory",
        content: "Franck Le Gall is CEO at Easy Global Market, an innovative SME focused on integration and validation of emerging technologies. He is driving company development to deploy IoT and data technologies over vertical markets (water, agriculture, smart territories, environment, etc.). He involves himself in the standardization area including ETSI where he is co-chairman of the ETSI ISG-CIM working group on NGSI-LD. He is also chairing the interfaces working group of the FIWARE Technical Steering Committee (TSC) as well as the joint ETSI-FIWARE Foundation working group on Digital Twins. Finally, he is the Co-chair of the Smart Water working group of the ICT4Water European research cluster. He continuously contributes and drives several projects for public and private customers.", linkedin: "https://www.linkedin.com/in/francklegall/", twitter: "https://twitter.com/franck_le_gall", domain: "", location: "",
        flag: "", },
    "gaetano-volpe":
        { name: "Gaetano Volpe", img: "https://www.fiware.org/wp-content/directories/people/images/200px/gaetano-volpe.jpg", position: "Chief Executive Officer", company: "Latitudo 40", "company-link": "https://www.latitudo40.com/",
        content: "Gaetano is the CEO of Latitudo 40, a startup that uses satellite data to improve life on our planet. After working for over 20 years in space-related companies, launching new products and services based on the integration of IT with space technologies (telecommunications, navigation and remote sensing), he decided to combine his passion for space technologies with the need to improve the environmental impact of our cities. For Gaetano, innovation means finding a new solution to a global market problem.", linkedin: "https://www.linkedin.com/in/gaetanovolpe", twitter: "", domain: "", location: "",
        flag: "", },
    "alberto-abella":
        { name: "Alberto Abella", img: "https://www.fiware.org/wp-content/directories/people/images/200px/alberto-abella.jpg", position: "Data Modeling Expert &amp; Evangelist", company: "FIWARE Foundation", "company-link": "https://www.fiware.org/",
        content: "Alberto Abella (m) is PhD in Business (Open data) and Telecommunications Engineer and Master in Total Quality Management, Business Administration and Business Organization. He works as a Data Modelling Expert and Technical Evangelist at FIWARE and currently is the responsible person for the smart data models initiative.", linkedin: "https://www.linkedin.com/in/albertoabella/", twitter: "https://twitter.com/aabella", domain: "", location: "",
        flag: "", },
    "ilaria-bortone":
        { name: "Ilaria Bortone", img: "https://www.fiware.org/wp-content/directories/people/images/200px/ilaria-bortone.png", position: "Program Manager", company: "Meditech 4.0", "company-link": "https://meditech4.com/",
        content: "Biomedical engineer with strong expertise overseeing and managing national and international funded research projects. She is a Senior Project Manager at Meditech 4.0 Competence Center, with a mandate on EU Partnerships. Technical Coordinator of MISTRAL (GA 101095119, doi: 10.3030/101095119), an EU-funded project aimed at developing a technological toolkit for dynamic, intelligent prediction of health-related features, forecasting the trajectories of disability and quality of life reduction. More than 10 years of experience with physiological data acquisition, logging and analysis. Her research interests focus on developing new technology-driven methods and algorithms to improve diagnosis, treatment and follow-up. Active scientific collaboration with the University of Bari Aldo Moro, the Institute of Clinical Physiology, the Polytechnic University of Bari, and Scuola Superiore Sant’Anna. Adjunct Professor in Biomechanics and Bioengineering at the School of Medicine, University of Bari, mentoring PhD students. Author and co-author of over 80 publications in International Journals and Proceedings of National and International Conferences (Scopus, H-index: 16). She has been awarded several international acknowledgements (Group Study Exchange Rotary Foundation, Startcup Puglia 2016) and prizes (Ministry of Education University and Research, Tuscany Region, Ministry of Enterprises and Made in Italy, HORIZON EUROPE). She led two nationally-funded research projects (KISS-HEALTH, 2012-15, PON04a3_00097; TELOS, 2020-24, CUP J53D23005710006).", linkedin: "https://www.linkedin.com/in/ilaria-bortone-0461a146/", twitter: "", domain: "", location: "",
        flag: "", },
    "giovanni-vaglica":
        { name: "Giovanni Vaglica", img: "https://www.fiware.org/wp-content/directories/people/images/200px/giovanni-vaglica.jpg", position: "IT Engineer", company: "JRC – EC", "company-link": "https://joint-research-centre.ec.europa.eu",
        content: "Giovanni Vaglica is an IT engineer, specialised in the development and implementation of Smart City systems and smart infrastructures. He is responsible of the technical implementation and development of the Smart City digital platform test-bed of the EC Joint Research Centre - E.3 Unit, Safety and Security of Buildings, aimed at developing and testing technologies and solutions in real-world urban environment scenarios. As the platform&#x27;s architect, he carries out research and development to develop scalable and interoperable solutions to support Smart city applications for critical infrastructures. Additionally, the integration of heterogeneous IoT sensors and wireless networks in a very secure networking environment is a key focus of his work.", linkedin: "linkedin.com/in/giovanni-vaglica-55103a197", twitter: "", domain: "", location: "",
        flag: "", },
    "mireya-de-diego":
        { name: "Mireya de Diego", img: "https://www.fiware.org/wp-content/directories/people/images/200px/mireya-de-diego.png", position: "EU Project Coordinator", company: "CARTIF", "company-link": "https://www.cartif.es/en/home/",
        content: "Mireya de Diego (f), MSc.Eng in Industrial Electronics and Automation and Degree in Telecommunications Engineering from the University of Valladolid (Spain). Since 2013, she has been a researcher in the CARTIF Industrial and Digital Systems Division, specializing in robotic, automation and process control within the agri-food manufacturing industry. In the field of process control, she has contributed to projects such as CAPRI, ECOFACT and REGENby2, driving innovation and sustainability across various industrial sectors. Currently serves as the coordinator for the ARISE project, focusing on the HRI - human-robot interaction in diverse sectors, including manufacturing, logistic and healthcare.", linkedin: "https://www.linkedin.com/in/mireya-de-diego/", twitter: "", domain: "", location: "",
        flag: "", },
    "francesco-mureddu":
        { name: "Francesco Mureddu", img: "https://www.fiware.org/wp-content/directories/people/images/200px/francesco-mureddu.jpg", position: "Director", company: "The Lisbon Council", "company-link": "https://lisboncouncil.net/",
        content: "", linkedin: "https://www.linkedin.com/in/francescomureddu/", twitter: "", domain: "", location: "",
        flag: "", },
    "jesús-ruiz-martinez":
        { name: "Jesús Ruiz Martinez", img: "https://www.fiware.org/wp-content/directories/people/images/200px/jesus-ruiz.jpg", position: "Chief Technology Officer", company: "Alastria", "company-link": "https://alastria.io/en/",
        content: "Member of the board and CTO of Alastria Blockchain Ecosystem, participates in the Technical Governance of EBSI (European Blockchain Services Infrastructure from European Commission and Member States), and in LACChain (blockchain network promoted by the Inter-American Development Bank). He inspired the Public-Permissioned model followed by those networks, where decentralized governance and SSI are critical components.", linkedin: "https://www.linkedin.com/in/jesus-ruiz-martinez/", twitter: "", domain: "", location: "",
        flag: "", },
    "antonella-longo":
        { name: "Antonella Longo", img: "https://www.fiware.org/wp-content/directories/people/images/200px/antonella-longo.jpg", position: "Professor", company: "University of Salento", "company-link": "https://sydalab.unisalento.it/en/",
        content: "Antonella Longo, is an Professor at the Department of Engineering for Innovation of the University of Salento. She received the PhD in Information Engineering in 2004. She teaches Data Management and Big data management at the school of Engineering. Her research interests deal with information systems and databases, service-oriented architectures design for cloud infrastructure, technology-enhanced learning and citizen science. Her current research activity focuses on big data management and investigation of cloud architectures integration with edge computing in cyber-physical social systems. She is currently involved in a number of projects for developing data spaces for digital twins of cities and energy systems. On these topics, she has published more than 100 papers in peer-reviewed journals and international conference proceedings. She coordinate the SyDA – Lab at University of Salento.", linkedin: "https://www.linkedin.com/in/antonellalongo", twitter: "", domain: "", location: "",
        flag: "", },
    "nejib-moalla":
        { name: "Nejib Moalla", img: "https://www.fiware.org/wp-content/directories/people/images/200px/nejib-moalla.jpg", position: "Professor", company: "Université Lumière Lyon 2", "company-link": "https://welcome.univ-lyon2.fr/",
        content: "Prof. Nejib Moalla, received a master degree in Computer Science. He finished his Ph.D. thesis in 2007 and hisnhabilitation in 2015. He held the responsibility of the project management department between 2008 and 2012. His research activities deal with software and data engineering to support digital transformation with finalised solutionsin Manufacturing, Healthcare, Smart Farming, etc. In software engineering, the developed research concepts and solutions cover: software quality, service-oriented architectures, microservice architecture, performance-based service reuse, service personalisation, ontology engineering, knowledge management, decision support, etc. In data engineering, the research activities cover: the application of data-driven artificial intelligence technics (Machine Learning, etc.) to support decision-making processes in a digital twin perspective. Nejib Moalla is in charge of the DIH ICT4Manuf. As a project manager, he coordinates regional industrial projects and continues to be involved in different collaborative and international projects: H2020 DIH4CPS (2020-2022), EPlus ENHANCE (2021-2024, Coordinator), EPlus TETRIS (2021-2024), H2020 vf-OS (2017-2019), FIPPP FP7 FITMAN (2013-2015), etc. He is a member of several international program committees (IPC) of international journals and conferences.", linkedin: "https://www.linkedin.com/in/n%C3%A9jib-moalla-7b846513/", twitter: "https://twitter.com/nejib_moalla", domain: "", location: "",
        flag: "", },
    "antonello-monti":
        { name: "Antonello Monti", img: "https://www.fiware.org/wp-content/directories/people/images/200px/antonello-monti.jpg", position: "Professor &amp; Institute Director", company: "RWTH Aachen University", "company-link": "https://www.rwth-aachen.de/go/id/a/?lidx&#x3D;1",
        content: "Prof. Antonello Monti received his M.Sc degree (summa cum laude) and his PhD in Electrical Engineering from Politecnico di Milano, Italy in 1989 and 1994 respectively. He started his career in Ansaldo Industria and then moved in 1995 to Politecnico di Milano as Assistant Professor. In 2000 he joined the Department of Electrical Engineering of the University of South Carolina (USA) as Associate and then Professor. Since 2008 he is the director of the Institute for Automation of Complex Power System within the E.ON Energy Research Center at RWTH Aachen University. From 2019 he holds a double appointment with Fraunhofer FIT where he is developing the new Center for Digital Energy in Aachen. Prof. Monti is author or coauthor of more than 400 peer-reviewed papers published in international Journals and in the proceedings of International conferences. He is a Senior Member of IEEE, Associate Editor of the IEEE System Journal, Associate Editor of IEEE Electrification Magazine, Member of the Editorial Board of the Elsevier Journal SEGAN and member of the founding board of the Springer Journal “Energy Informatics”. Dr. Monti was the recipient of the 2017 IEEE Innovation in Societal Infrastructure Award.", linkedin: "https://www.linkedin.com/in/antonellomonti/", twitter: "", domain: "", location: "",
        flag: "", },
    "luis-muñoz":
        { name: "Luis Muñoz", img: "https://www.fiware.org/wp-content/directories/people/images/200px/luis-munoz.jpg", position: "Professor", company: "University of Cantabria", "company-link": "https://web.unican.es/en/Pages/default.aspx",
        content: "Prof. Luis Muñoz received both the Telecommunications Engineering degree and Ph.D. from the Polytechnical University of Cataluña (UPC), Spain. He also holds a Master in Mathematics, Statistic and Operation Research (Licenciado en Ciencias Matemáticas, UNED). His research focuses on advanced data transmission techniques, heterogeneous wireless multihop networks, Internet o Things, technologies and services in the context of smart cities and applied mathematical methods for telecommunications. He has participated in several National and European research projects belonging to the 4th, 5th, 6th and 7th and H2020 Framework Program in which he was technical manager of SmartSantander. He has published over 150 journal and conference papers. He serves as editor of several journals and he has been invited to participate in the Steering Committee and Technical Program Committee of the most relevant international conferences. In parallel to this activity, he serves as consultant for the Spanish Government as well as for different companies in Europe. Last but not least, he has served as an expert of the ETSI and European Commission.", linkedin: "", twitter: "", domain: "", location: "",
        flag: "", },
    "matteo-repetto":
        { name: "Matteo Repetto", img: "https://www.fiware.org/wp-content/directories/people/images/200px/matteo-repetto.png", position: "Senior Researcher", company: "CNR / IMATI", "company-link": "https://www.imati.cnr.it/make_home_page.php?language&#x3D;ENG&amp;view&#x3D;GEN",
        content: "Matteo Repetto, Ph.D., received the Ph.D. degree in Electronics and Computer Science in 2004 from the University of Genoa. From 2004 to 2009 he was a postdoc at University of Genoa. From 2010 to 2019 he was a Research Associate at CNIT. In 2019 he joined the Institute for Applied Mathematics and Information Technologies (IMATI), CNR, where he currently holds a Senior Researcher position. He has been teaching many courses in telecommunication networks and network security. He has been involved in several research national and international projects on quality of service, mobility in data networks, energy efficiency, cloud computing, and network function virtualization. He was the scientific and technical coordinator of the ASTRID and GUARD projects, and he is now the coordinator of the MIRANDA project. He has co-authored over 90 scientific publications in international journals and conference proceedings, and 1 technical report for ITU. His current research interests include security architectures, interfaces to remote security functions, network security, threat hunting, management and security of digital service chains.", linkedin: "https://www.linkedin.com/in/matteo-repetto-1b00134/", twitter: "", domain: "", location: "",
        flag: "", },
    "joaquín-salvachúa":
        { name: "Joaquín Salvachúa", img: "https://www.fiware.org/wp-content/directories/people/images/200px/joaquin-salvachua.jpg", position: "Professor", company: "Polytechnic University of Madrid", "company-link": "https://www.upm.es/internacional",
        content: "Prof. Joaquín Salvachúa received a master degree in Computer Science. He holds the Orange Chair for the “Science of Complex Networks” and the Kairos Chair on “Bank Middleware and Blockchain” at UPM and is a member of the UPM-ING and CyberAula groups. He has participated in several European research projects with several publications at international magazines, books and conferences. (https://orcid.org/0000-0002-7269-8079). Also have participated in several standardization activities, including been coauthor one RFC ( RFC 8802 ).His research focuses today on WebRTC, Cloud infrastructure, social graphs and recommendation, agile cloud infrastructures, P2P, DHT (Distributed HashTables), IOT, Non SQL Data Bases, Big data processing architectures, Identity Management and BlockChain distributed agreement algorithms.His teaching duties includes cloud computing, distributed application development, Databases, Web Full-stack development, Blockchain architecture, Data Engineering and Big data architecture and applications. Has been involved in the FIWARE Initiative since it started (2010) and he is architect and developer of several GE related to security, data persistence and Big Data analysis.", linkedin: "https://es.linkedin.com/in/jsalvachua", twitter: "https://twitter.com/jsalvachua", domain: "", location: "",
        flag: "", },
};