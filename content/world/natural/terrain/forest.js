(function () {let $1=[x,x,x,x]//tmpn=0 or 100 (depth), tmp=x(scene), tmp2='in' or 'out'(direction)
    if(tmp==x||tmp=='walk'){if(tmp2=='in'){$1[2]='out';$1[1]=chunk[loc(pos[2],pos[3])].arr(0);$1[0]=chunk[loc()].arr(1)}
    else{$1[2]='in';$1[0]=chunk[loc(pos[2],pos[3])].arr(0);$1[1]=chunk[loc()].arr(1)}}
    switch(tmp){
    case x:// standing
        t=`Progress: ${tmpn}%<br><br>You are in a forest, there is a ${$1[0]} ahead. The ${$1[1]} is behind you.`
        n=`\${btn('walk',"tmp='walk';next()")} | \${btn('turn around',"tmpn=100-tmpn;tmp2='${$1[2]}';pos[3]*=-1;pos[4]*=-1;next()")}<br><br>`
        n+=`\${btn('explore',"tmp='explore';next()")}`;break;
    case 'walk':// travelling
        tmpn+=10
        if(tmpn>99){
            if(tmp2=='in'){$1[3]=`tmpn=0;tmp=x;tmp2=x;next('${w+'major/'+$1[0]}')`}
            else{$1[3]=`tmpn=10;tmp=x;tmp2='in';pos[0]=cycle(wsize,pos[2]);pos[1]=cycle(wsize,pos[3]);next('${w+'terrain/'+$1[0]}')`}
            t=`The ${$1[0]} is directly ahead.`;n=`\${btn('to ${$1[0]}',"${$1[3]}")} | \${btn('go back',"tmpn=10;tmp2='${$1[2]}';pos[3]*=-1;pos[4]*=-1;tmp=x;next()")}`}
        else{t=`Progress: ${tmpn}%<br><br>You are walking in the forest, there is a ${$1[0]} ahead. The ${$1[1]} is behind you.`
            n=`\${btn('keep walking',"next()")} | \${btn('turn around',"tmpn=100-tmpn;tmp2='${$1[2]}';pos[3]*=-1;pos[4]*=-1;tmp=x;next()")}<br><br>`
            n+=`\${btn('explore',"tmp='explore';next()")}`};break;
    case 'explore':// exploring the area
        t=`You explore the forest. `
        switch(rng(2)){
            case 0:t+=`Nothing happens.`;break;
            case 1:t+=`You find some some berries.`;break;
            case 2:t+=`A snake bites you.`;break;}
        n=`${btn("next","tmp=x;next()")}`;break;
    }
    end()
})()