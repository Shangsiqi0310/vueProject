<template>
    <div><comment :artid="$route.params.id"></comment></div>
</template>
<script >
    import comment from '../news/comment.vue'
export default {
    components:{
        comment
    }
}
</script>
<style>

</style>