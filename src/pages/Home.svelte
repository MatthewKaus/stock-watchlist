<script>
    import ImageOne from "/assets/Stock-One.jpg";
    import ImageTwo from "/assets/Stock-Two.jpg";
    import ImageThree from "/assets/Stock-Three.jpg";
    // import ImageFour from "/assets/Stock-Four.jpg";
    import Footer from "../components/Footer.svelte";

    const backgroundArray = [ImageOne, ImageTwo, ImageThree];

    const background =
        backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
</script>

<div class="hero min-h-screen" style="background-image: url({background});">
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Stock WatchList</h1>
            <p class="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid enim sed molestiae debitis placeat perspiciatis
                reiciendis error nemo laudantium numquam quia, nam
            </p>
            <button class="btn btn-primary">Get Started</button>
        </div>
    </div>
</div>
<Footer />
