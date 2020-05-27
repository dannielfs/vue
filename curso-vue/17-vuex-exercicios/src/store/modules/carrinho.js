export default {
  state: {
    produtos: [ ],
  },
  getters: {
    valorTotal(state) {
      return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
    }
  },
  mutations: {
    // apenas muda a store
    adicionarProduto(state, payload) {
      state.produtos.push(payload)
    },
  },
  actions: {
    adicionarProduto( { commit }, payload) {
      setTimeout(() => {
        commit('adicionarProduto', payload)
      }, 1000);
    }
  }
}
