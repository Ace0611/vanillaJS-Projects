(function(){
    const input = document.querySelector('input')
    const answer = document.querySelector('#answer');
    function init(){
        function binToDec(e){
            if(e.key==='Enter'){
                const value = input.value;
                var decimal = 0;
                for(var i = value.length-1; i>=0; i--){
                    decimal += parseInt(value[i])*Math.pow(2, value.length-1-i)
                }
                answer.innerHTML = `Decimal Value: ${decimal}`
            }
        }
        window.addEventListener('keyup', binToDec)
    }
    window.addEventListener('load', init)
})()