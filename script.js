
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const loginPage = document.getElementById("loginPage");
    const musicPage = document.getElementById("musicPage");
    const navbarActions = document.getElementById("navbarActions");
    const loginNavBtn = document.getElementById("loginNavBtn");
    const musicContainer = document.getElementById("musicContainer");

    // Your provided tracks with correct title and artist
const tracks = [
  {
    youtube: "https://youtu.be/KBYSpR8N6pc?si=Ap5wjCj2O9sHDQtB",
    title: "RagaSitar",
    artist: "Rishab Rikhiram Sharma"
  },
  {
      youtube: "https://youtu.be/4twsvQvrhvc?si=plzI84cceaSZZgog",
      title: "Sitar",
      artist: "Bhagirat bhaat"
    },
    {
      youtube: "https://youtu.be/KepO-GBsqzk?si=7cP7OTKEEVp_7pwE",
      title: "SitarMorning Raga",
      artist: "Pandit Ravi Shankar"
    },
  {
    youtube: "https://youtu.be/ghe6YipmCQY?si=4w0n-82BFgL_Hz-k",
    title: "Garaj Garaj Jugalbandi",
    artist: "Farid Hasan"
  }
];

const musicSection = document.getElementById("musicSection");

tracks.forEach((track) => {
  // Extract the YouTube video ID from the link
  const videoId = track.youtube.split("/").pop().split("?")[0];
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Create card element
  const card = document.createElement("div");
  card.className = "card bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300";

  card.innerHTML = `
    <figure class="h-40 overflow-hidden relative">
      <img src="${thumbnail}" alt="Thumbnail" class="w-full h-full object-cover"/>
      <button onclick="window.open('${track.youtube}', '_blank')" 
        class="absolute bottom-2 right-2 btn bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-3 py-1">
        ▶ Play
      </button>
    </figure>
    <div class="card-body p-4">
      <h2 class="card-title text-orange-600 text-lg font-bold">${track.title}</h2>
      <p class="text-gray-700">${track.artist}</p>
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

