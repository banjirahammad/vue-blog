<script setup>
import { ref, onBeforeMount } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

import axios from 'axios';

const catList = ref([])

// async function categories() {
//   let url = 'https://basic-blog.teamrabbil.com/api/post-categories'
//   let res = await axios.get(url)
//   catList.value = res['data']
// }
// categories()

onBeforeMount(async() => {
    let url = 'https://basic-blog.teamrabbil.com/api/post-categories'
    let res = await axios.get(url)
    catList.value = res['data']
})

</script>

<template>
  <section>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand text-uppercase" to="/">Blog</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="(item, index) in catList" :key="index">
              <RouterLink class="nav-link" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  </section>

  <RouterView />
</template>

<style scoped></style>
