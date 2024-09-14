import Laptop from './assets/Elaptop.png'
import Iphone from './assets/E-iphone.png'
import Keyboard from './assets/E-keyboard.png'
import SysyemUnit from './assets/E-systemunit.png'
import Mouse from './assets/E-mouse.png'
import Cpu from './assets/E-cpu.png'
import Gpu from './assets/E-gpu.png'
import Monitor from './assets/E-monitor.png'
import Printer from './assets/E-printer.png'
import Ssd from './assets/E-ssd.png'
import Rim from './assets/rim.jpg'

import Ram from './assets/Ram.png'
import printerHead from './assets/printerHead.webp'
import epsonInk from './assets/epsonInk.png'
import A4 from './assets/A4Bondpaper.jpg'
import epsonL5290 from './assets/epsonEcoTankL5290.webp'
import electrickStove from './assets/electricstove.jpg'
import electricKettel from './assets/electrickettel.jpeg'
import electricFan from './assets/electricfan.avif'
import miniRef from './assets/miniref.png'
import {v4 as uuid} from 'uuid'

export const Sellers = [
    {Sid:1, shopName:'comTect', rating:4.9},//
    {Sid:2, shopName:'Appliances',rating:4.9},//
    {Sid:3, shopName:`Ka'printer`,rating:4.3},//
    {Sid:4, shopName:'Speedy Cycle',rating:4.5},//
    {Sid:5, shopName:'Hardware World.',rating:3.9},//
    {Sid:6, shopName:'TechHub',rating:4.9},//
    {Sid:7, shopName:'Your Gadgets',rating:4.8},//
    {Sid:8, shopName:'electro',rating:4.4},
    {Sid:9, shopName:'Toys',rating:4.1},//
    {Sid:10, shopName:'solar store',rating:4.9}//
]

export const Items = [
    {
        id: 1,
        Sid:6,
        productName: "Laptop",
        category: "gadgets",
        rating:[
            { commenter: 'Emily', rating: 5, comment: 'Excellent quality, super fast delivery!' },
            { commenter: 'Anna', rating: 4, comment: 'Product is good but packaging could be better.' },
            { commenter: 'Tom', rating: 2, comment: 'Received a defective piece, very disappointed.' },
        ],
        price:  40000,
        description: `The ROG Strix series by ASUS is a lineup of high-performance gaming laptops designed for serious gamers and power users.The ROG Strix series by ASUS is a lineup of high-performance gaming laptops designed for serious gamers and power usersThe ROG Strix series by ASUS is a lineup of high-performance gaming laptops designed for serious gamers and power usersThe ROG Strix series by ASUS is a lineup of high-performance gaming laptops designed for serious gamers and power usersThe ROG Strix series by ASUS is a lineup of high-performance gaming laptops designed for serious gamers and power usersThe ROG Strix series by ASUS is a lineup of high-performance gaming laptops designed for serious gamers and power users
        The ROG Strix series by ASUS is a lineup of high-performance gaming laptops designed for serious gamers and power usersss The ROG Strix series by ASUS is a lineup of high-performance gaming laptops designed for serious gamers and power users`,
        productImage: Laptop
    },
    {
        id: 2,
        Sid:7,
        productName: "Iphone",
        shopName: "YourGadgets",
        category: "gadgets",
        rating:[
            {commenter:'John',rating:5,comment:'This is a great product'},
            {commenter:'sam',rating:4,comment:'first order in this shop great product'},
            {commenter:'josh',rating:3,comment:'not recommended shop dot buy thier producs all fake and damage the seller is no response'},
        ],
        price: 80000,
        description: `The iPhone 15 Pro Max is the top-tier model in Apple's 2023 lineup, featuring a sleek design and cutting-edge technology. Key highlights include:<br/>Display: 6.7-inch Super Retina XDR OLED display with ProMotion for smooth 120Hz refresh rates.`,
        productImage: Iphone
    },
    {
        id: 3,
        Sid:1,
        productName: "Rakk-diwa v2 mechanical Keyboard",
        category: "gadgets",
        rating:[
            {commenter:'John',rating:5,comment:'This is a great product'},
            {commenter:'sam',rating:4,comment:'first order in this shop great product'},
            {commenter:'josh',rating:3,comment:'not recommended shop dot buy thier producs all fake and damage the seller is no response'},
        ],
        price: 900,
        description: "The Rakk-Diwa V2 Mechanical Keyboard is a robust and versatile keyboard designed for both gaming and productivity. It features durable mechanical switches that provide a tactile and responsive typing experience, ideal for fast-paced gaming and precise typing. The keyboard is equipped with customizable RGB backlighting, allowing you to personalize your setup with various lighting effects. Its compact design saves desk space while still offering full functionality, including programmable keys for quick access to essential commands. Built to withstand intense use, the Rakk-Diwa V2 is a reliable choice for gamers and professionals alike.",
        productImage: Keyboard
    },
    {
        id: 4,
        Sid:1,
        productName: "System unit",
        category: "gadgets",
         rating:[
            { commenter: 'Michael', rating: 5, comment: 'Top-notch product, worth every penny.' },
            { commenter: 'Sara', rating: 4, comment: 'Good product overall, but the shipping was delayed.' },
            { commenter: 'David', rating: 3, comment: 'Average quality, I expected more for the price.' },
        ],
        price: 30000,
        description: "spec ryzen 5 5500g his powerful system unit is designed to meet the demands of gamers, professionals, and everyday users. Built with top-tier components, it delivers exceptional performance, reliability, and versatility, making it the perfect choice for both work and play.",
        productImage: SysyemUnit
    },
    {
        id: 5,
        Sid:6,
        productName: "Mouse",
        category: "gadgets",
        rating:[
            { commenter: 'Sophia', rating: 5, comment: 'Perfect! Exactly as described.' },
            { commenter: 'Daniel', rating: 4, comment: 'Happy with the purchase, the product works well.' },
            { commenter: 'Olivia', rating: 3, comment: 'Not bad, but the customer service could be improved.' },
        ],
        price: 500,
        description: "mechanical mouse",
        productImage: Mouse
    },
    {
        id: 6,
        Sid:1,
        productName: "Cpu ryzen 7",
        category: "gadgets",
        rating:[
            { commenter: 'James', rating: 1, comment: 'Terrible product, completely different from the listing.' },
            { commenter: 'Isabella', rating: 5, comment: 'Amazing quality and fast shipping!' },
            { commenter: 'Noah', rating: 4, comment: 'Good value for the money, would recommend.' },
        ],
        price: 8000,
        description: "The AMD Ryzen 7 processor is a powerful CPU featuring 6 cores and 12 threads, designed to deliver exceptional multitasking performance. With its high core count, it’s well-suited for demanding tasks such as gaming, content creation, and heavy workloads. The processor's multithreading capability allows for efficient handling of multiple processes simultaneously, ensuring smooth and responsive performance in both single-threaded and multi-threaded applications. This makes the Ryzen 7 a solid choice for users who require a balance of speed, efficiency, and power in their computing experience.",
        productImage: Cpu
    },
    {
        id: 7,
        Sid:6,
        productName: "Gpu",
        category: "gadgets",
        rating:[
            { commenter: 'Mia', rating: 3, comment: 'The product is okay, but I found a better deal elsewhere.' },
            { commenter: 'Lucas', rating: 2, comment: 'Product arrived late and was not what I expected.' },
            { commenter: 'Liam', rating: 5, comment: 'Fantastic! I am very satisfied with the purchase.' },
        ],
        price: 40000,
        description: "The NVIDIA 40 Series GPUs represent the latest generation of high-performance graphics cards designed for gaming, content creation, and AI-driven tasks. Built on NVIDIA's advanced architecture, these GPUs offer significant improvements in processing power, energy efficiency, and ray tracing capabilities over previous generations. They support cutting-edge features such as DLSS 3.0, AI-enhanced graphics, and real-time ray tracing, delivering ultra-realistic visuals and smooth performance in the most demanding games and professional applications. The 40 Series GPUs are equipped with ample VRAM and support for high-resolution gaming, making them ideal for enthusiasts and professionals seeking top-tier performance. ",
        productImage: Gpu
    },
    {
        id: 8,
        Sid:6,
        productName: "Gaming monitor",
        category: "accesories",
        rating:[
            { commenter: 'Ella', rating: 4, comment: 'Nice product, but could be better packaged.' },
            { commenter: 'Ava', rating: 3, comment: 'The item is okay, but it doesn’t seem durable.' },
            { commenter: 'Benjamin', rating: 5, comment: 'Great product, totally worth it!' },
        ],
        price: 5500,
        description: "A 30-inch monitor is an excellent choice for users seeking a large display with ample screen real estate for multitasking, gaming, or professional work. These monitors typically offer a high resolution, such as 2560x1600 (WQXGA) or 2560x1440 (WQHD), providing sharp and detailed visuals. The larger screen size enhances productivity by allowing more windows to be open simultaneously and is also beneficial for immersive gaming and media consumption. Many 30-inch monitors come with features like high refresh rates, low response times, and wide color gamuts, making them suitable for a variety of tasks, from everyday use to professional content creation and competitive gaming.",
        productImage: Monitor
    },
    {
        id: 9,
        Sid:1,
        productName: "Ssd",
        category: "accesories",
        rating:[
            { commenter: 'Grace', rating: 4, comment: 'Satisfied with my purchase, the product is as described.' },
            { commenter: 'Ethan', rating: 2, comment: 'Disappointed, the product doesn’t match the description.' },
            { commenter: 'Aria', rating: 3, comment: 'It’s okay for the price, but I expected better quality.' },
        ],
        price: 2000,
        description: "A 1TB SSD (Solid State Drive) offers a significant amount of fast storage, ideal for a wide range of applications including gaming, content creation, and general computing. With no moving parts, SSDs provide faster data access speeds, quicker boot times, and improved overall system responsiveness compared to traditional hard drives. The 1TB capacity is ample for storing large files, such as high-resolution videos, games, and software applications, while still leaving plenty of room for your operating system and everyday files. SSDs are also more durable and energy-efficient, making them a reliable choice for both laptops and desktops.",
        productImage: Ssd
    },
    {
        id: 10,
        Sid:3,
        productName: "Printer epson l121",
        category: "accesories",
        rating:[
            { commenter: 'William', rating: 5, comment: 'High-quality product, would definitely buy again.' },
            { commenter: 'Harper', rating: 4, comment: 'The product is good, but delivery was delayed.' },
            { commenter: 'Henry', rating: 3, comment: 'The product is decent, but nothing special.' },
        ],
        price: 12000,
        description: "he Epson L121 is an economical inkjet printer designed for efficient and high-volume printing. It features a unique integrated ink tank system that reduces printing costs and minimizes the frequency of refilling. The L121 provides reliable print quality for both text and color documents, making it suitable for everyday use at home or in a small office. Its compact design fits well in limited spaces, and it connects via USB for straightforward setup and operation.",
        productImage: Printer
    },
    {
        id: 11,
        Sid:4,
        productName: "rimset",
        category: "morcycleparts",
        rating:[
            { commenter: 'Amelia', rating: 4, comment: 'Overall a good experience, would recommend.' },
            { commenter: 'Jackson', rating: 5, comment: 'Excellent service and product, very happy.' },
            { commenter: 'Sophie', rating: 2, comment: 'Product is not as expected, poor quality.' },
        ],
        price: 2500,
        description: "The Rimset for the Raider 150 includes both front and rear rims specifically designed for the Suzuki Raider 150 motorcycle. Made from durable materials like aluminum, these rims ensure a perfect fit and reliable performance. They are available in various designs and finishes to match the bike's style. Upgrading to this Rimset can enhance handling, stability, and overall aesthetics, making your ride both stylish and functional.",
        productImage: Rim
    },
    {
        id: 12,
        Sid:1,
        productName: "Ddr5 ram",
        category:"accesories",
        rating:[
            { commenter: 'Jackson', rating: 5, comment: 'Excellent service and product, very happy.' },
            { commenter: 'Sophie', rating: 2, comment: 'Product is not as expected, poor quality.' },
            { commenter: 'Oliver', rating: 3, comment: 'The product works, but I found better alternatives.' },
        ],
        price:1000,
        description: "DDR5 RAM delivers higher bandwidth and faster data transfer rates than DDR4, improving overall system performance. It supports larger capacities per module, which enhances multitasking and handles demanding applications more efficiently. Additionally, DDR5 operates at a lower voltage, making it more power-efficient and generating less heat.",
        productImage: Ram
    },
    {
        id: 13,
        Sid: 3,
        productName: "Printer head",
        category:"accesories",
        rating:[
            { commenter: 'Charlotte', rating: 4, comment: 'Good product, but the instructions were unclear.' },
            { commenter: 'Elijah', rating: 5, comment: 'Top quality! Will buy again for sure.' },
            { commenter: 'Layla', rating: 4, comment: 'The product is good, but the delivery took too long.' },
        ],
        price: 2000,
        description: "A printer head, or print head, is a critical component in inkjet printers responsible for transferring ink onto paper. It contains tiny nozzles that spray ink in precise patterns to create text and images. The print head moves across the paper and deposits ink droplets in a controlled manner, producing high-quality prints. Regular maintenance and cleaning are essential to keep the print head in good condition and ensure consistent print quality.",
        productImage: printerHead
    },
    {
        id: 14,
        Sid: 3,
        productName: "Original epson ink",
        category:"accesories",
        rating:[
            { commenter: 'Matthew', rating: 3, comment: 'The product is okay, but nothing impressive.' },
            { commenter: 'Scarlett', rating: 4, comment: 'Overall a good purchase, but the price is a bit high.' },
            { commenter: 'Sebastian', rating: 5, comment: 'Excellent quality and great customer support.' },
        ],
        price: 500,
        description: "Original Epson ink is specifically formulated for use with Epson printers, ensuring optimal print quality and performance. It is designed to work seamlessly with Epson’s print heads and inkjet technology, providing vibrant colors, sharp text, and long-lasting prints. Using original ink helps prevent clogs and damage to the printer, maintaining its reliability and extending its lifespan. Additionally, original Epson ink is engineered to resist fading and smudging, ensuring your prints look their best over time.",
        productImage: epsonInk
    },
    {
        id: 15,
        Sid: 3,
        productName: "A4 HARD COPY ",
        category:"accesories",
        rating:[
            {commenter: 'Zoe', rating: 2, comment: 'The product doesn’t meet my expectations.' },
            { commenter: 'Aiden', rating: 3, comment: 'Its okay, but there are better options available.' },
            { commenter: 'Riley', rating: 4, comment: 'The product is good, but there’s room for improvement.' },
        ],
        price: 150,
        description: "An A4 hard copy refers to a physical printed document that is sized to the A4 standard, which measures 210 x 297 mm (8.27 x 11.69 inches). This size is commonly used for documents, reports, and correspondence. Hard copy distinguishes the physical printout from digital versions, such as PDFs or electronic files.",
        productImage: A4
    },
    {
        id: 16,
        Sid: 3,
        productName: "Epson eco tank l5290",
        category:"accesories",
        rating:[
            { commenter: 'Mason', rating: 5, comment: 'Fantastic product, will definitely recommend.' },
            { commenter: 'Ellie', rating: 3, comment: 'The product is fine, but I expected more.' },
            { commenter: 'Logan', rating: 4, comment: 'Good value for the price, happy with the purchase.' },
        ],
        price: 15000,
        description: "The Epson EcoTank L5290 is an all-in-one printer with a high-capacity ink tank system that reduces printing costs. It offers printing, scanning, copying, and faxing, along with wireless connectivity for easy mobile and network printing.",
        productImage: epsonL5290
    },
    {
        id: 17,
        Sid: 2,
        productName: "electric Stove",
        category:"appliances",
        rating:[
            { commenter: 'Stella', rating: 5, comment: 'Excellent product and fast shipping, very pleased.' },
            { commenter: 'Alexander', rating: 4, comment: 'Satisfied with the product, but it could be cheaper.' },
            { commenter: 'Lily', rating: 3, comment: 'The product is average, nothing too exciting.' },
        ],
        price: 17900,
        description: "An electric stove uses electric elements to cook food, with options for coils or smooth surfaces. It provides precise temperature control through knobs or digital interfaces and often includes an oven for additional baking and roasting functions. Known for delivering consistent heat, electric stoves are also easy to clean, making them a practical choice for various cooking needs.",
        productImage: electrickStove
    },
    {
        id: 18,
        Sid: 2,
        productName: "Electric Fan",
        category:"appliances",
        rating:[
            { commenter: 'Owen', rating: 5, comment: 'Great quality, exactly what I needed.' },
            { commenter: 'Maya', rating: 4, comment: 'Good product, but the delivery took longer than expected.' },
            { commenter: 'Jack', rating: 3, comment: 'It’s okay, but not worth the price.' },
        ],
        price: 1200,
        description: "An electric fan is a device that circulates air to cool down a space. It typically consists of blades powered by an electric motor, which create airflow when spinning. Fans can be designed as table, pedestal, or ceiling units, and often include adjustable speed settings and oscillation features. They are used to improve ventilation and provide a cooling effect in hot weather or to complement air conditioning systems",
        productImage: electricFan
    },
    {
        id: 19,
        Sid: 2,
        productName: "electric Kettle",
        category:"appliances",
        rating:[
            { commenter: 'Nora', rating: 4, comment: 'Happy with the product, it works as described.' },
            { commenter: 'Carter', rating: 5, comment: 'Outstanding product, highly recommended!' },
            { commenter: 'Violet', rating: 3, comment: 'The product is decent, but there are better alternatives.' },
        ],
        price: 999,
        description: "An electric kettle is a kitchen appliance used to quickly boil water. It features a heating element that rapidly heats the water when the kettle is plugged in. Most electric kettles have an automatic shutoff feature that turns the kettle off once the water reaches boiling. They typically include a cordless design for easy pouring and may have additional features like temperature controls and keep-warm functions.",
        productImage: electricKettel
    },
    {
        id: 20,
        Sid: 2,
        productName: "Microwave Oven",
        category:"appliances",
        rating:[
            { commenter: 'Wyatt', rating: 4, comment: 'Good quality, but the packaging was damaged.' },
            { commenter: 'Chloe', rating: 5, comment: 'Perfect product, just what I was looking for.' },
            { commenter: 'Dylan', rating: 4, comment: 'Good product, but could be a bit cheaper.' },
        ],
        price: 4000,
        description: "A microwave oven is a kitchen appliance that uses microwave radiation to quickly heat and cook food. It works by emitting microwaves that agitate water molecules in the food, generating heat. The appliance typically features a turntable or rotating tray for even cooking and includes controls for setting time and power levels. Microwave ovens are convenient for reheating leftovers, defrosting frozen items, and cooking a variety of dishes.",
        productImage: "https://w7.pngwing.com/pngs/666/358/png-transparent-oven-barbecue-grill-baking-name-of-kin-end-large-capacity-oven-baking-kitchen-appliance-chicken.png"
    },
    {
        id: 21,
        Sid: 2,
        productName: "Mini refrigerator",
        category:"appliances",
         rating:[
            { commenter: 'Luna', rating: 3, comment: 'The product is average, nothing special.' },
            { commenter: 'Grayson', rating: 5, comment: 'Fantastic product, will definitely buy again.' },
            { commenter: 'Hazel', rating: 4, comment: 'Overall a good experience, but the shipping was slow.' },
        ],
        price: 6000,
        description: "A mini refrigerator is a compact appliance designed to store food and beverages in smaller spaces. It typically features a refrigeration compartment with adjustable shelves and a small freezer section. Mini refrigerators are ideal for dorm rooms, offices, or small apartments where space is limited. They offer convenience for keeping essential items chilled while occupying minimal counter or floor space.",
        productImage: miniRef
    },
    {
        id: 22,
        Sid: 4,
        productName: "Brembo Break Master",
        category:"motorcycleparts",
         rating:[
            { commenter: 'Luke', rating: 3, comment: 'The product is okay, but I had higher expectations.' },
            { commenter: 'Isla', rating: 5, comment: 'Amazing quality, very happy with the purchase.' },
            { commenter: 'Leo', rating: 4, comment: 'The product is good, but there are better alternatives.' },
        ],
        price: 6000,
        description: "he Brembo Brake Master is a high-performance brake master cylinder designed for superior stopping power and precision. It is engineered for use in high-performance vehicles, including motorcycles and sports cars, ensuring reliable and responsive braking. The master cylinder controls brake fluid flow to the brake calipers, enhancing braking efficiency and safety. Brembo's design focuses on durability and performance, making it a popular choice for both racing and street applications.",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtO0MqODN5sBvtUBpyNp40MKEDkJ3-PDYnPw&s"
    },
    {
        id: 23,
        Sid: 4,
        productName: "Raider Carb Swing arm +2",
        category:"motorcycleparts",
         rating:[
            { commenter: 'Isla', rating: 5, comment: 'Amazing quality, very happy with the purchase.' },
            { commenter: 'Leo', rating: 4, comment: 'The product is good, but there are better alternatives.' },
            { commenter: 'Aurora', rating: 3, comment: 'It’s okay, but not what I was expecting.' },
        ],
        price: 6000,
        description: "The Raider Carb Swing Arm +2 is an aftermarket component designed to extend the rear swing arm of the Suzuki Raider motorcycle by 2 inches. This modification can improve stability, handling, and traction, especially during acceleration and cornering. The extended swing arm is made from durable materials to withstand the additional stress and provide a more stable ride. It's a popular upgrade for enhancing performance and customizing the motorcycle's appearance.",
        productImage: "https://ph-test-11.slatic.net/p/16c6b304a3c111646a329325a7f5577c.jpg"
    },
    {
        id: 24,
        Sid: 4,
        productName: "Super Open Pipr Raider 150 Carb",
        category:"motorcycleparts",
         rating:[
            { commenter: 'Julian', rating: 5, comment: 'Great product, very satisfied.' },
            { commenter: 'Penelope', rating: 4, comment: 'Good product, but the instructions were not clear.' },
            { commenter: 'Eli', rating: 3, comment: 'The product is decent, but could be better.' },
        ],
        price: 6000,
        description: "The Super Open Pipe for the Raider 150 Carb is an aftermarket exhaust system designed to enhance the performance and sound of the Suzuki Raider 150 motorcycle. This type of pipe features a less restrictive design compared to stock exhausts, allowing for improved exhaust flow and increased horsepower. It typically produces a louder, more aggressive exhaust note, and can also contribute to a more sporty appearance. The open pipe is popular among enthusiasts looking to boost performance and customize their bike's sound.",
        productImage: "https://filebroker-cdn.lazada.com.ph/kf/S43e80969f6454e26b494feaa6418e118d.jpg"
    },
    {
        id: 25,
        Sid: 4,
        productName: "Yamaha Mio stock Carb",
        category:"motorcycleparts",
         rating:[
            { commenter: 'Madison', rating: 4, comment: 'Satisfied with the purchase, but the price is a bit high.' },
            { commenter: 'Hudson', rating: 5, comment: 'Top-notch product, very pleased with it.' },
            { commenter: 'Leah', rating: 3, comment: 'The product is okay, but I found better deals elsewhere.' },
        ],
        price: 6000,
        description: "The Yamaha Mio stock carburetor is the standard carburetor that comes installed on the Yamaha Mio scooter. It manages the air-fuel mixture for the engine, ensuring optimal performance and fuel efficiency. The stock carburetor is designed to meet the manufacturer's specifications for smooth operation and reliability. It provides a balance between performance and economy, suitable for everyday riding and standard usage.",
        productImage: "https://filebroker-cdn.lazada.com.ph/kf/S5da9a47e9e9d4d35b7ce0d9ebf188326k.jpg"
    },
    {
        id: 26,
        Sid: 6,
        productName: "Gpu Rtx 4060",
        category:"accesories",
         rating:[
            { commenter: 'Ezra', rating: 4, comment: 'Good quality, but the delivery was delayed.' },
            { commenter: 'Lillian', rating: 5, comment: 'Excellent product, highly recommend it!' },
            { commenter: 'Carson', rating: 3, comment: 'It’s okay, but there are better options out there.' },
        ],
        price: 24000,
        description: "The NVIDIA GeForce RTX 4060 is a high-performance graphics card designed for gamers and creators. It features the latest NVIDIA Ampere architecture, delivering improved ray tracing and AI capabilities. With 12GB of GDDR6 memory, it offers excellent performance for demanding games and creative applications. Ideal for high-resolution gaming, this GPU also supports DLSS 3.0 for enhanced frame rates and smoother gameplay.",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgtau61gsmr9W4Nr81IMF-ZIvDdX_jjgpOg&s"
    },
    {
        id: 27,
        Sid: 7,
        productName: "Infinix Hot 40 pro",
        category:"gadgets",
         rating:[
            { 
                commenter: 'Ezra', 
                rating: 4, 
                comment: 'Good quality, but the delivery was delayed.' 
            },
            { 
                commenter: 'Lillian', 
                rating: 5, 
                comment: 'Excellent product, highly recommend it!' 
            },
            { 
                commenter: 'Carson', 
                rating: 3, 
                comment: 'It’s okay, but there are better options out there.' 
            },
        ],
        price: 13000,
        description: "The Infinix Hot 40 Pro is a budget-friendly smartphone that offers a balanced mix of performance and features. It comes with a large 6.78-inch HD+ display, providing a clear and vibrant viewing experience. Powered by a MediaTek Helio G95 processor and coupled with 8GB of RAM, it ensures smooth multitasking and decent gaming performance. The device is equipped with a 64MP AI triple rear camera setup for sharp and detailed photos, along with a 16MP front camera for selfies. It also includes a large 5000mAh battery for extended use and supports fast charging.",
        productImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6tVkQox5l4T2YCNDwFLIe1qZ4l0tg21XLYUHbwRe22EDao5DjhihM6zXQ99bhoU1OBenbiNO9MIVAgZAubvG3FFgA6RzVp_QcSCcgJ1PTlAeZtcIOlWWfwJPWFbXoM5YDgJziY5qMjVJCXoI_ir72y85iCyQ6xmtMFHZnRSDyuJfwvvb5a0_TsVOER_4/s800/infinix-hot-40-box-inclusions.png"
    },
    {
        id: 28,
        Sid: 7,
        productName: "Rog phone 8",
        category:"gadgets",
         rating:[
            { commenter: 'Brooklyn', rating: 4, comment: 'Good product, but the packaging was damaged.' },
            { commenter: 'Gabriel', rating: 5, comment: 'Fantastic product, totally worth it.' },
            { commenter: 'Avery', rating: 3, comment: 'The product is average, nothing too impressive.' },
        ],
        price: 40000,
        description: "The ROG Phone 8 is a premium gaming smartphone designed for hardcore gamers. It features a 6.78-inch AMOLED display with a 165Hz refresh rate for ultra-smooth gameplay and vibrant visuals. Powered by the latest Qualcomm Snapdragon 8 Gen 3 processor and up to 18GB of RAM, it delivers top-tier performance for demanding games and applications. The phone includes advanced cooling technology to prevent overheating during extended gaming sessions. With a 6000mAh battery, it offers long-lasting playtime and supports fast charging. The ROG Phone 8 also features customizable RGB lighting and gaming-specific features like shoulder triggers and enhanced audio.",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZp89V4WUEK196dCZxZ06s2ab7kZj_HMG4pA&s"
    },
    {
        id: 29,
        Sid: 7,
        productName: "Colorful Gaming Headset",
        category:"gadgets",
         rating:[
            { commenter: 'Nolan', rating: 4, comment: 'Good value for the money, would buy again.' },
            { commenter: 'Elliana', rating: 5, comment: 'Excellent quality, very satisfied with the purchase.' },
            { commenter: 'Caleb', rating: 4, comment: 'Good product, but could be a bit cheaper.' },
        ],
        price: 40000,
        description: "The Colorful Gaming Headset is designed to enhance your gaming experience with immersive sound and vibrant aesthetics. It features large, over-ear cushioned ear cups for comfort during long gaming sessions and delivers high-quality stereo sound with deep bass and clear treble. The headset includes a built-in noise-canceling microphone for clear communication with your teammates. It also has customizable RGB lighting on the ear cups, allowing you to match your gaming setup. With a durable build and adjustable headband, it ensures a comfortable fit for any gamer. Compatible with PCs, consoles, and mobile devices, this headset is a versatile choice for gamers.",
        productImage: "https://images.creativefabrica.com/products/previews/2023/10/27/P5j5rR4nq/2XLM8AbAEvG9UVx7sXHZydsKmwe-mobile.jpg"
    },
    {
        id: 30,
        Sid: 7,
        productName: "AirPods Apple earbuds",
        category:"gadgets",
         rating:[
            { commenter: 'Savannah', rating: 3, comment: 'The product is decent, but not what I was expecting.' },
            { commenter: 'Jayden', rating: 5, comment: 'Top-quality product, very happy with it.' },
            { commenter: 'Abigail', rating: 4, comment: 'Satisfied with the product, but the delivery was delayed.' },
        ],
        price: 40000,
        description: "Apple AirPods are wireless earbuds designed for seamless integration with Apple devices. They feature high-quality sound, delivering rich bass and clear treble for an immersive audio experience. Equipped with Apple's H1 chip, they offer quick pairing, stable connections, and hands-free access to Siri. The AirPods come with a compact charging case that provides multiple charges for up to 24 hours of battery life. They are also designed for comfort, with a lightweight, in-ear design that fits snugly and securely. Ideal for music, calls, and voice commands, AirPods are a convenient and portable audio solution.",
        productImage: "https://p7.hiclipart.com/preview/364/581/66/airpods-apple-earbuds-headphones-iphone-apple.jpg"
    },
    {
        id: 31,
        Sid: 10,
        productName: "solar fan",
        category:"appliances",
         rating:[
            { commenter: 'Hunter', rating: 3, comment: 'The product is okay, but I found better options.' },
            { commenter: 'Zoey', rating: 5, comment: 'Great product, just as described.' },
            { commenter: 'Colton', rating: 4, comment: 'Good product, but the instructions were unclear.' },
        ],
        price: 1200,
        description: "A solar fan is an eco-friendly cooling device powered by solar energy, making it ideal for use in areas with abundant sunlight. It typically features solar panels that convert sunlight into electricity, which powers the fan without the need for an external power source. Solar fans are portable and energy-efficient, providing ventilation and cooling for outdoor spaces, greenhouses, or off-grid areas. They are available in various sizes and designs, with some models including a rechargeable battery for operation during cloudy days or at night. Easy to set up and maintain, a solar fan is a sustainable option for reducing energy costs while keeping your environment cool.",
        productImage: "https://p1.hiclipart.com/preview/542/964/950/battery-fan-solar-power-solarpowered-fan-solar-lamp-dlight-design-inc-solar-panels-offthegrid-png-clipart.jpg"
    },
    {
        id: 32,
        Sid: 10,
        productName: "solar light",
        category:"appliances",
         rating:[
            { commenter: 'Hannah', rating: 3, comment: 'The product is decent, but nothing special.' },
            { commenter: 'Maverick', rating: 5, comment: 'Excellent product, very pleased with the purchase.' },
            { commenter: 'Paisley', rating: 4, comment: 'Overall a good experience, but the shipping took too long.' },
        ],
        price: 1000,
        description: "A solar light is a sustainable lighting solution powered by solar energy. It features built-in solar panels that capture sunlight during the day and convert it into electricity, which is stored in a rechargeable battery. This stored energy powers the light at night, making it ideal for outdoor use in gardens, pathways, driveways, or any area without easy access to electricity. Solar lights are typically equipped with LED bulbs, which are energy-efficient and long-lasting. They automatically turn on at dusk and off at dawn, providing hassle-free illumination. Easy to install and maintain, solar lights offer an eco-friendly and cost-effective way to enhance outdoor lighting.",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrV5G004uca7za4IYnMIChxJloU5wS7-9trw&s"
    },
    {
        id: 33,
        Sid: 10,
        productName: "solar panel",
        category:"appliances",
         rating:[
            { commenter: 'Evelyn', rating: 3, comment: 'The product is okay, but not what I was expecting.' },
            { commenter: 'Levi', rating: 5, comment: 'Amazing product, totally worth it.' },
            { commenter: 'Camila', rating: 4, comment: 'Good product, but the packaging could be better.' },
        ],
        price: 1500,
        description: "A solar panel is a device that converts sunlight into electricity using photovoltaic cells. It consists of multiple silicon-based cells that absorb sunlight and generate direct current (DC) electricity. Solar panels are commonly used in residential, commercial, and industrial applications to power various devices, reduce electricity bills, or contribute to a sustainable energy system. They are available in different sizes and capacities, making them versatile for a wide range of installations, from small portable panels for camping to large arrays for powering homes or businesses. Solar panels are durable, low-maintenance, and an environmentally friendly way to harness renewable energy.",
        productImage: "https://i.pinimg.com/736x/40/8a/2b/408a2b48c499396af55cd3fdfc1f9289.jpg"
    },
    {
        id: 34,
        Sid: 10,
        productName: "solar setup package off grid system",
        category:"appliances",
         rating:[
            { commenter: 'Eleanor', rating: 3, comment: 'It’s okay, but there are better alternatives.' },
            { commenter: 'Sebastian', rating: 5, comment: 'Top-notch product, very satisfied with it.' },
            { commenter: 'Lila', rating: 4, comment: 'Good product overall, but the delivery was delayed.' },
        ],
        price: 15000,
        description: "A solar setup package for an off-grid system includes solar panels, a charge controller, a battery bank, an inverter, mounting hardware, and necessary cabling. This package is designed to generate, store, and convert solar energy into usable electricity for areas without access to the power grid. Ideal for remote locations, it provides a reliable, independent power source.",
        productImage: "https://image.made-in-china.com/202f0j00HwThEAmWyMoJ/PNG-off-Grid-Solar-Energy-System-24V-48V-Solar-System-with-Lithium-Battery-Hybrid-System.webp"
    },
    {
        id: 35,
        Sid: 10,
        productName: "solar battery 12v 200AH",
        category:"appliances",
         rating:[
            { commenter: 'Jaxon', rating: 3, comment: 'The product is okay, but I found better deals.' },
            { commenter: 'Aurora', rating: 5, comment: 'Great quality, exactly what I needed.' },
            { commenter: 'Mateo', rating: 4, comment: 'Good product, but the price is a bit high.' },
        ],
        price: 12500,
        description: "A 12V 200AH solar battery is a deep-cycle battery designed for use in solar power systems. It has a capacity of 200 amp-hours, meaning it can deliver 12 volts of power for 200 hours at a constant current of one amp. This battery stores energy generated by solar panels and provides reliable power for off-grid systems, ensuring a steady supply of electricity for extended periods. It is commonly used in residential solar setups, RVs, and other applications where efficient and long-lasting energy storage is needed.",
        productImage: "https://ph-live-01.slatic.net/shop/7289179bc935112c5d9ea978f77ffb9b.png"
    },
    {
        id: 36,
        Sid: 5,
        productName: "drill set",
        category:"equipment",
         rating:[
            { commenter: 'Victoria', rating: 3, comment: 'The product is decent, but not impressive.' },
            { commenter: 'Elias', rating: 5, comment: 'Excellent product, highly recommend it.' },
            { commenter: 'Willow', rating: 4, comment: 'Good product, but the instructions were unclear.' },
            { commenter: 'Theodore', rating: 3, comment: 'It’s okay, but I expected better quality.' }
        ],
        price: 10000,
        description: "A drill set includes a cordless drill or drill/driver for versatile drilling and driving tasks. It comes with a variety of drill bits for different materials such as wood, metal, and masonry, as well as screwdriver bits for driving screws. The set often includes a chuck key for securing the bits (if applicable) and a carrying case for convenient storage and portability. This comprehensive set is ideal for both DIY projects and professional use, offering a range of tools for various drilling and fastening needs.",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmNELTwDGEHIJSf7kYtPxw9jZuvzeAK02Fg&s"
    },
    {
        id: 37,
        Sid: 5,
        productName: "grinder",
        category:"equipment",
         rating:[
            { commenter: 'Liam', rating: 5, comment: 'Outstanding product, very pleased!' },
            { commenter: 'Mila', rating: 4, comment: 'Good value for money, happy with the purchase.' },
            { commenter: 'Zachary', rating: 3, comment: 'It’s okay, but I’ve seen better options.' },
        ],
        price: 7000,
        description: "A grinder is a tool used for cutting, grinding, and polishing. It includes a grinder tool (handheld or bench), grinding wheels or discs, a safety guard, a handle, and operates with electric (corded or cordless) or pneumatic power.",
        productImage: "https://www.jinglitools.com/jinglitools/2023/06/29/16.png?imageView2/2/format/jp2"
    },
    {
        id: 38,
        Sid: 5,
        productName: "welding machine",
        category:"equipment",
         rating:[
            { commenter: 'Sophia', rating: 5, comment: 'Perfect product, exactly as advertised.' },
            { commenter: 'Isaac', rating: 4, comment: 'Solid product, but packaging could be better.' },
            { commenter: 'Grace', rating: 5, comment: 'Exceptional quality, I’m thrilled with it.' },
        ],
        price: 13000,
        description: "A welding machine is used to join metals with heat. It includes a welding unit, electrodes or wire, a ground clamp, a welding torch or gun, and a power source (electric or gas).",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3mN4KHSkYX0YKVEtBLm5LOc4Jugwj4FJvw&s"
    },
    {
        id: 39,
        Sid: 5,
        productName: "grinding disc",
        category:"equipment",
         rating:[
            { commenter: 'Aiden', rating: 2, comment: 'Disappointed with the product, poor performance.' },
            { commenter: 'Olivia', rating: 4, comment: 'Satisfied, but shipping was slower than expected.' },
            { commenter: 'Nathan', rating: 3, comment: 'Average product, expected more for the price.' },
        ],
        price: 78,
        description: "A grinding disc is used for grinding, cutting, and shaping metal and other materials. It is made from abrasive materials like aluminum oxide or silicon carbide, comes in various sizes and thicknesses, and fits different grinding tools. Ideal for metalworking, surface preparation, and finishing tasks, it offers durability and efficient material removal.",
        productImage: "https://www.gigatools.ph/cdn/shop/products/MakitaGrindingDiscforAngleGrindercover1.jpg?v=1613449335"
    },
    {
        id: 40,
        Sid: 5,
        productName: "welding cable",
        category:"equipment",
         rating:[
            { commenter: 'Maya', rating: 5, comment: 'Amazing product, highly recommended!' },
            { commenter: 'Jack', rating: 4, comment: 'Good product, but could be cheaper.' },
            { commenter: 'Evelyn', rating: 3, comment: 'The product is okay, but the instructions were confusing.' },
        ],  
        price: 700,
        description: "A welding cable is used to connect a welding machine to the workpiece and ground. It features durable insulation to handle high temperatures and electrical currents, conductors made of copper or aluminum for efficient conductivity, and a flexible design for easy handling. It is rated for the voltage and current needed for welding tasks, ensuring a stable and reliable electrical connection.",
        productImage: "https://down-ph.img.susercontent.com/file/ph-11134207-7qul6-lhiplnifhcknb7_tn"
    },
    {
        id: 41,
        Sid: 9,
        productName: "toys for boy kids ",
        category:"toys",
         rating:[
            { commenter: 'Benjamin', rating: 5, comment: 'Top-tier quality, will definitely buy again.' },
            { commenter: 'Aria', rating: 4, comment: 'Great product, but the delivery was a bit slow.' },
            { commenter: 'Lucas', rating: 3, comment: 'The product is fine, but I found better options elsewhere.' },
        ],
        price: 150,
        description: "Toys for boys include action figures, building sets, cars and trucks, sports equipment, and educational toys. They are designed for fun and development.",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC1x1qhoqLlxQBMH6wen6kxrqwHJLe1ekaQ&s"
    },
    {
        id: 42,
        Sid: 9,
        productName: "toys for girl kid",
        category:"toys",
         rating:[
            { commenter: 'Ella', rating: 5, comment: 'Couldn’t be happier, fantastic product!' },
            { commenter: 'Samuel', rating: 4, comment: 'Good quality, but packaging was slightly damaged.' },
            { commenter: 'Lily', rating: 3, comment: 'The product is okay, but not impressive.' },
        ],
        price: 200,
        description: "",
        productImage: "https://m.media-amazon.com/images/I/61BAGWamzhL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 43,
        Sid: 9,
        productName: "human size teddy bear",
        category:"toys",
         rating:[
            { commenter: 'Daniel', rating: 5, comment: 'Superb product, exceeded my expectations.' },
            { commenter: 'Scarlett', rating: 4, comment: 'Good experience overall, but the price is a bit steep.' },
            { commenter: 'Elijah', rating: 3, comment: 'Average product, could be better for the price.' },
        ],
        price: 500,
        description: "Toys for girls include dolls, craft kits, building blocks, toy kitchens, and educational games. They are designed to encourage imaginative play and creativity.",
        productImage: "https://down-ph.img.susercontent.com/file/08fbe3fc9f10fcc290871d7a2d540853_tn"
    },
    {
        id: 44,
        Sid: 9,
        productName: "12 inch teddy bear",
        category:"toys",
         rating:[
            { commenter: 'Mila', rating: 5, comment: 'Excellent quality, will definitely buy more.' },
            { commenter: 'Charlotte', rating: 4, comment: 'Good product, but instructions weren’t clear.' },
            { commenter: 'Matthew', rating: 3, comment: 'It’s fine, but not as good as expected.' },
        ],
        price: 250,
        description: "A 12-inch teddy bear is a soft plush toy with fluffy fur and a friendly face. It is designed for comfort and cuddling, with a durable, stuffed body for long-lasting use.",
        productImage: "https://img.ws.mms.shopee.ph/e06d147c9871127a673b083d4762c8e9"
    },
    {
        id: 45,
        Sid: 9,
        productName: "helicopter remote control toy",
        category:"toys",
         rating:[
            { commenter: 'Amelia', rating: 5, comment: 'Perfect! I’m very satisfied with this purchase.' },
            { commenter: 'Henry', rating: 4, comment: 'Good value for money, happy with my purchase.' },
            { commenter: 'Luna', rating: 3, comment: 'The product is okay, but quality could be better.' },
        ],
        price: 250,
        description: "A remote control helicopter toy allows you to fly and control the helicopter with a handheld transmitter. It features a rechargeable battery, durable construction, and often includes LED lights.",
        productImage: "https://images.meesho.com/images/products/269412714/kisuc_512.webp"
    },
    {
        id: 46,
        Sid: 8,
        productName: "extension cord",
        category:"equipment",
         rating:[
            { commenter: 'Noah', rating: 5, comment: 'Fantastic quality, very happy with it.' },
            { commenter: 'Ava', rating: 4, comment: 'The product is good, but the packaging needs improvement.' },
            { commenter: 'James', rating: 3, comment: 'Decent product, but I’ve seen better options.' },
        ],
        price: 250,
        description: "An extension cord is used to extend the reach of electrical power from an outlet to your device. It features a power plug on one end and one or more sockets on the other, with a durable, insulated cable to ensure safety and flexibility.",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknrCUZ9aGd5-HjJk3FAsRfLTiOvaRKLgsdg&s"
    },
    {
        id: 47,
        Sid: 8,
        productName: "240V Air Conditioner Power Cable ",
        category:"equipment",
         rating:[
            { commenter: 'Riley', rating: 5, comment: 'Amazing product, exactly what I needed.' },
            { commenter: 'Ethan', rating: 4, comment: 'Good product, but could be a bit cheaper.' },
            { commenter: 'Harper', rating: 3, comment: 'The product is average, nothing special.' },
        ],
        price: 700,
        description: "A 240V air conditioner power cable is designed to supply electrical power to air conditioning units. It features a durable, insulated cable capable of handling high voltage, with a plug that fits standard 240V outlets and a connector for the air conditioner.",
        productImage: "https://5.imimg.com/data5/SELLER/Default/2022/2/EU/RO/LF/3203369/air-conditioner-power-cable-500x500.png"
    },
    {
        id: 48,
        Sid: 8,
        productName: "electrical tape",
        category:"equipment",
         rating:[
            { commenter: 'Gabriel', rating: 5, comment: 'Top-notch quality, will buy again.' },
            { commenter: 'Zoe', rating: 4, comment: 'Satisfied with the product, but the price is high.' },
            { commenter: 'Logan', rating: 3, comment: 'It’s fine, but there are better alternatives out there.' },  
        ],
        price: 50,
        description: "Electrical tape is used to insulate and protect electrical wires and connections. It features an adhesive backing and is made from durable, flexible materials like PVC.",
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMnJRcSRaxYeFZyUt6AJPkoI5dRpnnNaUYA&s"
    },
    {
        id: 49,
        Sid: 8,
        productName: "LED High-Powered Bulb 100W ",
        category:"equipment",
         rating:[
            { commenter: 'Isabella', rating: 5, comment: 'Fantastic product, couldn’t be happier!' },
            { commenter: 'Jackson', rating: 4, comment: 'Good product, but shipping was delayed.' },
            { commenter: 'Emily', rating: 3, comment: 'The product is okay, but packaging was damaged.' },
        ],
        price: 1050,
        description: "A 100W LED high-powered bulb provides bright, efficient lighting. It offers high luminosity while consuming less energy compared to traditional bulbs.",
        productImage: "https://eshome.ph/cdn/shop/files/LED-High-Powered-Bulb-100W-E27-Bulb-Holder-with-Heatsink-Ecoshift-Shopify-291.jpg?v=1717125896&width=1445"
    },
    {
        id: 50,
        Sid: 8,
        productName: "PVC Electric Wire Moulding ",
        category:"equipment",
         rating:[
            { commenter: 'Grayson', rating: 5, comment: 'Exceptional quality, very pleased with the purchase.' },
            { commenter: 'Layla', rating: 4, comment: 'Good product, but it took a while to arrive.' },
            { commenter: 'Alexander', rating: 3, comment: 'It’s okay, but the product isn’t as durable as expected.' },
            { commenter: 'Leah', rating: 5, comment: 'Great product, highly recommend it.' },
            { commenter: 'Wyatt', rating: 4, comment: 'The product is good, but packaging was damaged.' }
        ],
        price: 150,
        description: "PVC electric wire moulding is used to cover and protect electrical wires. It features a durable PVC construction that shields wires from damage and provides a clean, organized appearance.",
        productImage: "https://business.shoppable.ph/_next/image?url=https%3A%2F%2Fshoppable-dev.s3.ap-southeast-1.amazonaws.com%2Fabe6a62d-840c-4a70-bc9a-84ed381bb3b9.jpg&w=1080&q=75"
    },
]

