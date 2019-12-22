<template>
    <div>
        <b-container>
            <h3>Homepage</h3>
            <b-table :items="items"></b-table>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                items: [
                    {rank: 1, framework: 'japronto', best_performance: '1000000'},
                    {rank: 2, framework: 'laravel', best_performance: '1000000'},
                    {rank: 3, framework: 'php', best_performance: '1000000'},
                    {rank: 4, framework: 'python', best_performance: '1000000'},
                ]
            }
        }
    }
</script>