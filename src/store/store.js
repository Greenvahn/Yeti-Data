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
                icon: {
                    name: 'exclamation-circle',
                    size: 'fa-2x'
                },
                title: 'There are empty cells.',
                msg: [
                    {
                        p: 'You may want to review the data from your file. It seems there are "empty" values/cells.'
                    }
                ],
                buttons: [
                    { txt: 'OK' }
                ]
            },
            {
                id: 'msg1',
                type: 'message is-warning',
                icon: {
                    name: 'file-excel',
                    size: 'fa-2x'
                },
                title: 'Not supported file',
                msg: [
                    {
                        p: 'Please, upload only comma separated files (csv).'
                    },
                    {
                        p: 'What is a csv file?',
                        class:'p-subtitle'
                    },
                    {
                        p: 'A comma-separated values file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas.'
                    }
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
            * This function is called after the dataArray has been created and validates the format.
            */

            const validateFormat = (_data, _options, target) => {

                // isVal false by default
                let isVal = false

                // defined maximun items in row
                let maxItemsRow = 0;

                // Iterate throug the parsed options and check if validation is active
                _options.forEach(option => {
                    isVal = option.name === target && option.isCheck ? true : false;
                })

                // If validation is active
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


            /* 
             TABLE BUILDER
             ============================
            * Checks if the payload contains data.
            * Check if the file extension is the correct one (csv)
            * Builds an array with the cells matched by regex:
                * > Uses commas to divide cells
                * > Kepps double quotes inside cell
            */

            // Payload => false
            if (!payload) {
                state.dataFile = payload;
            }
            // Payload => true
            else {

                // Retrieves file extension and checks if is correct
                let _fileExtension = payload.name.split('.').pop().toLowerCase(); // retrieves extension file
                let extensionSuccess = state.validExtension.indexOf(_fileExtension); // compares agaisnt accepted extensions
                extensionSuccess != -1 ? extensionSuccess = true : extensionSuccess = false; // returns true if accepted

                // File extesion not accepted
                if (!extensionSuccess) {
                    state.modalStatus.id = 'msg1', //Activate message 1 -> format file
                        state.modalStatus.value = true
                }
                // Extension accepted
                else {

                    // Creates dataArray to deploy the final data
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
                    validateFormat(dataArray, state.inputOptions, 'check data');



                    /* 
                    STORE STATE UPDATE
                    ============================
                    * mutates the state of the dataFile with dataArray values
                    */
                    console.table(dataArray);
                    state.dataFile = dataArray;

                }

            }
            // End of Payload => true

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