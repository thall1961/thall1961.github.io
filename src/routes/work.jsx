import HotHandLogo from '../assets/hothand.png';
import MoLogo from '../assets/moLogo.png';
import Layout from "../components/layout.jsx";
import { WorkItem } from "../components/workItem.jsx";

const workItems = [
  {
    id: '8dfndufd8',
    lifeSpan: '2017-2017',
    logo: '',
    title: 'FormShark',
    description: 'Widget site owners could put on their website to capture form inputs when the user\'s focus was lost (e.g. moved mouse out of browser)',
    stats: [
      {label: 'Customers', value: 1},
      {label: 'Total Revenue', value: '$5'},
    ],
    currentState: 'Shut Down',
    yearFounded: 2017
  },
  {
    id: 'is8d8fnduf',
    lifeSpan: '2018-2018',
    logo: HotHandLogo,
    title: 'HotHand',
    description: 'Widget event owners could put on their website to collect immediate payment for tickets through stripe.',
    stats: [
      {label: 'Customers', value: 3},
      {label: 'Total Revenue', value: '$349'},
    ],
    currentState: 'Shut Down',
    yearFounded: 2018
  },
  {
    id: 'u8d8fnduf',
    lifeSpan: '2018-2021',
    logo: 'https://cdn.prod.website-files.com/616dba56c6330b338c0f842d/616dc3458f0f3d22c57af713_Electask%20NEW-p-500.png',
    title: 'Electask',
    description: 'FormCollector helps collect form data and store it securely',
    stats: [
      {label: 'Customers', value: 4},
      {label: 'Total Revenue', value: '$96,000'},
    ],
    currentState: 'Acquired',
    yearFounded: 2018
  },
  {
    id: 'nsbsudf8',
    lifeSpan: '2019-2019',
    logo: '',
    title: 'Ninepin',
    description: 'Cloud-based alerting system for nurses at skilled nursing facilities',
    stats: [
      {label: 'Customers', value: 1},
      {label: 'Total Revenue', value: '-$250'}
    ],
    currentState: 'Shut Down',
    yearFounded: 2019
  },
  {
    id: 'oeooe99e',
    lifeSpan: '2022-2023',
    logo: '',
    title: 'SmartBooker',
    description: 'AI chat to help book a flight.',
    stats: [
      {label: 'Customers', value: 1},
      {label: 'Total Revenue', value: '$0'}
    ],
    currentState: 'Shut Down',
    yearFounded: 2022
  },
  {
    id: 'dufne8fjs',
    lifeSpan: '2024-present',
    logo: MoLogo,
    title: 'MorningOwl',
    description: 'Finance app that texts you all your account balances daily',
    stats: [
      {label: 'Customers', value: 0},
      {label: 'Total Revenue', value: '$0'}
    ],
    currentState: 'Active',
    yearFounded: 2024
  }
];

export default function Work() {
  const sortedWorkItems = workItems.sort((a, b) => b.yearFounded - a.yearFounded);
  return (
    <Layout>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <h2 className="text-xl font-bold">Projects</h2>
          {sortedWorkItems.map(workItem => (
            <div key={workItem.id} className="my-12 p-6 bg-white rounded shadow hover:shadow-xl transition-all border-b border-gray-200">
              <WorkItem {...workItem} />
            </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
