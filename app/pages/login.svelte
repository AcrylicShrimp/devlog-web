<script>
  import CenterWrapper from 'fragments/CenterWrapper.svelte';
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

<CenterWrapper>
  <p class="font-point font-size-36 no-select">Please login.</p>
  <div class="title-spacer" />
  <InputWrapper label="Username">
    <Input error={usernameError} on:value={onUsername} on:blur={onBlurUsername} />
  </InputWrapper>
  <div class="input-spacer" />
  <InputWrapper label="Password">
    <InputPw error={passwordError} on:value={onPassword} on:blur={onBlurPassword} />
  </InputWrapper>
</CenterWrapper>

<style lang="sass">
.title-spacer
  height: 100px

.input-spacer
  height: 32px
</style>
