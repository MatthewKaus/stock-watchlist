<script>
  import TailwindCSS from "./TailwindCSS.svelte";

  // Svelte components/pages
  import Dashboard from "./pages/Dashboard.svelte";
  import Home from "./pages/Home.svelte";
  import SignIn from "./pages/SignIn.svelte";
  import SignUp from "./pages/SignUp.svelte";
  import About from "./pages/About.svelte";

  // Svelte routing
  import Router from "svelte-spa-router";
  let routes = {
    "/": Home,
    "/dashboard": Dashboard,
    "/signin": SignIn,
    "/signup": SignUp,
    "/about": About,
    "*": Home
  };

  // ApolloClient
  import { InMemoryCache, ApolloClient } from "@apollo/client/core";
  import { setClient } from "svelte-apollo";

  const client = new ApolloClient({
    uri: "https://stock-watchlist-server.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  setClient(client);
</script>

<TailwindCSS />

<main>
  <Router {routes} />
  <!-- <StockView /> -->
  <!-- <List /> -->
</main>

<style>
</style>
