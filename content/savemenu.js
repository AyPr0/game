(function () {
    let $1 = ''; let $2 = -1; while ($2 < 6) {
        $2 += 1; if (localStorage["UGs" + $2] == undefined) { $1 += `<div id="slb${$2}" class="sld"><button class="slb" onclick="save(${$2});next('savemenu')">Save ${$2}</button>` }
        else { $1 += `<div id="slb${$2}" class="sld"><button class="slb" onclick="load(${$2});toggledis('infodisplay','savemenu')">Load ${$2}</button>${$lst[$2]}<button class="slb" style="float: right" onclick="localStorage.removeItem('UGs${$2}');next('savemenu')">Delete</button>` }; $1 += `</div>`
    }
    nav("savemenu", $1 + `<br><br><button class="slb" onclick="savefile()">Save File</button><button style="float: right" class="slb" onclick="ELM('fileinput').click()">Load File</button>`)
    ELM("script2").remove()
})()