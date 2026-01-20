import React, { useState } from 'react';
import styles from './Reviews.module.scss';

const slidesData = [
    [
        {
            id: 1,
            name: "Екатерина Вальнова",
            text: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн впервые.",
            img: "https://i.pravatar.cc/150?img=5"
        },
        {
            id: 2,
            name: "Евгений Стрыкало",
            text: "СМС-сопровождение до посадки - Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.",
            img: "https://i.pravatar.cc/150?img=11"
        }
    ],
    [
        {
            id: 3,
            name: "Анна Каренина",
            text: "Очень удобный сервис! Раньше приходилось стоять в очередях на вокзале, а теперь все делаю из дома за 5 минут. Спасибо разработчикам!",
            img: "https://i.pravatar.cc/150?img=9"
        },
        {
            id: 4,
            name: "Дмитрий Нагиев",
            text: "Покупал билеты для всей съемочной группы. Оформление заняло минимум времени. Отдельное спасибо за понятный выбор мест в вагоне.",
            img: "https://i.pravatar.cc/150?img=3"
        }
    ],
    [
        {
            id: 5,
            name: "Мария Иванова",
            text: "Лучший сайт для покупки билетов. Всегда пользуюсь только им. Нравится, что сразу видно итоговую цену без скрытых комиссий.",
            img: "https://i.pravatar.cc/150?img=1"
        },
        {
            id: 6,
            name: "Иван Петров",
            text: "Езжу в командировки каждую неделю. Этот сервис очень выручает, особенно функция сохранения данных пассажиров.",
            img: "https://i.pravatar.cc/150?img=13"
        }
    ],
    [
        {
            id: 7,
            name: "Ольга Серябкина",
            text: "Интерфейс интуитивно понятный, разберется даже ребенок. Красивый дизайн и быстрая работа сайта.",
            img: "https://i.pravatar.cc/150?img=20"
        },
        {
            id: 8,
            name: "Павел Воля",
            text: "Круто, что можно выбрать конкретное место на схеме вагона. Всегда беру нижнюю полку, чтобы никто не мешал.",
            img: "https://i.pravatar.cc/150?img=12"
        }
    ],
    [
        {
            id: 9,
            name: "Светлана Лобода",
            text: "Быстро, качественно, надежно. Билеты приходят на почту мгновенно. Рекомендую всем друзьям.",
            img: "https://i.pravatar.cc/150?img=25"
        },
        {
            id: 10,
            name: "Филипп Киркоров",
            text: "Цвет настроения синий, а сервис - золотой! Очень удобно планировать гастроли.",
            img: "https://i.pravatar.cc/150?img=60"
        }
    ]
];

const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.section} id="reviews">
            <div className="container">
                <h2>Отзывы</h2>

                <div className={styles.list}>
                    {slidesData[activeIndex].map(review => (
                        <div className={styles.card} key={review.id}>
                            <div className={styles.avatar}>
                                <img src={review.img} alt={review.name} />
                            </div>
                            <div className={styles.content}>
                                <h3>{review.name}</h3>
                                <p className={styles.quote}>{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.pagination}>
                    {slidesData.map((_, index) => (
                        <span
                            key={index}
                            className={activeIndex === index ? styles.active : ''}
                            onClick={() => setActiveIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
