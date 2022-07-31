<script>
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";
    import { push } from "svelte-spa-router";

    import { mutation } from "svelte-apollo";
    import { ADD_USER } from "../utils/mutations";
    import Auth from "../utils/auth";

    const addUser = mutation(ADD_USER);

    function nextPage() {
        push("/dashboard");
    }

    async function submit(values) {
        try {
            const data = await addUser({ variables: { ...values } });
            Auth.login(data.data.addUser.token);
            nextPage();
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    const { form, errors, state, handleChange, handleSubmit } = createForm({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object().shape({
            username: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values) => {
            submit(values);
        },
    });
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
                    <form on:submit|preventDefault={handleSubmit}>
                        <div class="form-control">
                            <label for="signup" class="label">
                                <span class="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="username"
                                class="input input-bordered"
                                id="username"
                                name="username"
                                on:change={handleChange}
                                on:blur={handleChange}
                                bind:value={$form.username}
                            />
                            {#if $errors.username}
                                <small>{$errors.username}</small>
                            {/if}
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
                                name="email"
                                on:change={handleChange}
                                on:blur={handleChange}
                                bind:value={$form.email}
                            />
                            {#if $errors.email}
                                <small>{$errors.email}</small>
                            {/if}
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
                                name="password"
                                on:change={handleChange}
                                on:blur={handleChange}
                                bind:value={$form.password}
                            />
                            {#if $errors.password}
                                <small>{$errors.password}</small>
                            {/if}
                        </div>

                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary"
                                >Sign Up</button
                            >
                        </div>
                    </form>
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
