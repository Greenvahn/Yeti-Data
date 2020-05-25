import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        title: 'Data display',
        mainText: [
            {
              content: [
                {
                    p: 'A single-page application to display your data files.',
                    class: 'title align-center'
                },
                {
                    p: 'A quick way to have your data CSV files into charts without using third part libraries.',
                    class: 'align-center'
                }
              ],
              type: 'introduction'
            },
            {
              content :[
                {
                    p: 'What is CSV file?',
                    class: 'info-title'
                },
                {
                    p: 'A comma-separated values file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas.',
                    class: ''
                }
              ],
              type: 'information'
            },
            {
              content :[
                {
                    p: 'How do I get a CSV file?',
                    class: 'info-title'
                },
                {
                    p: 'There are multiple ways to get a CSV file of your data. Some most of the data softwares have the option to export your data as CSV. It is also possible to generate your CSV manually for small data files.',
                    class: ''
                }
              ],
              type: 'information reduced-margin'
            },
            {
              content :[
                {
                    p: 'You always can use our sample file. Feel free to edit and play with it. Download it at any time by pressing the button next to this paragraph.',
                    class: ''
                }
              ],
              buttons: [
                {
                    txt: 'Download Sample CSV',
                    class: 'yeti-sample-csv',
                    itemURL: 'assets/csv/sample.csv'
                }
              ],
              type: 'sample-download reduced-margin last-segment'
            }
        ],
        instructions: {
            main: 'Start by loading your csv file. After that, press on "launch" button to display the data.',
            button: 'launch'
        },
        inputOptions: [
            {
                name: 'has header',
                isCheck: false,
                type: 'checkbox',
                value: false
            },
            {
                name: 'check data',
                isCheck: true,
                type: 'checkbox',
                value: true
            }
        ],
        minichartOptions: {
            inputs: {
                labels: '',
                values: ''
            },
            graphic: {
                type: '',
                active: false
            },
            data: {
                labels: [],
                values: []
            },
            launcher: false
        },
        buttons: {
            typeOfChart: [
                {
                    text: 'Chart',
                    class: 'show-presets',
                    icon: {
                        name: 'chart-line',
                        size: 'fa-3x'
                    },
                    state: true
                }
            ],
            loadChart: [
                {
                    id: 'chart-bar',
                    class: 'button is-primary addChartBar',
                    function: 'loadPresets',
                    text: 'Launch chart',
                    icon: 'arrow-alt-circle-right',
                    iconSize: 'fa-2x',
                    state: true
                },
                {
                    id: 'chart-pie',
                    class: 'addChartPie',
                    function: 'loadPresets',
                    text: 'Launch chart Pie',
                    state: false
                }
            ],
            columnSelector: [
                {
                    id: 'labels',
                    class: 'select',
                    text: 'Select your labels',
                    options: []
                },
                {
                    id: 'values',
                    class: 'select',
                    text: 'Select your values (only numbers)',
                    options: []
                }
            ]
        },
        messages: [
            {
                id: 'msg0',
                type: 'message is-warning',
                icon: {
                    name: 'exclamation-circle',
                    size: 'fa-2x'
                },
                title: 'Review your data.',
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
                        class: 'p-subtitle'
                    },
                    {
                        p: 'A comma-separated values file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas.'
                    }
                ],
                buttons: [
                    { txt: 'OK' }
                ]
            },
            {
                id: 'msg2',
                type: 'message is-info',
                icon: {
                    name: 'file-excel',
                    size: 'fa-2x'
                },
                title: 'Loads of data!',
                msg: [
                    {
                        p: 'The app does not support files bigger than 100Kb.'
                    },
                    {
                        p: 'Let\'s keep it simple!',
                        class: 'p-subtitle'
                    },
                    {
                        p: 'This web application has been designed to support basic data charts created with small amount of data. Please, simplify your csv file or just select a different data file.'
                    }
                ],
                buttons: [
                    { txt: 'OK' }
                ]
            },
            {
                id: 'msg3',
                type: 'notification is-primary is-light is-promise',
                icon: {
                    name: 'exclamation-circle',
                    size: 'fa-2x'
                },
                title: 'Review your data.',
                msg: [
                    {
                        p: 'Content loaded succesfully!'
                    }
                ],
                buttons: [
                    { txt: 'OK' }
                ]
            },
            {
                id: 'msg4',
                type: 'message is-warning',
                icon: {
                    name: 'file-excel',
                    size: 'fa-2x'
                },
                title: 'Invalid selection',
                msg: [
                    {
                        p: 'Labels and values are using the same column input.'
                    },
                    {
                        p: 'Please, select different columns for each of the elements.'
                    }
                ],
                buttons: [
                    { txt: 'OK' }
                ]
            },
            {
                id: 'msg5',
                type: 'message is-warning',
                icon: {
                    name: 'file-excel',
                    size: 'fa-2x'
                },
                title: 'Invalid selection',
                msg: [
                    {
                        p: 'One of the cells selected as "Values" does not contain numbers.'
                    },
                    {
                        p: 'Please, select a valid column for "Values".'
                    }
                ],
                buttons: [
                    { txt: 'OK' }
                ]
            }
        ],
        showLaunch: false,
        showBarchart: {
            graphic: false
        },
        dataFile: null,
        validExtension: ['csv'],
        modalStatus: {
            value: false
        },
        notificationStatus: {
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
            * Adds lazy loading if the csv file is too big
            */

            // Payload => false
            if (!payload) {
                state.dataFile = payload;
            }
            // Payload => true
            else {

                // File Size
                let _fileSize = payload.size
                let _passMark = 100000  // Customized value


                /* ==== FILE EXTENSION
                * > Retrieves file extension and checks if is correct 
                * > Extension = EXT
                * > Two values => OK / NOT accepted
                */

                let _fileExtension = payload.name.split('.').pop().toLowerCase(); // retrieves extension file
                let extensionSuccess = state.validExtension.indexOf(_fileExtension); // compares agaisnt accepted extensions
                extensionSuccess != -1 ? extensionSuccess = true : extensionSuccess = false; // returns true if accepted




                /**** EXT ==> NOT Accepted */
                if (!extensionSuccess) {
                    state.modalStatus.id = 'msg1', //Activate message 1 -> format file
                        state.modalStatus.value = true
                }
                /**** FILE SIZE ==> NOT Accepted */
                else if (_fileSize >= _passMark) {
                    state.modalStatus.id = 'msg2', //Activate message 2 -> file size
                        state.modalStatus.value = true

                    return false; // Stop process here!

                }
                /**** EXT ==> OK Accepted */
                else {


                    /* ==== LAZY LOADING 
                    * > Gets file size
                    * > IF biggers than passMark ==> Lazy loading ACTIVE
                    */

                    // If FilzeSize is bigger than 10000 - activate lazy loader
                    //   _fileSize > _passMark ? 
                    //   alert(_fileSize, "Activate lazy loader") : false;


                    /* ================ DATA PROCESS - START! ==== */

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


                        /* ================ DATA PROCESS - END ==== */

                        /* Define a new promise - loading notification astate asynchronous*/
                        const showNotification = (msgID, stateValue, ms) => new Promise(resolve => {
                            setTimeout(() => {
                                state.notificationStatus.id = msgID, state.notificationStatus.value = stateValue
                            }, ms);
                            resolve();
                        });


                        // Check if the loop has ended
                        if (index === (rows.length) - 1) {

                            /* 
                            ===== > Shows notification - PROMISE
                            ** Call a specific notification in asynchronous way
                            * > Call showNotification function and parse --> message ID || notification status value || timing
                            * > Then call itself but parse 'false' as stateValue to hide the message
                            * > For showing -> factor fo 1000 ms
                            * > For hiding -> use a factor of 0.3 ms
                            */
                            showNotification('msg3', true, _fileSize / 2000).then(() => {
                                showNotification('msg3', false, _fileSize / 0.3)
                            })

                        }

                    })



                    // Validates format table
                    validateFormat(dataArray, state.inputOptions, 'check data');



                    /* 
                    STORE STATE UPDATE
                    ============================
                    * mutates the state of the dataFile with dataArray values
                    */
                    state.dataFile = dataArray;

                }

            }
            // End of Payload => true

        },
        showLaunch(state, payload) {
            state.showLaunch = payload
        },
        showChartBar(state, payload) {
            // Updates showBarchart.graphic => true
            state.showBarchart.graphic = payload

            // Hides the button launcher
            state.minichartOptions.launcher = false
        },
        updateOptions(state, payload) {
            const allOptions = state.inputOptions;

            allOptions.forEach(option => {
                option.name === payload.name ?
                    option.isCheck = payload.value : option.isCheck
            })
        },
        addOptions(state, payload) {
            // Retrieves the current minchart inputs
            const chartInputs = state.minichartOptions.inputs;

            // Creates an array of keys based on minichart inputs object
            let _inputs = Object.keys(chartInputs)


            /* Iterates through each key 
            * Checks if key matches the payload name
            * If true, update the value in the charInputs object
            * Otherwise just return the current value of the chartInpust object
            */
            _inputs.forEach(item => {
                item === payload.name ? chartInputs[payload.name] = payload.value : chartInputs[item]
            });

            /* Check launch button for minichart
            * If labels and values are equal numbers --> options have been selected --> launcher button = true
            */

            chartInputs.labels && chartInputs.values ||
                chartInputs.labels === 0 && chartInputs.values ||
                chartInputs.labels && chartInputs.values === 0 ?
                state.minichartOptions.launcher = true : state.minichartOptions.launcher = false

            /* =========  Validation =========
            * Checks if input Labels and input Values are the same --> same column selected
            * If true --> triggers message modal 4 - Invalid selection --> launcher button = false
            *  
            */
            chartInputs.labels === chartInputs.values ?
                [state.modalStatus.id = 'msg4', state.modalStatus.value = true, state.minichartOptions.launcher = false] :
                false

            // Checks if numbers have been chosen to show as values - isNaN
            // * If true --> triggers message modal 5 - Invalid selection --> launcher button = false


            // For values column --> if cell values are not numbers --> reject
            // get data table
            let _dataTable = state.dataFile

            // get minichartOptions
            const _miniChartOptions = state.minichartOptions
            let _inputValues = _miniChartOptions.inputs.values,
                _inputLabels = _miniChartOptions.inputs.labels,
                _dataValues = _miniChartOptions.data.values,
                _dataLabels = _miniChartOptions.data.labels;

            // Creates empty array to store the new values
            let tempArray = { values: [], labels: [] };

            // Iterates through table elements
            // If matches the input values or input labels from the minichartOptions --> store the value
            _dataTable.forEach((element, index) => {
                element.forEach((cell, _index) => {
                    _index === _inputLabels
                        ? tempArray.labels.push(cell) // Stores cell value as labels
                        : _index === _inputValues
                            ? tempArray.values.push(cell) // Stores cell value as values
                            : false;
                });
            });

            // Checks if numbers have been chosen to show as values - isNaN
            // * If true --> triggers message modal 5 - Invalid selection --> launcher button = false
            tempArray.values.forEach((element, index) => {
                isNaN(element) ? [state.modalStatus.id = 'msg5', state.modalStatus.value = true, state.minichartOptions.launcher = false] : false
            });

            // Pass new data into minichartData
            state.minichartOptions.data = tempArray

            // Hides chart
            state.showBarchart.graphic = false


        },
        miniChartdata(state) {
            // Updates minichart.launcher
            state.minichartOptions.launcher = false
        },

        typeChart(state, payload) {
            state.minichartOptions.graphic.type = payload;
            state.minichartOptions.graphic.active = true;
        },
        resetModal(state, payload) {
            state.modalStatus.value = payload;
        },
        resetAll(state, payload) {
            state.minichartOptions.launcher = payload; // button launcher
            state.minichartOptions.graphic.active = payload; // minichart options
            state.modalStatus.value = payload; // modals
            state.showBarchart.graphic = payload; // hides chart
            state.minichartOptions.inputs.labels = ""; // Empties all mninichart labels
            state.minichartOptions.inputs.values = ""; // Empties all mninichart values
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
        },
        getNotificationStatus(state) {
            return state.notificationStatus
        },
        getChartBarState(state) {
            return state.showBarchart.graphic
        },
        getDataChart(state) {
            return state.minichartOptions.data
        },
        getButtonLib(state) {
            return state.buttons
        },
        getMiniChart(state) {
            return state.minichartOptions
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
        createOptions(context, payload) {
            context.commit('addOptions', payload);
        },
        closeModal(context, payload) {
            context.commit('resetModal', payload)
        },
        addChartBar(context, payload) {
            context.commit('showChartBar', payload);
        },
        addTypeChart(context, payload) {
            context.commit('typeChart', payload);
        },
        reset(context, payload) {
            context.commit('resetAll', payload);
        }
        // ,
        // updateMiniChartData(context, payload) {
        //     context.commit('miniChartdata', payload)
        // }

    }
})