import Coach from "../assets/coach.png";
import HotHandLogo from "../assets/hothand.png";
import Layout from "../components/layout.jsx";
import { WorkItem } from "../components/workItem.jsx";

const workItems = [
  {
    id: "8dfndufd8",
    lifeSpan: "2017-2017",
    logo: "",
    title: "FormShark",
    description:
      "Widget site owners could put on their website to capture form inputs when the user's focus was lost (e.g. moved mouse out of browser)",
    currentState: "Shut Down",
    yearFounded: 2017,
  },
  {
    id: "is8d8fnduf",
    lifeSpan: "2018-2018",
    logo: HotHandLogo,
    title: "HotHand",
    description:
      "Widget event owners could put on their website to collect immediate payment for tickets through stripe.",
    currentState: "Shut Down",
    yearFounded: 2018,
  },
  {
    id: "u8d8fnduf",
    lifeSpan: "2018-2021",
    logo: "https://cdn.prod.website-files.com/616dba56c6330b338c0f842d/616dc3458f0f3d22c57af713_Electask%20NEW-p-500.png",
    title: "Electask",
    description: "FormCollector helps collect form data and store it securely",
    currentState: "Acquired",
    yearFounded: 2018,
  },
  {
    id: "nsbsudf8",
    lifeSpan: "2019-2019",
    logo: "",
    title: "Ninepin",
    description:
      "Cloud-based alerting system for nurses at skilled nursing facilities",
    currentState: "Shut Down",
    yearFounded: 2019,
  },
  {
    id: "oeooe99e",
    lifeSpan: "2022-2023",
    logo: "",
    title: "SmartBooker",
    description: "AI chat to help book a flight.",
    currentState: "Shut Down",
    yearFounded: 2022,
  },
  {
    id: "dufne8fjs",
    lifeSpan: "2023-present",
    logo: Coach,
    title: "CoachAI",
    description:
      "Coaching app that uses AI to help managers be the best they can be.",
    currentState: "Active",
    yearFounded: 2024,
  },
];

const companies = [
  {
    id: "isuf8ehsnujfe",
    name: "Breeze Airways",
    logo: "https://www.flybreeze.com/assets/images/Logo.svg",
    url: "https://www.flybreeze.com/",
    title:
      "Software Engineering Manager ˿ Associate Engineering Manager ˿ Software Project Lead ˿ Web Developer",
    currentState: "Active",
    yearFounded: 2020,
    lifeSpan: "2020-present",
    highlights: [
      "- Lead a team with a size ranging from 5-11 developers, 2 QA developers, 2 designers and worked closely with a product manager to deliver quality, high-revenue features.",
      "- Delivered features that generated $10M+ in additional revenue",
      "- Manage a fully-remote team while building culture and improving the development process",
      "- Work to be more agile and have more effective scrum ceremonies",
      "- Work to keep communication between team members and management",
      "- Work with Sr Management to deliver the features they thought would best help Breeze",
    ],
    content: `
    <div class="font-serif text-lg">
      <p style="margin-bottom: 20px">
        I've been at Breeze for a long time.  I've been able to be an early member of the company and have seen and helped it grow into what it is today.
      </p>
      <p style="margin-bottom: 20px">
        Some of the projects I'm most of proud of are:
      </p>
      <ul class="list-disc">
        <li style="margin-bottom: 6px">
          An elegant, simple implementation of the seat map on the seats page
        </li>
        <li style="margin-bottom: 6px">
          Developing, testing, and refining bag tag printers for checking bags at airports
        </li>
        <li style="margin-bottom: 6px">
          My team and I being key contributors to the Breeze Credit Card
        </li>
        <li style="margin-bottom: 6px">
          Implementing rental cars, promo codes, travel insurance, and now working on adding hotels
        </li>
      </ul>
      <p style="margin: 20px 0">
        I've really enjoyed working at Breeze and I'm proud of what we've been able to accomplish.
      </p>
      <p style="margin-bottom: 20px">
        I'm also proud of the progress I've made in managing a team, many multi-million dollar projects, and developing the members on my team.
      </p>
    </div>
    `,
  },
  {
    id: "elecaskjcdkjcd89",
    name: "Electask",
    logo: "https://cdn.prod.website-files.com/616dba56c6330b338c0f842d/616dc3458f0f3d22c57af713_Electask%20NEW-p-500.png",
    url: "https://www.electask.com/",
    title: "Founder/Web Developer",
    currentState: "Acquired",
    yearFounded: 2018,
    lifeSpan: "Oct 2017 - Aug 2021",
    highlights: [
      "- React front end with Ruby on Rails backend web app (70% React and (30% Rails) that helps counties manage election tasks",
      "- Brought on 3 counties in CA each with renewing 2 year contracts",
      "-Acquired by a private investor in August 2021",
    ],
    content: `
    <div class="font-serif text-lg">
      <p style="margin-bottom: 20px">
        I started Electask in 2017 by myself.  I had learned enough about web development to build a simple Ruby on Rails app that suited the needs of Sacramento County, my first customer.
      </p>
      <p style="margin-bottom: 20px">
        Since I was the developer, account manager, salesman, and everything else, the pitch meeting to Sacramento was a bit different.
      </p>
      <p style="margin-bottom: 20px">
        I stayed up all night before the meeting to finish the MVP of the app.  When the registrar, assistant registrar and I were in the meeting, there was a critical piece of the app that didn't work.
      </p>
      <p style="margin-bottom: 20px">
        When I was demoing it, I could instantly see what the problem was.  I quickly coded the fix, pushed, and redeployed the app.  The registrar was sharing her screen.  I asked her to refresh and everything worked as expected.
      </p>
      <p style="margin-bottom: 20px">
        Electask was a great experience.  Lots of effort, frustration, pain, success, and learning through the years.
      </p>
      <p style="margin-bottom: 20px">
        I listed the company for sale and at the end of August 2021, closed the deal with the private party that acquired it.
      </p>
    </div>
    `
  },
  {
    id: "ishfid9fdh",
    name: "DHI Computing Service",
    title: "Full Stack Web Developer",
    logo: "https://www.dhicorp.org/hubfs/images/logos/logo-dhicorp-250.svg",
    url: "https://www.dhicorp.com/",
    currentState: "Ended",
    yearFounded: 2016,
    lifeSpan: "Nov 2016 - Feb 2020",
    highlights: [
      "- Managed the websites and web content for DHI Computing Service and it's 4 divisions. Working with HubSpot, HTML, CSS, and JavaScript (React, GatsbyJS, SanityCMS)",
    ],
    content: `
    <div class="font-serif text-lg">
      <p style="margin-bottom: 20px">
        I started DHI Computing Service in 2016.  I started as the only developer on the corporate marketing team.
      </p>
      <p style="margin-bottom: 20px">
        I was able to learn a lot of things and was able to build a lot of things.
      </p>
      <p style="margin-bottom: 20px">
        There are four divisions at DHI and it was really interesting working with each division to build out their websites and apps they could use to market their products.
      </p>
      <p style="margin-bottom: 20px">
        Then, working on the main product team for the lending software, I was able to get a firsthand glimpse at software development on a team and on a core, critical, widely-used product.
      </p>
      <p style="margin-bottom: 20px">
        DHI was a great start to what has been a great career.
      </p>
    </div>
    `
  },
];

export default function Work() {
  const sortedWorkItems = workItems.sort(
    (a, b) => b.yearFounded - a.yearFounded
  );
  return (
    <Layout>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="lg:flex relative w-full lg:shrink-0">
          <div className="lg:w-1/2">
            <h2 className="text-xl font-bold">Projects</h2>
            {sortedWorkItems.map((workItem, index) => (
              <div
                key={workItem.id}
                className="max-w-md my-12 p-6 bg-white rounded shadow hover:shadow-xl transition-all border-b border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <WorkItem {...workItem} />
              </div>
            ))}
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-xl font-bold">Companies</h2>
            {companies.map((company, index) => (
              <div
                key={company.id}
                className="max-w-md my-12 p-6 bg-white rounded shadow hover:shadow-xl transition-all border-b border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <WorkItem {...company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
