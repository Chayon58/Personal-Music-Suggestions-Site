
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const loginPage = document.getElementById("loginPage");
    const musicPage = document.getElementById("musicPage");
    const navbarActions = document.getElementById("navbarActions");
    const loginNavBtn = document.getElementById("loginNavBtn");
    const musicContainer = document.getElementById("musicContainer");

    // Sample music data (could be from API)
    const sampleMusic = [
      { title: "Song 1", artist: "Artist A", img: "https://source.unsplash.com/300x200/?music" },
      { title: "Song 2", artist: "Artist B", img: "https://source.unsplash.com/300x200/?concert" },
      { title: "Song 3", artist: "Artist C", img: "https://source.unsplash.com/300x200/?dj" },
      { title: "Song 4", artist: "Artist D", img: "https://source.unsplash.com/300x200/?album" },
      { title: "Song 5", artist: "Artist E", img: "https://source.unsplash.com/300x200/?singer" },
      { title: "Song 6", artist: "Artist F", img: "https://source.unsplash.com/300x200/?band" },
      { title: "Song 7", artist: "Artist G", img: "https://source.unsplash.com/300x200/?vinyl" },
      { title: "Song 8", artist: "Artist H", img: "https://source.unsplash.com/300x200/?headphones" },
    ];

    // Populate music cards
    function renderMusic() {
      musicContainer.innerHTML = "";
      sampleMusic.forEach(track => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl border border-transparent hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-transform duration-300";
        card.innerHTML = `
          <figure><img src="${track.img}" alt="Album" /></figure>
          <div class="card-body">
            <h2 class="card-title text-teal-700">${track.title}</h2>
            <p class="text-gray-600">${track.artist}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-info text-white">Play</button>
            </div>
          </div>
        `;
        musicContainer.appendChild(card);
      });
    }

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
          <input id=\"searchInput\" type=\"text\" placeholder=\"Search music...\" class=\"input input-bordered\" />
          <button id=\"searchBtn\" class=\"btn btn-success text-white\">Search</button>
          <button id=\"logoutBtn\" class=\"btn btn-error text-white\">Logout</button>
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
 