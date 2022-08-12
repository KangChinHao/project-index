
var swiper = new Swiper(".Swiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'fade',
    followFinger: false,
    grabCursor: true,
    rewind: true,
});


var swiper = new Swiper(".Swiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 500000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'fade',
    followFinger: false,
    rewind: true,
});
    
// 行事曆
// 預設抓今天
new Date();
let week = new Date();
let catch_week = week.getDay();
if (catch_week == 6) {
    document.getElementById("show_week").innerText = "[" + "星期六" + "]"
} else if (catch_week == 5) {
    document.getElementById("show_week").innerText = "[" + "星期五" + "]"
} else if (catch_week == 4) {
    document.getElementById("show_week").innerText = "[" + "星期四" + "]"
} else if (catch_week == 3) {
    document.getElementById("show_week").innerText = "[" + "星期三" + "]"
} else if (catch_week == 2) {
    document.getElementById("show_week").innerText = "[" + "星期二" + "]"
} else if (catch_week == 1) {
    document.getElementById("show_week").innerText = "[" + "星期一" + "]"
} else if (catch_week == 0) {
    document.getElementById("show_week").innerText = "[" + "星期日" + "]"
}

document.getElementById("show_year").innerText = new Date().getFullYear();
document.getElementById("show_month").innerText = new Date().getMonth() + 1 + "月";
document.getElementById("show_date").innerText = new Date().getDate() + "日";



// 點擊後改顯示點擊日期
const calendar = new VanillaCalendar('#calendar', {
    actions: {
        clickDay(e, dates) {
            var date = dates.toString();//轉為字串
            if (date != '') {//判斷再次點擊同一日期顯示今天日期;
                date.split(''); //轉為陣列
                var year = date.slice(0, 4)//取出陣列前四碼為年
                document.getElementById("show_year").innerText = year;
                var month = date.slice(6, 7)//取出陣列第六碼為月
                document.getElementById("show_month").innerText = month + "月";
                var day = date.slice(8, 10)//取出陣列後兩碼為日
                document.getElementById("show_date").innerText = day + "日";
                let week = new Date(date);//將字串date引入取得星期幾
                let catch_week = week.getDay();
                let toTW;
                if (catch_week == 6) {
                    toTW = "六";
                } else if (catch_week == 5) {
                    toTW = "五";
                } else if (catch_week == 4) {
                    toTW = "四";
                } else if (catch_week == 3) {
                    toTW = "三";
                } else if (catch_week == 2) {
                    toTW = "二";
                } else if (catch_week == 1) {
                    toTW = "一";
                } else if (catch_week == 0) {
                    toTW = "日";
                };
                document.getElementById("show_week").innerText = "[" + "星期" + toTW + "]";
            } else {
                new Date();
                let week = new Date();
                let catch_week = week.getDay();
                if (catch_week == 6) {
                    document.getElementById("show_week").innerText = "[" + "星期六" + "]"
                } else if (catch_week == 5) {
                    document.getElementById("show_week").innerText = "[" + "星期五" + "]"
                } else if (catch_week == 4) {
                    document.getElementById("show_week").innerText = "[" + "星期四" + "]"
                } else if (catch_week == 3) {
                    document.getElementById("show_week").innerText = "[" + "星期三" + "]"
                } else if (catch_week == 2) {
                    document.getElementById("show_week").innerText = "[" + "星期二" + "]"
                } else if (catch_week == 1) {
                    document.getElementById("show_week").innerText = "[" + "星期一" + "]"
                } else if (catch_week == 0) {
                    document.getElementById("show_week").innerText = "[" + "星期日" + "]"
                }

                document.getElementById("show_year").innerText = new Date().getFullYear();
                document.getElementById("show_month").innerText = new Date().getMonth() + 1 + "月";
                document.getElementById("show_date").innerText = new Date().getDate() + "日";
            }
        },
    },
});
calendar.init();
calendar.settings.lang = 'zh-TW';
calendar.update();
console.log(calendar);
