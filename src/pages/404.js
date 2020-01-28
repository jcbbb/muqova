import React from 'react';
import Layout from '../layouts/index';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Не найдено!</h1>
        <p>Спрашиваемая страница не найдена.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
