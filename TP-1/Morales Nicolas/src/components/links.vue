<template>
    <p><a href="#" v-on:click="getDataCrypto()">https://api.coingecko.com/api/v3</a></p>
    <p><a href="#" v-on:click="getDataDolar()">https://www.dolarsi.com/api/api.php?type=valoresprincipales</a></p>
    <p><a href="#" v-on:click="deleteInfo()">BORRAR</a></p>
</template>

<script>
import axios from 'axios';


export default {
    name: 'LinksList',
    methods: {
        async getDataCrypto() {
            try {
                const responseBTC = await axios.get(
                    "https://api.coingecko.com/api/v3/coins/bitcoin"
                );
                const responseETH = await axios.get(
                    "https://api.coingecko.com/api/v3/coins/ethereum"
                );
                this.$emit('click', [responseBTC.data.market_data.current_price["usd"], responseETH.data.market_data.current_price["usd"], "crypto"],);
            } catch (error) {
                console.log(error);
            }
        },
        async getDataDolar() {
            try {
                const response = await axios.get(
                    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
                );
                this.$emit('click', [response.data[0].casa, response.data[1].casa, "dolar"]);
            } catch (error) {
                console.log(error);
            }
        },
        deleteInfo() {
            this.$emit('click', [])
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
    color: aliceblue;

}

a:hover {
    color: #DB6B97;
}
</style>
