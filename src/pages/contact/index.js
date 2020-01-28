import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Контакты" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Контакты</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        <div className="col-8">
          <h4 className="mt-4">Рабочее время</h4>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Понедельник</td>
                <td className="opens">8:30</td>
                <td>-</td>
                <td className="closes">17:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Вторник</td>
                <td className="opens">8:30</td>
                <td>-</td>
                <td className="closes">17:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Среда</td>
                <td className="opens">8:30</td>
                <td>-</td>
                <td className="closes">17:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Четверг</td>
                <td className="opens">8:30</td>
                <td>-</td>
                <td className="closes">17:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Пятница</td>
                <td className="opens">8:30</td>
                <td>-</td>
                <td className="closes">17:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Суббота</td>
                <td className="opens">Закрыто</td>
                <td />
                <td className="closes" />
              </tr>
              <tr>
                <td className="day font-weight-bold">Воскресенье</td>
                <td className="opens">Закрыто</td>
                <td />
                <td className="closes" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
