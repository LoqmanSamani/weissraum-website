// Turns the contact form into a prepared email (no data is sent to or stored on the server).
(function () {
  var form = document.getElementById("anfrage");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var f = form.elements;
    var lines = [
      "Name: " + f.name.value,
      f.firma.value ? "Firma: " + f.firma.value : null,
      f.email.value ? "E-Mail: " + f.email.value : null,
      f.telefon.value ? "Telefon: " + f.telefon.value : null,
      "Leistung: " + f.leistung.value,
      "",
      f.nachricht.value
    ].filter(function (line) { return line !== null; });

    var subject = "Anfrage " + f.leistung.value + " – " + f.name.value;
    window.location.href = "mailto:info@weissraum-gebaeudeservice.de"
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(lines.join("\n"));
  });
})();
