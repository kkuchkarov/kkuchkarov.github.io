function login(username, password) {
    var xhr = new XMLHttpRequest();
    var url = 'http://test.aic.uz/apex/ins/swagger/auth/';

    // Формируем данные для запроса
    var data = JSON.stringify({
        p_username: username,
        p_password: password
    });

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Обработчик успешного выполнения запроса
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var response = JSON.parse(xhr.responseText);

            // Обработка ответа от сервера
            if (response.success) {
                // Пользователь успешно аутентифицирован
                window.location.href = "https://app.swaggerhub.com/apis-docs/apex.kobul/ords-generated_api_for_tengebank_autocredit/2.0.0#/";
            } else {
                // Аутентификация не удалась
                alert("Неверный логин или пароль");
            }
        } else {
            // Обработка ошибок при выполнении запроса
            console.error('Ошибка запроса:', xhr.statusText);
        }
    };

    // Обработчик ошибок
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };

    // Отправка запроса на сервер
    xhr.send(data);
}
