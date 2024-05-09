(function () {let $0=[];let $1=[];let $2=``
    itm.slice(1).forEach(($a,$b)=>{let $c=arr('item',$b+1);$0.push($a+":"+(1+$b));$1.push(col(cc[$c[3]],$a)+` [ ${itype[$c[2]]} ] (${$c[1]})`)});
    $2=`\${btn('use',"iuse(elm('itmes').value);next('menu/items',0)")} \${lst('items',"${$0.join(',')}")} \${btn('destroy',"rem('item',elm('items').value);next('menu/items',0)")}<br><br>`
    $2+=`\${col('#7B7','Items')}:<br>-Name [ Type ] (Amount)<br><br>${$1.join('<br>')}`
    fun('menu',$2)
    end(0)
})()