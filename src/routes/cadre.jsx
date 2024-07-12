import Layout from "../components/layout.jsx";
import Form from "../components/form";

export default function Cadre() {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <h1 className="font-bold tracking-tight text-gray-900 text-4xl sm:text-6xl font-serif">Build software
            quickly</h1>
          <p className="mt-6 font-serif leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
            Developing a minimum viable product (MVP) is crucial for validating your software idea rapidly and
            cost-effectively. By focusing on core features and gathering early user feedback, you can iterate quickly
            and
            avoid wasting resources on unnecessary elements. This lean approach allows you to test market demand, refine
            your concept, and lay a solid foundation for future development—all while minimizing time and financial
            investment.
          </p>
        </div>
        <h2 className="my-12 font-bold text-gray-900 text-xl font-serif">&darr; Send your information to join the next cadre &darr;</h2>
        <div className="max-w-lg">
          <Form />
        </div>
      </div>
    </Layout>
  )
}