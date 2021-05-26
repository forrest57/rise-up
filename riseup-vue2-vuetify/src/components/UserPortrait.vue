<template>
  <small class="is-size-7 has-text-weight-light is-transparent ml-0 pl-0" @click="tellId" style="cursor: pointer;">
    <img class="image is-24x24 mr-1 ml-0 " :src="userImg" />
    {{ this.displayUser.username }}
  </small>
</template>
<script>
import { userPFPs } from '../logic';
export default {
  name: "UserPortrait",
  props: {
    displayUser: Object,
  },
  
  methods: {
      tellId(){
          console.log(this.displayUser.id)
      }
  },
  computed:{
    userImg(){
      return userPFPs[this.displayUser.img]
    }
  }

};
</script>