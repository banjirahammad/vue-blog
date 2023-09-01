<script setup>
import { ref } from 'vue';

import axios from 'axios';

const newPostList = ref([])
async function newPost() {
  let url = 'https://basic-blog.teamrabbil.com/api/post-newest'
  let res = await axios.get(url)
  newPostList.value = res['data']
}
newPost()


</script>

<template>
  <section class="container mt-4">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="(item, index) in newPostList" :key="index">
        <div class="card">
          <img :src="item.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.short }}</p>
            <a href="#" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    </div>


  </section>

  <RouterView />
</template>

<style scoped></style>