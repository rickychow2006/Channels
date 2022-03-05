import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splashpage-whole-main" id="main">
        <div className="splashpage-first">
          <div className ="splashpage-first-header">
          <h1 className="splashpage-first-bigtitle">
            Discover a new way of working
          </h1>
          <p className="splashpage-first-text">
            Bring the right people and information together in channels. Share ideas, make decisions and move work forward with a common purpose and place.
          </p>
          <br />
          <br />
          <Link to="/signup" className="splash-signup-link">
            TRY CHANNELS
          </Link>
          <br></br>
          <p className="splash-already-sign-in">
            Already using Channels? <br/>
            <Link to="/login" className="splash-login-link">
              Sign In
            </Link>
          </p>
          </div>
          <div className ="splashpage-first-illuistration">
            <div className ="img-container">
              <img src="https://a.slack-edge.com/81a47/marketing/img/features/channels/hero/hero-channels.jpg" width="600" height="400" alt="header_picture">
              </img>
            </div>
          </div>
        </div>
        <div className="splashpage-second">
          <h1 className="splashpage-second-title">
            Break out of the inbox
          </h1>
          <p className="splashpage-second-text">
          Channels are flexible spaces for all the people, tools, and files you need to get work done.
          </p>
          <br />
          <br />

        </div>
        <div className="splashpage-third-container">
        <div className="splashpage-third">
          <div className="third-col">
            <svg
              width="48"
              height="48"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 14.2321 25.4561 H 4.0001 C 3.62879 25.4561 3.2727 25.3086 3.01015 25.046 C 2.7476 24.7835 2.6001 24.4274 2.6001 24.0561 V 4.0001 C 2.6022 3.62944 2.75037 3.27457 3.01247 3.01247 C 3.27457 2.75037 3.62944 2.6022 4.0001 2.6001 H 24.0561 C 24.4274 2.6001 24.7835 2.7476 25.046 3.01015 C 25.3086 3.2727 25.4561 3.62879 25.4561 4.0001 V 17.1761 C 25.4561 17.4413 25.5615 17.6957 25.749 17.8832 C 25.9365 18.0707 26.1909 18.1761 26.4561 18.1761 C 26.7213 18.1761 26.9757 18.0707 27.1632 17.8832 C 27.3507 17.6957 27.4561 17.4413 27.4561 17.1761 V 4.0001 C 27.454 3.09901 27.0951 2.23543 26.4579 1.59827 C 25.8208 0.961102 24.9572 0.60221 24.0561 0.600098 H 4.0001 C 3.09901 0.60221 2.23543 0.961102 1.59827 1.59827 C 0.961102 2.23543 0.60221 3.09901 0.600098 4.0001 V 24.0561 C 0.600098 24.5026 0.688041 24.9447 0.858907 25.3572 C 1.02977 25.7697 1.28022 26.1445 1.59593 26.4603 C 1.91165 26.776 2.28647 27.0264 2.69897 27.1973 C 3.11148 27.3681 3.5536 27.4561 4.0001 27.4561 H 14.2321 C 14.4973 27.4561 14.7517 27.3507 14.9392 27.1632 C 15.1267 26.9757 15.2321 26.7213 15.2321 26.4561 C 15.2321 26.1909 15.1267 25.9365 14.9392 25.749 C 14.7517 25.5615 14.4973 25.4561 14.2321 25.4561 V 25.4561 Z"
                fill="#1D1C1D"
              />
              <path
                d="M 25.3603 24.92 C 24.9982 24.9158 24.6523 24.769 24.3977 24.5114 C 24.1431 24.2538 24.0003 23.9062 24.0003 23.544 C 24.0008 23.3173 24.0586 23.0944 24.1683 22.896 H 24.0003 C 23.5731 22.896 23.1555 23.0227 22.8003 23.26 C 22.4451 23.4974 22.1682 23.8347 22.0048 24.2294 C 21.8413 24.6241 21.7985 25.0584 21.8818 25.4774 C 21.9652 25.8964 22.1709 26.2813 22.473 26.5833 C 22.7751 26.8854 23.1599 27.0911 23.5789 27.1745 C 23.9979 27.2578 24.4322 27.2151 24.8269 27.0516 C 25.2216 26.8881 25.559 26.6112 25.7963 26.256 C 26.0337 25.9008 26.1603 25.4832 26.1603 25.056 C 26.1682 24.9361 26.1682 24.8159 26.1603 24.696 C 25.9238 24.8528 25.6439 24.9311 25.3603 24.92 V 24.92 Z"
                fill="#1D1C1D"
              />
              <path
                d="M 31.3519 24.6802 C 30.7383 23.2347 29.7129 22.0018 28.4034 21.135 C 27.0939 20.2683 25.5583 19.8062 23.9879 19.8062 C 22.4176 19.8062 20.882 20.2683 19.5725 21.135 C 18.263 22.0018 17.2375 23.2347 16.6239 24.6802 C 16.5284 24.9135 16.5284 25.175 16.6239 25.4082 C 17.2375 26.8537 18.263 28.0867 19.5725 28.9534 C 20.882 29.8201 22.4176 30.2823 23.9879 30.2823 C 25.5583 30.2823 27.0939 29.8201 28.4034 28.9534 C 29.7129 28.0867 30.7383 26.8537 31.3519 25.4082 C 31.4396 25.1735 31.4396 24.915 31.3519 24.6802 V 24.6802 Z M 23.9999 28.2962 C 22.8988 28.2982 21.8185 27.996 20.8783 27.4228 C 19.9381 26.8497 19.1746 26.0279 18.6719 25.0482 C 19.1757 24.0692 19.9394 23.248 20.8793 22.6746 C 21.8192 22.1012 22.8989 21.7978 23.9999 21.7978 C 25.1009 21.7978 26.1806 22.1012 27.1205 22.6746 C 28.0604 23.248 28.8242 24.0692 29.3279 25.0482 C 28.8253 26.0279 28.0617 26.8497 27.1215 27.4228 C 26.1813 27.996 25.1011 28.2982 23.9999 28.2962 V 28.2962 Z"
                fill="#1D1C1D"
              />
              <path
                d="M 18.4719 17.2722 C 18.7265 17.2722 18.9707 17.1711 19.1507 16.991 C 19.3307 16.811 19.4319 16.5668 19.4319 16.3122 C 19.4319 16.0576 19.3307 15.8134 19.1507 15.6334 C 18.9707 15.4534 18.7265 15.3522 18.4719 15.3522 H 16.7439 L 17.2399 11.9442 H 19.1999 C 19.3328 11.9564 19.4668 11.9407 19.5933 11.8982 C 19.7198 11.8557 19.836 11.7873 19.9346 11.6973 C 20.0331 11.6074 20.1119 11.4978 20.1657 11.3758 C 20.2196 11.2537 20.2474 11.1217 20.2474 10.9882 C 20.2474 10.8548 20.2196 10.7228 20.1657 10.6007 C 20.1119 10.4786 20.0331 10.3691 19.9346 10.2791 C 19.836 10.1892 19.7198 10.1208 19.5933 10.0782 C 19.4668 10.0357 19.3328 10.0201 19.1999 10.0322 H 17.5199 L 17.7519 8.47222 C 17.7787 8.3441 17.7791 8.21184 17.7529 8.08358 C 17.7268 7.95531 17.6746 7.83376 17.5998 7.72638 C 17.5249 7.61899 17.4289 7.52806 17.3176 7.45916 C 17.2062 7.39026 17.082 7.34485 16.9525 7.32573 C 16.823 7.30661 16.691 7.31417 16.5645 7.34795 C 16.438 7.38174 16.3198 7.44103 16.2171 7.52219 C 16.1144 7.60334 16.0294 7.70465 15.9673 7.81987 C 15.9051 7.9351 15.8672 8.06181 15.8559 8.19222 L 15.5839 10.0322 H 13.0639 L 13.2959 8.47222 C 13.3171 8.22848 13.2444 7.98583 13.0927 7.79385 C 12.9411 7.60188 12.7218 7.47506 12.4798 7.43932 C 12.2377 7.40358 11.9912 7.4616 11.7904 7.60153 C 11.5897 7.74147 11.45 7.95275 11.3999 8.19222 L 11.1279 10.0322 H 8.79989 C 8.667 10.0201 8.53303 10.0357 8.40653 10.0782 C 8.28003 10.1208 8.16379 10.1892 8.06522 10.2791 C 7.96664 10.3691 7.88791 10.4786 7.83404 10.6007 C 7.78017 10.7228 7.75235 10.8548 7.75235 10.9882 C 7.75235 11.1217 7.78017 11.2537 7.83404 11.3758 C 7.88791 11.4978 7.96664 11.6074 8.06522 11.6973 C 8.16379 11.7873 8.28003 11.8557 8.40653 11.8982 C 8.53303 11.9407 8.667 11.9564 8.79989 11.9442 H 10.8639 L 10.3679 15.3522 H 8.04789 C 7.79328 15.3522 7.5491 15.4534 7.36907 15.6334 C 7.18903 15.8134 7.08789 16.0576 7.08789 16.3122 C 7.08789 16.5668 7.18903 16.811 7.36907 16.991 C 7.5491 17.1711 7.79328 17.2722 8.04789 17.2722 H 10.0719 L 9.72789 19.5842 C 9.69108 19.8344 9.75445 20.089 9.90424 20.2927 C 10.054 20.4964 10.2781 20.6328 10.5279 20.6722 H 10.6719 C 10.8983 20.6716 11.1172 20.591 11.29 20.4446 C 11.4627 20.2982 11.5782 20.0955 11.6159 19.8722 L 11.9999 17.2722 H 14.5199 L 14.1759 19.5842 C 14.1391 19.8344 14.2025 20.089 14.3522 20.2927 C 14.502 20.4964 14.7261 20.6328 14.9759 20.6722 H 15.1199 C 15.3468 20.6732 15.5665 20.5932 15.7396 20.4465 C 15.9127 20.2998 16.0277 20.0962 16.0639 19.8722 L 16.4479 17.2802 L 18.4719 17.2722 Z M 12.2879 15.3522 L 12.7999 11.9442 H 15.3199 L 14.8239 15.3522 H 12.2879 Z"
                fill="#1D1C1D"
              />
            </svg>
            <h3 className="splash-col-title">Public channels</h3>
            <div className="splash-col-content">
            These channels are open for anyone at your company to join or find in search. Increase transparency while allowing everyone to benefit from the context of your conversations.
            </div>
          </div>
          <div className="third-col">
            <svg
              width="48"
              height="48"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9999 0.599854H3.99985C3.09877 0.601966 2.23519 0.960858 1.59802 1.59802C0.960858 2.23519 0.601966 3.09877 0.599854 3.99985V23.1999C0.609135 23.9187 0.846598 24.6161 1.27797 25.1913C1.70934 25.7664 2.31231 26.1897 2.99985 26.3999V27.9999C3.00197 28.9009 3.36086 29.7645 3.99802 30.4017C4.63519 31.0388 5.49877 31.3977 6.39985 31.3999H25.5999C26.5009 31.3977 27.3645 31.0388 28.0017 30.4017C28.6388 29.7645 28.9977 28.9009 28.9999 27.9999V26.3999C29.6874 26.1897 30.2904 25.7664 30.7217 25.1913C31.1531 24.6161 31.3906 23.9187 31.3999 23.1999V3.99985C31.3977 3.09877 31.0388 2.23519 30.4017 1.59802C29.7645 0.960858 28.9009 0.601966 27.9999 0.599854V0.599854ZM26.9999 27.9999C26.9978 28.3705 26.8496 28.7254 26.5875 28.9875C26.3254 29.2496 25.9705 29.3978 25.5999 29.3999H6.39985C6.0292 29.3978 5.67432 29.2496 5.41222 28.9875C5.15013 28.7254 5.00195 28.3705 4.99985 27.9999V26.5999H26.9999V27.9999ZM29.3999 23.1999C29.3978 23.5705 29.2496 23.9254 28.9875 24.1875C28.7254 24.4496 28.3705 24.5978 27.9999 24.5999H3.99985C3.6292 24.5978 3.27432 24.4496 3.01222 24.1875C2.75013 23.9254 2.60195 23.5705 2.59985 23.1999V3.99985C2.60195 3.6292 2.75013 3.27432 3.01222 3.01222C3.27432 2.75013 3.6292 2.60195 3.99985 2.59985H27.9999C28.3705 2.60195 28.7254 2.75013 28.9875 3.01222C29.2496 3.27432 29.3978 3.6292 29.3999 3.99985V23.1999Z"
                fill="#1D1C1D"
              />
              <path
                d="M9.94386 6.19189H6.06386C5.67505 6.19189 5.35986 6.50709 5.35986 6.89589V10.7759C5.35986 11.1647 5.67505 11.4799 6.06386 11.4799H9.94386C10.3327 11.4799 10.6479 11.1647 10.6479 10.7759V6.89589C10.6479 6.50709 10.3327 6.19189 9.94386 6.19189Z"
                fill="#1D1C1D"
              />
              <path
                d="M9.94386 15.7119H6.06386C5.67505 15.7119 5.35986 16.0271 5.35986 16.4159V20.2959C5.35986 20.6847 5.67505 20.9999 6.06386 20.9999H9.94386C10.3327 20.9999 10.6479 20.6847 10.6479 20.2959V16.4159C10.6479 16.0271 10.3327 15.7119 9.94386 15.7119Z"
                fill="#1D1C1D"
              />
              <path
                d="M14.0959 17.408H24.1359C24.4012 17.408 24.6555 17.3026 24.8431 17.1151C25.0306 16.9275 25.1359 16.6732 25.1359 16.408C25.1359 16.1427 25.0306 15.8884 24.8431 15.7009C24.6555 15.5133 24.4012 15.408 24.1359 15.408H14.0959C13.8307 15.408 13.5764 15.5133 13.3888 15.7009C13.2013 15.8884 13.0959 16.1427 13.0959 16.408C13.0959 16.6732 13.2013 16.9275 13.3888 17.1151C13.5764 17.3026 13.8307 17.408 14.0959 17.408Z"
                fill="#1D1C1D"
              />
              <path
                d="M25.5039 19.312H14.0959C13.8307 19.312 13.5764 19.4174 13.3888 19.6049C13.2013 19.7924 13.0959 20.0468 13.0959 20.312C13.0959 20.5772 13.2013 20.8316 13.3888 21.0191C13.5764 21.2067 13.8307 21.312 14.0959 21.312H25.5039C25.7692 21.312 26.0235 21.2067 26.2111 21.0191C26.3986 20.8316 26.5039 20.5772 26.5039 20.312C26.5039 20.0468 26.3986 19.7924 26.2111 19.6049C26.0235 19.4174 25.7692 19.312 25.5039 19.312V19.312Z"
                fill="#1D1C1D"
              />
              <path
                d="M14.0959 7.88794H24.1359C24.4012 7.88794 24.6555 7.78258 24.8431 7.59505C25.0306 7.40751 25.1359 7.15316 25.1359 6.88794C25.1359 6.62272 25.0306 6.36837 24.8431 6.18083C24.6555 5.9933 24.4012 5.88794 24.1359 5.88794H14.0959C13.8307 5.88794 13.5764 5.9933 13.3888 6.18083C13.2013 6.36837 13.0959 6.62272 13.0959 6.88794C13.0959 7.15316 13.2013 7.40751 13.3888 7.59505C13.5764 7.78258 13.8307 7.88794 14.0959 7.88794Z"
                fill="#1D1C1D"
              />
              <path
                d="M25.5039 9.79199H14.0959C13.8307 9.79199 13.5764 9.89735 13.3888 10.0849C13.2013 10.2724 13.0959 10.5268 13.0959 10.792C13.0959 11.0572 13.2013 11.3116 13.3888 11.4991C13.5764 11.6866 13.8307 11.792 14.0959 11.792H25.5039C25.7692 11.792 26.0235 11.6866 26.2111 11.4991C26.3986 11.3116 26.5039 11.0572 26.5039 10.792C26.5039 10.5268 26.3986 10.2724 26.2111 10.0849C26.0235 9.89735 25.7692 9.79199 25.5039 9.79199V9.79199Z"
                fill="#1D1C1D"
              />
            </svg>
            <h3 className="splash-col-title">Get looped in, not out</h3>
            <div className="splash-col-content">
              Channels makes it simple to follow conversations or find
              important information in an easily searchable archive.
            </div>
          </div>
          <div className="third-col">
            <svg
              width="48"
              height="48"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.368 20.672C31.2703 19.9419 30.9089 19.2728 30.3518 18.7909C29.7947 18.3089 29.0805 18.0476 28.344 18.056C27.7707 18.0699 27.2056 18.1949 26.68 18.424V13.064C26.6896 12.6675 26.62 12.273 26.4753 11.9037C26.3307 11.5343 26.1138 11.1976 25.8375 10.913C25.5611 10.6285 25.2308 10.4019 24.8658 10.2465C24.5009 10.0911 24.1086 10.01 23.712 10.008C23.4208 9.61344 23.037 9.2965 22.5946 9.08509C22.1521 8.87367 21.6644 8.77425 21.1745 8.79559C20.6845 8.81693 20.2074 8.95836 19.7849 9.20744C19.3625 9.45652 19.0078 9.80562 18.752 10.224L18.456 10.272V9.16801C18.4595 8.46886 18.2231 7.78966 17.7864 7.24371C17.3496 6.69776 16.7388 6.31808 16.056 6.16801C15.9527 5.49034 15.6198 4.86869 15.113 4.40707C14.6062 3.94544 13.9563 3.67183 13.272 3.63201C13.0149 3.21523 12.6597 2.86772 12.2373 2.61982C11.815 2.37192 11.3384 2.23118 10.8492 2.20987C10.36 2.18857 9.87296 2.28735 9.43069 2.49759C8.98842 2.70784 8.60434 3.02315 8.31198 3.41601C7.91331 3.41482 7.51845 3.49354 7.1507 3.6475C6.78296 3.80147 6.4498 4.02756 6.1709 4.31243C5.89199 4.59731 5.673 4.93518 5.52685 5.30609C5.3807 5.67701 5.31036 6.07345 5.31998 6.47201V11.832C4.79434 11.6029 4.22923 11.4779 3.65598 11.464C2.91943 11.4556 2.20524 11.7169 1.64816 12.1989C1.09108 12.6808 0.729625 13.3499 0.631981 14.08C0.552507 14.8597 0.761925 15.6414 1.22052 16.277C1.67911 16.9125 2.35499 17.3577 3.11998 17.528C3.84798 17.736 5.51998 19.376 6.53598 20.728C7.14245 21.583 7.94476 22.2804 8.87584 22.7619C9.80692 23.2435 10.8397 23.4952 11.888 23.496H12.272C12.7022 23.4723 13.1286 23.4026 13.544 23.288V23.368C13.5253 25.0649 14.1548 26.7051 15.3039 27.9538C16.4531 29.2026 18.0353 29.9659 19.728 30.088H20.112C21.1602 30.0872 22.193 29.8355 23.1241 29.3539C24.0552 28.8724 24.8575 28.175 25.464 27.32C26.504 25.968 28.152 24.32 28.88 24.12C29.645 23.9497 30.3209 23.5045 30.7794 22.869C31.238 22.2334 31.4475 21.4517 31.368 20.672V20.672ZM13.544 15.76V21.36C13.1048 21.5353 12.6401 21.638 12.168 21.664H11.888C11.1271 21.6662 10.3769 21.4858 9.7003 21.1377C9.02372 20.7897 8.4406 20.2843 7.99998 19.664C7.99998 19.664 5.43198 16.312 3.59998 15.8C1.76798 15.288 2.27198 13.256 3.65598 13.256C5.03998 13.256 7.11198 15.136 7.11198 15.136V6.47201C7.10566 6.18989 7.19576 5.91405 7.36739 5.69005C7.53903 5.46606 7.78193 5.3073 8.05598 5.24001C8.14112 5.23177 8.22685 5.23177 8.31198 5.24001H8.47998V11.888C8.47998 12.1002 8.56427 12.3037 8.7143 12.4537C8.86432 12.6037 9.06781 12.688 9.27998 12.688C9.49215 12.688 9.69564 12.6037 9.84567 12.4537C9.9957 12.3037 10.08 12.1002 10.08 11.888V4.17601C10.2645 4.06028 10.4781 3.99925 10.696 4.00001C10.8701 4.00007 11.0422 4.0383 11.2 4.11201V12.04C11.2 12.2522 11.2843 12.4557 11.4343 12.6057C11.5843 12.7557 11.7878 12.84 12 12.84C12.2122 12.84 12.4156 12.7557 12.5657 12.6057C12.7157 12.4557 12.8 12.2522 12.8 12.04V5.46401C12.8931 5.45583 12.9868 5.45583 13.08 5.46401C13.38 5.47598 13.6649 5.59852 13.88 5.80801V11.568C13.88 11.7802 13.9643 11.9837 14.1143 12.1337C14.2643 12.2837 14.4678 12.368 14.68 12.368C14.8922 12.368 15.0956 12.2837 15.2457 12.1337C15.3957 11.9837 15.48 11.7802 15.48 11.568V7.92001H15.624C15.909 7.97652 16.1649 8.13196 16.3464 8.35886C16.5279 8.58577 16.6234 8.86953 16.616 9.16001V11.264C16.268 11.7066 16.0542 12.2396 16 12.8C15.3135 12.9374 14.695 13.3064 14.2479 13.8452C13.8009 14.384 13.5524 15.0599 13.544 15.76ZM28.4 22.4C26.568 22.904 24.016 26.264 24.016 26.264C23.5773 26.8924 22.9932 27.4054 22.3134 27.7592C21.6336 28.113 20.8783 28.2972 20.112 28.296H19.832C18.5985 28.1967 17.4488 27.6325 16.6156 26.7176C15.7823 25.8027 15.3278 24.6054 15.344 23.368V15.76C15.3408 15.4873 15.4277 15.2211 15.5911 15.0027C15.7545 14.7843 15.9854 14.6259 16.248 14.552V19.44C16.248 19.6522 16.3323 19.8557 16.4823 20.0057C16.6323 20.1557 16.8358 20.24 17.048 20.24C17.2602 20.24 17.4636 20.1557 17.6137 20.0057C17.7637 19.8557 17.848 19.6522 17.848 19.44V12.688C17.9448 12.4849 18.0965 12.3128 18.2859 12.1912C18.4753 12.0697 18.6949 12.0034 18.92 12C19.0147 12.0009 19.1088 12.0144 19.2 12.04V19.24C19.2 19.4522 19.2843 19.6557 19.4343 19.8057C19.5843 19.9557 19.7878 20.04 20 20.04C20.2122 20.04 20.4156 19.9557 20.5657 19.8057C20.7157 19.6557 20.8 19.4522 20.8 19.24V10.704C21.0062 10.6069 21.2363 10.5718 21.4621 10.6031C21.688 10.6343 21.8998 10.7305 22.072 10.88V19.136C22.072 19.3482 22.1563 19.5517 22.3063 19.7017C22.4563 19.8517 22.6598 19.936 22.872 19.936C23.0842 19.936 23.2876 19.8517 23.4377 19.7017C23.5877 19.5517 23.672 19.3482 23.672 19.136V11.808C23.7571 11.7998 23.8428 11.7998 23.928 11.808C24.202 11.8753 24.4449 12.0341 24.6166 12.2581C24.7882 12.482 24.8783 12.7579 24.872 13.04V21.728C24.872 21.728 26.96 19.848 28.328 19.848C29.696 19.848 30.264 21.872 28.4 22.4Z"
                fill="#1D1C1D"
              />
              <path
                d="M21.544 6.50396C21.6286 6.53471 21.7179 6.55094 21.808 6.55196C21.9743 6.55072 22.1361 6.49766 22.2709 6.40016C22.4057 6.30266 22.5067 6.16557 22.56 6.00796L23.464 3.39996C23.5114 3.29842 23.5369 3.18806 23.539 3.07601C23.541 2.96397 23.5195 2.85275 23.4758 2.74955C23.4321 2.64636 23.3672 2.5535 23.2853 2.47698C23.2034 2.40047 23.1064 2.34201 23.0005 2.30539C22.8946 2.26877 22.7822 2.25481 22.6705 2.26442C22.5589 2.27402 22.4505 2.30698 22.3524 2.36115C22.2543 2.41532 22.1687 2.48949 22.1011 2.57886C22.0335 2.66824 21.9854 2.77082 21.96 2.87996L21.048 5.48796C20.9791 5.68847 20.9927 5.90809 21.0857 6.09859C21.1787 6.28908 21.3435 6.43488 21.544 6.50396V6.50396Z"
                fill="#1D1C1D"
              />
              <path
                d="M18.7919 6.30413H18.8479C18.9531 6.29703 19.0558 6.26922 19.1502 6.2223C19.2445 6.17539 19.3287 6.11029 19.3978 6.03075C19.467 5.95121 19.5197 5.85879 19.553 5.7588C19.5863 5.65882 19.5996 5.55324 19.5919 5.44813L19.3839 2.52013C19.3691 2.30795 19.2706 2.11037 19.11 1.97084C19.0305 1.90176 18.9382 1.849 18.8384 1.81559C18.7385 1.78218 18.633 1.76877 18.5279 1.77613C18.3158 1.79098 18.1182 1.88951 17.9787 2.05004C17.8391 2.21057 17.7691 2.41995 17.7839 2.63213L17.9919 5.60013C18.0155 5.79526 18.1101 5.97487 18.2577 6.10472C18.4052 6.23456 18.5954 6.30555 18.7919 6.30413Z"
                fill="#1D1C1D"
              />
              <path
                d="M24.32 8.22397C24.4316 8.22371 24.542 8.20008 24.6439 8.15462C24.7459 8.10915 24.8372 8.04285 24.912 7.95997L26.896 5.79197C27.0392 5.63496 27.1142 5.42749 27.1044 5.2152C27.0947 5.00291 27.001 4.80319 26.844 4.65997C26.687 4.51676 26.4795 4.44178 26.2672 4.45153C26.0549 4.46128 25.8552 4.55496 25.712 4.71197L23.736 6.88797C23.5981 7.04329 23.526 7.24616 23.5349 7.45369C23.5439 7.66121 23.6332 7.85712 23.784 7.99997C23.9283 8.13916 24.1196 8.2191 24.32 8.22397Z"
                fill="#1D1C1D"
              />
            </svg>
            <h3 className="splash-col-title">Give focus a chance</h3>
            <div className="splash-col-content">
              Channels lets you choose which conversations are
              most important — and which can wait.
            </div>
          </div>
        </div>
        </div>
        <div className="splashpage-footer">
          <div className="splashpage-footer-container">
            <div className="footer-greeting">
              <img src={window.logo} className="channel-logo-footer" />
                <div className="footer-text">
                  Choose a better way to work
                </div>
              </div>
            <div className="footer-buttons">
              <Link to='/signup' className='footer-signup-link'>
                  TRY CHANNELS
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;