<template>
<div class="container mx-auto">
    <div>
        <router-link to="/product/:id">Product-ditails</router-link>
    </div>
    <div class="flex items-center justify-between flex-wrap">
        <div v-for="product of products"  :key="product.id">
            <ProductItem 
                :product="product" 
                @click="redirectDetails(product.id)"
            />
        </div>
    </div>
</div>  
</template>
<!-- class="xs:w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 p-3" -->
<script setup>
import { useProduct } from '../composables';
import { useRouter } from 'vue-router'

import ProductItem from '../components/ProductItem.vue';

const {
    products,
    product,
    onMounted
} = useProduct()

const router = useRouter()

function redirectDetails(id) {
    router.push({name: 'product-details', params: {id}})
}

</script>

<style>

</style>