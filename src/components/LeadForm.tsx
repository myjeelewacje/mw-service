export function LeadForm() {
  return (
    <form className="lead-form" id="offerte">
      <span className="form-kicker">Gratis en vrijblijvend</span>
      <h2>Vraag een gratis offerte aan</h2>

      <div className="form-grid">
        <input name="name" placeholder="Naam" required />
        <input name="phone" placeholder="Telefoon" required />
      </div>

      <input name="email" type="email" placeholder="E-mail" />

      <select name="service" defaultValue="">
        <option value="" disabled>Dienst kiezen</option>
        <option>Dakreiniging</option>
        <option>Schoorsteenreiniging</option>
        <option>Gevelreiniging</option>
        <option>Combinatie van diensten</option>
      </select>

      <textarea name="message" placeholder="Korte omschrijving of adres/regio" />

      <button type="submit">Vraag offerte aan →</button>

      <small>Uw gegevens worden vertrouwelijk behandeld.</small>
    </form>
  )
}
