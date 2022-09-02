let consoles = {
    sony: {
        ps2: {
            storage: '100mb',
            input: 'controller',
            disc: 'disc',
            wifi: 'no wifi'
        },

        ps3: {
            storage: '100gb',
            input: 'controller',
            disc: 'yes',
            wifi: 'yes'
        },

        ps4: {
            storage: '500gb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        },

        ps5: {
            storage: '1tb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        }

    },

    microsoft: {
        xbox360: {
            storage: '10gb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        },

        xbox1: {
            storage: '500gb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        },

        xbox1s: {
            storage: '1tb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        }

    },

    nintendo: {
        ds2: {
            storage: '100mb',
            input: 'buttons',
            disc: 'no disc',
            wifi: 'no wifi'
        },

        ds3: {
            storage: '1gb',
            input: 'buttons',
            disc: 'no disc',
            wifi: 'no wifi'
        },

        switch: {
            storage: '100gb',
            input: 'buttons',
            disc: 'no disc',
            wifi: 'wifi'
        }

    },

    pc: {
        highend: {
            storage: '1tb',
            input: 'keyboard and mouse',
            disc: 'disc',
            wifi: 'wifi'
        },

        lowend: {
            storage: '100gb',
            input: 'keyboard and mouse',
            disc: 'disc',
            wifi: 'wifi'
        }

    }

}
    let respan = document.getElementsByClassName('result')


// dropdown1
let consoleComp = Object.keys(consoles)

const dropdown = document.getElementById('drop1')

for(let i = 0 ; i<consoleComp.length ; i++){
   let opt =document.createElement('option')
   opt.value = consoleComp[i]
   opt.innerHTML = consoleComp[i]

   dropdown.appendChild(opt)
}

// dropdown2
const dropdown2 = document.getElementById('drop2')

function val(){

    dropdown2.value = ''

    dropdown2.length = 1

    for(let i = 0; i<respan.length; i++){
        respan[i].innerHTML = ''
    }
    
    let vers = Object.keys(consoles[dropdown.value])
    
        if(dropdown.value != ''){
            dropdown2.removeAttribute('disabled')
        }
    
    
    for(let i = 0 ; i<vers.length ; i++){
        let opt2 =document.createElement('option')
        opt2.value = vers[i]
        opt2.innerHTML = vers[i]
     
        dropdown2.appendChild(opt2)
     }
     
    }


    // result



function result(){
    let result = Object.values(consoles[dropdown.value][dropdown2.value])

    for(let i = 0; i<result.length; i++){
        respan[i].innerHTML = result[i]
    }
}



