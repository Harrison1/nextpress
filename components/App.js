import React from 'react'
import Layout from './Layout'
import Blogroll from './Blogroll'
import Drawer from './80sBaby/Drawer'
import FeaturedImage from './80sBaby/FeatureImage'
import FeatureRow from './80sBaby/FeatureRow'
import ToggleDrawer from './ToggleDrawer'

const App = props =>
  <Layout>
    {/* <FeaturedImage src={'https://images4.alphacoders.com/946/94606.jpg'} alt="Metroid" /> */}
    <FeatureRow />
    <Blogroll posts={ props.data } />
    <Drawer />
    <ToggleDrawer />
  </Layout>

export default App
