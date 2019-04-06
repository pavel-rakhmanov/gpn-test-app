export default {
  getPoll() {
    const response = {
      "success": true,
      "data": {
        "label": "Оцените пожалуйста Вашу готовность рекомендовать «Газпромнефть-Корпоративные продажи» своим коллегам / партнерам?",
        "reasons": [
          {
            "id": 9,
            "label": "Задержки документооборота"
          },
          {
            "id": 7,
            "label": "Неудобный личный кабинет / не хватает опций"
          },
          {
            "id": 3,
            "label": "Не устраивает тарифная политика"
          },
          {
            "id": 5,
            "label": "Текущие рабочие вопросы решаются медленно"
          },
          {
            "id": 4,
            "label": "Неудобная отчетность / нет нужных отчетов"
          },
          {
            "id": 6,
            "label": "Неудобные / долгие процедуры заключения договора"
          },
          {
            "id": 8,
            "label": "Сбои при работе с личным кабинетом"
          },
          {
            "id": 1,
            "label": "Мало дополнительных сервисов для водителей по топливным картам"
          },
          {
            "id": 2,
            "label": "Не устраивает работа менеджеров"
          },
          {
            "id": 10,
            "label": "Другое"
          }
        ]
      }
    }
    
    return new Promise((resolve, reject) => {
      resolve(response);
    })
  },
  postPoll(rate, reasons, message, finish) {
    const data = {
      finish,
      rate,
      reasons,
      message,
    }

    // post data here
    alert('poll data was send');

  }
}