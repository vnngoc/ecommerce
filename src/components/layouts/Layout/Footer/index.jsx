import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

import Newsletter from './Newsletter';

import styles from './index.module.scss';

const Footer = () => {
  const location = useLocation();

  const isBigScreen = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const isCollectionPage = location.pathname.includes('collections');

  return (
    <footer
      className={`${styles.footer} ${isCollectionPage && isBigScreen
        ? styles.is_collection_page_b
        : styles.is_collection_page_s
        }`}
    >
      {!isBigScreen && <Newsletter />}
      <div className={styles.container}>
        <div className={styles.sitemap}>
          <div className={styles.nav_wrapper}>
            <h4 className={styles.nav_title}>Help</h4>
            <ul className={styles.nav}>
              <li>
                <a href="https://www.facebook.com/ngoc.vuong0126" className={styles.link} target="_blank" rel="noreferrer">

                  Help Center
                </a>
              </li>
              <li>
                <a href="https://sites.google.com/view/contact-skrt" className={styles.link} target="_blank" rel="noreferrer">

                  Contact Us
                </a>

              </li>
              <li>
                <a href="https://ghn.vn/" className={styles.link} target="_blank" rel="noreferrer">

                  Shipping Info
                </a>
              </li>
              <li>
                <Link to="/account">Track My Order</Link>
              </li>
              <li>
                <a href="mailto: ngocvuong443@gmail.com" className={styles.link} target="_blank" rel="noreferrer">

                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.nav_wrapper}>
            <h4 className={styles.nav_title}>More</h4>
            <ul className={styles.nav}>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Carreers</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.socials_wrapper}>
          {isBigScreen && <Newsletter />}
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/mih_ngocc/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitterSquare />
            </a>
            <a href="https://www.facebook.com/ngoc.vuong0126" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;