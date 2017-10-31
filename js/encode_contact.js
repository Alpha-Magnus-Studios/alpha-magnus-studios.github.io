/*
Link for email, call, whatsapp
check parameters
Text is also written besides giving the link

(c) Moin Khan, Alpha Magnus Studios
  https://www.alphamstudios.com
*/

function email(id,dom,ext){
    document.write('<a href="mailto:'+id+'@'+dom+'.'+ext+'">'+' '+id+'@'+dom+'.'+ext+'</a>');
    }
function call(code,operator,num){
    document.write('<a href="tel:'+code+operator+num+'">'+code+' '+operator+' '+num+'</a>');
}
function whatsapp(code,operator,num,text){
    document.write('<a href="https://api.whatsapp.com/send?phone='
                    +code+operator+num+'&text='+text
                    +'"  target="_blank">'+'+'+code+' '+operator+' '+num+'</a>');
    }

