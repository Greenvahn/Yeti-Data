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
                isCheck: false,
                value: false
            },
            {
                name: 'check data',
                isCheck: true,
                value: true
            }
        ],
        messages: [
            {
                id: 'msg0',
                type: 'message is-warning',
                title: 'Check your data!',
                msg: [
                    'There are empty cells. You may want to review the format from the csv file.'
                ],
                buttons: [
                    { txt: 'OK' }
                ]
            },
            {
                id: 'msg1',
                type: 'message is-warning',
                title: 'Not csv file.',
                msg: [
                    'Please, upload only comma separated files (csv)'
                ],
                buttons: [
                    { txt: 'OK' }
                ]
            }
        ],
        showLaunch: false,
        dataFile: null,
        validExtension: ['csv'],
        modalStatus: {
            value: false
        }
    },
    mutations: {
        loadDataFile(state, payload) {


                    /* 
                     FORMAT TABLE VALIDATION
                     ============================
                    * If validation check box is active run the following checkings:
                    * Validate cells --> check if there are empty cells
                    */

                        // Check if validation is active
                        const validateFormat = (_data, _options, target) => {
                            
                            // isVal false by default
                            let isVal = false
                            
                            // defined maximun items in row
                            let maxItemsRow = 0;

                            // Iterate throug the options and check if validation is active
                            _options.forEach(option => {
                                isVal = option.name === target && option.isCheck ? true : false;
                            })

                            // Active validation

                            if (isVal) {
                                
                                // Check if empty rows
                                _data.forEach(row => {
                                    row.length >= maxItemsRow ?
                                        maxItemsRow = row.length :
                                        console.warn('There are empty cells. Max number of cells per row are ' + maxItemsRow);

                                    //Activate message 0 -> empty cells
                                    state.modalStatus.id = 'msg0',
                                    state.modalStatus.value = true,
                                    state.modalStatus.params = maxItemsRow
                                })

                            } else {
                                // Validation has not been activated
                                console.log("%c Validation has NOT been activated ", "color:black; background: orange")
                            }

                        }




            if (!payload) {
                state.dataFile = payload;
            } else {


                //Check if extension file is correct
                let _fileExtension = payload.name.split('.').pop().toLowerCase();
                let extensionSuccess = state.validExtension.indexOf(_fileExtension);
                extensionSuccess != -1 ? extensionSuccess = true : extensionSuccess = false;

                if (!extensionSuccess) {
                    //Activate message 1 -> format file
                    state.modalStatus.id = 'msg1',
                    state.modalStatus.value = true
                } else {
                // Retrieves all options
                const allOptions = state.inputOptions;

                // Creates empty array
                const dataArray = []

                // Lets split the data by rows
                let rows = payload.result.split("\n");

                // Filter empty rows or null values
                rows = rows.filter(item => {
                    return (item != null || item != "")
                })


                // iterate through the rows
                rows.forEach((cell, index) => {


                    // make it a string for Regex
                    let _cell = cell.toString();

                    console.log("before" + index, _cell);

                    // Includes commas inside of double quotes
                    _cell = _cell.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g);

                    /* will match:
                        (
                            ".*?"       double quotes + anything but double quotes + double quotes
                            |           OR
                            [^",\s]+    1 or more characters excl. double quotes or comma
                        )
                        (?=             FOLLOWED BY
                            \s*,        0 or more empty spaces and a comma
                            |           OR
                            \s*$        0 or more empty spaces and nothing else (end of string)
                        )

                    */

                    // Do not push if cell is null
                    if (_cell != null) {
                        // push the data cell
                        dataArray.push(_cell);
                    }


                })

                // Validates format table
                validateFormat(dataArray, allOptions, 'check data');


                // mutates dataFile state with dataArray values
                console.table(dataArray);
                state.dataFile = dataArray;


                }

            }

        },
        showLaunch(state, payload) {
            state.showLaunch = payload
        },
        updateOptions(state, payload) {
            const allOptions = state.inputOptions;

            allOptions.forEach(option => {
                option.name === payload.name ?
                    option.isCheck = payload.value : option.isCheck
            })
        },
        resetModal(state, payload) {
            state.modalStatus.value = payload;
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
        getMessages(state) {
            return state.messages
        },
        getModalStatus(state) {
            return state.modalStatus
        }
    },
    actions: {
        addFile(context, payload) {
            context.commit('loadDataFile', payload);
        },
        addLaunchBtn(context, payload) {
            context.commit('showLaunch', payload);
        },
        updateValues(context, payload) {
            context.commit('updateOptions', payload);
        },
        closeModal(context, payload) {
            context.commit('resetModal', payload)
        }

    }
})