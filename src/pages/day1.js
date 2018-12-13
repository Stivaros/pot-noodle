import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Day 1" />
    <h1>Ratecard</h1>
    <h2>Day 1 - Beef and Tomato</h2>
    <p>
      The first of the advent Noodles today.<br/>
      Absolute classic blend of beef* and tomato<br/>
      <sub>*does not contain beef</sub>
    </p>
    <h1>Rating: 10/10</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
