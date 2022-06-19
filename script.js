const calculateTemp = () => {
    const numberTemp =document.getElementById('temp').value;
    console.log(numberTemp);
    const tempSelected = document.getElementById('temp_differ');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel* 9/5) + 32);
        return fahrenheit;
    }

    const fahToCel = (fah) => {
        let fahrenheit = Math.round((fah - 32 ) * 5/9);
        return celsius;
    }
    let result;
    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('result').innerHTML = `= ${result}°Fahrenheit`;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('result').innerHTML = `= ${result}°Celsius`;
    }

} 