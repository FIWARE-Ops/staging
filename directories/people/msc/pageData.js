var companies = [
        'ATB Bremen',
        'City of Herne',
        'Ciudades del Futuro',
        'Easy Global Market',
        'Engineering',
        'EPPO',
        'Hochschule Bochum',
        'Hopu – Libelium',
        'NEC Lab Europe',
        'NTTData',
        'RWTH Aachen University',
        'TeamDev',
        'TriTUX',
]; var departments = [
]; var domains = [
        'iHubs',
        'Smart AgriFood',
        'Smart Cities',
        'Smart Energy',
        'Smart Industry',
        'Smart Water',
]; var titles = [
        'CDO',
        'CDTO',
        'CEO',
        'Co-Founder',
        'CSO',
        'Director',
        'Institute Director',
        'Manager',
        'Professor',
        'Researcher',
]; var countries = [
        'Argentina',
        'France',
        'Germany',
        'Italy',
        'Spain',
        'Tunisia',
]; var modalData = [
    { name: "Prof. Ali Benbrahim", img: "https://www.fiware.org/wp-content/directories/people/images/200px/ali-benbrahim.jpg", position: "Chief Executive Officer", company: "TriTUX", "company-link": "https://www.tritux.com/",
    content: "", linkedin: "https://www.linkedin.com/in/ali-benbrahim-71203121/", twitter: "https://twitter.com/alibb0404", domain: "iHubs", location: "Tunisia"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Tunisia.png"
    },
    { name: "Massimo Bertoncini", img: "https://www.fiware.org/wp-content/directories/people/images/200px/massimo-bertoncini.jpg", position: "R&amp;D Program Director for Digital Energy", company: "Engineering S.p.A.", "company-link": "https://www.eng.it/en/",
    content: "More than 16 years of experience in management of research and technology based innovation. He acquired consolidated know how in managing research and innovation and in its implementation at company level, with a special emphasis on the smart energy/smart grids enablng technologies. He managed large international teams by conducting large European R&amp;D and Innovation projects. Main ICT competences includes Artificial Intelligence, Intelligent Sensing and real Time processing, Real Time Control for Smaert Energy SystemsMulti-criteria decision making, Multimedia, Human Computer Interaction, and Knowledge Based Systems. Major Specialties are Sustainability and Business Plan for R&amp;D Smart Energy/Smart Grid Initiatives, Experienced in Innovation &amp; Technology Transfer, Project Managerr and Opportunities Scouting. Also Interested in “Supported” Finance, Strategy Analysis &amp; Exploitation and Business Plans with special emphasis on Smart Energy Systems (Smart Grids, Multi-carrier Energy Storage) R&amp;D Long and Medium Term Vision Analysis, Scouting and creating European credible consortia, Strong relationships with European Commission Personnel.", linkedin: "https://www.linkedin.com/in/massimo-bertoncini-a9a7932/", twitter: "", domain: "Smart Energy", location: "Italy"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png"
    },
    { name: "Aitor Corchero", img: "https://www.fiware.org/wp-content/directories/people/images/200px/aitor-corchero.jpg", position: "Senior Researcher", company: "NTTData", "company-link": "https://eurecat.org/",
    content: "Aitor Corchero is Senior Researcher and R+D Project Manager in the Applied Artificial Intelligence R&amp;D Group of Eurecat Technology Centre. He studied Computer Science Engineering at the University of Mondragon (MUN) and also has obtained the MSc degree in computer science at University of Lleida. He has more than 10 years of experience as data scientist and semantic web. Specifically, he has experience on semantic web technologies, data analytics (machine learning/data mining and deep learning), decision support systems (rule based reasoning and case-based reasoning) and cognitive AI for a broad of domains including water management, building energy efficiency management and physical and logical security systems (Botnet detection and remediation systems). Moreover, he is involved in Water domain (OGC®, ICT4Water Cluster), semantic web (IoT Schema.org) and IoT associations (AIOTI, BDVA). Currently, he is chair of the water management action group of the AIOTI and also, chair of the “standardization and Interoperability” action group of the ICT4WATER cluster. Moreover, Aitor has been involved and leading from EUT side more than 20 EU projects covering FP7, H2020 and LIFE projects.", linkedin: "https://www.linkedin.com/in/aitorcorchero", twitter: "https://mobile.twitter.com/ac_olite", domain: "Smart Water", location: "Spain"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png"
    },
    { name: "Andrea Cruciani", img: "https://www.fiware.org/wp-content/directories/people/images/200px/andrea-cruciani.jpg", position: "Co-Founder &amp; Chief Executive Officer", company: "TeamDev", "company-link": "https://www.teamdev.it/en/",
    content: "Andrea is the Agricolus co-founder and CEO, member of FIWARE Foundation BoD, Chairman of the FIWARE Smart AgriFood MSC. He runs the international business area and the financial aspects of the company and he has a technical background and experience in applications Development, Enterprise Architectures, Cloud Computing, and GIS. Andrea is involved in Innovative Startup Evolution and scaleup, during the years he worked with Public Administration, multinational companies, NGOs, and SMEs. He is a speaker for several universities and public events where he is invited to discuss entrepreneurship and digital transformation, and he is a contributor in several technical articles and publications about agritech.", linkedin: "https://www.linkedin.com/in/andreacruciani/", twitter: "https://twitter.com/kokkete", domain: "Smart AgriFood", location: "Italy"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png"
    },
    { name: "Roberto Di Bernardo", img: "https://www.fiware.org/wp-content/directories/people/images/200px/roberto-di-bernardo.jpg", position: "Head of Open Government R&amp;D Unit", company: "Engineering S.p.A.", "company-link": "https://www.eng.it/en/",
    content: "Roberto Di Bernardo is Senior Researcher and Head of the Open Government R&amp;D Group (part of Open Public Service Innovation Lab). He is an Electronic Engineer with Professional Master’s diplomas in “Clinical Engineering” and in “Internet Software Engineering”. He has been working as researcher at Engineering R&amp;D Laboratory since 2004, being involved in management and technical activities in many Italian and European projects. He is also acting as R&amp;D opportunity and network developer for the entire Public Sector R&amp;D area. At the moment, he is coordinating URBANAGE project (H2020-DT-Transforations-02) and his group is leading/involved in, among others, the following projects: DECIDO (H2020-DT-Governance-12), INTERSTAT (CEF-Public Open Data), SPOTTED (CEF-Public Open Data), ACROSS (H2020-DT-Governance-05), URBANITE (H2020-DT-Transformations-02). Currently he is leading the Smart Governance and Smart Cities sub-group of the Big Data Value Association and co-leading the Smart Cities Domain Committee of the FIWARE Foundation and the Digital Water Systems Working Group of Water Europe.", linkedin: "https://www.linkedin.com/in/robertodibernardo/", twitter: "", domain: "Smart Cities", location: "Italy"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png"
    },
    { name: "Gianluca Dianese", img: "https://www.fiware.org/wp-content/directories/people/images/200px/gianluca-dianese.jpg", position: "Digital Transformation Officer", company: "EPPO", "company-link": "https://www.eppo.europa.eu/en",
    content: "", linkedin: "https://www.linkedin.com/in/gianlucadianese/", twitter: "https://twitter.com/gdianese", domain: "Smart Energy", location: "Germany"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png"
    },
    { name: "Pierre Herbe", img: "https://www.fiware.org/wp-content/directories/people/images/200px/pierre-herbe.jpg", position: "Chief Digital Officer", company: "City of Herne", "company-link": "https://www.herne.de/",
    content: "After getting his diploma as a public administration specialist, Pierre joined the city as an organizational developer and change manager. Since 2013, he has been working on projects focused on digitization and process management, and, at the age of 31, Pierre is the city’s youngest CDO to date. Pierre is also a lecturer in E-Government, Digitization, and Knowledge Management (among other areas) and feels that being able to combine science, economy and public management adds considerably to his career and role within the city.", linkedin: "https://www.linkedin.com/in/pierre-golz-311396156/", twitter: "", domain: "Smart Cities", location: "Germany"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png"
    },
    { name: "Antonio Jara", img: "https://www.fiware.org/wp-content/directories/people/images/200px/antonio-jara.jpg", position: "Chief Scientific Officer", company: "Hopu – Libelium", "company-link": "https://hopu.eu/",
    content: "Antonio has a PhD from the University of Murcia (Spain) and a MBA from the ENAE business school and UCAM (2012). He has received entrepreneurship awards from ENAE, emprendeGo, IPSO Alliance Award for its disruptive innovation in the IoT. As part of HOP Ubiquitous, Jara is focused on the Smart Cities market with solutions for citizens engagements, tourism, active participation, physical web and environmental monitoring (air quality sensors) in projects such as ENIAC SAFESENS, interoperability / pilots (SmartSDK, Synchronicity, Organicity, BeinCPPS) and also in several actions related to security/privacy (INPUT and FORTIKA).", linkedin: "https://www.linkedin.com/in/jara-libelium/", twitter: "https://twitter.com/antonio_jara", domain: "Smart Cities", location: "Spain"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png"
    },
    { name: "Ernoe Kovacs", img: "https://www.fiware.org/wp-content/directories/people/images/200px/erno-kovacs.jpg", position: "Senior Manager", company: "NEC Lab Europe", "company-link": "https://www.neclab.eu/",
    content: "Ernö started his journey in the scientific world as a student working for IBM Scientific Center in Heidelberg, Germany, where he got to know more about the research process and how the boundaries of technologies were pushed worldwide. He then moved on to do his PhD at the University of Stuttgart with a long-term collaboration and research visit to HP in Fort Collins, Colorado, USA. Afterward, he joined Sony’s research lab to work on topics such as mobile communication, context-aware services, and broadband multimedia. In the early 2000s, Ernö was leading teams at NEC, establishing context-aware services and IoT as a long term research topic.", linkedin: "https://www.linkedin.com/in/ern%C3%B6-kovacs-1459041/", twitter: "", domain: "Smart Industry", location: "Germany"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png"
    },
    { name: "Gonzalo A. La Rosa", img: "https://www.fiware.org/wp-content/directories/people/images/200px/gonzalo-alfredo-la-rosa.jpg", position: "Executive Director", company: "Ciudades del Futuro", "company-link": "https://www.ciudadesdelfuturo.com.ar/",
    content: "Gonzalo La Rosa has been working in the public sector for the past 20 years (at federal, sub-national, and local government levels), trying to deliver innovative public management and evidence-based public policies.", linkedin: "https://www.linkedin.com/in/gonzalolarosa/", twitter: "", domain: "iHubs", location: "Argentina"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Argentina.png"
    },
    { name: "Dr. Franck Le Gall", img: "https://www.fiware.org/wp-content/directories/people/images/200px/franck-le-gall.jpg", position: "Chief Executive Officer", company: "Easy Global Market", "company-link": "https://www.egm.io/en/egm-the-innovation-factory",
    content: "Franck Le Gall is CEO at Easy Global Market, an innovative SME focused on integration and validation of emerging technologies. He is driving company development to deploy IoT and data technologies over vertical markets (water, agriculture, smart territories, environment, etc.). He involves himself in the standardization area including ETSI where he is co-chairman of the ETSI ISG-CIM working group on NGSI-LD. He is also chairing the interfaces working group of the FIWARE Technical Steering Committee (TSC) as well as the joint ETSI-FIWARE Foundation working group on Digital Twins. Finally, he is the Co-chair of the Smart Water working group of the ICT4Water European research cluster. He continuously contributes and drives several projects for public and private customers.", linkedin: "https://www.linkedin.com/in/francklegall/", twitter: "https://twitter.com/franck_le_gall", domain: "Smart Water", location: "France"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png"
    },
    { name: "Angelo Marguglio", img: "https://www.fiware.org/wp-content/directories/people/images/200px/angelo-marguglio.jpg", position: "Research Area Manager", company: "Engineering", "company-link": "https://www.eng.it/en/",
    content: "Angelo Marguglio is the head of the “Smart Industry and Agrifood” Unit within the Industry and Security Technologies, Research and Innovation (IS3) Lab. Main role as Research Area Manager mainly concerns with coordinating a group of more than 30 researchers using state-of-the-art PM methodologies (e.g. PMP and Agile/SCRUM); defining the strategic roadmap and the operational plans of the Unit; coordinating several research projects and collaborating with the Industry Business Unit of the Engineering Group.", linkedin: "https://www.linkedin.com/in/amarguglio/", twitter: "https://twitter.com/angmarguglio", domain: "Smart Industry", location: "Italy"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png"
    },
    { name: "Prof. Haydar Mecit", img: "https://www.fiware.org/wp-content/directories/people/images/200px/haydar-mecit.jpg", position: "Professor", company: "Hochschule Bochum", "company-link": "https://www.hochschule-bochum.de/",
    content: "Haydar was appointed to Bochum University of Applied Sciences in 2019 as part of an endowed professorship by the local utility Stadtwerke Herne AG. In the Department of Electrical Engineering and Computer Science his research area Urban Energy and Mobility Systems deals with R&amp;D on smart city solutions. His research focuses on the integration of IoT sensor technologies and IT platforms in real-world laboratories in urban areas whereas application areas are related to smart energy, environment and mobility. Previously, Haydar worked as a senior expert in a central R&amp;D department of the utility innogy SE, now a division of E.ON SE on topics related to electric mobility and data driven business models. Between 2005 and 2017 he worked in various business areas of the technology company thyssenkrupp AG, most recently as a senior engineer R&amp;D in an innovation department in the areas of mobility, energy and infrastructure. In addition, he is also a member of the FIWARE Foundation’s Smart Energy Mission Support Committee.", linkedin: "https://www.linkedin.com/in/haydarmecit/", twitter: "", domain: "Smart Energy", location: "Germany"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png"
    },
    { name: "Prof. Antonello Monti", img: "https://www.fiware.org/wp-content/directories/people/images/200px/antonello-monti.jpg", position: "Professor &amp; Institute Director", company: "RWTH Aachen University", "company-link": "https://www.rwth-aachen.de/go/id/a/?lidx&#x3D;1",
    content: "Prof. Antonello Monti received his M.Sc degree (summa cum laude) and his PhD in Electrical Engineering from Politecnico di Milano, Italy in 1989 and 1994 respectively. He started his career in Ansaldo Industria and then moved in 1995 to Politecnico di Milano as Assistant Professor. In 2000 he joined the Department of Electrical Engineering of the University of South Carolina (USA) as Associate and then Professor. Since 2008 he is the director of the Institute for Automation of Complex Power System within the E.ON Energy Research Center at RWTH Aachen University. From 2019 he holds a double appointment with Fraunhofer FIT where he is developing the new Center for Digital Energy in Aachen. Prof. Monti is author or coauthor of more than 400 peer-reviewed papers published in international Journals and in the proceedings of International conferences. He is a Senior Member of IEEE, Associate Editor of the IEEE System Journal, Associate Editor of IEEE Electrification Magazine, Member of the Editorial Board of the Elsevier Journal SEGAN and member of the founding board of the Springer Journal “Energy Informatics”. Dr. Monti was the recipient of the 2017 IEEE Innovation in Societal Infrastructure Award.", linkedin: "https://www.linkedin.com/in/antonellomonti/", twitter: "", domain: "Smart Energy", location: "Germany"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png"
    },
    { name: "Davide Storelli", img: "https://www.fiware.org/wp-content/directories/people/images/200px/davide-storelli.jpg", position: "Researcher", company: "Engineering S.p.A.", "company-link": "https://www.eng.it/en/",
    content: "Senior Researcher and member of the Open Public Service Innovation unit of the R&amp;D division at Engineering Ingegneria Informatica since 2012. Prince2 Practitioner Level certified in 2019. He graduated in Computer Engineering from the University of Salento in 2006. He coordinates the technical activities of several Italian and European projects related to Smart Cities and Smart Water, with special focus on service innovation, open platforms and digital transformation. He is co-author of several publications in International journals and conferences.", linkedin: "https://www.linkedin.com/in/davidestorelli/", twitter: "", domain: "Smart Water", location: "Italy"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png"
    },
    { name: "Harald Sundmaeker", img: "https://www.fiware.org/wp-content/directories/people/images/200px/harald-sundmaeker.jpg", position: "Senior Researcher", company: "ATB Bremen", "company-link": "https://www.atb-bremen.de/",
    content: "Senior Researcher at ATB-Bremen, and vice-chair of the FIWARE SmartAgriFood Mission Support Committee, Harold has been working in European research and innovation projects in different business domains for the past 20 years. Harald joined FIWARE’s journey from its beginning, co-leading/coordinating agri-food-related innovation projects (i.e. SmartAgriFood, FIspace &amp; FInish) and working in the large scale projects IoF2020 and SmartAgriHubs as work package leader. Harald is addressing challenges from farm to fork, specifically aiming at the realization of new ways of work and collaboration. Currently, he is addressing topics like service monetization, interoperability and data model development.", linkedin: "https://www.linkedin.com/in/sundmaeker", twitter: "https://twitter.com/HSundmaeker", domain: "Smart AgriFood", location: "Germany"
    ,flag: "https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png"
    }
];