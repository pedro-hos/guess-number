<template>
  <div class="q-pa-md">
    <div class="column">
      <div class="col-auto">
        <q-img
          :src="image"
          spinner-color="white"
          style="height: 500px; max-width: 500px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "LevelComponent",
  props: {
    level: {
      type: Number,
      default: 1,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const image = ref("");

    onMounted(() => {
      console.log(props.error);

      if (props.error) {
        image.value = "/levels/error.gif";
      } else {
        image.value = `/levels/level_${props.level}.gif`;
      }
    });

    return { image };
  },
};
</script>
