<template>
  <div>My component</div>
</template>

<script>
export default {
  name: "LevelComponent",
  props: {
    level: {
      type: Number,
    },
  },
  setup(props) {
    console.log("props.level ----> " + props.level);
    return {};
  },
};
</script>
