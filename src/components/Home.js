const Home = () => {
  const onButtonClick = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/assets/Benjamin derisbourg-6.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Benjamin derisbourg-6.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section>
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>
        Je m'appelle Benjamin Derisbourg, je suis un jeune développeur Web et
        Web mobile.
      </p>
      <button onClick={onButtonClick}>Télécharger mon cv</button>
    </section>
  );
}
export default Home;
