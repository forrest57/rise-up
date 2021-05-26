<template>
</template>
<script>
export default {
  name: "LogOut",
  mounted() {this.$store.dispatch("auth/logout").then(this.$router.push("/"))}
};
</script>