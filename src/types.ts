export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  points?: (string | { text: string; icon: string; tooltip?: string; shortLabel?: string; description?: string })[];
  footer?: string;
  image?: string;
  type: 'hero' | 'dual' | 'list' | 'grid' | 'team' | 'clients' | 'cases' | 'cta' | 'manifest' | 'activities' | 'products' | 'conversion';
  data?: any;
  customStyles?: {
    title?: any;
    subtitle?: any;
    footer?: any;
    description?: any;
  };
}

const LEGACY_SLIDES: SlideContent[] = [
  {
    id: 'slide-1',
    type: 'hero',
    title: 'TOLK × USITE',
    subtitle: 'Дизайн, AI и цифровые системы для бизнеса',
    description: 'От стратегии и интерфейса — до разработки, запуска и роста. Запускаем сайты, AI-ассистентов, личные кабинеты и цифровые продукты, которые помогают продавать, обслуживать и управлять.',
    footer: 'Анализируем. Дизайним. Кодим.',
    data: {
      image: '/hero-one.png'
    },
    customStyles: {
      title: { fontSize: '48px', color: '#99a1af' },
      subtitle: { fontSize: '64px', color: '#000000' }
    }
  },
  {
    id: 'slide-manifest',
    type: 'manifest',
    title: 'Как мы работаем',
    subtitle: 'Подход и философия',
    description: 'Мы не просто исполнители, а партнеры по продукту. Погружаемся в процессы целиком, чтобы создавать системы, которые действительно работают и приносят прибыль.',
    points: [
      { text: 'Комплексный и продуктовый подход', icon: 'Rocket' },
      { text: 'Дизайн, код, аналитика и автоматизация в одном', icon: 'Layers' },
      { text: 'Сложный стек: высоконагруженные системы и ИИ', icon: 'Cpu' },
      { text: 'Личные кабинеты и многопрофильные платформы', icon: 'LayoutDashboard' },
      { text: 'Полное погружение в бизнес-процессы', icon: 'Target' },
      { text: 'Сопровождение: от стратегии до отладки на рынке', icon: 'Shuffle' },
      { text: 'Любая проблема решается за неделю анализа', icon: 'Zap' },
      { text: 'Гибкость и быстрая адаптация к изменениям', icon: 'RefreshCcw' }
    ],
    footer: 'За результат и полное погружение.',
    customStyles: {
      description: { fontSize: '24px' }
    }
  },
  {
    id: 'slide-2',
    type: 'dual',
    title: 'Две сильные стороны. Один контур.',
    data: {
      tolk: {
        name: 'TOLK',
        tags: ['Продукт', 'Стратегия', 'UX/UI', 'Креатив', 'Визуальная система'],
        icon: 'Palette'
      },
      usite: {
        name: 'USITE',
        tags: ['Архитектура', 'Разработка', 'Интеграции', 'Автоматизация', 'AI'],
        icon: 'Code'
      },
      together: 'Быстро переводим задачу бизнеса в работающий цифровой инструмент.'
    }
  },
  {
    id: 'slide-3',
    type: 'list',
    title: 'Что покупают в 2026',
    subtitle: 'Не «цифровую трансформацию». Покупают понятный эффект за 2–6 недель:',
    points: [
      { text: 'Больше лидов', icon: 'TrendingUp' },
      { text: 'Меньше ручного труда', icon: 'Zap' },
      { text: 'Быстрее ответы клиентам', icon: 'MessageSquareText' },
      { text: 'Удобнее работа команды', icon: 'Users' },
      { text: 'Понятный пилот вместо долгой стройки', icon: 'Rocket' },
      { text: 'Прозрачность и контроль', icon: 'Eye' },
      { text: 'Рост конверсии в продажи', icon: 'Target' },
      { text: 'Снижение стоимости процесса', icon: 'Coins' }
    ],
    customStyles: {
      title: { fontSize: '64px' }
    }
  },
  {
    id: 'slide-4',
    type: 'list',
    title: 'Какие задачи мы решаем',
    points: [
      { text: 'Сайт есть, но он не продаёт', icon: 'AlertCircle' },
      { text: 'Поддержка и продажи работают вручную', icon: 'HandMetal' },
      { text: 'Знания, документы и ответы разбросаны', icon: 'FileQuestion' },
      { text: 'Нет кабинета для клиента, дилера или партнёра', icon: 'UserMinus' },
      { text: 'Идея продукта есть, но долго и дорого запускать', icon: 'Clock' },
      { text: 'Внутри бизнеса много хаоса и лишних действий', icon: 'Shuffle' }
    ],
    footer: 'Не делаем «просто экраны». Проектируем систему под реальную задачу бизнеса.',
    data: {
      image: '/work.png'
    },
    customStyles: {
      title: { fontSize: '64px' },
      footer: { fontSize: '48px', color: '#000000', fontWeight: 'bold', textAlign: 'left' }
    }
  },
  {
    id: 'slide-5',
    type: 'grid',
    title: 'Основные офферы',
    data: [
      {
        title: 'AI-сайт / launch sprint',
        details: 'Новая точка продаж за 10–15 дней',
        icon: 'Globe'
      },
      {
        title: 'AI-ассистент продаж и поддержки',
        details: 'FAQ, ответы, маршрутизация, подсказки для команды',
        icon: 'Bot'
      },
      {
        title: 'RAG-база знаний',
        details: 'Поиск по PDF, регламентам, SOP и договорам за 2–4 недели',
        icon: 'Database'
      },
      {
        title: 'Личный кабинет Lite',
        details: '1–2 критичных сценария без тяжёлого enterprise',
        icon: 'LayoutDashboard'
      },
      {
        title: 'AI-аудит и roadmap',
        details: 'Что внедрять в ближайшие 90 дней',
        icon: 'Search'
      },
      {
        title: 'B2B-портал / Дилерская сеть',
        details: 'Удобное управление заказами, документами и остатками',
        icon: 'Settings'
      }
    ]
  },
  {
    id: 'slide-6',
    type: 'list',
    title: 'Другие решения, которые можно быстро собрать',
    points: [
      { text: 'landing + калькулятор / квиз', icon: 'Calculator' },
      { text: 'lead handling desk', icon: 'MousePointerClick' },
      { text: 'review intelligence', icon: 'MessageCircle' },
      { text: 'генератор коммерческих предложений', icon: 'FileSpreadsheet' },
      { text: 'mini‑app / конфигуратор / подборщик', icon: 'Settings2' },
      { text: 'portal refresh', icon: 'RefreshCcw' },
      { text: 'HR / onboarding assistant', icon: 'UserPlus' },
      { text: 'service desk mini', icon: 'Headset' }
    ],
    footer: 'Если задача узкая — собираем отдельный пилот под процесс, нишу и контур компании.',
    customStyles: {
      title: { fontSize: '64px' }
    }
  },
  {
    id: 'slide-7',
    type: 'list',
    title: 'Наш главный скилл — кабинеты и системы',
    subtitle: 'Личные кабинеты, B2B-порталы, дилерские и партнёрские системы — наша самая сильная историческая компетенция.',
    points: [
      { text: 'Заявки и статусы', icon: 'CheckCircle2' },
      { text: 'Документы и прайсы', icon: 'FileText' },
      { text: 'Каталоги и остатки', icon: 'Layers' },
      { text: 'Роли и права', icon: 'ShieldCheck' },
      { text: 'Аналитику и маршруты', icon: 'LineChart' },
      { text: 'AI-поиск и помощь сотрудникам', icon: 'Sparkles' }
    ],
    data: {
        image: '/skill.png'
    },
    customStyles: {
      title: { fontSize: '64px' }
    }
  },
  {
    id: 'slide-7',
    type: 'list',
    title: 'Наш главный скилл — кабинеты и системы',
    subtitle: 'Личные кабинеты, B2B-платформы, дилерские и партнёрские системы — одна из наших самых сильных и прикладных компетенций.',
    points: [
      { text: 'Заявки и статусы', icon: 'CheckCircle2' },
      { text: 'Документы и прайсы', icon: 'FileText' },
      { text: 'Каталоги и остатки', icon: 'Layers' },
      { text: 'Роли и права', icon: 'ShieldCheck' },
      { text: 'Аналитика и маршруты', icon: 'LineChart' },
      { text: 'AI-поиск и помощь сотрудникам', icon: 'Sparkles' }
    ],
    data: {
      image: '/skill.png'
    }
  },
  {
    id: 'slide-8',
    type: 'list',
    title: 'AI inside, а не «чатик ради галочки»',
    subtitle: 'Используем AI как слой поверх продукта и процессов:',
    points: [
      { text: 'Поиск по документам и базе знаний', icon: 'MessageSquareText' },
      { text: 'Ассистенты для продаж, поддержки и команды', icon: 'Bot' },
      { text: 'Summary, черновики, FAQ, маршрутизация', icon: 'MessageCircle' },
      { text: 'AI внутри сайта, кабинета или сервиса', icon: 'Cpu' },
      { text: 'Production-логика под допустимый российский контур', icon: 'Lock' }
    ],
    footer: 'AI для нас — не отдельная игрушка, а способ ускорить работу бизнеса.',
    data: {
        image: '/ai-inside.png'
    },
    customStyles: {
      footer: { fontSize: '48px' }
    }
  },
  {
    id: 'slide-9',
    type: 'team',
    title: 'Кто мы',
    subtitle: 'Founder-led bureau.',
    data: [
      {
        name: 'Михаил Юматов',
        role: 'Директор и основатель USIT (с 2014). Экспертиза: архитектура сложных систем, оптимизация бизнес-процессов, облачные решения.',
        bio: 'Нижний Новгород/Москва. Директор и учредитель Digital-агентства USIT с 2014 года. Основные компетенции — оптимизация бизнес-процессов, архитектура сложных информационных систем, полный цикл разработки облачных программных решений (SDO, CTO).\n\nНачальник факультета инженерных компетенций дополнительного образования Нижегородской области. Спикер НГТУ им. Р.Е. Алексеева по направлению «WEB-технологии». Действующий куратор региональных отборочных этапов всероссийских и международных мероприятий по направлениям Робототехника, Информатика, Беспилотные авиационные системы.'
      },
      {
        name: 'Евгений Толченков',
        role: 'Основатель студии TOLK (с 2013). Экспертиза: продуктовая архитектура, UI/UX и дизайн-системы, стратегия и позиционирование.',
        bio: 'Москва. Основатель студии ТОЛК, работающей с 2013 года. Специализируется на дизайне и бизнес-архитектуре сложных цифровых продуктов. Руководит полным циклом проектов — от стратегии и позиционирования до UI/UX, визуальной системы и продуктовой архитектуры (Principal Designer, CDO).\n\nВ прошлом — бренд-менеджер движения КВН Нижегородской области (2015–2022), член Молодёжной палаты при городской думе Н. Новгорода (2015–2019) и вице-президент Ассоциации самозанятых России. Организатор и креативный руководитель городских форумов и фестивалей численностью до 50 000 человек.'
      }
    ],
    footer: '12+ лет опыта • 400+ проектов • От идеи — до работающей системы',
    image: '/src/assets/images/komanda.png',
    customStyles: {
      footer: { fontSize: '48px' }
    }
  },
  {
    id: 'slide-10',
    type: 'clients',
    title: 'Нам доверяли',
    points: [
      'ФНС', 'Правительство Москвы', 'Правительство НО', 'Яндекс', 'Сбер', 'Газпромбанк', 
      'VK', 'Мегафон', 'ПИК', 'Ростелеком', 'Asus', 'hh', 'Додо Пицца', 'Skillbox', 'Нетология'
    ],
    footer: 'Работаем с B2B, девелопментом, госсектором, производством, образованием, медиа и сервисами.'
  },
  {
    id: 'slide-11',
    type: 'cases',
    title: 'Примеры задач, которые мы уже закрывали',
    data: [
      {
        client: 'ФНС / Мой налог',
        task: 'Escrow-механизм безопасной сделки: система расчётов между покупателем и самозанятым.',
        image: '/src/assets/images/fns.jpg',
        fullContent: {
          title: '(ФНС) Безопасная сделка',
          subtitle: 'Escrow-механизм для самозанятых в приложении «Мой налог»',
          gallery: ['/src/assets/images/fns 1.png'],
          problem: [
            { text: 'Страх предоплаты у клиентов', icon: 'ShieldAlert' },
            { text: 'Риск неоплаты у исполнителей', icon: 'UserX' },
            { text: 'Отсутствие гарантий сделки', icon: 'FileWarning' },
            { text: 'Расчеты вне системы', icon: 'Globe' }
          ],
          solution: [
            { text: 'Оплата по ссылке', icon: 'Link' },
            { text: 'Резервирование средств (escrow)', icon: 'Lock' },
            { text: 'Подтверждение через email', icon: 'Mail' },
            { text: 'Подтверждение выполнения услуги', icon: 'CheckCircle2' },
            { text: 'Автоматическое завершение по таймауту', icon: 'Clock' },
            { text: 'Автоформирование чека', icon: 'FileText' }
          ],
          keyFeature: 'Escrow внутри государственной системы. Защита обеих сторон без договоров и посредников.',
          results: ['↑ Доверие к самозанятым', '↑ Конверсия в оплату', '↓ Риски мошенничества', '↑ Прозрачность операций']
        }
      },
      {
        client: 'Яндекс Support AI',
        task: 'Интеллектуальная поддержка: кастомный AI-виджет с глубокой настройкой интерфейса и логики.',
        image: '/src/assets/images/yandex.jpg',
        fullContent: {
          title: 'Yandex Support AI',
          subtitle: 'AI-система поддержки + полностью кастомизируемый виджет',
          gallery: ['/src/assets/images/yandex 1.png'],
          problem: [
            { text: 'Стандартные виджеты ломают UX', icon: 'Layout' },
            { text: 'Нельзя адаптировать под продукт', icon: 'UserCog' },
            { text: 'Поддержка выглядит «чужеродно»', icon: 'UserPlus' },
            { text: 'Нет гибкости под бизнес-логику', icon: 'ZapOff' }
          ],
          solution: [
            { text: 'Автоответы и обучение на базе знаний', icon: 'Bot' },
            { text: 'Подсказки операторам', icon: 'Lightbulb' },
            { text: 'Классификация и маршрутизация', icon: 'Shuffle' },
            { text: 'Полностью кастомизируемый виджет', icon: 'Settings' },
            { text: 'Встраивание в любой интерфейс', icon: 'Maximize' }
          ],
          keyFeature: 'Кастомизация до пикселя. Поддержка становится частью продукта, а не внешним модулем.',
          results: ['↑ Вовлеченность пользователей', '↑ Конверсия через поддержку', '↓ Отказов из-за плохого UX', '↓ Нагрузка на операторов']
        }
      },
      {
        client: 'Döcke (DSC)',
        task: 'B2B-платформа закупок: перевод процессов из звонков и ручных заказов в цифровую систему.',
        image: '/src/assets/images/dsc.jpg',
        fullContent: {
          title: 'DSC (Docke Supply Center)',
          subtitle: 'B2B-платформа закупок строительных материалов',
          gallery: ['/src/assets/images/dsc 1.png'],
          problem: [
            { text: 'Заказы через менеджеров', icon: 'Users' },
            { text: 'Ошибки в номенклатуре', icon: 'FileX' },
            { text: 'Нет прозрачности по оплатам', icon: 'EyeOff' },
            { text: 'Сложный контроль лимитов', icon: 'ShieldAlert' }
          ],
          solution: [
            { text: 'Каталог и самостоятельные заказы', icon: 'List' },
            { text: 'Управление заказами и статусами', icon: 'CheckSquare' },
            { text: 'Финансы (лимиты, долги, баланс)', icon: 'Wallet' },
            { text: 'Документы и ЭДО', icon: 'FileText' },
            { text: 'Поддержка через менеджера внутри системы', icon: 'Headset' }
          ],
          keyFeature: 'Клиент сам управляет закупками и деньгами без постоянного участия менеджера.',
          results: ['↓ Нагрузка на менеджеров', '↑ Скорость заказов', '↑ Прозрачность финансов', '↑ Масштабируемость продаж']
        }
      },
      {
        client: 'STOLKOM',
        task: 'AI Bot Platform: единая операционная система для продаж, поддержки и маркетинга.',
        image: '/src/assets/images/stolkom.jpg',
        fullContent: {
          title: 'STOLKOM (AI Bot Platform)',
          subtitle: 'Платформа автоматизации коммуникации с клиентами',
          gallery: ['/src/assets/images/stolkom 1.png'],
          problem: [
            { text: 'Разрозненные каналы общения', icon: 'MessageSquareOff' },
            { text: 'Ручная работа операторов', icon: 'HandMetal' },
            { text: 'Сложные сценарии = дорого и долго', icon: 'Clock' },
            { text: 'Куча сервисов вместо системы', icon: 'Layers' }
          ],
          solution: [
            { text: 'Конструктор ботов (сценарии, логика)', icon: 'Settings2' },
            { text: 'Рассылки (массовые, триггерные)', icon: 'Send' },
            { text: 'База знаний + AI (обучаемые ответы)', icon: 'Brain' },
            { text: 'Продажи и бронирование внутри бота', icon: 'ShoppingCart' },
            { text: 'Операторы (чат + переключение бот/человек)', icon: 'RefreshCw' }
          ],
          keyFeature: '1 система вместо 5–7 сервисов (боты + CRM-ответы + рассылки + продажи + booking).',
          results: ['↓ Нагрузка на операторов', '↑ Скорость ответа', '↑ Конверсия', '↑ Контроль коммуникации']
        }
      },
      {
        client: 'SIMB-AD',
        task: 'Ad Management: end-to-end платформа управления digital-рекламой и финансами.',
        image: '/src/assets/images/simb.jpg',
        fullContent: {
          title: 'SIMB-AD',
          subtitle: 'Платформа управления digital-рекламой',
          gallery: ['/src/assets/images/simbad 1.png'],
          problem: [
            { text: 'Медиапланы в Excel', icon: 'FileSpreadsheet' },
            { text: 'Согласования в чатах', icon: 'MessageCircle' },
            { text: 'Финансы в 1С', icon: 'Coins' },
            { text: 'Аналитика вручную', icon: 'BarChart' },
            { text: 'Хаос, ошибки и потери бюджета', icon: 'AlertTriangle' }
          ],
          solution: [
            { text: 'Медиапланирование внутри системы', icon: 'Calendar' },
            { text: 'Дашборды (план / факт / прогноз)', icon: 'LayoutDashboard' },
            { text: 'Управление кампаниями и статусами', icon: 'Settings' },
            { text: 'Биллинг, документы, аналитика', icon: 'FileText' },
            { text: 'Интеграции (DSP, 1С, API)', icon: 'Link' }
          ],
          keyFeature: 'Весь рекламный процесс в одном контуре (от планирования до денег).',
          results: ['↑ Прозрачность процессов', '↓ Ошибок и потерь бюджета', '↑ Контроль эффективности', '↑ Скорость запуска кампаний']
        }
      },
      {
        client: 'BusinessFOX',
        task: 'EdTech экосистема: объединение обучения, CRM, ERP и франшизы в одном контуре.',
        image: '/src/assets/images/fox.jpg',
        fullContent: {
          title: 'BusinessFOX',
          subtitle: 'EdTech-платформа: обучение + CRM + ERP + франшиза',
          gallery: ['/src/assets/images/fox 1.png'],
          problem: [
            { text: 'Нет сформированного продукта на старте', icon: 'PackageX' },
            { text: 'Нет IT-системы', icon: 'XCircle' },
            { text: 'Нет модели масштабирования', icon: 'Minimize2' },
            { text: 'Невозможно быстро запустить бизнес', icon: 'Clock' }
          ],
          solution: [
            { text: 'CRM + ERP (ученики, финансы, франчайзи)', icon: 'Users' },
            { text: 'Образовательная платформа', icon: 'BookOpen' },
            { text: 'Mobile-приложение', icon: 'Smartphone' },
            { text: 'Система монетизации', icon: 'DollarSign' },
            { text: 'Маркетинг и франшиза', icon: 'Megaphone' }
          ],
          keyFeature: 'Вся бизнес-модель внутри одной системы (от обучения до масштабирования через франшизу).',
          results: ['Запуск проекта с нуля', 'Готовая инфраструктура для роста', 'Масштабирование через франчайзи', 'Полный контроль процессов']
        }
      },
      {
        client: 'ProNetwork',
        task: 'Операционная система бизнеса внутри Telegram: коммуникация, реклама, лиды.',
        image: '/src/assets/images/pronet.png',
        fullContent: {
          title: 'ProNetwork',
          subtitle: 'Операционная система бизнеса внутри Telegram',
          gallery: ['/src/assets/images/pronet 1.png'],
          problem: [
            { text: 'Переписки теряются', icon: 'MessageCircleOff' },
            { text: 'Нет фиксации договоренностей', icon: 'FileX' },
            { text: 'Лиды и реклама не связаны', icon: 'Link2Off' },
            { text: 'Все ведется вручную', icon: 'HandMetal' }
          ],
          solution: [
            { text: 'Бот как рабочее пространство (встречи, задачи)', icon: 'Bot' },
            { text: 'Встроенная рекламная платформа', icon: 'BarChart' },
            { text: 'Управление лидами и аналитика', icon: 'Target' },
            { text: 'Роли и контроль процессов', icon: 'Shield' },
            { text: 'API и масштабирование через сеть ботов', icon: 'Network' }
          ],
          keyFeature: 'Telegram превращается в CRM + рекламную платформу. Вся работа с клиентом в одном интерфейсе.',
          results: ['↑ Контроль коммуникации', '↑ Конверсия лидов', '↑ Прозрачность процессов', '↑ Масштабируемость']
        }
      },
      {
        client: 'Catalon',
        task: 'Платформа управления логистикой: автоматизация цикла грузоперевозок через операторов.',
        image: '/src/assets/images/catalon.png',
        fullContent: {
          title: 'Catalon',
          subtitle: 'Платформа управления грузоперевозок с «управляемой сделкой»',
          gallery: ['/src/assets/images/catalon 2.png'],
          problem: [
            { text: 'Перегруз операторов', icon: 'UserMinus' },
            { text: 'Ручное распределение заявок', icon: 'HandMetal' },
            { text: 'Ошибки и задержки', icon: 'Clock' },
            { text: 'Нет прозрачности процессов', icon: 'EyeOff' }
          ],
          solution: [
            { text: 'Интерфейс под реальные сценарии работы', icon: 'Layout' },
            { text: 'Полный контроль перевозок (заявка → доставка)', icon: 'Truck' },
            { text: 'Поддержка принятия решений (подсказки)', icon: 'Brain' },
            { text: 'Финансовый слой (платежи, интеграции)', icon: 'Wallet' },
            { text: 'Масштабируемая архитектура', icon: 'Maximize' }
          ],
          keyFeature: 'Система усиливает человека, а не заменяет его. Оператор становится точкой эффективности.',
          results: ['↑ Скорость обработки заявок', '↓ Количество ошибок', '↑ Управляемость процессов', '↑ Качество сервиса']
        }
      },
      {
        client: 'Нижегородский водоканал',
        task: 'Городская цифровая платформа: передача показаний, управление услугами и ЛК.',
        image: '/src/assets/images/vod.png',
        fullContent: {
          title: 'Нижегородский водоканал',
          subtitle: 'Цифровая платформа для жителей и бизнеса',
          gallery: ['/src/assets/images/vod 1.png'],
          problem: [
            { text: 'Ручная передача показаний', icon: 'HandMetal' },
            { text: 'Перегруз колл-центров', icon: 'PhoneOff' },
            { text: 'Очереди и ошибки', icon: 'Users' },
            { text: 'Разрозненные процессы', icon: 'Shuffle' }
          ],
          solution: [
            { text: 'Передача показаний (ядро сервиса)', icon: 'Zap' },
            { text: 'ЛК для физлиц и бизнеса', icon: 'UserCheck' },
            { text: 'Заявки, договоры, обращения', icon: 'FileText' },
            { text: 'Начисления и оплата', icon: 'Coins' },
            { text: 'Интеграции с внешними системами', icon: 'Link' }
          ],
          keyFeature: 'Полная замена оффлайн-процессов на цифровые. Пользователь решает всё без посещения офиса.',
          results: ['↓ Нагрузка на колл-центр', '↓ Очереди и ошибки', '↑ Удобство для пользователей', '↑ Прозрачность процессов']
        }
      },
      {
        client: 'Leads.Work',
        task: 'Платформа работы с лидами: единый контур для захвата, распределения, обработки и аналитики обращений.',
        image: '/src/assets/images/leads.png',
        fullContent: {
          title: 'Leads.Work',
          subtitle: 'Система управления лидами и скоростью обработки заявок',
          gallery: ['/src/assets/images/leads 1.png'],
          problem: [
            { text: 'Лиды приходят из разных каналов и теряются', icon: 'Inbox' },
            { text: 'Нет прозрачности по статусам и ответственным', icon: 'EyeOff' },
            { text: 'Ручное распределение тормозит продажи', icon: 'TimerReset' },
            { text: 'Сложно понять реальную конверсию по этапам', icon: 'BarChart3' }
          ],
          solution: [
            { text: 'Единая воронка для всех входящих обращений', icon: 'Workflow' },
            { text: 'Маршрутизация лидов по правилам и ролям', icon: 'GitBranch' },
            { text: 'Рабочие кабинеты для sales-команды и руководителей', icon: 'Users' },
            { text: 'Дашборды по скорости реакции, источникам и конверсии', icon: 'LayoutDashboard' },
            { text: 'Интеграции с CRM, формами и рекламными каналами', icon: 'Link' }
          ],
          keyFeature: 'Лид не просто фиксируется, а сразу попадает в управляемый процесс: кто взял, что сделал и где теряется конверсия.',
          results: ['↑ Скорость обработки заявок', '↑ Контроль по воронке', '↓ Потери лидов', '↑ Конверсия в сделки']
        }
      },
      {
        client: 'Сетка данных',
        task: 'Внутренняя data-платформа: объединение разрозненных источников, ролей и отчётности в один понятный рабочий слой.',
        image: '/src/assets/images/setka.png',
        fullContent: {
          title: 'Сетка данных',
          subtitle: 'Единый слой данных для принятия решений и операционной работы',
          gallery: ['/src/assets/images/setka 1.png'],
          problem: [
            { text: 'Данные разбросаны по таблицам, кабинетам и сервисам', icon: 'DatabaseZap' },
            { text: 'Отчётность собирается вручную и устаревает', icon: 'FileSpreadsheet' },
            { text: 'У команд разные версии одной и той же метрики', icon: 'Split' },
            { text: 'Нет удобного слоя для ежедневной работы', icon: 'Blocks' }
          ],
          solution: [
            { text: 'Собрали единый data-слой и понятную структуру сущностей', icon: 'Network' },
            { text: 'Настроили роли, доступы и сценарии использования', icon: 'ShieldCheck' },
            { text: 'Вывели ключевые показатели и рабочие дашборды', icon: 'LineChart' },
            { text: 'Связали аналитику, процессы и пользовательские интерфейсы', icon: 'Waypoints' },
            { text: 'Подготовили основу для автоматизации и AI-надстроек', icon: 'Sparkles' }
          ],
          keyFeature: 'Данные перестают жить отдельно от бизнеса и становятся частью ежедневных решений, процессов и интерфейсов команды.',
          results: ['↑ Доверие к данным', '↑ Скорость управленческих решений', '↓ Ручная отчётность', '↑ Целостность процессов']
        }
      },
      {
        client: 'Мой район',
        task: 'Городской сервис для жителей: цифровые сценарии взаимодействия, обращения, локальные сервисы и личный кабинет.',
        image: '/src/assets/images/moy.png',
        fullContent: {
          title: 'Мой район',
          subtitle: 'Цифровой сервис для жителей, локальных услуг и обращений',
          gallery: ['/src/assets/images/moy 1.png'],
          problem: [
            { text: 'Жителям сложно быстро решать бытовые и районные вопросы', icon: 'MapPinned' },
            { text: 'Сервисы и обращения разбросаны по разным каналам', icon: 'MessageSquareOff' },
            { text: 'Нет единого личного кабинета и статусов заявок', icon: 'UserRoundX' },
            { text: 'Команда не видит полную картину по обращениям', icon: 'SearchX' }
          ],
          solution: [
            { text: 'Спроектировали единый вход в районные цифровые сервисы', icon: 'Compass' },
            { text: 'Собрали обращения, услуги и уведомления в одном интерфейсе', icon: 'BellRing' },
            { text: 'Добавили личный кабинет со статусами и историей действий', icon: 'NotebookTabs' },
            { text: 'Настроили административный слой для обработки запросов', icon: 'BriefcaseBusiness' },
            { text: 'Подготовили платформу к масштабированию на новые сценарии', icon: 'Expand' }
          ],
          keyFeature: 'Один районный интерфейс вместо набора разрозненных точек контакта: житель быстрее решает задачу, команда лучше управляет сервисом.',
          results: ['↑ Удобство для жителей', '↑ Прозрачность обращений', '↓ Нагрузка на поддержку', '↑ Готовность к росту сервиса']
        }
      }
    ]
  },
  {
    id: 'slide-activities',
    type: 'activities',
    title: 'Деятельность',
    subtitle: '8 направлений. 50+ инструментов.',
    data: [
      {
        title: 'Стратегия и Аналитика',
        icon: 'Search',
        points: [
          { text: 'Анализ рынка, аудитории и инсайтов.', icon: 'BarChart3' },
          { text: 'Исследование конкурентов и трендов.', icon: 'Eye' },
          { text: 'Формулирование продуктовой гипотезы.', icon: 'Lightbulb' },
          { text: 'Разработка позиционирования и смысла продукта.', icon: 'Compass' },
          { text: 'Создание бренд-архетипа и Tone of Voice.', icon: 'User' },
          { text: 'Определение ценностного предложения.', icon: 'Gem' },
          { text: 'Архитектура бренда и продуктовых направлений.', icon: 'Layers' },
          { text: 'Платформа бренда: миссия, обещание, личность.', icon: 'Flag' }
        ]
      },
      {
        title: 'Креатив и Идея',
        icon: 'Palette',
        points: [
          { text: 'Генерация идей и креативных концепций.', icon: 'Palette' },
          { text: 'Разработка визуальных и коммуникационных сюжетов.', icon: 'Image' },
          { text: 'Storytelling и сценарные структуры.', icon: 'BookOpen' },
          { text: 'Разработка слоганов и рекламных сообщений.', icon: 'Megaphone' },
          { text: 'Контент-дизайн (тексты, формулировки, CTA, микро-копирайтинг).', icon: 'Type' },
          { text: 'Концеппт-арт и нарративный визуал.', icon: 'Brush' }
        ]
      },
      {
        title: 'Дизайн и Визуальная система',
        icon: 'Layers',
        points: [
          { text: 'UI-дизайн интерфейсов.', icon: 'Layout' },
          { text: 'UX-архитектура и CJM.', icon: 'Route' },
          { text: 'Иллюстрации и визуальные системы.', icon: 'PenTool' },
          { text: 'Motion-графика и микроанимации.', icon: 'Play' },
          { text: '3D-визуализации и мокапы.', icon: 'Box' },
          { text: 'Дизайн-система и UI-кит.', icon: 'Library' }
        ]
      },
      {
        title: 'Продукт и Разработка',
        icon: 'Code',
        points: [
          { text: 'Информационная архитектура продукта.', icon: 'Network' },
          { text: 'Прототипирование.', icon: 'Maximize' },
          { text: 'Интерактивные макеты.', icon: 'MousePointer' },
          { text: 'Frontend-разработка.', icon: 'Monitor' },
          { text: 'Backend-разработка.', icon: 'Server' },
          { text: 'Оптимизация скорости и доступности.', icon: 'FastForward' },
          { text: 'Интеграция аналитики, CRM, webhooks.', icon: 'Link' },
          { text: 'Контент-менеджмент и SEO-структура.', icon: 'Settings' }
        ]
      },
      {
        title: 'Автоматизация',
        icon: 'Zap',
        points: [
          { text: 'Автоматизация бизнес-процессов', icon: 'Zap' },
          { text: 'Интеграция сторонних сервисов и API', icon: 'Shuffle' },
          { text: 'Разработка кастомных CRM и ERP модулей', icon: 'Database' },
          { text: 'Оптимизация внутренних потоков данных', icon: 'LineChart' }
        ]
      },
      {
        title: 'Искусственный интеллект',
        icon: 'Sparkles',
        points: [
          { text: 'Внедрение LLM в продукты', icon: 'Bot' },
          { text: 'RAG-системы для работы с данными', icon: 'Search' },
          { text: 'Автоматизация контента и ответов', icon: 'MessageSquareText' },
          { text: 'Аналитика и предсказательные модели', icon: 'Brain' }
        ]
      },
      {
        title: 'Тестирование и Запуск',
        icon: 'CheckCircle2',
        points: [
          { text: 'UX-контроль сценариев и навигации.', icon: 'Accessibility' },
          { text: 'QA-тестирование (функциональное, адаптивное, нагрузочное).', icon: 'Bug' },
          { text: 'Проверка Core Web Vitals и Lighthouse.', icon: 'Activity' },
          { text: 'Финальный деплой и публикация.', icon: 'Cloud' },
          { text: 'Поддержка и обновления после релиза.', icon: 'LifeBuoy' }
        ]
      },
      {
        title: 'Маркетинг и Рост',
        icon: 'TrendingUp',
        points: [
          { text: 'Настройка аналитики и конверсий.', icon: 'PieChart' },
          { text: 'A/B-тесты и продуктовые гипотезы.', icon: 'Split' },
          { text: 'Создание презентаций, кейсов, промо-материалов.', icon: 'FileImage' },
          { text: 'Пост-релизный анализ и выводы.', icon: 'History' },
          { text: 'Масштабирование концепции и новых направлений.', icon: 'Maximize2' },
          { text: 'Формирование бренд-комьюнити и партнёрских программ.', icon: 'Users' }
        ]
      }
    ],
    footer: 'Комплексный подход на всех этапах жизненного цикла продукта.'
  },
  {
    id: 'slide-12',
    type: 'products',
    title: 'Свои продукты и R&D',
    data: {
      catalon: {
        name: 'Catalon',
        info: 'Цифровая экосистема для рынка грузоперевозок с «управляемой сделкой», а не просто биржей. Полный контроль логистических цепочек и финансовых потоков.',
        image: '/src/assets/images/catalon.png',
        icon: 'Truck',
        fullContent: {
          title: 'Catalon',
          subtitle: 'Платформа управления грузоперевозками с «управляемой сделкой»',
          gallery: ['/src/assets/images/catalon 2.png'],
          problem: [
            { text: 'Перегруз операторов', icon: 'UserMinus' },
            { text: 'Ручное распределение заявок', icon: 'HandMetal' },
            { text: 'Ошибки и задержки', icon: 'Clock' },
            { text: 'Нет прозрачности процессов', icon: 'EyeOff' }
          ],
          solution: [
            { text: 'Интерфейс под реальные сценарии работы', icon: 'Layout' },
            { text: 'Полный контроль перевозок', icon: 'Truck' },
            { text: 'Поддержка принятия решений', icon: 'Brain' },
            { text: 'Финансовый слой и интеграции', icon: 'Wallet' }
          ],
          keyFeature: 'Система усиливает человека, а не заменяет его.',
          results: ['Быстрее обработка заявок', 'Меньше ошибок', 'Выше управляемость процессов', 'Лучше сервис']
        }
      },
      future: {
        name: 'Моё Будущее',
        info: 'ИИ-навигация склонностей школьников и кадровый прогноз для региона. Система профориентации нового поколения на базе алгоритмов машинного обучения.',
        image: '/src/assets/images/future.png',
        icon: 'GraduationCap',
        fullContent: {
          title: 'Моё Будущее',
          subtitle: 'AI-навигация склонностей школьников и кадровый прогноз',
          gallery: ['/src/assets/images/future 1.png'],
          problem: [
            { text: 'Сложно определить склонности и траекторию развития', icon: 'Compass' },
            { text: 'Нет целостной картины по кадровым дефицитам', icon: 'Users' },
            { text: 'Сложно связать образование и рынок труда', icon: 'Link' }
          ],
          solution: [
            { text: 'Профориентационная логика на базе AI', icon: 'Brain' },
            { text: 'Персональные сценарии и карта возможностей', icon: 'Target' },
            { text: 'Аналитика для региона и образовательных контуров', icon: 'BarChart3' }
          ],
          keyFeature: 'Продукт соединяет интересы человека с потребностями региона.',
          results: ['Точнее навигация', 'Полезнее для школ и семей', 'Больше прозрачности по кадрам']
        }
      },
      smm: {
        name: 'SMM-база',
        info: 'Платформа для ведения соцсетей, отчётности и автопроцессов. Автоматизация постинга, анализа вовлечённости и управления комьюнити в одном окне.',
        image: '/src/assets/images/smmbaza.png',
        icon: 'Share2',
        fullContent: {
          title: 'SMM-база',
          subtitle: 'Платформа для ведения соцсетей, отчётности и автопроцессов',
          gallery: ['/src/assets/images/smmbaza 1.png'],
          problem: [
            { text: 'Ручное ведение контента и публикаций', icon: 'HandMetal' },
            { text: 'Сложно собирать отчётность и аналитику', icon: 'FileSpreadsheet' },
            { text: 'Нет единого контура для команды', icon: 'Users' }
          ],
          solution: [
            { text: 'Единое окно для контента и планирования', icon: 'LayoutDashboard' },
            { text: 'Автоматизация постинга и процессов', icon: 'Zap' },
            { text: 'Аналитика вовлечённости и контроль каналов', icon: 'LineChart' }
          ],
          keyFeature: 'Соцсети переходят из ручного режима в управляемую систему.',
          results: ['Выше скорость команды', 'Лучше отчётность', 'Меньше ручного труда']
        }
      }
    },
    footer: 'Мы не только исполняем задачи клиентов — мы сами строим продукты и проверяем гипотезы на практике.',
    customStyles: {
      footer: { fontSize: '32px' }
    }
  },
  {
    id: 'slide-13',
    type: 'cta',
    title: 'Как начинаем',
    points: [
      'Вы присылаете задачу или проблему',
      'Мы быстро предлагаем 1–3 варианта решения',
      'Дальше запускаем спринт, пилот или систему'
    ],
    description: 'Нужен не просто подрядчик, а связка продукт + дизайн + разработка + AI — это к нам.',
    data: {
      contacts: [
        { label: 'Telegram', value: 'https://t.me/gevget' },
        { label: 'WhatsApp', value: 'https://wa.me/79527733669' },
        { label: 'Email', value: 'mailto:info@tolk-usite.ru' }
      ]
    },
    footer: 'Пришлите задачу — предложим варианты решения.',
    customStyles: {
      footer: { color: '#3b82f6', fontSize: '24px' }
    }
  }
];

const legacyCasesSlide = LEGACY_SLIDES.find((slide) => slide.id === 'slide-11');
const legacyProductsSlide = LEGACY_SLIDES.find((slide) => slide.id === 'slide-12');
const legacyTeamSlide = LEGACY_SLIDES.find((slide) => slide.id === 'slide-9');

if (!legacyCasesSlide || !legacyProductsSlide || !legacyTeamSlide) {
  throw new Error('Legacy slide data for cases/products/team was not found.');
}

const aiSystemsProduct = {
  name: 'AI Systems',
  info: 'Внутренние инструменты, AI-ассистенты и рабочие системы для поиска знаний, документов, поддержки команды и ускорения ежедневных процессов.',
  image: '/src/assets/images/ai.png',
  icon: 'Brain',
  fullContent: {
    title: 'AI Systems',
    subtitle: 'Внутренние AI-инструменты для поиска знаний, документов и поддержки команды',
    gallery: ['/src/assets/images/ai 1.png'],
    problem: [
      { text: 'Сотрудники тонут в документах и сообщениях', icon: 'FileQuestion' },
      { text: 'Знания компании разбросаны по разным системам', icon: 'Search' },
      { text: 'Типовые ответы и действия забирают время команды', icon: 'Clock' }
    ],
    solution: [
      { text: 'AI-поиск по базе знаний и внутренним документам', icon: 'Brain' },
      { text: 'Ассистенты для продаж, поддержки и внутренних команд', icon: 'Bot' },
      { text: 'Сценарии работы с документами, FAQ и аналитикой', icon: 'Sparkles' }
    ],
    keyFeature: 'AI встроен в рабочий процесс компании, а не существует как отдельная демонстрация ради галочки.',
    results: [
      'Быстрее ответы и поиск информации',
      'Меньше ручной рутины',
      'Выше скорость команды',
      'Проще масштабировать знания внутри бизнеса'
    ]
  }
};

export const SLIDES: SlideContent[] = [
  {
    id: 'slide-1',
    type: 'hero',
    title: 'Строим сайты, AI-инструменты и цифровые системы для бизнеса',
    description: 'От сайта за 5 дней до личного кабинета, платформы или AI-помощника компании.',
    data: {
      brand: 'TOLK × USITE',
      eyebrow: 'Strategy × Product × AI × Delivery',
      bullets: [
        'Сайты и цифровые продукты',
        'AI-ассистенты и внутренние системы',
        'Личные кабинеты и B2B-платформы',
        'MVP и запуск новых продуктов'
      ],
      image: '/src/assets/images/hero new.png',
      secondaryCta: { label: 'Посмотреть кейсы', targetId: 'slide-11' }
    }
  },
  {
    id: 'slide-start',
    type: 'grid',
    title: 'Что можно сделать с нами',
    data: [
      {
        title: 'Сайт за 5 дней',
        details: 'Авторский сайт, контент, SEO-ready, запуск.',
        icon: 'Globe'
      },
      {
        title: 'AI-ассистент компании',
        details: 'Поиск знаний, документы, продажи, поддержка команды.',
        icon: 'Bot'
      },
      {
        title: 'Личный кабинет',
        details: 'Для клиентов, партнёров, сотрудников или дилеров.',
        icon: 'LayoutDashboard'
      },
      {
        title: 'MVP продукта',
        details: 'Быстрая проверка идеи без долгой разработки.',
        icon: 'Rocket'
      },
      {
        title: 'AI-аудит бизнеса',
        details: 'Находим потери времени, денег и точки роста.',
        icon: 'Search'
      },
      {
        title: 'Платформа или B2B-сервис',
        details: 'Собираем цифровой контур для клиентов, дилеров и партнёров без лишней стройки.',
        icon: 'Layers'
      }
    ]
  },
  {
    id: 'slide-10',
    type: 'clients',
    title: 'Нам доверяют компании, где ошибка стоит дорого',
    description: 'Работаем там, где важны надёжность, ясная логика продукта и аккуратная реализация в сложном бизнес-контуре.',
    points: [
      'ФНС',
      'Правительство Москвы',
      'Правительство Нижегородской области',
      'Яндекс',
      'Сбер',
      'Газпромбанк',
      'VK',
      'Мегафон',
      'ПИК',
      'Ростелеком',
      'Asus',
      'hh.ru',
      'Додо Пицца',
      'Skillbox',
      'Нетология'
    ]
  },
  {
    id: 'slide-problems',
    type: 'list',
    title: 'Когда к нам обычно приходят',
    points: [
      { text: 'Сайт устарел и не продаёт', icon: 'AlertCircle', tooltip: 'Есть трафик, есть продукт, но сайт не объясняет ценность, не собирает спрос и не помогает продажам довести клиента до следующего шага.' },
      { text: 'Процессы живут в Excel', icon: 'FileSpreadsheet', tooltip: 'Ключевая работа держится на таблицах, ручных обновлениях и личной памяти команды. Масштабироваться в таком режиме уже больно.' },
      { text: 'Сотрудники тонут в информации', icon: 'Users', tooltip: 'Документы, чаты, ссылки и договорённости лежат в разных местах, поэтому команда тратит время не на работу, а на поиск контекста.' },
      { text: 'Есть идея продукта, но непонятно как запускать', icon: 'Lightbulb', tooltip: 'Нужен не абстрактный brainstorm, а понятный MVP-маршрут: что проверить первым, что сделать руками, а что сразу автоматизировать.' },
      { text: 'Нужен личный кабинет или сервис', icon: 'LayoutDashboard', tooltip: 'Появился реальный сценарий для клиента, партнёра или сотрудника, но текущие инструменты не держат процесс и не дают прозрачности.' },
      { text: 'Хочется сделать быстрее и дешевле, чем раньше', icon: 'Zap', tooltip: 'Нужно сократить путь от задачи бизнеса до рабочего решения и не тратить месяцы на тяжёлую разработку без проверки гипотез.' },
      { text: 'Слишком много ручной отчётности', icon: 'BarChart3', tooltip: 'Команда собирает цифры вручную, сводит данные из разных систем и поздно видит, где реально растут потери или точки роста.' },
      { text: 'Системы не связаны между собой', icon: 'Shuffle', tooltip: 'CRM, сайт, таблицы, документы и внутренние сервисы работают отдельно, поэтому бизнес постоянно теряет данные и время на склейку.' },
      { text: 'Запуск тормозится на согласованиях', icon: 'Clock', tooltip: 'Проект застрял между идеей, дизайном, разработкой и бизнес-решениями, потому что нет одного контура, который собирает всё в рабочий маршрут.' },
      { text: 'Поддержка и продажи отвечают слишком медленно', icon: 'MessageSquareText', tooltip: 'Люди ждут ответа, команда повторяет одно и то же вручную, а скорость сервиса уже влияет на выручку и доверие клиентов.' },
      { text: 'Внутри бизнеса слишком много хаоса', icon: 'Compass', tooltip: 'Нет понятной карты процессов, ролей и приоритетов: все заняты, но никто не может быстро показать, где узкое место и что чинить первым.' },
      { text: 'Нужен новый цифровой контур под рост', icon: 'Rocket', tooltip: 'Бизнес вырос из старого сайта или набора сервисов и теперь нужен новый контур: продукт, система, роли, интерфейсы и техническая логика.' }
    ]
  },
  {
    id: 'slide-conversion-start',
    type: 'conversion',
    title: 'Похоже на вашу ситуацию?',
    description: 'Можно быстро понять, что делать первым. Разберём задачу, покажем 1–3 рабочих сценария и скажем, что имеет смысл запускать сейчас.',
    points: [
      'что запускать первым',
      'что можно не делать сейчас',
      'где AI и система реально дадут эффект'
    ],
    footer: 'Без тяжёлой стройки и длинной фазы «подумать ещё». Сразу переводим разговор в рабочий маршрут.',
    data: {
      variant: 'diagnostic',
      eyebrow: 'Быстрый разбор',
      primaryCta: { label: 'Обсудить задачу', targetId: 'slide-13' }
    }
  },
  {
    id: 'slide-what',
    type: 'grid',
    title: 'Что мы делаем',
    data: [
      {
        title: 'Digital & Websites',
        details: 'Сайты, лендинги, корпоративные порталы.',
        icon: 'Globe'
      },
      {
        title: 'AI & Assistants',
        details: 'AI-помощники и системы знаний.',
        icon: 'Brain'
      },
      {
        title: 'B2B Systems',
        details: 'Личные кабинеты и платформы.',
        icon: 'LayoutDashboard'
      },
      {
        title: 'Product Design',
        details: 'UX, исследования, интерфейсы.',
        icon: 'Palette'
      },
      {
        title: 'MVP & Launch',
        details: 'Запуск новых цифровых продуктов.',
        icon: 'Rocket'
      }
    ]
  },
  {
    id: 'slide-8',
    type: 'list',
    title: 'AI внутри решений, а не ради галочки',
    subtitle: 'Используем AI там, где он реально ускоряет работу.',
    points: [
      { text: 'поиск по базе знаний', icon: 'Search', tooltip: 'AI быстро находит ответы по регламентам, инструкциям, базе знаний и внутренним документам, не заставляя сотрудника идти по цепочке из чатов и ссылок.' },
      { text: 'помощь продажам', icon: 'TrendingUp', tooltip: 'Помогаем менеджерам быстрее ориентироваться в продукте, собирать ответы, готовить материалы и не терять темп общения с клиентом.' },
      { text: 'работа с документами', icon: 'FileText', tooltip: 'AI помогает искать фрагменты, собирать сводки, вытаскивать смысл и ускорять работу с большими пакетами документов и файлов.' },
      { text: 'внутренние ассистенты', icon: 'Bot', tooltip: 'Это не демонстрационный чат, а рабочий слой в продукте или процессе: под задачи команды, роли и реальные сценарии бизнеса.' },
      { text: 'поддержка сотрудников', icon: 'Users', tooltip: 'Снижаем нагрузку на экспертов внутри компании: ответы, навигация, onboarding и типовые подсказки доступны быстрее и ближе к месту работы.' },
      { text: 'аналитика и поиск информации', icon: 'BarChart3', tooltip: 'AI помогает находить закономерности, быстро собирать выводы и поднимать важную информацию наверх, когда времени на ручной анализ уже нет.' }
    ],
    data: {
      image: '/ai-inside.png'
    }
  },
  {
    id: 'slide-why',
    type: 'manifest',
    title: 'Почему TOLK × USITE',
    points: [
      { text: 'Founder-led', icon: 'Flag', description: 'Основатели лично погружены в задачу и держат решение на уровне продукта, дизайна и реализации.' },
      { text: 'Быстро', icon: 'Zap', description: 'Собираем короткий путь от бизнес-задачи до рабочего цифрового инструмента без лишней тяжёлой стройки.' },
      { text: 'От идеи до запуска', icon: 'Rocket', description: 'Помогаем пройти путь от гипотезы и структуры до интерфейса, разработки, запуска и первых улучшений.' },
      { text: 'Сложные проекты', icon: 'Layers', description: 'Умеем работать с B2B, внутренними системами, кабинетами, интеграциями и длинными процессами принятия решений.' },
      { text: 'Гибко', icon: 'RefreshCw', description: 'Подстраиваем глубину работы под реальную стадию бизнеса: от sprint-сценария до полноценной продуктовой системы.' }
    ],
    data: {
      founders: legacyTeamSlide.data
        .map((member: any) => ({
          ...member,
          telegramLabel:
            member.name === 'Михаил Юматов'
              ? 'Михаил Юматов — Telegram @mixayumatov'
              : member.name === 'Евгений Толченков'
                ? 'Евгений Толченков — Telegram @gevget'
                : undefined,
          telegramUrl:
            member.name === 'Михаил Юматов'
              ? 'https://t.me/mixayumatov'
              : member.name === 'Евгений Толченков'
                ? 'https://t.me/gevget'
                : undefined,
        }))
        .sort((a: any, b: any) => {
          const order: Record<string, number> = {
            'Евгений Толченков': 0,
            'Михаил Юматов': 1,
          };
          return (order[a.name] ?? 99) - (order[b.name] ?? 99);
        }),
      image: legacyTeamSlide.image,
      footer: legacyTeamSlide.footer
    }
  },
  {
    id: 'slide-11',
    type: 'cases',
    title: 'Кейсы',
    data: legacyCasesSlide.data
  },
  {
    id: 'slide-conversion-proof',
    type: 'conversion',
    title: 'Есть похожая задача?',
    description: 'Если у вас похожий контур задачи — сайт, кабинет, AI-инструмент или внутренняя система — покажем подход, сроки и маршрут запуска.',
    points: [
      'оценим задачу по реальному объёму',
      'предложим формат: sprint, MVP или полноценную систему',
      'соберём понятный roadmap'
    ],
    footer: 'После первого разговора у вас должен появиться не абстрактный «созвон», а понятное направление: что делаем, в каком формате и с каким эффектом.',
    data: {
      variant: 'trust',
      eyebrow: 'После кейсов',
      primaryCta: { label: 'Обсудить проект', targetId: 'slide-13' }
    }
  },
  {
    id: 'slide-12',
    type: 'products',
    title: 'Что строим внутри',
    data: {
      ...legacyProductsSlide.data,
      smm: {
        ...legacyProductsSlide.data.smm,
        name: 'SMM Base'
      },
      aiSystems: aiSystemsProduct
    }
  },
  {
    id: 'slide-extras',
    type: 'list',
    title: 'Дополнительные возможности',
    data: [
      { name: 'AI-аудит бизнеса', info: 'Находим потери времени, денег и точки роста.', icon: 'Search', tooltip: 'Смотрим, где AI действительно может ускорить работу бизнеса, а где сначала нужно чинить сам процесс и только потом автоматизировать.' },
      { name: 'Упаковка продукта', info: 'Позиционирование, смыслы, структура и подача.', icon: 'PackageX', tooltip: 'Помогаем собрать продуктовую логику, подачу и структуру так, чтобы сайт, презентация и продажи говорили на одном языке.' },
      { name: 'Презентации', info: 'Для продаж, инвесторов и внутренних запусков.', icon: 'FileImage', tooltip: 'Собираем презентации под конкретную задачу: объяснить сложный продукт, продать идею, защитить запуск или выстроить доверие.' },
      { name: 'UX-аудит', info: 'Находим барьеры в сценариях и интерфейсах.', icon: 'Layout', tooltip: 'Разбираем интерфейс и путь пользователя, чтобы быстро найти места, где теряется внимание, понимание, деньги или конверсия.' },
      { name: 'Исследования', info: 'Пользователи, рынок, конкуренты, гипотезы.', icon: 'Compass', tooltip: 'Изучаем среду, сценарии и ожидания, чтобы строить решения не из догадок, а из понятной картины рынка и аудитории.' },
      { name: 'Digital-стратегия', info: 'Маршрут роста и приоритеты на ближайший цикл.', icon: 'Target', tooltip: 'Помогаем выбрать, что запускать сейчас, что отложить и где цифровой продукт или сайт реально даст бизнес-эффект в ближайший цикл.' },
      { name: 'Автоматизация процессов', info: 'Убираем ручной труд и лишние переключения.', icon: 'RefreshCw', tooltip: 'Связываем действия, статусы, документы и уведомления, чтобы команда меньше переключалась между инструментами и ручными задачами.' },
      { name: 'Контент-дизайн', info: 'Тексты, смыслы и логика интерфейсов.', icon: 'Type', tooltip: 'Помогаем выстроить язык продукта: от структуры экрана и CTA до текстов, которые объясняют сложное просто и уверенно.' },
      { name: 'Продуктовый roadmap', info: 'План запуска и развития без лишней стройки.', icon: 'Route', tooltip: 'Собираем реалистичный маршрут: что делаем первым, что идёт во вторую очередь и где нужно проверять гипотезы до тяжёлой разработки.' },
      { name: 'B2B-коммуникации', info: 'Материалы и интерфейсы для сложных продаж.', icon: 'Megaphone', tooltip: 'Упаковываем продукт и точки контакта так, чтобы сложное решение было проще объяснять клиентам, партнёрам и внутренней команде.' },
      { name: 'Сервис-дизайн', info: 'Сценарии вокруг продукта и команды.', icon: 'LifeBuoy', tooltip: 'Смотрим не только на экран, но и на процесс вокруг: кто отвечает, где происходит передача, как клиент получает результат и где всё ломается.' },
      { name: 'Аналитический слой', info: 'Метрики, отчёты и контроль узких мест.', icon: 'PieChart', tooltip: 'Собираем понятный слой метрик и наблюдения, чтобы команда видела не только красивый интерфейс, но и реальные сигналы эффективности.' }
    ]
  },
  {
    id: 'slide-13',
    type: 'cta',
    title: 'Есть задача?',
    description: 'Расскажите, что нужно сделать.',
    footer: 'Предложим варианты решения, сроки и roadmap.',
    data: {
      contacts: [
        { label: 'Telegram', value: 'https://t.me/gevget' },
        { label: 'WhatsApp', value: 'https://wa.me/79527733669' },
        { label: 'Email', value: 'mailto:info@tolk-usite.ru' }
      ]
    }
  }
];

const heroSlide = SLIDES.find((slide) => slide.id === 'slide-1');
if (heroSlide?.data) {
  heroSlide.data.bullets = [
    'От быстрого запуска до цифровой системы',
    'Один контур для стратегии, дизайна и разработки',
    'Упор на бизнес-эффект, а не на лишнюю сложность',
    'Работаем с запусками, продуктами и внутренними контурами',
  ];
}

const whatSlide = SLIDES.find((slide) => slide.id === 'slide-what');
if (whatSlide && Array.isArray(whatSlide.data) && whatSlide.data.length === 5) {
  whatSlide.data.push({
    title: 'Automation Layer',
    details: 'Интеграции, сценарии автоматизации и связка систем.',
    icon: 'RefreshCw',
  });
}

if (!SLIDES.some((slide) => slide.id === 'slide-7')) {
  const insertIndex = SLIDES.findIndex((slide) => slide.id === 'slide-8');
  SLIDES.splice(insertIndex === -1 ? 0 : insertIndex, 0, {
    id: 'slide-7',
    type: 'list',
    title: 'Наш главный скилл — кабинеты и системы',
    subtitle: 'Личные кабинеты, B2B-платформы, дилерские и партнёрские системы — одна из наших самых сильных и прикладных компетенций.',
    points: [
      { text: 'Заявки и статусы', icon: 'CheckCircle2' },
      { text: 'Документы и прайсы', icon: 'FileText' },
      { text: 'Каталоги и остатки', icon: 'Layers' },
      { text: 'Роли и права', icon: 'ShieldCheck' },
      { text: 'Аналитика и маршруты', icon: 'LineChart' },
      { text: 'AI-поиск и помощь сотрудникам', icon: 'Sparkles' },
    ],
    data: {
      image: '/skill.png',
    },
  });
}
