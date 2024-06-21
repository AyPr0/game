(function () {let $1=[x,x,'out']//tmpn=0 or 100 (depth), tmp=x(scene), tmp2='in' or 'out'(direction)
    if(tmp==x||tmp=='walk'){
        $1[0]=chunk[loc()].arr(1);$1[1]=chunk[loc('d')].arr(0)
        if(tmp2=='out'){$1=[$1[1],$1[0],'in']}}
    switch(tmp){
    case x:// standing
        t=`You are in the mountains. `
        if(tmpn>60){t+=`There is a ${$1[0]} ahead. A ${$1[1]} is long behind you.`}else if(tmpn<40){t+=`There is a ${$1[0]} far in the distance. A ${$1[1]} is behind you.`}else{t+=`There is a ${$1[0]} in the distance. A ${$1[1]} is far behind you.`}
        n=`\${btn('walk',"ptime([0,1]);tmp='walk';next()")} | \${btn('turn around',"tmpn=100-tmpn;tmp2='${$1[2]}';pos[2]=(pos[2]+4)%8;next()")}<br><br>`
        n+=`\${btn('explore',"ptime([20]);tmp='explore';t='You explore the mountains and';next()")}`;break;
    case 'walk':// travelling
        tmpn+=10
        if(tmpn>99){
            let $2=``
            if(tmp2=='in'){$2=`tmpn=0;tmp=x;tmp2=x;next(w+'major/${$1[0]}')`}
            else{$2=`tmpn=10;tmp=x;tmp2='in';pos[0]=${cycle(wsize,pos[2]+rdirection[pos[2]]%wsize[cworldid])};pos[1]=${cycle(wsize,pos[2]+rdirection[8+pos[2]]%wsize[cworldid])};next(w+'terrain/${$1[0]}')`}
            t=`The ${$1[0]} is in front of you. You are at the ${direction[(pos[2]+4)%8]} side of it.`;n=`\${btn('to ${$1[0]}',"${$2}")} | \${btn('back to ${chunk[loc()].arr(0)}',"tmpn=10;tmp2='${$1[2]}';pos[2]=(pos[2]+4)%8;tmp=x;next()")}`
            if(tmp2=='in'){n+=` | \${btn('walk around',"pos[2]=1*elm('dlst').value;next()")} to the \${lst('dlst',"${direction[(pos[2]+3)%8]}:${(pos[2]+7)%8},${direction[(pos[2]+5)%8]}:${(pos[2]+1)%8}")} side of the ${$1[0]}`}}
        else{let $3=""
            if(rng(9)==0){$3="explore';tmpn+=10;t='As you are walking,'"}else{$3="walk'"}
            t=`You are walking in the mountains. `
            if(tmpn>60){t+=`There is a ${$1[0]} ahead. The ${$1[1]} is long behind you.`}else if(tmpn<40){t+=`There is a ${$1[0]} far in the distance. The ${$1[1]} is behind you.`}else{t+=`There is a ${$1[0]} in the distance. The ${$1[1]} is far behind you.`}
            n=`\${btn('keep walking',"ptime([0,1]);tmp='${$3};next()")} | \${btn('turn around',"tmpn=100-tmpn;tmp2='${$1[2]}';pos[2]=(pos[2]+4)%8;tmp=x;next()")}<br><br>`
            n+=`\${btn('explore',"ptime([20]);tmp='explore';t='You explore the mountains and';next()")}`};break;
    case 'explore':// exploring the area
        switch(rng(2)){
            case 0:t+=` nothing happens.`;break;
            case 1:t+=` find some some rocks.`;break;
            case 2:hp[0]-=2;sbu(['hp']);t+=` a snake bites you.`;break;}
            if(hp[0]<1){t+=` You lose consciousness.`;n=`${btn("next","tmp='faint!2!world/terrain/mountains!none';next('other/rest')")}`}else{n=`${btn("next","tmp=x;next()")}`};break;
    }
    end()
})()