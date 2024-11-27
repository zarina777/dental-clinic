import React from "react";
import PerComment from "../../../../../components/PerComment";

const CommentPart = () => {
  const users = [
    {
      name: "Мухиддиг Рихсибоев",
      commentary:
        "Спасибо большое доктору, быстро и безболезненно вылечил мне зубы👍",
      time: "2 дня назад",
      img: "./user-images/user.webp",
    },
    {
      name: "Dinara Yusubboeva",
      commentary:
        "В 11 ночи заболел зуб, ходила на 2 клиники никто из них не принимал меня в назначенное время всегда приходилось их ждать. Но Жалолиддин в этой клинике всегда принимает во время и всегда за день напоминает о записи, просто молодец хороший мальчик👍",
      time: "2 месяцев назад",
      img: "https://lh3.googleusercontent.com/a/ACg8ocKMmU-XYIfYcL_pGePTn7xM3941ORDbiHbk488DTA51ftcd8g=s120-c-rp-mo-br100",
    },

    {
      name: "Husanboy Ahmadov",
      commentary: "Ребята просто классные всем рекомендую,  знают свое дело",
      time: "3 дня назад",
      img: "./user-images/user2.jpg",
    },
    {
      name: "Shakhzad Pardaboyev",
      commentary: "👍👍👍👍👍👍",
      time: "1 месяц назад",
      img: "https://lh3.googleusercontent.com/a/ACg8ocLsvo5MXMHfBB-ALuMEPAwqA0nJ5UhpKjREC4vnLz7RTkRIrg=s120-c-rp-mo-br100",
    },
  ];
  return (
    <div className="">
      {users.map((el, index) => (
        <PerComment
          name={el.name}
          img={el.img}
          time={el.time}
          commentary={el.commentary}
          id={index}
        />
      ))}
    </div>
  );
};

export default CommentPart;
