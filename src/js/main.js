const { createApp } = Vue;

createApp({
    data() {
        return {
            dischi: [],
            discoCorrente: null,
        }
    },
    methods: {
        // chiamata axios
        getAlbum() {
            axios.get('script.php').then((response) => {
                this.dischi = response.data;
            })
        },
        showMore(index) {
            axios.get('script.php', {
                params: {
                    index
                }
            }).then((response) => {
                this.discoCorrente = response.data;
                console.log(discoCorrente)
            })
        }
    },
    created() {
        this.getAlbum()
    }
}).mount('#app');