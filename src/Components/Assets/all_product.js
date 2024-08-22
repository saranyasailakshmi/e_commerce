import p1_img  from './badusha.jpg'
import p2_img from './beatenrice mix.webp'
import p3_img from './big sev.jpg'
import p4_img from './boondi methayi.webp'
import p5_img from './chakili.webp'
import p6_img from './chakodi.jpg'
import p7_img from './chekkapakodi.webp'
import p8_img from './dal mix.jpg'
import p9_img from './dates ladoo.jpg'
import p10_img from './gulabi rekulu.jpg'
import p11_img from './gulabjamun.jpg'
import p12_img from './hero_image.png'
import p13_img from './jalebi.jpg'
import p14_img from './jangri.jpg'
import p15_img from './jantika.webp'
import p16_img from './kaju katli.webp'
import p17_img from './kaju rools.webp'
import p18_img from './karaboondi.jpg'
import p19_img from './Malpuri.webp'
import p20_img from './motichur.webp'
import p21_img from './murmura.jpg'
import p22_img from './namkeen.webp'
import p23_img from './pootarekulu.jpg'
import p24_img from './rasgulla.jpg'
import p25_img from './redhalwa.webp'
import p26_img from './rough mysore-pack.jpg'
import p27_img from './sev.png'
import p28_img from './shankarpali.jpg'
import p29_img from './soft mysorepak.jpg'
import p30_img from './sonpapidi.webp'
import p31_img from './tilladdo.webp'
import p32_img from './bakarwadi.jpg'
import p33_img from './kakinada kaja.jpg'
import p34_img from './madata kaja.jpg'
import p35_img from './cashew chakki.jpg'

let all_product=[
    {
        id:1,
        name:"Baadusha",
        category:"sweet",
        image:p1_img,
        new_price:80.00,
        old_price:100.00,
        per:"Kg",
    },
    {
        id:2,
        name:"BeatenRice Mix",
        category:"hot",
        image:p2_img,
        new_price:90.00,
        old_price:80.00,
        per:"kg",
    },
    {
        id:3,
        name:"Big Sev",
        category:"hot",
        image:p3_img,
        new_price:50.00,
        old_price:60.00,
        per:"250g",
    },
    {
        id:4,
        name:"Boodi Metayi",
        category:"sweet",
        image:p4_img,
        new_price:80.00,
        old_price:100.00,
        per:"1/2kg",
    },
    {
        id:5,
        name:"Chakili",
        category:"hot",
        image:p5_img,
        new_price:50.00,
        old_price:70.00,
        per:"250g",
    },
    {
        id:6,
        name:"Chakodi",
        category:"hot",
        image:p6_img,
        new_price:50.00,
        old_price:60.00,
        per:"250g"
    },
    {
        id:7,
        name:"Ribbon Pakodi",
        category:"hot",
        image:p7_img,
        new_price:50.00,
        old_price:40.00,
        per:"250g"
    },
    {
        id:8,
        name:"Dal Mix",
        category:"hot",
        image:p8_img,
        new_price:80.00,
        old_price:90.00,
        per:"250g",
    },
    {
        id:9,
        name:"Dates Ladoo",
        category:"sweet",
        image:p9_img,
        new_price:200.00,
        old_price:150.00,
        per:"kg",
    },
    {
        id:10,
        name:"Gulabi Rekulu",
        category:"sweet",
        image:p10_img,
        new_price:50.00,
        old_price:80.00,
        per:"250g"
    },
    {
        id:11,
        name:"GulabJamun",
        category:"sweet",
        image:p11_img,
        new_price:60.00,
        old_price:80.00,
        per:"250g",
    },
    {
        id:12,
        name:"MixSweet",
        category:"sweet",
        image:p12_img,
        new_price:600.00,
        old_price:700.00,
        per:"kg",
    },
    {
        id:13,
        name:"Jalebi",
        category:"sweet",
        image:p13_img,
        new_price:50.00,
        old_price:40.00,
        per:"250g",
    },
    {
        id:14,
        name:"Jantikalu",
        category:"hot",
        image:p15_img,
        new_price:50.00,
        old_price:30.00,
        per:"250g",
    },
    {
        id:15,
        name:"KaaraBoondi",
        category:"hot",
        image:p18_img,
        new_price:100.00,
        old_price:120.00,
        per:"kg",
    },
    {
        id:16,
        name:"Jangri",
        category:"sweet",
        image:p14_img,
        new_price:90.00,
        old_price:80.00,
        per:"kg",
    },
    {
        id:17,
        name:"KajuKatli",
        category:"sweet",
        image:p16_img,
        new_price:600.00,
        old_price:500.00,
        per:"kg",
    },
    {
        id:18,
        name:"KajuRools",
        category:"sweet",
        image:p17_img,
        new_price:700.00,
        old_price:500.00,
        per:"kg",
    },
    {
        id:19,
        name:"MalPuri",
        category:"sweet",
        image:p19_img,
        new_price:15.00,
        old_price:12.00,
        per:"piece",
    },
    {
        id:20,
        name:"MotichurLadoo",
        category:"sweet",
        image:p20_img,
        new_price:400.00,
        old_price:500.00,
        per:"kg",
    },
    {
        id:21,
        name:"Murmura",
        category:"hot",
        image:p21_img,
        new_price:50.00,
        old_price:60.00,
        per:"250g",
    },
    {
        id:22,
        name:"Namkeen",
        category:"hot",
        image:p22_img,
        new_price:50.00,
        old_price:40.00,
        per:"250kg",
    },
    {
        id:23,
        category:"sweet",
        name:"Pootarekulu",
        image:p23_img,
        new_price:70,
        old_price:65,
        per:"kg"
    },
    {
        id:24,
        name:"Rasgulla",
        category:"sweet",
        image:p24_img,
        new_price:150,
        old_price:120,
        per:"kg",
    },
    {
        id:25,
        name:"RedHalwa",
        category:"sweet",
        image:p25_img,
        new_price:200.00,
        old_price:150.00,
        per:"kg",
    },
    {
        id:26,
        name:"Mysore Pak",
        category:"sweet",
        image:p26_img,
        new_price:250.00,
        old_price:200.00,
        per:"kg",
    },
    {
        id:27,
        name:"Sev",
        category:"hot",
        image:p27_img,
        new_price:60.00,
        old_price:50.00,
        per:"250g",
    },
    {
        id:28,
        name:"ShankarPali",
        category:"hot",
        image:p28_img,
        new_price:100.00,
        old_price:80.00,
        per:"250g",
    },
    {
        id:29,
        name:"Soft MysorePak",
        image:p29_img,
        category:"sweet",
        new_price:60.00,
        old_price:50.00,
        per:"250g",
    },
    {
        id:30,
        name:"Sonpapidi",
        category:"sweet",
        image:p30_img,
        new_price:80.00,
        old_price:50.00,
        per:"250g",
    },
    {
        id:31,
        name:"TilLadoo",
        category:"sweet",
        image:p31_img,
        new_price:50.00,
        old_price:40.00,
        per:"250g"
    },
    {
        id:32,
        name:"BakarWadi",
        category:"hot",
        image:p32_img,
        new_price:180.00,
        old_price:170.00,
        per:"kg"
    },
    {
        id:33,
        name:"KakinadaKaja",
        category:"sweet",
        image:p33_img,
        new_price:70.00,
        old_price:50.00,
        per:"250g",
    },
    {
        id:34,
        name:"MadataKaja",
        category:"sweet",
        image:p34_img,
        new_price:50.00,
        old_price:40.00,
        per:"250g",
    },
    {
        id:35,
        name:"CashewNut Chakki",
        category:"sweet",
        image:p35_img,
        new_price:200.00,
        old_price:180.00,
        per:"250g",
    },
];
export default all_product;