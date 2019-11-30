Vue.component('productos', {
    template: ` 
    <div class="form-group">
        <h3>Registrar productos</h3>
            <select class="browser-default custom-select">
                    <option selected>Seleccione la empresa</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
            </select>

            <input type="text" class="form-control" placeholder="Titulo">

            <input type="text" class="form-control" placeholder="Descripción">
            <input type="text" class="form-control" placeholder="Precio regular">
            <div class="form-group">
                    <label for="archivo">Imagen</label>
                    <input type="file" id="archivo">
                  </div>
            <input type="text" class="form-control" placeholder="Moneda de la transacción">
        </div>
    `,
  })

  new Vue({
    el: '#app',
    data: {
        mensaje:'',
        status:'',
        empresa:'',
        titulo:'',
        descripcion:'',
        moneda:''
    },
    methods:{
        validateUser(){
            var config = {
                headers: {
                     'Content-type': 'application/json; charset=utf-8',
                     'Access-Control-Allow-Origin':'*',
                     'Access-Control-Allow-Methods': 'POST',
                     'Access-Control-Allow-Headers':'*',
                     'cache-control': 'no-cache'
                   }
             };
             let currentObj = this;
            axios.post('https://reqres.in/api/users',{
                "name": this.mensaje,
                "job": this.status
            },config)
            .then((response) => {
                console.log(response);
                currentObj.mensaje = response.data;
                currentObj.mensaje = 'Solicitud procesada con éxito';
            }).catch(function (error) {
                currentObj.mensaje = error;
            });;
        }
    }
})