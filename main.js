const { createApp } = Vue
createApp({
    data() {
        return {
            records: [],
        }
    },
    methods: {
        fetchData(url){
            axios
            .get(url)
            .then(response => {
                this.records = response.data;
            })
            .catch(error => {
                this.error = (error.message);
            }
                )
        }
    },
    mounted() {
        axios
        .request({
            url: 'server.php',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
            this.records = response.data;
        })
        .catch(error => {
            console.error(error.message);
        })
    }
}).mount('#app')