<template>
    <div>
        <NavBar />
        <Content />
        <Chart />
    </div>
</template>

<script>
import NavBar from '@/components/Admin/NavBar.vue';
import Content from '@/components/Admin/Content.vue';
import Chart from '@/components/Admin/Chart.vue'
    export default {
        name: 'Dashboard',
        components: {
            NavBar,
            Content,
            Chart,
        }
    }
</script>

<style>

</style>