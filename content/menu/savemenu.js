(function () {
    if(saving=="T"){
        let $1='';let $2=0;saves=localStorage.UGS.split(',');while($2 < 7){
            if (saves[$2]==0) {$1+=`<div id="slb${$2}" class="sld"><button class="slb" onclick="save(${$2});next('menu/savemenu',0)">Save ${$2}</button>`}
            else {$1 += `<div id="slb${$2}" class="sld"><button class="slb" onclick="load(${$2});menu(3)">Load ${$2}</button>${saves[$2]}
            <button class="slb" style="float: right" onclick="saves[${$2}]=0;localStorage.UGS=saves.join();localStorage.removeItem('UG ${$2}');next('menu/savemenu',0)">Delete</button>`};$1+=`</div>`;$2+=1}
        fun("menu",$1+`<br><br><button class="slb" onclick="save('file')">Save File</button><button style="float: right" class="slb" onclick="elm('fileinput').click()">Load File</button>`)}
    else{fun("menu",`\${col(cc[0],"Saving is disabled")}`)}
    end(0)
})()