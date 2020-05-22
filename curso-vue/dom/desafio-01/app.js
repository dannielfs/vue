new Vue({
    el: '#desafio',
    data: {
        nome: 'Danniel',
        idade: 34,
        imagem: 'https://www.google.com/logos/doodles/2020/fathers-day-2020-germany-6753651837108393-2x.jpg'
    },
    methods: {
        multiplicaIdade() {
            return this.idade * 3
        },
        rand() {
            return Math.random()
        }
    }
})