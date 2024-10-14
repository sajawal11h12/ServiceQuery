import React from 'react';
import Header from '../../layout/Header';
import Lottie from 'lottie-react';
import getstarted from '../../assets/images/getstarted.json'; // Path to your animation
import grid from '../../assets/images/grid.png'; // Path to your grid image
import Button from '../../button';
import ButtonGradient from '../../buttonGrad';
import getstartedai from '../../assets/images/getstartedai.jpg';
import check from '../../assets/images/check.png';
import { FaCode, FaDatabase, FaRestroom, FaJsSquare } from 'react-icons/fa';
import Footer from '../../layout/Footer';

const Getstarted = () => {
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto pt-32">
        {/* Main Container for Text and Animation */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content on the Left */}
          <div className="md:w-1/2 w-full md:pr-8">
            {/* Open Source Section */}
            <div className="mt-10">
              <h2 className="text-5xl font-bold text-white mb-4">Open Source</h2>
              <p className="text-lg text-white">
                ServiceQuery is open source software and is free to use for commercial purposes. 
                It is available under the{' '}
                <a
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  MIT permissive license
                </a>.
              </p>
            </div>

            {/* Example Applications Section */}
            <div className="mt-10">
              <h2 className="text-5xl font-bold text-white mb-4">Example Applications</h2>
              <p className="text-lg text-white">
                Explore all of our example applications. We have provided examples supporting 
                the most popular database engines, such as SqlServer, MongoDB, Azure Data Tables, 
                Cosmos, Sqlite, PostgreSQL, and more!{' '}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  View our GitHub repository
                </a>{' '}
                to view them all.
              </p>
              <Button className='text-white flex mt-7 ml-32'>View Github Repo</Button>
              <ButtonGradient />
            </div>
          </div>
          
          {/* Lottie Animation on the Right with Overlay */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-10 md:mt-0 relative">
            <Lottie
              animationData={getstarted}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              loop={true}
              autoplay={true}
            />
            {/* Overlay Image */}
            <img
              src={grid}
              alt="Grid Overlay"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-35"
            />
          </div>
        </div>

        {/* Code Coverage Statistics */}
        <div className="mt-16 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white mb-8">Code Coverage Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* First Statistic Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-bold text-blue-500 text-center mb-2">Current via CI/CD Pipeline</h3>
              <p className="text-5xl font-bold text-white text-center mb-2">96.08%</p>
              <p className="text-lg text-white text-center">
                We have thoroughly tested our product to ensure it is reliable and secure for everyone.
              </p>
            </div>
            {/* Second Statistic Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-bold text-blue-500 text-center mb-2">Unit Test Coverage</h3>
              <p className="text-5xl font-bold text-white text-center mb-2">96.08%</p>
              <p className="text-lg text-white text-center">
                Ensuring reliability and security through extensive unit testing.
              </p>
            </div>
          </div>
        </div>

        <div className="h-screen flex items-center justify-between">
          {/* Text Content on the Left */}
          <div className="md:w-1/2 w-full p-10">
            <h1 className="text-5xl text-white mb-6 font-extrabold">Query Your Database with Artificial Intelligence</h1>
            
            {/* First Point with Check Image */}
            <div className="flex items-center mb-4">
              <img src={check} alt="Check Icon" className="w-6 h-6 mr-2" />
              <p className="text-lg text-white">Query your database effortlessly using simple human language, no SQL required.</p>
            </div>
            <div className="w-full border-b border-gray-700 mb-4" />
            
            {/* Second Point with Check Image */}
            <div className="flex items-center mb-4">
              <img src={check} alt="Check Icon" className="w-6 h-6 mr-2" />
              <p className="text-lg text-white">Utilize OpenAI's language models for intelligent, context-aware data retrieval.</p>
            </div>
            <div className="w-full border-b border-gray-700 mb-4" />
            
            {/* Third Point with Check Image */}
            <div className="flex items-center mb-4">
              <img src={check} alt="Check Icon" className="w-6 h-6 mr-2" />
              <p className="text-lg text-white">Get started quickly with detailed setup instructions and examples available in our repository.</p>
            </div>
            <Button className='text-white'>View ServiceQuery.openAI</Button>
          </div>

          {/* Image on the Right with Border */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="border-4 border-purple-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ml-16">
              <img
                src={getstartedai}
                alt="AI Querying"
                className="object-cover max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* New Section for Instructions */}
        <div className="mt-16 p-10 bg-gray-800 rounded-lg">
          <h2 className="text-4xl font-bold text-white mb-6">How to Use</h2>

          <h3 className="text-2xl font-bold text-white mb-4">Installing</h3>
          <p className="text-lg text-white mb-4">
            ServiceQuery is available as a NuGet package. You can install it using the .NET CLI or Visual Studio Package Manager Console.
          </p>
          <code className="block bg-gray-700 text-white p-3 mb-4">Install NuGet Package: ServiceQuery</code>

          <h3 className="text-2xl font-bold text-white mb-4">Simple Database Access</h3>
          <pre className="bg-gray-700 text-white p-3 mb-4">
{`using ServiceQuery;

// Get your Database Table/Collection as an IQueryable object
var queryable = databaseContext.ExampleTable.AsQueryable();

// Build a request using the ServiceQueryRequestBuilder object
var request = new ServiceQueryRequestBuilder().Build();

// Execute the request against the database and get the results
var response = request.Execute(queryable);`}
          </pre>

          <h3 className="text-2xl font-bold text-white mb-4">Use in a REST API</h3>
          <pre className="bg-gray-700 text-white p-3 mb-4">
{`using ServiceQuery;

[HttpPost]
[Route("ExampleQuery")]
public ServiceQueryResponse<ExampleTable> ExampleQuery(ServiceQueryRequest request)
{
  var queryable = databaseContext.ExampleTable.AsQueryable();
  return request.Execute(queryable);
}`}
          </pre>

          <h3 className="text-2xl font-bold text-white mb-4">Use in Javascript/JQuery</h3>
          <pre className="bg-gray-700 text-white p-3 mb-4">
{`<script src="/js/servicequery.js"></script>
<script type="text/javascript">
function GetAllRecords() {
  var request = new ServiceQueryRequestBuilder().Build();
  $.ajax({
    url: '/api/Example/ServiceQuery',
    data: JSON.stringify(request),
    type: "POST",
    dataType: 'json',
    headers: { 'Content-Type': 'application/json' },
    success: function (result) {
      alert(result.list.length + ' records found');
    },
    error: function (err) {
      console.error(err);
    }
  });
}
</script>`}
          </pre>
        </div>

        {/* New Section for How to Build Queries */}
        <div className="mt-16 p-10 bg-gray-800 rounded-lg">
          <h2 className="text-4xl font-bold text-white mb-6">How to Build Queries</h2>
          
          <h3 className="text-2xl font-bold text-white mb-4">Default Properties</h3>
          <p className="text-lg text-white mb-4">
            All queries are paged, with the default settings:
          </p>
          <ul className="text-lg text-white list-disc pl-6">
            <li>pagenumber = 1</li>
            <li>pagesize = 1000 records per page</li>
            <li>does not include a count of records</li>
          </ul>

          <h3 className="text-2xl font-bold text-white mb-4">ServiceQueryRequestBuilder</h3>
          <p className="text-lg text-white mb-4">
            Build complex queries using the <code className="font-mono text-yellow-300">ServiceQueryRequestBuilder</code> object.
          </p>
          <p className="text-lg text-white mb-4">
            Make sure to include the <code className="font-mono text-yellow-300">servicequery.js</code> file in your project if you are using JavaScript. It uses the exact same syntax as the .NET code below.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Example Operations</h3>
          <pre className="bg-gray-700 text-white p-3 mb-4">
{`// Just the defaults
var request = new ServiceQueryRequestBuilder().Build();

// This is the same as just a new object
request = new ServiceQueryRequestBuilder()
  .Paging(1, 1000, false)
  .Build();

// Include the count of records with the response
request = new ServiceQueryRequestBuilder()
  .IsGreaterThan("id", "10")
  .IncludeCount()
  .Build();

// Select only the properties you want
request = new ServiceQueryRequestBuilder()
  .Select("Id", "FirstName", "LastName")
  .Build();

// Build AND expressions
request = new ServiceQueryRequestBuilder()
  .IsEqual("Id", "1")
  .And()
  .StartsWith("FirstName", "John")
  .Build();

// Build OR expressions
request = new ServiceQueryRequestBuilder()
  .Between("Id", "1", "5")
  .Or()
  .Contains("LastName", "Smith")
  .Build();

// Group expressions with BEGIN, END, AND and OR. Nest as deeply as needed.
request = new ServiceQueryRequestBuilder()
  .Begin()
    .IsEqual("Id", "1")
    .And()
    .IsInSet("Status", "Created", "Open", "InProcess")
  .End()
  .Or()
  .Begin()
    .IsLessThanOrEqual("BirthDate", "1/1/2000")
    .And()
    .IsNull("CloseDate")
  .End()
  .Build();

// Sorting
request = new ServiceQueryRequestBuilder()
  .IsEqual("Age", "21")
  .SortAsc("FirstName")
  .Build();

// Aggregate functions
request = new ServiceQueryRequestBuilder()
  .IsLessThan("Id", "200")
  .Sum("Price")
  .Build();`}
          </pre>
        </div>
      </section>
      <Footer/>
    </div>
   
  );
};

export default Getstarted;
