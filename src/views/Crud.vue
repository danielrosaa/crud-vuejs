<template>
  <div class="container">
    <div class="adicionar">
      <h4 style="margin-bottom: 5px; text-align:center">Adicionar usuário</h4>
      <hr style="width:100%; margin: 0" />
      <label for="nome">Nome</label>
      <input v-model="nome" type="text" id="nome" />
      <label for="tel">Telefone</label>
      <input v-model="tel" type="text" id="tel" />
      <button @click="addUser" class="success">Adicionar</button>
    </div>
    <div class="lista">
      <ul>
        <transition-group :duration="300" name="remove">
          <li v-for="user in users" :key="user.id" class="remove-item">
            <user :user="user" />
          </li>
        </transition-group>
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
    resetForm() {
      (this.nome = ""), (this.tel = "");
    },
    addUser() {
      const user = {
        name: this.nome,
        phone: this.tel
      };
      this.$store.dispatch("addUser", user);
      this.resetForm();
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
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    flex: 1;
    input {
      margin-top: 10px;
      margin-bottom: 5px;
    }
    button,
    label {
      margin-top: 10px;
    }
  }
  .lista {
    position: relative;
    flex: 3;
  }
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
.remove-item {
  transition: all 300ms;
}
.remove-enter,
.remove-leave-to {
  opacity: 0;
}
.remove-leave-active {
  position: absolute;
  width: 100%;
}
</style>
