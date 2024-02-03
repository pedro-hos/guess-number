<template>
  <q-page class="page">
    <div class="q-pa">
      <KeepAlive exclude="LevelComponent">
        <component
          :is="current"
          v-bind:level="level"
          v-bind:error="error"
          @changelevel="levelUp"
          @errorMessage="showErrorMessage"
        ></component>
      </KeepAlive>

      <q-btn
        v-if="current == 'LevelComponent' && level < 5"
        class="btn"
        outline
        rounded
        color="primary"
        label="Vamos nessa"
        size="xl"
        @click="changeComponent"
      />
      <q-btn
        v-if="current == 'LevelComponent' && level == 5"
        class="btn"
        outline
        rounded
        color="primary"
        label="Finalizar"
        size="xl"
        to="/"
      />
    </div>
  </q-page>
</template>

<script>
import GameComponent from "components/GameComponent.vue";
import LevelComponent from "components/LevelComponent.vue";
import { ref } from "vue";

export default {
  name: "GamePage",
  components: {
    GameComponent,
    LevelComponent,
  },

  setup() {
    const current = ref("LevelComponent");
    const level = ref(1);
    const error = ref(false);

    const changeComponent = () => {
      current.value =
        current.value == "LevelComponent" ? "GameComponent" : "LevelComponent";
    };

    const levelUp = () => {
      level.value++;
      error.value = false;
      changeComponent();
    };

    const showErrorMessage = () => {
      error.value = true;
      changeComponent();
    };

    return {
      current,
      level,
      error,
      changeComponent,
      levelUp,
      showErrorMessage,
    };
  },
};
</script>
