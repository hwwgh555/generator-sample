import React from 'react'
import { columns } from 'constants'
import './index.less'

export default Index = () => {
  return <>
    <h1 className='header'><%= title %></h1>
    <h2 className='header'>Created From<%= name %></h1>
  </>
}