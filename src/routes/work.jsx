import Coach from '../assets/coach.png';
import HotHandLogo from '../assets/hothand.png';
import Layout from "../components/layout.jsx";
import { WorkItem } from "../components/workItem.jsx";

const workItems = [
  {
    id: '8dfndufd8',
    lifeSpan: '2017-2017',
    logo: '',
    title: 'FormShark',
    description: 'Widget site owners could put on their website to capture form inputs when the user\'s focus was lost (e.g. moved mouse out of browser)',
    currentState: 'Shut Down',
    yearFounded: 2017
  },
  {
    id: 'is8d8fnduf',
    lifeSpan: '2018-2018',
    logo: HotHandLogo,
    title: 'HotHand',
    description: 'Widget event owners could put on their website to collect immediate payment for tickets through stripe.',
    currentState: 'Shut Down',
    yearFounded: 2018
  },
  {
    id: 'u8d8fnduf',
    lifeSpan: '2018-2021',
    logo: 'https://cdn.prod.website-files.com/616dba56c6330b338c0f842d/616dc3458f0f3d22c57af713_Electask%20NEW-p-500.png',
    title: 'Electask',
    description: 'FormCollector helps collect form data and store it securely',
    currentState: 'Acquired',
    yearFounded: 2018
  },
  {
    id: 'nsbsudf8',
    lifeSpan: '2019-2019',
    logo: '',
    title: 'Ninepin',
    description: 'Cloud-based alerting system for nurses at skilled nursing facilities',
    currentState: 'Shut Down',
    yearFounded: 2019
  },
  {
    id: 'oeooe99e',
    lifeSpan: '2022-2023',
    logo: '',
    title: 'SmartBooker',
    description: 'AI chat to help book a flight.',
    currentState: 'Shut Down',
    yearFounded: 2022
  },
  {
    id: 'dufne8fjs',
    lifeSpan: '2023-present',
    logo: Coach,
    title: 'CoachAI',
    description: 'Coaching app that uses AI to help managers be the best they can be.',
    currentState: 'Active',
    yearFounded: 2024
  }
];

const companies = [
  {
    id: 'isuf8ehsnujfe',
    name: 'Breeze Airways',
    logo: 'https://www.flybreeze.com/assets/images/Logo.svg',
    url: 'https://www.flybreeze.com/',
    currentState: 'Active',
    yearFounded: 2020,
    lifeSpan: '2020-present',
    highlights: [
      '- Lead a team with a size ranging from 5-11 developers, 2 QA developers, 2 designers and worked closely with a product manager to deliver quality, high-revenue features.',
      '- Delivered features that generated $10M+ in additional revenue',
      '- Manage a fully-remote team while building culture and improving the development process',
      '- Work to be more agile and have more effective scrum ceremonies',
      '- Work to keep communication between team members and management',
      '- Work with Sr Management to deliver the features they thought would best help Breeze',
    ]
  }
];

export default function Work() {
  const sortedWorkItems = workItems.sort((a, b) => b.yearFounded - a.yearFounded);
  return (
    <Layout>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="lg:flex relative w-full lg:shrink-0">
          <div className="lg:w-1/2">
          <h2 className="text-xl font-bold">Projects</h2>
          {sortedWorkItems.map(workItem => (
            <div key={workItem.id} className="max-w-md my-12 p-6 bg-white rounded shadow hover:shadow-xl transition-all border-b border-gray-200">
              <WorkItem {...workItem} />
            </div>
            ))}
            </div>
            <div className="lg:w-1/2">
          <h2 className="text-xl font-bold">Companies</h2>
          {companies.map(company => (
            <div key={company.id} className="max-w-md my-12 p-6 bg-white rounded shadow hover:shadow-xl transition-all border-b border-gray-200">
              <WorkItem {...company} />
            </div>
            ))}
            </div>
        </div>
      </div>
    </Layout>
  );
}
