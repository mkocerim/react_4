const target = {

message1: 'hello',
message2: 'everyone',

}

const handler = {

    get(target,prop,receiver){

        console.log('>> HANDLER GET ARGS', arguments)
        
        return 'world'

    },
    set(obj,prop, value){
        console.log('>>HANDLER SET ARGS', arguments)

        //Indicate success

        return true
    }
    
}

target.message1 = 'aergaergaerg'

let proxobj = new Proxy(target, handler)

console.log('>> TARGET MSG', target.message1)
console.log('>> PROXYOBJ MSG 1', proxobj.message1)

proxobj.message1= 'TEST'
console.log('>> PROXOBJ MSG 1', proxobj.message1)