import { Icons } from "../assets/icons";
import {Images} from '../assets/images.js';

import efficent from '../assets/images/efficent.png'
import tracing1 from '../assets/images/tracing1.png'
import operation from '../assets/images/operation.png'
 import check from '../assets/images/check.png'
// import user_stories from '../assets/images/user_stories.jpg'
import database from '../assets/externalimages/database.png'
import js from '../assets/externalimages/js.png'
import query from '../assets/externalimages/query.png'
import security from '../assets/externalimages/security.png'
import documentation from '../assets/externalimages/documentation.png'
import construction from '../assets/externalimages/construction.png'
import fun1 from '../assets/externalimages/fun1.png'
import fun2 from '../assets/externalimages/fun2.png'
import fun3 from '../assets/externalimages/fun3.png'
import fun4 from '../assets/externalimages/fun4.png'
import pagging from '../assets/externalimages/pagging.png'
import select from '../assets/externalimages/select.png'
import secure from '../assets/externalimages/secure.png'
import support from '../assets/externalimages/support.png'
import sort from '../assets/externalimages/sort.png'
import board from '../assets/externalimages/board.png'
import example from '../assets/externalimages/example.png'
import server from '../assets/externalimages/server.png'
import sorce from '../assets/externalimages/source.png'
import ai from '../assets/externalimages/ai.png'
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
    id: 1,
    title: "Streamlined Operations",
    Icon: operation, 
    description: "Optimize delivery operations with real-time data insights.",
  },
  {
    id: 2,
    title: "Enhanced Tracking",
    Icon: tracing1,
    description: "Improve tracking with comprehensive logistics data.",
  },
  {
    id: 3,
    title: "Efficient Routing",
    Icon: efficent,
    description: "Ensure the fastest delivery routes to save time.",
  
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
    image: Images.framework3,
    title: " Advanced Dynamic Querying for Front-End Flexibility",
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

// export const collabApps = [
//   {
//     id: "0",
//     title: "Figma",
//     icon: sql,
//     width: 26,
//     height: 36,
//   },
//   {
//     id: "1",
//     title: "Notion",
//     icon: comosicon,
//     width: 34,
//     height: 36,
//   },
//   {
//     id: "2",
//     title: "Discord",
//     icon: storageicon,
//     width: 36,
//     height: 28,
//   },
//   {
//     id: "3",
//     title: "Slack",
//     icon: mongodbicon,
//     width: 34,
//     height: 35,
//   },
//   {
//     id: "4",
//     title: "netcoreicon",
//     icon: netcoreicon,
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "5",
//     title: "Protopie",
//     icon: inmemory,
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "6",
//     title: "Framer",
//     icon: sqllite,
//     width: 26,
//     height: 34,
//   },
  // {
  //   id: "7",
  //   title: "Raindrop",
  //   icon: raindrop,
  //   width: 38,
  //   height: 32,
  // },
// ];






export const benefits = [
  {
    id: "0",
    title: " Database Support",
    text: "Seamlessly supports popular SQL and NoSQL databases including Azure Data Tables, Cosmos DB, MongoDB, MySQL, SQLite, SQL Server, PostgreSQL, and Oracle.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:database
   
  },
  {
    id: "1",
    title: "Security",
    text: "Eliminates injection attacks by building LINQ expressions using individually mapped functions and parsed data.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:security,
    light: true,
  },
  {
    id: "2",
    title: "Dynamic Querying",
    text: "Allows clients and front-end applications to dynamically query data through a standardized endpoint.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:query,
  },
  {
    id: "3",
    title: "JavaScript Integration",
    text: "Easy integration with front-end applications using the ServiceQuery.js JavaScript file for building request queries.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:js,
    light: true,
  },
  {
    id: "4",
    title: "Comprehensive Documentation",
    text: "Detailed documentation covering supported data types, operations, and implementation examples.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:documentation,
  },
  {
    id: "5",
    title: "Flexible Query Construction",
    text: "Construct queries using the ServiceQueryRequestBuilder object, supporting a variety of operations.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:construction,
  },
  {
    id: "6",
    title: "Aggregate Functions",
    text: "Includes support for average, count, maximum, minimum, and sum functions.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:fun1,
  },
  {
    id: "7",
    title: "Advanced Comparison Functions",
    text: "Supports a wide range of comparison functions for both numeric and string data types.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:fun2,
    light: true,
  },
  {
    id: "8",
    title: "Grouping and Logical Functions",
    text: "Create complex queries using AND, OR, BEGIN, and END grouping functions.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:fun3,
  },
  {
    id: "9",
    title: "Nullability Functions",
    text: "Handle null and non-null values effectively in your queries.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:fun4,
    light: true,
  },
  {
    id: "10",
    title: "Paging Functions",
    text: "Easily implement pagination with page number, page size, and include count functions.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:pagging,
  },
  {
    id: "11",
    title: "Selecting Functions",
    text: "Customize query results by selecting specific properties and using distinct queries.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:select,
    light: true,
  },
  {
    id: "12",
    title: "Sorting Functions",
    text: "Sort results in ascending or descending order.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:sort,
  },
  {
    id: "13",
    title: "Role-Based Security",
    text: "Restrict properties based on user roles to enhance data security.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:secure,
    light: true,
  },
  {
    id: "14",
    title: "Sharding Support",
    text: "Add expressions to queries to target specific data segments for efficient retrieval and security.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:support,
  },
  {
    id: "15",
    title: "Server-Side Customization",
    text: "Customize server-side query processing with the ServiceQueryOptions object.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:server,
    light: true,
  },
  {
    id: "16",
    title: "Example Implementations",
    text: "Explore detailed examples for various database storage providers in the examples folder.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:example,
  },
  {
    id: "17",
    title: "Discussion Board",
    text: "Join the community discussion board to post questions, share feedback, and collaborate with other users.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:board,
    light: true,
  },
  {
    id: "18",
    title: "Direct Support",
    text: "Access direct support via email for any issues or inquiries related to ServiceQuery with our consulting services.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:support,
  },
  {
    id: "19",
    title: "Open Source",
    text: "ServiceQuery is available under the MIT permissive license, allowing for community contributions and transparency.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:sorce,
    light: true,
  },
  {
    id: "20",
    title: "Artificial Intelligence",
    text: "Query your database with simple human text input using OpenAI GPT LLMs.",
    backgroundUrl: "./src/assets/externalimages/card-3.png",
    iconUrl:ai,
  },
];