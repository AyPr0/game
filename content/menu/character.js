(function () {let $1=``;let $2;let $3=``;let $4=``
    tech.forEach(($a,$b)=>{if($a!=0){$3+=`\${col('${cc[affr[$a]]}','${aff[$a]}')} | \${btn('stop',"tech[${$b}]=0;next('menu/character',0)")}`}})
    aff.forEach(($a,$b)=>{$4+=`\${col('${cc[affr[$b]]}','${$a}')} [${afftype[afft[$b]]}] [${afflvl[$b]}] (${affxp[$b]})<br>`})
    if(time[3]==0){$2=`<font color="#BB4">Year Change</font>`}else{$2=time[3]}
    $1+=`Name: ${psn[0]}<br><br>Year: ${time[4]} | Month: ${$2} | Day: ${time[1]+1}<br><br>Race: ${races[race[0][0]]} | Variant: ${races[race[0]]}<br><br>\${col('#7B7','SKILLS:')}<br>`
    $1+=`-Name [Category] [Level] (%XP)<br><br>\${col('#7B7','[using]:')}<br>${$3}<br>\${col('#7B7','[all]:')}<br>${$4}`
    fun('menu',$1)
    end(0)
})()
