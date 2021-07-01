<template>
  <header>
    <div class="global-header__navigation">
      <ul class="global-toolbar">
        <li v-for="(bouton,index) in boutonsMenu"
            v-bind:key="index"
            class="global-toolbar__item"
        >
          <button class="global-toolbar__button">
            <span>
              <img v-if="toTheType(bouton.logo) == 'png' " class="global-toolbar__img"  :src=bouton.logo>
              <svg v-if="toTheType(bouton.logo) == 'svg' " >
                <image :href=bouton.logo></image>
              </svg>
            </span>
           </button>
          <span class="global-toolbar__span">{{bouton.intitule}}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import toType from "@/functions/toType";

export default {
  name: "MenuHome",
  computed : {
    boutonsMenu(){
      return this.$store.getters.boutonsMenu;
    }
  },
  methods : {
    toTheType( object ) {
      return toType( object );
    }
  }
}




</script>

<style lang="scss" scoped>

.global-header__navigation {
  background-color: $color-background-menu;
  color: $color-logo;
  display: inline-block;
}

.global-toolbar {
  list-style: none;
  margin: 50px ;
  padding: 0;
}

.global-toolbar button {
  cursor:pointer;
}

.global-toolbar__item{
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;


}
.global-toolbar__span {
  text-transform: uppercase;
  font-size:0.85rem;
}

.global-toolbar svg {
  position: center;
  fill: $color-background-menu;
  width: 90px;
  height: 90px;
}

.global-toolbar__img {
  width: 90px;
  height: 90px;
}

.global-toolbar svg image{
  width: 100%;
  height: 100%;
}
</style>