export default Page

import React from 'react'
import { Counter } from './Counter'

function Page() {
  console.log(new Error().stack)
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
