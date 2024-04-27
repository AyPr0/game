//restricted characters for variables [¦,§,°]
//using strings as arrays split character[!]
//script variables
version='0 (DEV)'
t=''//str js convert to html game text (save/load)
n=''//str js convert to html game navigation (save/load)
m=0//str keeps track of what menu is open
x='none'//used to simplify script | 'none' is used instead of other empty values because of saving and loading problems
w=''//str possible use for world type in file path
_=''//str the path of the last scene used
stringv=['tmp','tmp2','ally']//variables to initialize and save as strings
numv=['tmpn','namegennum','fsize']//variables to initialize and save as numbers
//arrays player
tech=[x,x,x]//used in testing character tab (may be used elsewhere or removed later)
imgv=['x']//the images used in the character frame
stat=[1,0]//int [0money, 1speed]
skill=[1,0,1,0,1,0]//int [0hands 1xp, 2sword 3xp, 4bow 5xp] skill type/xp
atk=[0,0,0]//attack[0physical, 1energy, 2spirit]
lvl=[0,0,0]//level[0physical,1energy, 2spirit] attack and defense are modified by level
def=[0,0,0]//defense[0physical, 1energy, 2spirit]
sen=[0,0,0]//senses[0physical, 1energy, 2spirit]
itm=['Name']//str item name
itmd=['Description']//str item description
itmt=[3]//int item type
itme=['item effects']//str item effects
itma=[0]//int item amount
itmr=[8]//int rarity (0=rare upto 8=notrare or 9=black)
eqp=[x,x,x]//str (slots)
hp=[1,1,0,0]//current,max,modifier,regen
ep=[1,1,0,0]
sp=[1,1,0,0]
//arrays person
pid=[0]//int
psn=['name']//str
ptrt=['000000']//str ['character,luck,charm,personality,fame,knowledge'] characters representing different trait values
body=[0]//int body variant
pfav=[0]//int personal reputation/favor
lvl=[0]//int level
age=[0]//int age in years
pxp=[0]//int experience to level
//arrays worlds
wid=[0]//int the unique world number
wname=[x]//str world name
wgen=[x]//str world generated areas
wtype=[x]//str world atype
wppl=[x]//for saving and loading the people of each world
weight=[0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,7,7,8,9]//used for rng wieghting ex: weight[rng(31)]
//chunks
//[<terrain> <feature major> <feature minorx3?> <level> <population> <features coordinates> <major feature data> <feature minor datax3?>]
//arrays general
time=[0,0,0,0,0]//int m/h/D/M/Y
//script arrays/objects
ids=[0,0]//int the highest number id used (pid/wid)
newpsn=[]//names of temporary npcs (psn)
saves=[0,0,0,0,0,0,0]//used to track saves
ss=[x,x,x]//default values for stringv varibles
sn=[0,1,16]//default values for numv variables
arrn=['wid','pid','sn','pfav','itma','itmt','itmr','time','trtl','trtx','kiv','lvl','pxp','dgr','stat','hp','ep','sp']//number array names (save/load)
arrs=['ss','tech','newpsn','psn','body','psnp','psna','trt','kie','slot','eqp','itme','itmd','itm','imgv']//string array names (save/load)
sv=[[],[],[],[],'','']// used in save/load functions
cc=['#B44','#B4B','#B80','#BB4','#4B4','#44B','#4BB','#BBB','#888','#000']//color codes for stat number, etc
ncon1=['b','ch','d','f','g','h','j','k','l','m','n','p','q','qu','r','s','sh','t','v','w','x','y','z']
ncon2=['ba','be','bi','bo','bu','fu','chi','cho','chu','ge','gi','go','gu','ha','he','hi','ho','ji','jo','ju','ka','ke','ki','ko','ku','ma','me','mi','mo','mu','na','ne','ni','no','nu','pa','pe','pi','po','pu','ra','re','ri','ro','ru','sa','se','so','su','shi','sho','shu','ta','te','to','tsu','wa','za','ze','zo','zu']
ncon3=['a','a','a','a','b','c','d','e','e','e','e','f','g','h','i','i','i','i','j','k','l','m','n','o','o','o','o','p','q','r','s','t','u','u','u','u','v','w','x','y','z']
nvow1=['a','an','ang','ao','e','en','eng','ei','i','in','o','ong','u','uo','ua']
cfimg=["bgimg","tail","eff1","body","eff2","eyes","hair","back","bottom","top","hair2"]//the image layers to load in the character frame
ptrait=['character','luck','charm','personality','fame','knowledge']
item=['itm','itmd','itmt','itme','itma','itmr']
itype=['equipment','charm','consumable','item','consumable']//equip:(slots type)XstatXnumXetc,charm:truthyXeval,consumable:statXnumXetc,item:nothing,consumable:eval
slots=['weapon','top','bottom']
slotc=['top','bottom']
person=['pid','psn','ptrt','body','pfav','lvl','age','pxp']
