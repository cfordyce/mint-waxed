db.resume.contacts.save({"name" : "Charles Fordyce", "email" : "charlesfordyce@theplatform.com", "phone" : "360-821-1630", "address" : "215 Clayton PL NW", "city" : "Bainbridge Island", "state" : "WA", "zip" : "98110" })
db.resume.summaries.save({"objective" : "Software Developer", "summary":"Innovative software development and integration professional adept at designing, building and testing software applications, hiring and managing testing teams and helping deliver accurate, customer-focused products.  Practiced at developing, debugging and testing tiered applications; focused on products written in C++, Java, Perl.  Strong Agile experience and certified Scrum Master.  Recent projects include management and contributing work on functional, integration and load testing enterprise-scale Java SOA and RESTful web services and multimedia web applications."})
db.resume.companies.save({"company":"THEPLATFORM FOR MEDIA, INC - SEATTLE, WA", startYear:"2009", endYear:"Present",summary:"A subsidiary of the Comcast Corporation providing online video content management, syndication and playback services."})
db.resume.companies.save({"company":"AMAZON.COM, INC. - SEATTLE, WA",startYear:"1997",endYear:"2007",summary:"Earth's Largest Online Retailer."})
db.resume.roles.save({"company":"THEPLATFORM FOR MEDIA, INC – SEATTLE, WA", "title":"Manager, Quality Assurance", startYear:"2009",endYear:"Present", summary:"Managed functional, performance and integration testing and project coordination of thePlatform’s Java WSDL and RESTful services which provided media data, subscription-based entitlements and DRM services to Fortune 500 customers including News Corporation, Comcast Xfinity , NBC, Time Warner Cable and Disney.", bullets:["Coordinated integration and regression testing of web services supporting TV Everywhere, which consumed data service endpoints, DRM digital media player with partners including Fancast and Comcast/Xfinity for HTML and Flash media consumer interfaces.", "Built automated test harness for thePlatform’s Player Development Kit (PDK) HTML5 and Flash video players in concert with 3rd party authentication, DRM and content delivery solutions from Adobe, Microsoft, Akamai and Edgecast and social media integration with Facebook and Twitter.", "Managed seven direct reports; four SDET’s and three STE’s ."]})
db.resume.roles.save({company:"AMAZON.COM, INC. - SEATTLE, WA", title:"Manager, Software Development", startYear:"2007",endYear:"2007", summary:"Oversaw staffing and testing performance and wrote automated applications. Managed a team of up to six software development engineers producing Quality Assurance web applications, test frameworks, and test automation tools composed in C/C++, Java, PERL, and JavaScript. Created a test case management database; a test case execution engine and supporting web applications; and API, Unit, and Performance test harnesses. Administered performance reviews and compensation recommendations, performed planning and budgeting, and complex project management.", bullets:["Led 15 teams in Seattle and Europe through a major data center migration from Virginia to Dublin, Ireland, including multiple languages and website functionalities, resulting in an on-time phased deployment and streamlined data processing. Designed the deployment test strategy including documenting deployment validation and best-practices."]})
db.resume.roles.save({company:"AMAZON.COM, INC. - SEATTLE, WA", title:"Lead, Software Development Engineer in Test", startYear:"2004",endYear:"2006", summary:"Built various testing and performance applications for Amazon’s n-tiered Personalization software. Led a team of 5 – 6 developers working on up to 15 projects concurrently. including unit and API tests, load and latency measurements of APIs and UIs, build verification tests and website content and functionality exercises. Performed project management, annual project planning, status reports, mentoring and candidate interviewing. Created a testing tool using proper software development lifecycle and wrote automated test cases. Communicated with program and product managers and developers, coordinating testing schedules and bug triage and conveying clear requirements for testers and code reviews. Reported development metrics regularly to managers.",bullets:["Wrote a JavaScript testing framework to upgrade testing tools as Amazon rewrote its architecture moving from a single monolithic executable object into a SOA.","Created a C++ API test framework built on CPPUnit, enabling test runs using variable data sets without having to recompile, a procedure which was eagerly adopted company-wide.","Led group testing order pipeline and creation and mentored new teammates on Amazon software architecture.","Oversaw testing the new APIs supporting US, Europe, and Japan tax software and integration.","Designed and authored the Amazon.com Test Order Generator (TOG) tool, leveraging the internal order-creation APIs, allowing for easy configuration and automation for creating customer orders in the test environment in C++, saving time for development and QA teams.","Wrote a real-time reporting application that aggregated test results and bug reports used by teams company-wide, improved testing efficiency and significantly reduced workload.","Interviewed, hired, and managed a team of 4 Personalization features developers based in Romania. Led a U.S. team supporting their technical and project-related issues via email."]})
db.resume.roles.save({company:"AMAZON.COM, INC. - SEATTLE, WA", title:"Software Development Engineer in Test", startYear:"1997",endYear:"2003", summary:"Developed a variety of new testing tools in response to company's needs, resulting in regular promotions and as reputation as a go-to problem solver and innovator, gaining broad experience in front-end and back-end testing. Ensured quality of content and functionality and maintained scripts written in PERL to test the order creation process. Wrote hundreds of automated test cases in C++.",bullets:["Wrote automated tests to exercise website functionality and content for daily releases of the U.S. retail website. Developed applications in PERL with heavy use of regular expressions."]})
db.resume.education.save({education:["Scrum Master Certification, 2006","University of Washington Certificate in C++ Programming, 2002","University of Washington Certificate in C Programming, 2000","Undergraduate courses at Edmonds CC, 1998-1999","Undergraduate courses at Houston CC, 1990-1993"]});
db.resume.skills.save({"Operating Systems":"Linux, UNIX, OSX and Windows",Languages:"C, C++, Java, PERL, Groovy, JavaScript and Ruby", Databases:"MySQL, Oracle, Mongo, Berkeley"});
