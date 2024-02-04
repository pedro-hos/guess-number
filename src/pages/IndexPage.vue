<template>
  <q-page class="q-pa-sm">

    <div v-if="$q.screen.md || $q.screen.xl || $q.screen.lg">

      <div class="row justify-center">
        <div class="col-5 text-center" style="margin-top: 10px; border: dashed #d5d656;">
        <span class="text-h6">
          Olá, eu sou o Luke, um dognauta! Preciso resgatar meu irmão Mike no planeta tamon Você pode me ajudar?
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

          <!--  -->
         </div>
        <div class="col">
          <q-img src="/images/game/luke.png"
          style="height: 280px; max-width: 200px; margin-left: 80px;"/>
        </div>
      </div>
      <div class="row" style="margin-top: 40px;">
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
      <!-- <div class="q-pa-md btn-box">

        <div class="row">
          <div class="col-auto">
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
          <div class="col-auto">
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
      </div> -->

    </div>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "IndexPage",
  setup() { return {} }
});
</script>
