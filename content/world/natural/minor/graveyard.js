(function () {
    switch(tmpn){
        case 0://entrance
            t=`you've enterd the graveyard there is a church ahead and some graves near by`;
            n=`${btn("go to church","tmpn=1;next()")+" | "+btn("move to the gravedyard","tmpn=2;next()")}`
            break;
        case 1://inside church
            t=`you've enterd the church`;
            n=`${btn("pray to your god","tmpn=3;next()")+" | "+btn("sit for the serice","tmpn=4;next()")}`
            break;
        case 2://walking around
            t="you've enterd the grave sites"
            n=`${btn("visit grave","tmpn=5;next()")}` 
            break;
        case 3://praying in chuch
            t=`yure praying to your god of choise`
            n=`${btn("continue praying","")}`//rasie spirit by 10%
            break;
        case 4://service 
            t="you're sitting for the service"
            n=`${btn("stay and listen","")}`//refill hunger by what ever % we deiside on
            break;
        case 5://grave
            t="the grave a last resting place"
            n=`${btn("pay your recpects","fun('txt','thank you')")+" | "+btn("rob the gave","tmpn=6;next()")}`
            break;
        case 6://robing grave
            t="robing the grave dont let the keeper see you"
            n=`${btn("dig up grave","")}`//random loot gen/chance that the keeper mite see you 
            break;
        }       
    tmpn=[0,0,0,1,1,2,5][tmpn]
    n+=` | ${btn("back","tmpn="+tmpn+";next()")}`
    // enter go into church(pray[gain QI] or sit at servas[have time pass and have hunger refil])
    //walk around(walk form gravestone to gravestone[pay respects],[rob the grave]{could gdet gold/money clothes/jelery}) 
    end()
})()
