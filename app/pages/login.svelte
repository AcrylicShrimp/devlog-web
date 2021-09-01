<script>
  import Input from 'fragments/Input.svelte';
  import InputPw from 'fragments/InputPw.svelte';
  import InputWrapper from 'fragments/InputWrapper.svelte';

  let username = '';
  let usernameError = '';
  let password = '';
  let passwordError = '';

  function onUsername(event: CustomEvent<{ value: string }>) {
    username = event.detail.value;
    usernameError = '';
  }

  function onBlurUsername() {
    if (!username.trim()) {
      usernameError = 'Username is required';
      return;
    }
  }

  function onPassword(event: CustomEvent<{ value: string }>) {
    password = event.detail.value;
    passwordError = '';
  }

  function onBlurPassword() {
    if (!password) {
      passwordError = 'Password is required';
      return;
    }

    if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
      return;
    }
  }
</script>

<div class="flex flex-col justify-start content-center items-center">
  <p class="font-point text-2xl select-none md:text-4xl">Please login.</p>
  <div class="flex flex-col justify-start content-center items-center space-y-4 mt-4 w-full">
    <InputWrapper label="Username">
      <Input error={usernameError} on:value={onUsername} on:blur={onBlurUsername} />
    </InputWrapper>
    <!-- <InputWrapper label="Password">
      <InputPw error={passwordError} on:value={onPassword} on:blur={onBlurPassword} />
    </InputWrapper> -->
  </div>
</div>
