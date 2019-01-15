$(function () {
    $('.market').width(innerWidth)

    $('.type-item').click(function () {
        //a标签点击刷新页面
        // $(this).find('span').show()


        // 获取 分类下标，并设置对应的样式
        var typeIndex = $.cookie('typeIndex')
        if(typeIndex){
            $('.type-item').eq(typeIndex).find('span').show()
        }else {
            $('.type-item:first').find('span').show()
        }



        // 记录下标
        /* jquery.cookie操作
            # 设置
            $.cookie(key, vlaue, options)
                options选项 {expires:过期时间, path: 路径}
            # 获取
            $.cookie(key)
            # 删除
            $.cookie(key, null)
        */
        $.cookie('typeIndex',$(this).index(),{path:'/'})


    })


    // 全部类型点击
    var categoryShow = false
    $('#category-bt').click(function () {
        console.log('全部类型点击')
        // categoryViewShow()
            // 取反
            categoryShow = !categoryShow

            // 三目运算符
            categoryShow ? categoryViewShow() : categoryViewHide()
        }
    )


    //综合排序点击
    var sortShow = false
    $('#sort-bt').click(function () {
        console.log('综合排序点击')
        sortShow = !sortShow
        sortShow ? sortViesShow() : sortViesHide()
    })



    function categoryViewShow() {
        // sortShow = false
        // sortViewHide()
        $('.category-view').show()
        $('.sort-view').hide()
        $('#category-bt i').removeClass('glyphicon glyphicon-menu-up').addClass('glyphicon glyphicon-menu-down')
    }


    function categoryViewHide() {
        // sortShow = false
        // sortViewHide()
        $('.category-view').hide()
        $('.sort-view').hide()
        $('#category-bt i').removeClass('glyphicon glyphicon-menu-down').addClass('glyphicon glyphicon-menu-up')
    }

    function  sortViesShow() {
        $('.sort-view').show()
        // $('.category-view').hide()
        $('#sort-bt i').removeClass('glyphicon glyphicon-menu-up').addClass('glyphicon glyphicon-menu-down')


    }

    function  sortViesHide() {
        $('.sort-view').hide()
        // $('.category-view').hide()
        $('#sort-bt i').removeClass('glyphicon glyphicon-menu-down').addClass('glyphicon glyphicon-menu-up')


    }



})