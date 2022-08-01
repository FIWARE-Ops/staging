var pageData = [
  {
    name: 'Introduction to FIWARE',
    img: 'https://fiware.github.io/academy/img/intro.png',
    companyLink: "https://youtu.be/97JsnnpPLrA'",
    domain: ['Developers', 'Business', 'Community', 'iHubs'],
    type: 'Fundamentals',
    technology: ['NGSI-v2'],
    year: 2019,
    difficulty: 1,
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
    year: 2019,
    difficulty: 3,
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
    year: 2019,
    difficulty: 3,
    content:
      '<p>This video presentation shows how to connect IoT Devices to the Context Broker using an IoT Agent and how to ensure your\ndevice is <em>FIWARE Ready</em>.</p>\n<ul>\n<li><p>What is a transport?</p></li>\n<li><p>What is a message protocol?</p></li>\n<li><p>What do the terms northbound/southbound and north/south port mean ?</p></li>\n<li><p>How are commands and measurements processed?</p></li>\n<li><p>What is an IoT Agent? What does it do?</p></li>\n<li><p>How can I configure an IoT Agent over HTTP?</p></li>\n<li><p>How can I configure an IoT Agent over MQTT?</p></li>\n</ul>'
  },
  {
    name: 'How to Secure FIWARE Architectures',
    img: 'https://fiware.github.io/academy/img/security.png',
    companyLink: 'https://www.youtube.com/watch?v=SP0zFdTybA4',
    domain: ['Developers'],
    type: 'Security',
    technology: ['NGSI-v2', 'Keyrock'],
    year: 2019,
    difficulty: 3,
    content:
      '<ul>\n<li><p>What are Identity Management and Access Control?</p></li>\n<li><p>Which FIWARE components will you need?</p></li>\n<li><p>What are Authentication and Authorization? How do they differ?</p></li>\n<li><p>What is OAuth2? What flows are supported?</p></li>\n<li><p>What is a PEP Proxy? What does it do?</p></li>\n<li><p>What is a PDP and when will I need one?</p></li>\n<li><p>What terms such as RBAC, PBAC and XACML mean and how are they used?</p></li>\n</ul>\n<p>This video presentation shows how to add Identity Management and Access Control elements to your FIWARE Architecture by\nusing the Generic Enablers from the Security Chapter.</p>'
  },
  {
    name: 'How to Debug IoT Agents',
    img: 'https://fiware.github.io/academy/img/iotagent-debug.png',
    companyLink: 'https://www.youtube.com/watch?v=FRqJsywi9e8',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['NGSI-v2', 'IoT Agent'],
    year: 2019,
    difficulty: 4,
    content:
      '<ul>\n<li>How to diagnose common problems</li>\n<li>How to test services in isolation</li>\n<li>How to set-up and interpret debug</li>\n<li>Configuring IoT Agents</li>\n<li>Adding diagnostic debug</li>\n<li>Where to look for help and advice</li>\n</ul>\n<p>This video presentation shows how to connect devices to processing enablers via an IoT Agent and the context broker,\nwhat can go wrong when trying to wire up the system. How to diagnose problems and how to fix them.</p>'
  },
  {
    name: 'How to Get Context Data Out of Robots',
    img: 'https://fiware.github.io/academy/img/robots-1.png',
    companyLink: 'https://www.youtube.com/watch?v=T8XV6Wah9l4',
    domain: ['Developers'],
    type: 'Robotics',
    technology: [],
    year: 2019,
    difficulty: 2,
    content:
      '<ul>\n<li>How can FIWARE and Standardized Context Data Management create synergies between Robotic Systems and other Smart\nSolutions?</li>\n<li>What is a Robotic System?</li>\n<li>How to get/put context data out from/into robotic systems?</li>\n</ul>\n<p>This video presentation shows how to retrieve context data and actuate robots</p>'
  },
  {
    name: 'Data Modelling with NGSI',
    img: 'https://fiware.github.io/academy/img/data-models-1.png',
    companyLink: 'https://www.youtube.com/watch?v=T_1DpKf6C_c\n',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-v2', 'Data Models', 'Cities', 'Agrifood'],
    year: 2019,
    difficulty: 4,
    content:
      '<ul>\n<li>Understanding and applying Standard Data Models.</li>\n<li><strong>NGSI v2</strong> : Relationships, properties and metadata</li>\n<li><strong>NGSI-LD</strong> : Relationships, properties and <code>@context</code></li>\n<li>Practical use cases in Smart City and Smart Agriculture</li>\n</ul>\n<p>This video presentation shows how to design and apply Standard NGSI Data Models.</p>'
  },
  {
    name: 'Strategies for Context Data Persistence',
    img: 'https://fiware.github.io/academy/img/data-persistence.png',
    companyLink: 'https://www.youtube.com/watch?v=_uLZDGFPlRA',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-v2', 'Draco', 'Cygnus', 'Apache Flume', 'Apache NIFI'],
    year: 2020,
    difficulty: 3,
    content:
      '<ul>\n<li>What is data persistence and why do you need it?</li>\n<li>Which data persistence options do you have?</li>\n<li>What is Big Data?</li>\n<li>Which FIWARE components are available to deal with the persistence of context data?</li>\n<li>Why do context brokers not offer a data persistence function of their own?</li>\n</ul>\n<p>Introduction to the data persistence components found within the FIWARE Catalogue and various options on how to maintain\na historical record of context when a context broker has no memory.</p>'
  },
  {
    name: 'Short Term History within FIWARE Systems',
    img: 'https://fiware.github.io/academy/img/short-term-history.png',
    companyLink: 'https://www.youtube.com/watch?v=fX_YAc7G4Dk',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-v2', 'STH-Comet', 'QuantumLeap', 'Grafana'],
    year: 2020,
    difficulty: 3,
    content:
      '<ul>\n<li>How is Short Term History relevant within my Smart application?</li>\n<li>Which FIWARE components are available to deal with Short Term History?</li>\n<li>What options exist to create a trend graph?</li>\n<li>Introduction to the NGSI-LD temporal interface</li>\n</ul>\n<p>This webinar shows how to utilise times series components and monitor and display trends within FIWARE applications</p>'
  },
  {
    name: 'Securing FIWARE IoT Devices',
    img: 'https://fiware.github.io/academy/img/secure-devices.png',
    companyLink: 'https://www.youtube.com/watch?v=_87IZhrYo3U',
    domain: ['Developers'],
    type: 'Security',
    technology: ['IoT Agent', 'Keyrock'],
    year: 2020,
    difficulty: 4,
    content:
      '<ul>\n<li>How can insecure systems be attacked?</li>\n<li>What common actions should be taken to help to secure systems?<ul>\n<li>What options do I have to secure HTTP traffic?</li>\n<li>What options do I have to secure MQTT traffic?</li>\n<li>What options do I have with other protocols?</li></ul></li>\n<li>What is a PEP Proxy and how can I use one to protect services and device?s</li>\n</ul>\n<p>Live coding session and commentary, demonstrating various techniques and methods for securing the interactions between\nDevices, IoT Agents, and the Context Broker.</p>'
  },
  {
    name: 'How to Develop FIWARE NGSI Interfaces for Robots',
    img: 'https://fiware.github.io/academy/img/robots-2.png',
    companyLink: 'https://www.youtube.com/watch?v=m5JWxlMMuqk',
    domain: ['Developers'],
    type: 'Robotics',
    technology: ['NGSI-v2'],
    year: 2020,
    difficulty: 2,
    content:
      '<ul>\n<li>Robot Types</li>\n<li>Digital Twins</li>\n<li>FIWARE NGSI Robotics Interfaces<ul>\n<li>ROS, ROS2, OPC-UA and DDS</li></ul></li>\n<li>Use Cases in Smart Industry</li>\n</ul>\n<p>This webinar presents different alternatives for developing FIWARE-Ready robots and the main FIWARE components that can\nfacilitate/empower these developments.</p>'
  },
  {
    name: 'Introduction to NGSI-LD',
    img: 'https://fiware.github.io/academy/img/ngsi-ld-1.png',
    companyLink: 'https://www.youtube.com/watch?v=rZ13IyLpAtA',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2020,
    difficulty: 3,
    content:
      '<ul>\n<li>What is JSON-LD?</li>\n<li>What is NGSI-LD?</li>\n<li>What is the relationship between<ul>\n<li>JSON-LD and NGSI-LD?</li>\n<li>NGSI v2 and NGSI-LD</li></ul></li>\n<li>What is core <code>@context</code> ?<ul>\n<li>Why are data models so important</li></ul></li>\n<li>Defining NGSI-LD properties, relationships and enumerations</li>\n<li>Using Compaction/Expansion operations on NGSI-LD data</li>\n<li>Navigating the <code>@graph</code></li>\n</ul>\n<p>A data-model driven and linked data first introduction for developers to NGSI-LD and JSON-LD.</p>'
  },
  {
    name: 'FIWARE Building the Future',
    img: 'https://fiware.github.io/academy/img/future.png',
    companyLink: 'https://www.youtube.com/watch?v=REoJA7yxJ_0',
    domain: ['Developers', 'Business'],
    type: 'Cross-Chapter',
    technology: ['NSGI-LD', 'Data Models', 'AI', 'Blockchain'],
    year: 2020,
    difficulty: 2,
    content:
      '<ul>\n<li>A Reminder of some core concepts</li>\n<li>Roadmap Topics<ul>\n<li>NGSI-LD</li>\n<li>Smart Data Models</li>\n<li>Blockchain</li>\n<li>Robotics</li>\n<li>Data Marketplace</li>\n<li>Marketplace of Plug &amp; Play AI / Big Data Services</li></ul></li>\n</ul>\n<p>An in-depth look at where FIWARE is going next and integrates with blockchain and distributed ledger technologies,\nArtificial Intelligence or Robotics.</p>'
  },
  {
    name: 'Architecting Your Smart Solution Using FIWARE',
    img: 'https://fiware.github.io/academy/img/architecting.png',
    companyLink: 'https://www.youtube.com/watch?v=pTkZk4VF0gY',
    domain: ['Developers', 'Business'],
    type: 'Cross-Chapter',
    technology: ['Cities', 'Agrifood', 'Water'],
    year: 2020,
    difficulty: 2,
    content:
      '<p>Learn how Smart Solutions solving a particular challenge are architected with FIWARE. This webinar is supported by use\ncases.</p>'
  },
  {
    name: 'FIWARE Vision and Value Proposition for a Smart Future',
    img: 'https://fiware.github.io/academy/img/fiware-vision.png',
    companyLink: 'https://www.youtube.com/watch?v=7ZMUYEWD1gw',
    domain: ['Developers', 'Business'],
    type: 'Cross-Chapter',
    technology: ['Cities', 'Agrifood', 'Water'],
    year: 2020,
    difficulty: 2,
    content:
      '<ul>\n<li>Understanding FIWARE</li>\n<li>Building <em>"Powered by FIWARE"</em> Solutions</li>\n<li>FIWARE: Going beyond the technology</li>\n</ul>\n<p>A broad overview of the value proposition of FIWARE and its position in a Smart Digital Future.</p>'
  },
  {
    name: 'The Use of DDS Middleware in Robotics',
    img: 'https://fiware.github.io/academy/img/robots-3.png',
    companyLink: 'https://www.youtube.com/watch?v=OQYBJJ5ydto',
    domain: ['Developers'],
    type: 'Robotics',
    technology: ['DDS', 'microROS'],
    year: 2020,
    difficulty: 2,
    content:
      '<ul>\n<li>About eProsima &amp; FIWARE</li>\n<li>Fast DDS &amp; ROS2<ul>\n<li>Introduction</li>\n<li>Architecture &amp; Demo</li>\n<li>What is new?</li></ul></li>\n<li>XRCE-DDS &amp; Micro-ROS</li>\n</ul>\n<p>An introduction to core real-time technologies: FAST DDS, the most complete Open Source DDS for ROS 2, and Micro\nXRCE-DDS, the middleware for microcontrollers, and micro-ROS.</p>'
  },
  {
    name: 'Blockchain/DLT Integration with FIWARE',
    img: 'https://fiware.github.io/academy/img/blockchain.png',
    companyLink: 'https://www.youtube.com/watch?v=ITSxtlCmNhQ',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['Canis Major', 'Blockchain'],
    year: 2020,
    difficulty: 2,
    content:
      "<ul>\n<li>Introduction to Blockchain / Distributed Ledger Technologies</li>\n<li>FIWARE and DLTs<ul>\n<li>Agri-Food Supply Chain Demo</li></ul></li>\n<li>Upcoming DLT Components and Research</li>\n</ul>\n<p>This webinar will be an introduction to Blockchain and how FIWARE can be integrated with Blockchain/DLTs with a demo. In\naddition, it will also explain upcoming DLT components in the FIWARE ecosystem and an idea/state of art to leverage DLTs\nin 'Powered by FIWARE' systems.</p>"
  },
  {
    name: 'Big Data Analysis using Cosmos with Spark or Flink',
    img: 'https://fiware.github.io/academy/img/big-data-1.png',
    companyLink: 'https://www.youtube.com/watch?v=n6XN89VSZNg',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['Cosmos', 'Apache Spark', 'Apache Flink'],
    year: 2020,
    difficulty: 3,
    content:
      '<p>Performing Big Data Analysis Using Cosmos With Spark or Flink</p>'
  },
  {
    name:
      'NGSI-LD and Smart Data Models - Standardizing Access to Digital Twins',
    img: 'https://fiware.github.io/academy/img/data-models-2.png',
    companyLink: 'https://www.youtube.com/watch?v=MBx23ypORLk',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models'],
    year: 2020,
    difficulty: 3,
    content:
      '<p>Understanding the basis of context information management, NGSI-LD and smart Data Models</p>'
  },
  {
    name: 'Robots and Machine Interfaces: Building Interfaces to ROS Systems',
    img: 'https://fiware.github.io/academy/img/robots-4.png',
    companyLink: 'https://www.youtube.com/watch?v=a0NxSS96YzY',
    domain: ['Developers'],
    type: 'Robotics',
    technology: [],
    year: 2020,
    difficulty: 3,
    content:
      '<ul>\n<li>ROS-Side Perspective (Introduction to FIROS 0.2.0)<ul>\n<li>Basic ROS Concepts</li>\n<li>FIROS Configuration</li>\n<li>ROS-NGSI mapping</li>\n<li>How to build the Interface</li></ul></li>\n<li>FIWARE-Side Perspective (Context Data Management in Robotics)<ul>\n<li>Simple Example: AMR in a Warehouse</li></ul></li>\n</ul>\n<p>This webinar will present how to develop FIWARE NGSI Interfaces for ROS-based robots.</p>'
  },
  {
    name: 'Turning Organizations Into Smart Organizations',
    img: 'https://fiware.github.io/academy/img/smart-organizations.png',
    companyLink: 'https://www.youtube.com/watch?v=XsoXchKiKB4',
    domain: ['Developers'],
    type: 'Cross-Chapter',
    technology: ['Cities', 'Agrifood', 'Water'],
    year: 2020,
    difficulty: 2,
    content:
      '<p>This webinar will cover the “system of systems” approach and FIWARE transformation journey, also with the help of\nsuccess stories.</p>'
  },
  {
    name: 'Smart Water Management - Using FIWARE Smart Data Models for Water',
    img: 'https://fiware.github.io/academy/img/smart-water.png',
    companyLink: 'https://www.youtube.com/watch?v=QbAiLMFEQrY',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models', 'Water'],
    year: 2020,
    difficulty: 2,
    content: '<p>Using FIWARE Smart Data Models for Water.</p>'
  },
  {
    name:
      'FIWARE and micro-ROS: Enabling Robotics Systems on Micro-controllers',
    img: 'https://fiware.github.io/academy/img/robots-5.png',
    companyLink: 'https://www.youtube.com/watch?v=XJL2_FHcils',
    domain: ['Developers'],
    type: 'Robotics',
    technology: ['microROS'],
    year: 2020,
    difficulty: 2,
    content:
      '<ul>\n<li>The micro-ROS Framework</li>\n<li>Synergies between Context Information Management and Robotics</li>\n<li>Structure of <em>FIWARE-Ready</em> and <em>"Powered by FIWARE"</em> micro-ROS Architectures</li>\n<li>SOSS-FIWARE</li>\n<li>Demo</li>\n</ul>\n<p>The aim of this webinar is to give an introduction about the existing synergies between FIWARE, ROS, and micro-ROS - the\nRobot Operating System for microcontrollers - frameworks.</p>\n<p>Special emphasis will be put on how to build interfaces between Powered by FIWARE architectures and ROS2/micro-ROS based\nrobotic systems. The SOSS-FIWARE, based on the eProsima Integration Service, is a key enabler that accelerates the\ndevelopment of these interfaces between micro-ROS and FIWARE ecosystems. Through a basic application, the main features\nof this component as well as the key concepts associated with the synergies between FIWARE and micro-ROS will be\noverviewed.</p>'
  },
  {
    name: 'Integrating Robotic Systems for Agile Manufacturing Using FIWARE',
    img: 'https://fiware.github.io/academy/img/robots-6.png',
    companyLink: 'https://www.youtube.com/watch?v=ftxNOdwqjiQ',
    domain: ['Developers'],
    type: 'Robotics',
    technology: [],
    year: 2020,
    difficulty: 2,
    content:
      '<ul>\n<li>Robotics-based Applications for Agile Manufacturing using FIWARE</li>\n<li>Robotics centered use cases</li>\n<li>Digital Factory centered use cases.</li>\n<li>Deployment of a <em>"Powered by FIWARE"</em> Robotics Architecture</li>\n</ul>\n<p>Robotics systems play a major role in the automation roadmap of factories that aim to beat competitors by offering small\nlot sizes of highly customized products. As standalone manufacturing assets, the contribution of robotics systems to the\nfactory is clear, robots are intended to contribute powerful automation features based on reconfigurable hardware with\nintegrated perception, planning, and control abilities. However, the agility of the factory can grow dramatically by\nmaking these standalone robots first-class citizens of the digital factory infrastructure.</p>\n<p>This webinar introduces the current vision and ongoing developments that FIWARE is undertaking to accelerate the\nintegration of robots in smart factory environments.</p>'
  },
  {
    name:
      'Cities as Enablers of the Data Economy - Smart Data Models for Cities',
    img: 'https://fiware.github.io/academy/img/smart-cities.png',
    companyLink: 'https://www.youtube.com/watch?v=b0EWq5E5jAc',
    domain: ['Developers'],
    type: 'Cross-Chapter',
    technology: ['Cities'],
    year: 2020,
    difficulty: 2,
    content:
      '<ul>\n<li>City as a data ecosystem</li>\n<li>Context/Digital Twin Data Management</li>\n<li>Relevance of Standardization</li>\n<li>Smart Data Models - Structure, Examples, Users and Contributors</li>\n</ul>'
  },
  {
    name: 'Machine Learning with Cosmos and Spark',
    img: 'https://fiware.github.io/academy/img/big-data-2.png',
    companyLink: 'https://www.youtube.com/watch?v=isugbtZWU4I',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['Cosmos', 'Apache Spark'],
    year: 2020,
    difficulty: 3,
    content:
      '<p>This webinar presents an introduction to data engineering with FIWARE using Apache Spark ready for big data deployments.\nYou will learn how to perform real-time predictions step-by-step through a real use case.</p>'
  },
  {
    name: "Monetizing your Organization's Data",
    img: 'https://fiware.github.io/academy/img/monetization.png',
    companyLink: 'https://www.youtube.com/watch?v=jsG7SYtP4FU',
    domain: ['Developers'],
    type: 'Data Monetization',
    technology: ['Business Ecosystem', 'Keyrock', 'API Umbrella'],
    year: 2020,
    difficulty: 3,
    content:
      '<ul>\n<li>What is the Business API Ecosystem?</li>\n<li>How does the Business API Ecosystem relate to the FIWARE Security Framework?</li>\n<li>How can Context Data be monetized?<ul>\n<li>Demo</li></ul></li>\n<li>How can the Business API Ecosystem be extended to fit custom environments?</li>\n</ul>\n<p>In the digital economy, your context data has value and could be used as a potential revenue stream. Learn more about\nthe FIWARE catalogue components that can be used to monetize your data easily and still maintain ownership</p>\n<p>This webinar introduces the Business API Ecosystem and its role in FIWARE as well as demonstrating a simple context\nbroker monetization use case. The various microservices the use case relies upon (Business API , Keyrock, API Umbrella)\nare highlighted and other options are also considered.</p>'
  },
  {
    name: 'Creating Advanced Dashboards Using Wirecloud',
    img: 'https://fiware.github.io/academy/img/wirecloud.png',
    companyLink: 'https://www.youtube.com/watch?v=LkGpx6BKbRM',
    domain: ['Developers'],
    type: 'Visualisation',
    technology: ['Wirecloud'],
    year: 2020,
    difficulty: 3,
    content:
      '<p>Wirecloud is a web mashup tool designed to ease the development of operational dashboards. This allows end users to\neasily create web applications and dashboards without programming skills and to visualize data of interest and control\ntheir environment.</p>\n<p>Web application mashups integrate heterogeneous data, application logic, and UI components (widgets) sourced from the\nWeb to create new coherent and value-adding composite applications. This webinar demonstrates how to create flexible\ndashboards loading real-time context data and modify the representation of the data to gain insight and fit the needs of\nyour organization.</p>'
  },
  {
    name: 'Choosing Open Source Licenses for FIWARE Components',
    img: 'https://fiware.github.io/academy/img/open-source.png',
    companyLink: 'https://www.youtube.com/watch?v=1X_kNwkkcjo',
    domain: ['Community', 'Business'],
    type: 'Cross-Chapter',
    technology: [],
    year: 2020,
    difficulty: 1,
    content:
      '<p>Issues may arise when attempting to release software as Open Source, and this webinar discusses some of the decisions\nwhich need to be made (such as deciding which license to use) and offers a few solutions to cover some common release\nprocesses as well as explaining the commitments that must be made when offering new software to FIWARE.</p>'
  },
  {
    name: 'Adopting Common Smart Data Models for Smart Cities',
    img: 'https://fiware.github.io/academy/img/iudx.png',
    companyLink: 'https://www.youtube.com/watch?v=dfMo0HnaIUQ',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models', 'Cities'],
    year: 2020,
    difficulty: 3,
    content:
      '<ul>\n<li>Why is relevant to have shared data models for the industry and for the citizen<ul>\n<li>Open license and shared data models as an economic booster for smart cities</li></ul></li>\n<li>Summary of the agreement:<ul>\n<li>Adoption of NGSI-LD standard as the basis for data exchange</li>\n<li>Contribution to smart data models initiative (including participation in governance bodies)</li></ul></li>\n<li>Introduction to the Smart Data Models<ul>\n<li>General introduction</li>\n<li>New contribution mechanism</li>\n<li>New specification</li>\n<li>Other updates</li></ul></li>\n</ul>\n<p>For this webinar, FIWARE teamed up with the India Urban Data Exchange (IUDX) Program. FIWARE Foundation and IUDX\nrecently announced their collaboration toward building an Open Source platform that facilitates secure, authenticated,\nand managed exchange of data amongst various data sources and consumers.</p>'
  },
  {
    name: 'India Urban Data Exchange',
    img: 'https://fiware.github.io/academy/img/iudx.png',
    companyLink: 'https://www.youtube.com/watch?v=YXp822s2_n4',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models', 'Cities'],
    year: 2020,
    difficulty: 2,
    content:
      '<p>This is the second half of the Adopting Common Smart Data Models for Smart Cities webinar, where FIWARE teamed up with\nthe India Urban Data Exchange (IUDX) Program. FIWARE Foundation and IUDX recently announced their collaboration toward\nbuilding an Open Source platform that facilitates secure, authenticated, and managed exchange of data amongst various\ndata sources and consumers.</p>'
  },
  {
    name: 'NGSI-LD IoT Agents',
    img: 'https://fiware.github.io/academy/img/ngsi-ld-iot-agents.png',
    companyLink: 'https://www.youtube.com/watch?v=XBLyMa-UBmg',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['NGSI-LD', 'IoT Agent'],
    year: 2021,
    difficulty: 3,
    content:
      '<ul>\n<li>What is an IoT Agent?</li>\n<li>NGSI-LD Measures</li>\n<li>NGSI-LD Actuations + Lazy Attributes:<ul>\n<li>Registrations</li>\n<li>Subscriptions</li></ul></li>\n<li>Provisioning NGSI-LD Devices:<ul>\n<li>Data Models and NGSI-LD <code>@context</code></li>\n<li>The role of metadata</li>\n<li>GeoJSON and GPS device provisioning</li></ul></li>\n<li>Combining NGSI-v2 Devices with an NGSI-LD Context Broker</li>\n</ul>\n<p>NGSI-LD support has been added to the library underpinning all of the IoT Agent so now it is simple to combine the power\nof linked data with IoT devices running the protocols of your choice. This webinar explains how to properly provision\nNGSI-LD devices, and how to convert NGSI-v2 to NGSI-LD when receiving measures from external devices not under your\ncontrol.</p>'
  },
  {
    name: 'Monitoring Measures Using FIWARE & Grafana',
    img: 'https://fiware.github.io/academy/img/grafana.png',
    companyLink: 'https://www.youtube.com/watch?v=Gaa23hC0teo',
    domain: ['Developers'],
    type: 'Visualisation',
    technology: ['NGSI-v2', 'NGSI-LD', 'QuantumLeap', 'Grafana'],
    year: 2021,
    difficulty: 3,
    content:
      '<ul>\n<li>What is Grafana?</li>\n<li>FIWARE Architectural Considerations<ul>\n<li>Which microservices? What roles are required?</li>\n<li>NGSI Data: Sources, Sinks, Transformations and Data Formats</li></ul></li>\n<li>Deep Dive: Filling Station Dashboard</li>\n<li>HOPU: Real-life Use Cases and Customizations with Grafana</li>\n</ul>\n<p>Visualisation of data is key to understanding trends and this webinar discusses how to analyse context data using common\nopen source tools.</p>\n<p>With visualisation components such as Grafana, minor changes to default look-and-feel can really help to improve\ncustomer satisfaction. Co-presenting at our webinar on Monitoring Measures Using FIWARE and Grafana we will have a\ndeveloper who makes changes such as these for a living who will be demonstrating some real-life FIWARE-Grafana tweaks\nand customisations they have created which have already reached paying clients.</p>'
  },
  {
    name: 'Customizing IoT Agents',
    img: 'https://fiware.github.io/academy/img/custom-iot-agents.png',
    companyLink: 'https://www.youtube.com/watch?v=HuEwI8wJKFU',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['IoT Agent', 'Agrifood'],
    year: 2021,
    difficulty: 4,
    content:
      '<ul>\n<li>Overview of Existing IoT Agents<ul>\n<li>Payloads, Transports and Protocols</li></ul></li>\n<li>Code walkthroughs<ul>\n<li>Customizing the IoT Agent for Ultralight to accept XML payloads</li>\n<li>IoT Agent Plugin adaptions - IoT Agent for ADAPT/ISOXML</li>\n<li>File-based Device Measure Upserts (CSV, Excel)</li></ul></li>\n</ul>\n<p>Many common payloads and protocols are already supported by IoT Agents. However, sometimes this is not enough and it is\nnecessary to create your own IoT Agent or customize an existing IoT Agent. This webinar discusses various strategies on\nhow to do this focusing on real-life use-cases from farming and water management.</p>'
  },
  {
    name: 'Connecting NGSI-LD FIWARE Components',
    img: 'https://fiware.github.io/academy/img/combining-v2-ld.png',
    companyLink: 'https://www.youtube.com/watch?v=sWa0k5GyGyw',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-v2', 'NGSI-LD'],
    year: 2021,
    difficulty: 3,
    content:
      '<ul>\n<li>Differences between NGSI-v2 vs NGSI-LD Interfaces<ul>\n<li>CRUD, Subscriptions and Registrations</li></ul></li>\n<li>Data Models and NGSI-LD <code>@context</code></li>\n<li>NGSI-LD Interfaces<ul>\n<li>Subscription Payloads (Key-Values, Normalized and GeoJSON) and Customizing Payloads</li>\n<li>Registration Forwarding and receiving payloads</li>\n<li>Federations and Data Ownership</li></ul></li>\n<li>Demo: Combining v2 and LD</li>\n</ul>\n<p>NGSI-LD is all about linked data. The NGSI-v2 syntax has evolved based on the work of the ETSI standards body. This\nwebinar discusses how to ensure your FIWARE components are NGSI-LD compatible, how to transition data and how to\ncontinue using NGSI-v2 components within an NGSI-LD architecture.</p>'
  },
  {
    name: 'End-to-end AI Solution With PySpark & Draco',
    img: 'https://fiware.github.io/academy/img/pyspark.png',
    companyLink: 'https://www.youtube.com/watch?v=d724j7PpaVg',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['AI', 'Pyspark', 'Apache NIFI'],
    year: 2021,
    difficulty: 3,
    content:
      "<ul>\n<li>Managing Real-Time Context Data</li>\n<li>Data Transformation and Persistence using Apache NIFI</li>\n<li>Setting up a Google Cloud Environment<ul>\n<li>Creating a DataProc Cluster and connecting it to Jupyter Notebook</li>\n<li>Using Google Cloud Storage service</li>\n<li>Submitting a PySpark Job on DataProc</li></ul></li>\n<li>Modelling a Machine Learning Solution on PySpark for Multi-classification</li>\n</ul>\n<p>Data processing is key to ensure Machine Learning models' performance. But commonly, data is collected and stored in its\nraw format, and to get insights from it, post-processing is required. What if all of this could be automated and managed\nthrough pipelines?</p>\n<p>This webinar not only demonstrates how to collect data in real-time, transform it, and persist it using Draco to be\nready for further use, but it also shows how to build an end-to-end AI service with PySpark hosted in the cloud.</p>"
  },
  {
    name: 'NGSI-LD Temporal Operations',
    img: 'https://fiware.github.io/academy/img/ngsi-ld-temporal.png',
    companyLink: 'https://www.youtube.com/watch?v=w6ymNPO-Baw',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2021,
    difficulty: 3,
    content:
      '<ul>\n<li>How to use NGSI-LD 1.3.1 Temporal Functions</li>\n<li>Normalized and Simplified Temporal Formats</li>\n<li>Complex Temporal Queries<ul>\n<li>Filtering</li>\n<li>Geo-queries</li>\n<li>Pagination</li></ul></li>\n<li>NGSI-LD 1.4.1 Temporal Aggregation Functions</li>\n<li>Time-Series vs Temporal Interface - what to use and when</li>\n</ul>\n<p>Context describes the state of a system at a moment in time. Traditionally context brokers have no memory - they are\njust holding the "now". However there are use cases which require the use of historical data and the NGSI-LD\nspecification recognizes this and offers an optional temporal API for time-based operations.</p>\n<p>This webinar will discuss the use of temporal operations, the types of payloads supported and other alternatives which\nmay be considered based on your use case.</p>'
  },
  {
    name:
      'Managing Users Identities and Access Control Policies with API Umbrella',
    img: 'https://fiware.github.io/academy/img/umbrella.png',
    companyLink: 'https://www.youtube.com/watch?v=BuyhK1rzHIY',
    domain: ['Developers'],
    type: 'Security',
    technology: ['API Umbrella', 'Keyrock'],
    year: 2021,
    difficulty: 3,
    content:
      '<ul>\n<li>Overview - API Umbrella</li>\n<li>Basic PEP and PDP Functions</li>\n<li>Load Balancing</li>\n<li>Integration with Keyrock</li>\n<li>Statistics and Logs</li>\n<li>iSHARE and Attribute-based Access Control</li>\n</ul>\n<p>Access and usage control guarantees the enforcement of data access and usage policies - such policies are defined as\npart of the terms and conditions when data resources and services are published or negotiated between providers and\nconsumers. Once defined, the policies must be enforced using appropriate software tools. This webinar demonstrates the\npotential of using API Umbrella for access control across a FIWARE-based system.</p>\n<p>API Umbrella is an open source API management tool incorporating both Policy Enforcement Point and Policy Decision Point\nfunctions which allows users to track and control API usage through API Keys and JSON Web Tokens. It also offers\nadditional features such as rate limiting, API usage analytics and caching. During the webinar we will present the core\nfunctions of API umbrella and give examples on how to protect your APIs based on API Keys and tokens. Finally, we will\nintroduce recent developments on how to manage API usage at the attribute level, based on iSHARE specifications.</p>'
  },
  {
    name: 'Language Maps and Multilanguage support in NGSI-LD',
    img: 'https://fiware.github.io/academy/img/language.png',
    companyLink: 'https://www.youtube.com/watch?v=QZIrSa7un24',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2021,
    difficulty: 3,
    content:
      "<ul>\n<li>Language Maps and why you need them</li>\n<li>NGSI-LD <code>LanguageProperty</code></li>\n<li>Multilingual Queries and Responses<ul>\n<li>NGSI-LD Output formats</li>\n<li>Language Tags (BCP 47)</li>\n<li>Content Language Headers (RFC 3282)</li></ul></li>\n<li>Localization and Internationalization<ul>\n<li>Dates and Currencies</li>\n<li>Collation and Sort Order</li>\n<li>Semantic Markup of Complex Objects</li></ul></li>\n</ul>\n<p>Smart Tourism is a growing sector of IT and an opportunity for economic growth. However what can you do if the tourists\nyou attract don't speak the local language? Also many regions are multilingual and therefore require support for their\nown infrastructure in a variety of local languages. NGSI-LD recognises underlying multi-language support is a need for\nmany such context-driven systems and the current ETSI specification now offers language properties which define a\nstandardized language support mechanism based on JSON-LD syntax.</p>\n<p>This webinar will discuss the latest specification changes and go into details as to what context brokers can and cannot\ndo, and describe the use of best practices for localizing and internationalizing smart data models</p>"
  },
  {
    name: 'Machine learning with FIWARE and MLOps',
    img: 'https://fiware.github.io/academy/img/mlops.png',
    companyLink: 'https://www.youtube.com/watch?v=6X9r5Kb8UIs',
    domain: ['Developers'],
    type: 'Operations',
    technology: ['AI', 'MLOps'],
    year: 2021,
    difficulty: 3,
    content:
      '<ul>\n<li>What is MLOps?</li>\n<li>Tooling for Machine Learning</li>\n<li>Model &amp; Data Monitoring</li>\n<li>Continuous Integration, Deployment and Training</li>\n<li>Further Experimentation and Learning</li>\n</ul>\n<p>IoT has enabled companies to access data from billion of devices from all over the world but the full exploitation of\nthis data has not yet been achieved as AI adoption still lags. This is mainly due to the fact that 90% of Machine\nLearning models do not reach the production stage because of a rapid decline of model performance in the\nindustrialization phase. It is therefore necessary to provide solutions which can facilitate the transition from\ndevelopment to production. This is where FIWARE and MLOps come in to play to provide a full platform that can monitoring\nyour data and models through different mechanisms and strategies to limit or prevent performance degradation.</p>'
  },
  {
    name: 'Scalable deployments with FIWARE',
    img: 'https://fiware.github.io/academy/img/scalable.png',
    companyLink: 'https://www.youtube.com/watch?v=WUman6Mnx58',
    domain: ['Developers'],
    type: 'Operations',
    technology: [],
    year: 2021,
    difficulty: 3,
    content:
      '<ul>\n<li>Understanding of a scalable deployment</li>\n<li>Infrastructure</li>\n<li>Use-case Analysis</li>\n<li>Scaling the Orion-LD context broker</li>\n<li>Tooling and testing</li>\n</ul>\n<p>FIWARE components offer a wide range of functionalities and opportunities. Scaling of components to high levels of\nperformance, while maintaining cost efficiency and the ability to operate on the system is important in order to make\nuse of FIWARE.</p>\n<p>In this webinar, we will introduce how to plan for such scalable deployments and the environments they are running in.\nSetups, based on Kubernetes and OpenShift will be presented, together with associated performance numbers and\ninformation on how to achieve them.</p>'
  },
  {
    name: 'Cloud-Edge processing with FogFlow',
    img: 'https://fiware.github.io/academy/img/fogflow.png',
    companyLink: 'https://www.youtube.com/watch?v=D06W3t5uv94',
    domain: ['Developers'],
    type: 'Processing',
    technology: ['FogFlow'],
    year: 2021,
    difficulty: 3,
    content:
      '<p>Device orchestration can be boring, repetitive and error-prone, however, FogFlow, with its novel intent-based\nprogramming model has turned the tables on this monotony, and created a standard-based data orchestration mechanism. It\nallows IoT solution providers to easily enable the smartness of their connected IoT devices with re-usable and\nextendable data processing capabilities that can run seamlessly on top of a cloud-edge environment.</p>\n<p>FogFlow is emerging as a preferred choice within the FIWARE ecosystem to enable cloud-edge computing and digital twins\nand it can help to reduce the time-to-market of IoT solutions from months to days. This webinar will introduce the key\nfeatures of FogFlow and also showcases how to integrate FogFlow with other FIWARE Generic Enablers across a variety of\nuse cases.</p>'
  },
  {
    name: 'FIWARE Basics, understanding the terminology',
    img: 'https://fiware.github.io/academy/img/basics.png',
    companyLink: 'https://www.youtube.com/watch?v=laDTBcLziB8',
    domain: ['Developers', 'Business', 'Community', 'iHubs'],
    type: 'Fundamentals',
    technology: ['NGSI-LD'],
    year: 2021,
    difficulty: 1,
    content:
      '<ul>\n<li>What is FIWARE?</li>\n<li>The role of the FIWARE Foundation</li>\n<li>Standards, Interfaces and Interoperability</li>\n<li>Developer Terminology<ul>\n<li>REST</li>\n<li>JSON</li>\n<li>Linked Data</li>\n<li>NGSI-v2 &amp; NGSI-LD</li></ul></li>\n<li>Standards within Security and Data Sharing</li>\n</ul>\n<p>Do you know what an "API" is? Ever wondered what makes it "open"?</p>\n<p>Every profession has its own jargon and software engineering is no exception.</p>\n<p>The aim of this webinar is to demystify the terminology surrounding FIWARE for a non-technical audience and explain why\ndevelopers find it so easy to use.</p>'
  },
  {
    name: 'Passing the FIWARE Experts Exam',
    img: 'https://fiware.github.io/academy/img/experts.png',
    companyLink: 'https://www.youtube.com/watch?v=6_JLn-69Z_8',
    domain: ['Developers', 'iHubs'],
    type: 'Cross-Chapter',
    technology: ['NGSI-v2', 'NGSI-LD'],
    year: 2021,
    difficulty: 3,
    content:
      '<ul>\n<li>Background and History of the Examination</li>\n<li>The role of the Examiners, Marking and Grading</li>\n<li>Mock Examination<ul>\n<li>Body of Work</li>\n<li>NGSI Interfaces</li>\n<li>FIWARE Catalogue</li>\n<li>Architectural Scenario</li>\n<li>FIWARE Ready Devices</li></ul></li>\n<li>Conclusions and Opportunities for certified FIWARE Experts</li>\n</ul>\n<p>As an emerging technology, the FIWARE ecosystem has a growing need to be able to identify those principle developers who\nfully understand its core concepts(such as NGSI-v2 and NGSI-LD interfaces and other FIWARE fundamentals) and are able to\ncreate intelligent Smart Solutions which leverage the technology to the best effect.</p>\n<p>A comprehensive examination process for identifying expertise in FIWARE was launched three years ago, and the number of\nregistered FIWARE experts has been growing ever since.</p>\n<p>The webinar provides a walkthrough of the examination process and explains how it is run, and is designed to help\ncandidates understand the level of answers needed in order to pass with flying colours.</p>'
  },
  {
    name: 'Managing Data Models and Exposing Digital Twins',
    img: 'https://fiware.github.io/academy/img/beyond-ngsi-ld.png',
    companyLink: 'https://www.youtube.com/watch?v=42dNh1VM7n4',
    domain: ['Developers', 'iHubs', 'Business'],
    type: 'Core Context',
    technology: ['NGSI-LD', 'Data Models'],
    year: 2022,
    difficulty: 3,
    content:
      '<ul>\n<li>FIWARE iHubs - local and global</li>\n<li>Structure and Use of NGSI-LD to deal with Complexity</li>\n<li>Data Models as a "common language"</li>\n<li>Building a simple sensor model</li>\n<li>Controlling actions of Digital Twins</li>\n<li>Capabilities defined in AAS (Asset Administrative Shell)</li>\n</ul>\n<p>NGSI-LD has proved its relevance and efficiency to address technical interoperability challenges in many sectors and use cases\nimplemented through FIWARE components, but we need new tools and approaches to go further towards semantic interoperability and \ncontrolled interactions with heterogeneous stakeholders, including human beings who have no idea of what an API is.</p>\n<p>The Asset Administration Shell (AAS) is a key concept to support digital twins implementation following the vision of the German \nPlattform I4.0 initiative, and can contribute to a better exploitation of Machine-to-Machine interactions and also an improved \nunderstanding of the digitized assets for people who may have a deep knowledge of own their businesses opportunities and constraints\nbut little API experience.</p>\n<p>In this webinar, we’ll discover how the French FIWARE iHub Faubourg Numérique has built up tools and methodologies based on NGSI-LD\ndata models and the AAS concept to better engage and support SMEs and local governments in their digital innovations and transformations.\nConcrete use cases and demos in environmental monitoring and industrial robotics among others, will illustrate data modeling and \ncapabilities definitions with the help of a GUI-based “powered by FIWARE” solution.</p>'
  },
  {
    name: 'NGSI-LD Concise Payloads and Merge Patch Operations',
    img: 'https://fiware.github.io/academy/img/concise-merge-patch.png',
    companyLink: 'https://www.youtube.com/watch?v=-XPGyM7K_kU',
    domain: ['Developers'],
    type: 'Core Context',
    technology: ['NGSI-LD'],
    year: 2022,
    difficulty: 3,
    content:
      '<ul>\n<li>NGSI-LD payload formats<ul>\n<li>Normalized</li>\n<li>Simplified (Key-Value pairs)</li>\n<li>Concise</li></ul></li>\n<li>Context broker operations and supported HTTP Methods in Orion-LD:<ul>\n<li>GET, POST, DELETE, PATCH, PUT, OPTIONS</li></ul></li>\n<li>PATCH Operations Deep Dive:<ul>\n<li>Partial Update</li>\n<li>Merge</li>\n<li>Use of JSON Literal <code>null</code></li>\n<li>Architectural Scenario</li>\n<li>FIWARE Ready Devices</li></ul></li>\n</ul>\n<p>As NGSI-LD becomes more established, the needs of its user base become ever more diverse. Whether moving into data sharing\nor robotics, growing customer need dictates that context brokers must keep up with consumer demand and be able to offer\nprototypical versions of novel features for assessment and use. </p>\n<p>The aim of this webinar is to showcase some experimental features of the Orion-LD context broker showing how its syntax,\ntransports and endpoints can be adapted. These changes can then be contributed to the ETSI CIM committee for further\ndiscussion to achieve common operational consensus across brokers and specification changes made offering the potential\nto broaden the uptake of the official NGSI-LD API itself.</p>\n<p>Learn how concise payloads and merge-patch updates have been provisionally integrated into the Orion-LD context broker\nproviding an opportunity of innovation before standardization and how to start to use these new features and how to avoid\nincompatibility clashes against the solid core of the NSGI-LD standard.</p>'
  },
  {
    name: 'Extending FIWARE MLOps using Argo Workflows',
    img: 'https://fiware.github.io/academy/img/argo.png',
    companyLink: 'https://www.youtube.com/watch?v=IIN5d2Mco9A',
    domain: ['Developers'],
    type: 'Operations',
    technology: ['AI', 'MLOps'],
    year: 2022,
    difficulty: 3,
    content:
      '<ul>\n<li>Background to MLOps</li>\n<li>Tooling for Machine Learning</li>\n<li>Use of FIWARE within MLOps</li>\n<li>Use of Argo Workflows</li>\n<li>Verta AI monitioring</li>\n<li>Continuous Training, Continuous Integration, Continuous Development</li>\n</ul>\n<p>MLOps is trend which has emerged to facilitate the industrialization of AI models. It consists of implementing DevOps \npractices within a Machine Learning project. MLOps is a set of best practices to manage the AI models and data lifecycle.</p>\n<p>The aim of this webinar is to present a methodology for implementing MLOps at scale within a Kubernetes architecture by \nleveraging FIWARE interfaces.</p>\n<p>Learn how to create and manage Machine Learning pipelines with Argo Workflow. This talk will also showcase all the benefits \nof using CI/CD to automate AI models deployment into a production environment.</p>'
  },
  {
    name:
      'Monitoring and Supervision of robotic systems using FIWARE and ROS 2',
    img: 'https://fiware.github.io/academy/img/iotagent-ros2.png',
    companyLink: 'https://www.youtube.com/watch?v=qDMljIidA6k',
    domain: ['Developers'],
    type: 'Robotics',
    technology: ['ROS2', 'IoT Agent'],
    year: 2022,
    difficulty: 3,
    content:
      '<ul>\n<li>Essential background concepts - FIWARE and ROS2 </li>\n<li>Architectural Approach<ul>\n<li><code>iot-agent-node-lib</code></li>\n<li>IoT Agent for JSON as baseline</li>\n<li><code>rclnodejs</code> library</li></ul></li>\n<li>Demo: Turtle Sim</li>\n</ul>\n<p>FIWARE can be found in many industrial systems and in this webinar, we will share with you the secrets behind implementing a ROS2 IoT Agent, and how to potentially extend this methodology to other \nindustrial robotics systems.</p>\n<p>There will also be a live demonstration how to monitor and supervise ROS 2 systems using FIWARE and the TurtleSim.</p>'
  },
  {
    name: 'IoT Agent Gateways Using the IOTA Tangle for Secure Data Transfer',
    img: 'https://fiware.github.io/academy/img/tangle.png',
    companyLink: 'https://www.youtube.com/watch?v=gED5mAtBtYg',
    domain: ['Developers'],
    type: 'IoT Agents',
    technology: ['IOTA Tangle', 'IoT Agent', 'Blockchain'],
    year: 2022,
    difficulty: 4,
    content:
      '<ul>\n<li>Review of IoT Agent Transport Binding Architectures: <ul>\n<li>HTTP, MQTT, LoRaWAN, OPC-UA, ROS2 etc.</li></ul></li>\n<li>What is the IOTA Tangle?<ul>\n<li>Potential Use Cases with FIWARE.</li>\n<li>Anti-Patterns.</li></ul></li>\n<li>Deep Dive: Creating a FIWARE-IOTA Binding :<ul>\n<li>Sensor Measurements (Northbound)</li>\n<li>Actuation Commands (Southbound)</li>\n<li>Actuation Command Acknowledgements (Northbound)</li>\n<li>Gateway Bindings (Northbound + Southbound)</li></ul></li>\n<li>Architectural Paradigms for Novel Data Transports</li>\n</ul>\n<p>Within the FIWARE Ecosystem, IoT Agents are used to ensure that devices can send their data to, and be managed from a \nContext Broker using their own native protocols. There is no restrictions on the transport layer to be used for these communications, \nit could be anything from HTTP to MQTT to OPC-UA to LoRaWAN and more.</p>\n<p>For example, IOTA is an open-source data communication protocol and zero-fee micro-transaction system utilising distributed ledger \ntechnology. This allows participants in the IOTA network (“the Tangle”) to securely and immutably encrypt, transfer and store data. </p>\n<p>The aim of this webinar is to demonstrate how create a gateway component for an IoT Agent and how connect to devices securely using \nthe IOTA Tangle, using it as a single source of truth and trust in data. Additionally discussing how to pick the most appropriate transport \nfor your use case and avoiding anti-patterns when securing IoT data.</p>'
  }
];
