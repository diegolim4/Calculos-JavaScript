function Calcular(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')

    var res = document.getElementById('res')

    
       
    var selecao = document.getElementById('sel')
    var opcao = selecao.options[selecao.selectedIndex]
    
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    if ( opcao == S ){
        res.innerHTML= `A soma entre ${num1} + ${num2} é ${num1+num2}`
    }else if (opcao == Sb){
        res.innerHTML= `A subtração entre ${num1} - ${num2} é ${num1-num2}`
    
    }else if(opcao == M){
        res.innerHTML= `A Multiplicaçao entre ${num1} x ${num2} é ${num1*num2}`
    }
    else if (opcao == D){
        res.innerHTML= `A Divisão entre ${num1} / ${num2} é ${num1/num2}`
    }
    

}