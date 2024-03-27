// Fetch image from unsplash
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author-name").innerText = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`;
  });

//Fetch crypto from coingecko
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("crypto-top").innerHTML = `
    <img src="${data.image.small}" alt="crypto icon">
    <span>${data.name}</span>
    `;

    document.getElementById("crypto").innerHTML += `
    <p>🎯: ${data.market_data.current_price.eur} €</p>
    <p>👆: ${data.market_data.high_24h.eur} €</p>
    <p>👇: ${data.market_data.low_24h.eur} €</p>
    `;
  })
  .catch((err) => console.error(err));
