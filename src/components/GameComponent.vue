<template>

    <q-dialog v-model="alert" v-if="$q.platform.is.mobile">
      <q-card class="bg-primary text-white">
        <q-card-section>
          <div class="text-h6">Dica!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Para uma melhor experiência, jogue com o aparelho na horizontal.</p>
          <q-img src="images/cel_orientation.png" style="width: 100px;"/>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <audio loop ref="audio">
      <source src="/audio/game_music.mp3" type="audio/mpeg">
    </audio>

    <div class="row" >
      <div class="col-10">
        <span :class="($q.screen.lg || $q.screen.md  || $q.screen.xl ) ? 'text-h5': 'text-h6'">
          Fase: {{ level }}
        </span>
      </div>
      <div class="col-2">
        <q-btn round outline color="light" class="q-ma-xs" :icon="playIcon" @click="playPause"/>
        <q-btn round outline color="light" class="q-ma-xs" :icon="muteIcon" @click="muteUnmute"/>
      </div>
    </div>
    <hr>
    <div
      class="row justify-center"
      style="margin-top: 20px"
      v-for="(line, rowIndex) in lines"
      :key="rowIndex"
    >
      <div
        v-for="(col, colIndex) in line"
        :key="colIndex"
        class="text-center col"
      >
        <q-input
          autofocus
          dense
          :outlined="($q.screen.lg || $q.screen.md  || $q.screen.xl )"
          input-class="text-center"
          :class="($q.screen.lg || $q.screen.md  || $q.screen.xl ) ? 'text-h4': 'text-subtitle1'"
          color="primary"
          type="number"
          bg-color="white"
          v-if="col == '?'"
          v-model.number="number"
          maxlength="2"
          @keyup.enter="verifyValue"
        />
        <span :class="($q.screen.lg || $q.screen.md  || $q.screen.xl ) ? 'text-h4': 'text-subtitle1'" v-if="col != '?'">
          {{ col }}
        </span>
      </div>
    </div>

    <div class="row justify-center" style="margin-top: 10px">
      <div class="col-auto">
        <q-btn
          class="btn q-ma-sm"
          outline
          :disable="number == ''"
          rounded
          color="positive"
          label="Confirmar"
          size="xl"
          @click="verifyValue"
        />
      </div>
    </div>
    <hr>
</template>

<script>
import { ref, onMounted, onUpdated, watch } from "vue";
import { useQuasar } from 'quasar'

export default {
  name: "GameComponent",
  emits: ["changelevel", "errorMessage"],
  props: { level: Number },

  setup(props, context) {
    const number = ref("");
    const lines = ref([]);
    const audio = ref(null);
    const playState = ref('play');
    const alert = ref(true);
    const $q = useQuasar()

    emits: ["changelevel"];

    let colMin = 1;
    let colMax = colMin + 10;
    let rowMin = 1;
    let rowMax = 2;
    let round = 1;
    let randomNumber;

    const playIcon = ref("play_arrow");
    const muteIcon = ref("volume_up");

    watch(() => $q.appVisible, val => {
      if(val && playState.value == "play") {
        audio.value.play();
      } else {
        audio.value.pause();
      }
    })

    const playPause = () => {

      if(playState.value == "play") {
        playIcon.value = "pause";
        audio.value.pause()
        playState.value = "pause";
      } else {
        playIcon.value = "play_arrow";
        audio.value.play();
        playState.value = "play";
      }
    }

    const muteUnmute = () => {
      muteIcon.value = muteIcon.value == "volume_up" ? "volume_off" : "volume_up";
      audio.value.muted = audio.value.muted ? false : true;
    }

    const verifyValue = () => {
      if (number.value == randomNumber) {
        if (round == 10) {
          context.emit("changelevel");
        } else {
          let index = lines.value[lines.value.length - 1].indexOf("?");
          lines.value[lines.value.length - 1][index] = number.value;

          if (verifyLevel()) {
            context.emit("changelevel");
          }

          number.value = "";
          round++;
          rowMin = rowMax + 1;
          rowMax = rowMin + 1;

          buildLines();
        }
      } else {
        number.value = "";
        context.emit("errorMessage");
      }
    };

    const verifyLevel = () => {
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
      audio.value.play();
      audio.value.volume = 0.10;
      buildLines();
    });

    onUpdated(() => {
      if(playState.value == "play") {
        audio.value.play();
      }
    });

    return {
      number,
      lines,
      audio,
      playIcon,
      muteIcon,
      alert,
      muteUnmute,
      playPause,
      verifyValue,
    };
  },
};
</script>
