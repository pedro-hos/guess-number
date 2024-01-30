<template>
  <q-page>
    <div class="q-pa">
      <KeepAlive exclude="LevelComponent">
        <component
          :is="current"
          v-bind:level="level"
          @changelevel="levelUp"
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
import { useRouter } from "vue-router";

export default {
  name: "GamePage",
  components: {
    GameComponent,
    LevelComponent,
  },

  setup() {
    const current = ref("LevelComponent");
    const level = ref(1);
    const router = useRouter();

    const changeComponent = () => {
      current.value =
        current.value == "LevelComponent" ? "GameComponent" : "LevelComponent";
    };

    const levelUp = () => {
      level.value++;
      changeComponent();
    };

    return {
      current,
      level,
      changeComponent,
      levelUp,
    };
  },
};
</script>
