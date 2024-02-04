<template>
  <q-page class="q-pa-sm" :style="[(level == 5) ? 'background-color: #03A2B7' : '']">

    <div class="q-pa">
      <KeepAlive exclude="LevelComponent">
        <component
          :is="current"
          v-bind:level="level"
          v-bind:error="error"
          @changelevel="levelUp"
          @errorMessage="showErrorMessage"
          @changeComponent="changeComponent"
        ></component>
      </KeepAlive>
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
