<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';

const route = useRoute()
const post = reactive({})

// async function PostDetails() {
//     const url = `https://basic-blog.teamrabbil.com/api/post-details/${route.params.id}`
//     const res = await axios.get(url)
//     Object.assign(post, res.data.postDetails)
// }
// PostDetails()

onBeforeMount(async() => {
    const url = `https://basic-blog.teamrabbil.com/api/post-details/${route.params.id}`
    const res = await axios.get(url)
    Object.assign(post, res.data.postDetails)
})


</script>

<template>
    <section class="container mt-4">
        <div class="row">
            <div class="col-12 mb-3">
                <div class="card">
                    <img :src="post.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fw-bold my-3">{{ post.title }}</h5>
                        <p class="card-text">{{ post.content }}</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped></style>