new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        clicar() {
            return alert('teste')
        },
        setVal(event) {
            this.valor = event.target.value
        }
    }
})