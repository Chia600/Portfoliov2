function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <div class="div-contact">
        <form>
          <label>Nom:</label>
          <input type="text" name="name" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Message:</label>
          <textarea name="message" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
