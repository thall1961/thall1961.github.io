import Form from "../components/form";
import Layout from "../components/layout.jsx";

export default function Cadre() {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <h1 className="font-bold tracking-tight text-gray-900 text-4xl sm:text-6xl font-serif">Let&apos;s Chat!</h1>
          <p className="mt-6 font-serif leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
            Reach out and let&apos;s chat. I&apos;m always looking for new projects and opportunities to help people
            build software.
          </p>
        </div>
        <div className="max-w-lg">
          <Form />
        </div>
      </div>
    </Layout>
  )
}