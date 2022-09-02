<script>
    import Auth from "../utils/auth";

    import ImageOne from "/assets/images/Stock-One.jpg";
    import ImageTwo from "/assets/images/Stock-Two.jpg";
    import ImageThree from "/assets/images/Stock-Three.jpg";
    import ImageFour from "/assets/images/Stock-Four.jpg";
    const backgroundArray = [ImageOne, ImageTwo, ImageThree, ImageFour];
    const background =
        backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
</script>

<div>
    <div class="hero min-h-screen" style="background-image: url({background});">
        <div class="hero-overlay bg-opacity-60" />
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Stock WatchList</h1>
                <p class="mb-5">
                    Stock WatchList is an app that allows you to look up stock
                    names, to be presented both a visual graph of the stock as
                    well as the current news articles of that stock.
                </p>

                {#if Auth.loggedIn()}
                    <a href="/#/Dashboard" class="btn btn-primary">Return</a>
                {:else}
                    <a href="/#/signin" class="btn btn-primary">Get Started</a>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    * {
        overflow: hidden;
    }
</style>
