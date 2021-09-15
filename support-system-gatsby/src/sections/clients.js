/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';

const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      clients: file(relativePath: { eq: "clients.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section id="our-clients" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Agencies who also worked us"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
          learnMore="Explore Details"
        />
        <Box as="figure" sx={{ mt: [3, null, null, 0] }}>
          <Image src={data.clients.childImageSharp.fluid} alt="clients" />
        </Box>
      </Container>
    </section>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    h3: {
      fontSize: [4, null, null, 6, 9],
      lineHeight: 1.5,
      mb: 3,
    },
  },
};
