(function () {
    let $1 = tec(0).split('xx'); let $2 = tec(1).split('xx'); let $3 = tec(2).split('xx'); let $4 = ";nav('txt','You cultivate for four hours.')"; $t = `Choose a cultivation technique.`
    let $5 = `${btn($1[0], $1[1] + $4 + ";time('0:0:4:0');next('cultivate')") + "<br>" + $1[2]} ${btn("discard", "tec('del',0);next('cultivate')")}<br><br><br>${btn($2[0], $2[1] + $4 + ";time('0:0:4:0');next('cultivate')") + "<br>" + $2[2]} ${btn("discard", "tec('del',1);next('cultivate')")}<br><br><br>${btn($3[0], $3[1] + $4 + ";time('0:0:4:0');next('cultivate')") + "<br>" + $3[2]} ${btn("discard", "tec('del',2);next('cultivate')")}<br><br><br>`
    if ($ep < 1) { $5 = '' }; $n = `${$5 + btn("stop", "$tmp='none';next('" + $tmp + "')")}`
    end()
})()