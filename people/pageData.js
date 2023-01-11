var companies = ['FIWARE Foundation'];
var departments = [
  'Administrative Team',
  'Marketing Team',
  'Operations Team',
  'Tech Team'
];
var domains = [];
var titles = [
  'Administrational Assistant',
  'Architect',
  'Assistant to the BOO',
  'Business Development Manager',
  'CEO',
  'Cloud Expert',
  'CMO',
  'Community Manager',
  'Consultant',
  'COO',
  'CTO',
  'Data Modeling Expert',
  'Design Manager',
  'Evangelist',
  'Marketing Manager',
  'Marketplace Manager',
  'Outreach Manager',
  'Platform Expert',
  'Product Manager',
  'Project Manager',
  'Public Relations Manager',
  'Solution Architect',
  'Technical Expert',
  'Technical Lead',
  'VP Funded Programs',
  'Working Student'
];
var countries = [];
var modalData = [
  {
    name: 'Alberto Abella',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/alberto-abella.png',
    position: 'Data Modeling Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Alberto Abella is PhD in Business (Open data) and Telecommunications Engineer and Master in Total Quality Management, Business Administration and Business Organization. He works as a Data Modelling Expert and Technical Evangelist at FIWARE and currently is the responsible person for the smart data models initiative.',
    linkedin: 'https://www.linkedin.com/in/albertoabella/',
    twitter: 'https://twitter.com/aabella',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Ulrich Ahle',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/ulrich-ahle.png',
    position: 'Chief Executive Officer',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Following his extensive experience in the industrial sector (including Vice President and leader of Manufacturing, Retail &amp; Transportation Consulting &amp; Systems Integration at Atos Germany), helping clients to digitize their business, Ulrich joined the foundation in September 2016. He is on the Board of the International Data Spaces Association and was also on the Board of prostep ivip Association for 16 years, before becoming an Honorary Member in 2019.',
    linkedin: 'https://de.linkedin.com/in/ahlefiware',
    twitter: 'https://twitter.com/UlrichAhle',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Vera Böhner',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/vera-bohner.png',
    position: 'Marketing Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/vera-b%C3%B6hner-88a39693/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Gernot Böge',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/gernot-boge.png',
    position: 'Solution Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/gernot-boege-4204a2226/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Cristina Brandtstetter',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/cristina-brandtstetter.png',
    position: 'Chief Marketing Officer',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'With a strong track record of success over her 20+ years international career in Operations, Change Management, Strategy, M&amp;A, Marketing &amp; PR, Product Management, Consulting, build-up organisations of industry/vertical teams and diversified go-to-market channels (among many other areas), Cristina joined the foundation in June 2019 to lead the organization’s Marketing, Press and PR teams, with a strong focus on corporate portfolio and partner activities.',
    linkedin: 'https://www.linkedin.com/in/brandtstetter',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'David Campo',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/david-campo.png',
    position: 'Senior Technical Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/davidnazarenocampo/',
    twitter: 'https://twitter.com/dncampo',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'José Ignacio Carretero',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/jose-ignacio-carretero.png',
    position: 'Cloud &amp; Platform Expert',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin:
      'https://www.linkedin.com/in/jos%C3%A9-ignacio-carretero-guarde-789622ab/',
    twitter: 'https://twitter.com/jicarreterogu',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Chandra Challagonda',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/chandra-challagonda.png',
    position: 'Solution Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://linkedin.com/in/challagonda',
    twitter: 'https://twitter.com/challagonda',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Kseniia Chernikova',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/kseniia-chernikova.png',
    position: 'PR Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/kseniia-chernikova-184553211/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Giacomo De Panfilis',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/giacomo-depanfilis.png',
    position: 'Design Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/giacomodepanfilis/',
    twitter: 'https://twitter.com/_gdepa',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Stefano De Panfilis',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/stefano-depanfilis.png',
    position: 'Chief Operations Officer',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Stefano joined Engineering Ingegneria Informatica S.p.A. in 1984 and went from Director of R&amp;D Laboratories Department (overseeing 100+ researchers in Europe and beyond) to Chief Innovation Officer of the Engineering Group in 2011. He joined FIWARE Foundation in 2017. Besides his role as COO, he is responsible for the FIWARE Lab Nodes and is also a member of the FIWARE Technical Steering Committee.',
    linkedin: 'https://www.linkedin.com/in/stefano-de-panfilis-1928a11/',
    twitter: 'https://twitter.com/depa01',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Hendrik Engel',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/hendrik-engel.png',
    position: 'Marketing &amp; Product Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/hendrik-engel-3253a1197/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Aljo Fazlagic',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/aljo-fazlagic.png',
    position: 'Administrational Assistant',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: '',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Jason Fox',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/jason-fox.png',
    position: 'Senior Technical Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Joined the FIWARE Foundation three years ago in the role of Senior Technical Evangelist. He is a Software Engineer with over twenty years experience in mobile and IT having previously worked at Nokia and HERE Technologies. Jason’s current role encompasses the development and assessment of FIWARE Technologies and technical coaching and training.',
    linkedin: 'https://www.linkedin.com/in/jason-fox-8a79563/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Lucca Giusti',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/lucca-giusti.png',
    position: 'Working Student',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/lucca-moreira-giusti-0648b816b/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Juanjo Hierro',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/juanjo-hierro.png',
    position: 'Chief Technology Officer',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Juanjo is the Chief Technology Officer (CTO) of FIWARE Foundation. He is also the chairman of the FIWARE Technical Steering Committee and coordinates the FIWARE Tech Roadmap. He also supports the FIWARE Community in developing the vision and value proposition of FIWARE in the several domains where it is being applied. Juanjo is also part of the Technical Advisory Council of the Open and Agile Smart Cities (OASC) initiative which he helped to found. OASC is aimed at creating a Digital Single Market for Smart Cities, based on the adoption of common Minimum Interoperability Mechanisms (MIMs) that enable smart city services to be replicable across cities and portable across platforms.',
    linkedin: 'https://www.linkedin.com/in/jhierro/',
    twitter: 'https://twitter.com/JuanjoHierro',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Anastasiia Holub',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/anastasiia-holub.png',
    position: 'Marketing &amp; Outreach Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/anastasiia-holub-9b50b994/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Andrea Kather',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/andrea-kather.png',
    position: 'Assistant to the BOO',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: '',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Charlotte Kotterman',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/charlotte-kotterman.png',
    position: 'Community Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://de.linkedin.com/in/charlottekotterman',
    twitter: 'https://twitter.com/char_kotterman',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Oleg Korneev',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/oleg-korneev.png',
    position: 'Marketing Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/korneev-oleg-projectmanager',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Yuzhen Li',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/yuzhen-li.png',
    position: 'Working Student',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/yuzhen-li-b242421a4/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Fernando López Aguilar',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/fernando-lopez-aguilar.png',
    position: 'Cloud &amp; Platform Expert',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Fernando López de Aguilar (male) is FIWARE Cloud and Platform Senior Expert at the FIWARE Foundation. He obtained a Bachelor Degree in computer science summa cum laude by E.P.S. Córdoba and Master Degree in Computer Science from the E.T.S Ingeniería Informática - University of Málaga in 1998. In March 2000, he started working in Meta4 S.A. as a Software Engineer at R&amp;D Department as a Database Expert and Java developer. In May 2001, he joined Telefónica I+D where he participated in multiple R&amp;D project lines covering advanced broadband communications, NGN, IPv4/IPv6 compatibility, Mobile IP, multimedia applications, new mobile services, M2M communication, semantic web sensors, NoSQL DB and definition of IoT reference architecture. Since 2011 and until he joined the FIWARE Foundation.',
    linkedin: 'https://www.linkedin.com/in/fernandolopezaguilar/',
    twitter: 'https://twitter.com/flopezaguilar',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Francisco Meléndez',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/francisco-melendez.png',
    position: 'Technical Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/franmelfer/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Xhulja Melyshi',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/xhulja-melyshi.png',
    position: 'Marketplace Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/xhulja-melyshi-273b66211/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Clara Pezuela',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/clara-pezuela.png',
    position: 'Vice President Funded Programs',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Working in Atos since 22 years ago, she gained large experience in European research programs in digital domain. During such period I had the chance to participate in many diverse research projects doing different roles and working with many people across Europe.  She is a Computer Science engineer and Master in Innovation management. Technically speaking, She has been involved in sales and delivery about services architectures, cloud/edge computing, IoT and digital platforms. Additionally, she have a high level of knowledge in Open Source licensing, delivery and processes. Member of Technical Steering Committee at FIWARE Foundation and President of the Spanish Technology Platform for digital technologies on behalf of Atos. Currently, she is  Innovation Officer at CTO Office in Public Sector and Defense industry in charge of defining and putting in place the innovation strategy for this sector.',
    linkedin: 'https://www.linkedin.com/in/clara-pezuela-2b1257/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Jesús Ruiz Martinez',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/jesus-ruiz.png',
    position: 'Senior Consultant',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Member of the board and CTO of Alastria Blockchain Ecosystem, participates in the Technical Governance of EBSI (European Blockchain Services Infrastructure from European Commission and Member States), and in LACChain (blockchain network promoted by the Inter-American Development Bank). He inspired the Public-Permissioned model followed by those networks, where decentralized governance and SSI are critical components.',
    linkedin: 'https://www.linkedin.com/in/jesus-ruiz-martinez/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Tonia Sapia',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/tonia-sapia.png',
    position: 'Senior Marketing &amp; Project Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Tonia holds a PhD in Intercultural Sociology from 2010-2013. With more than 10 years of Experiences, Tonia comes with a profound expertise in working as a commercial coach and evaluator in European projects like frontierCities (2014-2016) and frontierCities2 (2016-2018) FIWARE Accelerator programme. She joined FIWARE Foundation in 2018 as a project manager for European projects with a strong focus on “Connecting Europe Facility (CEF)”. Since then, she has extended her responsibilities to several highly strategic projects to position and grow FIWARE Foundation in the academic as well as in the Accelerators/VC world through her additional role as a Marketing Manager. Projects include a FIWARE University Programme for students and professors, the foundation of the FIWARE Scientific Advisory Board, publication of FIWARE Impact Stories and Open Calls matching for SMEs and Startups and a new programme around Reference Marketing. Her involvement with European projects has been extended ever since, including Open Data under the umbrella of CEF grants, CEFAT4Cities (eGov and Smart Cities domains), ODALA (Smart Cities and Open Data), INTERSTAT (Public Administrations and Open Data), and since October 2020, as project manager, to i4Trust, specifically for the DIH engagement and community building (DIH Ambassador Programme), SPOTTED, focus on Earth Observation and Satellite Data, GreenMov, more related to smart Mobility and Smart Cities, Enershare, focused on Smart Solutions for Smart Energy domain. She regularly contributes to the writing of proposals to the European Commission.',
    linkedin: 'https://www.linkedin.com/in/tonia-sapia-a171bb63/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Ángeles Tejado',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/angeles-tejado.png',
    position: 'Senior Project Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin:
      'https://www.linkedin.com/in/%C3%A1ngeles-tejado-s%C3%A1nchez-2a61b411/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Karen Vega',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/karen-vega.png',
    position: 'Senior Business Development Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Currently Senior Manager at FIWARE Foundation. Master in Public Policy from Harvard University focusing on social and economic development. Member of the FIWARE IHubs support committee and the executive board of TOKEN Transformative Impact of Blockchain Technologies . Karen has held director roles in the public administration in her home country in Latin America among those were the Congress, Ministry of Housing, Building, Sanitation &amp; Health.',
    linkedin: 'https://de.linkedin.com/in/karenvega',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Dennis Wendland',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/dennis-wendland.png',
    position: 'Technical Lead &amp; Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Dr. Dennis Wendland is a Technical Lead and Architect at the FIWARE Foundation where he is involved in a variety of projects in the field of data spaces. He holds a doctorate in high energy physics from Humboldt University of Berlin gaining a broad experience in the development of particle collision data analysis software and the statistical analysis of large data sets. His doctoral dissertation was about the search of new elementary particles at high-energy collisions at the CERN Large Hadron Collider in Geneva. After his doctorate, he has also worked at T-Systems and Deutsche Telekom AG acquiring expertise in the development, architecture and management of large software projects.',
    linkedin: 'https://www.linkedin.com/in/dennis-wendland/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Stefan Wiedemann',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/stefan-wiedemann.png',
    position: 'Technical Lead &amp; Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/stefan-wiedemann-37a0ba13a/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Ken Zangelin',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/ken-zangelin.png',
    position: 'Senior Technical Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/kzangeli/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  },
  {
    name: 'Rosemah Zia',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/rosemah-zia.png',
    position: 'Working Student',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/rosemah-zia-a04237108/',
    twitter: '',
    domain: '',
    location: '',
    flag: ''
  }
];
