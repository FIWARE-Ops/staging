var types = [
    'Core Context',
    'Cross-Chapter',
    'Data Monetization',
    'Fundamentals',
    'IoT Agents',
    'Operations',
    'Processing',
    'Robotics',
    'Security',
    'Visualisation'
];
var domains = ['Business', 'Community', 'Developers', 'iHubs'];
var technologies = [
    'Agrifood',
    'AI',
    'Apache Flink',
    'Apache Flume',
    'Apache NIFI',
    'Apache Spark',
    'API Umbrella',
    'Blockchain',
    'Business Ecosystem',
    'Canis Major',
    'Cities',
    'Cosmos',
    'Cygnus',
    'Data Models',
    'Data Spaces',
    'DDS',
    'Draco',
    'FIROS',
    'FogFlow',
    'Grafana',
    'iHubs',
    'IoT Agent',
    'IOTA Tangle',
    'Keyrock',
    'microROS',
    'MLOps',
    'NGSI-LD',
    'NGSI-v2',
    'Pyspark',
    'QuantumLeap',
    'ROS',
    'STH-Comet',
    'Water',
    'Wirecloud'
];

var modalData = [
    {
        name: 'How to Debug IoT Agents',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/webinar-default.png',
        type: 'IoT Agents',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_IOTAgents.svg'/>",
        difficulty: 4,
        video: 'https://www.youtube.com/watch?v=FRqJsywi9e8',
        content:
            '&lt;ul&gt; &lt;li&gt;How to diagnose common problems&lt;/li&gt; &lt;li&gt;How to test services in isolation&lt;/li&gt; &lt;li&gt;How to set-up and interpret debug&lt;/li&gt; &lt;li&gt;Configuring IoT Agents&lt;/li&gt; &lt;li&gt;Adding diagnostic debug&lt;/li&gt; &lt;li&gt;Where to look for help and advice&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This video presentation shows how to connect devices to processing enablers via an IoT Agent and the context broker, what can go wrong when trying to wire up the system. How to diagnose problems and how to fix them.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2,IoT Agent',
        length: 40,
        year: 2019
    },
    {
        name: 'Data Modelling with NGSI',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/webinar-default.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 4,
        video: 'https://www.youtube.com/watch?v=T_1DpKf6C_c',
        content:
            '&lt;ul&gt; &lt;li&gt;Understanding and applying Standard Data Models.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;NGSI v2&lt;/strong&gt; : Relationships, properties and metadata&lt;/li&gt; &lt;li&gt;&lt;strong&gt;NGSI-LD&lt;/strong&gt; : Relationships, properties and &lt;code&gt;@context&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Practical use cases in Smart City and Smart Agriculture&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This video presentation shows how to design and apply Standard NGSI Data Models.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2,Data Models,Cities,Agrifood',
        length: 35,
        year: 2019
    },
    {
        name: 'Core Context Management',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fiware-default.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=pK4GgYjlmdY',
        content:
            '&lt;ul&gt; &lt;li&gt;What is Context Data?&lt;/li&gt; &lt;li&gt;What is a Context Broker?&lt;/li&gt; &lt;li&gt;What is NGSI v2?&lt;/li&gt; &lt;li&gt;Introduction to harmonized data models&lt;/li&gt; &lt;li&gt;How to read and update context data via REST&lt;/li&gt; &lt;li&gt;How to assign relationships between Entities&lt;/li&gt; &lt;li&gt;How to register other sources as context data&lt;/li&gt; &lt;li&gt;How to subscribe to changes in context&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This video presentation is an introduction to Core Context Management describing about the NGSI DataModel and the NGSI interface, registrations, subscription etc.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2',
        length: 40,
        year: 2019
    },
    {
        name: 'What is an IoT Agent?',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fiware-default.png',
        type: 'IoT Agents',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_IOTAgents.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=my6Kgiqx-OM',
        content:
            '&lt;p&gt;This video presentation shows how to connect IoT Devices to the Context Broker using an IoT Agent and how to ensure your device is &lt;em&gt;FIWARE Ready&lt;/em&gt;.&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;p&gt;What is a transport?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;What is a message protocol?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;What do the terms northbound/southbound and north/south port mean ?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;How are commands and measurements processed?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;What is an IoT Agent? What does it do?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;How can I configure an IoT Agent over HTTP?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;How can I configure an IoT Agent over MQTT?&lt;/p&gt;&lt;/li&gt; &lt;/ul&gt;',
        domain: 'Developers',
        technology: 'IoT Agent',
        length: 40,
        year: 2019
    },
    {
        name: 'How to Secure FIWARE Architectures',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fiware-default.png',
        type: 'Security',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Security.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=SP0zFdTybA4',
        content:
            '&lt;ul&gt; &lt;li&gt;&lt;p&gt;What are Identity Management and Access Control?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;Which FIWARE components will you need?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;What are Authentication and Authorization? How do they differ?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;What is OAuth2? What flows are supported?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;What is a PEP Proxy? What does it do?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;What is a PDP and when will I need one?&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;What terms such as RBAC, PBAC and XACML mean and how are they used?&lt;/p&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This video presentation shows how to add Identity Management and Access Control elements to your FIWARE Architecture by using the Generic Enablers from the Security Chapter.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2,Keyrock',
        length: 50,
        year: 2019
    },
    {
        name: 'How to Get Context Data Out of Robots',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/webinar-default.png',
        type: 'Robotics',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>",
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=T8XV6Wah9l4',
        content:
            '&lt;ul&gt; &lt;li&gt;How can FIWARE and Standardized Context Data Management create synergies between Robotic Systems and other Smart Solutions?&lt;/li&gt; &lt;li&gt;What is a Robotic System?&lt;/li&gt; &lt;li&gt;How to get/put context data out from/into robotic systems?&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This video presentation shows how to retrieve context data and actuate robots&lt;/p&gt;',
        domain: 'Developers',
        technology: '',
        length: 30,
        year: 2019
    },
    {
        name: 'Introduction to FIWARE',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fiware-default.png',
        type: 'Fundamentals',
        badge: '<b>Fundamentals</b>',
        difficulty: 0,
        video: "https://youtu.be/97JsnnpPLrA'",
        content:
            '&lt;ul&gt; &lt;li&gt;What is context data?&lt;/li&gt; &lt;li&gt;How is context data used within a Smart Solution?&lt;/li&gt; &lt;li&gt;What is FIWARE? How does it help&lt;/li&gt; &lt;li&gt;What is NGSI v2?&lt;/li&gt; &lt;li&gt;What is the FIWARE Catalogue?&lt;/li&gt; &lt;li&gt;What is the FIWARE Marketplace?&lt;/li&gt; &lt;li&gt;What is the role of the FIWARE Foundation?&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This video presentation is a basic introduction describing what FIWARE is, why you need it and how the elements of the FIWARE Catalogue can help accelerate the development of your Smart Solution.&lt;/p&gt;',
        domain: 'Developers,Business,Community,iHubs',
        technology: 'NGSI-v2',
        length: 30,
        year: 2019
    },
    {
        name: 'Securing FIWARE IoT Devices',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fiware-default.png',
        type: 'Security',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Security.svg'/>",
        difficulty: 4,
        video: 'https://www.youtube.com/watch?v=_87IZhrYo3U',
        content:
            '&lt;ul&gt; &lt;li&gt;How can insecure systems be attacked?&lt;/li&gt; &lt;li&gt;What common actions should be taken to help to secure systems?&lt;ul&gt; &lt;li&gt;What options do I have to secure HTTP traffic?&lt;/li&gt; &lt;li&gt;What options do I have to secure MQTT traffic?&lt;/li&gt; &lt;li&gt;What options do I have with other protocols?&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;What is a PEP Proxy and how can I use one to protect services and device?s&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Live coding session and commentary, demonstrating various techniques and methods for securing the interactions between Devices, IoT Agents, and the Context Broker.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'IoT Agent,Keyrock',
        length: 40,
        year: 2020
    },
    {
        name: 'Strategies for Context Data Persistence',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fiware-default.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=_uLZDGFPlRA',
        content:
            '&lt;ul&gt; &lt;li&gt;What is data persistence and why do you need it?&lt;/li&gt; &lt;li&gt;Which data persistence options do you have?&lt;/li&gt; &lt;li&gt;What is Big Data?&lt;/li&gt; &lt;li&gt;Which FIWARE components are available to deal with the persistence of context data?&lt;/li&gt; &lt;li&gt;Why do context brokers not offer a data persistence function of their own?&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Introduction to the data persistence components found within the FIWARE Catalogue and various options on how to maintain a historical record of context when a context broker has no memory.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2,Draco,Cygnus,Apache Flume,Apache NIFI',
        length: 40,
        year: 2020
    },
    {
        name: 'Short Term History within FIWARE Systems',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/webinar-default.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=fX_YAc7G4Dk',
        content:
            '&lt;ul&gt; &lt;li&gt;How is Short Term History relevant within my Smart application?&lt;/li&gt; &lt;li&gt;Which FIWARE components are available to deal with Short Term History?&lt;/li&gt; &lt;li&gt;What options exist to create a trend graph?&lt;/li&gt; &lt;li&gt;Introduction to the NGSI-LD temporal interface&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This webinar shows how to utilise times series components and monitor and display trends within FIWARE applications&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2,STH-Comet,QuantumLeap,Grafana',
        length: 40,
        year: 2020
    },
    {
        name: 'Introduction to NGSI-LD',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/introduction-to-ngsi-ld.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=rZ13IyLpAtA',
        content:
            '&lt;ul&gt; &lt;li&gt;What is JSON-LD?&lt;/li&gt; &lt;li&gt;What is NGSI-LD?&lt;/li&gt; &lt;li&gt;What is the relationship between&lt;ul&gt; &lt;li&gt;JSON-LD and NGSI-LD?&lt;/li&gt; &lt;li&gt;NGSI v2 and NGSI-LD&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;What is core &lt;code&gt;@context&lt;/code&gt; ?&lt;ul&gt; &lt;li&gt;Why are data models so important&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Defining NGSI-LD properties, relationships and enumerations&lt;/li&gt; &lt;li&gt;Using Compaction/Expansion operations on NGSI-LD data&lt;/li&gt; &lt;li&gt;Navigating the &lt;code&gt;@graph&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;A data-model driven and linked data first introduction for developers to NGSI-LD and JSON-LD.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD',
        length: 40,
        year: 2020
    },
    {
        name: 'Big Data Analysis using Cosmos with Spark or Flink',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/big-data-analysis.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=n6XN89VSZNg',
        content: '&lt;p&gt;Performing Big Data Analysis Using Cosmos With Spark or Flink&lt;/p&gt;',
        domain: 'Developers',
        technology: 'Cosmos,Apache Spark,Apache Flink',
        length: 40,
        year: 2020
    },
    {
        name: 'NGSI-LD and Smart Data Models - Standardizing Access to Digital Twins',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/ngsi-ld-sdm.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=MBx23ypORLk',
        content:
            '&lt;p&gt;Understanding the basis of context information management, NGSI-LD and smart Data Models&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD,Data Models',
        length: 50,
        year: 2020
    },
    {
        name: 'Robots and Machine Interfaces: Building Interfaces to ROS Systems',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/robots-and-machine-interface.png',
        type: 'Robotics',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=a0NxSS96YzY',
        content:
            '&lt;ul&gt; &lt;li&gt;ROS-Side Perspective (Introduction to FIROS 0.2.0)&lt;ul&gt; &lt;li&gt;Basic ROS Concepts&lt;/li&gt; &lt;li&gt;FIROS Configuration&lt;/li&gt; &lt;li&gt;ROS-NGSI mapping&lt;/li&gt; &lt;li&gt;How to build the Interface&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;FIWARE-Side Perspective (Context Data Management in Robotics)&lt;ul&gt; &lt;li&gt;Simple Example: AMR in a Warehouse&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This webinar will present how to develop FIWARE NGSI Interfaces for ROS-based robots.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'FIROS,ROS',
        length: 30,
        year: 2020
    },
    {
        name: 'Machine Learning with Cosmos and Spark',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/ml-with-cosmos-and-spark.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=isugbtZWU4I',
        content:
            '&lt;p&gt;This webinar presents an introduction to data engineering with FIWARE using Apache Spark ready for big data deployments. You will learn how to perform real-time predictions step-by-step through a real use case.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'Cosmos,Apache Spark',
        length: 50,
        year: 2020
    },
    {
        name: 'Monetizing your Organization&#x27;s Data',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/monetizing-with-data.png',
        type: 'Data Monetization',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_DataMonetization.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=jsG7SYtP4FU',
        content:
            '&lt;ul&gt; &lt;li&gt;What is the Business API Ecosystem?&lt;/li&gt; &lt;li&gt;How does the Business API Ecosystem relate to the FIWARE Security Framework?&lt;/li&gt; &lt;li&gt;How can Context Data be monetized?&lt;ul&gt; &lt;li&gt;Demo&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;How can the Business API Ecosystem be extended to fit custom environments?&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;In the digital economy, your context data has value and could be used as a potential revenue stream. Learn more about the FIWARE catalogue components that can be used to monetize your data easily and still maintain ownership&lt;/p&gt; &lt;p&gt;This webinar introduces the Business API Ecosystem and its role in FIWARE as well as demonstrating a simple context broker monetization use case. The various microservices the use case relies upon (Business API , Keyrock, API Umbrella) are highlighted and other options are also considered.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'Business Ecosystem,Keyrock,API Umbrella',
        length: 45,
        year: 2020
    },
    {
        name: 'Creating Advanced Dashboards Using Wirecloud',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/dashboards-with-wirecloud.png',
        type: 'Visualisation',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Visualization.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=LkGpx6BKbRM',
        content:
            '&lt;p&gt;Wirecloud is a web mashup tool designed to ease the development of operational dashboards. This allows end users to easily create web applications and dashboards without programming skills and to visualize data of interest and control their environment.&lt;/p&gt; &lt;p&gt;Web application mashups integrate heterogeneous data, application logic, and UI components (widgets) sourced from the Web to create new coherent and value-adding composite applications. This webinar demonstrates how to create flexible dashboards loading real-time context data and modify the representation of the data to gain insight and fit the needs of your organization.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'Wirecloud',
        length: 60,
        year: 2020
    },
    {
        name: 'Adopting Common Smart Data Models for Smart Cities',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/iudx.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=dfMo0HnaIUQ',
        content:
            '&lt;ul&gt; &lt;li&gt;Why is relevant to have shared data models for the industry and for the citizen&lt;ul&gt; &lt;li&gt;Open license and shared data models as an economic booster for smart cities&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Summary of the agreement:&lt;ul&gt; &lt;li&gt;Adoption of NGSI-LD standard as the basis for data exchange&lt;/li&gt; &lt;li&gt;Contribution to smart data models initiative (including participation in governance bodies)&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Introduction to the Smart Data Models&lt;ul&gt; &lt;li&gt;General introduction&lt;/li&gt; &lt;li&gt;New contribution mechanism&lt;/li&gt; &lt;li&gt;New specification&lt;/li&gt; &lt;li&gt;Other updates&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;For this webinar, FIWARE teamed up with the India Urban Data Exchange (IUDX) Program. FIWARE Foundation and IUDX recently announced their collaboration toward building an Open Source platform that facilitates secure, authenticated, and managed exchange of data amongst various data sources and consumers.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD,Data Models,Cities',
        length: 35,
        year: 2020
    },
    {
        name: 'How to Develop FIWARE NGSI Interfaces for Robots',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fiware-default.png',
        type: 'Robotics',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>",
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=m5JWxlMMuqk',
        content:
            '&lt;ul&gt; &lt;li&gt;Robot Types&lt;/li&gt; &lt;li&gt;Digital Twins&lt;/li&gt; &lt;li&gt;FIWARE NGSI Robotics Interfaces&lt;ul&gt; &lt;li&gt;ROS, ROS2, OPC-UA and DDS&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Use Cases in Smart Industry&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This webinar presents different alternatives for developing FIWARE-Ready robots and the main FIWARE components that can facilitate/empower these developments.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2',
        length: 40,
        year: 2020
    },
    {
        name: 'FIWARE Building the Future',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/future.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=REoJA7yxJ_0',
        content:
            '&lt;ul&gt; &lt;li&gt;A Reminder of some core concepts&lt;/li&gt; &lt;li&gt;Roadmap Topics&lt;ul&gt; &lt;li&gt;NGSI-LD&lt;/li&gt; &lt;li&gt;Smart Data Models&lt;/li&gt; &lt;li&gt;Blockchain&lt;/li&gt; &lt;li&gt;Robotics&lt;/li&gt; &lt;li&gt;Data Marketplace&lt;/li&gt; &lt;li&gt;Marketplace of Plug &amp;amp; Play AI / Big Data Services&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;An in-depth look at where FIWARE is going next and integrates with blockchain and distributed ledger technologies, Artificial Intelligence or Robotics.&lt;/p&gt;',
        domain: 'Developers,Business',
        technology: 'NGSI-LD,Data Models,AI,Blockchain',
        length: 40,
        year: 2020
    },
    {
        name: 'Architecting Your Smart Solution Using FIWARE',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/architecting.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=pTkZk4VF0gY',
        content:
            '&lt;p&gt;Learn how Smart Solutions solving a particular challenge are architected with FIWARE. This webinar is supported by use cases.&lt;/p&gt;',
        domain: 'Developers,Business',
        technology: 'Cities,Agrifood,Water',
        length: 40,
        year: 2020
    },
    {
        name: 'FIWARE Vision and Value Proposition for a Smart Future',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fiware-vision.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=7ZMUYEWD1gw',
        content:
            '&lt;ul&gt; &lt;li&gt;Understanding FIWARE&lt;/li&gt; &lt;li&gt;Building &lt;em&gt;&quot;Powered by FIWARE&quot;&lt;/em&gt; Solutions&lt;/li&gt; &lt;li&gt;FIWARE: Going beyond the technology&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;A broad overview of the value proposition of FIWARE and its position in a Smart Digital Future.&lt;/p&gt;',
        domain: 'Developers,Business',
        technology: 'Cities,Agrifood,Water',
        length: 40,
        year: 2020
    },
    {
        name: 'The Use of DDS Middleware in Robotics',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/webinar-default.png',
        type: 'Robotics',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>",
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=OQYBJJ5ydto',
        content:
            '&lt;ul&gt; &lt;li&gt;About eProsima &amp;amp; FIWARE&lt;/li&gt; &lt;li&gt;Fast DDS &amp;amp; ROS2&lt;ul&gt; &lt;li&gt;Introduction&lt;/li&gt; &lt;li&gt;Architecture &amp;amp; Demo&lt;/li&gt; &lt;li&gt;What is new?&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;XRCE-DDS &amp;amp; Micro-ROS&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;An introduction to core real-time technologies: FAST DDS, the most complete Open Source DDS for ROS 2, and Micro XRCE-DDS, the middleware for microcontrollers, and micro-ROS.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'DDS,microROS',
        length: 40,
        year: 2020
    },
    {
        name: 'Blockchain/DLT Integration with FIWARE',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/blockchain.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=ITSxtlCmNhQ',
        content:
            '&lt;ul&gt; &lt;li&gt;Introduction to Blockchain / Distributed Ledger Technologies&lt;/li&gt; &lt;li&gt;FIWARE and DLTs&lt;ul&gt; &lt;li&gt;Agri-Food Supply Chain Demo&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Upcoming DLT Components and Research&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This webinar will be an introduction to Blockchain and how FIWARE can be integrated with Blockchain/DLTs with a demo. In addition, it will also explain upcoming DLT components in the FIWARE ecosystem and an idea/state of art to leverage DLTs in &#x27;Powered by FIWARE&#x27; systems.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'Canis Major,Blockchain',
        length: 40,
        year: 2020
    },
    {
        name: 'Turning Organizations Into Smart Organizations',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/smart-organizations.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=XsoXchKiKB4',
        content:
            '&lt;p&gt;This webinar will cover the “system of systems” approach and FIWARE transformation journey, also with the help of success stories.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'Cities,Agrifood,Water',
        length: 45,
        year: 2020
    },
    {
        name: 'Smart Water Management - Using FIWARE Smart Data Models for Water',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/smart-water.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=QbAiLMFEQrY',
        content: '&lt;p&gt;Using FIWARE Smart Data Models for Water.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD,Data Models,Water',
        length: 40,
        year: 2020
    },
    {
        name: 'FIWARE and micro-ROS: Enabling Robotics Systems on Micro-controllers',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/micro-ros.png',
        type: 'Robotics',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>",
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=XJL2_FHcils',
        content:
            '&lt;ul&gt; &lt;li&gt;The micro-ROS Framework&lt;/li&gt; &lt;li&gt;Synergies between Context Information Management and Robotics&lt;/li&gt; &lt;li&gt;Structure of &lt;em&gt;FIWARE-Ready&lt;/em&gt; and &lt;em&gt;&quot;Powered by FIWARE&quot;&lt;/em&gt; micro-ROS Architectures&lt;/li&gt; &lt;li&gt;SOSS-FIWARE&lt;/li&gt; &lt;li&gt;Demo&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;The aim of this webinar is to give an introduction about the existing synergies between FIWARE, ROS, and micro-ROS - the Robot Operating System for microcontrollers - frameworks.&lt;/p&gt; &lt;p&gt;Special emphasis will be put on how to build interfaces between Powered by FIWARE architectures and ROS2/micro-ROS based robotic systems. The SOSS-FIWARE, based on the eProsima Integration Service, is a key enabler that accelerates the development of these interfaces between micro-ROS and FIWARE ecosystems. Through a basic application, the main features of this component as well as the key concepts associated with the synergies between FIWARE and micro-ROS will be overviewed.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'microROS',
        length: 30,
        year: 2020
    },
    {
        name: 'Integrating Robotic Systems for Agile Manufacturing Using FIWARE',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/integrating-robotics-systems.png',
        type: 'Robotics',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>",
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=ftxNOdwqjiQ',
        content:
            '&lt;ul&gt; &lt;li&gt;Robotics-based Applications for Agile Manufacturing using FIWARE&lt;/li&gt; &lt;li&gt;Robotics centered use cases&lt;/li&gt; &lt;li&gt;Digital Factory centered use cases.&lt;/li&gt; &lt;li&gt;Deployment of a &lt;em&gt;&quot;Powered by FIWARE&quot;&lt;/em&gt; Robotics Architecture&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Robotics systems play a major role in the automation roadmap of factories that aim to beat competitors by offering small lot sizes of highly customized products. As standalone manufacturing assets, the contribution of robotics systems to the factory is clear, robots are intended to contribute powerful automation features based on reconfigurable hardware with integrated perception, planning, and control abilities. However, the agility of the factory can grow dramatically by making these standalone robots first-class citizens of the digital factory infrastructure.&lt;/p&gt; &lt;p&gt;This webinar introduces the current vision and ongoing developments that FIWARE is undertaking to accelerate the integration of robots in smart factory environments.&lt;/p&gt;',
        domain: 'Developers',
        technology: '',
        length: 30,
        year: 2020
    },
    {
        name: 'Cities as Enablers of the Data Economy - Smart Data Models for Cities',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/cities-as-enablers.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=b0EWq5E5jAc',
        content:
            '&lt;ul&gt; &lt;li&gt;City as a data ecosystem&lt;/li&gt; &lt;li&gt;Context/Digital Twin Data Management&lt;/li&gt; &lt;li&gt;Relevance of Standardization&lt;/li&gt; &lt;li&gt;Smart Data Models - Structure, Examples, Users and Contributors&lt;/li&gt; &lt;/ul&gt;',
        domain: 'Developers',
        technology: 'Cities',
        length: 45,
        year: 2020
    },
    {
        name: 'India Urban Data Exchange',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/iudx.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 2,
        video: 'https://www.youtube.com/watch?v=YXp822s2_n4',
        content:
            '&lt;p&gt;This is the second half of the Adopting Common Smart Data Models for Smart Cities webinar, where FIWARE teamed up with the India Urban Data Exchange (IUDX) Program. FIWARE Foundation and IUDX recently announced their collaboration toward building an Open Source platform that facilitates secure, authenticated, and managed exchange of data amongst various data sources and consumers.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD,Data Models,Cities',
        length: 25,
        year: 2020
    },
    {
        name: 'Choosing Open Source Licenses for FIWARE Components',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/choosing-open-source.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 1,
        video: 'https://www.youtube.com/watch?v=1X_kNwkkcjo',
        content:
            '&lt;p&gt;Issues may arise when attempting to release software as Open Source, and this webinar discusses some of the decisions which need to be made (such as deciding which license to use) and offers a few solutions to cover some common release processes as well as explaining the commitments that must be made when offering new software to FIWARE.&lt;/p&gt;',
        domain: 'Community,Business',
        technology: '',
        length: 40,
        year: 2020
    },
    {
        name: 'FIWARE iHubs Webinar - Spain (Andalusia), Italy (Perugia), Argentina (La Plata)',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/ihubs-default.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 1,
        video: 'https://www.youtube.com/watch?v=IXjQwcuf9Xw',
        content:
            '&lt;p&gt;This webinar describes the functions of a FIWARE iHub. What the benefits are and how and why organizations should apply to become one.&lt;/p&gt;',
        domain: 'iHubs',
        technology: 'iHubs',
        length: 60,
        year: 2020
    },
    {
        name: 'FIWARE iHubs Webinar - Spain (Badajoz), France (Saint-Quentin), Uruguay (Montevideo)',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/ihubs-01.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 1,
        video: 'https://www.youtube.com/watch?v=GmloMFyDa7Y',
        content:
            '&lt;p&gt;This webinar describes the functions of a FIWARE iHub. What the benefits are and how and why organizations should apply to become one.&lt;/p&gt;',
        domain: 'iHubs',
        technology: 'iHubs',
        length: 60,
        year: 2020
    },
    {
        name: 'FIWARE iHubs Webinar - the Netherlands, Canary Islands, Azores',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/ihubs-02.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 1,
        video: 'https://www.youtube.com/watch?v=a1RV2UILgyg',
        content:
            '&lt;p&gt;This webinar describes the functions of a FIWARE iHub. What the benefits are and how and why organizations should apply to become one.&lt;/p&gt;',
        domain: 'iHubs',
        technology: 'iHubs',
        length: 60,
        year: 2020
    },
    {
        name: 'Customizing IoT Agents',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/custom-iot-agents.png',
        type: 'IoT Agents',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_IOTAgents.svg'/>",
        difficulty: 4,
        video: 'https://www.youtube.com/watch?v=HuEwI8wJKFU',
        content:
            '&lt;ul&gt; &lt;li&gt;Overview of Existing IoT Agents&lt;ul&gt; &lt;li&gt;Payloads, Transports and Protocols&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Code walkthroughs&lt;ul&gt; &lt;li&gt;Customizing the IoT Agent for Ultralight to accept XML payloads&lt;/li&gt; &lt;li&gt;IoT Agent Plugin adaptions - IoT Agent for ADAPT/ISOXML&lt;/li&gt; &lt;li&gt;File-based Device Measure Upserts (CSV, Excel)&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Many common payloads and protocols are already supported by IoT Agents. However, sometimes this is not enough and it is necessary to create your own IoT Agent or customize an existing IoT Agent. This webinar discusses various strategies on how to do this focusing on real-life use-cases from farming and water management.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'IoT Agent,Agrifood',
        length: 45,
        year: 2021
    },
    {
        name: 'NGSI-LD IoT Agents',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/ngsi-ld-iot-agents.png',
        type: 'IoT Agents',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_IOTAgents.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=XBLyMa-UBmg',
        content:
            '&lt;ul&gt; &lt;li&gt;What is an IoT Agent?&lt;/li&gt; &lt;li&gt;NGSI-LD Measures&lt;/li&gt; &lt;li&gt;NGSI-LD Actuations + Lazy Attributes:&lt;ul&gt; &lt;li&gt;Registrations&lt;/li&gt; &lt;li&gt;Subscriptions&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Provisioning NGSI-LD Devices:&lt;ul&gt; &lt;li&gt;Data Models and NGSI-LD &lt;code&gt;@context&lt;/code&gt;&lt;/li&gt; &lt;li&gt;The role of metadata&lt;/li&gt; &lt;li&gt;GeoJSON and GPS device provisioning&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Combining NGSI-v2 Devices with an NGSI-LD Context Broker&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;NGSI-LD support has been added to the library underpinning all of the IoT Agent so now it is simple to combine the power of linked data with IoT devices running the protocols of your choice. This webinar explains how to properly provision NGSI-LD devices, and how to convert NGSI-v2 to NGSI-LD when receiving measures from external devices not under your control.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD,IoT Agent',
        length: 40,
        year: 2021
    },
    {
        name: 'Monitoring Measures Using FIWARE &amp; Grafana',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/grafana.png',
        type: 'Visualisation',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Visualization.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=Gaa23hC0teo',
        content:
            '&lt;ul&gt; &lt;li&gt;What is Grafana?&lt;/li&gt; &lt;li&gt;FIWARE Architectural Considerations&lt;ul&gt; &lt;li&gt;Which microservices? What roles are required?&lt;/li&gt; &lt;li&gt;NGSI Data: Sources, Sinks, Transformations and Data Formats&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Deep Dive: Filling Station Dashboard&lt;/li&gt; &lt;li&gt;HOPU: Real-life Use Cases and Customizations with Grafana&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Visualisation of data is key to understanding trends and this webinar discusses how to analyse context data using common open source tools.&lt;/p&gt; &lt;p&gt;With visualisation components such as Grafana, minor changes to default look-and-feel can really help to improve customer satisfaction. Co-presenting at our webinar on Monitoring Measures Using FIWARE and Grafana we will have a developer who makes changes such as these for a living who will be demonstrating some real-life FIWARE-Grafana tweaks and customisations they have created which have already reached paying clients.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2,NGSI-LD,QuantumLeap,Grafana',
        length: 40,
        year: 2021
    },
    {
        name: 'Connecting NGSI-LD FIWARE Components',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/combining-v2-ld.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=sWa0k5GyGyw',
        content:
            '&lt;ul&gt; &lt;li&gt;Differences between NGSI-v2 vs NGSI-LD Interfaces&lt;ul&gt; &lt;li&gt;CRUD, Subscriptions and Registrations&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Data Models and NGSI-LD &lt;code&gt;@context&lt;/code&gt;&lt;/li&gt; &lt;li&gt;NGSI-LD Interfaces&lt;ul&gt; &lt;li&gt;Subscription Payloads (Key-Values, Normalized and GeoJSON) and Customizing Payloads&lt;/li&gt; &lt;li&gt;Registration Forwarding and receiving payloads&lt;/li&gt; &lt;li&gt;Federations and Data Ownership&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Demo: Combining v2 and LD&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;NGSI-LD is all about linked data. The NGSI-v2 syntax has evolved based on the work of the ETSI standards body. This webinar discusses how to ensure your FIWARE components are NGSI-LD compatible, how to transition data and how to continue using NGSI-v2 components within an NGSI-LD architecture.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-v2,NGSI-LD',
        length: 40,
        year: 2021
    },
    {
        name: 'End-to-end AI Solution With PySpark &amp; Draco',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/pyspark-draco.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=d724j7PpaVg',
        content:
            '&lt;ul&gt; &lt;li&gt;Managing Real-Time Context Data&lt;/li&gt; &lt;li&gt;Data Transformation and Persistence using Apache NIFI&lt;/li&gt; &lt;li&gt;Setting up a Google Cloud Environment&lt;ul&gt; &lt;li&gt;Creating a DataProc Cluster and connecting it to Jupyter Notebook&lt;/li&gt; &lt;li&gt;Using Google Cloud Storage service&lt;/li&gt; &lt;li&gt;Submitting a PySpark Job on DataProc&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Modelling a Machine Learning Solution on PySpark for Multi-classification&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Data processing is key to ensure Machine Learning models&#x27; performance. But commonly, data is collected and stored in its raw format, and to get insights from it, post-processing is required. What if all of this could be automated and managed through pipelines?&lt;/p&gt; &lt;p&gt;This webinar not only demonstrates how to collect data in real-time, transform it, and persist it using Draco to be ready for further use, but it also shows how to build an end-to-end AI service with PySpark hosted in the cloud.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'AI,Pyspark,Apache NIFI',
        length: 45,
        year: 2021
    },
    {
        name: 'NGSI-LD Temporal Operations',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/ngsi-ld-temporal.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=w6ymNPO-Baw',
        content:
            '&lt;ul&gt; &lt;li&gt;How to use NGSI-LD 1.3.1 Temporal Functions&lt;/li&gt; &lt;li&gt;Normalized and Simplified Temporal Formats&lt;/li&gt; &lt;li&gt;Complex Temporal Queries&lt;ul&gt; &lt;li&gt;Filtering&lt;/li&gt; &lt;li&gt;Geo-queries&lt;/li&gt; &lt;li&gt;Pagination&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;NGSI-LD 1.4.1 Temporal Aggregation Functions&lt;/li&gt; &lt;li&gt;Time-Series vs Temporal Interface - what to use and when&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Context describes the state of a system at a moment in time. Traditionally context brokers have no memory - they are just holding the &quot;now&quot;. However there are use cases which require the use of historical data and the NGSI-LD specification recognizes this and offers an optional temporal API for time-based operations.&lt;/p&gt; &lt;p&gt;This webinar will discuss the use of temporal operations, the types of payloads supported and other alternatives which may be considered based on your use case.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD',
        length: 45,
        year: 2021
    },
    {
        name: 'Managing Users Identities and Access Control Policies with API Umbrella',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/umbrella.png',
        type: 'Security',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Security.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=BuyhK1rzHIY',
        content:
            '&lt;ul&gt; &lt;li&gt;Overview - API Umbrella&lt;/li&gt; &lt;li&gt;Basic PEP and PDP Functions&lt;/li&gt; &lt;li&gt;Load Balancing&lt;/li&gt; &lt;li&gt;Integration with Keyrock&lt;/li&gt; &lt;li&gt;Statistics and Logs&lt;/li&gt; &lt;li&gt;iSHARE and Attribute-based Access Control&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Access and usage control guarantees the enforcement of data access and usage policies - such policies are defined as part of the terms and conditions when data resources and services are published or negotiated between providers and consumers. Once defined, the policies must be enforced using appropriate software tools. This webinar demonstrates the potential of using API Umbrella for access control across a FIWARE-based system.&lt;/p&gt; &lt;p&gt;API Umbrella is an open source API management tool incorporating both Policy Enforcement Point and Policy Decision Point functions which allows users to track and control API usage through API Keys and JSON Web Tokens. It also offers additional features such as rate limiting, API usage analytics and caching. During the webinar we will present the core functions of API umbrella and give examples on how to protect your APIs based on API Keys and tokens. Finally, we will introduce recent developments on how to manage API usage at the attribute level, based on iSHARE specifications.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'API Umbrella,Keyrock',
        length: 45,
        year: 2021
    },
    {
        name: 'Language Maps and Multilanguage support in NGSI-LD',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/language.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=QZIrSa7un24',
        content:
            '&lt;ul&gt; &lt;li&gt;Language Maps and why you need them&lt;/li&gt; &lt;li&gt;NGSI-LD &lt;code&gt;LanguageProperty&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Multilingual Queries and Responses&lt;ul&gt; &lt;li&gt;NGSI-LD Output formats&lt;/li&gt; &lt;li&gt;Language Tags (BCP 47)&lt;/li&gt; &lt;li&gt;Content Language Headers (RFC 3282)&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Localization and Internationalization&lt;ul&gt; &lt;li&gt;Dates and Currencies&lt;/li&gt; &lt;li&gt;Collation and Sort Order&lt;/li&gt; &lt;li&gt;Semantic Markup of Complex Objects&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Smart Tourism is a growing sector of IT and an opportunity for economic growth. However what can you do if the tourists you attract don&#x27;t speak the local language? Also many regions are multilingual and therefore require support for their own infrastructure in a variety of local languages. NGSI-LD recognises underlying multi-language support is a need for many such context-driven systems and the current ETSI specification now offers language properties which define a standardized language support mechanism based on JSON-LD syntax.&lt;/p&gt; &lt;p&gt;This webinar will discuss the latest specification changes and go into details as to what context brokers can and cannot do, and describe the use of best practices for localizing and internationalizing smart data models&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD',
        length: 35,
        year: 2021
    },
    {
        name: 'Machine learning with FIWARE and MLOps',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/mlops.png',
        type: 'Operations',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Operations.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=6X9r5Kb8UIs',
        content:
            '&lt;ul&gt; &lt;li&gt;What is MLOps?&lt;/li&gt; &lt;li&gt;Tooling for Machine Learning&lt;/li&gt; &lt;li&gt;Model &amp;amp; Data Monitoring&lt;/li&gt; &lt;li&gt;Continuous Integration, Deployment and Training&lt;/li&gt; &lt;li&gt;Further Experimentation and Learning&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;IoT has enabled companies to access data from billion of devices from all over the world but the full exploitation of this data has not yet been achieved as AI adoption still lags. This is mainly due to the fact that 90% of Machine Learning models do not reach the production stage because of a rapid decline of model performance in the industrialization phase. It is therefore necessary to provide solutions which can facilitate the transition from development to production. This is where FIWARE and MLOps come in to play to provide a full platform that can monitoring your data and models through different mechanisms and strategies to limit or prevent performance degradation.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'AI,MLOps',
        length: 30,
        year: 2021
    },
    {
        name: 'Scalable deployments with FIWARE',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/scalable.png',
        type: 'Operations',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Operations.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=WUman6Mnx58',
        content:
            '&lt;ul&gt; &lt;li&gt;Understanding of a scalable deployment&lt;/li&gt; &lt;li&gt;Infrastructure&lt;/li&gt; &lt;li&gt;Use-case Analysis&lt;/li&gt; &lt;li&gt;Scaling the Orion-LD context broker&lt;/li&gt; &lt;li&gt;Tooling and testing&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;FIWARE components offer a wide range of functionalities and opportunities. Scaling of components to high levels of performance, while maintaining cost efficiency and the ability to operate on the system is important in order to make use of FIWARE.&lt;/p&gt; &lt;p&gt;In this webinar, we will introduce how to plan for such scalable deployments and the environments they are running in. Setups, based on Kubernetes and OpenShift will be presented, together with associated performance numbers and information on how to achieve them.&lt;/p&gt;',
        domain: 'Developers',
        technology: '',
        length: 35,
        year: 2021
    },
    {
        name: 'Cloud-Edge processing with FogFlow',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/fogflow.png',
        type: 'Processing',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_ProcessingAnalysis.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=D06W3t5uv94',
        content:
            '&lt;p&gt;Device orchestration can be boring, repetitive and error-prone, however, FogFlow, with its novel intent-based programming model has turned the tables on this monotony, and created a standard-based data orchestration mechanism. It allows IoT solution providers to easily enable the smartness of their connected IoT devices with re-usable and extendable data processing capabilities that can run seamlessly on top of a cloud-edge environment.&lt;/p&gt; &lt;p&gt;FogFlow is emerging as a preferred choice within the FIWARE ecosystem to enable cloud-edge computing and digital twins and it can help to reduce the time-to-market of IoT solutions from months to days. This webinar will introduce the key features of FogFlow and also showcases how to integrate FogFlow with other FIWARE Generic Enablers across a variety of use cases.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'FogFlow',
        length: 70,
        year: 2021
    },
    {
        name: 'Passing the FIWARE Experts Exam',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/experts.png',
        type: 'Cross-Chapter',
        badge: '<b>Cross-Chapter</b>',
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=6_JLn-69Z_8',
        content:
            '&lt;ul&gt; &lt;li&gt;Background and History of the Examination&lt;/li&gt; &lt;li&gt;The role of the Examiners, Marking and Grading&lt;/li&gt; &lt;li&gt;Mock Examination&lt;ul&gt; &lt;li&gt;Body of Work&lt;/li&gt; &lt;li&gt;NGSI Interfaces&lt;/li&gt; &lt;li&gt;FIWARE Catalogue&lt;/li&gt; &lt;li&gt;Architectural Scenario&lt;/li&gt; &lt;li&gt;FIWARE Ready Devices&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Conclusions and Opportunities for certified FIWARE Experts&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;As an emerging technology, the FIWARE ecosystem has a growing need to be able to identify those principle developers who fully understand its core concepts(such as NGSI-v2 and NGSI-LD interfaces and other FIWARE fundamentals) and are able to create intelligent Smart Solutions which leverage the technology to the best effect.&lt;/p&gt; &lt;p&gt;A comprehensive examination process for identifying expertise in FIWARE was launched three years ago, and the number of registered FIWARE experts has been growing ever since.&lt;/p&gt; &lt;p&gt;The webinar provides a walkthrough of the examination process and explains how it is run, and is designed to help candidates understand the level of answers needed in order to pass with flying colours.&lt;/p&gt;',
        domain: 'Developers,iHubs',
        technology: 'NGSI-v2,NGSI-LD',
        length: 40,
        year: 2021
    },
    {
        name: 'FIWARE Basics, understanding the terminology',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/basics.png',
        type: 'Fundamentals',
        badge: '<b>Fundamentals</b>',
        difficulty: 0,
        video: 'https://www.youtube.com/watch?v=laDTBcLziB8',
        content:
            '&lt;ul&gt; &lt;li&gt;What is FIWARE?&lt;/li&gt; &lt;li&gt;The role of the FIWARE Foundation&lt;/li&gt; &lt;li&gt;Standards, Interfaces and Interoperability&lt;/li&gt; &lt;li&gt;Developer Terminology&lt;ul&gt; &lt;li&gt;REST&lt;/li&gt; &lt;li&gt;JSON&lt;/li&gt; &lt;li&gt;Linked Data&lt;/li&gt; &lt;li&gt;NGSI-v2 &amp;amp; NGSI-LD&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Standards within Security and Data Sharing&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Do you know what an &quot;API&quot; is? Ever wondered what makes it &quot;open&quot;?&lt;/p&gt; &lt;p&gt;Every profession has its own jargon and software engineering is no exception.&lt;/p&gt; &lt;p&gt;The aim of this webinar is to demystify the terminology surrounding FIWARE for a non-technical audience and explain why developers find it so easy to use.&lt;/p&gt;',
        domain: 'Developers,Business,Community,iHubs',
        technology: 'NGSI-LD',
        length: 45,
        year: 2021
    },
    {
        name: 'IoT Agent Gateways Using the IOTA Tangle for Secure Data Transfer',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/tangle.png',
        type: 'IoT Agents',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_IOTAgents.svg'/>",
        difficulty: 4,
        video: 'https://www.youtube.com/watch?v=gED5mAtBtYg',
        content:
            '&lt;p&gt;Within the FIWARE Ecosystem, IoT Agents are used to ensure that devices can send their data to, and be managed from a  Context Broker using their own native protocols. There is no restrictions on the transport layer to be used for these communications,  it could be anything from HTTP to MQTT to OPC-UA to LoRaWAN and more.&lt;/p&gt; &lt;p&gt;For example, IOTA is an open-source data communication protocol and zero-fee micro-transaction system utilising distributed ledger  technology. This allows participants in the IOTA network (“the Tangle”) to securely and immutably encrypt, transfer and store data. &lt;/p&gt; &lt;p&gt;The aim of this webinar is to demonstrate how create a gateway component for an IoT Agent and how connect to devices securely using  the IOTA Tangle, using it as a single source of truth and trust in data. Additionally discussing how to pick the most appropriate transport  or your use case and avoiding anti-patterns when securing IoT data.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'IOTA Tangle,IoT Agent,Blockchain',
        length: 45,
        year: 2022
    },
    {
        name: 'Managing Data Models and Exposing Digital Twins',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/beyond-ngsi-ld.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=42dNh1VM7n4',
        content:
            '&lt;ul&gt; &lt;li&gt;FIWARE iHubs - local and global&lt;/li&gt; &lt;li&gt;Structure and Use of NGSI-LD to deal with Complexity&lt;/li&gt; &lt;li&gt;Data Models as a &quot;common language&quot;&lt;/li&gt; &lt;li&gt;Building a simple sensor model&lt;/li&gt; &lt;li&gt;Controlling actions of Digital Twins&lt;/li&gt; &lt;li&gt;Capabilities defined in AAS (Asset Administrative Shell)&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;NGSI-LD has proved its relevance and efficiency to address technical interoperability challenges in many sectors and use cases implemented through FIWARE components, but we need new tools and approaches to go further towards semantic interoperability and  controlled interactions with heterogeneous stakeholders, including human beings who have no idea of what an API is.&lt;/p&gt; &lt;p&gt;The Asset Administration Shell (AAS) is a key concept to support digital twins implementation following the vision of the German  Plattform I4.0 initiative, and can contribute to a better exploitation of Machine-to-Machine interactions and also an improved  understanding of the digitized assets for people who may have a deep knowledge of own their businesses opportunities and constraints but little API experience.&lt;/p&gt; &lt;p&gt;In this webinar, we’ll discover how the French FIWARE iHub Faubourg Numérique has built up tools and methodologies based on NGSI-LD data models and the AAS concept to better engage and support SMEs and local governments in their digital innovations and transformations. Concrete use cases and demos in environmental monitoring and industrial robotics among others, will illustrate data modeling and  capabilities definitions with the help of a GUI-based “powered by FIWARE” solution.&lt;/p&gt;',
        domain: 'Developers,iHubs,Business',
        technology: 'NGSI-LD,Data Models',
        length: 40,
        year: 2022
    },
    {
        name: 'NGSI-LD Concise Payloads and Merge Patch Operations',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/concise-merge-patch.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=-XPGyM7K_kU',
        content:
            '&lt;ul&gt; &lt;li&gt;NGSI-LD payload formats&lt;ul&gt; &lt;li&gt;Normalized&lt;/li&gt; &lt;li&gt;Simplified (Key-Value pairs)&lt;/li&gt; &lt;li&gt;Concise&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Context broker operations and supported HTTP Methods in Orion-LD:&lt;ul&gt; &lt;li&gt;GET, POST, DELETE, PATCH, PUT, OPTIONS&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;PATCH Operations Deep Dive:&lt;ul&gt; &lt;li&gt;Partial Update&lt;/li&gt; &lt;li&gt;Merge&lt;/li&gt; &lt;li&gt;Use of JSON Literal &lt;code&gt;null&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Architectural Scenario&lt;/li&gt; &lt;li&gt;FIWARE Ready Devices&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;As NGSI-LD becomes more established, the needs of its user base become ever more diverse. Whether moving into data sharing or robotics, growing customer need dictates that context brokers must keep up with consumer demand and be able to offer prototypical versions of novel features for assessment and use. &lt;/p&gt; &lt;p&gt;The aim of this webinar is to showcase some experimental features of the Orion-LD context broker showing how its syntax, transports and endpoints can be adapted. These changes can then be contributed to the ETSI CIM committee for further discussion to achieve common operational consensus across brokers and specification changes made offering the potential to broaden the uptake of the official NGSI-LD API itself.&lt;/p&gt; &lt;p&gt;Learn how concise payloads and merge-patch updates have been provisionally integrated into the Orion-LD context broker providing an opportunity of innovation before standardization and how to start to use these new features and how to avoid incompatibility clashes against the solid core of the NGSI-LD standard.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD',
        length: 40,
        year: 2022
    },
    {
        name: 'Extending FIWARE MLOps using Argo Workflows',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/argo.png',
        type: 'Operations',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Operations.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=IIN5d2Mco9A',
        content:
            '&lt;ul&gt; &lt;li&gt;Background to MLOps&lt;/li&gt; &lt;li&gt;Tooling for Machine Learning&lt;/li&gt; &lt;li&gt;Use of FIWARE within MLOps&lt;/li&gt; &lt;li&gt;Use of Argo Workflows&lt;/li&gt; &lt;li&gt;Verta AI monitioring&lt;/li&gt; &lt;li&gt;Continuous Training, Continuous Integration, Continuous Development&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;MLOps is trend which has emerged to facilitate the industrialization of AI models. It consists of implementing DevOps  practices within a Machine Learning project. MLOps is a set of best practices to manage the AI models and data lifecycle.&lt;/p&gt; &lt;p&gt;The aim of this webinar is to present a methodology for implementing MLOps at scale within a Kubernetes architecture by  leveraging FIWARE interfaces.&lt;/p&gt; &lt;p&gt;Learn how to create and manage Machine Learning pipelines with Argo Workflow. This talk will also showcase all the benefits  of using CI/CD to automate AI models deployment into a production environment.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'AI,MLOps',
        length: 50,
        year: 2022
    },
    {
        name: 'Monitoring and Supervision of robotic systems using FIWARE and ROS 2',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/iotagent-ros2.pn',
        type: 'Robotics',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=qDMljIidA6k',
        content:
            '&lt;ul&gt; &lt;li&gt;Essential background concepts - FIWARE and ROS2 &lt;/li&gt; &lt;li&gt;Architectural Approach&lt;ul&gt; &lt;li&gt;&lt;code&gt;iot-agent-node-lib&lt;/code&gt;&lt;/li&gt; &lt;li&gt;IoT Agent for JSON as baseline&lt;/li&gt; &lt;li&gt;&lt;code&gt;rclnodejs&lt;/code&gt; library&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt; &lt;li&gt;Demo: Turtle Sim&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;FIWARE can be found in many industrial systems and in this webinar, we will share with you the secrets behind implementing a ROS2 IoT Agent, and how to potentially extend this methodology to other  industrial robotics systems.&lt;/p&gt; &lt;p&gt;There will also be a live demonstration how to monitor and supervise ROS 2 systems using FIWARE and the TurtleSim.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'ROS,IoT Agent',
        length: 30,
        year: 2022
    },
    {
        name: 'Local Expert in B2B Data Sharing',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/lebds.png',
        type: 'Security',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Security.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=J38N832HRjM',
        content:
            '&lt;p&gt;Effective B2B Data Sharing relies on the agreement to use common frameworks and protocols. No new frameworks and protocols should need to be built when existing technologies such as FIWARE are readily available and in common use. The fundamental technologies underpinning the process of data sharing are the use of a common trustworthy security framework -identifying participants and roles- and a common structured definition of payloads and protocols to be used when transferring data between trusted parties. A Local Expert in B2B Data Sharing should be able to explain the need for such frameworks and deeply understand how they operate and how the network of trust and interoperability.  is created.&lt;/p&gt; &lt;p&gt;The webinar explains the role and background required for an LEBDS and provides a walkthrough of the certification  process and explains how it is run and how to study to take the exam.&lt;/p&gt;',
        domain: 'iHubs,Community,Developers',
        technology: 'Data Spaces,NGSI-LD',
        length: 50,
        year: 2022
    },
    {
        name: 'Building real-time inference AI services with FIWARE',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/ai-interface.png',
        type: 'Processing',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_ProcessingAnalysis.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=L_IDCUE1IbA',
        content:
            '&lt;p&gt;There is no point in training Machine Learning models if there is no plan to make them available for applications to use. In this webinar, we are going to learn how to deploy an ML model as a REST API and leverage FIWARE components to enable real-time AI inference. The use case covered involves getting data from different sources/organizations  for real-time inference with a trained ML model. &lt;/p&gt; &lt;p&gt;This webinar is your chance to learn the end-to-end implementation of the real-time inference AI service: ML Training,  Docker setup, creating a Python Package, and implementing the ML API.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'AI',
        length: 40,
        year: 2022
    },
    {
        name: 'Actuation, Federation and interoperability of context brokers',
        img: 'https://www.fiware.org/wp-content/directories/webinars/images/context-broker-interoperability.png',
        type: 'Core Context',
        badge: "<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>",
        difficulty: 3,
        video: 'https://www.youtube.com/watch?v=ebk14k5dNxo',
        content:
            '&lt;p&gt;Registration of external context sources is a fundamental principle behind the correct use of context brokers. The use of NGSI-LD expands into multiple different areas ranging from robotics to IoT to distributed data spaces. The 1.6.1 ETSI Specification has introduced new modes of registration and clarified best practices to be used across interoperable systems.&lt;/p&gt; &lt;p&gt;Learn more about recent changes around the federation of context brokers and  the connection of context brokers with other sources of context such as IoT Agents.  Understand the correct use of datasetId for multi-attribute properties and the preferred definition of sequential actuations.&lt;/p&gt;',
        domain: 'Developers',
        technology: 'NGSI-LD',
        length: 50,
        year: 2022
    }
];
