<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

import axios from 'axios';

const catList = ref([])

async function categories() {
  let url = 'https://basic-blog.teamrabbil.com/api/post-categories'
  let res = await axios.get(url)
  catList.value = res['data']
}
categories()

const newPostList = ref([])
async function newPost() {
  let url = 'https://basic-blog.teamrabbil.com/api/post-newest'
  let res = await axios.get(url)
  newPostList.value = res['data']
}
newPost()






</script>

<template>
  <section >
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Blog</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="(item, index) in catList" :key="index">
              <RouterLink class="nav-link" to="{{ item.name }}">{{ item.name }}</RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  </section>

  <section class="container mt-4" >
    <div class="row">
      <div class="col-md-4 mb-3"  v-for="(item, index) in newPostList" :key="index">
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
