<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <hr>
    <p><strong>Código:</strong> {{ id }}</p>
    <br>
    <button sucesso @click="irParaInicio()"> Voltar</button>
    <hr>
    <button sucesso @click="irParaInicioAssim()"> Voltar Assim</button>
  </div>
</template>
<script>
export default {
    pros: [ 'id' ],
/*     data() {
      return {
        id: this.$route.params.id
      }
    },
    watch: {
      $route(to, from) {
        this.id = to.params.id
      }
    }, */
    methods: {
      irParaInicio() {
        this.$router.push('/' )
      },
      irParaInicioAssim() {
        this.$router.push({ path: '/' })
      }
    }
}
</script>
