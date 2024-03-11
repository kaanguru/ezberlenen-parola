<script>
  import { parolaUret } from "ezberlenen-parola";

  let parola = "";

  export function generateParola() {
    parola = parolaUret({ kelimeSayisi: 5, standart: true, araliklar: "-" });
  }
</script>

<h1>{parola}</h1>
