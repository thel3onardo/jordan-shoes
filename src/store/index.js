import { createStore } from "vuex";

export default createStore({
    state: {
        shoes: [
            {
                id: 1,
                model: "Air Jordan 1 Mid 'Dutch Green'",
                price: 649.9,
                image: require("../assets/items/1.png"),
                sizes: ["M 36 / F 36", "M 37 / F 44"],
                section: "Casual",
                hover: false,
            },
            {
                id: 2,
                model: "air jordan 1 mid island green",
                price: 1.799,
                image: require("../assets/items/2.png"),
                sizes: ["M 36 / F 36", "M 37 / F 44"],
                section: "Premium",
                hover: false,
            },
            {
                id: 3,
                model: "Air Jordan Retro Turbo Green",
                price: 799.9,
                image: require("../assets/items/3.png"),
                sizes: ["M 36 / F 36", "M 37 / F 44"],
                section: "Casual",
                hover: false,
            },
            {
                id: 4,
                model: "air jorden 1 mid 'Smoke Grey'",
                price: 599.99,
                image: require("../assets/items/4.png"),
                sizes: ["M 36 / F 36", "M 37 / F 44"],
                section: "Casual",
                hover: false,
            },
            {
                id: 5,
                model: "jordan 1 black white noble red",
                price: 699.99,
                image: require("../assets/items/5.png"),
                sizes: ["M 36 / F 36", "M 37 / F 44"],
                section: "Casual",
                hover: false,
            },
            {
                id: 6,
                model: "jordan 1 mid citrus",
                price: 1799,
                image: require("../assets/items/6.png"),
                sizes: ["M 36 / F 36", "M 37 / F 44"],
                section: "Premium",
                hover: false,
            },
            {
                id: 7,
                model: "Air Jordan 1 Low 'White Camo'",
                price: 749.99,
                image: require("../assets/items/7.png"),
                sizes: ["M 36 / F 36", "M 37 / F 44"],
                section: "Casual",
                hover: false,
            },
            {
                id: 8,
                model: "jordan 1 mids black and white",
                price: 1099,
                image: require("../assets/items/8.png"),
                sizes: ["M 36 / F 36", "M 37 / F 44"],
                section: "Premium",
                hover: false,
            },
        ],
        cart: [],
        transformTitle: function(name) {
            return name.split(' ').map((element) => {
                return element.replace(element[0], element[0].toUpperCase());
            }).join(' ');
        }
    },
});
