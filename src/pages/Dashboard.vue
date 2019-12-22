<template>
    <div>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue"

    export default {
        name: 'Dashboard',
        props: {},
        components: {
            Navbar
        }
    }
</script>