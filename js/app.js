const app = {

    data() {
        return {
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            name: "john",
            lastName: "doe",
            email: "tst@test.com",
            gender: "male"            
        }
    },
    methods: {
        async getUser() {

            const res = await fetch("https://randomuser.me/api/");
            const result = await res.json();

            const userData = result.results[0];

            this.name = userData.name.first;
            this.lastName = userData.name.last;
            this.email = userData.email;
            this.gender = userData.gender;
            this.image = userData.picture.large;

        }
    }
};

//https://randomuser.me/api/

Vue.createApp(app).mount('#app')