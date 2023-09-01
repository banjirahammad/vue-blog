<script setup>
import { ref, onUpdated } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';
const route = useRoute()
const categoryPost = ref([])

// async function categoryWisePost() {
//     let url = `https://basic-blog.teamrabbil.com/api/post-list/${route.params.id}`
//     let res = await axios.get(url)
//     categoryPost.value = res['data']
// }
// // categoryWisePost()

onUpdated(async () => {
    let url = `https://basic-blog.teamrabbil.com/api/post-list/${route.params.id}`
    let res = await axios.get(url)
    categoryPost.value = res['data']
});

</script>

<template>
    <section class="container mt-4">
        <div class="row">
            <div class="col-md-4 mb-3" v-for="(item, index) in categoryPost" :key="index">
                <div class="card">
                    <img :src="item.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fw-bold my-3">{{ item.title }}</h5>
                        <p class="card-text">{{ item.short }}</p>
                        <RouterLink :to="`/post-details/${item.id}`" class="btn btn-primary">Details</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>