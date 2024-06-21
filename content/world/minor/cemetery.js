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
            n=`\${btn("dig","tmpn=7;next()")}`//random loot gen(get a random amount of julry betwee 1 and 5 that can be braselet or neklas or mix of the two)/chance that the keeper might see you(take away anything you stole and get kiked out random chanse of it hapening)
            //chase of getting metiral money chasce that the spirit becomes dvengful and attacks
            break;
        case 7://loot
            tmp=rng(2)    
            tmp=["a gold ingot","a small bag of money","nothing"][tmp];['mat','mata','matt','matf','matc','matr']
            t=`you find ${tmp}`
            n=`${btn("take it","if(rng(2)==0){tmpn=8;next()}else{tmpn=9;next()}")} or ${btn("leave it","tmpn=10;next()")}`
            break;
        case 8://fight
            t="You approach a grave."
            n=`\${btn("respect the dead","fun('txt','Thank you.')")} | \${btn("rob","tmpn=6;next()")}`
            break;
        case 9://take item
            t="You approach a grave."
            n=`\${btn("respect the dead","fun('txt','Thank you.')")} | \${btn("rob","tmpn=6;next()")}`
            break;  
        case 10://leav it
            t="You approach a grave."
            n=`\${btn("respect the dead","fun('txt','Thank you.')")} | \${btn("rob","tmpn=6;next()")}`
            break;  
        }      
    tmpn=[0,0,0,1,1,2,5][tmpn]
    if(tmpn<7){n+=` | ${btn("back","tmpn="+tmpn+";next()")}`}
    end()
})()
