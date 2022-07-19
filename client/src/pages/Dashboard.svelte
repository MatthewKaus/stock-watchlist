<script>
    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";
    import StockView from "../components/StockView.svelte";
    import List from "../components/List.svelte";
</script>

<div>
    <NavBar />

    <div class="flex flex-col w-full border-opacity-50">
        <div class="carousel">
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img
                        src="https://placeimg.com/800/200/arch"
                        class="w-full"
                    />
                    <div
                        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                    >
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img
                        src="https://placeimg.com/800/200/arch"
                        class="w-full"
                        alt="bruh"
                    />
                    <div
                        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                    >
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img
                        src="https://placeimg.com/800/200/arch"
                        class="w-full"
                    />
                    <div
                        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                    >
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img
                        src="https://placeimg.com/800/200/arch"
                        class="w-full"
                    />
                    <div
                        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                    >
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="divider" />

        <div class="flex w-full">
            <List />
            <div class="divider divider-horizontal" />
            <div
                class="grid  flex-grow card bg-base-300 rounded-box place-items-center"
            >
                <StockView />
            </div>
        </div>
    </div>
    <Footer />
</div>

<style></style>
