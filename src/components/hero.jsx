'use client'

import BreezeImg from '../assets/breeze.png'
import ElectaskImg from '../assets/electask.png'
import {Link} from "react-router-dom";

const tags = [
  'react',
  'react native',
  'anthropic',
  'openai',
  'typescript',
  'nodejs',
  'aws'
]

export default function Hero() {

  return (
    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
        <div className="flex items-center">
          <div className="">
            <h1 className="font-bold tracking-tight text-gray-900">
              <span className="text-4xl sm:text-6xl font-serif">Tom Hall</span>
            </h1>
          </div>
          <div className="ml-4 text-gray-900">
            <span className="text-xl font-thin tracking-widest leading-3 pb-1">software<br/>developer</span>
          </div>
        </div>
        <div className="mt-3 flex">
          {tags.map((t, index) => <span className="font-semibold text-blue-500 mr-1.5 text-xs"
                                        key={t}>{t}{index < tags.length - 1 ?
            <span className="font-thin"> | </span> : ''}</span>)}
        </div>
        <p className="mt-6 font-serif leading-8 text-gray-900 sm:max-w-md lg:max-w-none">
          I&apos;ve built a lot of software products. It is a difficult thing to go from nothing to an idea to
          a prototype to an MVP to version 1.0. Have a look around at some of the products I have built and
          helped
          build. I also help people wanting to build something of their own get started and make progress.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Work
          </Link>
          <Link to="/cadre" className="text-sm font-semibold leading-6 text-gray-900">
            Learn how to build <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
        <div
          className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
          <div className="relative">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
          </div>
        </div>
        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
          <div className="relative">
            <img
              alt="Tom Hall"
              src="https://avatars.githubusercontent.com/u/6845285?v=4"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
          </div>
          <div className="relative">
            <img
              alt=""
              src={BreezeImg}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
          </div>
        </div>
        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
          <div className="relative">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
          </div>
          <div className="relative">
            <img
              alt=""
              src={ElectaskImg}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
          </div>
        </div>
      </div>
    </div>
  )
}
