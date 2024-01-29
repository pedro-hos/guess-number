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
          bg-color="primary"
          v-if="col == '?'"
          v-model="number"
          :id="rowIndex"
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
          to="/levels/1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "GameComponent",
  props: {
    level: {
      type: Number,
    },
  },
  setup(props) {
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
        if (round == 10) console.log("acabou");
        else {
          let index = lines.value[lines.value.length - 1].indexOf("?");
          lines.value[lines.value.length - 1][index] = number.value;

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

    const getMaxRowByLevel = () => {
      if (props.level == 1) {
        round = 1;
        rowMax = 2;
      } else if (props.level == 2) {
        round = 2;
        rowMax = 3;
      } else if (props.level == 3) {
        round = 4;
        rowMax = 5;
      } else if (props.level == 4) {
        round = 8;
        rowMax = 9;
      }
    };

    onMounted(() => {
      getMaxRowByLevel();
      buildLines();
    });

    return {
      number,
      lines,
      verifyValue,
    };
  },
};
</script>
