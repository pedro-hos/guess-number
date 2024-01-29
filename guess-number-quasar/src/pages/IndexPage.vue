<template>
  <q-page class="flex flex-center">
    <div class="q-pa btn-box">
      <div class="row">
        <div class="col-auto">
          <q-btn
            class="btn"
            outline
            rounded
            color="primary"
            label="Jogar"
            size="xl"
            to="/levels/1"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-auto">
          <q-btn
            class="btn"
            outline
            rounded
            color="primary"
            label="Créditos"
            size="xl"
            to="/creditos"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
