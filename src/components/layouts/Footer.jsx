import React from "react";
import { SiMedium } from "react-icons/si";
import {
  FaReddit,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaBook,
  FaInstagram,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa"; 
function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="container pt-5 text-center">
        <div className="row">
          <div className="col-md-12">
            <img src="/assets/footer.svg" alt="" /> <br />
            <a
           rel="noreferrer" href="https://dragonraceio.gitbook.io"
            target='_blank'
            >
            {" "}
            <FaBook className='mx-2' />
          </a>
          {/* <a
            href='#In-progress'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            <SiMedium className='mx-2' />
          </a> */}
          <a
            href='https://twitter.com/DragonRaceio'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            <FaTwitter className='mx-2' />
          </a>
          <a
            href='https://t.me/Dragonraceio'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            <FaTelegram className='mx-2' />
          </a>
          <a
            href='https://www.reddit.com/r/dragonraceio'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            <FaReddit className='mx-2' />
          </a>
          <a
            href='https://github.com/dragonraceio'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            <FaGithub className='mx-2' />
          </a>
          {/* <a
            href='#In-progress'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            <FaInstagram className='mx-2' />
          </a> */}
          <a
            href='https://discord.gg/kKvRYgKeGU'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            <FaDiscord className='mx-2' />
          </a>
            <hr />
            <p>Copyrights @2022 by Dragon Race</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
