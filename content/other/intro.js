(function () {
    switch(tmpn){
    case 0://intro
        tmpn=1;
        t=`Welcome to \${col('red','UNNAMED GAME')+' '+col('lightyellow','The general gameplay is still being developed.')} The game uses inspirations from many fantasy settings; some words may not match your preconception.<br><br>Navigate the game using the button (colored text) below.`
        n=`\${btn('next',"next()")}`
        if(localStorage.UGS==undefined){localStorage['UGS']=saves.join()} break;
    case 1://player name
        tmpn=2;
        t=`Name yourself. You can randomize it with a generator. NPC names will use the selected generator.`
        n=`Name generator: \${lst('ngen','1:1,2:2,3:3',"namegennum=elm('ngen').value")} | \${btn('randomize',"psn[0]=window['namegen'+namegennum]();elm('itext').value=psn[0]")} <textarea id="itext" style="resize:none" cols=31 rows=1 maxlength=31 placeholder="31 character limit."></textarea>`
        n+=` \${btn('mystery',"psn[0]=window['namegen'+namegennum]();next()")}<br><br>\${btn('next',"if(elm('itext').value!=''){next()}")}`; break;
    case 2://difficulty
        tmpn=3
        t=`How lucky are you? (difficulty).<br><br>\${col('#B44','Currently does nothing')}`;
        n=`luck: \${lst('dif',"Cursed:0,Bad:1,Unlucky:2,Lacking:3,Normal:4,Above Normal:5,Good:6,Lucky:7,Very Lucky:8,Chosen One:9","ptrt[0]=ptrt[0].cut(1,1,elm('dif').value)")}<br><br>\${btn('next',"next()")}`; break;
    case 3://race
        tmpn=4;race[0]='10'
        t=`What are you?`
        n=`Race: \${lst('bod',"Demon:1,Elf:2,Human:3,Abyss:4,Spirit:5","race[0]=race[0].cut(0,1,elm('bod').value)")} | \${btn('mystery',"race[0]=race[0].cut(0,1,${rng(4,1)});next()")} | \${btn('next',"next()")}`; break;

    case 4://race variant
        tmpn=5
        let $2='';switch(1*race[0][0]){case 1:{$2='Demon:0,Succubus:1,Zombie:2,Vampire:3'}break;case 2:{$2='Elf:0,Fox:1,Dog:2,Cat:3'}break;case 3:{$2='Human:0,Cleric:1,Alchemist:2,Cultivator:3'}break;case 4:{$2='Abyss:0,Curse:1,Mimic:2,Slime:3'}break;case 5:{$2='Spirit:0,Ghost:1,God:2,Elemental:3'}}
        t=`Choose your race variant.`;
        n=`Variant: \${lst('a1',"${$2}","race[0]=race[0].cut(1,1,elm('a1').value)")}<br><br>\${btn('mystery',"race[0]=race[0].cut(1,1,${rng(3)});next()")} | \${btn('next',"next()")}`; break;
    case 5://world
        tmpn=6
        t=`Choose the starting world type and size. It is suggested to start in your race's associated world.<br><br>World size is exponential (minimum 4 is recommended).`
        t+=`<br><br>Natural (Demon,Beast,Human) | Spiritual (Abyss,Spirit)<br><br>\${col('#B44','Currently, only the Natural world type is available')}.`
        n=`World type: \${lst('wld',"Natural:0,Spiritual:0")} | World size: \${lst('wlds',"2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9")} | \${btn('start',"wsize[0]=1*elm('wlds').value;wtype[0]=1*elm('wld').value;next()")}`; break;
    case 6://start
        tmpn=7
        t=`You can now enter the world.`
        n=`\${btn('enter',"tmpn=0;wname=window['namegen'+namegennum]();next('world/0/forest')")}`; break;
    }; if(tmpn>1){n+=`<br><br>\${btn('back',"tmpn-=2;next()")}`}
    end()
})()
