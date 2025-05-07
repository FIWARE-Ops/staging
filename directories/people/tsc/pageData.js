var companies = [
        'Atos',
        'AWS',
        'City of Herne',
        'Easy Global Market',
        'Engineering',
        'eProsima',
        'Eridanis',
        'FICODES',
        'FIWARE Foundation',
        'Martel Innovation',
        'NEC Lab Europe',
        'Orange',
        'Red Hat',
        'Secmotic',
        'Telefonica',
        'Universidad Politécnica de Madrid',
]; var departments = [
]; var domains = [
        'Associates',
        'Gold',
        'Gold SEU',
        'Platinum',
]; var titles = [
        'Advisor',
        'Assistant Professor',
        'Business Developer',
        'CEO',
        'Chairman FIWARE TSC',
        'Cloud Expert',
        'Co-Founder',
        'COO',
        'CTO',
        'Director',
        'Evangelist',
        'IoT Specialist',
        'Manager',
        'Platform Expert',
        'Professor',
        'Researcher',
        'Smart Cities Specialist',
        'Software Engineer',
        'Solution Architect',
        'Technical Expert',
]; var countries = [
]; var modalData = [
    { name: "Dr. Alberto Abella", img: "https://www.fiware.org/wp-content/directories/people/images/200px/alberto-abella.jpg", position: "Chief Operations Officer", company: "FIWARE Foundation e.V.", "company-link": "https://www.fiware.org/",
    content: "Alberto Abella is PhD in Business (Open data) and Telecommunications Engineer and Master in Total Quality Management, Business Administration and Business Organization. He works as a Data Modelling Expert and Technical Evangelist at FIWARE and currently is the responsible person for the smart data models initiative.", linkedin: "https://www.linkedin.com/in/albertoabella/", twitter: "https://twitter.com/aabella", domain: "", location: ""
    },
    { name: "Prof. Álvaro Alonso", img: "https://www.fiware.org/wp-content/directories/people/images/200px/alvaro-alonso.jpg", position: "Assistant Professor", company: "Universidad Politécnica de Madrid", "company-link": "https://www.upm.es/internacional",
    content: "Álvaro Alonso is currently an Assistant Professor with the UPM. His research interests include Multi Video Conferencing Systems, Security Management in Smart Context scenarios, and Public Open Data.", linkedin: "https://www.linkedin.com/in/alvaroalonsogonzalez", twitter: "", domain: "Associates", location: ""
    },
    { name: "Álvaro Arranz", img: "https://www.fiware.org/wp-content/directories/people/images/ico_user.png", position: "Co-Founder &amp; Chief Executive Officer", company: "FICODES S.L.", "company-link": "https://www.ficodes.com/en/",
    content: "", linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-arranz-garc%C3%ADa-33858536/", twitter: "", domain: "Gold", location: ""
    },
    { name: "Dr. Martin Bauer", img: "https://www.fiware.org/wp-content/directories/people/images/200px/martin-bauer.jpg", position: "Senior Researcher", company: "NEC Lab Europe", "company-link": "https://www.neclab.eu/",
    content: "", linkedin: "https://www.linkedin.com/in/martin-bauer-a722141/", twitter: "", domain: "Platinum", location: ""
    },
    { name: "Ali Benfattoum", img: "https://www.fiware.org/wp-content/directories/people/images/200px/ali-benfattoum.jpg", position: "IoT &amp; Smart Cities Specialist", company: "AWS", "company-link": "https://aws.amazon.com/",
    content: "Ali Benfattoum is a Technology Evangelist for IoT and Smart Cities at Amazon Web Services. With over 12 years of experience in IoT and Smart Cities, Ali brings his technical expertise to enable and help customers and partners to accelerate their IoT and Smart Cities projects. Ali also holds an executive MBA, giving him the ability to zoom out and help customers and partners at a strategic level.", linkedin: "https://www.linkedin.com/in/alibenfattoum/", twitter: "https://twitter.com/alifrugal", domain: "Gold", location: ""
    },
    { name: "Flavio Cirillo", img: "https://www.fiware.org/wp-content/directories/people/images/200px/flavio-cirillo.jpg", position: "Senior Researcher", company: "NEC Lab Europe", "company-link": "https://www.neclab.eu/",
    content: "", linkedin: "https://www.linkedin.com/in/flaviocirillo/", twitter: "", domain: "Platinum", location: ""
    },
    { name: "Carlos Corrales", img: "https://www.fiware.org/wp-content/directories/people/images/200px/carlos-corrales.jpg", position: "Co-Founder &amp; Chief Operations Officer", company: "Secmotic", "company-link": "https://secmotic.com/",
    content: "Carlos Corrales is the CEO of FIWOO, the no-code Smart Platform that allows you to connect all your data sources, standardize them and perform analysis based on that data. Previously, in 2015 he cofounded Secmotic (Gold Member of the FIWARE Foundation) where he acts as Chief Operating Officer, working on several projects related to IoT and the usage of FIWARE Technologies. In 2017 he leaded the creation of the FIWOO platform together with Emergya. He received a master degree in Telecommunications Engineering at University of Sevilla, with one year at KTH (Stockholm).", linkedin: "https://www.linkedin.com/in/carlos-corrales-yerpes/", twitter: "https://twitter.com/carloscorri11", domain: "Gold", location: ""
    },
    { name: "Piero Corte", img: "https://www.fiware.org/wp-content/directories/people/images/ico_user.png", position: "Software Engineering Manager", company: "Engineering S.p.A.", "company-link": "https://www.eng.it/en/",
    content: "", linkedin: "https://www.linkedin.com/in/piero-corte-b4430132/", twitter: "", domain: "", location: ""
    },
    { name: "Davide Dalle Carbonare", img: "https://www.fiware.org/wp-content/directories/people/images/200px/davide-dalle-carbonare.jpg", position: "Senior Researcher &amp; Business Developer", company: "Engineering S.p.A.", "company-link": "https://www.eng.it/en/",
    content: "Davide Dalle Carbonare is Senior Researcher and Business Developer for the R&amp;D Department at Engineering Ingegneria Informatica SpA. He’s been involved in FIWARE since the very first EU project, he is member of the FIWARE Technical Steering Committee and he is promoting the adoption of FIWARE concepts and technologies. In addition to that, he is active on data-related topics (Big Data, AI, Data Sharing Spaces) and manufacturing, as vertical domain. He supports the preparation and development of national and European research projects related to Data and AI topics for developing and evolving solutions to transfer from the research lab to the company business units. He is member of the Board of Directors of the Big Data Value Association (BDVA/DAIRO) where he also co-leads the Smart Manufacturing Industry working group.", linkedin: "https://www.linkedin.com/in/davidedallecarbonare/", twitter: "https://twitter.com/davdalle", domain: "", location: ""
    },
    { name: "Francisco de la Vega", img: "https://www.fiware.org/wp-content/directories/people/images/200px/francisco-de-la-vega.jpg", position: "Chief Technology Officer", company: "FICODES S.L.", "company-link": "https://www.ficodes.com/en/",
    content: "Francisco de la Vega (male) is co-founder and CTO of the spanish startup FICODES as well as FIWARE architect. Francisco held a Master of Science in Computer Science from Universidad Politécnica de Madrid in 2015. Currently, he is making his Ph.D. in Computer Science in Universidad Politécnica de Madrid focusing on digital service management and monetization, automated revenue sharing, and value chain aggregation. As a researcher of the Computer Networks and Web Technologies Laboratory (CoNWeT Lab.) of UPM, he was engaged in several EU projects around the FIWARE platform starting in 2012, including FI-WARE and FI-CORE. Later, as CTO of FICODES he has been involved in multiple projects as FIWARE Architect, with a special focus in logistics, Smart Port and Smart City platforms. He has been actively participating on the FIWARE Community initially as the FIWARE Business Framework GEs owner (Store, Marketplace, Repository, and Revenue Settlement and Sharing system), and later as the FIWARE/TMF Business API Ecosystem GE owner, which integrates the aforementioned GEs with standard TMForum technologies. He is a member of the Data/API Management, Publication and Monetization FIWARE’s Technical Steering Committee.", linkedin: "https://www.linkedin.com/in/fdelavegagarcia", twitter: "https://twitter.com/frandlvega", domain: "Gold", location: ""
    },
    { name: "Gabriele De Luca", img: "https://www.fiware.org/wp-content/directories/people/images/200px/gabriele-de-luca.jpg", position: "Senior Researcher", company: "Engineering S.p.A.", "company-link": "https://www.eng.it/en/",
    content: "Gabriele De Luca graduated as Doctor with Laude in Computer Engineering from the University of Salento. He has been working in the R&amp;D Lab for Engineering Ingegneria Informatica S.p.A. since 2014 as part of the “Digital Industry and Agrifood” Unit. He has been involved in different Italian and European research projects playing several roles, such as software developer, solution designer, system architect and information expert. Currently, he acts as Technology Manager and Team Leader. The main application fields are Advanced Manufacturing, Smart Farming, Supply Chain Management, Operational Intelligence, Artificial Intelligence, Internet of Things and Food Safety whereas the main activities are correlated to Event Processing, Sensor Data Processing (OGC standards such as Sensor Web Enablement), Decision Support Systems, Internet of Things (mainly in the FIWARE context), Data Sovereignty and Data Spaces (IDSA-based). His relevant expertise and experiences include Architecture Design, System Integration, and Collaborative Working Environment, from both software engineering and technological points of view. Main research fields are applied to Digital Industry, including Operational Intelligence (especially in Complex Event Processing and Process Mining), Supply Chain Integration, and so on.", linkedin: "https://www.linkedin.com/in/gabriele-de-luca-b4132861/", twitter: "https://twitter.com/gabrielede_luca", domain: "", location: ""
    },
    { name: "Stefano De Panfilis", img: "https://www.fiware.org/wp-content/directories/people/images/200px/stefano-depanfilis.jpg", position: "Senior Advisor", company: "FIWARE Foundation", "company-link": "https://www.fiware.org/",
    content: "Stefano de Panfilis (m) is Senior Advisor at FIWARE Foundation. He graduated cum laude in Mathematics at the University of Rome “La Sapienza”. In 1984, he was hired in Engineering Ingegneria Informatica S.P.A as a software engineer. In 1986, he became Project Manager to then move to the R&amp;D department managing the “Formal Methods” unit. In 1993, he supported Engineering to receive the ISO-9001 compliancy. From 1994, he was involved in European R&amp;D. He coordinated SeCSE (IST 6FP), aiming at implement a platform for Service-Centric Systems Engineering, CBSEnet (IST-5FP NoE), CLARiFi (IST 5FP), DOOR (ESPRIT 4FP), SQUAD (INCO-DC), and VALSE (TV&amp;TT) projects, and the ENG- SODEPRO, DECO’ and DOMINARE ESSI Process Improvement Experiments. He also coordinated QualiPSo (IST 6FP) aiming at leverage Open Source Software development to recognised industrial standards, leading a consortium of 20 partners from Europe, Brazil and China. He actively participated to create and set-up the NESSI ETP of which he is the Coordinator of the Strategic Research Agenda Committee. From 2017 to October 2024 he has been in charge as Chief Operations Officer of the FIWARE Foundation.", linkedin: "https://www.linkedin.com/in/stefano-de-panfilis-1928a11/", twitter: "https://twitter.com/depa01", domain: "", location: ""
    },
    { name: "Marc Despland", img: "https://www.fiware.org/wp-content/directories/people/images/200px/marc-despland.jpg", position: "Solution Architect", company: "Orange S.A.", "company-link": "https://www.orange.com/",
    content: "", linkedin: "https://www.linkedin.com/in/marc-despland-969a3b13/", twitter: "https://twitter.com/desplandmarc", domain: "", location: ""
    },
    { name: "Christian Drucks", img: "https://www.fiware.org/wp-content/directories/people/images/ico_user.png", position: "Chief Technology Officer", company: "City of Herne", "company-link": "https://www.herne.de/",
    content: "", linkedin: "https://www.linkedin.com/in/christian-drucks/", twitter: "", domain: "Gold SEU", location: ""
    },
    { name: "Federico Facca", img: "https://www.fiware.org/wp-content/directories/people/images/200px/federico-facca.jpg", position: "Chief Technology Officer", company: "Martel Innovation", "company-link": "https://www.martel-innovate.com/",
    content: "Federico is the CTO of Martel, leading internal IT projects and acting as strategic lead consultant to customers, including the European Commission. Federico’s current core project is Orchestra Cities, a modular and flexible cloud-native IoT platform (mostly used in the Smart City domain). He has an extensive experience on Cloud-Native architectures, Infrastructure as a Code approach, continuous testing and monitoring to ensure infrastructure reliability. He is a strong advocate of Open Source and thrive to use and contribute to Open Source solutions. In his career he lead different large R&amp;D projects, ranging from industrial systems integration to data center deployment and federation. Before joining Martel Innovate, Federico has been area head in different FBK-CREATE-NET and STI Innsbruck. He holds a PhD and MSc in Computer Science.", linkedin: "https://www.linkedin.com/in/federicofacca/", twitter: "https://twitter.com/chicco785", domain: "Gold", location: ""
    },
    { name: "Jason Fox", img: "https://www.fiware.org/wp-content/directories/people/images/200px/jason-fox.jpg", position: "Senior Technical Expert &amp; Evangelist", company: "FIWARE Foundation e.V.", "company-link": "https://www.fiware.org/",
    content: "Joined the FIWARE Foundation six years ago in the role of Senior Technical Evangelist. He is a Software Engineer with over twenty years experience in mobile and IT having previously worked at Nokia and HERE Technologies. Jason’s current role encompasses the development and assessment of FIWARE Technologies and technical coaching and training.", linkedin: "https://www.linkedin.com/in/jason-fox-8a79563/", twitter: "", domain: "", location: ""
    },
    { name: "Fermín Galán", img: "https://www.fiware.org/wp-content/directories/people/images/ico_user.png", position: "Smart Cities Specialist", company: "Telefonica S.A.", "company-link": "https://www.telefonica.com/en/",
    content: "", linkedin: "https://www.linkedin.com/in/fermingalan/", twitter: "", domain: "", location: ""
    },
    { name: "Alain Galdemas", img: "https://www.fiware.org/wp-content/directories/people/images/ico_user.png", position: "Chief Technology Officer", company: "Eridanis", "company-link": "https://www.eridanis.com/en/home-2/",
    content: "", linkedin: "https://www.linkedin.com/in/alain-galdemas-28468b19/", twitter: "", domain: "Gold", location: ""
    },
    { name: "Juanjo Hierro", img: "https://www.fiware.org/wp-content/directories/people/images/200px/juanjo-hierro.jpg", position: "Chairman FIWARE TSC", company: "", "company-link": "",
    content: "Juanjo Hierro (m) obtained a degree in Computer Science in 1990 from the Universidad Politecnica de Madrid (UPM) and owns a certificate of research proficiency. In 1990, Juanjo joined Telefónica I+D where he stayed until he joined FIWARE Foundation. During his career at Telefónica, Juanjo had different management responsibilities in the development of mission-critical systems for Telefónica as well as several R&amp;D projects. In April 2011, he became the Chief Architect of the FIWARE programme combining this role with the one of the CTO of the IoT Division at Telefónica R&amp;D since November 2013. Now a days Juanjo is the Chairman of the FIWARE Technical Steering Committee.", linkedin: "https://www.linkedin.com/in/jhierro/", twitter: "https://twitter.com/JuanjoHierro", domain: "", location: ""
    },
    { name: "Dr. Franck Le Gall", img: "https://www.fiware.org/wp-content/directories/people/images/200px/franck-le-gall.jpg", position: "Chief Executive Officer", company: "Easy Global Market", "company-link": "https://www.egm.io/en/egm-the-innovation-factory",
    content: "Franck Le Gall is CEO at Easy Global Market, an innovative SME focused on integration and validation of emerging technologies. He is driving company development to deploy IoT and data technologies over vertical markets (water, agriculture, smart territories, environment, etc.). He involves himself in the standardization area including ETSI where he is co-chairman of the ETSI ISG-CIM working group on NGSI-LD. He is also chairing the interfaces working group of the FIWARE Technical Steering Committee (TSC) as well as the joint ETSI-FIWARE Foundation working group on Digital Twins. Finally, he is the Co-chair of the Smart Water working group of the ICT4Water European research cluster. He continuously contributes and drives several projects for public and private customers.", linkedin: "https://www.linkedin.com/in/francklegall/", twitter: "https://twitter.com/franck_le_gall", domain: "Gold", location: ""
    },
    { name: "Sylvie Le Guyader", img: "https://www.fiware.org/wp-content/directories/people/images/200px/sylvie-le-guyader.jpg", position: "Global Research and Development Director", company: "Atos S.E.", "company-link": "https://atos.net/en/",
    content: "With more than 36 years’ experience in IT services my leadership allows me to drive organizational transformation through persuasive communication and entrepreneurial skills. Being a result-oriented and structured thinker, I’m able to define a vision and lead a project from strategy definition to successful implementation. I’ve been working in an international environment for the past 23 years. This enabled me to develop valuable and extensive experience in leading international teams and working in a virtual and remote environment, setting up complex programs and community with proven success.", linkedin: "https://www.linkedin.com/in/sylvie-le-guyader-colliot-b970786/", twitter: "https://twitter.com/guyadersylvie", domain: "Platinum", location: ""
    },
    { name: "Fernando López Aguilar", img: "https://www.fiware.org/wp-content/directories/people/images/200px/fernando-lopez-aguilar.jpg", position: "Cloud &amp; Platform Senior Expert", company: "FIWARE Foundation e.V.", "company-link": "https://www.fiware.org/",
    content: "Fernando López Aguilar (m) holds a degree of Computer Science from E.T.S Ingeniería Informática - University of Málaga in 1998. He leads several R&amp;D activities at Telefónica I+D in areas such as Advance Software Developments, Cloud Computing, Internet of Things together with R&amp;D works in areas such as Location and Wireless Networks. During his first year, he was leading and working in the supervision and management system of power supply network from Union Fenosa. In March 2000, he started working in Meta4 S.A. as a Database Expert in the Logical Database System. Since 2001, Fernando works in Telefónica I+D in projects involving NGN, advanced broadband communications, Mobile IP, and new mobile services. He has been involved in several CELTIC (ICARUS, LOOP), ITEA (MARTES) and FP7 projects (PEACE, SENSEI, IoT-A). He holds ITEA Silver Achievement Award 2008 and Forum Nokia Champion, multiple publications, and one book chapter “”IP-based Emergency Applications and Services for Next Generation Networks””. He is active reviewers in some important journals and congress (IEEE, WMSCI’09, ICC’10, GC’10 – CQRM, Mobimedia’10 and MONA’11) and organised of several congresses related to Location, Internet of Things and wireless network (Mobimedia’10 and Mobilight’10). Fernando currently plays the role of Technical Coordinator Leader, Cloud and Platform Senior Expert in FIWARE Foundation in the management of Advanced Services in Cloud Chapter and development of Tools to help and maintain FIWARE Lab ecosystem. Additionally, Fernando is the only person in the FIWARE Technical Steering Committee with two seats (for FIWARE Lab nodes and FIWARE Operation tools). In his role, he particularly helps the FIWARE OS Community to define, maintain and implement the FIWARE platform and FIWARE Lab technical roadmaps.", linkedin: "https://www.linkedin.com/in/fernandolopezaguilar/", twitter: "https://twitter.com/flopezaguilar", domain: "", location: ""
    },
    { name: "Jaime Martin-Losa", img: "https://www.fiware.org/wp-content/directories/people/images/ico_user.png", position: "Chief Executive Officer", company: "eProsima", "company-link": "https://www.eprosima.com/",
    content: "", linkedin: "https://www.linkedin.com/in/jaime-martin-losa-216817/", twitter: "", domain: "Gold", location: ""
    },
    { name: "Francisco Meléndez", img: "https://www.fiware.org/wp-content/directories/people/images/200px/francisco-melendez.jpg", position: "Technical Community Coordinator", company: "FIWARE Foundation e.V.", "company-link": "https://www.fiware.org/",
    content: "", linkedin: "https://www.linkedin.com/in/franmelfer/", twitter: "", domain: "", location: ""
    },
    { name: "Benoit Orihuela", img: "https://www.fiware.org/wp-content/directories/people/images/200px/benoit-orihuela.jpg", position: "Research Engineer", company: "Easy Global Market", "company-link": "https://www.egm.io/en/egm-the-innovation-factory",
    content: "Benoit Orihuela is an engineer in aeronautics, with more than 20 years of experience in Web architecture and development. He joined EGM at the beginning of 2019, mainly to drive the development and deployment of a reactive data platform relying on the NGSI-LD industry standard. Today lead architect of the Stellio FIWARE GE, he is also a representative in the FIWARE core chapter and contributor for some other GEs (Sigfox IoT Agent, Draco). Finally, he is deeply implied in the deployment of FIWARE-based data platforms in French (Saint Quentin, SMBT) and European projects (FIWARE4Water, Graced, Astral, …).", linkedin: "https://www.linkedin.com/in/benoitorihuela/", twitter: "https://twitter.com/bobeal", domain: "Gold", location: ""
    },
    { name: "Miguel Ángel Pedraza", img: "https://www.fiware.org/wp-content/directories/people/images/200px/miguel-angel-pedraza.jpg", position: "FIWARE Technical Expert", company: "Telefonica S.A.", "company-link": "https://www.telefonica.com/en/",
    content: "Miguel Angel Pedraza is a FIWARE Expert and the Telefonica Representative at TSC. he is involved in the support and development of a big amount of FIWARE components maintained by Telefónica, among other activities related with innovation hubs. He holds a degree in electronics engineering from University of Malaga, and, after some internships in industrial companies, he founded a couple of tech start-up developing solutions and products based on FIWARE. After that, he also worked at FIWARE Zone iHub as tech expert, delivering FIWARE training to companies, students, professors, and public institutions technicians.", linkedin: "https://www.linkedin.com/in/miguelangpedraza/", twitter: "", domain: "", location: ""
    },
    { name: "Alfonso Pietropaolo", img: "https://www.fiware.org/wp-content/directories/people/images/ico_user.png", position: "Innovation Manager", company: "Engineering S.p.A.", "company-link": "https://www.eng.it/en/",
    content: "", linkedin: "https://www.linkedin.com/in/alfonsopietropaolo/", twitter: "", domain: "", location: ""
    },
    { name: "Prof. Joaquín Salvachúa", img: "https://www.fiware.org/wp-content/directories/people/images/200px/joaquin-salvachua.jpg", position: "Professor", company: "Universidad Politécnica de Madrid", "company-link": "https://www.upm.es/internacional",
    content: "Prof. Joaquín Salvachúa received a master degree in Computer Science. He holds the Orange Chair for the “Science of Complex Networks” and the Kairos Chair on “Bank Middleware and Blockchain” at UPM and is a member of the UPM-ING and CyberAula groups. He has participated in several European research projects with several publications at international magazines, books and conferences. (https://orcid.org/0000-0002-7269-8079). Also have participated in several standardization activities, including been coauthor one RFC ( RFC 8802 ).His research focuses today on WebRTC, Cloud infrastructure, social graphs and recommendation, agile cloud infrastructures, P2P, DHT (Distributed HashTables), IOT, Non SQL Data Bases, Big data processing architectures, Identity Management and BlockChain distributed agreement algorithms.His teaching duties includes cloud computing, distributed application development, Databases, Web Full-stack development, Blockchain architecture, Data Engineering and Big data architecture and applications. Has been involved in the FIWARE Initiative since it started (2010) and he is architect and developer of several GE related to security, data persistence and Big Data analysis.", linkedin: "https://es.linkedin.com/in/jsalvachua", twitter: "https://twitter.com/jsalvachua", domain: "Associates", location: ""
    },
    { name: "Cyrille Sauvignac", img: "https://www.fiware.org/wp-content/directories/people/images/200px/cyrille-sauvignac.jpg", position: "Innovation Manager", company: "Atos S.E.", "company-link": "https://atos.net/en/",
    content: "", linkedin: "https://www.linkedin.com/in/cyrillesauvignac/", twitter: "", domain: "Platinum", location: ""
    },
    { name: "Johnny Westerlund", img: "https://www.fiware.org/wp-content/directories/people/images/200px/johnny-westerlund.jpg", position: "Solution Architect", company: "Red Hat Inc.", "company-link": "https://www.redhat.com/en",
    content: "", linkedin: "https://www.linkedin.com/in/johnny-westerlund-7ba34633/", twitter: "", domain: "", location: ""
    },
    { name: "Stefan Wiedemann", img: "https://www.fiware.org/wp-content/directories/people/images/200px/stefan-wiedemann.jpg", position: "Senior Software Engineer", company: "FICODES S.L.", "company-link": "https://www.ficodes.com/en/",
    content: "", linkedin: "https://www.linkedin.com/in/stefan-wiedemann-37a0ba13a/", twitter: "", domain: "", location: ""
    }
];