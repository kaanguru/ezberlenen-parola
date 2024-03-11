<script>
  import ParolaUret from "./ParolaUret.svelte";
  import generateParola from "./ParolaUret.svelte";
</script>

<ParolaUret />
<button on:click={generateParola}>Parola Üret</button>
