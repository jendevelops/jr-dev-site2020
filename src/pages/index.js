import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ExampleComponent from '../components/example/Example'
import { Events } from "../components/Events"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <ExampleComponent componentTitle="Zombie Apocalypse" />
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  <Events />
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
)

export default IndexPage
