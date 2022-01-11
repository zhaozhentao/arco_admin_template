import { login } from "@/api/user"
import { removeToken, setToken } from "@/utils/auth"

const getDefaultState = () => {
  return {
    token: 'token',
    name: '',
    avatar: '',
    role: null
  }
}

const state = getDefaultState()

const actions = {
  async login({ commit }, loginForm) {
    try {
      const res = await login(loginForm)
      commit('SET_TOKEN', res.data.token)
      setToken(res.data.token)
      return true
    } catch (e) {
      return false
    }
  },

  logout({ commit }) {
    commit('RESET_STATE')
    removeToken()
  }
}

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
