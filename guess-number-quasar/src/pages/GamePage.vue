<template>
  <q-page class="">
    <div class="q-pa">
      <KeepAlive>
        <component :is="current" v-bind:level="level"></component>
      </KeepAlive>
    </div>
  </q-page>
</template>

<script>
import GameComponent from "components/GameComponent.vue";

export default {
  name: "GamePage",
  components: {
    GameComponent,
  },

  data() {
    return {
      current: "GameComponent",
      level: 4,
    };
  },

  methods: {},
  setup() {
    return {};
  },
};
</script>
