// Các dữ liệu của gương
var arrGlass = [
    {
        GlassName: "Glass1",
        price: 2290000,
        image: "https://shop.kientruc.com/uploads/images/Navado/images/1524192403a8img.png",
        color: "Gold",
        size: "100 x 60cm",
        size2: "100",
        shape: "Round",
    },
    {
        GlassName: "Glass2",
        price: 8290000,
        image: "https://guonglyng.com/wp-content/uploads/2022/01/guong-soi-toan-than-cho-phong-ngu-nho-5.jpg",
        color: "Gold",
        size: "100cm",
        size2: "100",
        shape: "Arched",
    },
    {
        GlassName: "Glass3",
        price: 5990000,
        image: "https://zento.vn/public/upload/new_images/2020/10/guong-den-led-cam-ung-phong-tam-ztle9041.jpg",
        color: "Grey",
        size: "92 x 61.5cm",
        size2: "92",
        shape: "Arched",
    },
    {
        GlassName: "Glass4",
        price: 2990000,
        image: "https://cf.shopee.vn/file/sg-11134201-22100-lcplj6k2itivdc",
        color: "Grey",
        size: "92cm",
        size2: "92",
        shape: "Rectangle",
    },
    {
        GlassName: "Glass5",
        price: 4550000,
        image: "https://thegioitranhdep.com.vn/wp-content/uploads/2020/03/guong-chu-nhat-vien-thep.jpg",
        color: "Grey",
        size: "160 x 54.7cm",
        size2: "160",
        shape: "Round",
    },
    {
        GlassName: "Glass6",
        price: 11990000,
        image: "https://pula.vn/storage/images/2020/11/23/guong-dung-treo-tuong-co-den-led-gd21-lap-trong-phong-khach.jpg",
        color: "Apple",
        size: "160 x 75cm",
        size2: "160",
        shape: "Arched",
    },
    {
        GlassName: "Glass7",
        price: 27990000,
        image: "https://afamilycdn.com/150157425591193600/2020/7/7/photo-2-15941215475011688298838-1594130647940-159413064815861552997.jpg",
        color: "Apple",
        size: "160 x 47.5cm",
        size2: "160",
        shape: "Rectangle",
    },
    {
        GlassName: "Glass8",
        price: 11990000,
        image: "https://guongnhatam.net/wp-content/uploads/2019/09/100x1003.5tr.jpg",
        color: "White",
        size: "160 x 47.5cm",
        size2: "160",
        shape: "Rectangle",
    },
    {
        GlassName: "Glass9",
        price: 3190000,
        image: "https://kibath.vn/wp-content/uploads/2020/08/guong-tron-khung-go-mau-den.jpg",
        color: "White",
        size: "160 x 75cm",
        size2: "160",
        shape: "Arched",
    },
    {
        GlassName: "Glass10",
        price: 6890000,
        image: "https://danviet.mediacdn.vn/296231569849192448/2021/9/23/photo-1-16321830004561847238792-1632416136356-1632416137323373065691.jpg",
        color: "White",
        size: "160 x 85cm",
        size2: "160",
        shape: "Round",
    },
    {
        GlassName: "Glass11",
        price: 7390000,
        image: "https://thietbinhavesinh.net/wp-content/uploads/2022/01/guong-led-cam-ung-vuong-5070-ttcera-gl01-82.jpg",
        color: "Grey",
        size: "150 x 81cm",
        size2: "150",
        shape: "Arched",
    },
    {
        GlassName: "Glass12",
        price: 24990000,
        image: "https://lzd-img-global.slatic.net/g/p/f3cd893e36a032069d05981ea7e316cc.jpg_1200x1200q80.jpg_.webp",
        color: "Gold",
        size: "140 x 75cm",
        size2: "140",
        shape: "Round",
    },
    {
        GlassName: "Glass13",
        price: 16000000,
        image: "https://buiphat.vn/uploaded/dichvuchitiet/guong-tron.jpg",
        color: "White",
        size: "140 x 65cm",
        size2: "140",
        shape: "Rectangle",
    },
    {
        GlassName: "Glass14",
        price: 14490000,
        image: "https://dehome.vn/images/products/2021/05/15/resized/guong-dai_1621075338.jpg",
        color: "Gold",
        size: "140 x 75cm",
        size2: "140",
        shape: "Round",
    },
    {
        GlassName: "Glass15",
        price: 10990000,
        image: "https://monkeymedia.vcdn.com.vn/upload/web/img/guong-phang-1.jpg",
        color: "White",
        size: "140 x 40.5cm",
        size2: "140",
        shape: "Rectangle",
    },
];

//Định nghĩa hàm hiện sản phẩm gương
function inputGlass(
    arrChoose_Color = [],
    arrChoose_price = [],
    arrChoose_shape = [],
    arrChoose_size = []
) {
    var list1 = document.getElementById("list1");
    list1.innerHTML = "";
    for (i = 0; i < arrGlass.length; i++) {
        nameGlass = arrGlass[i].GlassName;
        colorGlass = arrGlass[i].color;
        sizeGlass = arrGlass[i].size;
        sizeGlass2 = arrGlass[i].size2;
        shapeGlass = arrGlass[i].shape;
        priceGlass = arrGlass[i].price;
        imageGlass = arrGlass[i].image;
        //Lọc theo màu
        if (arrChoose_Color.length > 0) {
            if (arrChoose_Color.includes(colorGlass) == false) {
                continue;
            }
        }

        // Lọc theo giá
        if (arrChoose_price.length > 0) {
            if (priceGlass < 5000000 && arrChoose_price.includes("1") == false)
                continue;
            if (
                priceGlass >= 5000000 &&
                priceGlass < 10000000 &&
                arrChoose_price.includes("2") == false
            )
                continue;
            if (
                priceGlass >= 10000000 &&
                priceGlass < 15000000 &&
                arrChoose_price.includes("3") == false
            )
                continue;
            if (
                priceGlass >= 15000000 &&
                arrChoose_price.includes("4") == false
            )
                continue;
        }

        // Lọc theo hình dáng
        if (arrChoose_shape.length > 0) {
            if (arrChoose_shape.includes(shapeGlass) == false) {
                continue;
            }
        }

        //Lọc theo size
        if (arrChoose_size.length > 0) {
            if(sizeGlass2 >= 90 && sizeGlass2 < 120 && arrChoose_size.includes("1") == false) continue;
            if(sizeGlass2 >= 120 && sizeGlass2 < 150 && arrChoose_size.includes("2") == false) continue;
            if(sizeGlass2 >= 150 && sizeGlass2 <= 180 && arrChoose_size.includes("3") == false) continue;
        }

        //Ghép vào html
        list1.innerHTML += `
        <div class="dt">
        <a href="#!"><img src = "${imageGlass}"></a>
        <h3>${nameGlass}</h3>
        <h4>${colorGlass} - ${shapeGlass} -${sizeGlass}</h4>
        <h4>${priceGlass}</h4>
        </div>
        `;
    }
}
inputGlass();

function chooseGlass() {
    // Chon theo màu
    var arrcolor = document.getElementsByClassName("color");
    var arrChoose_Color = [];
    for (i = 0; i < arrcolor.length; i++) {
        if (arrcolor[i].checked == true)
            arrChoose_Color.push(arrcolor[i].value);
    }

    // Chọn theo giá
    var arrPrice = document.getElementsByClassName("giaban");
    var arrChoose_price = [];
    for (i = 0; i < arrPrice.length; i++) {
        if (arrPrice[i].checked == true)
            arrChoose_price.push(arrPrice[i].value);
    }

    // Chon theo hình dáng
    var arrshape = document.getElementsByClassName("shape");
    var arrChoose_shape = [];
    for (i = 0; i < arrshape.length; i++) {
        if (arrshape[i].checked == true)
            arrChoose_shape.push(arrshape[i].value);
    }

    // Chọn theo size
    var arrSize = document.getElementsByClassName("size");
    var arrChoose_size = [];
    for (i = 0; i < arrSize.length; i++) {
        if (arrSize[i].checked == true) arrChoose_size.push(arrSize[i].value);
    }

    inputGlass(
        arrChoose_Color,
        arrChoose_price,
        arrChoose_shape,
        arrChoose_size
    );
}
