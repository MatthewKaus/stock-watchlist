<script>
    import { push } from "svelte-spa-router";

    function goBack() {
        push("/dashboard");
    }

    import ImageOne from "/assets/images/Stock-One.jpg";
    import ImageTwo from "/assets/images/Stock-Two.jpg";
    import ImageThree from "/assets/images/Stock-Three.jpg";
    import ImageFour from "/assets/images/Stock-Four.jpg";
    const backgroundArray = [ImageOne, ImageTwo, ImageThree, ImageFour];
    const background =
        backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
</script>

<div class="hero min-h-screen" style="background-image: url({background});">
    <div class="hero-overlay bg-opacity-60" />
    <div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
            <h1 class="card-title">Stock Watchlist:</h1>
            <p>
                Stock Watchlist is a simple project created to learn about
                Svelte as well as testing out different types of frameworks.
            </p>
            <p>
                This site is built with the following technology: Svelte,
                GraphQL, NodeJS, ExpressJS, ChartJS, DaisyUI
            </p>
            <p />
            <div class="divider" />
            <h2 class="card-title">APIs Used:</h2>

            <a href="https://stocknewsapi.com/" target="_blank"
                ><p>StockNewsAPI</p></a
            >
            <a href="https://iexcloud.io/" target="_blank"><p>IEX Cloud</p></a>
            <div class="divider" />
            <h2 class="card-title">Future Updates:</h2>
            <p>
                As part of the name implies, Stock WatchList will soon have the
                ability to add and apend a stock to the users list
            </p>
            <div class="card-actions justify-end">
                <a href="/#/dashboard" class="btn btn-primary">Return</a>
            </div>
        </div>
    </div>
</div>
