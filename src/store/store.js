import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        title: 'Data display',
        description: 'A single-page application to display your .csv files.',
        instructions: {
            main: 'Start by loading your csv file. After that, press on "launch" button to display the data.',
            button: 'launch'
        },
        showLaunch: false,
        dataFile: null
    },
    mutations:{
        loadDataFile (state, payload){
            
            // Creates empty array
            const dataArray = []

            // Lets split the data by rows
            let rows =  payload.split("\n");

            // iterate through the rows
            for (var i = 0; i < rows.length; i++) {
                // push each element into dataArray
                dataArray.push(rows[i].split(","));
            }

            // mutates dataFile state with dataArray values
            state.dataFile = dataArray;
        },
        showLaunch (state, payload){
           state.showLaunch = payload
        }
    },
    getters:{
        getTable(state){
            return state.dataFile
        },
        getButton(state){
            return state.showLaunch
        }
    }
})