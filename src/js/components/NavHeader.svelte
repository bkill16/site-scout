<script>
  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
</script>

<nav class="nav-header">
  <ul class="sidebar">
    <li on:click={hideSidebar}>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
          fill="#e8eaed"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </button>
    </li>
    <li><a href="/src/index.html">Home</a></li>
    <li><a href="/search/">Search<br>Campsites</a></li>
  </ul>
  <ul>
    <li><a href="/src/index.html">Site Scout</a></li>
    <li class="hideOnMobile"><a href="/src/index.html">Home</a></li>
    <li class="hideOnMobile"><a href="/search/">Search Campsites</a></li>
    <li class="hideOnDesktop" on:click={showSidebar}>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
          fill="#e8eaed"
        >
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        </svg>
      </button>
    </li>
  </ul>
</nav>

<style>
  .nav-header {
    background-color: #242614;
  }

  .nav-header ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .nav-header ul li {
    height: 100px;
  }

  .nav-header ul li a {
    height: 100%;
    padding: 0 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.9em;
    color: #b0bebf;
  }

  .nav-header ul li a:hover {
    background-color: #b0bebf;
    color: #242614;
  }

  .nav-header ul li:first-child {
    margin-right: auto;
  }

  .nav-header .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    z-index: 999;
    background-color: #242614;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .nav-header .sidebar li {
    width: 100%;
  }

  .nav-header .sidebar li a {
    width: 100%;
    display: block;
    text-align: left;
  }

  .hideOnDesktop {
    display: none;
  }

  button {
    background-color: #242614;
    border: none;
    margin: 15px;
  }

  @media (max-width: 800px) {
    .hideOnMobile {
      display: none;
    }

    .hideOnDesktop {
      display: flex;
    }
  }
</style>
