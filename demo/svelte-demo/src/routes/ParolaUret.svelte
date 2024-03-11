<script>
  import { parolaUret } from "ezberlenen-parola";

  let parola = "";

  export function generateParola() {
    parola = parolaUret({ kelimeSayisi: 5, standart: true, araliklar: "-" });
  }
</script>

<button on:click={generateParola}>Parola Üret</button>
<h1>{parola}</h1>
