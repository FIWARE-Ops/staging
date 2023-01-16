var companies = [
    'FBK',
    'RWTH Aachen University',
    'The Coca-Cola Company',
    'UDG Alliance',
    'Universidad Politécnica de Madrid',
    'University of Cantabria',
    'University of Murcia',
    'Université Lumière Lyon 2'
];
var departments = [];
var domains = ['Associates'];
var titles = ['Associate Professor', 'Director', 'Full Professor', 'Institute Director'];
var countries = ['France', 'Germany', 'Ireland', 'Italy', 'Spain', 'Switzerland'];
var modalData = [
    {
        name: 'Niall Aughney',
        img: 'https://www.fiware.org/wp-content/directories/people/images/fisab/niall-aughney.png',
        position: 'Global Director of IT and Industry 4.0',
        company: 'The Coca-Cola Company',
        'company-link': 'https://www.coca-colacompany.com/',
        content:
            'Dr. Niall Aughney received a master degree in microelectronics and Ph.D in engineering, is the Director of digitization, IIoT and Industry 4.0 at the IMR. He has been working in technology and product development for over 30 years within the ICT industry. Niall’s most recent work has included 5 world-wide product launches in the IoT space including cellular sensor solutions and point of sale system development. Niall’s technical leadership roles have included being a senior world-wide sw director for Verifone payment systems and as a senior director within the IOT group in Intel responsible for IoT product development. Niall has executive level experience in digitisation, product development, software lifecycle management, program management, industrial operations and innovation programs.',
        linkedin: 'https://www.linkedin.com/in/niall-aughney-ph-d-4450b815/',
        twitter: '',
        domain: '',
        location: 'Ireland',
        flag: 'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Ireland.png'
    },
    {
        name: 'Eunah Eunsook Kim',
        img: 'https://www.fiware.org/wp-content/directories/people/images/fisab/eunah-eunsook-kim.png',
        position: 'Head of Research and Development',
        company: 'UDG Alliance',
        'company-link': 'https://www.udgalliance.org/',
        content:
            'Dr. Eunsook Kim received her master degree and Ph.D degree in Computer Science both from Sookmyung Women’s University in Seoul, Korea. She has been working in several European research projects on IoT, data interoperability, data privacy, 5G, Smart City, Smart water, Smart energy and Future Networks. Before she worked in Europe from 2013, she worked for Electronics and Telecommunication Research Institute (ETRI) in Korea for 11 years and National Institute of Standards and Technology (NIST) in the USA for 1 year. In addition to her primary job function, she has been serving on the European Commission as an independent expert since 2009. During the time to work for ETRI, she actively engaged in standardization in IETF, ITU-T SG13, ITU-T JCA-IoT and ITU-T SG5 where she produced a few international standards, and served as a vice chair of ITU-T SG5 WP3 (ICT &amp; Climate change) from 2009 to 2012. She has been honored by receiving two Minister Awards from the Korean government: the Standards Winners Award from the Ministry of Knowledge Economy in 2011 and the Outstanding Contributors Award from the Korean Communication Commission in 2009.',
        linkedin: 'https://www.linkedin.com/in/eunah714/',
        twitter: '',
        domain: 'Associates',
        location: 'Switzerland',
        flag: 'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Switzerland.png'
    },
    {
        name: 'Nejib Moalla',
        img: 'https://www.fiware.org/wp-content/directories/people/images/fisab/nejib-moalla.png',
        position: 'Full Professor',
        company: 'Université Lumière Lyon 2',
        'company-link': 'https://welcome.univ-lyon2.fr/',
        content:
            'Prof. Nejib Moalla, received a master degree in Computer Science. He finished his Ph.D. thesis in 2007 and hisnhabilitation in 2015. He held the responsibility of the project management department between 2008 and 2012. His research activities deal with software and data engineering to support digital transformation with finalised solutionsin Manufacturing, Healthcare, Smart Farming, etc. In software engineering, the developed research concepts and solutions cover: software quality, service-oriented architectures, microservice architecture, performance-based service reuse, service personalisation, ontology engineering, knowledge management, decision support, etc. In data engineering, the research activities cover: the application of data-driven artificial intelligence technics (Machine Learning, etc.) to support decision-making processes in a digital twin perspective. Nejib Moalla is in charge of the DIH ICT4Manuf. As a project manager, he coordinates regional industrial projects and continues to be involved in different collaborative and international projects: H2020 DIH4CPS (2020-2022), EPlus ENHANCE (2021-2024, Coordinator), EPlus TETRIS (2021-2024), H2020 vf-OS (2017-2019), FIPPP FP7 FITMAN (2013-2015), etc. He is a member of several international program committees (IPC) of international journals and conferences.',
        linkedin: 'https://www.linkedin.com/in/n%C3%A9jib-moalla-7b846513/',
        twitter: 'https://twitter.com/nejib_moalla',
        domain: 'Associates',
        location: 'France',
        flag: 'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
    },
    {
        name: 'Antonello Monti',
        img: 'https://www.fiware.org/wp-content/directories/people/images/fisab/antonello-monti.png',
        position: 'Full Professor &amp; Institute Director',
        company: 'RWTH Aachen University',
        'company-link': 'https://www.rwth-aachen.de/go/id/a/?lidx&#x3D;1',
        content:
            'Prof. Antonello Monti received his M.Sc degree (summa cum laude) and his PhD in Electrical Engineering from Politecnico di Milano, Italy in 1989 and 1994 respectively. He started his career in Ansaldo Industria and then moved in 1995 to Politecnico di Milano as Assistant Professor. In 2000 he joined the Department of Electrical Engineering of the University of South Carolina (USA) as Associate and then Full Professor. Since 2008 he is the director of the Institute for Automation of Complex Power System within the E.ON Energy Research Center at RWTH Aachen University. From 2019 he holds a double appointment with Fraunhofer FIT where he is developing the new Center for Digital Energy in Aachen. Prof. Monti is author or coauthor of more than 400 peer-reviewed papers published in international Journals and in the proceedings of International conferences. He is a Senior Member of IEEE, Associate Editor of the IEEE System Journal, Associate Editor of IEEE Electrification Magazine, Member of the Editorial Board of the Elsevier Journal SEGAN and member of the founding board of the Springer Journal “Energy Informatics”. Dr. Monti was the recipient of the 2017 IEEE Innovation in Societal Infrastructure Award.',
        linkedin: 'https://www.linkedin.com/in/antonellomonti/',
        twitter: '',
        domain: 'Associates',
        location: 'Germany',
        flag: 'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
    },
    {
        name: 'Luis Muñoz',
        img: 'https://www.fiware.org/wp-content/directories/people/images/fisab/luis-munoz.png',
        position: 'Full Professor',
        company: 'University of Cantabria',
        'company-link': 'https://web.unican.es/en/Pages/default.aspx',
        content:
            'Prof. Luis Muñoz received both the Telecommunications Engineering degree and Ph.D. from the Polytechnical University of Cataluña (UPC), Spain. He also holds a Master in Mathematics, Statistic and Operation Research (Licenciado en Ciencias Matemáticas, UNED). His research focuses on advanced data transmission techniques, heterogeneous wireless multihop networks, Internet o Things, technologies and services in the context of smart cities and applied mathematical methods for telecommunications. He has participated in several National and European research projects belonging to the 4th, 5th, 6th and 7th and H2020 Framework Program in which he was technical manager of SmartSantander. He has published over 150 journal and conference papers. He serves as editor of several journals and he has been invited to participate in the Steering Committee and Technical Program Committee of the most relevant international conferences. In parallel to this activity, he serves as consultant for the Spanish Government as well as for different companies in Europe. Last but not least, he has served as an expert of the ETSI and European Commission.',
        linkedin: '',
        twitter: '',
        domain: 'Associates',
        location: 'Spain',
        flag: 'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
    },
    {
        name: 'Joaquín Salvachúa',
        img: 'https://www.fiware.org/wp-content/directories/people/images/fisab/joaqui%CC%81n-salvachu%CC%81a.png',
        position: 'Associate Professor',
        company: 'Universidad Politécnica de Madrid',
        'company-link': 'https://www.upm.es/internacional',
        content:
            'Prof. Joaquín Salvachúa received a master degree in Computer Science. He holds the Orange Chair for the “Science of Complex Networks” and the Kairos Chair on “Bank Middleware and Blockchain” at UPM and is a member of the UPM-ING and CyberAula groups. He has participated in several European research projects with several publications at international magazines, books and conferences. (https://orcid.org/0000-0002-7269-8079). Also have participated in several standardization activities, including been coauthor one RFC ( RFC 8802 ).His research focuses today on WebRTC, Cloud infrastructure, social graphs and recommendation, agile cloud infrastructures, P2P, DHT (Distributed HashTables), IOT, Non SQL Data Bases, Big data processing architectures, Identity Management and BlockChain distributed agreement algorithms.His teaching duties includes cloud computing, distributed application development, Databases, Web Full-stack development, Blockchain architecture, Data Engineering and Big data architecture and applications. Has been involved in the FIWARE Initiative since it started (2010) and he is architect and developer of several GE related to security, data persistence and Big Data analysis.',
        linkedin: 'https://es.linkedin.com/in/jsalvachua',
        twitter: 'https://twitter.com/jsalvachua',
        domain: 'Associates',
        location: 'Spain',
        flag: 'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
    },
    {
        name: 'Antonio Skarmeta',
        img: 'https://www.fiware.org/wp-content/directories/people/images/fisab/antonio-skarmeta.png',
        position: 'Full Professor',
        company: 'University of Murcia',
        'company-link': 'https://www.um.es/en/web/iwp/inicio',
        content:
            'Prof. Antonio Skarmeta received a master degree in Computer Science from the University of Granada and B.S. (Hons.) and a Ph.D. degree in Computer Science from the University of Murcia, Spain. Since 2009, he has been Full Professor at the same department and University. He has worked on different research projects in the national and international area in the networking, security and IoT area. He now coordinates the H2020 project IoTCrawler focusing on IoT advanced discovery on IPv6 networks and OLYMPUS on privacy preserving IdM. He has been head of the research group ANTS since its creation in 1995. Currently, he is also Advisor to the Vice-Rector of Research of the University of Murcia for International projects and Head of the International Research Project Office. Since 2014, he has been the Spanish National Representative for the MSCA within H2020. He has published over 200 international papers and is a member of several program committees. He has also participated in several standardization fora like IETF, ISO and ETSI and being nominated as IPv6 Forum Fellow.',
        linkedin: '',
        twitter: '',
        domain: 'Associates',
        location: 'Spain',
        flag: 'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
    },
    {
        name: 'Paolo Traverso',
        img: 'https://www.fiware.org/wp-content/directories/people/images/fisab/paolo-traverso.png',
        position: 'Scientific Director',
        company: 'FBK',
        'company-link': 'https://www.fbk.eu/it/',
        content:
            'Prof. Paolo Traverso received a master degree in Electronic Engineering at University of Genoa, he is the Director of Strategic Marketing and Business Development at Fondazione Bruno Kessler (FBK, Trento - Italy). From 2011 to 2013, he was the Director of the Trento Research, Education, and Innovation System, the core partner of the European Institute of Innovation and Technology in ICT (the EIT Digital). From February 2017 until February 2019, He was appointed as Chair of the Node Strategy Committee of the Italian node of EIT Digital Italy. He was head of the Automated Reasoning Systems Division at the Institute for Scientific Research and Technology (IRST) from 2000 to 2007. He joined IRST in 1989, after working for four years in the advanced technology groups of different companies for management information consulting in Chicago, London, and Milan. In 2005, he was nominated EurAi/ECCAI fellow “for pioneering work in the field of Artificial Intelligence, and outstanding service to the AI community”. From July 2018 he has been appointed as a member of the Management Committee of the National Laboratory on Artificial Intelligence and Intelligent Systems (funded in 2018 by CINI – National Interuniversity Consortium for Informatics). He has been appointed as member of the Scientific Advisory Board of the Deutsches Forschungszentrum für Künstliche Intelligenz (DFKI) since January 2019.',
        linkedin: 'https://www.linkedin.com/in/paolo-traverso-73053b7/',
        twitter: 'https://twitter.com/traverso_paolo',
        domain: 'Associates',
        location: 'Italy',
        flag: 'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
    }
];
