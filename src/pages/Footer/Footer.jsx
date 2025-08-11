/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import FooterNavItem from "../../components/FooterNavItem/FooterNavItem";

function Footer() {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of service",
    "Privacy Policy",
  ];

  const locations = ["Yaounde", "Douala", "Buea", "Edea", "Limbe"];

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>Cinema</span>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque itaque consequuntur ducimus, optio est odit quos ea,
                et dolore temporibus deleniti nostrum adipisci ex voluptates.
              </p>
              <div className="social-links mt-3">
                <a href="" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>

                <a href="" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="" className="youtube">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Cinemas</h4>
              <ul>
                {locations.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-links footer-contact text-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Street Name <br />
                City Name. Region
                <br />
                Cameroon <br />
                <br />
                <stong>Phone:</stong> +237 655372422
                <br />
                <strong>Email</strong> rikamyvanol@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          copyright{" "}
          <strong>
            <span>RYG Technology</span>
          </strong>
          .All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">RYG Technology</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
