const { createApp } = Vue
createApp({
    data() {
        return {
            records: null,
        }
    },
    mounted() {
        axios
            .get('server.php')
            .then(response => {
                this.records = response.data
            })
    }
}).mount('#app')