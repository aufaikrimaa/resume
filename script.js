const buttonsData = [
  { imageUrl: "./img/email.svg", linkUrl: "mailto:aufaikrimah@gmail.com" },
  { imageUrl: "./img/wa.svg", linkUrl: "whatsapp://send?phone=6289506591035" },
  { imageUrl: "./img/github.svg", linkUrl: "https://github.com/aufaikrimaa" },
  {
    imageUrl: "./img/linkedin.svg",
    linkUrl: "https://www.linkedin.com/in/aufa-ikrimah/",
  },
];

const buttonContainer = document.getElementById("contact-info");

buttonsData.forEach((data) => {
  const buttonHTML = `
          <a href="${data.linkUrl}">
              <span>
                  <img src="${data.imageUrl}" alt="Button Image" height="20">
              </span>
          </a>
      `;
  buttonContainer.innerHTML += buttonHTML;
});
