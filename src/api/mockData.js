export const cities = [
    { _id: '1', name: 'Москва' },
    { _id: '2', name: 'Санкт-Петербург' },
    { _id: '3', name: 'Самара' },
    { _id: '4', name: 'Новосибирск' },
    { _id: '5', name: 'Сочи' },
];

const createTrain = (id, name, fromCity, toCity, price1, price2, duration) => ({
    departure: {
        _id: `t${id}`,
        train: { _id: id, name: name },
        from: {
            datetime: 1737482400 + (parseInt(id) * 3600),
            city: { name: fromCity },
            railway_station_name: 'Курский'
        },
        to: {
            datetime: 1737482400 + (parseInt(id) * 3600) + duration,
            city: { name: toCity },
            railway_station_name: 'Московский'
        },
        duration: duration,
        have_wifi: true,
        have_air_conditioning: true,
        price_info: {
            second: { price: price1 },
            third: { price: price2 }
        }
    }
});

export const trains = {
    total_count: 15,
    items: [
        createTrain('116', '116С', 'Москва', 'Санкт-Петербург', 3500, 1920, 34920),
        createTrain('082', '082А', 'Москва', 'Санкт-Петербург', 4500, 2500, 15000),
        createTrain('045', '045В', 'Москва', 'Самара', 3200, 1800, 45000),
        createTrain('102', '102М', 'Самара', 'Москва', 3100, 1750, 44000),
        createTrain('002', '002Й', 'Москва', 'Владивосток', 12000, 7500, 500000),
        createTrain('010', '010А', 'Москва', 'Псков', 2800, 1400, 28000),
        createTrain('015', '015Г', 'Мурманск', 'Москва', 5600, 3100, 100000),
        createTrain('020', '020У', 'Екатеринбург', 'Москва', 4800, 2900, 90000),
        createTrain('025', '025Б', 'Воронеж', 'Москва', 2200, 1200, 20000),
        createTrain('030', '030С', 'Адлер', 'Москва', 6500, 3800, 85000),
        createTrain('040', '040М', 'Казань', 'Москва', 3400, 1950, 36000),
        createTrain('050', '050Е', 'Пермь', 'Москва', 4200, 2600, 75000),
        createTrain('060', '060Ш', 'Челябинск', 'Москва', 5100, 3200, 95000),
        createTrain('070', '070А', 'Вологда', 'Москва', 1900, 950, 18000),
        createTrain('080', '080К', 'Ростов', 'Москва', 3900, 2100, 42000),
    ]
};

export const seatsData = [
    {
        coach: { _id: 'c1', name: '01', class_type: 'second', have_wifi: true, have_air_conditioning: true, top_price: 3800, bottom_price: 3500, price: 3500, available_seats: 12 },
        seats: [{ index: 1, available: true }, { index: 2, available: false }, { index: 3, available: true }]
    },
    {
        coach: { _id: 'c2', name: '02', class_type: 'second', have_wifi: false, have_air_conditioning: true, top_price: 3800, bottom_price: 3500, price: 3500, available_seats: 8 },
        seats: [{ index: 1, available: true }, { index: 5, available: true }]
    },
    {
        coach: { _id: 'c3', name: '07', class_type: 'third', have_wifi: true, have_air_conditioning: true, top_price: 2100, bottom_price: 1920, price: 1920, available_seats: 24 },
        seats: [{ index: 1, available: true }, { index: 18, available: true }]
    },
    {
        coach: { _id: 'c4', name: '10', class_type: 'fourth', have_wifi: true, have_air_conditioning: true, price: 1100, available_seats: 45 },
        seats: Array.from({length: 45}, (_, i) => ({index: i+1, available: true}))
    },
    {
        coach: { _id: 'c5', name: '03', class_type: 'first', have_wifi: true, have_air_conditioning: true, price: 9800, available_seats: 8 },
        seats: [{ index: 1, available: true }, { index: 2, available: true }]
    }
];
