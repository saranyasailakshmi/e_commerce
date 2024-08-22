import p1_img from '../Assets/namkeen.webp'
import p2_img from '../Assets/chekkapakodi.webp'
import p3_img from '../Assets/Malpuri.webp'
import p4_img from '../Assets/sonpapidi.webp'
import p6_img from '../Assets/rasgulla.jpg'
import p7_img from '../Assets/redhalwa.webp'
import p8_img from '../Assets/shankarpali.jpg'
import p5_img from '../Assets/dates ladoo.jpg'
let data_product=[
    {
        id:22,
        name:"Namkeen",
        image:p1_img,
        new_price:50,
        old_price:40,
        category:"hot",
        per: "250g",
    },
    {
        id:9,
        name:"Dates Ladoo",
        category:"sweet",
        image:p5_img,
        new_price:200.00,
        old_price:150.00,
        per:"kg",
    },
    {
        id:7,
        name:"RibbonPakodi",
        image:p2_img,
        new_price:60,
        old_price:50,
        category:"hot",
        per : "kg",
    },
    {
        id:19,
        name:"MalPuri",
        image:p3_img,
        new_price:15,
        old_price:10,
        category:"sweet",
        per:"Piece",
    },
    {
        id:30,
        name:"SonPapidi",
        image:p4_img,
        new_price:100,
        old_price:150,
        category:"sweet",
        per:"kg",
    },
    
    {
        id:24,
        name:"Rasgulla",
        image:p6_img,
        new_price:150,
        old_price:120,
        category:"sweet",
        per:"kg",
    },
    {
        id:25,
        name:"Red Halwa",
        image:p7_img,
        new_price:200,
        old_price:250,
        category:"sweet",
        per:"kg",
    },
    {
        id:28,
        name:"ShankarPali",
        image:p8_img,
        new_price:100,
        old_price:150,
        category:"sweet",
        per:"kg",
    },
];
export default data_product;