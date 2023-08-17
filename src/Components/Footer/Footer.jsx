    import React from "react";

    export default function Footer() {
    return (
        <div>
        <footer>
            <div className="container">
            <ul className="Shop">
                <div className="title">
                <h4>Shop</h4>
                </div>
                <li>Hot deals</li>
                <li>Categories</li>
                <li>Brands</li>
                <li>Rebates</li>
                <li>Weekly deals</li>
            </ul>
            <ul className="help">
                <div className="title">
                <h4>Need help?</h4>
                </div>
                <li>Contact</li>
                <li>Order tracking</li>
                <li>FAQs</li>
                <li>Return policy</li>
                <li>Privacy policy</li>
            </ul>
            <ul className="contact">
                <div className="title">
                <h4>Contact</h4>
                </div>
                <li>123 Fifth Avenue, New York, NY 10160</li>
                <li>contact@info.com</li>
                <li>929-242-6868</li>
            </ul>
            </div>
        </footer>
        <div className="under-footer">
            <div className="container">
            <div className="text">
                <h6>© 2023 LC Wakiki. Powered by Hossam Shaaban</h6>
            </div>
            <div className="pic">
                <img
                src="https://websitedemos.net/electronic-store/wp-content/uploads/sites/1055/2022/03/electronic-store-footer-payment-gateway-icon.png"
                alt=""
                />
            </div>
            </div>
        </div>
        </div>
    );
    }
