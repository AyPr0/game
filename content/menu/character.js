(function () {let $1=function($a){$2+=`\${col('${$a}',"${$a}")} `};let $2=``;let $3
    cc.forEach($1)
    if(time[3]==0){$3=`<font color="#BB4">Year Change</font>`}else{$3=time[3]}
    $2+=`<br><br> Name: ${psn[0]}<br><br>Year: ${time[4]} | Month: ${$3} | Day: ${time[2]+1}<br><br>Race: ${races[race[0][0]]} | Variant: ${races[''+race[0]]}`
    fun('menu',$2)
    end(0)
})()
