export type Question = {
    id: string;
    title: string;
    answer: string;
    difficulty: 'junior' | 'middle' | 'senior';
};

export const questionsByTopic: Record<string, Question[]> = {
    javascript: [
        {
            id: 'js-1',
            title: 'Что такое замыкание?',
            answer: 'Замыкание — это способность функции запоминать лексическое окружение, в котором она была создана.',
            difficulty: 'middle',
        },
        {
            id: 'js-2',
            title: 'Чем let отличается от var?',
            answer: 'let имеет блочную область видимости, а var — функциональную. Также var всплывает иначе.',
            difficulty: 'junior',
        },
    ],

    typescript: [
        {
            id: 'ts-1',
            title: 'Зачем нужен TypeScript?',
            answer: 'TypeScript добавляет статическую типизацию поверх JavaScript и помогает находить ошибки до запуска кода.',
            difficulty: 'junior',
        },
    ],

    react: [
        {
            id: 'react-1',
            title: 'Что такое компонент в React?',
            answer: 'Компонент — это функция или класс, который возвращает JSX и описывает часть интерфейса.',
            difficulty: 'junior',
        },
        {
            id: 'react-2',
            title: 'Что такое props?',
            answer: 'Props — это данные, которые родительский компонент передаёт дочернему компоненту.',
            difficulty: 'junior',
        },
    ],

    playwright: [
        {
            id: 'pw-1',
            title: 'Что такое Playwright?',
            answer: 'Playwright — это фреймворк для автоматизации браузеров и написания e2e-тестов.',
            difficulty: 'junior',
        },
    ],

    'rest-api': [
        {
            id: 'api-1',
            title: 'Что такое REST API?',
            answer: 'REST API — это архитектурный подход к построению API через ресурсы, HTTP-методы и статусы ответов.',
            difficulty: 'junior',
        },
    ],

    sql: [
        {
            id: 'sql-1',
            title: 'Что делает SELECT?',
            answer: 'SELECT используется для получения данных из таблицы базы данных.',
            difficulty: 'junior',
        },
    ],

    docker: [
        {
            id: 'docker-1',
            title: 'Что такое Docker?',
            answer: 'Docker позволяет упаковать приложение и его зависимости в контейнер.',
            difficulty: 'junior',
        },
    ],

    git: [
        {
            id: 'git-1',
            title: 'Что такое commit?',
            answer: 'Commit — это сохранённое состояние изменений в Git-репозитории.',
            difficulty: 'junior',
        },
    ],
};
