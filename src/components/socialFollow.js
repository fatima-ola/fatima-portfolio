import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter, faInstagram, faMedium, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div>
            <div class="social-container" style={{ marginTop: "150px" }}>
                <p>Connect with me on social media</p>
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.facebook.com/learnbuildteach/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                    className="medium social">
                    <FontAwesomeIcon icon={faMedium} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
            </div>
        </div>
    )
}
