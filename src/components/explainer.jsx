import {Link} from "react-router-dom";

const stats = [
  {label: 'Professional experience', value: `${new Date().getFullYear() - 2016} years`},
  {label: 'Revenue directly from my code', value: '$20M+'},
  {label: 'Successful startup exit', value: '1'},
]
export default function Explainer() {
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">I Like Software</h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              In 2012, I worked as an intern for a small marketing agency. Each week, they had us work on a different
              aspect of marketing. One week they had us make small changes to a Wordpress site.
            </p>
            <p className="leading-8 text-2xl mt-10">I was hooked.</p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                From that day of editing a Wordpress site, I started learning about web development. It took a few years
                to land my first dev job, but it seemed to come a
                bit easier to me than others around me so I took that as a sign to keep at it. I also thought it was
                some of the coolest most rewarding work I&apos;d ever done.
              </p>
              <p className="mt-10">
                I was one of the first devs at Breeze Airways. I founded a company called Electask that managed election
                tasks that was privately acquired in 2021. I founded another software company specializing in
                incorporating AI into useful software. I have built lots and lots of MVPs, and now I help other people
                get started with their first MVP.
              </p>
              <Link to="/cadre" className="text-primary text-xs font-bold underline">Learn to build &rarr;</Link>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>

  )
}