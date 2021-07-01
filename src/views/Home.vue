<template>
  <div class="global-container">
    <header-home class="global__navbar"></header-home>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from "@/components/HeaderHome";

export default {
  name: 'Home',
  components: {
    HeaderHome
  }
}
</script>

<style scoped>

.global-container {
  display: flex;
  margin: 5% auto auto 0;
  position: relative;
  max-width: 1240px;
}

.global__navbar{
  width: 25%;
}
</style>
