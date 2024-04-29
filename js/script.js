const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayEmail: [],
            element:"",
            flag:false,
        };
    },
    created() {
       this.generateArray();
    },
    methods: {
        generateArray: function () {
            for (let i = 0; i < 10; i++) {

                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        console.log(resp);
                        this.arrayEmail[i] = resp.data.response;
                    });
                    
            }
            this.flag=true;
        },
        
    },
}).mount("#app");