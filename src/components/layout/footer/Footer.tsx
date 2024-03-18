import scss from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.footerText}>
            <h2>BRANDNAME</h2>
            <div>
              <p>О нас </p>
              <p>Контакты</p>
            </div>
            <div>
              <p>Способы оплаты</p>
              <p>Условия доставки</p>
            </div>
            <div>
              <p>Пользовательское соглашение</p>
              <p>Политика конфиденциальности</p>
            </div>
          </div>
          <div className={scss.text}>
            <p>brandname.com</p>
            <p>2023</p>
            <p>Все права защищены</p>
          </div>
        </div>
      </div>
      <div className={scss.color}>
        <div className={scss.yellow}>
          <p>Onlineshop</p>
          <p>Onlineshop</p>
        </div>
        <div className={scss.green}>
          <p>Onlineshop</p>
          <p>Onlineshop</p>
          <p>Onlineshop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
