# TOLK × USITE

Frontend-презентация для TOLK × USITE на базе Vite, React и TypeScript. Проект собирается в статический production build и подходит для переноса на обычный веб-сервер или CDN.

## Стек

- Vite
- React 19
- TypeScript
- Tailwind CSS v4
- Motion
- Lucide React

## Установка зависимостей

Требуется Node.js 20+ и npm.

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

По умолчанию dev server поднимается на `http://localhost:3004`.

## Проверка типов

```bash
npm run typecheck
```

## Production build

```bash
npm run build
```

Готовая сборка появится в папке `dist/`.

## Preview production build

```bash
npm run preview
```

## Полезные scripts

- `npm run dev` - локальная разработка
- `npm run build` - production build
- `npm run preview` - локальный просмотр собранного `dist`
- `npm run typecheck` - проверка TypeScript без сборки
- `npm run lint` - сейчас дублирует typecheck
- `npm run clean` - удаляет папку `dist`

## Важные папки

- `src/` - приложение, компоненты, данные слайдов, стили
- `public/` - статические файлы вроде `robots.txt` и `sitemap.xml`
- `src/assets/images/` - изображения для секций и кейсов
- `scripts/` - вспомогательные Node-скрипты, включая очистку build-артефактов

## Что проверить перед переносом на сервер

1. Выполнить `npm install`.
2. Выполнить `npm run typecheck`.
3. Выполнить `npm run build`.
4. Проверить содержимое `dist/`.
5. Настроить сервер на раздачу статических файлов из `dist/`.
6. Если сайт будет открываться по вложенному пути, при необходимости настроить `base` в `vite.config.ts`.

## Security note

- Текущий `npm audit` advisory относится к `esbuild`.
- Риск касается окружения `install/build/dev`, а не runtime сайта в браузере.
- Собранный статический сайт не содержит `esbuild` в клиентском runtime.
- Major migration на `Vite 8` отложена до отдельной задачи.
