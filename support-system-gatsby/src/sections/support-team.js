/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';

export default function Support() {
  const data = useStaticQuery(graphql`
    query {
      supportTeam: file(relativePath: { eq: "support-team.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section id="support" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Meet our amazing super heroes who always work hardly behind the scenes"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
        />

        <Box as="figure" sx={styles.thumbWrapper}>
          <Image
            src={data.supportTeam.childImageSharp.fluid}
            loading="lazy"
            alt="Support Team"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [0],
  },
  heading: {
    mb: [8, null, null, 10, null, 15],
    maxWidth: [null, null, null, 500, 600, null],
    h3: {
      fontWeight: 500,
      fontSize: [3, null, null, 8, 10, 11],
      lineHeight: 1.4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    p: {
      mt: [3],
      maxWidth: [500],
    },
  },
  thumbWrapper: {
    maxWidth: [null, null, null, '76%'],
    margin: [null, null, null, '0 auto -1px'],
    img: {
      height: [180, 'auto'],
    },
  },
};
