<template>

  <div v-if="$q.screen.md || $q.screen.xl || $q.screen.lg">
    <div class="row justify-center" style="margin-top: 10px;">
      <div class="col-6 text-center" style=" border: dashed #d5d656; margin-left: 10px;">
        <span class="text-h6">
          A sua primeira missão é me ajudar a lembrar a senha para abrir a porta do foguete! Vamos lá?
        </span>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <q-img src="/images/game/rocket.png"
        style="height: 280px; max-width: 300px"/>
      </div>
      <div class="col" style="margin-top: 80px; margin-left: 250px;">

        <div class="btn-box">
          <div class="row">
            <div class="col">
              <q-btn
                class="btn"
                outline
                rounded
                color="primary"
                label="Vamos Nessa"
                size="lg"
                @click="changeComponent"
              />
            </div>
          </div>

        </div>

       </div>
      <div class="col">
        <q-img src="/images/game/luke.png"
        style="height: 280px; max-width: 200px; margin-left: 80px;"/>
      </div>
    </div>


    <div class="row" style="margin-top: 40px;">
      <div class="col">
        <q-img src="/images/game/levels/1/footer.png"
        style="height: auto; max-width: 100%"/>
      </div>
    </div>

  </div>

  <div v-if="$q.screen.sm || $q.screen.xs"></div>

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
  setup(props, context) {
    const image = ref("");
    emits: ["changeComponent"];

    const changeComponent = () => {
      context.emit("changeComponent");
    }

    onMounted(() => {
      console.log(props.error);

      if (props.error) {
        image.value = "/levels/error.gif";
      } else {
        image.value = `/levels/level_${props.level}.gif`;
      }
    });

    return { image, changeComponent };
  },
};
</script>
