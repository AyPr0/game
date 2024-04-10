(function () {
    switch(tmp){
    case 0://intro
        tmp=1;
        t=`Welcome to \${col('red','UNNAMED GAME')+' '+col('lightyellow','The general gameplay is still being developed.')} The game uses inspirations from many fantasy settings; some words may not match your preconception.<br><br>Navigate the game using the buttons below.`
        n=`\${btn('next',"next('other/intro')")}`
        if(localStorage.UGS==undefined){localStorage['UGS']=saves.join()} break;
    case 1://player name
        tmp=2;
        t=`Name yourself. You can randomize it with a generator. NPC names will use the selected generator.`
        n=`Name generator: \${lst('ngen','1:1,2:2,3:3',"namegennum=elm('ngen').value")} | \${btn('randomize',"psn[0]=window['namegen'+namegennum]();elm('itext').value=psn[0]")} <textarea id="itext" style="resize:none" cols=31 rows=1 maxlength=31 placeholder="31 character limit."></textarea>`
        n+=` \${btn('mystery',"psn[0]=window['namegen'+namegennum]();next('other/intro')")}<br><br>\${btn('next',"if(elm('itext').value!=''){next('other/intro')}")}`; break;
    case 2://difficulty
        tmp=3
        t=`How lucky are you? (difficulty).`;
        n=`luck: \${lst('dif',"Cursed:0,Bad:1,Unlucky:2,Lacking:3,Normal:4,Above Normal:5,Good:6,Lucky:7,Very Lucky:8,Chosen One:9","ptrt[0]+=elm('dif').value")}<br><br>\${btn('next',"next('other/intro')")}`; break;
    case 3://race
        tmp=4
        t=`What are you?`
        n=`Race: \${lst('bod',"Human:0","body[0]=elm('bod').value")} | \${btn('mystery',"body[0]=String(0*rng(4));next('other/intro')")} | \${btn('next',"next('other/intro')")}`; break;

    case 4://race variant
        tmp=5
        let $1=body[0];let $2='human:0,succubus:1,beastman:2,witch:3';if($1==1){$2='human:0,succubus:1,beastman:2,witch:3'};if($1==2){$2='human:0,succubus:1,beastman:2,witch:3'};if($1==3){$2='human:0,succubus:1,beastman:2,witch:3'}
        t=`Choose your variant.`;
        n=`Good: \${lst('a1',"${$2}")}<br><br>\${btn('mystery',"body[0]+=0*rng(3);next('other/intro')")} | \${btn('next',"body[0]=elm('a1').value;next('other/intro')")}`; break;
    case 5://looks
        tmp=6
        t=`What do you look like?`
        n=`Type: \${lst('wld',"Natural:0,Demonic:1,Spirit:2,Abyss:3")} | \${btn('start',"next('other/intro')")}`; break;
    case 6://world
        tmp=7
        t=`Choose starting world type. Each world is associated with a race. It is suggested to start in your associated world.`
        t+=`<br><br>Natural(Human) Demomic(Demon) Spiritual(Neutral) Abyss(Abyss)`
        n=`Type: \${lst('wld',"Natural:0,Demonic:1,Spirit:2,Abyss:3")} | \${btn('start',"next('other/intro')")}`; break;
    case 7://start
        tmp=8
        t=`You can now enter the world.`
        n=`\${btn('enter',"tmp=x;next('worldgen')")}`; break;
    }; if(tmp>1){n+=`<br><br>\${btn('back',"tmp=2-tmp;next('other/intro')")}`}
    end()
})()
