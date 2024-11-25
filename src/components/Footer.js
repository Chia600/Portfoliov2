function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Neyruba. Tous droits réservés.</p>
      <div>
        <a href="https://www.linkedin.com/in/benjamin-derisbourg-1a025a2a2/"target="_blank"rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin-circled.png"
            alt="LinkedIn"
            className="footer__icon"
          />
        </a>
        <a
          href="https://github.com/Chia600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=106567&format=png&color=000000"
            alt="LinkedIn"
            className="footer__icon"
          />
        </a>
        <a
          href="mailto:derisbourg.benjamin3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
            alt="Gmail"
            className="footer__icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
