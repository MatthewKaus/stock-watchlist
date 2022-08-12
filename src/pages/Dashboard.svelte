<script>
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
    import StockView from "../components/StockView.svelte";
    import List from "../components/List.svelte";

    let symbol = "aapl";


</script>

<div>
    <NavBar bind:stock={symbol} />
    <div class="flex">
        <div class="flex flex-col w-full border-opacity-50">
            <div
                class="grid md:min-h-[1/2] card bg-base-300 rounded-box place-items-center"
            >
                {symbol}
                <StockView {symbol} />
            </div>
            <div class="divider" />
            <div class="grid card bg-base-300 rounded-box place-items-center">
                <List {symbol} />
            </div>
        </div>
    </div>
    <Footer />
</div>

<style></style>
