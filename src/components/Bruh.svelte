<!-- <script>
    import AutoComplete from "simple-svelte-autocomplete";
    import { stockData } from "../../src/utils/stockJson";

    let selectedStockObject = stockData[0];
    let highlightedStockObject;
    let selectedStockValue;
</script>

Selected stock: {selectedStockObject.ticker}
<form>
    <AutoComplete
        items={stockData}
        bind:selectedItem={selectedStockObject}
        bind:highlightedItem={highlightedStockObject}
        bind:value={selectedStockValue}
        labelFieldName="name"
        valueFieldName="id"
        keywordsFunction={(stock) => stock.name + " " + stock.ticker}
    />
</form> -->
