import React, { Component } from 'react';

import Layout from 'components/pages/Layout';
import Prices from 'components/pages/Prices';

class App extends Component {
  render() {
    return (
      <Layout>
        <Prices />
      </Layout>
    );
  }
}

export default App;
