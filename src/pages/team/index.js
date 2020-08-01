import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Team = (props) => {
    const teams = props.data.allMarkdownRemark.edges;
    return (
        <Layout bodyClass="page-teams">
            <SEO title="Команда" />
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Наша команда</h1>
                            <p>
                                Наша команда состоит из высококвалифицированных специалистов в области архивного дела.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-6">
                <div className="row">
                    {teams.map((edge) => (
                        <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
                            <div className="team card-two">
                                <div className="card-header">
                                    <div className="card-header-left">
                                        {edge.node.frontmatter.image && (
                                            <div
                                                className="card-image"
                                                style={{ backgroundImage: `url(${edge.node.frontmatter.image})` }}
                                            />
                                        )}
                                    </div>
                                    <div className="card-right">
                                        <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                                        <ul className="card-meta">
                                            <li>
                                                <strong>{edge.node.frontmatter.jobtitle}</strong>
                                            </li>
                                            <li>
                                                <a href={`mailto: ${edge.node.frontmatter.email}`}>
                                                    {edge.node.frontmatter.email}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content" dangerouslySetInnerHTML={{ __html: edge.node.html }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query TeamQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/team/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        path
                        image
                        jobtitle
                        email
                    }
                }
            }
        }
    }
`;

export default Team;
