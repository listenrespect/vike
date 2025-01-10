export { Banner }

import React from 'react'
import { heroBgColor, HeroTagline } from '../index/sections/hero/Hero'
import vikeLogo from '../../assets/logo/vike.svg'
import './Banner.css'

function Banner({ showLogo }: { showLogo: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: heroBgColor
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // Needs to have the right size upon 600x315 (that's the viewport we use to generate banner.png as explained in the HOW-TO above)
          scale: '1.3'
        }}
      >
        {showLogo && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: -4,
              marginLeft: -21
            }}
          >
            <img
              src={vikeLogo}
              style={{
                height: 64,
                objectFit: 'contain',
                marginRight: 14,
                position: 'relative',
                top: -4
              }}
            />
            <span
              className="logo-font"
              style={{
                fontSize: '2.7em',
                letterSpacing: 2,
                color: '#707070',
                lineHeight: '1em',
                //*
                fontWeight: 410
                /*/
                fontWeight: 510,
                background: '-webkit-linear-gradient(300deg, hsl(50.37deg 100% 37.8%) 30%, hsl(347deg 100% 27.56%))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
                //*/
              }}
            >
              Vike
            </span>
          </div>
        )}
        <HeroTagline />
      </div>
    </div>
  )
}
