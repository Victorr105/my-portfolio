// script1.js — browser-side quote fetcher

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function loadQuote() {
  // 1. Loading state
  quoteEl.textContent = "Loading quote…";
  authorEl.textContent = "";

  try {
    // 2. Fetch from a key-free public API
    const response = await fetch("https://dummyjson.com/quotes/random");

    // 3. Check the HTTP status
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // 4. Parse the JSON
    const data = await response.json();

    // 5. Render safely — textContent, never innerHTML
    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `— ${data.author}`;
  } catch (error) {
    // 6. Graceful error handling
    quoteEl.textContent = "Sorry, couldn't load a quote right now.";
    authorEl.textContent = "Please try again later.";
    console.error("Quote fetch failed:", error);
  }
}

loadQuote();