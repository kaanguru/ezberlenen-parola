<script>
  import ParolaUret, { generateParola } from "./ParolaUret.svelte";
</script>

<ParolaUret />
<button on:click={generateParola}>Parola Üret</button>
