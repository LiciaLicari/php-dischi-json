const { createApp } = Vue
createApp({
    data() {
        return {
            records: [],
            clickedRecord: null,
        }
    },
    methods: {
        recordInfo(i) {
            this.clickedRecord= this.records[i];

            // console.log(this.records[i]);
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