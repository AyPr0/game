(function () {
    //a city. sect association, arena, competitions, organization gatherings, housing, bedding, markets and trading, jobs
    switch(tmp){
        case x:
            t=`You enter the city. People walk along the roads. There are many buildings nearby`
            n=`\${btn('market',"tmp='market';next()")} | \${btn('inn',"tmp='inn';next()")}<br><br>\${btn('leave city',"tmp='leave';next()")}`;break;
        case 'leave':
            t=`There are 8 ways to leave the city.`
            n=`\${btn('leave',"tmpn=10;tmp2='out';pos[2]=1*elm('sdir').value;next(w+'terrain/${chunk[loc()].arr(0)}')")} through the \${lst('sdir',"North:0,Northeast:1,East:2,Southeast:3,South:4,Southwest:5,West:6,Northwest:7")} exit | \${btn('back',"tmp=x;next()")}`;break;
        case 'market':
            t=`You are at the market.`
            n=`\${btn('back',"tmp=x;next()")}`;break;
        case 'inn':
            t=`You are at an inn.`
            n=`\${btn('rest',"tmp='rest';heal();sbu();next()")} | \${btn('back',"tmp=x;next()")}`;break;
    }
    end()
})()