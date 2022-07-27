<script>
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
    import StockView from "../components/StockView.svelte";
    import List from "../components/List.svelte";
</script>

<div>
    <NavBar />

    <div class="flex flex-col w-full lg:flex-row">
        <div
            class="grid flex-grow card bg-base-300 rounded-box place-items-center"
        >
            <StockView />
        </div>
        <div class="divider lg:divider-horizontal" />
        <div
            class="grid flex-grow card bg-base-300 rounded-box place-items-center"
        >
            <List />
        </div>
    </div>

    <Footer />
</div>

<style></style>
