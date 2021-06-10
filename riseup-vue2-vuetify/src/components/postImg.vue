<template>
      <figure class="media-left">

        <img class="image is-64x64" :src="image" />
      </figure>

</template>
<script>

export default {
   name: "PostImg",
   props:{
       image: ""
   }
}
</script>
