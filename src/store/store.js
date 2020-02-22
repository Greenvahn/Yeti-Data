import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        title: 'Data display',
        description: 'A single-page application to display your .csv files.',
        instructions: {
            main: 'Start by loading your csv file. After that, press on "launch" button to display the data.',
            button: 'launch'
        },
        inputOptions: [
            {
                name: 'has header',
                isCheck: false
            },
            {
                name: 'check data',
                isCheck: false
            }
        ],
        messages: [
            {
                id: 'msg0',
                msg: 'The CSV has empty cells. It could be missing data.',
                isActive: false
            }
        ],
        showLaunch: false,
        dataFile: null,
    },
    mutations: {
        loadDataFile(state, payload) {

            if (!payload) {
                state.dataFile = payload;
            } else {
                // Retrieves all options
                const allOptions = state.inputOptions;

                // Creates empty array
                const dataArray = []

                // Validation - defined maximun items in row
                let maxItemsRow = 0;

                // Check if validation is active
                let isValidationActive = (_options, target) =>{
                    let isVal;
                    _options.forEach(option =>{
                       isVal = option.name === target && option.isCheck ? true : false;
                    })

                    return isVal; 
                }

                // Lets split the data by rows
                let rows = payload.split("\n");

                // iterate through the rows
                for (var i = 0; i < rows.length; i++) {

                    // split each cell
                    dataArray.push(rows[i].split(","));

                    if (isValidationActive(allOptions, 'check data')) {
                        dataArray.forEach(row => {
                            if (row.length >= maxItemsRow) {
                                maxItemsRow = row.length
                            } else {
                                console.warn('There are empty cells. Max number of cells are ' + maxItemsRow)
                                //console.log('%c There are empty cells. Max number of cells are ' + maxItemsRow+' ', 'background:orange; color:white')
                            }
                        })
                    }

                }

                // mutates dataFile state with dataArray values
                console.table(dataArray);
                state.dataFile = dataArray;

            }

        },
        showLaunch(state, payload) {
            state.showLaunch = payload
        },
        updateOptions(state, payload) {
            const allOptions = state.inputOptions;

            allOptions.forEach(option =>{
                option.name === payload.name ? 
                option.isCheck = payload.value : option.isCheck
            })
        }
    },
    getters: {
        getTable(state) {
            return state.dataFile
        },
        getButton(state) {
            return state.showLaunch
        },
        getInputOptions(state) {
            return state.inputOptions
        },
        getMessage(state) {
            return state.messages
        }
    }, 
     actions :{
        addFile(context, payload){
            context.commit('loadDataFile', payload);
        },
        addLaunchBtn(context, payload){
            context.commit('showLaunch', payload);
        },
        updateValues(context, payload){
            context.commit('updateOptions', payload);
        }

    }
})