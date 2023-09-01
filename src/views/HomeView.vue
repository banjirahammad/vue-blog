<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';
const route = useRoute()

const newPostList = ref([])
// async function newPost() {
//   let url = 'https://basic-blog.teamrabbil.com/api/post-newest'
//   let res = await axios.get(url)
//   newPostList.value = res['data']
// }
// newPost()

onBeforeMount(async() => {
  let url = 'https://basic-blog.teamrabbil.com/api/post-newest'
  let res = await axios.get(url)
  newPostList.value = res['data']
})

</script>

<template>
  <section class="container mt-4">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="(item, index) in newPostList" :key="index">
        <div class="card">
          <img :src="item.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold my-3">{{ item.title }}</h5>
            <p class="card-text">{{ item.short }}</p>
            <RouterLink  :to="`/post-details/${item.id}`" class="btn btn-primary" >Details</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>