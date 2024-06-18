(function () {
    switch(tmpn){
        case 0://entrance
            t=`you enter the cemetery. There is a chapel ahead and some graves near by.`;
            n=`\${btn("to chapel","tmpn=1;next()")} | \${btn("to graves","tmpn=2;next()")}`
            break;
        case 1://inside chapel
            t=`you've enterd the chapel`;
            n=`\${btn("pray","tmpn=3;next()")} | \${btn("search","tmpn=4;next()")}`
            break;
        case 2://walking around
            t="You are among the graves."
            n=`\${btn("visit a grave","tmpn=5;next()")}` 
            break;
        case 3://praying
            t=`You pray.`
            n=`\${btn("continue praying","")}`
            break;
        case 4://search chapel 
            t="You search the chapel."
            n=`\${btn("keep looking","")}`
            break;
        case 5://grave
            t="You approach a grave."
            n=`\${btn("respect the dead","fun('txt','Thank you.')")} | \${btn("rob","tmpn=6;next()")}`
            break;
        case 6://robing grave
            t="You decide to rob the grave."
            n=`\${btn("dig","")}`//random loot gen/chance that the keeper might see you
            break;
        }       
    tmpn=[0,0,0,1,1,2,5][tmpn]
    n+=` | ${btn("back","tmpn="+tmpn+";next()")}`
    end()
})()
