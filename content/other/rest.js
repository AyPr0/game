(function () {let $1=[tmp.arr(0),tmp.arr(1),tmp.arr(2),tmp.arr(3),1,'']//rest type ! data ! next ! tmp
    if($1[0]=='faint'){
        heal(10*$1[1],1);ptime([0,1*$1[1]])
        t=`You are unconscious.`
        n=`\${btn('awaken',"tmp='${$1[3]}';next('${$1[2]}')")}`}
    else{
        if($1[0]=='inn'){$1[4]=2;$1[5]=`tmp2='${$1[1]}';`}
        t=`You are resting. You have rested for ${$1[1]} hours.`
        n=`\${btn('rest',"ptime([0,1*elm('slst').value]);heal(${$1[4]}0*elm('slst').value);tmp=tmp.arr(1,${$1[1]}+(1*elm('slst').value));next()")} for \${lst('slst',"1:1,2:2,3:3,4:4,6:6,8:8,10:10")} hours `
        n+=`| \${btn('done',"${$1[5]}tmp='${$1[3]}';next('${$1[2]}')")}`}
    sbu()
    end()
})()