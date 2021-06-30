<template>
  <header>
    <div class="global-header__navigation">
      <ul class="global-toolbar">
        <li v-for="(bouton,index) in boutonsMenu"
            v-bind:key="index"
        >
          <button>
            <span>{{bouton.intitule}}</span>
            <span></span>
          </button>
          <span>{{bouton.intitule}}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>

export default {
  name: "MenuHome",
  computed : {
    boutonsMenu(){
      return this.$store.getters.boutonsMenu;
    }
  }
}




</script>

<style lang="scss" scoped>

.global-header__navigation {
  background-color: $color-background-menu;

}


</style>