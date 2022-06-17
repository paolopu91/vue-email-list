axios
.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then((axiosEmail) => {
    // stamp in console result of axiosEmail
    console.log(axiosEmail)

    
});



new Vue({
    el:"#demo",
    data:{
        emailRandom: null,
    },

    methods:{
        getRandomEmail(){
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosEmail) => {
                    // stamp in console result of axiosEmail
                    // console.log(this.getRandomEmail)

                    // stamp result in html with key {{emailRandom}}
                    this.emailRandom = axiosEmail.data.response
            });
        },
        
    }
});

