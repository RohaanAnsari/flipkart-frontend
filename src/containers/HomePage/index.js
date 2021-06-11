import React from 'react';
import Layout from '../../components/Layout';

const HomePage = () => {
  return (
    <div>
      <Layout>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '50px auto',
          flexDirection: 'column'
        }}>
          <h4>
            This is a full workin flipkart clone
          </h4>
          <h4>
            you can go to the categories and order smthng
          </h4>
          <br />
          <strong>Note:</strong>
          <span>GO n Check Samsung and Apple</span>
        </div>
      </Layout>
    </div>
  )
}

export default HomePage
