<template>
  <small class="is-size-7 has-text-weight-light is-transparent" @click="tellId" style="cursor: pointer;">
    <img class="image is-24x24 mr-1" :src="this.displayUser.img" />
    {{ this.displayUser.username }}
  </small>
</template>
<script>
export default {
  name: "UserPortrait",
  props: {
    displayUser: Object,
  },
  data(){
    const imgArr= ["https://i.ibb.co/XtYLhxp/upvote-icon.png","https://i.ibb.co/dtCnnm6/vuejs-icon.png"]
  },
  methods: {
      tellId(){
          console.log(this.displayUser.id)
      }
  },

};
</script>