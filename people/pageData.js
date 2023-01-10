var companies = ['FIWARE Foundation'];
var departments = [
  'Administrative Team',
  'Marketing Team',
  'Operations Team',
  'Tech Team'
];
var domains = [
  'Smart AgriFood',
  'Smart Cities',
  'Smart Energy',
  'Smart Industry',
  'Smart Water'
];
var titles = [
  'Administrational Assistant',
  'Architect',
  'Assistant to the BOO',
  'Business Development Manager',
  'Chief Executive Officer',
  'Chief Marketing Officer',
  'Chief Operations Officer',
  'Chief Technology Officer',
  'Cloud Expert',
  'Community Manager',
  'Consultant',
  'Data Modeling Expert',
  'Design Manager',
  'Evangelist',
  'FIWARE Solution Architect',
  'Marketing Manager',
  'Outreach Manager',
  'Platform Expert',
  'Product Manager',
  'Project Manager',
  'Public Relations Manager',
  'Technical Expert',
  'Technical Lead',
  'VP Funded Programs',
  'Working Student'
];
var countries = ['Finland', 'France', 'Germany', 'Italy', 'Peru', 'Spain'];
var modalData = [
  {
    name: 'Alberto Abella',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/alberto-abella.png',
    position: 'Data Modeling Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/albertoabella/',
    twitter: 'https://twitter.com/aabella',
    domain: 'Smart Energy',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Ulrich Ahle',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/ulrich-ahle.png',
    position: 'CEO',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
    linkedin: 'https://de.linkedin.com/in/ahlefiware',
    twitter: 'https://twitter.com/UlrichAhle',
    domain: 'Smart AgriFood',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Vera Böhner',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/vera-bohner.png',
    position: 'Marketing Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: '',
    twitter: '',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Gernot Böge',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/gernot-boge.png',
    position: 'FIWARE Solution Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/gernot-boege-4204a2226/',
    twitter: '',
    domain: 'Smart AgriFood',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Cristina Brandtstetter',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/cristina-brandtstetter.png',
    position: 'CMO',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
    linkedin: 'https://www.linkedin.com/in/brandtstetter',
    twitter: '',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'David Campo',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/david-campo.png',
    position: 'Senior Technical Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: '',
    twitter: '',
    domain: '',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
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
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Chandra Challagonda',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/chandra-challagonda.png',
    position: 'Senior Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://linkedin.com/in/challagonda',
    twitter: 'https://twitter.com/challagonda',
    domain: '',
    location: 'Finland',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Finland.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Stefano De Panfilis',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/stefano-depanfilis.png',
    position: 'COO',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
    linkedin: 'https://www.linkedin.com/in/stefano-de-panfilis-1928a11/',
    twitter: 'https://twitter.com/depa01',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Jason Fox',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/jason-fox.png',
    position: 'Senior Technical Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/jason-fox-8a79563/',
    twitter: '',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Juanjo Hierro',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/juanjo-hierro.png',
    position: 'CTO',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
    linkedin: 'https://www.linkedin.com/in/jhierro/',
    twitter: 'https://twitter.com/JuanjoHierro',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Fernando López Aguilar',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/fernando-lopez-aguilar.png',
    position: 'Cloud &amp; Platform Expert',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/fernandolopezaguilar/',
    twitter: 'https://twitter.com/flopezaguilar',
    domain: 'Smart Water',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
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
    domain: 'Smart Industry',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Xhulja Melyshi',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/xhulja-melyshi.png',
    position: 'Working Student',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/xhulja-melyshi-273b66211/',
    twitter: '',
    domain: '',
    location: 'Germany',
    flag: 'https://www.fiware.org/wp-content/uploads/2020/07/flag_Germany.png'
  },
  {
    name: 'Clara Pezuela',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/clara-pezuela.png',
    position: 'Vice President Funded Programs',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/clara-pezuela-2b1257/',
    twitter: '',
    domain: '',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Jesús Ruiz Martinez',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/jesus-ruiz.png',
    position: 'Senior Consultant',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: '',
    twitter: '',
    domain: '',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Tonia Sapia',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/tonia-sapia.png',
    position: 'Senior Marketing &amp; Project Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/tonia-sapia-a171bb63/',
    twitter: '',
    domain: '',
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Ángeles Tejado',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/angeles-tejado.png',
    position: 'Project Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin:
      'https://www.linkedin.com/in/%C3%A1ngeles-tejado-s%C3%A1nchez-2a61b411/',
    twitter: '',
    domain: '',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Karen Vega',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/karen-vega.png',
    position: 'Senior Business Development Manager',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://de.linkedin.com/in/karenvega',
    twitter: '',
    domain: '',
    location: 'Peru',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Peru.png'
  },
  {
    name: 'Dennis Wendland',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/team/dennis-wendland.png',
    position: 'Technical Lead &amp; Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/dennis-wendland/',
    twitter: '',
    domain: 'Smart Cities',
    location: 'Germany',
    flag: 'https://www.fiware.org/wp-content/uploads/2020/07/flag_Germany.png'
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
    location: 'Germany',
    flag: 'https://www.fiware.org/wp-content/uploads/2020/07/flag_Germany.png'
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
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
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
    location: 'Germany',
    flag: 'https://www.fiware.org/wp-content/uploads/2020/07/flag_Germany.png'
  }
];
