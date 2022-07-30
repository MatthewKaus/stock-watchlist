<script>
    import Auth from "../utils/auth";

    const logOut = () => {
        Auth.logout();
    };
</script>

<div>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a href="/#/dashboard" class="btn btn-ghost normal-case text-xl"
                ><img src="./5198491.ico" width="30vh" /> Stock WatchList</a
            >
        </div>
        <div class="navbar-center">
            <div class="form-control">
                <input
                    type="text"
                    placeholder="Search"
                    class="input input-bordered w-full"
                />
            </div>
        </div>
        <div class="navbar-end">
            <ul class="menu menu-horizontal p-0">
                <li><a href="">Lists</a></li>
                <li><button on:click={logOut}>Logout</button></li>
            </ul>
        </div>
    </div>
</div>

<style></style>
