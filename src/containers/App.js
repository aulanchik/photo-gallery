import React from 'react'
import { Header, Grid, Footer } from '../components'

const App = () => {
  return (
    <div>
      <Header title="Photo Gallery" />
      {/* <Upload/> */}
      <Grid />
      <Footer text="Demo by Artyom Ulanchik"/>
    </div>
  )
}

export default App;