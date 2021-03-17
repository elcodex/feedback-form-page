import "./css/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            
            <div className="footer__info">
                <div className="info__links">
                    <div className="links__logo">
                        <a href=".">
                            <img className="links__img" src={`${process.env.PUBLIC_URL}/static/media/footer-logo.png`} alt="TEST TASK Logo" />
                        </a>
                    </div>

                    <div className="links__title">
                        <span className="title__text">Quick Links</span>
                    </div>
                    <ul className="links__list list_style_none">
                        <li className="links__item"><a className="links__link" href=".">Sign Up</a></li>
                        <li className="links__item"><a className="links__link" href=".">About Us</a></li>
                    </ul>
                </div>

                <div className="info__links">
                    <div className="links__title">
                        <span className="title__text">Others</span>
                    </div>
                    <ul className="links_list list_style_none">
                        <li className="links__item"><a className="links__link" href=".">User FAQs</a></li>
                        <li className="links__item"><a className="links__link" href=".">Contact Us</a></li>
                        <li className="links__item"><a className="links__link" href=".">Legal</a></li>
                        <li className="links__item"><a className="links__link" href=".">Privacy Policy</a></li>
                        <li className="links__item"><a className="links__link" href=".">Terms and Conditions</a></li>
                    </ul>
                </div>

                <div className="info__contacts">
                    <div className="contacts__text">
                        <ul className="contacts__list list_style_none">
                            <li className="contacts__item">
                                <div className="contacts__icon">
                                    <img className="contacts__img" src={`${process.env.PUBLIC_URL}/static/media/map-marker.svg`} alt="" />
                                </div>
                                <div>
                                    Information technologies building,
                                    <br />
                                    Victoria Island, Lagos, Nigeria.
                                </div>
                            </li>

                            <li className="contacts__item">
                                <div className="contacts__icon">
                                    <img className="contacts__img" src={`${process.env.PUBLIC_URL}/static/media/phone.svg`} alt="" />
                                </div>
                                <div>
                                    <a className="contacts__link" href="tel:+23408112364568" target="_blank" rel="noreferrer">
                                        +234&nbsp;081-1236-4568
                                    </a>
                                </div>
                            </li>
                            <li className="contacts__item item_font_roboto">
                                <div className="contacts__icon">
                                    <img className="contacts__img" src={`${process.env.PUBLIC_URL}/static/media/mail.svg`} alt="" />
                                </div>
                                <div>
                                    <a className="contacts__link" href="mailto:hello@example.com" target="_blank" rel="noreferrer">
                                        hello@example.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <ul className="contacts__social list_style_none">
                            <li className="social__li">
                                <a href="https://youtube.com" target="_blank" rel="noreferrer" title="youtube">
                                    <div className="social__li__container">
                                        <img src={`${process.env.PUBLIC_URL}/static/media/youtube.svg`} alt="" />
                                    </div>
                                </a>
                            </li>
                            <li className="social__li">
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" title="instagram">
                                    <div className="social__li__container">
                                        <img src={`${process.env.PUBLIC_URL}/static/media/instagram.svg`} alt="" />
                                    </div>
                                </a>
                            </li>
                            <li className="social__li">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" title="facebook">
                                    <div className="social__li__container">
                                        <img src={`${process.env.PUBLIC_URL}/static/media/facebook.svg`} alt="" />
                                    </div>
                                </a>
                            </li>
                            <li className="social__li">
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" title="twitter">
                                    <div className="social__li__container">
                                        <img src={`${process.env.PUBLIC_URL}/static/media/twitter.svg`} alt=""/>
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="contacts__map">
                        <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7929.440488692208!2d3.425263!3d6.4299739!3m2!1i1024!2i768!4f13.1!2m1!1z0J7RgdGC0YDQvtCyINCS0LjQutGC0L7RgNC40Y8!5e0!3m2!1sen!2sus!4v1615753827155!5m2!1sen!2sus" width="280" height="143" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    </div>

                </div>
            </div>

            <div className="footer__copyright">Copyright © 2020. All rights reserved.</div>
        </footer>
    )
}