<template>
  <q-page class="q-pa-sm">

    <audio autoplay>
      <source src="/audio/intro.mp3" type="audio/mpeg">
    </audio>

    <div v-if="$q.screen.md || $q.screen.xl || $q.screen.lg">

      <div class="row justify-center">
        <div class="col-5 text-center" style="margin-top: 10px; border: dashed #d5d656;">
          <span class="text-h6">
            Olá, eu sou o Luke, um dognauta! Preciso resgatar meu irmão Mike no planeta tamon. Você poderia me ajudar a descobrir os números que estão faltando?
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
                  icon="sports_esports"
                  color="primary"
                  label="Jogar"
                  size="xl"
                  to="/game"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <q-btn
                  class="btn"
                  icon="tips_and_updates"
                  outline
                  rounded
                  color="primary"
                  label="Créditos"
                  size="xl"
                  to="/creditos"
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
      <div class="row" style="margin-top: 45px;">
        <div class="col">
          <q-img src="/images/background/sand_2.png"
          style="height: auto; max-width: 100%"/>
        </div>
      </div>
    </div>

    <div v-if="$q.screen.sm || $q.screen.xs">

      <div class="row justify-center items-center content-center">
          <q-img src="/images/game/levels/initial.png"
          style="height: 380px; max-width: 300px"/>
      </div>

      <div class="row justify-center items-center content-center">
        <div class="btn-box">
        <div class="row">
          <div class="col">
        <q-btn
              class="btn"
              outline
              rounded
              color="primary"
              label="Jogar"
              size="xl"
              to="/game"
            />
          </div>
          </div>
            <div class="row">
              <div class="col">
                <q-btn
                  class="btn"
                  outline
                  rounded
                  color="primary"
                  label="Créditos"
                  size="xl"
                  to="/creditos"
                />
              </div>
            </div>
    </div>
  </div>
</div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  //setup() {

    // const audio = ref(null);
    // const playIcon = ref("play_arrow");
    // const muteIcon = ref("volume_up");
    // let playState = 'play';

    // const playPause = () => {
    //   if(playState == "play") {
    //     playIcon.value = "pause";
    //     audio.value.pause()
    //     playState = "pause";
    //   } else {
    //     playIcon.value = "play_arrow";
    //     audio.value.play()
    //     playState = "play";
    //   }
    // }

    // const muteUnmute = () => {
    //   muteIcon.value = muteIcon.value == "volume_up" ? "volume_off" : "volume_up";
    //   audio.value.muted = audio.value.muted ? false : true;
    // }

    // return {audio, muteIcon, playIcon, playPause, muteUnmute}
  //}
});
</script>
