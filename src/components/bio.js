/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="bio">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        className="bio__image"
      />
      <p>
        A blog written by {author}, who works on{` `}
        <a href="https://flipgrid.com/" title="Flipgrid">
          Flipgrid
        </a>{" "}
        @ Microsoft.
        <br />
        <a href={`https://twitter.com/${social.twitter}`} title="Twitter">
          Twitter
        </a>
        {` `}|{` `}
        <a href={`https://instagram.com/${social.instagram}`} title="Instagram">
          Instagram
        </a>
      </p>
    </div>
  )
}

export default Bio
