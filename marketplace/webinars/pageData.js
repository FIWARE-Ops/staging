var pageData = [
  {
    name: 'Introduction to FIWARE',
    img: 'https://fiware.github.io/academy/img/intro.png',
    companyLink: "https://youtu.be/97JsnnpPLrA'",
    domain: ['Developers', 'Business', 'Community', 'iHubs'],
    type: 'Fundamentals',
    technology: ['NGSI-v2'],
    year: 2017,
    difficulty: 0,
    content:
      '<ul>\n<li>What is context data?</li>\n<li>How is context data used within a Smart Solution?</li>\n<li>What is FIWARE? How does it help</li>\n<li>What is NGSI v2?</li>\n<li>What is the FIWARE Catalogue?</li>\n<li>What is the FIWARE Marketplace?</li>\n<li>What is the role of the FIWARE Foundation?</li>\n</ul>\n<p>This video presentation is a basic introduction describing what FIWARE is, why you need it and how the elements of the FIWARE Catalogue can help accelerate the development of your Smart Solution.</p>'
  },
  {
    name: 'Core Context Management',
    img: 'https://fiware.github.io/academy/img/core-context.png',
    companyLink: 'https://www.youtube.com/watch?v=pK4GgYjlmdY',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-v2'],
    year: 2017,
    difficulty: 2,
    content:
      '<ul>\n<li>What is Context Data?</li>\n<li>What is a Context Broker?</li>\n<li>What is NGSI v2?</li>\n<li>Introduction to harmonized data models</li>\n<li>How to read and update context data via REST</li>\n<li>How to assign relationships between Entities</li>\n<li>How to register other sources as context data</li>\n<li>How to subscribe to changes in context</li>\n</ul>\n<p>This video presentation is an introduction to Core Context Management describing about the NGSI DataModel and the NSGI\ninterface, registrations, subscription etc.</p>'
  },
  {
    name: 'What is an IoT Agent?',
    img: 'https://fiware.github.io/academy/img/iot-agents.png',
    companyLink: 'https://www.youtube.com/watch?v=my6Kgiqx-OM',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['IoT Agent'],
    year: 2017,
    difficulty: 2,
    content:
      '<p>This video presentation shows how to connect IoT Devices to the Context Broker using an IoT Agent and how to ensure your\ndevice is <em>FIWARE Ready</em>.</p>\n<ul>\n<li><p>What is a transport?</p></li>\n<li><p>What is a message protocol?</p></li>\n<li><p>What do the terms northbound/southbound and north/south port mean ?</p></li>\n<li><p>How are commands and measurements processed?</p></li>\n<li><p>What is an IoT Agent? What does it do?</p></li>\n<li><p>How can I configure an IoT Agent over HTTP?</p></li>\n<li><p>How can I configure an IoT Agent over MQTT?</p></li>\n</ul>'
  },
  {
    name: 'How to Secure FIWARE Architectures',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Security',
    technology: ['NGSI-v2', 'Keyrock'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'How to Debug IoT Agents',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['NGSI-v2', 'IoT Agent'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'How to Get Context Data Out of Robots',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Robotics',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Data Modelling with NGSI',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-v2', 'Data Models'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Strategies for Context Data Persistence',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-v2', 'Draco', 'Cygnus', 'Apache Flume', 'Apache NIFI'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Short Term History within FIWARE Systems',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-v2', 'STH-Comet', 'QuantumLeap', 'Grafana'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Securing FIWARE IoT Devices',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Security',
    technology: ['IoT Agent', 'Keyrock'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'How to Develop FIWARE NGSI Interfaces for Robots',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Robotics',
    technology: ['NGSI-v2'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Introduction to NGSI-LD',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'FIWARE Building the Future',
    img: '',
    companyLink: '',
    domain: ['Developers', 'Business'],
    type: 'Cross-Chapter',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Architecting Your Smart Solution Using FIWARE',
    img: '',
    companyLink: '',
    domain: ['Developers', 'Business'],
    type: 'Cross-Chapter',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'FIWARE Vision and Value Proposition for a Smart Future',
    img: '',
    companyLink: '',
    domain: ['Developers', 'Business'],
    type: 'Cross-Chapter',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'The Use of DDS Middleware in Robotics',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Robotics',
    technology: ['DDS'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Blockchain/DLT Integration with FIWARE',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['Canis Major'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Big Data Analysis using Cosmos with Spark or Flink',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['Cosmos', 'Apache Spark', 'Apache Flink'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name:
      'NGSI-LD and Smart Data Models - Standardizing Access to Digital Twins',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Robots and Machine Interfaces: Building Interfaces to ROS Systems',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Robotics',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Turning Organizations Into Smart Organizations',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Cross-Chapter',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Smart Water Management - Using FIWARE Smart Data Models for Water',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name:
      'FIWARE and micro-ROS: Enabling Robotics Systems on Micro-controllers',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Robotics',
    technology: ['microROS'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Integrating Robotic Systems for Agile Manufacturing Using FIWARE',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Robotics',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name:
      'Cities as Enablers of the Data Economy - Smart Data Models for Cities',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Cross-Chapter',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Machine Learning with Cosmos and Spark',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['Cosmos', 'Apache Spark'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: "Monetizing your Organization's Data",
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Data Monetization',
    technology: ['Business Ecosystem'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Creating Advanced Dashboards Using Wirecloud',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Visualisation',
    technology: ['Wirecloud'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Choosing Open Source Licenses for FIWARE Components',
    img: '',
    companyLink: '',
    domain: ['Community', 'Business'],
    type: 'Cross-Chapter',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Adopting Common Smart Data Models for Smart Cities',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'India Urban Data Exchange',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'NGSI-LD IoT Agents',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['NGSI-LD', 'IoT Agent'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Monitoring Measures Using FIWARE & Grafana',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Visualisation',
    technology: ['NGSI-v2', 'NGSI-LD', 'QuantumLeap', 'Grafana'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Customizing IoT Agents',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['IoT Agent'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Connecting NGSI-LD FIWARE Components',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'End-to-end AI Solution With PySpark & Draco',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['AI', 'Pyspark'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'NGSI-LD Temporal Operations',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name:
      'Managing Users Identities and Access Control Policies with API Umbrella',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Security',
    technology: ['API Umbrella', 'Keyrock'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Language Maps and Multilanguage support in NGSI-LD',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Machine learning with FIWARE and MLOps',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Operations',
    technology: ['AI', 'MLOps'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Scalable deployments with FIWARE',
    img: '',
    companyLink: '',
    domain: ['Developers'],
    type: 'Operations',
    technology: [],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Cloud-Edge processing with FogFlow',
    img: 'https://www.youtube.com/watch?v=D06W3t5uv94',
    companyLink: 'https://fiware.github.io/academy/img/fogflow.png',
    domain: ['Developers'],
    type: 'Processing',
    technology: ['FogFlow'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'FIWARE Basics, understanding the terminology',
    img: 'https://fiware.github.io/academy/img/basics.png',
    companyLink: 'https://www.youtube.com/watch?v=laDTBcLziB8',
    domain: ['Developers', 'Business', 'Community', 'iHubs'],
    type: 'Fundamentals',
    technology: ['NGSI-LD'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Passing the FIWARE Experts Exam',
    img: 'https://fiware.github.io/academy/img/experts.png',
    companyLink: 'https://www.youtube.com/watch?v=6_JLn-69Z_8',
    domain: ['Developers', 'iHubs'],
    type: 'Cross-Chapter',
    technology: ['NGSI-v2', 'NGSI-LD'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Managing Data Models and Exposing Digital Twins',
    img: 'https://fiware.github.io/academy/img/beyond-ngsi-ld.png',
    companyLink: 'https://www.youtube.com/watch?v=42dNh1VM7n4',
    domain: ['Developers', 'iHubs', 'Business'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'NGSI-LD Concise Payloads and Merge Patch Operations',
    img: 'https://fiware.github.io/academy/img/concise-merge-patch.png',
    companyLink: 'https://www.youtube.com/watch?v=-XPGyM7K_kU',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'Extending FIWARE MLOps using Argo Workflows',
    img: 'https://fiware.github.io/academy/img/argo.png',
    companyLink: 'https://www.youtube.com/watch?v=IIN5d2Mco9A',
    domain: ['Developers'],
    type: 'Operations',
    technology: ['AI', 'MLOps'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name:
      'Monitoring and Supervision of robotic systems using FIWARE and ROS 2',
    img: 'https://fiware.github.io/academy/img/iotagent-ros2.png',
    companyLink: 'https://www.youtube.com/watch?v=qDMljIidA6k',
    domain: ['Developers'],
    type: 'Robotics',
    technology: ['ROS2', 'IoT Agent'],
    year: 2017,
    difficulty: 2,
    content: ''
  },
  {
    name: 'IoT Agent Gateways Using the IOTA Tangle for Secure Data Transfer',
    img: 'https://fiware.github.io/academy/img/tangle.png',
    companyLink: 'https://www.youtube.com/watch?v=gED5mAtBtYg',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['IOTA Tangle', 'IoT Agent'],
    year: 2017,
    difficulty: 2,
    content: ''
  }
];
