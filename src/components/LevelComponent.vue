<template>

  <div v-if="$q.screen.md || $q.screen.xl || $q.screen.lg">
    <div class="row justify-center" style="margin-top: 10px;">
      <div class="col-6 text-center" style=" border: dashed #d5d656; margin-left: 10px;">
        <span class="text-h6">
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
        <q-img :src="`/images/game/levels/${level}/right.png`"
        style="height: 280px; max-width: 200px; margin-left: 80px;"/>
      </div>
    </div>


    <div class="row" style="margin-top: 40px;">
      <div class="col">
        <q-img :src="`/images/game/levels/${level}/footer.png`"
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

    const text = ref("");

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
      text: "Conseguimos! nossa missão agora é encontrar as coordenadas para o planeta tamon, onde o meu irmão mike está."
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
      } else {
        text.value = levelObject.value.get("" + props.level).text;
      }
    });

    return { levelObject, text, changeComponent };
  },
};
</script>
