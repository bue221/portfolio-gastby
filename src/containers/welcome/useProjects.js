import { useStaticQuery, graphql } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
        projects: allContentfulProjects {
          edges {
            node {
              name
              repositorio
              website
              img {
                file {
                  url
                }
                title
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export default useProjects;
