export default function Logos() {
  return (
    <div className="relative isolate -z-10 mt-32 sm:mt-48">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
        <svg aria-hidden="true" className="h-[40rem] w-[80rem] flex-none stroke-gray-200">
          <defs>
            <pattern
              x="50%"
              y="50%"
              id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
              patternTransform="translate(-100 0)"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
            <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 font-serif">
          Using the best of the best
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {[
            {
              src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
              alt: "Fly.io",
              href: "https://fly.io",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/158238105-e7279a0c-1640-40db-86b0-3d3a10aab824.svg",
              alt: "PostgreSQL",
              href: "https://www.postgresql.org/",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
              alt: "Prisma",
              href: "https://prisma.io",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
              alt: "Tailwind",
              href: "https://tailwindcss.com",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
              alt: "Cypress",
              href: "https://www.cypress.io",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
              alt: "MSW",
              href: "https://mswjs.io",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
              alt: "Vitest",
              href: "https://vitest.dev",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
              alt: "Testing Library",
              href: "https://testing-library.com",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
              alt: "Prettier",
              href: "https://prettier.io",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
              alt: "ESLint",
              href: "https://eslint.org",
            },
            {
              src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
              alt: "TypeScript",
              href: "https://typescriptlang.org",
            },
          ].map((img) => (
            <a
              key={img.href}
              href={img.href}
              className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
            >
              <img alt={img.alt} src={img.src} className="object-contain" />
            </a>
          ))}
        </div>
        {/*<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">*/}
        {/*  <img*/}
        {/*    alt="Transistor"*/}
        {/*    src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"*/}
        {/*    width={158}*/}
        {/*    height={48}*/}
        {/*    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
        {/*  />*/}
        {/*  <img*/}
        {/*    alt="Reform"*/}
        {/*    src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"*/}
        {/*    width={158}*/}
        {/*    height={48}*/}
        {/*    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
        {/*  />*/}
        {/*  <img*/}
        {/*    alt="Tuple"*/}
        {/*    src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"*/}
        {/*    width={158}*/}
        {/*    height={48}*/}
        {/*    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
        {/*  />*/}
        {/*  <img*/}
        {/*    alt="SavvyCal"*/}
        {/*    src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"*/}
        {/*    width={158}*/}
        {/*    height={48}*/}
        {/*    className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"*/}
        {/*  />*/}
        {/*  <img*/}
        {/*    alt="Statamic"*/}
        {/*    src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"*/}
        {/*    width={158}*/}
        {/*    height={48}*/}
        {/*    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </div>
  )
}