export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  points?: (string | { text: string; icon: string })[];
  footer?: string;
  image?: string;
  type: 'hero' | 'dual' | 'list' | 'grid' | 'team' | 'clients' | 'cases' | 'cta' | 'manifest' | 'activities' | 'products';
  data?: any;
  customStyles?: {
    title?: any;
    subtitle?: any;
    footer?: any;
    description?: any;
  };
}

export const SLIDES: SlideContent[] = [
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
    image: '/src/assets/images/team_founders_vibe_1781610078621.jpg',
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
        image: '/src/assets/images/case_payment_vibe_1781608019099.jpg',
        fullContent: {
          title: '(ФНС) Безопасная сделка',
          subtitle: 'Escrow-механизм для самозанятых в приложении «Мой налог»',
          gallery: [
            '/src/assets/images/case_payment_vibe_1781608019099.jpg',
            '/src/assets/images/case_city_infrastructure_1781608005789.jpg',
            '/src/assets/images/audit_roadmap_abstract_1781607496541.jpg'
          ],
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
        image: '/src/assets/images/audit_roadmap_abstract_1781607496541.jpg',
        fullContent: {
          title: 'Yandex Support AI',
          subtitle: 'AI-система поддержки + полностью кастомизируемый виджет',
          gallery: [
            '/src/assets/images/audit_roadmap_abstract_1781607496541.jpg',
            '/src/assets/images/ai_intelligence_abstract_1781610109003.jpg',
            '/src/assets/images/case_messenger_ui_1781607960558.jpg'
          ],
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
        image: '/src/assets/images/case_city_infrastructure_1781608005789.jpg',
        fullContent: {
          title: 'DSC (Docke Supply Center)',
          subtitle: 'B2B-платформа закупок строительных материалов',
          gallery: [
            '/src/assets/images/case_city_infrastructure_1781608005789.jpg',
            '/src/assets/images/case_logistics_viz_1781607975934.jpg',
            '/src/assets/images/systems_architecture_art_1781610094808.jpg'
          ],
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
        image: '/src/assets/images/case_messenger_ui_1781607960558.jpg',
        fullContent: {
          title: 'STOLKOM (AI Bot Platform)',
          subtitle: 'Платформа автоматизации коммуникации с клиентами',
          gallery: [
            '/src/assets/images/case_messenger_ui_1781607960558.jpg',
            '/src/assets/images/ai_intelligence_abstract_1781610109003.jpg',
            '/src/assets/images/audit_roadmap_abstract_1781607496541.jpg'
          ],
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
        image: '/src/assets/images/case_logistics_viz_1781607975934.jpg',
        fullContent: {
          title: 'SIMB-AD',
          subtitle: 'Платформа управления digital-рекламой',
          gallery: [
            '/src/assets/images/case_logistics_viz_1781607975934.jpg',
            '/src/assets/images/case_payment_vibe_1781608019099.jpg',
            '/src/assets/images/case_messenger_ui_1781607960558.jpg'
          ],
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
        image: '/src/assets/images/case_social_platform_1781607990589.jpg',
        fullContent: {
          title: 'BusinessFOX',
          subtitle: 'EdTech-платформа: обучение + CRM + ERP + франшиза',
          gallery: [
            '/src/assets/images/case_social_platform_1781607990589.jpg',
            '/src/assets/images/case_messenger_ui_1781607960558.jpg',
            '/src/assets/images/audit_roadmap_abstract_1781607496541.jpg'
          ],
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
        image: '/src/assets/images/case_messenger_ui_1781607960558.jpg',
        fullContent: {
          title: 'ProNetwork',
          subtitle: 'Операционная система бизнеса внутри Telegram',
          gallery: [
            '/src/assets/images/case_messenger_ui_1781607960558.jpg',
            '/src/assets/images/case_logistics_viz_1781607975934.jpg',
            '/src/assets/images/ai_intelligence_abstract_1781610109003.jpg'
          ],
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
        image: '/src/assets/images/product_logistics_platform_1781611535239.jpg',
        fullContent: {
          title: 'Catalon',
          subtitle: 'Платформа управления грузоперевозок с «управляемой сделкой»',
          gallery: [
            '/src/assets/images/product_logistics_platform_1781611535239.jpg',
            '/src/assets/images/case_logistics_viz_1781607975934.jpg',
            '/src/assets/images/case_payment_vibe_1781608019099.jpg'
          ],
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
        image: '/src/assets/images/case_city_infrastructure_1781608005789.jpg',
        fullContent: {
          title: 'Нижегородский водоканал',
          subtitle: 'Цифровая платформа для жителей и бизнеса',
          gallery: [
            '/src/assets/images/case_city_infrastructure_1781608005789.jpg',
            '/src/assets/images/case_payment_vibe_1781608019099.jpg',
            '/src/assets/images/case_logistics_viz_1781607975934.jpg'
          ],
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
        image: '/src/assets/images/product_logistics_platform_1781611535239.jpg',
        icon: 'Truck'
      },
      future: {
        name: 'Моё Будущее',
        info: 'ИИ-навигация склонностей школьников и кадровый прогноз для региона. Система профориентации нового поколения на базе алгоритмов машинного обучения.',
        image: '/src/assets/images/product_education_ai_1781611553224.jpg',
        icon: 'GraduationCap'
      },
      smm: {
        name: 'SMM-база',
        info: 'Платформа для ведения соцсетей, отчётности и автопроцессов. Автоматизация постинга, анализа вовлечённости и управления комьюнити в одном окне.',
        image: '/src/assets/images/product_smm_platform_1781611567495.jpg',
        icon: 'Share2'
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
        { label: 'Telegram @gevget', value: 'https://t.me/gevget' },
        { label: 'Telegram @mixayumatov', value: 'https://t.me/mixayumatov' },
        { label: 'info@tolk-usite.ru', value: 'mailto:info@tolk-usite.ru' }
      ]
    },
    footer: 'Пришлите задачу — предложим варианты решения.',
    customStyles: {
      footer: { color: '#3b82f6', fontSize: '24px' }
    }
  }
];
