(function () {let $1=function($a){$2+=`\${col('${$a}',"${$a}")} `};let $2=``;let $3;let $4=Array.from(tech);
    cc.forEach($1)
    if(time[3]==0){$3=`<font color="#BB4">Year Change</font>`}else{$3=time[3]}
    $2+=`<br><br> Name: ${psn[0]} | Year: ${time[0]} | Month: ${$3} | Day: ${time[2]+1}<br>`
    $4.forEach(($a,$b)=>{$4[$b]=$a.split('.');if($4[$b][0]!=x){$2+=`<br>${$4[$b][0]} Technique`}})
    fun('menu',$2)
    end(0)
})()
