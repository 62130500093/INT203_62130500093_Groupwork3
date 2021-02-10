    const app = {
        data() {
            return {
                gallerys: [{image:"./images/view1.jpg",title:"Dark Sea, Kuala Lumpur",done:false}
                ,{image:"./images/view2.jpg",title:"Greenwood Mountain, Russia",done:false}
                ,{image:"./images/view3.jpg",title:"Brown pine wood, Monte Carlo",done:false}],
                heart: "./images/heart.png"
            }
        },
        methods: {
            toggleHeart(index){
                this.gallerys[index].done = !this.gallerys[index].done;
            }
        },
        computed: {
            calculated(){
                return this.gallerys.length;
            }
        }

    }
    Vue.createApp(app).mount('#app')