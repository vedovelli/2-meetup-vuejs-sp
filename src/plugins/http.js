import axios from 'axios'

const http = axios.create({
  baseURL: 'https://gateway.marvel.com/',
  params: {
    apikey: 'sua chave aqui!',
  },
})

export default function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return http
      },
    },
  })
}
