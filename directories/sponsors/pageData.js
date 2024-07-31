var companies = [
        'BeOpen',
        'Cities Today',
        'DOME Project',
        'DSBA',
        'Enershare',
        'ESA',
        'Infiniti Mondi',
        'Latitudo 40',
        'Meditech',
        'Municipality of Naples',
        'Opendatasoft',
        'Renewable Matter',
        'SmartCitiesWorld',
        'The Lisbon Council',
        'The Smart City Journal',
        'ULSIT',
]; var departments = [
]; var domains = [
]; var titles = [
        'Hosting Partner',
        'Media Partner',
        'Official Partner',
        'Premier Sponsor',
        'Sponsor',
        'Strategic Alliance',
]; var countries = [
]; var modalData = [
    { name: "Municipality of Naples", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-municipality-of-naples.png", "company-link": "https://www.comune.napoli.it/home", content: "Naples is located halfway between two volcanic areas, the volcano Mount Vesuvius and the Phlegraean Fields.The city is noted for its rich history, art, culture and gastronomy and, in the modern day, the historic centre of the city is listed by UNESCO as a World Heritage Site. The metropolitan area of Naples is the second most populated in Italy and one of the largest in all of Europe with around 3.8 million people. The whole history of Naples is based on the concept of welcoming foreigners and of different cultures living side by side. The city&#x27;s enviable geographical position half-way down the Italian coast makes it easy to reach from anywhere in the world. The wonderful historical, artistic and archaeological heritage is an intrinsic part of the city. At the same time, we mustn&#x27;t forget its contemporary creative nature which ensures the city always has some new project on the go, some new goal, and plenty of new ideas. Naples is a city on the sea, a place full of light yet with dark, hidden foundations. It has a great cultural and artistic identity which is stamped on the brow of its many museums, castles, churches, squares, narrow streets and archaeological remains. It is a city in which culture, art and &quot;light&quot; mix with the obscure darkness of a hidden, submerged, underground world.", linkedin: "https://www.linkedin.com/company/comune-di-napoli/", twitter: "", type: "Hosting Partner" },
    { name: "Infiniti Mondi", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-infiniti-mondi.png", "company-link": "https://www.casatecnologienapoli.it/it/", content: "Naples becomes the hub of technological and social innovation thanks to the House of Emerging Technologies: a center and at the same time a widespread laboratory, dedicated to technological transfer in the audiovisual, gaming and more general cultural and creative industries sectors. Strategic sectors for the territory that project themselves into the future with creative and innovative technologies, implementations and processes such as Metaverso, Web3, Gamification, Big Data, Artificial Intelligence, Quantum Computing, Mixed Reality.", linkedin: "https://www.linkedin.com/company/infiniti-mondi-casa-delle-tecnologie-emergenti-di-napoli", twitter: "", type: "Official Partner" },
    { name: "Meditech", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-meditech.png", "company-link": "https://meditech4.com/", content: "The Mediterranean Competence Center 4 Innovation is the multi-regional Competence Center, active in Puglia and Campania, born as a facilitator of the adoption of Industry 4.0 enabling technologies by SMEs and Public Administration and to be a tool for disseminating culture and innovation practices in the production of goods and services on the national territory, in particular in the Mediterranean basin. The Competence Center, selected in 2018 by the MISE among the eight centers of national importance, is a public-private partnership, which carries out orientation and training activities for companies on Industry 4.0 issues as well as support in the implementation of innovation and research projects industrial and experimental development aimed at the creation, by user companies, in particular SMEs, of new products, processes or services (or their improvement) through advanced technologies in the Industry 4.0 context. The services offered are also aimed at the Public Administration, a major protagonist of the digital transition. Meditech counts on the collaboration of 5 Universities from Campania, 3 Universities from Puglia and 21 cutting-edge industrial players.", linkedin: "https://www.linkedin.com/company/meditechcompetencecenter/", twitter: "", type: "Official Partner" },
    { name: "Latitudo 40", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-latitudo40.png", "company-link": "https://latitudo40.com/", content: "Latitudo 40, a Techstars Portfolio Company, is an innovative start-up company that combines the skills and expertise of a large company with the passion and ability to innovate a user-centered design lean organization. Enhancing the 20 years of experience of its founders in ICT, Latitudo 40 has created the easiest and fastest platform to turn satellite imagery into geospatial information to support everyday decisions. For the first time in one platform all the features to automatically search, process and elaborate the images produced by Earth observation satellites and transform them into information to simplify business processes with powerful artificial intelligence and machine learning algorithms.", linkedin: "https://www.linkedin.com/company/latitudo-40/", twitter: "", type: "Premier Sponsor" },
    { name: "Opendatasoft", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-opendatasoft.png", "company-link": "https://www.opendatasoft.com/en/", content: "Opendatasoft is the leader of data democratization. It provides a SaaS Data Portal solution allowing seamless self-service access to all of part of an organization’s data assets. Opendatasoft empowers organizations to scale personalized data experiences in record time and it is the essential data management solution to decrease costs and improve efficiency, increase and build new revenue streams, mitigate risks, and manage crises. Opendatasoft enables data centricity, informing better decision-making at all levels and helping organizations to use data to fundamentally transform how they function and operate. Opendatasoft serves 400 customers in 25 countries, powering more than 3,000 data portals. Based on this experience, we’ve developed a unique expertise in data management, which we use to provide our customers with premium services to help them deliver use cases that meet their specific needs. Public and private organizations from all sectors democratize data in their ecosystem by making it usable at scale through internal or external data portals powered by Opendatasoft.", linkedin: "https://www.linkedin.com/company/opendatasoft/", twitter: "", type: "Premier Sponsor" },
    { name: "The Lisbon Council", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-the-lisbon-council.png", "company-link": "https://lisboncouncil.net/", content: "The Lisbon Council is a Brussels-based think tank and policy network committed to making a positive contribution by engaging political leaders and the public at large in a constructive exchange about the economic and social challenges of the 21st century.", linkedin: "https://www.linkedin.com/company/the-lisbon-council", twitter: "", type: "Premier Sponsor" },
    { name: "BeOpen", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-beopen.png", "company-link": "https://beopen-dep.eu/", content: "BeOpen will enable the development of new digital and AI services by facilitating access to and use of EU Public Sector High Value Datasets. The BeOpen project Framework is expected to increase the availability and usability of Open Data provided by the public sector. Eight pilots will address mobility, urban security, environment, and natural disasters challenges in several EU regions.", linkedin: "https://www.linkedin.com/company/beopen-dep/", twitter: "", type: "Sponsor" },
    { name: "DOME Project", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-dome.png", "company-link": "https://dome-marketplace.eu/", content: "A Distributed Open Marketplace for Europe Cloud and Edge Services.", linkedin: "https://www.linkedin.com/company/dome-marketplace/", twitter: "", type: "Sponsor" },
    { name: "DSBA", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-DSBA.png", "company-link": "https://data-spaces-business-alliance.eu/", content: "The Data Spaces Business Alliance (DSBA) accelerates business transformation in the data economy. It’s the first initiative of its kind, uniting industry players to realize a data-driven future in which organizations and individuals can unlock the full value of their data. Data spaces are key to achieving sovereign, interoperable and trustworthy data-sharing across businesses and societies – a key step to the data economy of the future. The Alliance embraces this reality, converging the best skills, assets, and experience in Europe into a one-stop-shop for data spaces, from inception to deployment. The Data Spaces Business Alliance are Gaia-X European Association for Data and Cloud AISBL, the Big Data Value Association (BDVA), FIWARE Foundation, and the International Data Spaces Association (IDSA). Together they represent 1,000+ leading key industry players, associations, research organizations, innovators, and policymakers worldwide. With this cross-industry expertise, resources and know-how, the Alliance drives awareness, evangelizes technology, shapes standards, and enables integration across industries.", linkedin: "", twitter: "", type: "Strategic Alliance" },
    { name: "Enershare", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-enershare.png", "company-link": "https://enershare.eu/", content: "The Energy Data Space for Europe. Bringing together energy and data value chains to enable the energy transition.The overall Enershare framework will be applied, implemented, demonstrated, and validated in seven real-life pilots, eleven use cases, across seven countries. The large geographical coverage of the pilot sites aims to support the large-scale EU-wide replicability and market take-up of energy data sharing technological solutions and data-driven services in different socio-economic contexts.", linkedin: "https://www.linkedin.com/company/enershare-eu/", twitter: "", type: "Sponsor" },
    { name: "ESA", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-esa.png", "company-link": "https://www.esa.int/", content: "The European Space Agency (ESA) is Europe’s gateway to space. Its mission is to shape the development of Europe’s space capability and ensure that investment in space continues to deliver benefits to the citizens of Europe and the world.", linkedin: "https://www.linkedin.com/company/european-space-agency/", twitter: "", type: "Sponsor" },
    { name: "ULSIT", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-unibit.png", "company-link": "https://www.unibit.bg/en", content: "The University of Library Studies and Information Technologies (ULSIT) is a state university, renamed by Parliament Decree on 29th Nov. 2010 after the Specialized Higher School of Library Studies and Information Technologies, voted as such in 2004. Throughout the years it was respectively: Established - 18th September 1950 by Government Decree as the State Library Institute and later renamed as The College of Library Studies by Parliament Decree; ULSIT has BA, MA and PhD programs for the respective degrees that it has successfully passed accreditation procedures. ULSIT has modern facilities to train its students. The specifically designed and built building includes a Ceremonial Hall; specialized seminar rooms; auditoria; computer laboratory by the name of John Atanasoff with modern computer rooms with Intranet and LAN, non-stop Internet access, where contemporary information and communication technologies are taught; a Library and Information Center that can seat 150 readers. A library stock of over 52,000 entries and book storage for 80,000 documents; there is an IP Point – information and consultant center on copyright law; Career center for assisting students in their job-seeking activities; a Museum-educational collection called Spiritual Pursuit and Leadership; museum exhibition of the contemporary Bulgarian spirituality; Publishing house “Za Bukvite – O pismeneh”; St. Nicolay Chapel; a phonetic study room; Lecturers’ rooms and administrative staff rooms; a meeting room; a modern gym with a large court; tennis courts; fitness room ; canteen; a coffee house.", linkedin: "https://www.linkedin.com/company/national-security-department-ulsit/", twitter: "", type: "Sponsor" },
    { name: "Cities Today", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-cities-today.png", "company-link": "https://cities-today.com/", content: "Cities Today was launched as the first global magazine to contain analysis, comment and best practices on sustainable urban development, connecting local governments with public and private sector solutions. The publication has become one of the leading knowledge platforms for city leaders for mobility, IoT, safety and security, resilience and resource efficiency.", linkedin: "https://www.linkedin.com/showcase/cities-today/", twitter: "", type: "Media Partner" },
    { name: "Renewable Matter", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-renewable-matter.png", "company-link": "https://www.renewablematter.eu/en", content: "The bimonthly magazine Renewable Matter is an in-depth tool, in English and Italian. Each issue addresses a key topic of the circular economic transition, giving voice to experts, political leaders, innovators, designers and entrepreneurs. Soil, construction, circular fashion, food systems, services, bioeconomy, sharing economy, sustainable finance are some of the themes that you will find on the pages of Renewable Matter, available only via subscription in paper and digital format. An essential intelligence tool, to be read calmly and carefully, a tool for businesses and research centers. Subscribers will find access to all issues published to date.", linkedin: "", twitter: "", type: "Media Partner" },
    { name: "SmartCitiesWorld", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-smart-cities-world.png", "company-link": "https://www.smartcitiesworld.net/", content: "SmartCitiesWorld is a world-leading platform for sharing ideas and case studies to solve urban challenges that enable us to live in more resilient, sustainable, safe, and prosperous environments.", linkedin: "https://www.linkedin.com/company/smartcitiesworld/", twitter: "", type: "Media Partner" },
    { name: "The Smart City Journal", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-smart-city-journal.png", "company-link": "https://www.thesmartcityjournal.com/en/", content: "The Smart City Journal is the world&#x27;s leading communication platform in the smart city – sector. In 2020, the most complicated year affected by a pandemic, we have reached one and a half million people in 135 countries in more than 1,000 cities around the world. Our platform is up to date with the latest news on urban innovation, technology and solutions in a world that moves by leaps and bounds. The Smart City Journal presents success stories of cities, organizations and companies for the development and global exchange of solutions, sustainable strategies, unique products and services in favor of citizens for a better world.", linkedin: "https://www.linkedin.com/company/the-smart-city-journal/", twitter: "", type: "Media Partner" },
];
