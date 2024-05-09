import { Garbage, FoodIcon, Sprout, NoMeat } from "../assets/constants";

export const advantagesData = [
    { icon: FoodIcon, name: "Еда намного вкуснее", positive: true, description: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники" },
    { icon: Garbage, name: "Просроченные продукты", positive: false, description: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара"},
    { icon: Sprout, name: "Натуральные продукты", positive: true, description: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений." },
    { icon: NoMeat, name: "Некачественное мясо", positive: false, description: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов" }
];

const characteristics = [
    { name: "Масса", value: "0,7 кг. (595-805 г.)"},
    { name: "Срок годности", value: "6 суток"},
    { name: "Порода", value: "КОББ 500"},
    { name: "Место происхождения", value: "Тверская область"},
]

const parameters = [
    { name: "Энергетическая ценность", value: "135 ккал./565 кДж"},
    { name: "Пищевая ценность", value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."},
]

export const goods = [
    { id: 1, picture: "/cards/card-1.png", name: "Филе бедра цыпленка", price: 400, weight: 700, description: "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.", characteristics, parameters },
    { id: 2, picture: "/cards/card-2.png", name: "Филе бедра гуся", price: 400, weight: 700, description: "Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.", characteristics, parameters},
    { id: 3, picture: "/cards/card-2.png", name: "Мякоть бедра говяжья", price: 400, weight: 700, description: "Мякоть бедра - это жестковатое мясо, но очень диетическое и прекрасно подходит для поклонников здорового питания. Мясо можно запечь или потушить с овощами. Все бычки на ферме Эдуарда Васильева выращиваются на натуральном корме.", characteristics, parameters },
    { id: 4, picture: "/cards/card-1.png", name: "Грудка цыпленка на кости", price: 400, weight: 700, description: "Грудка цыпленка на кости без кожи. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Грудка цыпленка обладает насыщенным вкусом и мясным ароматом.", characteristics, parameters},
    { id: 5, picture: "/cards/card-1.png", name: "Голень цыпленка", price: 400, weight: 700, description: "Голень цыпленка без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Голень цыпленка обладает насыщенным вкусом и мясным ароматом.", characteristics, parameters},
];