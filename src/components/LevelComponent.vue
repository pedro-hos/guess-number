<template>
  <div v-if="$q.screen.md || $q.screen.xl || $q.screen.lg">
    <div class="row justify-center" style="margin-top: 10px;">
      <div class="col-6 text-center" :style="[level == 5 ? 'border: dashed #4e7f1c;' : 'border: dashed #d5d656;', 'margin-left: 10px;']">
        <span class="text-h6" :style="[level == 5 ?  'color: black;' : '']">
          {{text}}
        </span>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <q-img :src="`/images/game/levels/${level}/left.png`"
        style="height: 280px; max-width: 300px"/>
      </div>
      <div class="col" style="margin-top: 80px; margin-left: 250px;">

        <div class="btn-box">
          <div class="row">
            <div class="col">
              <q-btn v-if="level < 5"
                class="btn"
                outline
                rounded
                color="primary"
                label="Vamos Nessa"
                size="lg"
                @click="changeComponent"
              />
              <q-btn
                v-if="level == 5"
                class="btn"
                outline
                rounded
                color="primary"
                label="Finalizar"
                size="xl"
                to="/"
              />
            </div>
          </div>

        </div>

       </div>
      <div class="col">
        <q-img :src="`/images/game/levels/${level}/right.png`"
        style="height: 280px; max-width: 300px; margin-left: 80px;"/>
      </div>
    </div>


    <div class="row" style="margin-top: 85px;">
      <div class="col">
        <q-img :src="`/images/game/levels/${level}/footer.png`"
        style="height: auto; max-width: 100%"/>
      </div>
    </div>

  </div>

  <div v-if="$q.screen.sm || $q.screen.xs">

    <div class="row justify-center items-center content-center">
      <q-img :src="smallScreen"
      style="height: 380px; max-width: 300px"/>
    </div>

    <div class="row justify-center items-center content-center">
          <div class="btn-box">
            <div class="row">
              <div class="col">
                <q-btn v-if="level < 5"
                class="btn"
                outline
                rounded
                color="primary"
                label="Vamos Nessa"
                size="lg"
                @click="changeComponent"
              />
              <q-btn
                v-if="level == 5"
                class="btn"
                outline
                rounded
                color="primary"
                label="Finalizar"
                size="xl"
                to="/"
              />
            </div>
        </div>
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
  setup(props, context) {

    const text = ref("");
    const smallScreen = ref("");

    let levelMap = new Map();

    levelMap.set("1", {
      level: 1,
      text: "A SUA PRIMEIRA MISSÃO É ME AJUDAR A LEMBRAR A SENHA PARA ABRIR A PORTA DO FOGUETE! VAMOS LÁ?"
    });

    levelMap.set("2", {
      level: 2,
      text: "Belo trabalho! agora você precisa me ajudar a ligar o foguete, será que conseguimos adivinhar o código?"
    });

    levelMap.set("3", {
      level: 3,
      text: "Conseguimos! nossa missão agora é encontrar as coordenadas para o planeta tamon, onde o meu irmão mike está. Você me ajudar?"
    });

    levelMap.set("4", {
      level: 4,
      text: "maravilha, encontramos o mike! agora precisamos voltar para o planeta terra. Você pode nos ajudar a encontrar as coordenadas?."
    });

    levelMap.set("5", {
      level: 5,
      text: "muito obrigado! agora estamos sãos e salvos em casa"
    });

    levelMap.set("error", {
      text: "Parece que esse não é o número certo. Vamos tentar novamente?"
    });

    const levelObject = ref(levelMap);

    emits: ["changeComponent"];

    const changeComponent = () => {
      context.emit("changeComponent");
    }

    onMounted(() => {

      if (props.error) {
        text.value = levelObject.value.get("error").text;
        smallScreen.value = `images/game/levels/error.png`;
      } else {
        text.value = levelObject.value.get("" + props.level).text;
        smallScreen.value = `images/game/levels/${props.level}/level_${props.level}.png`;
      }
    });

    return { levelObject, text, smallScreen, changeComponent };
  },
};
</script>
