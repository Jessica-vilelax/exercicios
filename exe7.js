    
    chefe()

    function chefe(){
        exe7()
    }

    function exe7(){
        
        var soma = 0
        var conta = 0
        var num = Number(prompt("Informe um número: "))
        do{
            conta ++ // soma 1
            soma = soma + num // acumulador
            num = Number(prompt("Informe outro número. Digite um número negativo para encerrar"))

            num = Number
        }

        while(num >= 0)

        console.log(`A média dos números informados é ${soma / conta}`)
    }