import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout, SEO } from 'components';
import { Welcome } from 'containers';

const IndexPage = () => (
  <Layout>
    <ToastContainer />
    <SEO title='Home' />
    <Welcome />
  </Layout>
);

export default IndexPage;
