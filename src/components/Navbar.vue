<template>
    <b-navbar toggleable="lg">
        <b-navbar-brand href="#"><img class="logo" src="../assets/logo.png" alt=""></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item>
                    <router-link to="/">Home</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="history">
                        History
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="why">
                       Why benchmark?
                    </router-link>
                </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'Navbar',
        props: {
        }
    }
</script>

<style scoped>
    .logo {
        width: 48px;
    }
</style>