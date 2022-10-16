<script>
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { push } from "svelte-spa-router";

  import { mutation } from "svelte-apollo";
  import { gql } from "apollo-boost";
  import Auth from "../utils/auth";
  import { LOGIN_USER } from "../utils/mutations";

  const getUser = mutation(LOGIN_USER);

  const nextPage = () => {
    push("/dashboard");
  };

  const submit = async (values) => {
    try {
      const data = await getUser({ variables: { ...values } });
      Auth.login(data.data.login.token);
      nextPage();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(state.subscribe);
      submit(values);
    },
  });
</script>

<div>
  <div class="hero min-h-screen bg-base-200 ">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          To begin, please enter your credentials into the login form!
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form on:submit|preventDefault={handleSubmit}>
            <div class="form-control">
              <label class="label">
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
              <label class="label">
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

              <!-- <label class="label">
                                <a
                                    href="#"
                                    class="label-text-alt link link-hover"
                                    >Forgot password?</a
                                >
                            </label> -->
            </div>
            <div class="form-control mt-6 ">
              <button href="/#/dashboard" class="btn btn-primary">Login</button>
            </div>
          </form>
          <hr />
          <div>
            <label class="label">
              <p>
                Not a user?
                <a href="/#/signup" class="label-text-alt link link-hover"
                  >SIGN UP</a
                >
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
