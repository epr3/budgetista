<!-- routes/signup/+page.svelte -->
<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<h1>Sign up</h1>
<form method="post" use:enhance>
  <label for="nickname">Nickname</label>
  <input name="nickname" id="nickname" /><br />
  <label for="email">Email</label>
  <input name="email" id="email" type="email" /><br />
  <label for="password">Password</label>
  <input type="password" name="password" id="password" /><br />
  <button type="submit">Submit</button>
</form>
<a href="/login">Sign in</a>
