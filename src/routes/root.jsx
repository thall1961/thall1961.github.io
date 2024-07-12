import Hero from '../components/hero'
import Explainer from '../components/explainer'
import Logos from '../components/logos'
import '../App.css'
import Layout from "../components/layout.jsx";

function Root() {
  return (
    <Layout>
      <>
        <Hero/>
        <div className="mb-48 lg:mb-72 xl:mb-80">
          <Logos/>
        </div>
        <div className="mt-48 lg:mt-72 xl:mt-80">
          <Explainer/>
        </div>
      </>
    </Layout>
  )
}

export default Root
