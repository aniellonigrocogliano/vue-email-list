const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayEmail: [],
            element:"",
            flag:0,
        };
    },
    created() {
    },
    methods: {
        generateArray: function () {
            this.flag=2;
            for (let i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        console.log(resp);
                        this.arrayEmail[i] = resp.data.response;
                        if(i===9){this.flag=1;}
                    });  
            } 
        },  
    },
}).mount("#app");