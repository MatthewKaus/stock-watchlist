<script>
  import TailwindCSS from "./TailwindCSS.svelte";

  // Svelte components/pages
  import Dashboard from "./pages/Dashboard.svelte";
  import Home from "./pages/Home.svelte";
  import SignIn from "./pages/SignIn.svelte";
  import SignUp from "./pages/SignUp.svelte";
  import StockView from "./components/StockView.svelte";

  // Svelte routing
  import Router from "svelte-spa-router";
  let routes = {
    "/": Home,
    "/dashboard": Dashboard,
    "/signin": SignIn,
    "/signup": SignUp,
  };
</script>

<TailwindCSS />

<main>
  <Router {routes} />
  <!-- <StockView /> -->
</main>

<style>
</style>
