import { Icons } from "../assets/icons";
import {Images} from '../assets/images.js';
import sql from '../assets/images/sql.png'
import comosicon from '../assets/images/comosicon.png'
import storageicon from '../assets/images/storageicon.png'
import mongodbicon from '../assets/images/mongodbicon.png'
import netcoreicon from '../assets/images/netcoreicon.png'
import postsqlicon from '../assets/images/postsqlicon.png'
import sqlservericon from '../assets/images/sqlservericon.png'
import sqllite from '../assets/images/sqllite.png'
import inmemory from '../assets/images/inmemory.png'
import check from '../assets/images/check.png'
import user_stories from '../assets/images/user_stories.jpg'


export const FEATURES_DATA = [
  {
    id: "feat_1",
    title: "Versatile",
    image: Images.ai_assisted,
    description: "Supports numerous relational (SQL) and document (NoSQL) database engines. Use the same tool to access all of your database engines."
  },
  {
    id: "feat_2",
    title: "Secure",
    image: Images.ai_driven,
    description: "It is a LINQ expressions builder that uses individually mapped functions and parsed data, eliminating injection attacks."
  },
  {
    id: "feat_3",
    title: "Powerful",
    image: Images.scope,
    description: "Provides clients and front-end applications a standarized endpoint for unprecedented querying capabilities for all your databases."
  }
];


export const FEATURES_GRID_DATA = [
  {
    id: "feat_grid_1",
    title: "Storage Agnostic",
    description:
      "Exposes a storage platform-agnostic model for REST-based API querying capabilities.",
    image: Images.ai_process,
  },
  {
    id: "feat_grid_2",
    title: "Evolve Your Data Querying Capabilities",
    description: " Use our open-source examples to quickly implement solutions for popular databases.",
    image: Images.user_stories,
  },
  /*{
    id: "feat_grid_3",
    title: "AI Test Case Generation",
    description:
      "Easily Sync your User Import Designs seamlessly to create Acceptance Criteria for every screen and each User Story. Stories, Epics, and Acceptance Criteria to Jira or Azure for production.",
    image: Images.ai_test_case,
  },
  {
    id: "feat_grid_4",
    title: "Import your Designs",
    description:
      "Import your designs from Figma seamlessly and use AI to narrate your user flows.",
    image: Images.import_design,
  },
  {
    id: "feat_grid_5",
    title: "Sync to your Tools",
    description:
      "Easily Sync your User Stories, Epics, and Acceptance Criteria to Jira or Azure for production.",
    image: Images.sync_tools,
  },*/
];

export const UPLIFT_DELIVERY_DATA = [
  {
    id: "uplift_1",
    icon: Icons.storage,
    title: "Versatile Database Compatibility",
    description:
      "ServiceQuery integrates effortlessly with SQL and NoSQL databases, including SQL Server, PostgreSQL, and Oracle, allowing you to select the perfect engine for your needs.",
  },
  {
    id: "uplift_2",
    icon: Icons.spiral,
    title: "Harness the Power of NoSQL",
    description:
      " Utilize NoSQL databases like MongoDB and Cosmos DB for dynamic data models and enhanced performance, enabling you to build scalable modern applications.",
  },
  {
    id: "uplift_3",
    icon: Icons.code,
    title: "Comprehensive Data Solutions",
    description:
      "With support for relational databases like MySQL and SQLite, as well as Azure Data Tables, ServiceQuery simplifies data management and empowers sophisticated application development.",
  },
];

export const COLLECTIVE_DELIVERY_DATA = [
  {
    id: "collective_1",
    icon: Icons.project_cord,
    title: "Wide Database Support",
    description:
      "Supports popular SQL and NoSQL databases, including Azure, Cosmos DB, MongoDB, MySQL, and more.",
  },
  {
    id: "collective_2",
    icon: Icons.risk_mgmt,
    title: "Security",
    description:
      "Prevents injection attacks by building LINQ expressions with mapped functions and parsed data.",
  },
  {
    id: "collective_3",
    icon: Icons.communication,
    title: "Dynamic Querying",
    description:
      "Allows dynamic data querying through a standardized endpoint for front-end applications.",
  },
  {
    id: "collective_4",
    icon: Icons.strategic_align,
    title: "JavaScript Integration",
    description:
      "Integrates easily with front-end apps using ServiceQuery.js for building queries.",
  },
  {
    id: "collective_5",
    icon: Icons.scope_mgmt,
    title: "Comprehensive Documentation",
    description:
      "Includes detailed documentation with supported data types, operations, and examples.",
  },
  {
    id: "collective_6",
    icon: Icons.quality_assur,
    title: "Flexible Query Construction",
    description:
      "Supports diverse operations using the ServiceQueryRequestBuilder for query building.",
  },
];

export const FRAMEWORK_DATA = [
  {
    id: "framework_1",
    image: Images.framework1,
    title: "Robust Multi-Database Support",
    description:
      "ServiceQuery offers comprehensive compatibility with leading SQL and NoSQL databases, including Azure Data Tables, Cosmos DB, SQL Server, and MongoDB. This flexibility allows seamless integration across various data ecosystems, ensuring consistent and efficient querying capabilities, regardless of the database technology in use.",
  },
  {
    id: "framework_2",
    image: Images.framework2,
    title: " Enhanced Security with Built-In Protection",
    description:
      "With ServiceQuery, security is paramount. The library eliminates the threat of SQL injection attacks by constructing queries with individually mapped functions, ensuring data protection through secure, pre-validated LINQ expressions. This guarantees secure data operations without compromising performance.",
  },
  {
    id: "framework_3",
    image: Images.framework3,
    title: "Advanced Dynamic Querying for Front-End Flexibility",
    description:
      "ServiceQuery enables powerful dynamic querying, allowing front-end applications to interact with backend data through a standardized API. This feature simplifies data access, providing the agility to build complex queries on the fly, improving operational efficiency and reducing development complexity.",
  },
  
];


export const collabText =
  "Use our online tools to create microservices quickly and easily in just a few seconds."

export const collabContent = [
  {
    id: "0",
    title: "Try completely free!",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: sql,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: comosicon,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: storageicon,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: mongodbicon,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "netcoreicon",
    icon: netcoreicon,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: inmemory,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: sqllite,
    width: 26,
    height: 34,
  },
  // {
  //   id: "7",
  //   title: "Raindrop",
  //   icon: raindrop,
  //   width: 38,
  //   height: 32,
  // },
];




export const benefits = [
  {
    id: "0",
    title: "REST API Services",
    text: "Templated, repository-based services for quickly exposing standard CRUD methods or custom methods.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
  },
  {
    id: "1",
    title: "ServiceQuery",
    text: "Supports standardized, polyglot data querying for SQL and NoSQL databases.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
    light: true,
  },
  {
    id: "2",
    title: "Business Rule Engine",
    text: "Business Rule Engine: Polymorphic techniques to build reusable business logic.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
  },
  {
    id: "3",
    title: "Domain-Driven Design",
    text: "Domain-Driven Design concepts, standards and patterns.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
    light: true,
  },
  {
    id: "4",
    title: "Event-Driven Architecture",
    text: "Customize business logic for any supported object and method.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
  },
  {
    id: "5",
    title: "Classic or Modern API Design",
    text: "Choose between Classic or Modern modes, with various response formats.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
  },
  {
    id: "6",
    title: "Microservices Architecture",
    text: "Break down applications into smaller, manageable services that can be developed and deployed independently.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
  },
  {
    id: "7",
    title: "Classic or Modern API Design ",
    text: "Choose between Classic or Modern modes, with various response formats.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
    light: true,
  },
  {
    id: "8",
    title: " Background Processing",
    text: "Supports asynchronous processes, tasks, and rules.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
  },
  {
    id: "9",
    title: "SQL and NoSQL Database Support",
    text: "Works standard with relational (SQL) and document (NoSQL) database engines.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
    light: true,
  },
  {
    id: "10",
    title: "Service Bus Engine",
    text: "Supports broadcasts of system data with InMemory and Azure Service Bus.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
  },
  {
    id: "11",
    title: " NuGet Packages",
    text: "Quickly build new services and applications.",
    backgroundUrl: {check},
    iconUrl: check,
    imageUrl: user_stories,
    light: true,
  },
];


// export const socials = [
//   {
//     id: "0",
//     title: "Discord",
//     iconUrl: discordBlack,
//     url: "#",
//   },
//   {
//     id: "1",
//     title: "Twitter",
//     iconUrl: twitter,
//     url: "#",
//   },
//   {
//     id: "2",
//     title: "Instagram",
//     iconUrl: instagram,
//     url: "#",
//   },
//   {
//     id: "3",
//     title: "Telegram",
//     iconUrl: telegram,
//     url: "#",
//   },
//   {
//     id: "4",
//     title: "Facebook",
//     iconUrl: facebook,
//     url: "#",
//   },
// ];