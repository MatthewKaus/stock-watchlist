<script>
    import Auth from "../utils/auth";
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    /></svg
                >
            </label>

            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <div class="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        class="input input-bordered w-full"
                    />
                </div>
                <li><a href="">Lists</a></li>
                <li><button on:click={Auth.logout}>Logout</button></li>
            </ul>
        </div>
        <a href="/#/dashboard" class="btn btn-ghost normal-case text-xl"
            ><img src="./5198491.ico" width="30vh" /> Stock WatchList</a
        >
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            <div class="navbar-center">
                <div class="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        class="input input-bordered w-full"
                    />
                </div>
            </div>
        </ul>
    </div>
    <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            <li><a href="">Lists</a></li>
            <li><button on:click={Auth.logout}>Logout</button></li>
        </ul>
    </div>
</div>

<style></style>
