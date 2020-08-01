import React from 'react';
import Layout from '../layouts/index';
import { Link } from 'gatsby';

class NotFoundPage extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Не найдено!</h1>
                <p>Спрашиваемая страница не найдена.</p>
                <Link className="button" to="/">
                    Вернуться на главную страницу
                </Link>
            </Layout>
        );
    }
}

export default NotFoundPage;
