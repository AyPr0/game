String.prototype.cut=function(index,cut,add) {if(index<0) {index+=this.length;if(index<0) {index=0}};return this.slice(0,index)+(add||"")+this.slice(index+(cut||0))}
//use functions
function genpsn($a=[x,x,x,x,x,x,x,x,x],$b=0) {let $0=($c)=>{$1[$c]=$a[$c]};let $1=Array(9);if($a[0]==x){$1[0]=window['namegen'+namegennum]()}else{$0(0)};if($a[1]==x){$1[1]=String(rng(99999));while($1[1].length<5){$1[$1]='0'+$1[1]}}else{$0(1)};if($a[2]==x){$1[2]=rng(4)}else{$0(2)};if($a[3]==x){$1[3]=rng(20,-10)}else{$0(3)};if($a[4]==x){$1[4]=rng(2)}else{$0(4)};if($a[5]==x){$1[5]=String(rng(9));while($1[5].length<12){$1[5]+=rng(9)}}else{$0(5)};if($a[6]==x){$1[5]=rng(1)}else{$0(6)};$1[7]=0;if($a[7]==x){$1[8]=rng(81+18)}else{$0(6)};$1[9]=pid.length;if($b==0){newpsn.push($1[0])}add('psn',$1);return($1)}
function genworld($a=rng(3),$b=x,$c=1) {let $0=window['namegen'+ngen]().replace(' ','').slice(0,9);if($b!=x){$0=$b};world.push($0);wgen.push(Array.from(Array($c*$c)).map(()=>weight[rng(weight.length-1)]).join(''));wtype=desc.atype[$a];wppl.push(x)}//generates a new world $a=wtype, $b=wname, $c=world size
function genchunk($a,$b) {}
function loadchunk($a) {}
function loadworld($a) {}
function trait($a) {let $0=trt.indexOf($a);if($0>-1){return(trt[$0],trtl[$0],$0)}}
function rng($a,$b=0) {return(Math.floor(Math.random()*($a+1))+$b)}
function perc($a,$b) {return((100*Number($a/$b)).toFixed())}
function next($a=_,$b=2) {let $1=document.createElement("script");_=$a;document.body.appendChild($1);$1.id="script"+$b;$1.src="content/"+$a+".js"}
function exp($a,$b=0) {if($a==undefined){let $0=['$hp','$ep','$qi'];function $F($c,$d){if(window[$c]<1){$xp[$d]+=Math.floor(50/$lvl[$d]);if($xp[$d]>99){$xp[$d]-=100;$lvl[$d]+=1;window[$c+'m']+=$lvl[$d]}}};$0.forEach($F)}else{$xp[$a]+=$b;if($xp[$a]>99){$xp[$a]-=100;$lvl[$a]+=1}}}
function cycle($a,$b) {while($a<0){$a=$b-$a};return($a%$b)}
function num($a) {let $1=$a;if($1<10&&$1>-10){if($1<0){$1='-0'+Math.abs($1)}else{$1='0'+$1}};return($1)}
function ptime($a) {let $2=[60,24,28,14];time.forEach(($b,$c)=>{time[$c]+=$a[$c]});$2.forEach(($b,$c)=>{if(time[$c]>=$2[$c]){time[$c]-=$2[$c];time[$c+1]+=1}});if(time[3]==0){if(time[2]>0){time[3]+=1}};fun('hour',time[1]+':'+num(time[0]))}
//html functions
function btn($a,$b) {return('<button onclick="'+$b+'"><big>'+$a+'</big></button>')}
function col($a,$b) {return("<font color="+$a+">"+$b+"</font>")}
function fun($a,$b) {elm($a).innerHTML=eval('`'+$b+'`')}
function cimg($a,$b) {if($a==undefined){}else{elm($a).src="img/"+$b}}
function clothe($a,$b) {let $1=($c,$d)=>elm($c).src=eqp[2+$d].split('X')[2];if($a==undefined){slotc.forEach($1)}else{$1(slotc.indexOf($a-2),$b)}}//$a=slotc,$b=img
function lst($a,$b,$c) {let $0='';let $2=$b.split(',');if($c!=undefined){$0=' onchange="'+$c+'"'};let $1='<select id="'+$a+'"'+$0+'>';function $F($c) {let $3=$2[$c].split(':');$1+=('<option value="'+$3[1]+'">'+$3[0]+'</option>')};Object.keys($2).forEach($F);$1+='</select>';return($1)}
function ccolor($a,$b) {let $1=$img.slice(3,7);let $2=$img.slice(7,11);function $F($c,$d,$e) {elm("c"+(2+Number($d))+"img").style.filter="hue-rotate("+(36*$1[$d])+"deg) brightness("+(1-(0.2*$e))+")"};if($a==undefined){($1).forEach($F)}else{if($b==0){$2[$a]=($2[$a]+1)%5}else{$1[$a]=($1[$a]+1)%10};$F(0,$a,$2[$a]);$img=$img.slice(0,3).concat($1,$2).map(Number)}}
//script functions
function date() {return(Date().slice(4,-33))}
function ieff($a) {let $1=arr('itm',$a);let $2=$1[5].split('X');switch($1[2]){case 0:equip($a,$1,$2);break;case 1:if($2[0]){eval($2[1])};break;case 2:$2.forEach(($c,$d)=>{if($d%2==0){window[$c]=$b*$2[1+$d]}});$1[3]-=1;break;case 4:eval($2[0]);$1[3]-=1;break;};if($1[3]<1){rem('itm',$a)}}//$a=item number, $b=modifier (-1 for dequip)
function equip($a,$b,$c) {let $1=eqp.indexOf($b[0]);let $2=($d,$e)=>{if($e%2==0){window[$d]+=$1*Number($c[1+$e])}};if($1>-1){eqp[$1]=x;if(slotc.includes($c[0])){clothe($c.splice(0,1),$c.splice(0,1))};$1=-1;$c.forEach($2)}else{if(slotc.includes($c[0])){clothe($c.splice(0,1),$c.splice(0,1))};}}
function allyid() {return(psn.indexOf(ally))}
function arr($a,$b){let $1=[];let $2=function($c){$1.push(window[$c][$b])};window['arr'+$a].forEach($2);return($1)}
function rem($a,$b){if($a=='itm'){equip($b,'x')};let $1=function($c){window[$c].splice($b,1)};window['arr'+$a].forEach($1)}
function add($a,$b){let $1=function($c,$d){window[$c].push($b[$d])};desc[$a].forEach($1)}
function namegen1(){let $1=rng(2,1);let $2=rng(2,1);let $3=nvow1.length;$4=ncon1.length;let $5='';let $6='';while($1>0){$5+=ncon1[rng($4-1)]+nvow1[rng($3-1)];$1-=1};$5=$5[0].toUpperCase()+$5.slice(1);while($2>0){$6+=ncon1[rng($4-1)]+nvow1[rng($3-1)];$2-=1};$6=$6[0].toUpperCase()+$6.slice(1);return($5+' '+$6)}
function namegen2(){let $1=rng(3,1);let $2=rng(3,1);let $3=ncon2.length;let $4='';let $5='';while($1>0){$4+=ncon2[rng($3-1)];$1-=1};while($2>0){$5+=ncon2[rng($3-1)];$2-=1};$4=$4[0].toUpperCase()+$4.slice(1);$5=$5[0].toUpperCase()+$5.slice(1);return($4+' '+$5)}
function namegen3(){let $1=rng(9,2);let $2=rng(13,2);let $3='';let $4='';let $5=ncon3.length-1;while($3.length<$1){$3+=ncon3[rng($5)]};while($4.length<$2){$4+=ncon3[rng($5)]};$3=$3[0].toUpperCase()+$3.slice(1);$4=$4[0].toUpperCase()+$4.slice(1);return($3+' '+$4)}
function togdis($a) {let $1=['character','items','savemenu','settings','cheats'];if($a==m){elm('infodis').style.display=x;m=0}else{next("menu/"+$1[$a-1],0);elm('infodis').style.display="block";m=$a}}
function sbu($a=['hp','ep','sp']) {if(Array.isArray($a)){$a.forEach(sbu)}else{let $1=[window[$a][0],window[$a][1]];let $2=elm($a+"bar");if($1[0]>$1[1]){window[$a][0]=$1[1];$1=100}else{$1=perc($1[0],$1[1])};if($1<0){window[$a][0]=0;$1=0};$2.style.width=$1+"%";$1=Math.floor($1/20);$2.style.background=cc[$1];fun($a+"text",col(cc[$1],window[$a][0])+" ("+window[$a][1]+")")}}
function end($a=2) {elm("script"+$a).remove();if($a==1||$a==3){sbu()};if($a==2||$a==3){fun('txt',t);fun('nav',n)}}
function elm($a){return(document.getElementById($a))}
//save/load functions
function varld() {sv=sv.split('!!!');let $1=arrn.length;sv[0]=sv[0].split('!!');while($1>0){$1-=1;window[arrn[$1]]=sv[0][$1].split('XX').map(Number)};$1=arrs.length;sv[1]=sv[1].split('!!');while($1>0){$1-=1;window[arrs[$1]]=sv[1][$1].split('XX')};t=sv[2];n=sv[3];reset()}
function varsv() {sv=[[],[],[],[],'',''];reset('s');let $1=0;while($1<arrn.length){sv[0].push(window[arrn[$1]].join('XX'));$1+=1};sv[0]=sv[0].join('!!');$1=0;while($1<arrs.length){console.log($1);sv[1].push(window[arrs[$1]].join('XX'));sv[1]=sv[1].join('!!');$1+=1};sv[2]=t;sv[3]=n;sv=sv.join("!!!")}
function reset($a) {let $1;let $2;if($a=='s'){ss=[];sn=[];$1=($b)=>ss.push(window[$b]);$2=($b)=>sn.push(window[$b])}else{$1=($b,$c)=>window[$b]=ss[$c];$2=($b,$c)=>window[$b]=sn[$c]};stringv.forEach($1);numv.forEach($2);sbu()}
function save($a) {varsv();if($a=='file'){elm("fdl").href="data:text/plain,"+encodeURIComponent(sv);elm("fdl").download="UG Save ("+date()+").txt";elm("fdl").click()}else{localStorage["UG "+$a]=sv;saves[$a]=date();localStorage.UGS=saves.join()}}
function load($a) {sv=localStorage["UG "+$a];varld()}
async function loadfile($a) {sv=await $a.text();varld()}
