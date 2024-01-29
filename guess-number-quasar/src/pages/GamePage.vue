<template>
  <q-page class="">
    <div class="q-pa">
      <KeepAlive>
        <component :is="current" v-bind:level="level"></component>
      </KeepAlive>
      <q-btn @click="changeComponent" label="TESTE" />
    </div>
  </q-page>
</template>

<script>
import GameComponent from "components/GameComponent.vue";
import LevelComponent from "components/LevelComponent.vue";

export default {
  name: "GamePage",
  components: {
    GameComponent,
    LevelComponent,
  },

  data() {
    return {
      current: "GameComponent",
      level: 1,
    };
  },

  methods: {
    changeComponent() {
      this.current =
        this.current == "LevelComponent" ? "GameComponent" : "LevelComponent";
    },
  },
  setup() {
    return {};
  },
};
</script>
