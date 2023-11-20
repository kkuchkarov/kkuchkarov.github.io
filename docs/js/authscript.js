function login(username, password) {
    // Формируем данные для запроса
    const data = {
        p_username: username,
        p_password: password
    };

    // Опции запроса
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    // Отправка запроса на сервер
    fetch('http://test.aic.uz/apex/ins/swagger/auth/', options)
        .then(response => response.json())
        .then(data => {
            // Обработка ответа от сервера
            if (data.success) {
                // Пользователь успешно аутентифицирован
                window.location.href = "https://app.swaggerhub.com/apis-docs/apex.kobul/ords-generated_api_for_tengebank_autocredit/2.0.0#/";
            } else {
                // Аутентификация не удалась
                alert("Неверный логин или пароль");
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}
