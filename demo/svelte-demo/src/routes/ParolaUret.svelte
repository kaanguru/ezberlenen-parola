<script>
  import { parolaUret } from "ezberlenen-parola";

  let parola = "";

  function generateParola() {
    parola = parolaUret({ standart: true, araliklar: "-" });
  }
</script>

<button on:click={generateParola}>Parola Üret</button>
<h1>{parola}</h1>
