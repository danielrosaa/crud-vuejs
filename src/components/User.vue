<template>
  <div class="user">
    <div>
      {{ user.name }}
    </div>
    <div>
      {{ user.phone }}
    </div>
    <div class="actions">
      <button @click="showEdit = true" class="info">
        Editar
      </button>
      <button @click="removeUser(user.id)" class="danger">Remover</button>
    </div>
    <div v-if="showEdit" class="modal">
      <div @click="showEdit = false" class="fechar">x</div>
      <h4>Atualizar usuário</h4>
      <label for="nome">Nome</label>
      <input v-model="nome" type="text" id="nome" />
      <label for="tel">Telefone</label>
      <input v-model="tel" type="text" id="tel" />
      <button @click="editUser({ nome, tel }, user.id)" class="success">
        Alterar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      showEdit: false,
      nome: null,
      tel: null
    };
  },
  methods: {
    removeUser(id) {
      this.$store.dispatch("removeUser", id);
    },
    editUser(update, id) {
      this.$store.dispatch("editUser", [update, id]);
      this.showEdit = false;
    }
  },
  mounted() {
    this.nome = this.user.name;
    this.tel = this.user.phone;
  }
};
</script>

<style lang="scss" scoped>
.user {
  height: 50px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 0 50px;
  border-bottom: 1px solid lightgray;
  transition: all 300ms;
  &:hover {
    background: #eee;
  }
  div {
    flex: 2;
    // margin-right: 30px;
    &.actions {
      flex: 1;
      text-align: right;
      button:first-child {
        margin-right: 10px;
      }
    }
  }
}
.modal {
  position: fixed;
  display: grid;
  top: 15vh;
  border-radius: 5px;
  padding: 30px;
  width: 30vw;
  background: white;
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.3);
  input,
  label {
    margin-bottom: 10px;
  }
  button,
  label {
    margin-top: 10px;
  }
  .fechar {
    position: absolute;
    right: 10px;
    padding: 10px;
    cursor: pointer;
  }
}
</style>
