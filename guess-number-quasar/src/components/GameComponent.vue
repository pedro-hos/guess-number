<template>
  <div>
    <div
      class="row justify-center"
      style="margin-top: 10px"
      v-for="(line, rowIndex) in lines"
      :key="rowIndex"
    >
      <div
        v-for="(col, colIndex) in line"
        :key="colIndex"
        class="text-center col-1"
      >
        <q-input
          input-class="text-center"
          rounded
          filled
          color="teal"
          dense
          type="number"
          bg-color="primary"
          v-if="col == '?'"
          v-model="number"
        />
        <span v-if="col != '?'">{{ col }}</span>
      </div>
    </div>

    <div class="row justify-center" style="margin-top: 10px">
      <div class="col-auto">
        <q-btn
          class="btn q-ma-sm"
          outline
          rounded
          color="positive"
          label="Confirmar"
          size="xl"
          @click="verifyValue"
        />
      </div>
      <div class="col-auto">
        <q-btn
          class="btn q-ma-sm"
          outline
          rounded
          color="warning"
          label="Resetar"
          size="xl"
          to="/"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "GameComponent",
  emits: ["changelevel"],

  setup(props, context) {
    const number = ref("");
    const lines = ref([]);

    let colMin = 1;
    let colMax = colMin + 10;
    let rowMin = 1;
    let rowMax = 2;
    let round = 1;
    let randomNumber;

    const verifyValue = () => {
      if (number.value == randomNumber) {
        if (round == 10) {
          context.emit("changelevel");
        } else {
          let index = lines.value[lines.value.length - 1].indexOf("?");
          lines.value[lines.value.length - 1][index] = number.value;

          if (checkLevel()) {
            context.emit("changelevel");
          }

          number.value = "";
          round++;
          rowMin = rowMax + 1;
          rowMax = rowMin + 1;

          buildLines();
        }
      } else {
        alert("Egua");
      }
    };

    const checkLevel = () => {
      return round == 1 || round == 3 || round == 7 ? true : false;
    };

    const randomNumbers = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    const buildLines = () => {
      for (let r = rowMin; r < rowMax; r++) {
        let columns = [];
        if (r == rowMax - 1) {
          randomNumber = randomNumbers(colMin, colMax);
        }
        for (let c = colMin; c < colMax; c++) {
          c == randomNumber ? columns.push("?") : columns.push(c);
        }

        colMin += 10;
        colMax += 10;

        lines.value.push(columns);
      }
    };

    onMounted(() => {
      buildLines();
    });

    return {
      number,
      lines,
      verifyValue,
    };
    emits: ["level"];
  },
};
</script>
