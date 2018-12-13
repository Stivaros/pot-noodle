import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi radiant people</h1>
    <p>Welcome to Robs website for top pot noodle reviews</p>
    <p>See links below for each day</p>
    <Link to="/day1/">Day 1 - Beef* and Tomato</Link>
  </Layout>
)

export default IndexPage
