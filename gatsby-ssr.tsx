// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import './src/styles/global.css'
import Layout from './src/components/Layout'

export const wrapRootElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
