import { createContext, useContext, useState } from "react";

const appContext = createContext();

function Context({ children }) {
    const menProducts = [
        {
            name: "Thirsty Thursday T-shirt",
            price: 500,
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/thirstyThursdayTshirt.webp",
            description:
                "Our ultra soft USA made signature t-shirt exclusive to Solid Threads.",
        },
        {
            name: "Men's Derek Jeter",
            price: 1100,
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/jersey.webp",
            description:
                "Derek Jeter is your favorite player, and for a good reason.",
        },
        {
            name: "Stakes Still High T-Shirt",
            price: 320,
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/stylishTshirt.jpg",
            description:
                "100% combed and ring-spun cotton t-shirt featuring design inspired by Stakes is High",
        },
        {
            name: "Whiskey Helps T-shirt",
            price: 280,
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/whiskyHelpsTshirt.webp",
            description:
                "Our ultra soft USA made signature t-shirt exclusive to Solid Threads.",
        },
        {
            name: "Quail Family Tee",
            price: 300,
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/FamilyTee.webp",
            description: "Classic fit t-shirt. 100% cotton",
        },
        {
            name: "Freenote Clothe",
            price: 350,
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/jean/jean jacket.webp",
            description: "RJ-3 Japanese Selvedge Denim Trucker Jacket",
        },
        {
            name: "PORTUGUESE FLANNEL",
            price: 699,
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/portogueseFlannelTshirt.webp",
            description: "Ground Camp-Collar Pointelle-Knit Cotton-Blend Shirt",
        },
        {
            name: "ORSLOW",
            price: 900,
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/denim.webp",
            description: "Denim Overshirt",
        },
    ];

    const womenProducts = [
        {
            name: "Karl Lagerfeld Women's",
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/1.webp",
            description:
                "Embellishments at front add class and style to this crewneck, short-sleeve top from Karl Lagerfeld.",
            price: 500.00
        },
        {
            name: "Custom Womens T Shirts",
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/customize.webp",
            description:
                "100% Cotton, Preshrunk Ring Spun Jersey Knit for cool comfort; Seamless double stitched",
            price: 1100
        },
        {
            name: "OVERSIZED ZIPPED SWEATSHIRT",
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/4.jpg",
            description:
                "Hooded sweatshirt made of cotton yarn. Long sleeves finished with cuffs. Front metal zip fastening.",
            price: 320
        },
        {
            name: "TRF SLIM CROPPED BELL BOTTOM",
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/5.jpg",
            description:
                "MID-WAIST - CROPPED BELL BOTTOM. Zip fly and metal top button fastening.",
            price: 280
        },
        {
            name: "PLAIN FINE KNIT SWEATER",
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/6.jpg",
            description:
                "Basic sweater with a round neck and long sleeves. Side vents at the hem. Ribbed trims.",
            price: 300
        },
        {
            name: "SILK BLOUSE WITH FLOWERS",
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/7.jpg",
            description:
                "Blouse with flowers in silk fabric. V-neck with hidden buttons and long sleeves.",
            price: 800
        },
        {
            name: "RIPPED SKINNY JEANS",
            image:
                "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/8.jpg",
            description:
                "Skinny jeans with ripped details and frayed hem. Zip fly and button fastening.",
            price: 450
        },
    ];

    const sneekers = [
        {
            name: "Cohen Loafers",
            description: "full-grain leather",
            price: 500.00,
            image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/1.webp",
        },
        {
            name: "Men's Kicks",
            description: "We are committed to sustainability.",
            price: 1100,
            image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/1.jpg",
        },
        {
            name: "Canvas Shoes",
            description: "All Royalty-Free licences include",
            price: 320,
            image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/4.webp",
        },
        {
            name: "Garcia Sneakers",
            description: "full-grain leather & suede",
            price: 2800,
            image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/5.webp",
        },
        {
            name: "Reid Sneakers - men's",
            description: "pebbled leather",
            price: 300,
            image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/6.webp",
        },
        {
            name: "BMorgen Trainers",
            description: "full-grain leather & suede",
            price: 350,
            image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/7.jpg",
        },
        {
            name: "Beaumont Loafers",
            description: "water-repellent suede",
            price: 6990,
            image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/7.webp",
        },
    ];

    const [cartItems, setCartItems] = useState([])
    function removeFromCart(index) {
        setCartItems(prevItems => prevItems.filter((_, i) => i !== index))
      }
    
      function addToCart(product) {
        setCartItems(prevItems => [...prevItems, product])
        setIsCartOpen(true)
      }

    return (
        <appContext.Provider value={{ menProducts, womenProducts, sneekers }}>
            {children}
        </appContext.Provider>
    );
}

function ProductContext() {
    const context = useContext(appContext);

    return context;
}

export { Context, ProductContext };
