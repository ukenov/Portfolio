import React from 'react'
import { BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/ukenov" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/asylhanuk/" target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
        </div>
        <div>
            <a href="https://www.facebook.com/asylhan.ukenov.5/" target="_blank" rel="noreferrer">
             <FaFacebookF />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia
