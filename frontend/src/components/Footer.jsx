import React from 'react'
import './css/footer.css'

export default props =>
    <footer>
        <span>Copyright © Your Website 2019</span>
        <div>
            <ul className="social">
                <li>
                    <a href="#twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#facebook">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#linkedin">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="info">
                <a href="#privacypolicy"><li>Privacy Policy</li></a>
                <a href="#termsofuse"><li>Terms of Use</li></a>
            </ul>
        </div>
    </footer>