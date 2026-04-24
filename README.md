---

# 🌅 Momentum Dashboard – Browser Start Page

A personal browser dashboard that combines focus, real-time data, and a clean visual experience.

This project is built as part of my **Full Stack learning journey**, focusing on working with APIs, asynchronous JavaScript, and building a real-world UI.

---

## 🚀 Features

* 🖼️ **Dynamic Background**

  * Random nature images from Unsplash API
  * Author credit included

* 🕒 **Live Date & Time**

  * Updates every second
  * Clean and minimal display

* 💰 **Crypto Tracker**

  * Real-time data using CoinGecko API
  * Displays:

    * Current Price 💰
    * 24h High 📈
    * 24h Low 📉
  * Coin icon and name included

* 🌍 **Weather Widget**

  * Uses Geolocation API
  * Fetches:

    * City name
    * Temperature
    * Weather icon

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6+)
* APIs:

  * Unsplash (via Scrimba proxy)
  * CoinGecko
  * OpenWeather
  * Browser Geolocation API

---

## 📸 Preview

*(Add your screenshots or screen recording here)*

---

## ⚙️ How It Works

* Fetches background image from Unsplash on load
* Retrieves user location using Geolocation API
* Uses coordinates to fetch weather data
* Fetches crypto data separately
* Updates time every second using `setInterval`

---

## 📂 Project Structure

```
Momentum-Dashboard/
│── index.html
│── style.css
│── script.js
│── icon.png
│── manifest.json
│── README.md
```

---

## 🔑 API Setup

To run this project fully:

1. Get your OpenWeather API key
2. Replace in `index.js`:

```js
const weatherApiKey = "YOUR_API_KEY"
```

---

## ⚠️ Notes

* Geolocation requires HTTPS or localhost
* API requests may fail if rate limits are exceeded
* Unsplash images are loaded via Scrimba proxy (no key required)

---

## 📈 Learning Outcomes

* Working with multiple APIs simultaneously
* Handling asynchronous JavaScript (`fetch`, `async/await`)
* DOM manipulation and dynamic UI updates
* Error handling and fallback UI

---

## 🔗 Connect With Me

* LinkedIn: [https://www.linkedin.com/in/fakhar-e-alam-a046133b4/](https://www.linkedin.com/in/fakhar-e-alam-a046133b4/)
* Scrimba: [https://scrimba.com/?via=u43a7734](https://scrimba.com/?via=u43a7734)

---

## 💡 Future Improvements

* Dark / Light mode toggle
* Spotify integration 🎵
* Focus mode (minimal UI)
* Better UI animations
* API optimization & caching

---

## ⭐ Final Thought

This project is more than a dashboard—
it’s a step toward building real-world, interactive web applications.

---
