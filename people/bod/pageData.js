var companies = [
  'ADDIX',
  'Atos',
  'AWS',
  'City of Herne',
  'Engineering',
  'Hopu – Libelium',
  'Martel Innovation',
  'MediTech',
  'MRDA',
  'NEC Corporation',
  'Red Hat',
  'Secmotic',
  'TeamDev',
  'Telefonica',
  'Trigyn Technologies',
  'Ubiwhere'
];
var departments = [];
var domains = ['Gold', 'Platinum'];
var titles = [
  'CDO',
  'CEO',
  'Co-Founder',
  'CSO',
  'CTO',
  'Director',
  'General Manager',
  'Head of Global IoT',
  'IoT Specialist',
  'Managing Director',
  'NEC Fellow',
  'Smart Cities Specialist'
];
var countries = [
  'France',
  'Germany',
  'India',
  'Italy',
  'Japan',
  'Portugal',
  'Saudi Arabia',
  'Spain',
  'Switzerland',
  'United States'
];
var modalData = [
  {
    name: 'Dario Avallone',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/dario-avallone.png',
    position: 'Research and Development Director',
    company: 'Engineering',
    'company-link': 'https://www.eng.it/en/',
    content:
      'Straight after getting his degree in Computer Science, Dario joined Engineering Ingegneria Informatica S.p.A’s R&amp;D Laboratory, where he has so far held different successful positions. In 2000, Dario became the Director of the R&amp;D division, aiming to push innovation into the large Engineering Group. During his professional career, Dario has been directly involved in different research initiatives, holding both managerial and technical responsibilities. He is also the author of different publications and articles and has co-authored the book “The Renaissance of Legacy Systems”.',
    linkedin: 'https://www.linkedin.com/in/dario-avallone-428934a/',
    twitter: '',
    domain: 'Platinum',
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Ali Benfattoum',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/ali-benfattoum.png',
    position: 'IoT &amp; Smart Cities Specialist',
    company: 'AWS',
    'company-link': 'https://aws.amazon.com/',
    content:
      'Ali Benfattoum is a Technology Evangelist for IoT and Smart Cities at Amazon Web Services. With over 12 years of experience in IoT and Smart Cities, Ali brings his technical expertise to enable and help customers and partners to accelerate their IoT and Smart Cities projects. Ali also holds an executive MBA, giving him the ability to zoom out and help customers and partners at a strategic level.',
    linkedin: 'https://www.linkedin.com/in/alibenfattoum/',
    twitter: 'https://twitter.com/alifrugal',
    domain: 'Platinum',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
  },
  {
    name: 'José Benitez',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/jose-benitez.png',
    position: 'Co-Founder &amp; Chief Executive Officer',
    company: 'Secmotic',
    'company-link': 'https://secmotic.com/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/jose-benitez-secmotic',
    twitter: 'https://twitter.com/josesecmotic',
    domain: 'Gold',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Agustin Cardenas Fernandez',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/agustin-cardenas-fernandez.png',
    position: 'Director of Company Business Transformation',
    company: 'Telefonica',
    'company-link': 'https://www.telefonica.com/en/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/agucardenas/',
    twitter: 'https://twitter.com/agucardenas',
    domain: 'Platinum',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Rui Costa',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/rui-costa.png',
    position: 'Chief Executive Officer',
    company: 'Ubiwhere',
    'company-link': 'https://www.ubiwhere.com/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/ruiarnaldo/',
    twitter: '',
    domain: 'Gold',
    location: 'Portugal',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Portugal.png'
  },
  {
    name: 'Andrea Cruciani',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/andrea-cruciani.png',
    position: 'Co-Founder &amp; Chief Executive Officer',
    company: 'TeamDev',
    'company-link': 'https://www.teamdev.it/en/',
    content:
      'Andrea is the Agricolus co-founder and CEO, member of FIWARE Foundation BoD, Chairman of the FIWARE Smart AgriFood MSC. He runs the international business area and the financial aspects of the company and he has a technical background and experience in applications Development, Enterprise Architectures, Cloud Computing, and GIS. Andrea is involved in Innovative Startup Evolution and scaleup, during the years he worked with Public Administration, multinational companies, NGOs, and SMEs. He is a speaker for several universities and public events where he is invited to discuss entrepreneurship and digital transformation, and he is a contributor in several technical articles and publications about agritech.',
    linkedin: 'https://www.linkedin.com/in/andreacruciani/',
    twitter: 'https://twitter.com/kokkete',
    domain: 'Gold',
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Federico Facca',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/federico-facca.png',
    position: 'Chief Technology Officer',
    company: 'Martel Innovation',
    'company-link': 'https://www.martel-innovate.com/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/federicofacca/',
    twitter: 'https://twitter.com/chicco785',
    domain: 'Gold',
    location: 'Switzerland',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Switzerland.png'
  },
  {
    name: 'Tony Fortenberry',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/tony-fortenberry.png',
    position: 'Director of Business Development',
    company: 'Red Hat',
    'company-link': 'https://www.redhat.com/en',
    content: '',
    linkedin: 'https://www.linkedin.com/in/tonyfortenberry/',
    twitter: '',
    domain: 'Platinum',
    location: 'United States',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_United-States.png'
  },
  {
    name: 'Angelo Giuliana',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/ico_user.png',
    position: 'General Manager',
    company: 'MediTech',
    'company-link': 'https://meditech4.com/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/angelogiuliana/',
    twitter: '',
    domain: 'Gold',
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Pierre Golz',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/pierre-golz.png',
    position: 'Chief Digital Officer',
    company: 'City of Herne',
    'company-link': 'https://www.herne.de/',
    content:
      'After getting his diploma as a public administration specialist, Pierre joined the city as an organizational developer and change manager. Since 2013, he has been working on projects focused on digitization and process management, and, at the age of 31, Pierre is the city’s youngest CDO to date. Pierre is also a lecturer in E-Government, Digitization, and Knowledge Management (among other areas) and feels that being able to combine science, economy and public management adds considerably to his career and role within the city.',
    linkedin: 'https://www.linkedin.com/in/pierre-golz-311396156/',
    twitter: '',
    domain: 'Gold',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Dilip Hanumara',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/dilip-hanumara.png',
    position: 'Chief Executive Officer',
    company: 'Trigyn Technologies',
    'company-link': 'https://www.trigyn.com/',
    content: '',
    linkedin: '',
    twitter: '',
    domain: 'Platinum',
    location: 'India',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_India.png'
  },
  {
    name: 'Antonio Jara',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/antonio-jara.png',
    position: 'Chief Scientific Officer',
    company: 'Hopu – Libelium',
    'company-link': 'https://hopu.eu/',
    content:
      'Antonio has a PhD from the University of Murcia (Spain) and a MBA from the ENAE business school and UCAM (2012). He has received entrepreneurship awards from ENAE, emprendeGo, IPSO Alliance Award for its disruptive innovation in the IoT. As part of HOP Ubiquitous, Jara is focused on the Smart Cities market with solutions for citizens engagements, tourism, active participation, physical web and environmental monitoring (air quality sensors) in projects such as ENIAC SAFESENS, interoperability / pilots (SmartSDK, Synchronicity, Organicity, BeinCPPS) and also in several actions related to security/privacy (INPUT and FORTIKA).',
    linkedin: 'https://www.linkedin.com/in/jara-libelium/',
    twitter: 'https://twitter.com/antonio_jara',
    domain: 'Gold',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Natalija Krivokapić',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/natalija-krivokapic%CC%81.png',
    position: 'Head of Global IoT',
    company: 'Atos',
    'company-link': 'https://atos.net/en/',
    content: '',
    linkedin:
      'https://www.linkedin.com/in/dr-natalija-krivokapi%C4%87-b346563/',
    twitter: '',
    domain: 'Platinum',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Abdulmajeed Mangarah',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/abdulmajeed-mangarah.png',
    position: 'Smart City Program Director',
    company: 'MRDA',
    'company-link': 'https://www.mda.gov.sa/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/abdulmajeedsaud/',
    twitter: '',
    domain: 'Platinum',
    location: 'Saudi Arabia',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_SaudiArabia.png'
  },
  {
    name: 'Yasunori Mochizuki',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/yasunori-mochizuki.png',
    position: 'NEC Fellow',
    company: 'NEC Corporation',
    'company-link': 'https://www.nec.com/',
    content:
      'Yasunori joined NEC in 1987, straight after concluding his PhD in Electronics Engineering. He went on to spend over two decades at NEC’s corporate R&amp;D center, first as a research scientist and later as a department manager, gaining broader technical expertise, including solid-state physics, semiconductor devices/LSIs, and computer science. Later in 2013, Yasunori started working at NEC’s newly-created Business Innovation Unit. As a senior vice president, he was responsible for the corporate-wide technology strategy and IoT business strategy. His current title of NEC Fellow means that he actively participates in innovation policy proposals, global ecosystem building related to smart society, and digital transformation. He is also a BoD member of FIWARE Foundation, World Economic Forum. Fellow, and member of Business at OECD (BIAC) Committee for Digital Economy Policy.',
    linkedin: 'https://www.linkedin.com/in/yasunori-mochizuki-93bab674/',
    twitter: 'https://twitter.com/yasunorimochiz',
    domain: 'Platinum',
    location: 'Japan',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Japan.png'
  },
  {
    name: 'Björn Schwarze',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/bod/bjo%CC%88rn-schwarze.png',
    position: 'Managing Director',
    company: 'ADDIX',
    'company-link': 'https://www.addix.net/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/bjoernschw/',
    twitter: '',
    domain: 'Gold',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  }
];
