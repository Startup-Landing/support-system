/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';

const VideoCalling = () => {
  const data = useStaticQuery(graphql`
    query {
      videoCalling: file(relativePath: { eq: "video-calling.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section sx={styles.section} id="features">
      <Container>
        <SectionHeading
          title="Introducing video calling support"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
          learnMore="Explore Details"
          sx={{ mb: [6] }}
        />
        <Box as="figure">
          <Image
            src={data.videoCalling.childImageSharp.fluid}
            alt="Video Calling"
          />
        </Box>
      </Container>
    </section>
  );
};

export default VideoCalling;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 15],
    pb: [6, null, null, null, 10, 12],
  },
};
