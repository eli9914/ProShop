import React from 'react'
import { Helmet } from 'react-helmet'
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords}></meta>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to Proshop',
  description: 'we sell the best products',
  keywords: 'buy cheap electronics',
}

export default Meta
