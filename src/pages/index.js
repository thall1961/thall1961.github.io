import "@fontsource/roboto"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Block from "../components/block"
import Seo from "../components/seo"

const blocks = [
  {
    title: "Breeze Airways",
    body: "As an original, core developer, I helped build the booking web and mobile apps used by millions of people.",
    links: [{ title: "Breeze's Website", link: "https://www.flybreeze.com" }],
  },
  {
    title: "Electask, LLC",
    body: "As the founder and developer, I wore many hats to help Electask get into and be used by three counties in California to help manage their elections.",
    links: [{ title: "Electask's Website", link: "https://electask.com" }],
  },
  {
    title: "DHI Computing Service",
    body: "As the web developer on the marketing team, I built marketing websites and then helped integrate HubSpot into our marketing efforts.",
    links: [
      { title: "DHI Corp Site", link: "https://www.dhicorp.com/" },
      { title: "Amelicor", link: "https://www.amelicor.com/" },
      { title: "FPSGold", link: "https://www.fpsgold.com/" },
      { title: "GOLDPoint", link: "https://www.goldpointsystems.com/" },
      { title: "PCISGold", link: "https://www.pcisgold.com/" },
    ],
  },
  {
    title: "Kaiser Permanente",
    body: "As a Sr. Analyst, I looked at a lot of data and boiled it down into reports for senior management using Alteryx and Tableau.",
    links: [],
  },
]

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "10px" }}>Hi, I'm Tom</h1>
          <p
            style={{
              marginBottom: 0,
              fontSize: "0.9rem",
              textTransform: "uppercase",
            }}
          >
            I like to build things{" "}
            <a href="https://www.youtube.com/watch?v=CewJ-ihIqaM">
              on the line.
            </a>
          </p>
        </div>
        <StaticImage
          src="../images/tom-round.png"
          width={400}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Tom Hall"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </Layout>
    <div
      style={{
        padding: `1.5rem 1.0875rem`,
        background: "#232323",
        marginTop: "30px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {blocks.map((block, index) => (
          <Block key={index} {...block}></Block>
        ))}
      </div>
    </div>
  </>
)

export default IndexPage
