import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        instructions: 'launch',
        dataFile: null
    },
    mutations:{
        loadDataFile (state, payload){
            //console.log("--------------", payload);
            
            //state.dataFile = payload;

                let csv = payload;

                var lines=csv.split("\n");

                var result = [];

                var headers=lines[0].split(",");

                for(var i=1;i<lines.length;i++){

                    var obj = {};
                    var currentline=lines[i].split(",");

                    for(var j=0;j<headers.length;j++){
                        obj[headers[j]] = currentline[j];
                    }

                    result.push(obj);

                }
                
                //return result; //JavaScript object
                //return JSON.stringify(result); //JSON

                state.dataFile = result;
            
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