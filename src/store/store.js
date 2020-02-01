import Vue from 'vue'
import Vuex from 'vuex'
import d3 from 'd3'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        instructions: 'launch',
        dataFile: null
    },
    mutations:{
        loadDataFile (state, payload){
            
            //state.dataFile = payload;

            const table = document.createElement("table");
            let rows =  payload.split("\n");
            console.log(rows)
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");
                if (cells.length > 1) {
                    var row = table.insertRow(-1);
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                        //console.log(cell)
                    }
                }
            }
            state.dataFile = table;
        }

    },
    getters:{
        getInstruction(state){
            return state.instructions
        },
        getTable(state){
            return state.dataFile
        } 
    }
})