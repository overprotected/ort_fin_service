function fn({prevValues, values, fields, errors, getName}){
    if(values.commandList.values.length>0 && values.codesTN_VED.values.length>0){
        let bool = true;
        values.commandList.values.forEach(itemCommand =>{
            values.codesTN_VED.values.forEach(itemCode =>{
                const code = itemCode.value.substr(0,itemCode.value.indexOf(String.fromCharCode(160)));

                if(code === itemCommand.code){
                    values.creditPercent = 3;
                    bool = false;
                }
            });
        });
        if(bool){
            values.creditPercent = 10;
        }
    }
}