new Vue({
	el: '#desafio',
	data: {
    paragrafo1: false,
    paragrafo2: false,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
    },
    casasZodiaco: ['Aries','Touro','Gemeos','Câncer','Leão','Virgem','Libra','Escorpião','Sagitário','Capricórnio','Aquário','Peixes']
  },
  methods: {
    alternar() {
      this.paragrafo1 = !this.paragrafo1
      this.paragrafo2 = !this.paragrafo2
    }
  }
});
