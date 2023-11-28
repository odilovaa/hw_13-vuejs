import { onMounted, ref, reactive } from 'vue';

export function useProduct() {

const products = ref([])
const singleProduct = ref(null)

const product = reactive({
    title: '',
    description: '',
    image: 'https://picsum.photos/500',
    category: '',
    price: null,
    discountPercentage: '',
    rating: '',
    stock: '',
    brand: '',
  })

function fetchProducs() {
  fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then(json => products.value = json)
}

function fetchSingleProduct(id) {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(json => singleProduct.value = json)
  }

onMounted(() => {
  fetchProducs()
})


return {
    onMounted,
    products,
    product,
    fetchSingleProduct,
    singleProduct
}
}