$(function(){
    let gnb = '.gnb'
    $(gnb).on('mouseover', function(){
        $('.depth2').fadeIn(200)
        $('.depth-bg').fadeIn(200)
    })
    $(gnb).on('mouseleave', function(){
        $('.depth-bg').fadeOut(200)
        $('.depth2').fadeOut(200)
    })
    let sony = 'footer .right .sony-menu button'
    let menu = 'footer .right .sony-menu .side-menu'
    $(sony).on('click', function(){
        $(menu).fadeToggle(0)
    })
    let family = 'footer .m-top .sony-menu button'
    let side = 'footer .m-top .sony-menu .side-menu'
    $(family).on('click', function(){
        $(side).fadeToggle(0)
    })
    let sebtn = 'header .util #sea'
    let close = 'header .se-bg .close'
    let ser = 'header .se-bg'
    $(sebtn).on('click', function(){
        $(ser).fadeIn(0)
    })
    $(close).on('click', function(){
        $(ser).fadeOut(0)
    })

    let btnhuman = 'header .util #human'
    let utilM = 'header .util-menu'
    $(btnhuman).on('click', function(){
        $(utilM).fadeToggle(0)
    })
})

//모바일
$(function(){
    let btnmenu = '.m-util button'
    let main = '.m-menu'
    let btnclose = '.m-menu #close'
    $(btnmenu).on('click', function(){
        $(main).slideDown()
    })
    $(btnclose).on('click', function(){
        $(main).slideUp()
    })
})
$(function(){
    let sidemenu = '.m-main .m-sidemenu > li > a'
    let submenu = '.m-main .m-sidemenu > li > ul'
    $(sidemenu).on('click', function(){
        $(submenu).fadeToggle(0)
    })
})