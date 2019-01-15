from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from app.models import Wheel, Nav, Mustbuy, Shop, MainShop, Foodtypes, Goods


def home(request):
    wheels = Wheel.objects.all()
    navs = Nav.objects.all()
    mustbuys = Mustbuy.objects.all()
    shops = Shop.objects.all()
    shops = Shop.objects.all()
    shophead = shops[0]
    shoptabs = shops[1:3]
    shopclass = shops[3:7]
    shopcommends = shops[7:11]

    mainshows = MainShop.objects.all()
    data = {
        'wheels':wheels,
        'navs' : navs,
        'mustbuys':mustbuys,

        'shophead':shophead,
        'shoptabs':shoptabs,
        'shopclass':shopclass,
        'shopcommends':shopcommends,
        'mainshows':mainshows

    }
    return render(request,'home/home.html',data)


# 闪购超市
def market(request):
    # 侧边栏的所有分类
    foodtypes = Foodtypes.objects.all()

    # jq设置cookie之后取消传参来获取分类id,来代替参数
    typeIndex = int(request.COOKIES.get('typeIndex',0))
    categoryid = foodtypes[typeIndex].typeid


    # 显示全部类型和综合排序
    # 获取 对应分类下   子类
    childtypenames = foodtypes[typeIndex].childtypenames
    # 拆分
    childtypes = []
    for item in childtypenames.split('#'):
        # item  >>>>  子类名称:子类ID
        temp = item.split(':')
        dir = {
            'childname': temp[0],
            'childid': temp[1]
        }
        childtypes.append(dir)


    # 获取商品的分类id，显示商品
    goods_list = Goods.objects.filter(categoryid=categoryid)


    data = {
        'foodtypes': foodtypes,
        'goods_list': goods_list,
        'childtypes':childtypes,
    }

    return render(request,'market/market.html',data)


def cart(request):
    return render(request,'cart/cart.html')


def mine(request):
    return render(request, 'mine/mine.html')