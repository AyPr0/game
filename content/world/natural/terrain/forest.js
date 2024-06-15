(function () {
    switch(tmp){
    case x:// standing
        t=`You are in a forest, there is a MAJOR FEATURE / TERRAIN ahead. The MAJOR FEATURE / TERRAIN is behind you.`
        n=`\${btn('walk',"tmp='walk';next()")} | \${btn('turn around',"pos[3]=cycle(8,pos[3]+4);next()")}<br><br>`
        n+=`\${btn('explore',"tmp='explore';next()")}`;break;
    case 'walk':// travelling
        t=`You are walking in the forest, there is a MAJOR FEATURE / TERRAIN ahead. The MAJOR FEATURE / TERRAIN is behind you.`
        n=`\${btn('keep walking',"next()")} | \${btn('turn around',"pos[3]=cycle(8,pos[3]+4);tmp=x;next()")}<br><br>`
        n+=`\${btn('explore',"tmp='explore';next()")}`;break;
    case 'explore':// exploring the area
        t=`You explore the forest. `
        switch(rng(2)){
            case 0:t+=`Nothing happens.`;break;
            case 1:t+=`You find some some berries.`;break;
            case 2:t+=`A snake bites you.`;break;}
        n+=`${btn("next","tmp=x;next()")}`;break;
    }
    end()
})()