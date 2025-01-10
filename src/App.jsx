import logoImg from "./assets/headerImg/logo.svg";
import globus from "./assets/headerImg/lang.svg";
import down from "./assets/headerImg/down.svg";
import decimal from "./assets/headerImg/decimal.svg";
import wallet from "./assets/headerImg/wallet.svg";
import walley from "./assets/headerImg/walley.svg";
import sell from "./assets/headerImg/sell.png";
import down2 from "./assets/headerImg/down2.svg";
import info from "./assets/headerImg/info.svg";
import arrow from "./assets/headerImg/arrow.svg";

const App = () => {
   const getYear = () => {
      return new Date().getFullYear();
   };

   return (
      <div className="wrapper">
         <header className="header">
            <div className="header__container">
               <a href="" className="header__logo">
                  <img src={logoImg} alt="picture logo" />
                  <div className="header__logo-title">Canyon Swap</div>
               </a>
               <nav className="header__menu menu">
                  <ul className="menu__list">
                     <li className="menu__item">
                        <a href="" className="menu__link active">
                           Главная
                        </a>
                     </li>
                     <li className="menu__item">
                        <a href="" className="menu__link">
                           Лендинг
                        </a>
                     </li>
                     <li className="menu__item">
                        <a href="" className="menu__link">
                           FAQ
                        </a>
                     </li>
                     <li className="menu__item">
                        <a href="" className="menu__link">
                           Обратная связь
                        </a>
                     </li>
                  </ul>
               </nav>
               <div className="header__button">
                  <a href="" className="button button_item">
                     <img src={globus} alt="" className="button_item-img" />
                     <div className="button_item-text">RU</div>
                     <img className="button_item-down" src={down} alt="" />
                  </a>
                  <a href="" className="button button_item">
                     <img className="button_item-img" src={decimal} alt="" />
                     <div className="button_item-text">Decimal</div>
                  </a>
                  <a href="" className="button button_item">
                     <img className="button_item-img" src={wallet} alt="" />
                     <div className="button_item-text">Connect wallet</div>
                  </a>
               </div>
            </div>
         </header>
         <main className="main">
            <div className="card__container card">
               <div className="card__header">
                  Swap <span>Pools</span>
               </div>
               <div className="card__sell sell">
                  <div className="sell__title">Вы продаете</div>
                  <div className="sell__items">
                     <div className="sell__item1">
                        <img className="sell__item1-sell" src={sell} alt="" />
                        <div>CRYG</div>
                        <img src={down2} alt="" />
                     </div>
                     <div className="sell__item2">1</div>
                  </div>
                  <div className="sell__select">
                     <div className="sell__select-item1">CRYG</div>
                     <div className="sell__select-item2">~$333.73</div>
                  </div>
                  <div className="arrow">
                     <div className="arrow__center">
                        <img src={arrow} alt="" />
                     </div>
                  </div>
               </div>
               <div className="card__buy">
                  <div className="sell__title">Вы покупаете</div>
                  <div className="sell__items">
                     <div className="sell__item1">
                        <img
                           className="sell__item1-decimal"
                           src={decimal}
                           alt=""
                        />
                        <div>DEL</div>
                        <img src={down2} alt="" />
                     </div>
                     <div className="sell__item2">714.543016</div>
                  </div>
                  <div className="sell__select">
                     <div className="sell__select-item1">DEL</div>
                     <div className="sell__select-item2">~$331.62 (-0.63%)</div>
                  </div>
               </div>
               <div className="card__info">
                  <img src={info} alt="" />
                  <div className="card__info-result">
                     1 CRYG = 714.543 DEL <span>($331.42)</span>
                  </div>
               </div>
               <div className="card__walley">
                  <img src={walley} alt="" />
                  <div className="card__walley-title">Сonnect walley</div>
               </div>
            </div>
         </main>
         <footer className=" footer footer__container">
            <div className="footer__right">
               Copyright. @ {getYear()} Corp Name Все права защищены
            </div>
            <div className="footer__left">
               Пользовательское соглашение | Политика конфиденциальности
            </div>
         </footer>
      </div>
   );
};

export default App;
