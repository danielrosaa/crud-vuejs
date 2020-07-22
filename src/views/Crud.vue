<template>
  <div class="container">
    <div class="adicionar">
      <h4>Adicionar usuário</h4>
      <label for="nome">Nome</label><br />
      <input v-model="nome" type="text" id="nome" />
      <label for="tel">Telefone</label><br />
      <input v-model="tel" type="text" id="tel" />
      <button @click="addUser" class="success">Adicionar</button>
    </div>
    <div class="lista">
      <ul>
        <li v-for="user in users" :key="user.id">
          <user :user="user" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import User from "@/components/User.vue";
export default {
  components: { User },
  computed: {
    ...mapState(["users"])
  },
  data() {
    return {
      nome: "",
      tel: ""
    };
  },
  methods: {
    addUser() {
      const user = {
        name: this.nome,
        phone: this.tel
      };
      this.$store.dispatch("addUser", user);
    }
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 80%;
  max-width: 960px;
  display: flex;

  .adicionar {
    flex: 1;
  }
  .lista {
    flex: 3;
  }
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
</style>
