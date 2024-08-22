import p1_img from './pootarekulu.jpg'
import p2_img from './kaju katli.webp'
import p3_img from './gulabi rekulu.jpg'
import p4_img from './kaju rools.webp'


let data_product = [
    {
        id:23,
        name:"PootaRekulu",
        image:p1_img,
        new_price : 70.00,
        old_price : 65.00,
        per:"kg",
        category:"sweet",
    },
    {
        id:17,
        name:"KajuKatli",
        image:p2_img,
        new_price:600.00,
        old_price:500.00,
        category:"sweet",
        per:"kg",
    },
    {
        id:10,
        name:"GulabiRekulu",
        image:p3_img,
        new_price:50.00,
        old_price:80.00,
        category:"sweet",
        per:"250g",
    },
    {
        id:18,
        name:"KajuRool",
        image:p4_img,
        new_price:700.00,
        old_price:500.00,
        category:"sweet",
        per:"kg",
    },
];

export default data_product;