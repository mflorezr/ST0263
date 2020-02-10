<template>
    <div>
        <nav class= "navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">SENSOR Data</a>
        </nav>

        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class ="card">
                        <div class="card-body">
                            <form @submit.prevent="sendSensorData">
                                <div class="form-group">
                                    <input type="text" 
                                    v-model="sensor.arduino"
                                    placeholder="Inserte nombre de arduino" 
                                    class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="double"
                                     v-model="sensor.temperatura"
                                      placeholder="Inserte temperatura" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="double" 
                                     v-model="sensor.humedad"
                                    placeholder="Inserte humedad" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="double"
                                     v-model="sensor.latitud"
                                      placeholder="Inserte latitud" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="double"
                                     v-model="sensor.longitud"
                                      placeholder="Inserte longitud" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="datetime-local" 
                                     v-model="sensor.fecha"
                                     placeholder= "fecha" class="form-group">
                                </div>
                               <template v-if="edit === false"> 
                                    <button class = "btn btn-primary btn-block"> Enviar </button>
                               </template>
                               <template v-else>
                                    <button class = "btn btn-primary btn-block"> Actualizar </button>
                               </template>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class = "table table-bordered">
                        <thead>
                            <tr>
                                <th>Arduino</th>
                                <th>Temperatura</th>
                                <th>Humedad</th>
                                <th>Latitud</th>
                                <th>Longitud</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="sensor of sensores">
                                <td>{{sensor.arduino}}</td>
                                <td>{{sensor.temperatura}}</td>
                                <td>{{sensor.humedad}}</td>
                                <td>{{sensor.latitud}}</td>
                                <td>{{sensor.longitud}}</td>
                                <td>{{sensor.fecha}}</td>
                                <td>
                                    <button @click="deleteSensorData(sensor._id)" class="btn btn-danger">Eliminar</button>
                                    <button @click="updateSensorData(sensor._id)" class="btn btn-secondary">Editar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    class Sensor{
        constructor(arduino,temperatura,humedad,latitud,longitud,fecha){
            this.arduino=arduino;
            this.temperatura=temperatura;
            this.humedad=humedad;
            this.latitud=latitud;
            this.longitud=longitud;
            this.fecha=fecha;
        }

    }
    export default {
        data(){
            return{
                sensor: new Sensor(),
                sensores: [],
                edit: false,
                dataToEdit: ''
            }
        },
        created(){
            this.getSensorData();
        },
        methods:{
            getSensorData(){
                fetch('/api/sensor')
                    .then(res => res.json())
                    .then(data =>{
                        this.sensores = data;
                        console.log(this.sensores)
                    })
            },
            sendSensorData(){
                if(this.edit===false){
                    fetch('/api/sensor', {
                        method: 'POST',
                        body: JSON.stringify(this.sensor),
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            this.getSensorData();
                        })
                } else {
                    fetch('/api/sensor/'+ this.dataToEdit, {
                        method: 'PUT',
                        body: JSON.stringify(this.sensor),
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                    .then(res=> res.json())
                    .then(data => {
                        this.getSensorData();
                    });
                }

                this.sensor= new Sensor();

            },
            deleteSensorData(id){
                fetch('/api/sensor/' + id, {
                    method: 'DELETE',
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data =>{
                    this.getSensorData();
                });
            },
            updateSensorData(id){
                fetch('/api/sensor/'+ id)
                    .then(res => res.json())
                    .then(data => {
                        this.sensor =  new Sensor(data.arduino, data.temperatura, data.humedad, data.latitud, data.longitud, data.fecha);
                        this.dataToEdit = data._id;
                        this.edit=true;
                    });
            }
        }
    }
</script> 