import React, { useEffect } from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaXTwitter  } from 'react-icons/fa6'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { SiTripadvisor } from 'react-icons/si'


const Footer = () => {
  // Lets create a react hook to add a scroll
  //Animation.....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted
          type="video/mp4"></video>
      </div>

      <div className="seeContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <form action="https://formsubmit.co/jockeygastin1998@gmail.com" method="post">
            <div className="inputDiv flex">
              <input data-aos="fade-up" type="text"
                placeholder='Enter Email Address' name='email' />
              <button data-aos="fade-up"
                className='btn flex' type='submit'>
                SEND <FiSend className="icon" />
              </button>
            </div>
          </form>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore
                  className="icon" />  Travel.
              </a>
            </div>

            <div data-aos="fade-up"
              className="footerParagraph">
              Travel  strives to produce consistent
              communication materials (blog posts, images,
              videos, etc ) that customers will find helpful while
              crawling through the web Travel content does not promote
              a brand like traditional advertising.
            </div>
            <div data-aos="fade-up"
              className="footerSocials flex">
              <a href="https://x.com/" target='_blank'>
                <FaXTwitter className="icon" />
              </a>

              <a href="https://www.youtube.com/" target='_blank'>
                <AiFillYoutube className="icon" />
              </a>

              <a href="https://instagram.com" target='_blank'>
                <AiOutlineInstagram className="icon" />
              </a>

              <a href="https://tripadvisor.com" target='_blank'>
                <SiTripadvisor className="icon" />
              </a>

            </div>
          </div>


          <div className="footerLinks grid">

            {/* Group One */}
            <div data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Toursim
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>

            </div>

            {/* Group Two */}
            <div data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>

            </div>

            {/* Group Three */}
            <div data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - EAVETOP SOFTTECH
              2024
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer