const { createApp } = Vue;

createApp({
    data() {
        return {
            dischi: []
        }
    },
    methods: {
        // chiamata axios
        getAlbum() {
            axios.get('script.php').then((response) => {
                this.dischi = response.data;
                console.log(this.dischi)
            })
        },
    },
    created() {
        this.getAlbum()
    }
}).mount('#app');