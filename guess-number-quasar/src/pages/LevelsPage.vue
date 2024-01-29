<template>
  <q-page class="">
    <div class="q-pa-md">
      <div class="column">
        <div class="col-auto">
          <q-img
            :src="image"
            spinner-color="white"
            style="height: 500px; max-width: 500px"
          />
        </div>
        <div class="col-auto">
          <q-btn
            class="btn"
            outline
            rounded
            color="primary"
            label="Vamos nessa"
            size="xl"
            to="/game"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "LevelsPage",
  setup() {
    const route = useRoute();
    const level = route.params.level;
    let image = `/src/assets/levels/level_${level}.gif`;
    return { image };
  },
};
</script>
