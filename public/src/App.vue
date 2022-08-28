<template>
    <div class="container">
        <Header />
        <Categories />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "@/components/ui/Header.vue";
import Categories from '@/components/ui/Categories.vue'

export default {
    name: "App",
    components: {
        Header,
        Categories
    },
};
</script>
