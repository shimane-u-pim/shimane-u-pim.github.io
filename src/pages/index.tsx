import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from 'gatsby'
import { Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import "../styles/global.scss"

const main_visual = {
  height: '60vh',
  backgroundImage: 'url(/images/main-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',

  position: 'relative' as 'relative',
};

const main_visual_cover = {
  position: 'absolute' as 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center' as 'center',
  alignItems: 'center' as 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
};

const main_visual_text = {
  textAlign: 'center' as 'center',
  color: 'white',
};

const whileLink = {
  color: 'white',
  textDecoration: 'underline',
};

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const { language, siteUrl } = useI18next();

  return (
    <>
      <div style={main_visual}>
        <div style={main_visual_cover}>
          <div style={main_visual_text}>
            <h1><Trans>pim_name</Trans></h1>
            <p><Trans>home_mainvisual_catch</Trans></p>
            <p>
              <Trans>Hi!</Trans> <code>{language}</code> User.
              <br />
              <a href="javascript:void(0)" style={whileLink} onClick={() => { location.href = `/${language == 'ja' ? 'en' : 'ja'}` }}>
                I'm not {language == 'ja' ? 'Japanese' : 'English'} speaker.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;