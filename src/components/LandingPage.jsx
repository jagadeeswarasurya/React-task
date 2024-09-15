import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import robot from "../assets/robot.svg";
import vector from "../assets/vector.svg";
import discount from "../assets/discount.png";
import arrow from "../assets/arrow.svg";
import star from "../assets/star.svg";
import bold from "../assets/bold.svg";
import send from "../assets/send.svg";
import dribbble from "../assets/dribbble.svg";
import netflix from "../assets/netflix.svg";
import netflixlogo from "../assets/netflixlogo.svg";
import cash from "../assets/cash.svg";
import cashlogo from "../assets/cashlogo.svg";
import polygon1 from "../assets/polygon1.svg";
import polygon2 from "../assets/polygon2.svg";
import polygonup from "../assets/polygonup.svg";
import pay from "../assets/pay.svg";
import paypal from "../assets/paypal.svg";
import tick from "../assets/tick.svg";
import applelogo from "../assets/applelogo.svg";
import playlogo from "../assets/playlogo.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import dot from "../assets/dot.svg";
import dot1 from "../assets/dot1.svg";
import dot2 from "../assets/dot2.svg";
import air from "../assets/air.svg";
import binance from "../assets/binance.svg";
import coin from "../assets/coin.svg";
import drop from "../assets/drop.svg";
import generate from "../assets/generate.svg";
import rect from "../assets/rect.svg";
import side from "../assets/side.svg";
import semi from "../assets/semi.svg";
import right from "../assets/right.svg";
import ball3 from "../assets/ball3.svg";
import layer from "../assets/layer.svg";
import layout from "../assets/layout.svg";
import top from "../assets/top.svg";
import small from "../assets/small.svg";
import medium from "../assets/medium.svg";
import large from "../assets/large.svg";
import analysis from "../assets/analysis.svg";
import scan from "../assets/scan.svg";
import payment from "../assets/payment.svg";
import pal from "../assets/pal.svg";
import applenew from "../assets/applenew.svg";
import visalogo from "../assets/visalogo.svg";
import shoplogo from "../assets/shoplogo.svg";

import "../App.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <img src={robot} alt="Robot" className="robot" />
      <div className="group">
        <img src={discount} alt="Discount" className="discount" />
        <div className="discount-content">
          <span className="discount-text">
            <span className="highlighted">20%</span> DISCOUNT FOR{" "}
            <span className="highlighted">1 MONTH</span> ACCOUNT
          </span>
        </div>
      </div>
      <img src={generate} alt="Generate" className="generate" />
      <div className="payment-method">
        <div className="next">The Next</div>
        <div className="generation">Generation</div>
        <div className="payment"> Payment Method.</div>
        <div className="ellipse">
          <div className="get-started">
            <span className="get-started-text">
              Get <img src={arrow} alt="Arrow" className="arrow" />
            </span>
            <span className="started-text">Started</span>
          </div>
        </div>
        <div className="content">
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs.
            <br />
            We examine annual percentage rates, annual fees.
          </p>
        </div>
      </div>

      <img src={vector} alt="Vector" className="vector" />
      <img src={semi} alt="Semi" className="semi" />
      <img src={right} alt="Right" className="right" />
      <img src={ball3} alt="Ball3" className="ball3" />
      <img src={layer} alt="Layer" className="layer" />
      <img src={layout} alt="Layout" className="layout" />
      <img src={top} alt="Top" className="top" />

      <div className="stats">
        <span className="stat-item1">
          3800+ <span className="user">USER ACTIVE</span>
        </span>
        <div className="vertical-line"></div>
        <span className="stat-item2">
          230+ <span className="company">TRUSTED BY COMPANY</span>
        </span>
        <div className="line"></div>
        <span className="stat-trans">
          $230M+ <span className="trans">TRANSACTION</span>
        </span>
      </div>

      <div className="business">
        You do the business,
        <br />
        <span>we’ll handle the money.</span>
      </div>
      <div className="market">
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards, and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>
      <div className="get-started-button">Get Started</div>
      <img src={star} alt="Star" className="star" />
      <div className="reward-container">
        <div className="reward">
          <div className="reward-text">Rewards</div>
          <p>
            The best credit cards offer some tantalizing combinations of
            promotions and prizes.
          </p>
        </div>
        <div className="secured-box">
          <img src={bold} alt="Bold" className="bold" />
          <div className="secured">
            <div className="secured-text">100% Secured</div>
            <p>
              We take proactive steps to make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <img src={send} alt="Send" className="send" />
        <div className="balance">
          <div className="balance-text">Balance Transfer</div>
          <p>
            A balance transfer credit card can save you a lot of money in
            interest charges.
          </p>
        </div>
      </div>

      <div className="paypal-box">
        <div className="paypal-content">
          <img src={pay} alt="Pay" className="pay" />
          <span className="paypal-text">Paypal</span>
          <span className="checkout-text">checkout</span>
          <img src={paypal} alt="Paypal" className="paypal" />
        </div>
        <div className="total-section">
          <span className="total">Total</span>
          <p className="dollar">$210</p>
          <div className="change">Change</div>
        </div>
        <div className="payment-button">Make Payment</div>
      </div>

      <div className="transaction-box">
        <span className="transaction-text">Last Transaction</span>
        <div className="pro">
          <p className="pro-text">Dribble Pro</p>
          <span className="days">15 days ago</span>
          <div className="pro-right">
            <img src={polygon1} alt="Polygon1" className="polygon1" />
            <span className="amount1">- $250.93</span>
          </div>
        </div>
        <img src={dribbble} alt="Dribbble" className="dribbble" />
        <div className="net">
          <p className="net-text">Netflix</p>
          <span className="net-days">4 days ago</span>
          <img src={polygon2} alt="Polygon2" className="polygon2" />
          <span className="amount2">- $250.93</span>
        </div>
        <div className="netflix-container">
          <img src={netflix} alt="Netflix" className="netflix" />
          <img src={netflixlogo} alt="NetflixLogo" className="netflixlogo" />
        </div>
        <div className="life">
          <p className="life-text">Manulife Cash</p>
          <span className="life-days">4 days ago</span>
          <img src={polygonup} alt="Polygonup" className="polygonup" />
          <span className="amount3">- $250.93</span>
        </div>
        <div className="cash-container">
          <img src={cash} alt="Cash" className="cash" />
          <img src={cashlogo} alt="CashLogo" className="cashlogo" />
        </div>
      </div>

      <div className="success">
        <img src={tick} alt="Tick" className="tick" />
        Great! Your payment is successful.
      </div>
      <div className="bill">
        Easily control your <br />
        <span>billing & invoicing.</span>
      </div>
      <div className="bill-text">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </div>
      <div className="apple">
        <img src={applelogo} alt="Applelogo" className="applelogo" />
        Download on the <br />
        <span className="apple-store">App Store</span>
      </div>
      <div className="play">
        <img src={playlogo} alt="Playlogo" className="playlogo" />
        GET IT ON <br />
        <span className="play-store">Google Play</span>
      </div>
      <div className="deal">
        Find a better card deal <br />
        <span>in few easy steps.</span>
      </div>
      <div className="deal-text">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </div>
      <div className="get-start-button">Get Started</div>
      <div className="circle-container">
        <img src={large} alt="Large" className="large" />
        <img src={medium} alt="Medium" className="medium" />
        <img src={small} alt="Small" className="small" />
      </div>
      <div className="anal">
        <img src={analysis} alt="Analysis" className="analysis" />
        <div className="scanning">
          <img src={scan} alt="Scan" className="scan" />
        </div>
      </div>
      <div className="payment">
        <img src={payment} alt="Payment" className="payment1" />
        <span className="method">
          Pay Method
          <div className="box">
            <img src={pal} alt="Pal" className="pal" />
          </div>
          <div className="apple-box">
            <img src={applenew} alt="Applenew" className="applenew" />
          </div>
          <div className="visa">
            <img src={visalogo} alt="Visalogo" className="visalogo" />
          </div>
          <div className="shopify">
            <img src={shoplogo} alt="Shoplogo" className="shoplogo" />
          </div>
        </span>
      </div>
      <img src={rect} alt="Rect" className="rect" />
      <div className="us">
        What People are <br />
        <span>saying about us</span>
        <div className="us-text">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </div>
      </div>
      <div className="herman-box">
        <img src={dot} alt="Dot" className="dot" />
        <span className="herman-text">
          Money is only a tool. It will take you wherever you wish, but it will
          not replace you as the driver.
        </span>
        <img src={image1} alt="Image1" className="image1" />
        <div className="jen">
          Herman Jensen <br />
          <span className="leader1">Founder & Leader</span>
        </div>
        <img src={dot1} alt="Dot1" className="dot1" />
        <span className="steve-text">
          Money makes your life easier. If you're lucky to have it, you're
          lucky.
        </span>
        <img src={image2} alt="Image2" className="image2" />
        <div className="steve">
          Steve Mark <br />
          <span className="leader2">Founder & Leader</span>
        </div>
        <img src={dot2} alt="Dot2" className="dot2" />
        <span className="kenn-text">
          It is usually people in the money business, finance, and international
          trade that are really rich.
        </span>
        <img src={image3} alt="Image3" className="image3" />
        <div className="kenn">
          Kenn Gallagher <br />
          <span className="leader3">Founder & Leader</span>
        </div>
      </div>
      <div className="context">
        <img src={air} alt="air" className="air" />
        <img src={binance} alt="Binance" className="binance" />
        <img src={coin} alt="Coin" className="coin" />
        <img src={drop} alt="Drop" className="drop" />
      </div>
      <div className="service-box">
        <div className="now">Let’s try our service now!</div>
        <div className="now-text">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </div>
        <div className="started-button">Get Started</div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;