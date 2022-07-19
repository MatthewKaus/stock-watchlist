<script>
    import { mutation } from "svelte-apollo";
    import { ADD_USER } from "../utils/mutations";

    const singUpForm = () => alert("You submit the form") ;
</script>

<div>
    <div class="hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Sign up now!</h1>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                </p>
            </div>
            <div
                class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
                <div class="card-body">
                    //////
                    <form on:submit|preventDefault={singUpForm}>
                        <div class="form-control">
                            <label for="signup" class="label">
                                <span class="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="username"
                                class="input input-bordered"
                                id="username"
                            />
                        </div>
                        <div class="form-control">
                            <label for="signup" class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                class="input input-bordered"
                                id="email"
                            />
                        </div>
                        <div class="form-control">
                            <label for="signup" class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                class="input input-bordered"
                                id="password"
                            />
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary"
                                >Sign Up</button
                            >
                        </div>
                    </form>
                    //////

                    <hr />
                    <div>
                        <label for="signup" class="label">
                            <p>
                                Already a user?
                                <a
                                    href="/#/signin"
                                    class="label-text-alt link link-hover"
                                    >LOGIN</a
                                >
                            </p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
