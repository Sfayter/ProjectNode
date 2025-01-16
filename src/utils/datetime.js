export function timeAtual(){
    let time = new Date();

    let messageAtt = time.toLocaleDateString() + " " + time.toLocaleTimeString();
    
    return messageAtt;
}