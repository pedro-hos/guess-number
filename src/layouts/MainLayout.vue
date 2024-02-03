<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Luke & Mike Dognautas</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        bordered
        style="background-color: #170e39"
      >
        <q-scroll-area class="fit">
          <q-list>
            <q-toolbar class="bg-primary text-white shadow-2">
              <q-toolbar-title>Menu</q-toolbar-title>
            </q-toolbar>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item :to="menuItem.to" :active="$route.path === menuItem.to.path">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section >
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const menuList = [
  {
    icon: 'home',
    label: 'Home',
    separator: true,
    to: {path: '/', exact: true}
  },
  {
    icon: 'sports_esports',
    label: 'Jogar',
    separator: true,
    to: {path: "/game", exact: false}
  },
  {
    icon: 'tips_and_updates',
    label: 'Créditos',
    separator: true,
    to: {path: "/creditos", exact: false}
  }
]

export default defineComponent({
  name: "MainLayout",

  setup () {
    return {
      drawer: ref(false),
      menuList
    }
  }
});
</script>
