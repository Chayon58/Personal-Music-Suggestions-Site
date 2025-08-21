
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const loginPage = document.getElementById("loginPage");
    const musicPage = document.getElementById("musicPage");
    const navbarActions = document.getElementById("navbarActions");
    const loginNavBtn = document.getElementById("loginNavBtn");
    const musicContainer = document.getElementById("musicContainer");

    // Example track data
const tracks = [
  {
    img: "https://i.scdn.co/image/ab67616d0000b2734a8b4e1b5c3e80f7d5b5a4b3",
    title: "Blinding Lights",
    artist: "The Weeknd"
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b273b16a9c75b0a16e4b6b40ff7b",
    title: "Shape of You",
    artist: "Ed Sheeran"
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b27363cfe46eec15e616a7bdbd92",
    title: "Levitating",
    artist: "Dua Lipa"
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b273baf3e95f47b8a6f8b32a87c1",
    title: "Peaches",
    artist: "Justin Bieber"
  }
];

// Get container
const musicSection = document.getElementById("musicSection");

// Render cards
tracks.forEach(track => {
  const card = document.createElement("div");
  card.className = "card w-64 bg-white shadow-xl rounded-xl overflow-hidden";

  card.innerHTML = `
    <figure class="h-40 overflow-hidden">
      <img src="${track.img}" alt="Album Thumbnail" class="w-full h-full object-cover"/>
    </figure>
    <div class="card-body p-4">
      <h2 class="card-title text-orange-600 text-lg font-bold">${track.title}</h2>
      <p class="text-gray-700">${track.artist}</p>
      <div class="card-actions justify-end mt-2">
        <button class="btn bg-yellow-400 hover:bg-yellow-500 text-black px-4">Play</button>
      </div>
    </div>
  `;
  musicSection.appendChild(card);
});


    // Handle login
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username !== "" && password === "123456") {
        // Switch to music page
        loginPage.classList.add("hidden");
        musicPage.classList.remove("hidden");
        errorMsg.classList.add("hidden");

        // Update navbar
        navbarActions.innerHTML = `
          <input id=\"searchInput\" type=\"text\" placeholder=\"Search music...\" class=\"input input-bordered text-black\" />
          <button id=\"searchBtn\" class=\"btn bg-yellow-400 hover:bg-yellow-500 text-black\">Search</button>
          <button id=\"logoutBtn\" class=\"btn bg-red-600 hover:bg-red-700 text-white\">Logout</button>
        `;

        renderMusic();

        // Logout handler
        document.getElementById("logoutBtn").addEventListener("click", () => {
          location.reload();
        });
      } else {
        errorMsg.classList.remove("hidden");
      }
    });

    // video-sound
    document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bgVideo');

  // Set volume to 20%
  video.volume = 0.2;

  // Try to play (may be blocked by browser if no user interaction)
  video.play().catch(() => {
    console.log('Autoplay with sound blocked. User interaction required.');
  });

  // Optional: Unmute on first click if blocked
  document.body.addEventListener('click', () => {
    video.muted = false;
    video.play();
  }, { once: true });
});

