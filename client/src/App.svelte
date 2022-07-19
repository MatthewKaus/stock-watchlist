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

  // GraphQL Apollo Client
  import { ApolloClient, InMemoryCache } from "@apollo/client/core";
  import { setClient } from "svelte-apollo";

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    cache: cache,
    uri: 'http://localhost:3001/graphql'
  });
  setClient(client);
</script>

<TailwindCSS />

<main>
  <Router {routes} />
  <StockView />
</main>

<style>
</style>
