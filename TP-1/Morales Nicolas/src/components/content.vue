<template>
    <div>
        <div class="apiData">
            <div v-if="priceList[2] == 'dolar'">
                <p>Dolar oficial</p>
                <p>
                    Compra: {{ this.priceList[0].compra }}
                    Venta: {{ this.priceList[0].venta }}
                </p>
                <p>Dolar blue</p>
                <p>
                    Compra: {{ this.priceList[1].compra }}
                    Venta: {{ this.priceList[1].venta }}
                </p>
            </div>

            <div v-if="priceList[2] == 'crypto'">
                <p>
                    Bitcoin (BTC): ${{ this.priceList[0] }}
                </p>
                <p>
                    Ether (ETH): ${{ this.priceList[1] }}
                </p>
            </div>
        </div>


        <p id="fraseColor" class="italic">
            {{ this.frase }}
        </p>
        <p>Mis expectativas con la materia son mejorar mis habilidades como desarrollador web y adquirir nuevos
            conocimientos sobre el
            tema.</p>
    </div>
</template>

<script>

export default {
    name: 'MainContent',
    props: ['priceList'],
    data: function () {
        return {
            frase: null,
        }
    },
    mounted: function () {
        let frases = ["La cantidad de entropía del universo tiende a incrementarse en el tiempo.", "La variación de energía de un sistema termodinámico cerrado es igual a la diferencia entre la cantidad de calor y la cantidad de trabajo intercambiados por el sistema con sus alrededores.", "La entropía de un sistema se acerca a un valor constante cuando la temperatura se acerca a cero"];
        this.frase = frases[Math.floor(Math.random() * frases.length)];
        document.getElementById("fraseColor").style.textShadow = "0 0 4px #" + (Math.random() * 0xFFFFFF << 0).toString(16); //genero un color de sombra aleatoria
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.italic {
    font-style: italic;
}

.apiData {
    margin-bottom: 10%;
    margin-left: 25%;
    margin-top: 10%;
    max-width: 50%;
    align-content: center;
}
</style>
