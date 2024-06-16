//restricted characters in save variables [¦,§,°] (used for save data)
//using strings as arrays split characters [!,~,.] (mostly depends on the variable,! is most common)
//script variables
version='0 (DEV)'
t=''//str js convert to html game text (save/load)
n=''//str js convert to html game navigation (save/load)
m=0//str keeps track of what menu is open
x='none'//used to simplify script | 'none' is used instead of other empty values because of saving and loading problems
w='world/natural/'//str for world type in file path
_=''//str the path of the last scene used
stringv=['tmp','tmp2','ally']//variables to initialize and save as strings
numv=['tmpn','namegennum','fsize','cworldid']//variables to initialize and save as numbers
//arrays player
tech=[0,0,0,0]//int index of the associated affinity [weapon, body, energy, mental, etc (effects)]
stat=[0]//int [0=money]
aff=['Hands']//str affinity name (basically a skill name)
affc=[0]//int affinity color (0=Black, 1=White) (2=Red, 3=Green, 4=Blue)
afft=[2]//int affinity type (0=none,1=skill,2=weapon,3=physical,4=energy,5=mental,6=effect,7=faith)
affr=[8]//int affinity rarity (similar to item rarity, 9 is special and means no xp growth) (Acts as a multiplier for certain effects)
afflvl=[0]
affxp=[0]
atk=[0,0,0]//attack[0physical, 1energy, 2spirit]
def=[0,0,0]//defense[0physical, 1energy, 2spirit]
sen=[0,0,0]//senses[0physical, 1energy, 2spirit]
hp=[1,1,1,0]//current,max,modifier,regen
ep=[1,1,1,0]
sp=[1,1,1,0]
//arrays items
itm=[x]//str item name
itma=[0]//int item amount
itmt=[3]//int item type
itmr=[8]//int rarity (0=rare upto 8=notrare or 9=black)
itmd=[x]//str item data (data should depend on the item type)
eqp=[x,x,x]//str (slots)
//arrays materials
mat=[x]//str material name
mata=[0]//int material amount
matt=[0]//int material affinity type (0-4)
matf=[0]//int material form (0=none,1=ingot,ect)
matc=[0]//int material crafting usage (0=Cooking,1=Smithing,etc)
matr=[8]//int rarity (0=rare upto 8=notrare or 9=black)
//arrays person
pid=[0]//int
psn=[x]//str name
psna=[x]//str [organization name!organization level!specialty!specialty level]
psnl=[x]//str location ex:'00' xy
ptrt=['000000']//str ['character,luck,charm,personality,fame,knowledge'](ptrait) characters representing different trait values
peqp=[x]//str ['weapon!weapon value!clothes!clothing value']
race=['00']//str race+variant
pfav=[0]//int personal reputation/favor
lvl=[0]//int level
age=[0]//int age in years
pxp=[0]//int experience to level
//arrays worlds
wid=[0]//int the unique world number
wname=[x]//str world name
wtype=[x]//str world type (natural,spiritual)
wsize=[1]//int world chunk amount square ex: 3 for 3*3
wchunk=[x]//str combined chunks [chunk~chunk]
wchunkd=[x]//str combined chunk data [chunk~chunk]
wppl=[x]//for saving and loading the people of each world
//loaded current world data
chunk=['forest!city!cave']//chunk location data [terrain!major!minor]
chunkd=['!!!!']//chunk data [data!!data major!!data minor]
//arrays general
imgv=[x]//the images used in the character frame
pos=[0,0,0,0]//X,Y,direction(1=N,-1=S),direction(1=E,-1=W)
tmppsn=[x]//str ['name!age!ptrt']
time=[0,0,0,0,0]//int m/h/D/M/Y
//script arrays/objects
ids=[0,0]//int the highest number id used (pid/wid)
saves=[0,0,0,0,0,0,0]//used to track saves
ss=[x,x,x]//default values for stringv varibles
sn=[0,1,16,0]//default values for numv variables
arrn=['wid','pid','sn','pfav','itma','itmt','itmr','time','trtl','lvl','pxp','age','stat','hp','ep','sp']//number array names (save/load)
arrs=['ss','tech','newpsn','psn','race','psnp','ptrt','peqp','slot','eqp','itmd','itm','imgv']//string array names (save/load)
sv=[[],[],[],[],'','']// used in save/load functions
cc=['#B44','#B4B','#B80','#BB4','#4B4','#44B','#4BB','#BBB','#888','#000']//color codes for stat number, etc
ncon1=['b','ch','d','f','g','h','j','k','l','m','n','p','q','qu','r','s','sh','t','v','w','x','y','z']
ncon2=['ba','be','bi','bo','bu','fu','chi','cho','chu','ge','gi','go','gu','ha','he','hi','ho','ji','jo','ju','ka','ke','ki','ko','ku','ma','me','mi','mo','mu','na','ne','ni','no','nu','pa','pe','pi','po','pu','ra','re','ri','ro','ru','sa','se','so','su','shi','sho','shu','ta','te','to','tsu','wa','za','ze','zo','zu']
ncon3=['el','la','v','an','or','ar','ri','ice','is','er','st','al','ea','b','no','ma','d','ol','lo','o','on','fe','br','ay','ly','e','and','l','tr','ur','en','he','y','lt','in','og','gre','a','ra','f']
nvow1=['a','an','ang','ao','e','en','eng','ei','i','in','o','ong','u','uo','ua']
cfimg=["bgimg","tail","eff1","body","eff2","eyes","hair","back","bottom","top","hair2"]//the image layers to load in the character frame
ptrait=['character(0Bad,1Neutral,2Good)','luck(0Bad,1Poor,2Normal,3Good,#Extreme)','charm(0Bad,1Low,2Normal,3Good,4High)','personality(0)','fame(0Unknown,1Low,2Medium,3High,4Exreme)','knowledge(0Stupid,1Poor,2Normal,3Good,Very Good)']
races={'1':'Demon','2':'Furry','3':'Human','4':'Abyss','5':'Spirit','10':'Demon','20':'Furry','30':'Human','40':'Abyss','50':'Spirit','11':'Succubus','21':'Fox','31':'Cleric','41':'Curse','51':'Ghost','12':'Zombie','22':'Dog','32':'Alchemist','42':'Mimic','52':'God','13':'Vampire','23':'Cat','33':'Cultivator','43':'Slime','53':'Elemental'}
matform=[x,'Ingot','Bottle','Crystal','Bag','Chunk','Ball','Stack']//the type of container for a material
affcolor=['Black','White','Red','Green','Blue']
afftype=['none','skill','weapon','physical','energy','mental','effect','faith']
matcraft=['Cooking','Smithing','Formation']//crafting uses for materials
terrains=['desert','forest','jungle','mountain','sea','snow','swamp']
majorfeatures=['city','empty','fort','mine','sect','village']
minorfeatures=['ancient','cave','den','empty','hideout','labyrinth','lake','portal','shelter','shrine']
direction=[['Southwest','South','Southeast'],['West','None','East'],['Northwest','North','Northeast']]
//script category arrays
world=['wid','wname','wtype','wsize','wchunk','wppl']
item=['itm','itma','itmt','itmr','itmd']
itype=['Equipment','Charm','Consumable','Item','Consumable']//equip:(slots type)XstatXnumXetc,charm:truthyXeval,consumable:statXnumXetc,item:nothing,consumable:eval,material:amountXtypeX(affinityXlevel)
slots=['weapon','top','bottom']
slotc=['top','bottom']
affinity=['aff','affc','afft','affr','afflvl','affxp']
person=['pid','psn','ptrt','race','pfav','lvl','age','pxp']
material=['mat','mata','matt','matf','matc','matr']