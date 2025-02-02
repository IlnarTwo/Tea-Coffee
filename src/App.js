import React from 'react';
import Pages from './components/Pages';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      role: null, // Роль пользователя
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Проверяем аутентификацию при загрузке приложения
    this.checkAuth();

    // Устанавливаем интервал для периодической проверки аутентификации
    this.intervalId = setInterval(() => {
      this.checkAuth();
    }, 10000); // Проверка каждые 10 секунд
  }

  componentWillUnmount() {
    // Очищаем интервал при размонтировании компонента
    clearInterval(this.intervalId);
  }

  // Функция для проверки аутентификации
  checkAuth = () => {
    const jwt = localStorage.getItem('jwt'); // Получаем JWT из localStorage

    var self = this

    if (jwt) {
      // Если JWT есть, отправляем его на бэкенд для проверки
      axios
        .get('http://127.0.0.1/server/php/authentificate.php', {
          headers: {
            Authorization: `Bearer ${jwt}`, // Добавляем JWT в заголовок
          },
          withCredentials: true, // Используем куки, если необходимо
        })
        .then((response) => {
          const { auth, role } = response.data; // Получаем данные от бэкенда
          self.setState({ auth, role }); // Обновляем состояние
        })
        .catch((error) => {
          console.error('Error checking authentication:', error);
          self.setState({ auth: false, role: null }); // Сбрасываем состояние при ошибке
        });
    } else {
      // Если JWT отсутствует, сбрасываем состояние
      self.setState({ auth: false, role: null });
    }
  };

  render() {
    const { auth, role } = this.state;

    return (
      <div>
        <Pages auth={auth} role={role} />
      </div>
    );
  }
}

export default App;