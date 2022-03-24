/**
 * Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/
const app = new Vue(
    {
        el:"#app",
        data:{ 
            mailArray:[],
        }, 
        methods:{ 
            mail : function(){ 
                // ogni volta che premo Genera mail azzero il l'array
                this.mailArray=[]; 
                for(i = 0; i < 10; i++ ){ 
                    // Salvo in self il this cosi mi riferisco all'oggetto e non a windows (con arrow function non servirebbe) 
                    const self = this; 
                    // API
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail") 
                     .then (function(response){
                         self.mailArray.push(response.data.response)
                     }) 
                }
            }
        }, 
        //  Prove varie ed eventuali 
        // mettiamo in mounted la funzione e l'array e ci evitiamo di fare bottoni e bottoncini :)
        mounted(){
            this.mail(this.mailArray)
        } 
}) 

