import ajax from './ajax'
const BASE_URL="/api"
const position = new AMap.Geolocation({
    enableHighAccuracy: true,
    maximumAge: 0,
    convert: true,
})

export const reqGeolocation = () => {
    return new Promise((resolve, reject) => {
        position.getCurrentPosition((status, result) => {
            if (status === 'complete') {
                console.log(result)
                resolve({
                    data: {
                        latitude: result.position.lat,

                        longitude: result.position.lng,
                        address: result.formattedAddress,
                    },
                })
            } else {
                reject({
                    err: result.message,
                })
            }
        })
    })
}
// [1、根据经纬度获取位置详情]
export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)

// [2、获取食品分类列表]
export const reqFoodCategorys=()=>ajax(`${BASE_URL}/index_category`)

// [3、根据经纬度获取商铺列表]
export const reqShopList=(longitude,latitude)=>ajax(`${BASE_URL}/shops`,{longitude,latitude})

// [4、根据经纬度和关键字搜索商铺列表]
export const reqSearchFoodTypes=(geohash,keyword)=>ajax(`/search_shops`,{geohash,keyword})

// // [5、获取一次性验证码]
// export const reqCaptcha=()=>ajax(`${BASE_URL}/captcha`)
// [6、用户名密码登陆]
export const reqLogin=(name,pwd,captcha)=>ajax(`${BASE_URL}/login_pwd`,{name,pwd,captcha},"POST")

// [7、发送短信验证码]
export const reqSendcode=(phone)=>ajax(`${BASE_URL}/sendcode`,{phone})

// [8、手机号验证码登陆]
export const reqLoginSms=(phone,code)=>ajax(`${BASE_URL}/login_sms`,{phone,code},"POST")

// [9、根据会话获取用户信息]
export const reqUserinfo=()=>ajax(`${BASE_URL}/userinfo`)
// [10、用户登出]
export const reqLogout=()=>ajax(`${BASE_URL}/logout`)

//
export const reqShopGoods=()=>ajax('/goods')
//
export const reqShopRatings=()=>ajax('/ratings')
//
export const reqShopInfo=()=>ajax('/info')

