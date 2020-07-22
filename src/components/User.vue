<template>
  <div class="user">
    <div>
      {{ user.name }}
    </div>
    <div>
      {{ user.phone }}
    </div>
    <div class="actions">
      <button class="info">Editar</button>
      <button @click="removeUser(user.id)" class="danger">Remover</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    removeUser(id) {
      this.$store.dispatch("removeUser", id);
    }
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
</style>
