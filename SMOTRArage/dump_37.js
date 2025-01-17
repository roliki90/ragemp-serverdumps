{
var allStuff = {
	"fish":{
		"deadfish":{"name":"Мёртвая рыба","desc":"Тухлая рыба в твоём инвентаре","cost":9400,"donate":0},
		"plotva":{"name":"Плотва","desc":"Рыба принадлежащая к семейству карповых","cost":9400,"donate":0},
		"krasnoperka":{"name":"Краснопёрка","desc":"Рыба принадлежащая к семейству карповых","cost":7950,"donate":0},
		"ukleyka":{"name":"Уклейка","desc":"Рыба принадлежащая к семейству карповых","cost":7900,"donate":0},
		"peskar":{"name":"Пескарь","desc":"Эта рыба распространена широко и повсеместно","cost":7950,"donate":0},
		"karas":{"name":"Карась","desc":"Род рыб семейства карповых. Спинной плавник длинный.","cost":7950,"donate":0},
		"lesh":{"name":"Лещ","desc":"Отличается сжатым с боков высоким телом","cost":7960,"donate":0},
		"zherekh":{"name":"Жерех","desc":"Самый распространенный вид рыб семейства карповых","cost":8450,"donate":0},
		"gustera":{"name":"Густера","desc":"Рыба семейства карповых, единств. представ. рода Blicca","cost":12000,"donate":0},
		"golavl":{"name":"Голавль","desc":"Рыба из семейства карповых","cost":12000,"donate":0},
		"sazan":{"name":"Сазан","desc":"Рыба семейства карповых отряда карпообразных","cost":11870,"donate":0},
		"forel":{"name":"Форель","desc":"Красная рыба семейства-вида лососёвых","cost":11900,"donate":0},
		"losos":{"name":"Лосось","desc":"Красная рыба семейства-вида лососёвых","cost":12300,"donate":0},
		"tunec":{"name":"Тунец","desc":"Рыба вида лучепёрых, семейство скумбриевых","cost":15760,"donate":0},
		"scat":{"name":"Скат","desc":"Рыба пластиножаберных хрящевых рыб","cost":19100,"donate":0},
		"beluga":{"name":"Белуга","desc":"Рыба семейства осетровых, красная книга","cost":19100,"donate":0},
		"littleshark":{"name":"Мал. акула","desc":"Рыба вида акул из семейства далатиевых","cost":19500,"donate":0}
	},
	"instrument":{
		"aqualang":{"name":"Акваланг","desc":"Профессиональный набор аквалангиста","cost":100000,"donate":0},
		"rod":{"name":"Удочка","desc":"Простая удочка для классической рыбалки, макс. заброс 15 м.","cost":25000,"donate":0},
		"badrod":{"name":"Палка с крючком","desc":"Любительская удочка для рыбалки, макс. заброс 5 м.","cost":50000,"donate":0},
		"spinning":{"name":"Спиннинг","desc":"Профессиональная удочка для классической рыбалки, макс. заброс 25 м.","cost":75000,"donate":0},
		"zhezl":{"name":"Жезл ДПС","desc":"Специальный инструмент сотрудника ДПС Полиции","cost":2500,"donate":0},
		"hunterknife":{"name":"Охотничий нож","desc":"Специальный инструмент для освежевания тушек животных","cost":55000,"donate":0},
		"parachute":{"name":"Парашют","desc":"Специальный инструмент для прыжков с большой высоты","cost":90000,"donate":0},
		"lockpicks":{"name":"Отмычки","desc":"Специальный инструмент для вскрытия замков","cost":50000,"donate":0}
	},
	"mask":{
		"mask1":{"name":"Маска Miland #1","desc":"Белая карнавальная маска с белой окантовкой: Бренд Miland","cost":4500,"donate":0},
		"mask2":{"name":"Маска Miland #2","desc":"Красная карнавальная маска с черной окантовкой: Бренд Miland","cost":4500,"donate":0},
		"mask3":{"name":"Маска Miland #3","desc":"Черная карнавальная маска с черной окантовкой: Бренд Miland","cost":4500,"donate":0},
		"mask4":{"name":"Бандана #1","desc":"Черная бандана","cost":4500,"donate":0},
		"mask5":{"name":"Бандана #2","desc":"Черная бандана с белым черепом","cost":4500,"donate":0},
		"mask6":{"name":"Бандана #3","desc":"Серая бандана с узором","cost":4500,"donate":0},
		"mask7":{"name":"Бандана #4","desc":"Белая бандана с бежевым узором","cost":4500,"donate":0},
		"mask8":{"name":"Бандана #5","desc":"Темно зеленая банда с узором","cost":4500,"donate":0},
		"mask9":{"name":"Бандана #6","desc":"Зеленая бандана с черным узором","cost":4500,"donate":0},
		"mask10":{"name":"Бандана #7","desc":"Фиолетовая бандана с черным-белым узором","cost":4500,"donate":0},
		"mask11":{"name":"Бандана #8","desc":"Черная бандана с белом узором","cost":4500,"donate":0},
		"mask12":{"name":"Бандана #9","desc":"Желтая бандана с черным узором","cost":4500,"donate":0},
		"mask13":{"name":"Бандана #10","desc":"Черная бандана с синим черепом","cost":4500,"donate":0},
		"mask14":{"name":"Балаклава","desc":"Классическая чёрная балаклава","cost":11000,"donate":0},
		"mask15":{"name":"Балаклава #1","desc":"Черная балаклава","cost":13000,"donate":0},
		"mask16":{"name":"Балаклава #2","desc":"Белая балаклава","cost":13000,"donate":0},
		"mask17":{"name":"Балаклава #3","desc":"Кремовая балаклава","cost":13000,"donate":0},
		"mask18":{"name":"Балаклава #4","desc":"Тёмно-оранжевая балаклава с узором","cost":13000,"donate":0},
		"mask19":{"name":"Балаклава #5","desc":"Серая балаклава с узором","cost":13000,"donate":0},
		"mask20":{"name":"Балаклава #6","desc":"Хаки балаклава","cost":13000,"donate":0},
		"mask21":{"name":"Балаклава #7","desc":"Красно-белая балаклава","cost":13000,"donate":0},
		"mask22":{"name":"Балаклава #8","desc":"Тёмно-красная балаклава с текстом","cost":13000,"donate":0},
		"mask23":{"name":"Балаклава #9","desc":"Светло-серая балаклава с текстом","cost":13000,"donate":0},
		"mask24":{"name":"Балаклава #10","desc":"Розовая балаклава хаки","cost":13000,"donate":0},
		"mask25":{"name":"Балаклава #11","desc":"Police Department балаклава","cost":13000,"donate":0},
		"mask26":{"name":"Обезъяна","desc":"Маска обезъяна с сигарой","cost":25000,"donate":0},
		"mask27":{"name":"Дьявол","desc":"Маска болотного дьявола","cost":35000,"donate":0},
		"mask28":{"name":"Дьявол","desc":"Маска красного дьявола","cost":35000,"donate":0},
		"mask29":{"name":"Дьявол","desc":"Маска тёмного дьявола","cost":35000,"donate":0},
		"mask30":{"name":"Олень","desc":"Маска весёлого оленя","cost":40000,"donate":0},
		"mask31":{"name":"Малыш","desc":"Маска кудрявого малыша","cost":35000,"donate":0},
		"mask32":{"name":"Кот","desc":"Маска серого кота","cost":40000,"donate":0},
		"mask33":{"name":"Кот","desc":"Маска коричневого кота","cost":40000,"donate":0},
		"mask34":{"name":"Лиса","desc":"Маска молодой лисы","cost":45000,"donate":0},
		"mask35":{"name":"Лиса","desc":"Маска пожилой лисы","cost":45000,"donate":0},
		"mask36":{"name":"Сова","desc":"Маска молодой совы","cost":40000,"donate":0},
		"mask37":{"name":"Сова","desc":"Маска пожилой совы","cost":40000,"donate":0},
		"mask38":{"name":"Енот","desc":"Маска молодого енота","cost":50000,"donate":0},
		"mask39":{"name":"Енот","desc":"Маска пожилого енота","cost":50000,"donate":0},
		"mask40":{"name":"Респиратор","desc":"Хорошо защищает от COVID-19","cost":25000,"donate":0},
		"mask41":{"name":"Противогаз","desc":"Отлично защищает от COVID-19","cost":35000,"donate":0},
		"mask42":{"name":"Маска санты #1","desc":"Белокожий дед мороз","cost":35000,"donate":0},
		"mask43":{"name":"Маска санты #2","desc":"Чернокожий дед мороз","cost":36000,"donate":0},
		"mask44":{"name":"Маска санты #3","desc":"Белокожий дед мороз с красным носом","cost":35500,"donate":0},
		"mask45":{"name":"Маска снеговик","desc":"Маска злого снеговика","cost":30000,"donate":0},
		"mask46":{"name":"Маска пингвин","desc":"Маска милого новогоднего пингвинчика","cost":30000,"donate":0},
		"mask47":{"name":"Маска орка","desc":"Маска новогоднего орка","cost":40000,"donate":0},
		"mask48":{"name":"Пожарный респиратор","desc":"Часть специального обмундирования пожарника","cost":10000,"donate":0}
	},
	"bag":{
		"bag1":{"name":"Рюкзак LV серый","desc":"Эксклюзивный рюкзак от Louis Vuitton, серая вариация","cost":950000,"donate":0},
		"bag2":{"name":"Рюкзак LV синий","desc":"Эксклюзивный рюкзак от Louis Vuitton, синяя вариация","cost":950000,"donate":0},
		"bag3":{"name":"Рюкзак Adidas #1","desc":"Рюкзак от Adidas, цвета циан","cost":950000,"donate":0},
		"bag4":{"name":"Рюкзак LV розовый","desc":"Эксклюзивный рюкзак от Louis Vuitton в клетку, комбо розовый и фиолетовый","cost":950000,"donate":0},
		"bag5":{"name":"Рюкзак Gucci","desc":"Эксклюзивный рюкзак от Gucci  в фирменном цвете","cost":950000,"donate":0},
		"bag6":{"name":"Рюкзак LV Supreme Blue","desc":"Эксклюзивный рюкзак от Louis Vuitton Supreme синие оттенки","cost":950000,"donate":0},
		"bag7":{"name":"Рюкзак LV Supreme Red","desc":"Эксклюзивный рюкзак от Louis Vuitton Supreme красные оттенки","cost":950000,"donate":0},
		"bag8":{"name":"Рюкзак LV Supreme Orange","desc":"Эксклюзивный рюкзак от Louis Vuitton Supreme оранжевые оттенки","cost":950000,"donate":0},
		"bag9":{"name":"Поясная сумка TNF #1","desc":"Поясная сумка The North Face Supreme, комбо: чёрный, белый, красный","cost":950000,"donate":0},
		"bag10":{"name":"Поясная сумка TNF #2","desc":"Поясная сумка The North Face Supreme, комбо: жёлтый, фиолетовый, чёрный","cost":950000,"donate":0},
		"bag11":{"name":"Поясная сумка TNF #3","desc":"Поясная сумка The North Face Supreme, комбо: жёлтый, белый, чёрный","cost":950000,"donate":0},
		"bag12":{"name":"Поясная сумка LV #1","desc":"Эксклюзивная поясная сумка Louis Vuitton в фирменном цвете","cost":950000,"donate":0},
		"bag13":{"name":"Поясная сумка LV #2","desc":"Эксклюзивная поясная сумка Louis Vuitton в чёрном цвете","cost":950000,"donate":0},
		"bag14":{"name":"Сумка с рем. Gucci #1","desc":"Эксклюзивная поясная сумка с ремешком, Gucci в фирменном цвете","cost":950000,"donate":0},
		"bag15":{"name":"Сумка с рем. LV #1","desc":"Эксклюзивная поясная сумка с ремешком, LV в фирменном цвете","cost":950000,"donate":0},
		"bag16":{"name":"Рюкзак Adidas #1","desc":"Рюкзак Adidas, комбо: голубой, тёмносерый","cost":950000,"donate":0},
		"bag17":{"name":"Рюкзак Adidas #2","desc":"Рюкзак Adidas, комбо: персиковый, чёрный","cost":950000,"donate":0},
		"bag18":{"name":"Рюкзак Nike #1","desc":"Рюкзак Nike, комбо: тёмносерый, чёрный","cost":950000,"donate":0},
		"bag19":{"name":"Рюкзак Nike #2","desc":"Рюкзак Nike, комбо: рвота хомяка, белый","cost":950000,"donate":0},
		"bag20":{"name":"Поясная сумка CC #1","desc":"Поясная сумка оттенки серого, Calvin Clein","cost":950000,"donate":0},
		"bag21":{"name":"Поясная сумка CC #2","desc":"Поясная сумка оттенки коричневого, Calvin Clein","cost":950000,"donate":0},
		"bag22":{"name":"Поясная сумка CC #3","desc":"Поясная сумка оттенки изумрудного, Calvin Clein","cost":950000,"donate":0},
		"bag23":{"name":"Походный рюкзак #1","desc":"Походный рюкзак чёрного цвета","cost":950000,"donate":0},
		"bag24":{"name":"Походный рюкзак #2","desc":"Походный рюкзак цвета хаки","cost":950000,"donate":0},
		"bag25":{"name":"Походный рюкзак #3","desc":"Походный рюкзак армейский камуфляж","cost":950000,"donate":0},
		"bag26":{"name":"Поясная сумка CD #1","desc":"Поясная сумка Cristian Dior чёрная","cost":950000,"donate":0},
		"bag27":{"name":"Поясная сумка CD #2","desc":"Поясная сумка Cristian Dior кремовая","cost":950000,"donate":0},
		"bag28":{"name":"Поясная сумка Gucci #1","desc":"Поясная сумка Gucci в фирменных цветовых исполнениях","cost":950000,"donate":0},
		"bag29":{"name":"Поясная сумка LV #3","desc":"Поясная сумка Louis Vuitton в фирменных цветовых исполнениях","cost":950000,"donate":0},
		"bag30":{"name":"Поясная сумка LV #4","desc":"Поясная сумка Louis Vuitton синих оттенков","cost":950000,"donate":0},
		"bag31":{"name":"Рюкзак Adidas #3","desc":"Рюкзак Adidas, комбо: голубой, белый","cost":950000,"donate":0},
		"bag32":{"name":"Рюкзак Nike #3","desc":"Рюкзак Nike, комбо: чёрный, белый (текстура)","cost":950000,"donate":0},
		"bag33":{"name":"Рюкзак Adidas #4","desc":"Рюкзак Adidas, комбо: белый, голубой (текстура)","cost":950000,"donate":0},
		"bag34":{"name":"Рюкзак ABA","desc":"Рюкзак A Bathnig APE Хаки с текстурой","cost":950000,"donate":0},
		"bag35":{"name":"Рюкзак Nike #4","desc":"Рюкзак Nike RED & Black","cost":950000,"donate":0},
		"bag36":{"name":"Рюкзак Nike #5","desc":"Рюкзак Nike BLUE & Black","cost":950000,"donate":0},
		"bag37":{"name":"Рюкзак Nike #6","desc":"Рюкзак Nike YELLOW & Black","cost":950000,"donate":0},
		"bag38":{"name":"Рюкзак Adidas #5","desc":"Рюкзак Adidas Celebrate Originals голубой","cost":950000,"donate":0},
		"bag39":{"name":"Рюкзак Adidas #6","desc":"Рюкзак Adidas Celebrate Originals голубой","cost":950000,"donate":0},
		"bag40":{"name":"Поясная сумка LV #5","desc":"Поясная сумка Louis Vuitton Black & Gray","cost":950000,"donate":0},
		"bag41":{"name":"Поясная сумка LV #6","desc":"Поясная сумка Louis Vuitton Brown & Creme","cost":950000,"donate":0},
		"bag42":{"name":"Поясная сумка LV #7","desc":"Поясная сумка Louis Vuitton Blue & Black","cost":950000,"donate":0},
		"bag43":{"name":"Поясная сумка Nike #1","desc":"Поясная сумка Nike Purple","cost":950000,"donate":0},
		"bag44":{"name":"Поясная сумка CHAMP #1","desc":"Поясная сумка Champion Creme","cost":950000,"donate":0},
		"bag45":{"name":"Поясная сумка CHAMP #2","desc":"Поясная сумка Champion Blue","cost":950000,"donate":0},
		"bag46":{"name":"Поясная сумка Prada #1","desc":"Поясная сумка Prada Black","cost":950000,"donate":0},
		"bag47":{"name":"Рюкзак Adidas #7","desc":"Рюкзак Adidas Creme","cost":950000,"donate":0},
		"bag48":{"name":"Рюкзак CC #1","desc":"Рюкзак Calvin Clein Blue & Black","cost":950000,"donate":0}
	},
	"male":{
		"head":{
			"head1":{"name":"Шапка Atributika&Club #1","desc":"Обычная шапка, что ещё добавить..","cost":4500,"donate":0},
			"head2":{"name":"Шапка деда-мороза #1","desc":"Шапка деда-мороза (обычная)","cost":6500,"donate":0},
			"head3":{"name":"Шапка деда-мороза #2","desc":"Шапка деда-мороза (зелёная)","cost":6000,"donate":0},
			"head4":{"name":"Шапка эльфа","desc":"Шапка эльфа (обычная)","cost":10500,"donate":0},
			"head5":{"name":"Шапка ёлка #1","desc":"Шапка елка (обычная)","cost":8500,"donate":0},
			"head6":{"name":"Шапка ёлка #2","desc":"Шапка елка (феолетового цвета со снежинками)","cost":8500,"donate":0},
			"head7":{"name":"Шапка ёлка #3","desc":"Шапка елка (белого цвета с красно звездой)","cost":8500,"donate":0},
			"head8":{"name":"Шапка ёлка #4","desc":"Шапка елка (белого цвета, полосатая)","cost":8500,"donate":0},
			"head9":{"name":"Шапка ёлка #5","desc":"Шапка елка (зелного цвета, полосатая)","cost":8500,"donate":0},
			"head10":{"name":"Шапка ёлка #6","desc":"Шапка елка (феолетового цвета, со звездами)","cost":8500,"donate":0},
			"head11":{"name":"Шапка ёлка #7","desc":"Шапка елка (красного цвета, с белой звездой)","cost":8500,"donate":0},
			"head12":{"name":"Шапка ёлка #8","desc":"Шапка елка (зеленого цвета, с красной звездой)","cost":8500,"donate":0},
			"head13":{"name":"Шапка с пунпоном #1","desc":"Шапка ёлка в снегу, с пумпоном","cost":9500,"donate":0},
			"head14":{"name":"Шапка с дл. пунп. #1","desc":"Шапка с длинным пунпоном (полосатая)","cost":11000,"donate":0},
			"head15":{"name":"Шапка с дл. пунп. #2","desc":"Шапка с длинным пунпоном (зеленого цвета, полосатая)","cost":11000,"donate":0},
			"head16":{"name":"Шапка с дл. пунп. #3","desc":"Шапка с длинным пунпоном (темно зеленого цвета, полосатая)","cost":11000,"donate":0},
			"head17":{"name":"Шапка с дл. пунп. #4","desc":"Шапка с длинным пунпоном (феолетового цвета, полосатая)","cost":11000,"donate":0},
			"head18":{"name":"Шапка ёлка прем. #1","desc":"Шапка елка светящаяся (обычная)","cost":17000,"donate":0},
			"head19":{"name":"Шапка ёлка прем. #2","desc":"Шапка елка светящаяся (феолетового цвета со снежинками)","cost":17000,"donate":0},
			"head20":{"name":"Шапка ёлка прем. #3","desc":"Шапка елка светящаяся (белого цвета с красно звездой)","cost":17000,"donate":0},
			"head21":{"name":"Шапка ёлка прем. #4","desc":"Шапка елка светящаяся (феолетового, со звездами)","cost":17000,"donate":0},
			"head22":{"name":"Шапка с дл. пунп. прем.","desc":"Шапка ёлка в снегу, с пумпоном светящаяся","cost":22000,"donate":0},
			"head23":{"name":"Шапка NewYear рога","desc":"Рога (премиум) светится в темноте","cost":15000,"donate":0},
			"head24":{"name":"Шапка эльфа прем.","desc":"Шапка эльфа (премиум) светится в темноте","cost":21000,"donate":0},
			"head25":{"name":"Кепка Gucci #1","desc":"Премиальная кепка от Gucci","cost":0,"donate":450},
			"head26":{"name":"Кепка Lacoste","desc":"Небесная кепка от Lacoste","cost":0,"donate":240},
			"head27":{"name":"Кепка Теннисиста","desc":"Светлая кепка для фанатов тенниса","cost":78000,"donate":0},
			"head28":{"name":"Кепка Palm Angels","desc":"Огненная кепка V от Palm Angels","cost":0,"donate":170},
			"head29":{"name":"Кепка 93-02 Undefeated","desc":"Камуфляжная кепка от 93-02 Undefeated","cost":0,"donate":210},
			"head30":{"name":"Кепка Off-White","desc":"Чёрная кепка с жёлтой надписью Off-White","cost":0,"donate":360},
			"head31":{"name":"Шляпа The North Face","desc":"Камуфляжная шляпа от The North Face","cost":0,"donate":420},
			"head32":{"name":"Шляпа Gucci фирменная","desc":"Эксклюзивная шляпа от Gucci в фирменном цвете","cost":0,"donate":570},
			"head33":{"name":"Шляпа Gucci белая","desc":"Эксклюзивная шляпа от Gucci в белом цвете","cost":0,"donate":540},
			"head34":{"name":"Бейсболка NY белая","desc":"Белая бейсболка New York","cost":135000,"donate":0},
			"head35":{"name":"Бейсболка фаната","desc":"Синяя бейсболка с красным козырьком для фанатов бейсбола","cost":110000,"donate":0},
			"head36":{"name":"Бейсболка Atlanta Braves","desc":"Чёрная бейсболка Atlanta Braves","cost":122000,"donate":0},
			"head37":{"name":"Бейсболка NY синяя","desc":"Синяя бейсболка New York","cost":120000,"donate":0},
			"head39":{"name":"Эксклюзивная кепка SMOTRA","desc":"Дизайнерская кепка, официальный мерч SMOTRA","cost":0,"donate":500},
			"head40":{"name":"Красный платок Bloods","desc":"Красный мужской платок на голову","cost":0,"donate":150},
			"head41":{"name":"Синий платок Crips","desc":"Синий мужской платок на голову","cost":0,"donate":150},
			"head42":{"name":"Зелёный платок Groove","desc":"Зелёный мужской платок на голову","cost":0,"donate":150},
			"head43":{"name":"Фиолетовый платок Ballas","desc":"Фиолетовый мужской платок на голову","cost":0,"donate":150},
			"head44":{"name":"Чёрный платок Mafia","desc":"Чёрный мужской платок на голову","cost":0,"donate":150},
			"head45":{"name":"Кепка Gucci #2","desc":"Премиальная кепка от Gucci","cost":0,"donate":425},
			"head46":{"name":"Кепка Supreme #1","desc":"Эксклюзивная красная кепка Supreme от Louis Vuitton","cost":0,"donate":650},
			"head47":{"name":"Кепка Gucci #3","desc":"Премиальная кепка от Gucci","cost":0,"donate":435},
			"head48":{"name":"Бейсболка VETERANS","desc":"Премиальная бейсболка VETERANS","cost":0,"donate":385},
			"head49":{"name":"Бейсболка FENDI","desc":"Премиальная бейсболка FENDI","cost":0,"donate":450},
			"head50":{"name":"Панамка от Gucci","desc":"Эксклюзивная панамка от Gucci","cost":0,"donate":515},
			"head51":{"name":"Белая шляпа ATTEN. JP","desc":"Белая шляпа ATTENTION Japan","cost":185000,"donate":0},
			"head52":{"name":"Чёрная шляпа ATTEN. JP","desc":"Чёрная шляпа ATTENTION Japan","cost":199000,"donate":0},
			"head53":{"name":"Шляпа FENDI","desc":"Эксклюзивная шляпа FENDI","cost":0,"donate":475},
			"head54":{"name":"Чёрная кепка Gucci","desc":"Эксклюзивная чёрная кепка от Gucci","cost":0,"donate":415},
			"head55":{"name":"Небесная кепка Lacoste","desc":"Эксклюзивная чёрная кепка от Gucci","cost":0,"donate":235},
			"head56":{"name":"Золотая кепка Gucci","desc":"Эксклюзивная золотая кепка от Gucci","cost":0,"donate":685},
			"head57":{"name":"Кепка калейдоскоп","desc":"Весеннее настроение, кепка калейдоскоп","cost":90000,"donate":0},
			"head58":{"name":"Шляпа LaCoste B&W","desc":"Премиальная шляпа от LaCoste Blue & White","cost":0,"donate":210},
			"head59":{"name":"Шляпа LaCoste Sky","desc":"Премиальная шляпа от LaCoste Sky","cost":0,"donate":200},
			"head60":{"name":"Шляпа LaCoste G&W","desc":"Премиальная шляпа от LaCoste Green & White","cost":0,"donate":210},
			"head61":{"name":"Бейсболка D&G фирм.","desc":"Эксклюзивная бейсболка от Dolce & Gabbana фирменный цвет","cost":0,"donate":420},
			"head62":{"name":"Бейсболка D&G white","desc":"Эксклюзивная бейсболка от Dolce & Gabbana белый цвет","cost":0,"donate":400},
			"head63":{"name":"Бейсболка D&G sky","desc":"Эксклюзивная бейсболка от Dolce & Gabbana небесный цвет","cost":0,"donate":390},
			"head64":{"name":"Кепка Gucci #4","desc":"Премиальная кепка от Gucci","cost":0,"donate":480},
			"head65":{"name":"Кепка BALENCIAGA #1","desc":"Премиальная кепка от BALENCIAGA","cost":0,"donate":400},
			"head66":{"name":"Кепка BALENCIAGA #2","desc":"Премиальная кепка от BALENCIAGA","cost":0,"donate":400},
			"head67":{"name":"Кепка POLO","desc":"Премиальная кепка от Ralph POLO белая","cost":0,"donate":400},
			"head68":{"name":"Кепка Supreme #2","desc":"Эксклюзивная красная кепка Supreme от Red Edition","cost":0,"donate":600},
			"head69":{"name":"Кепка LaCoste White","desc":"Небесная кепка от Lacoste White Edition","cost":0,"donate":260},
			"head70":{"name":"Шляпа Gucci lite","desc":"Эксклюзивная шляпа от Gucci упрощённая","cost":0,"donate":490},
			"head71":{"name":"Шляпа Christian Dior","desc":"Эксклюзивная шляпа от Christian Dior","cost":0,"donate":510},
			"head72":{"name":"Шляпа ACW","desc":"Эксклюзивная шляпа от ACW Black","cost":0,"donate":400},
			"head73":{"name":"Кепка полицейская","desc":"Государственная кепка полицейского","cost":10000,"donate":0},
			"head74":{"name":"Пожарный шлем","desc":"Специальный шлем пожарного департамента","cost":15000,"donate":0}
		},
		"glasses":{
			"glasses1":{"name":"Очки","desc":"Очки New Wayfarer1: Черные","cost":20000,"donate":0},
			"glasses2":{"name":"Очки","desc":"Очки New Wayfarer2: Белые","cost":20000,"donate":0},
			"glasses3":{"name":"Очки","desc":"Очки New Wayfarer3: Черно-красные","cost":20000,"donate":0},
			"glasses4":{"name":"Очки","desc":"Очки New Wayfarer4: Черные","cost":20000,"donate":0},
			"glasses5":{"name":"Очки","desc":"Очки New Wayfarer5: Черные с синими линзами","cost":20000,"donate":0},
			"glasses6":{"name":"Очки","desc":"Очки Ray-Ban6: Белые с красными линзами","cost":21000,"donate":0},
			"glasses7":{"name":"Очки","desc":"Очки Ray-Ban7: Белые с черными линзами","cost":21000,"donate":0},
			"glasses8":{"name":"Очки","desc":"Очки Ray-Ban8: Светло-зеленые с черными линзами","cost":21000,"donate":0},
			"glasses9":{"name":"Очки","desc":"Очки Persol9: Оранжевые с прозрачными линзами","cost":35000,"donate":0},
			"glasses10":{"name":"Очки","desc":"Очки Persol10: Черные с прозрачными линзами","cost":35000,"donate":0},
			"glasses11":{"name":"Очки","desc":"Очки Tom Ford11: Синие линзы с тонкой черной оправой","cost":39500,"donate":0},
			"glasses12":{"name":"Очки","desc":"Очки Tom Ford12: Белые линзы с тонкой черной оправой","cost":39500,"donate":0},
			"glasses13":{"name":"Очки","desc":"Очки Tom Ford13: Белые линзы с тонкой серой оправой","cost":39500,"donate":0},
			"glasses14":{"name":"Очки","desc":"Очки Tom Ford14: Белые линзы с тонкой белой оправой","cost":39500,"donate":0},
			"glasses15":{"name":"Очки","desc":"Очки Tom Ford15: Черные линзы с тонкой белой оправой","cost":39500,"donate":0},
			"glasses16":{"name":"Очки","desc":"Очки Tom Ford16: Черные линзы с тонкой черной оправой","cost":39500,"donate":0},
			"glasses17":{"name":"Очки","desc":"Очки Tom Ford17: Желтые линзы с тонкой серой оправой","cost":39500,"donate":0},
			"glasses18":{"name":"Очки","desc":"Очки Tom Ford18: Синие линзы с тонкой белой оправой","cost":39500,"donate":0},
			"glasses19":{"name":"Очки","desc":"Очки Tom Ford19: Прозрачные линзы с тонкой оранжево-черной оправой","cost":39500,"donate":0},
			"glasses20":{"name":"Очки","desc":"Очки Tom Ford20: Прозрачные линзы с тонкой черной оправой","cost":39500,"donate":0},
			"glasses21":{"name":"Очки","desc":"Очки Dolce&Gabbana21: Коричневые с светлыми линзами","cost":35000,"donate":0},
			"glasses22":{"name":"Очки","desc":"Очки Dolce&Gabbana22: Светло-серые с темными линзами","cost":35000,"donate":0},
			"glasses23":{"name":"Очки","desc":"Очки Dolce&Gabbana23: Черные с черными линзами","cost":35000,"donate":0},
			"glasses24":{"name":"Очки","desc":"Очки Dolce&Gabbana24: Темно-оранжевые с желтыми линзами","cost":35000,"donate":0},
			"glasses25":{"name":"Очки","desc":"Очки Dolce&Gabbana25: Коричневые с желтыми линзами","cost":35000,"donate":0},
			"glasses26":{"name":"Очки","desc":"Очки Dolce&Gabbana26: Светло-оранжевые с желтыми линзами","cost":35000,"donate":0},
			"glasses27":{"name":"Очки","desc":"Очки Dolce&Gabbana27: Черные с синими линзами","cost":35000,"donate":0},
			"glasses28":{"name":"Очки","desc":"Очки Dolce&Gabbana28: Черные с темными линзами","cost":35000,"donate":0},
			"glasses29":{"name":"Очки","desc":"Очки Baldinini29: Оранжевые с прозрачными линзами","cost":15000,"donate":0},
			"glasses30":{"name":"Очки","desc":"Очки Baldinini30: Черные с прозрачными линзами","cost":15000,"donate":0},
			"glasses31":{"name":"Очки","desc":"Очки Lacoste31: Золотые с черными линзами","cost":23000,"donate":0},
			"glasses32":{"name":"Очки","desc":"Очки Lacoste32: Серебрянные с синими линзами","cost":23000,"donate":0},
			"glasses33":{"name":"Очки","desc":"Очки Lacoste33: Серебрянные с темными линзами","cost":23000,"donate":0},
			"glasses34":{"name":"Очки","desc":"Очки Lacoste34: Серебрянные с желтыми линзами","cost":23000,"donate":0},
			"glasses35":{"name":"Очки","desc":"Очки Lacoste35: Серебрянные с синими линзами","cost":23000,"donate":0},
			"glasses36":{"name":"Очки","desc":"Очки Lacoste36: Серебрянные с темными линзами","cost":23000,"donate":0},
			"glasses37":{"name":"Очки","desc":"Очки Lacoste37: Серебрянные с голубыми линзами","cost":23000,"donate":0},
			"glasses38":{"name":"Очки","desc":"Очки Lacoste38: Серебрянные с коричневыми линзами","cost":23000,"donate":0},
			"glasses39":{"name":"Очки","desc":"Очки Lacoste39: Оранжевые с прозрачными линзами","cost":23000,"donate":0},
			"glasses40":{"name":"Очки","desc":"Очки Lacoste40: Черные с прозрачными линзами","cost":23000,"donate":0},
			"glasses41":{"name":"Очки","desc":"Очки Prada41: Черные с темными линзами","cost":35000,"donate":0},
			"glasses42":{"name":"Очки","desc":"Очки Prada42: Желтые с фиолетовыми линзами","cost":35000,"donate":0},
			"glasses43":{"name":"Очки","desc":"Очки Prada43: Коричневые с серыми линзами","cost":35000,"donate":0},
			"glasses44":{"name":"Очки","desc":"Очки Prada44: Красные с черными линзами","cost":35000,"donate":0},
			"glasses45":{"name":"Очки","desc":"Очки Prada45: Белые с оранжевыми линзами","cost":35000,"donate":0},
			"glasses46":{"name":"Очки","desc":"Очки Prada46: Камуфляжные с темными линзами","cost":35000,"donate":0},
			"glasses47":{"name":"Очки","desc":"Очки Prada47: Желтые с черными линзами","cost":35000,"donate":0},
			"glasses48":{"name":"Очки","desc":"Очки Prada48: Красные с желтыми линзами","cost":35000,"donate":0},
			"glasses49":{"name":"Очки","desc":"Очки Prada49: Оранжевые с прозрачными линзами","cost":35000,"donate":0},
			"glasses50":{"name":"Очки","desc":"Очки Prada50: Серые с прозрачной линзой","cost":35000,"donate":0},
			"glasses51":{"name":"Очки","desc":"Очки Gucci51: Серебрянные с темными линзами","cost":55000,"donate":0},
			"glasses52":{"name":"Очки","desc":"Очки Gucci52: Серебрянные с коричневыми линзами","cost":55000,"donate":0},
			"glasses53":{"name":"Очки","desc":"Очки Gucci53: Серебрянные с желтыми линзами","cost":55000,"donate":0},
			"glasses54":{"name":"Очки","desc":"Очки Gucci54: Синие с синими линзами","cost":55000,"donate":0},
			"glasses55":{"name":"Очки","desc":"Очки Gucci55: Серые с желтыми линзами","cost":55000,"donate":0},
			"glasses56":{"name":"Очки","desc":"Очки Gucci56: Черные с темными линзами","cost":55000,"donate":0},
			"glasses57":{"name":"Очки","desc":"Очки Gucci57: Черные с фиолетовыми линзами","cost":55000,"donate":0},
			"glasses58":{"name":"Очки","desc":"Очки Gucci58: Черные с серыми линзами","cost":55000,"donate":0},
			"glasses59":{"name":"Очки","desc":"Очки Gucci59: Желтые с прозрачными линзами","cost":55000,"donate":0},
			"glasses60":{"name":"Очки","desc":"Очки Gucci60: Белые с прозрачными линзами","cost":55000,"donate":0},
			"glasses61":{"name":"Очки","desc":"Очки Ic Berlin61: Черные с темными линзами","cost":40000,"donate":0},
			"glasses62":{"name":"Очки","desc":"Очки Ic Berlin62: Серые с синими линзами","cost":40000,"donate":0},
			"glasses63":{"name":"Очки","desc":"Очки Ic Berlin63: Белые с коричневыми линзами","cost":40000,"donate":0},
			"glasses64":{"name":"Очки","desc":"Очки Ic Berlin64: Серые с красными линзами","cost":40000,"donate":0},
			"glasses65":{"name":"Очки","desc":"Очки Ic Berlin65: Золотые серыми линзами","cost":40000,"donate":0},
			"glasses66":{"name":"Очки","desc":"Очки Ic Berlin66: Тигровые с желтыми линзами","cost":40000,"donate":0},
			"glasses67":{"name":"Очки","desc":"Очки Ic Berlin67: Тигровые с оранжевыми линзами","cost":40000,"donate":0},
			"glasses68":{"name":"Очки","desc":"Очки Ic Berlin68: Леопардовые с серыми линзами","cost":40000,"donate":0},
			"glasses69":{"name":"Очки","desc":"Очки Ic Berlin69: Оранжевые с прозрачными линзами","cost":40000,"donate":0},
			"glasses70":{"name":"Очки","desc":"Очки Ic Berlin70: Черные с прозрачными линзами","cost":40000,"donate":0},
			"glasses71":{"name":"Очки","desc":"Очки Porsche71: Золотые с черными линзами","cost":45000,"donate":0},
			"glasses72":{"name":"Очки","desc":"Очки Porsche72: Серые с синими линзами","cost":45000,"donate":0},
			"glasses73":{"name":"Очки","desc":"Очки Porsche73: Белые с красными линзами","cost":45000,"donate":0},
			"glasses74":{"name":"Очки","desc":"Очки Porsche74: Серые с черными линзами","cost":45000,"donate":0},
			"glasses75":{"name":"Очки","desc":"Очки Porsche75: Золотые с красными линзами","cost":45000,"donate":0},
			"glasses76":{"name":"Очки","desc":"Очки Porsche76: Черные с черными линзами","cost":45000,"donate":0},
			"glasses77":{"name":"Очки","desc":"Очки Porsche77: Белые с оранжевыми линзами","cost":45000,"donate":0},
			"glasses78":{"name":"Очки","desc":"Очки Porsche78: Черные с фиолетовыми линзами","cost":45000,"donate":0},
			"glasses79":{"name":"Очки","desc":"Очки Porsche79: Оранжевые с прозрачными линзами","cost":45000,"donate":0},
			"glasses80":{"name":"Очки","desc":"Очки Porsche80: Черные с прозрачными линзами","cost":45000,"donate":0},
			"glasses81":{"name":"Очки","desc":"Очки Vogue81: Желтые с оранжевыми линзами","cost":20000,"donate":0},
			"glasses82":{"name":"Очки","desc":"Очки Vogue82: Белые с темными линзами","cost":20000,"donate":0},
			"glasses83":{"name":"Очки","desc":"Очки Vogue83: Белые с фиолетовыми линзами","cost":20000,"donate":0},
			"glasses84":{"name":"Очки","desc":"Очки Vogue84: Черные с желтыми линзами","cost":20000,"donate":0},
			"glasses85":{"name":"Очки","desc":"Очки Vogue85: Белые с красными линзами","cost":20000,"donate":0},
			"glasses86":{"name":"Очки","desc":"Очки Vogue86: Белые с синими линзами","cost":20000,"donate":0},
			"glasses87":{"name":"Очки","desc":"Очки Vogue87: Белые с фиолетовыми линзами","cost":20000,"donate":0},
			"glasses88":{"name":"Очки","desc":"Очки Vogue88: Коричневые с темными линзами","cost":20000,"donate":0},
			"glasses89":{"name":"Очки","desc":"Очки Vogue89: Оранжевые с прозрачными линзами","cost":20000,"donate":0},
			"glasses90":{"name":"Очки","desc":"Очки Vogue90: Черные с прозрачными линзами","cost":20000,"donate":0},
			"glasses91":{"name":"Очки","desc":"Очки Fendi91: Черные с красными линзами","cost":43000,"donate":0},
			"glasses92":{"name":"Очки","desc":"Очки Fendi92: Белые с фиолетовыми линзами","cost":43000,"donate":0},
			"glasses93":{"name":"Очки","desc":"Очки Fendi93: Коричневые с темными линзами","cost":43000,"donate":0},
			"glasses94":{"name":"Очки","desc":"Очки Fendi94: Черные с оранжевыми линзами","cost":43000,"donate":0},
			"glasses95":{"name":"Очки","desc":"Очки Fendi95: Черные с зелеными линзами","cost":43000,"donate":0},
			"glasses96":{"name":"Очки","desc":"Очки Fendi96: Зеленые с темными линзами","cost":43000,"donate":0},
			"glasses97":{"name":"Очки","desc":"Очки Fendi97: Желтые с зелеными линзами","cost":43000,"donate":0},
			"glasses98":{"name":"Очки","desc":"Очки Fendi98: Черные с фиолетовыми линзами","cost":43000,"donate":0},
			"glasses99":{"name":"Очки","desc":"Очки Fendi99: Оранжевые с прозрачными линзами","cost":43000,"donate":0},
			"glasses100":{"name":"Очки","desc":"Очки Fendi100: Черные с прозрачными линзами","cost":43000,"donate":0},
			"glasses101":{"name":"Очки","desc":"Очки Serengeti101: Черные с желтыми линзами","cost":25500,"donate":0},
			"glasses102":{"name":"Очки","desc":"Очки Serengeti102: Белые с черными линзами","cost":25500,"donate":0},
			"glasses103":{"name":"Очки","desc":"Очки Serengeti103: Серые с красными линзами","cost":25500,"donate":0},
			"glasses104":{"name":"Очки","desc":"Очки Serengeti104: Красные с серыми линзами","cost":25500,"donate":0},
			"glasses105":{"name":"Очки","desc":"Очки Serengeti105: Синие с черными линзами","cost":25500,"donate":0},
			"glasses106":{"name":"Очки","desc":"Очки Serengeti106: Желтые с желтыми линзами","cost":25500,"donate":0},
			"glasses107":{"name":"Очки","desc":"Очки Serengeti107: Черные с оранжевыми линзами","cost":25500,"donate":0},
			"glasses108":{"name":"Очки","desc":"Очки Serengeti108: Черные с фиолетовыми линзами","cost":25500,"donate":0},
			"glasses109":{"name":"Очки","desc":"Очки Serengeti109: Оранжевые с прозрачными линзами","cost":25500,"donate":0},
			"glasses110":{"name":"Очки","desc":"Очки Serengeti110: Черные с прозрачными линзами","cost":25500,"donate":0},
			"glasses111":{"name":"Очки","desc":"Очки Adidas111: Черные с красными линзами","cost":22000,"donate":0},
			"glasses112":{"name":"Очки","desc":"Очки Adidas112: Бежевые с синими линзами","cost":22000,"donate":0},
			"glasses113":{"name":"Очки","desc":"Очки Adidas113: Черные с желтыми линзами","cost":22000,"donate":0},
			"glasses114":{"name":"Очки","desc":"Очки Adidas114: Белые с красными линзами","cost":22000,"donate":0},
			"glasses115":{"name":"Очки","desc":"Очки Adidas115: Красные с черными линзами","cost":22000,"donate":0},
			"glasses116":{"name":"Очки","desc":"Очки Adidas116: Белые с зелеными линзами","cost":22000,"donate":0},
			"glasses117":{"name":"Очки#117","desc":"Очки Adidas117: Черные с черными линзами","cost":22000,"donate":0},
			"glasses118":{"name":"Очки#118","desc":"Очки Adidas118: Оранжевые с прозрачными линзами","cost":22000,"donate":0},
			"glasses119":{"name":"Очки #119","desc":"Очки Adidas119: Черные с прозрачными линзами","cost":22000,"donate":0},
			"glasses120":{"name":"Очки","desc":"Очки Adidas120: Белые с прозрачными линзами","cost":22000,"donate":0},
			"glasses121":{"name":"Очки","desc":"Очки Burberry121: Черные с серыми линзами","cost":19500,"donate":0},
			"glasses122":{"name":"Очки","desc":"Очки Burberry122: Черные с золотой оправой и серыми линзами","cost":19500,"donate":0},
			"glasses123":{"name":"Очки","desc":"Очки Burberry123: Золотистые с серыми линзами","cost":19500,"donate":0},
			"glasses124":{"name":"Очки","desc":"Очки Burberry124: Белые с оранжевыми линзами","cost":19500,"donate":0},
			"glasses125":{"name":"Очки","desc":"Очки Burberry125: Белые с черными линзами","cost":19500,"donate":0},
			"glasses126":{"name":"Очки","desc":"Очки Burberry126: Черные с белыми линзами","cost":19500,"donate":0},
			"glasses127":{"name":"Очки","desc":"Очки Burberry127: Серые с черными линзами","cost":19500,"donate":0},
			"glasses128":{"name":"Очки","desc":"Очки Burberry128: Черные с серыми линзами","cost":19500,"donate":0},
			"glasses129":{"name":"Очки","desc":"Очки Burberry129: Оранжевые с прозрачными линзами","cost":19500,"donate":0},
			"glasses130":{"name":"Очки","desc":"Очки Burberry130: Черные с прозрачными линзами","cost":19500,"donate":0},
			"glasses131":{"name":"Очки","desc":"Очки Valentin Yudashkin131: Серые с золотой оправой","cost":21000,"donate":0},
			"glasses132":{"name":"Очки","desc":"Очки Valentin Yudashkin132: Серые с темными линзами","cost":21000,"donate":0},
			"glasses133":{"name":"Очки","desc":"Очки Valentin Yudashkin133: Серые с черными линзами","cost":21000,"donate":0},
			"glasses134":{"name":"Очки","desc":"Очки Valentin Yudashkin134: Черные с серыми линзами","cost":21000,"donate":0},
			"glasses135":{"name":"Очки","desc":"Очки Valentin Yudashkin135: Черные с мятной оправой","cost":21000,"donate":0},
			"glasses136":{"name":"Очки","desc":"Очки Valentin Yudashkin136: Черные с оранжевыми линзами","cost":21000,"donate":0},
			"glasses137":{"name":"Очки","desc":"Очки Valentin Yudashkin137: Серые с синими линзами","cost":21000,"donate":0},
			"glasses138":{"name":"Очки","desc":"Очки Valentin Yudashkin138: Серые с оранжевыми линзами.","cost":21000,"donate":0},
			"glasses139":{"name":"Очки","desc":"Очки Valentin Yudashkin139: Оранжевые с прозрачными линзами","cost":21000,"donate":0},
			"glasses140":{"name":"Очки","desc":"Очки Valentin Yudashkin140: Желтые с прозрачной оправой","cost":21000,"donate":0},
			"glasses141":{"name":"Очки","desc":"Очки Bvlgari141: Черные с золотой оправой","cost":28000,"donate":0},
			"glasses142":{"name":"Очки","desc":"Очки Bvlgari142: Черные с серебрянной оправой","cost":28000,"donate":0},
			"glasses143":{"name":"Очки","desc":"Очки Bvlgari143: Черные с серебрянным корпусом","cost":28000,"donate":0},
			"glasses144":{"name":"Очки","desc":"Очки Bvlgari144: Зеленые с прозрачными линзами","cost":28000,"donate":0},
			"glasses145":{"name":"Очки","desc":"Очки Bvlgari145: Коричневые с прозрачной линзой","cost":28000,"donate":0},
			"glasses146":{"name":"Очки","desc":"Очки Bvlgari146: Желтые с прозрачной линзой","cost":28000,"donate":0},
			"glasses147":{"name":"Очки","desc":"Очки Bvlgari147: Серые с прозрачной линзой","cost":28000,"donate":0},
			"glasses148":{"name":"Очки","desc":"Очки Bvlgari148: Белые с прозрачной линзой","cost":28000,"donate":0},
			"glasses149":{"name":"Очки","desc":"Очки Bvlgari149: Оранжевые с прозрачной линзой","cost":28000,"donate":0},
			"glasses150":{"name":"Очки","desc":"Очки Bvlgari150: Черные с прозрачной линзой","cost":28000,"donate":0},
			"glasses151":{"name":"Очки","desc":"Очки PRO151: Светлые с черной оправой","cost":25000,"donate":0},
			"glasses152":{"name":"Очки","desc":"Очки PRO152: Коричневые с прозрачными линзами","cost":25000,"donate":0},
			"glasses153":{"name":"Очки","desc":"Очки PRO153: Черные с желтыми линзами","cost":25000,"donate":0},
			"glasses154":{"name":"Очки","desc":"Очки PRO154: Белые с узором","cost":25000,"donate":0},
			"glasses155":{"name":"Очки","desc":"Очки PRO155: Белые с красными линзами","cost":25000,"donate":0},
			"glasses156":{"name":"Очки","desc":"Очки PRO156: Красные","cost":25000,"donate":0},
			"glasses157":{"name":"Очки","desc":"Очки PRO157: Темно-красные","cost":25000,"donate":0},
			"glasses158":{"name":"Очки","desc":"Очки PRO158: Черные с желтой оправой","cost":25000,"donate":0},
			"glasses159":{"name":"Очки Gucci жёлтые","desc":"Эксклюзивные очки от Gucci с жёлтыми стёклами","cost":0,"donate":220},
			"glasses160":{"name":"Очки Gucci небесные","desc":"Эксклюзивные очки от Gucci с небесными стёклами","cost":0,"donate":225},
			"glasses161":{"name":"Очки Gucci притемнённые","desc":"Эксклюзивные очки от Gucci с притемнёнными стёклами","cost":0,"donate":215},
			"glasses162":{"name":"Очки Fendi золотые","desc":"Эксклюзивные очки FENDI с золотой оправой и золотыми стёклами","cost":0,"donate":460},
			"glasses163":{"name":"Очки Fendi небесн. сереб.","desc":"Эксклюзивные очки FENDI с серебрянной оправой и небесными стёклами","cost":0,"donate":390},
			"glasses164":{"name":"Очки Fendi небесн. золот.","desc":"Эксклюзивные очки FENDI с золотой оправой и золотыми стёклами","cost":0,"donate":460},
			"glasses165":{"name":"Очки небесный градиент","desc":"Очки с серебрянной оправой и небесным градиентом","cost":230000,"donate":0},
			"glasses166":{"name":"Очки жёлтый градиент","desc":"Очки с серебрянной оправой и жёлтым градиентом","cost":215000,"donate":0},
			"glasses167":{"name":"Очки белый градиент","desc":"Очки с серебрянной оправой и белым градиентом","cost":225000,"donate":0},
			"glasses168":{"name":"Очки Gucci Modern Red","desc":"Современные пластиковые очки Gucci с красным градиентом","cost":315000,"donate":0},
			"glasses169":{"name":"Очки Gucci Modern Sky","desc":"Современные пластиковые леопардовые очки Gucci с небесным градиентом","cost":325000,"donate":0},
			"glasses170":{"name":"Очки Gucci Modern Red #2","desc":"Современные пластиковые леопардовые очки Gucci с красным градиентом","cost":335000,"donate":0},
			"glasses171":{"name":"Очки Gucci Modern Sky","desc":"Современные пластиковые леопардовые очки Gucci с небесным градиентом","cost":325000,"donate":0},
			"glasses172":{"name":"Очки Gucci Modern Sky #2","desc":"Современные пластиковые очки Gucci с небесным градиентом","cost":320000,"donate":0},
			"glasses173":{"name":"Очки Gucci Modern Yel","desc":"Современные пластиковые леопардовые очки Gucci с жёлтым градиентом","cost":315000,"donate":0},
			"glasses174":{"name":"Очки Gucci Modern Yel #2","desc":"Современные пластиковые очки Gucci с небесным градиентом","cost":300000,"donate":0},
			"glasses175":{"name":"Очки Gucci Fashion Class","desc":"Дизайнерские пластиковые очки Gucci фирменные","cost":360000,"donate":0},
			"glasses176":{"name":"Очки Gucci Fashion Yel","desc":"Дизайнерские пластиковые очки Gucci с жёлтыми стёклами","cost":340000,"donate":0},
			"glasses177":{"name":"Очки Gucci Fashion Red","desc":"Дизайнерские пластиковые очки Gucci с красными стёклами","cost":320000,"donate":0},
			"glasses178":{"name":"Очки Gucci Fashion Sky","desc":"Дизайнерские пластиковые очки Gucci с небесными стёклами","cost":350000,"donate":0},
			"glasses179":{"name":"Очки Gucci Yankee Red","desc":"Урбанистические пластиковые очки Gucci с красными стёклами","cost":260000,"donate":0},
			"glasses180":{"name":"Очки Gucci Yankee Sky","desc":"Урбанистические пластиковые очки Gucci с небесными стёклами","cost":280000,"donate":0},
			"glasses181":{"name":"Очки Gucci Yankee Yel","desc":"Урбанистические пластиковые очки Gucci с жёлтыми стёклами","cost":260000,"donate":0},
			"glasses182":{"name":"Очки LV Gamer Sky","desc":"Эксклюзивные очки от Louis Vuitton с небесными стёклами","cost":0,"donate":350},
			"glasses183":{"name":"Очки LV Gamer Red","desc":"Эксклюзивные очки от Louis Vuitton с красными стёклами","cost":0,"donate":350},
			"glasses184":{"name":"Очки LV Gamer Yel","desc":"Эксклюзивные очки от Louis Vuitton с жёлтыми стёклами","cost":0,"donate":350},
			"glasses185":{"name":"Очки O-Flip-Up Black","desc":"Открытые Flip-Up очки чёрные","cost":220000,"donate":0},
			"glasses186":{"name":"Очки O-Flip-Up G&S","desc":"Открытые Flip-Up очки комбинация золота и серебра","cost":230000,"donate":0},
			"glasses187":{"name":"Очки O-Flip-Up Gold #1","desc":"Открытые Flip-Up очки золотые с притемненными стёклами","cost":230000,"donate":0},
			"glasses188":{"name":"Очки O-Flip-Up G&B","desc":"Открытые Flip-Up очки комбинация золота и чёрного металла","cost":211000,"donate":0},
			"glasses189":{"name":"Очки O-Flip-Up Silver","desc":"Открытые Flip-Up очки серебрянные","cost":230000,"donate":0},
			"glasses190":{"name":"Очки O-Flip-Up Gold #2","desc":"Открытые Flip-Up очки золотые с золотыми стёклами","cost":230000,"donate":0},
			"glasses191":{"name":"Очки O-Flip-Up Full Gold","desc":"Эксклюзивные открытые Flip-Up очки золотые с золотыми стёклами","cost":0,"donate":250},
			"glasses192":{"name":"Очки Flip-Up Black","desc":"Flip-Up очки чёрные","cost":220000,"donate":0},
			"glasses193":{"name":"Очки Flip-Up G&S","desc":"Flip-Up очки комбинация золота и серебра","cost":230000,"donate":0},
			"glasses194":{"name":"Очки Flip-Up Gold #1","desc":"Flip-Up очки золотые с притемненными стёклами","cost":230000,"donate":0},
			"glasses195":{"name":"Очки Flip-Up G&B","desc":"Flip-Up очки комбинация золота и чёрного металла","cost":211000,"donate":0},
			"glasses196":{"name":"Очки Flip-Up Silver","desc":"Flip-Up очки серебрянные","cost":230000,"donate":0},
			"glasses197":{"name":"Очки Flip-Up Gold #2","desc":"Flip-Up очки золотые с золотыми стёклами","cost":230000,"donate":0},
			"glasses198":{"name":"Очки Flip-Up Full Gold","desc":"Эксклюзивные Flip-Up очки золотые с золотыми стёклами","cost":0,"donate":250},
			"glasses199":{"name":"Очки Classic G&B","desc":"Классические чёрные очки с золтыми оправами","cost":140000,"donate":0},
			"glasses200":{"name":"Очки Classic G&R","desc":"Классические стилизованные под красное дерево очки с золтыми оправами","cost":170000,"donate":0},
			"glasses201":{"name":"Очки Aviator Black","desc":"Классические очки авиаторы с чёрными стёклами и золтоыми вставками","cost":270000,"donate":0},
			"glasses202":{"name":"Очки ProtoHip Black","desc":"Классические протохипстерские чёрные очки с золотыми вставками","cost":180000,"donate":0},
			"glasses203":{"name":"Очки ProtoHip Red","desc":"Классические протохипстерские красные очки с серебрянными вставками","cost":140000,"donate":0},
			"glasses204":{"name":"Очки ProtoHip FBlack","desc":"Классические протохипстерские чёрные очки с чёрными вставками","cost":150000,"donate":0},
			"glasses205":{"name":"Очки ProtoHip Gucci","desc":"Эксклюзивные протохипстерские чёрные очки Gucci Edition с золотыми стёклами","cost":0,"donate":320}
		},
		"watch":{
			"watch1":{"name":"Часы Breguet&Classique #1","desc":"Описание","cost":1300000,"donate":0}
		},
		"bracelet":{
			"bracelet1":{"name":"Браслет Алорис #1","desc":"Описание","cost":50000,"donate":0}
		},
		"tors":{
			"tors1":{"name":"майка","desc":"майка серая","cost":15000,"donate":0},
			"tors2":{"name":"футболка","desc":"футболка Hugo1: Белая ","cost":15000,"donate":0},
			"tors3":{"name":"футболка","desc":"футболка Hugo2: Темно серая","cost":15000,"donate":0},
			"tors4":{"name":"футболка","desc":"футболка Hugo3: Черная","cost":15000,"donate":0},
			"tors5":{"name":"футболка","desc":"футболка Hugo4: Желтая","cost":15000,"donate":0},
			"tors6":{"name":"футболка","desc":"футболка Hugo5: Серая","cost":15000,"donate":0},
			"tors7":{"name":"футболка","desc":"футболка Hugo6: Бежевая","cost":15000,"donate":0},
			"tors8":{"name":"футболка","desc":"футболка Hugo7: ","cost":15000,"donate":0},
			"tors9":{"name":"футболка","desc":"футболка Hugo8: Бледно розовая","cost":15000,"donate":0},
			"tors10":{"name":"футболка","desc":"футболка Hugo9: Бледно серая","cost":15000,"donate":0},
			"tors11":{"name":"футболка","desc":"футболка Hugo10: Телесная","cost":15000,"donate":0},
			"tors12":{"name":"футболка","desc":"футболка Hugo11: Белая","cost":15000,"donate":0},
			"tors13":{"name":"футболка","desc":"футболка Hugo12: Серая","cost":15000,"donate":0},
			"tors14":{"name":"футболка","desc":"футболка Hugo13: ","cost":15000,"donate":0},
			"tors15":{"name":"футболка","desc":"футболка Hugo14: Желтая","cost":15000,"donate":0},
			"tors16":{"name":"футболка","desc":"футболка Hugo15: Красная","cost":15000,"donate":0},
			"tors17":{"name":"футболка","desc":"футболка Hugo16: Темно синия","cost":15000,"donate":0},
			"tors18":{"name":"футболка","desc":"футболка Hugo17: Бледно фиолетовая","cost":15000,"donate":0},
			"tors19":{"name":"футболка","desc":"футболка Hugo18: Зеленая","cost":15000,"donate":0},
			"tors20":{"name":"футболка","desc":"футболка Hugo19: Бледно розовая","cost":15000,"donate":0},
			"tors21":{"name":"футболка","desc":"футболка Hugo20: Сигнальная оранжевая","cost":15000,"donate":0},
			"tors22":{"name":"футболка","desc":"футболка Hugo21: Коричневая","cost":15000,"donate":0},
			"tors23":{"name":"футболка","desc":"футболка Hugo22: Светло телесная","cost":15000,"donate":0},
			"tors24":{"name":"Куртка","desc":"Куртка Boss23: Белая","cost":25500,"donate":0},
			"tors25":{"name":"Куртка","desc":"Куртка Boss24: Серая","cost":25500,"donate":0},
			"tors26":{"name":"Куртка","desc":"Куртка Boss25: Черная","cost":25500,"donate":0},
			"tors27":{"name":"Куртка","desc":"Куртка Boss26: Голубая","cost":25500,"donate":0},
			"tors28":{"name":"Куртка","desc":"Куртка Boss27: Темно синия","cost":25500,"donate":0},
			"tors29":{"name":"Куртка","desc":"Куртка Boss28: Ярко красная","cost":25500,"donate":0},
			"tors30":{"name":"Куртка","desc":"Куртка Boss29: Светло зеленая","cost":25500,"donate":0},
			"tors31":{"name":"Куртка","desc":"Куртка Boss30: Ярко оранжевая","cost":25500,"donate":0},
			"tors32":{"name":"Куртка","desc":"Куртка Boss31: Желтая","cost":25500,"donate":0},
			"tors33":{"name":"Куртка","desc":"Куртка Boss32: Фиолетовая","cost":25500,"donate":0},
			"tors34":{"name":"Куртка","desc":"Куртка Boss33: Коричневая","cost":25500,"donate":0},
			"tors35":{"name":"Куртка","desc":"Куртка Boss34: Светло коричневая","cost":25500,"donate":0},
			"tors36":{"name":"Куртка","desc":"Куртка Boss35: Бледно розовый","cost":25500,"donate":0},
			"tors37":{"name":"Куртка","desc":"Куртка Boss36: Синяя с голубыми рукавами","cost":25500,"donate":0},
			"tors38":{"name":"Куртка","desc":"Куртка Boss37: Темно синия с оранжевыми полосками","cost":25500,"donate":0},
			"tors39":{"name":"Куртка","desc":"Куртка Boss38: Красная с желтыми полосками","cost":25500,"donate":0},
			"tors40":{"name":"Пиджак","desc":"Пиджак Hugo39: Черный","cost":15000,"donate":0},
			"tors41":{"name":"Пиджак","desc":"Пиджак Hugo40: Красный","cost":15000,"donate":0},
			"tors42":{"name":"Пиджак","desc":"Пиджак Hugo41: Серый","cost":15000,"donate":0},
			"tors43":{"name":"Пиджак","desc":"Пиджак Hugo42: Бледно фиолетовый","cost":15000,"donate":0},
			"tors44":{"name":"Пиджак","desc":"Пиджак Hugo43: Черный с белыми коронами","cost":15000,"donate":0},
			"tors45":{"name":"Майка","desc":"Майка Jordan44: Белая","cost":20000,"donate":0},
			"tors46":{"name":"Майка","desc":"Майка Jordan45: Серая","cost":20000,"donate":0},
			"tors47":{"name":"Майка","desc":"Майка Jordan46: Черная","cost":20000,"donate":0},
			"tors48":{"name":"Майка","desc":"Майка Jordan47: Красная","cost":20000,"donate":0},
			"tors49":{"name":"Майка","desc":"Майка Jordan48: Красная","cost":20000,"donate":0},
			"tors50":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY49: Черная с белыми полосками","cost":36000,"donate":0},
			"tors51":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY50: Черная серой полоской","cost":36000,"donate":0},
			"tors52":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY51: Красная с белыми полосками","cost":36000,"donate":0},
			"tors53":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY52: Белая с черными рукавами","cost":36000,"donate":0},
			"tors54":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY53: Черная с темно синими плечами","cost":36000,"donate":0},
			"tors55":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY54: Коричневая","cost":36000,"donate":0},
			"tors56":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY55: Грязно черная с белой полоской","cost":36000,"donate":0},
			"tors57":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY56: Черная с бежевой грудью","cost":36000,"donate":0},
			"tors58":{"name":"Куртка кожаная","desc":"Куртка кожаная JONNY57: Светло коричневая","cost":36000,"donate":0},
			"tors59":{"name":"","desc":"Описание","cost":4500,"donate":0}, 
			"tors60":{"name":"Кофта","desc":"Куртка Кофта PUMA59: Белая","cost":28500,"donate":0},
			"tors61":{"name":"Кофта","desc":"Куртка Кофта PUMA60: Серая","cost":28500,"donate":0},
			"tors62":{"name":"Кофта","desc":"Куртка Кофта PUMA61: Черная","cost":28500,"donate":0},
			"tors63":{"name":"Кофта","desc":"Куртка Кофта PUMA62: Голубая","cost":28500,"donate":0},
			"tors64":{"name":"Кофта","desc":"Куртка Кофта PUMA63: Темно синия","cost":28500,"donate":0},
			"tors65":{"name":"Кофта","desc":"Куртка Кофта PUMA64: Красная","cost":28500,"donate":0},
			"tors66":{"name":"Кофта","desc":"Куртка Кофта PUMA65: Зеленая","cost":28500,"donate":0},
			"tors67":{"name":"Кофта","desc":"Куртка Кофта PUMA66: Ярко оранжевая","cost":28500,"donate":0},
			"tors68":{"name":"Кофта","desc":"Куртка Кофта PUMA67: Желтая","cost":28500,"donate":0},
			"tors69":{"name":"Кофта","desc":"Куртка Кофта PUMA68: Фиолетовая","cost":28500,"donate":0},
			"tors70":{"name":"Кофта","desc":"Куртка Кофта PUMA69: Темно коричневая","cost":28500,"donate":0},
			"tors71":{"name":"Кофта","desc":"Куртка Кофта PUMA70: Телесная","cost":28500,"donate":0},
			"tors72":{"name":"Кофта","desc":"Куртка Кофта PUMA71: Бледно фиолетовая","cost":28500,"donate":0},
			"tors73":{"name":"Кофта","desc":"Куртка Кофта PUMA72: Камуфляжная","cost":28500,"donate":0},
			"tors74":{"name":"Кофта","desc":"Куртка Кофта PUMA73: Серо камуфляжная","cost":28500,"donate":0},
			"tors75":{"name":"Кофта","desc":"Куртка Кофта PUMA74: Черная с желтым выворотом","cost":28500,"donate":0},
			"tors76":{"name":"Водолазка","desc":"Водолазка Mango Man75: Голубая с розовыми рукавами","cost":18000,"donate":0},
			"tors77":{"name":"Водолазка","desc":"Водолазка Mango Man76: Голубая с белыми рукавами","cost":18000,"donate":0},
			"tors78":{"name":"Водолазка","desc":"Водолазка Mango Man77: Черная","cost":18000,"donate":0},
			"tors79":{"name":"Водолазка","desc":"Водолазка Mango Man78: Серая с белыми рукавами","cost":18000,"donate":0},
			"tors80":{"name":"Поло","desc":"Поло Nike79: Белая с черными полосками","cost":26000,"donate":0},
			"tors81":{"name":"Поло","desc":"Поло Nike80: Серая","cost":26000,"donate":0},
			"tors82":{"name":"Поло","desc":"Поло Nike81: Черная","cost":26000,"donate":0},
			"tors83":{"name":"Поло","desc":"Поло Nike82: Бледно розовая","cost":26000,"donate":0},
			"tors84":{"name":"Поло","desc":"Поло Nike83: Синия","cost":26000,"donate":0},
			"tors85":{"name":"Поло","desc":"Поло Nike84: Ярко оранжевая","cost":26000,"donate":0},
			"tors86":{"name":"Поло","desc":"Поло Nike85: Розовая","cost":26000,"donate":0},
			"tors87":{"name":"Поло","desc":"Поло Nike86: фиолетовая","cost":26000,"donate":0},
			"tors88":{"name":"Поло","desc":"Поло Nike87: Белая с голубыми плечами","cost":26000,"donate":0},
			"tors89":{"name":"Поло","desc":"Поло Nike88: Белая","cost":26000,"donate":0},
			"tors90":{"name":"Поло","desc":"Поло Nike89: Зеленая","cost":26000,"donate":0},
			"tors91":{"name":"Поло","desc":"Поло Nike90: Темно зеленая","cost":26000,"donate":0},
			"tors92":{"name":"Поло","desc":"Поло Nike91: Красная","cost":26000,"donate":0},
			"tors93":{"name":"Поло","desc":"Поло Nike92: Желтая","cost":26000,"donate":0},
			"tors94":{"name":"Пиджак","desc":"Пиджак Hugo93: Черный","cost":35000,"donate":0},
			"tors95":{"name":"Пиджак","desc":"Пиджак Hugo94: Серый","cost":35000,"donate":0},
			"tors96":{"name":"Пиджак","desc":"Пиджак Hugo95: Темно синий","cost":35000,"donate":0},
			"tors97":{"name":"Футболка","desc":"Футболка новогодняя (обычная)","cost":16000,"donate":0},
			"tors98":{"name":"Футболка","desc":"Футболка новогодняя (эльфийская)","cost":16500,"donate":0},
			"tors99":{"name":"Футболка","desc":"Футболка новогодняя (белого цвета с шарфом)","cost":16000,"donate":0},
			"tors100":{"name":"Футболка","desc":"Футболка новогодняя (коричневая с колокольчиком)","cost":16000,"donate":0},
			"tors101":{"name":"Кофта","desc":"Кофта дед-мороз (обычная)","cost":23000,"donate":0},
			"tors102":{"name":"Кофта","desc":"Кофта дед-мороз (зеленого цвета) ","cost":24000,"donate":0},
			"tors103":{"name":"Кофта","desc":"Кофта дед-мороз (серого цвета, с белой кляксой)","cost":25000,"donate":0},
			"tors104":{"name":"Куртка","desc":"Куртка помощника санты","cost":38000,"donate":0},
			"tors105":{"name":"Кофта","desc":"Премиум новогодняя кофта (с ремнем)","cost":39000,"donate":0},
			"tors106":{"name":"Кофта","desc":"Премиум новогодняя кофта (зеленого цвета с ремнем)","cost":39000,"donate":0},
			"tors107":{"name":"Кофта","desc":"Премиум новогодняя кофта (серого цвета с кляксой)","cost":39000,"donate":0},
			"tors108":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (синего цвета с елкой)","cost":40000,"donate":0},
			"tors109":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (красного цвета с оленями)","cost":40000,"donate":0},
			"tors110":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (серого цвета с оленями)","cost":40000,"donate":0},
			"tors111":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (зелного цвета с подарками)","cost":40000,"donate":0},
			"tors112":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (темно серого цвета с елкой)","cost":40000,"donate":0},
			"tors113":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (разноцветная с снеговиком)","cost":40000,"donate":0},
			"tors114":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (красного цвета в ромб)","cost":40000,"donate":0},
			"tors115":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (зелёного цвета в ромб)","cost":40000,"donate":0},
			"tors116":{"name":"Кофта","desc":"Новогодняя кофта (синего цвета с елкой)","cost":20000,"donate":0},
			"tors117":{"name":"Кофта","desc":"Новогодняя кофта (красного цвета с оленями)","cost":20000,"donate":0},
			"tors118":{"name":"Кофта","desc":"Новогодняя кофта (серого цвета с оленями)","cost":20000,"donate":0},
			"tors119":{"name":"Кофта","desc":"Новогодняя кофта (зелного цвета с подарками)","cost":20000,"donate":0},
			"tors120":{"name":"Кофта","desc":"Новогодняя кофта (темно серого цвета с елкой)","cost":20000,"donate":0},
			"tors121":{"name":"Кофта","desc":"Новогодняя кофта (разноцветная с снеговиком)","cost":20000,"donate":0},
			"tors122":{"name":"Кофта","desc":"Новогодняя кофта (красного цвета в ромб)","cost":20000,"donate":0},
			"tors123":{"name":"Кофта","desc":"Новогодняя кофта (зелёного цвета в ромб)","cost":20000,"donate":0}, // ОТСЮДА
			"tors124":{"name":"Худи Gourji","desc":"Толстовка черная с феолетовым карманом","cost":23000,"donate":0},
			"tors125":{"name":"Пиджак","desc":"Пиджак Henderson серого цвета в квадрат","cost":44100,"donate":0},
			"tors126":{"name":"Пиджак","desc":"Пиджак Henderson бледно голубого цвета в квадрат","cost":44200,"donate":0},
			"tors127":{"name":"Пиджак","desc":"Пиджак Henderson темно синего цвета в маркировку P","cost":44300,"donate":0},
			"tors128":{"name":"Пиджак","desc":"Пиджак Henderson синего цвета в маркировку P","cost":44400,"donate":0},
			"tors129":{"name":"Пиджак","desc":"Пиджак Henderson белого цвета в маркировку P","cost":44500,"donate":0},
			"tors130":{"name":"Пиджак","desc":"Пиджак Henderson серово цвета в маркировку P","cost":44600,"donate":0},
			"tors131":{"name":"Пиджак","desc":"Пиджак Henderson черного цвета с черчежами","cost":44700,"donate":0},
			"tors132":{"name":"Пиджак","desc":"Пиджак Henderson разноцветный с маркировкой","cost":44800,"donate":0},
			"tors133":{"name":"Пиджак","desc":"Пиджак Henderson бледно оранжевого цвета с маркировкой","cost":44900,"donate":0},
			"tors134":{"name":"Пиджак","desc":"Пиджак Henderson красного цвета с маркировкой","cost":44800,"donate":0},
			"tors135":{"name":"Пиджак","desc":"Пиджак Henderson синего цвета с маркировкой","cost":44700,"donate":0},
			"tors136":{"name":"Пиджак","desc":"Пиджак Henderson синего цвета с калиграфией","cost":44600,"donate":0},
			"tors137":{"name":"Пиджак","desc":"Пиджак Henderson черного цвета с калиграфией","cost":44500,"donate":0},
			"tors138":{"name":"Пиджак","desc":"Пиджак Henderson белого цвета с калиграфией","cost":44400,"donate":0},
			"tors139":{"name":"Пиджак","desc":"Пиджак Henderson черного цвета с надписью Vinewood","cost":44300,"donate":0},
			"tors140":{"name":"Пиджак","desc":"Пиджак Henderson розового цвета с надписью Vinewood","cost":44200,"donate":0},
			"tors141":{"name":"Пиджак","desc":"Пиджак Henderson бежевого цвета с надписью Vinewood","cost":44100,"donate":0},
			"tors142":{"name":"Пиджак","desc":"Пиджак Henderson зеленого цвета в цветочек","cost":44000,"donate":0},
			"tors143":{"name":"Пиджак","desc":"Пиджак Henderson джинсового цвета в цветочек","cost":44100,"donate":0},
			"tors144":{"name":"Пиджак","desc":"Пиджак Henderson бежевого цвета в цветочек","cost":44200,"donate":0},
			"tors145":{"name":"Пиджак","desc":"Пиджак Henderson розового цвета в цветочек","cost":44300,"donate":0},
			"tors146":{"name":"Пиджак","desc":"Пиджак Henderson черного цвета с роспесью в цветок","cost":44400,"donate":0},
			"tors147":{"name":"Пиджак","desc":"Пиджак Henderson темно синего цвета с роспесью в цветок","cost":44500,"donate":0},
			"tors148":{"name":"Пиджак","desc":"Пиджак Henderson оранжевого цвета с роспесью в цветок","cost":44600,"donate":0},
			"tors149":{"name":"Пиджак","desc":"Пиджак Henderson Розового цвета с роспесью в цветок","cost":44700,"donate":0},
			"tors150":{"name":"Пиджак","desc":"Пиджак Henderson золотого цвета BROKER","cost":44800,"donate":0},
			"tors151":{"name":"Пиджак","desc":"Пиджак Gucci золотого цвета в роспись","cost":38100,"donate":0},
			"tors152":{"name":"Пиджак","desc":"Пиджак Gucci золотого цвета с оригинальным принтом","cost":38200,"donate":0},
			"tors153":{"name":"Пиджак","desc":"Пиджак Gucci красного цвета в полоску","cost":38300,"donate":0},
			"tors154":{"name":"Пиджак","desc":"Пиджак Gucci болотного цвета в клетку","cost":38400,"donate":0},
			"tors155":{"name":"Пиджак","desc":"Пиджак Gucci зеленого цвета","cost":38500,"donate":0},
			"tors156":{"name":"Пиджак","desc":"Пиджак Gucci черного цвета с оригинальным принтом","cost":38600,"donate":0},
			"tors157":{"name":"Пиджак","desc":"Пиджак Gucci зеленого цвета в клетку","cost":38700,"donate":0},
			"tors158":{"name":"Пиджак","desc":"Пиджак Gucci бежевого цвета","cost":38800,"donate":0},
			"tors159":{"name":"Пиджак","desc":"Пиджак Gucci черного цвета с ресунком улитки","cost":38900,"donate":0},
			"tors160":{"name":"Пиджак","desc":"Пиджак Gucci беледно розового цвета","cost":38800,"donate":0},
			"tors161":{"name":"Пиджак","desc":"Пиджак Gucci комуфляж","cost":38700,"donate":0},
			"tors162":{"name":"Пиджак","desc":"Пиджак Gucci красного цвета","cost":38600,"donate":0},
			"tors163":{"name":"Пиджак","desc":"Пиджак Gucci красного цвета в роспись","cost":38500,"donate":0},
			"tors164":{"name":"Пиджак","desc":"Пиджак Gucci золотого цвета в рисунок стали","cost":38400,"donate":0},
			"tors165":{"name":"Пиджак","desc":"Пиджак Gucci серого цвета в рисунок","cost":38300,"donate":0},
			"tors166":{"name":"Пиджак","desc":"Пиджак Gucci белого цвета","cost":38200,"donate":0},
			"tors167":{"name":"Пиджак","desc":"Пиджак Gucci синего цвета в рисунок","cost":38100,"donate":0},
			"tors168":{"name":"Пиджак","desc":"Пиджак Gucci желтого цвета в рисунок","cost":38000,"donate":0},
			"tors169":{"name":"Пиджак","desc":"Пиджак Gucci феолетового цвета в клетку","cost":38100,"donate":0},
			"tors170":{"name":"Пиджак","desc":"Пиджак Gucci серого цвета в золотой рисунок","cost":38200,"donate":0},
			"tors171":{"name":"Пиджак","desc":"Пиджак Gucci белого цвета в рисунок купюра","cost":38300,"donate":0},
			"tors172":{"name":"Пиджак","desc":"Пиджак Gucci красного цвета в рисунок Джокер","cost":38400,"donate":0},
			"tors173":{"name":"Пиджак","desc":"Пиджак Gucci серого цвета в рисунок Джокер","cost":38500,"donate":0},
			"tors174":{"name":"Пиджак","desc":"Пиджак Gucci голубого цвета в рисунок Джокер","cost":38600,"donate":0},
			"tors175":{"name":"Пиджак","desc":"Пиджак Gucci белого цвета в рисунок колода","cost":38700,"donate":0},
			"tors176":{"name":"Пиджак","desc":"Пиджак Gucci красного цвета в рисунок карта","cost":38800,"donate":0},
			"tors177":{"name":"Ветровка Adidas #1","desc":"Ветровка синего цвета в рисунок рекет","cost":32100,"donate":0},
			"tors178":{"name":"Ветровка Adidas #2","desc":"Ветровка желтого цвета в рисунок рекет","cost":32200,"donate":0},
			"tors179":{"name":"Ветровка Adidas #3","desc":"Ветровка черного цвета в рисунок рекет","cost":32300,"donate":0},
			"tors180":{"name":"Ветровка Adidas #4","desc":"Ветровка розового цвета в рисунок рекет","cost":32400,"donate":0},
			"tors181":{"name":"Ветровка Adidas #5","desc":"Ветровка темно синего цвета в рисунок рекет","cost":32500,"donate":0},
			"tors182":{"name":"Ветровка Adidas #6","desc":"Ветровка черного цвета с цветочками","cost":32600,"donate":0},
			"tors183":{"name":"Ветровка Adidas #7","desc":"Ветровка белого цвета с цветочками","cost":32700,"donate":0},
			"tors184":{"name":"Ветровка Adidas #8","desc":"Ветровка феолетового цвета с цветочками","cost":32800,"donate":0},
			"tors185":{"name":"Ветровка Adidas #9","desc":"Ветровка белого цвета с маркеровкой Broker","cost":32900,"donate":0},
			"tors186":{"name":"Ветровка Adidas #10","desc":"Ветровка зеленого цвета в росписе","cost":32800,"donate":0},
			"tors187":{"name":"Ветровка Adidas #11","desc":"Ветровка бежевого цвета в росписе","cost":32700,"donate":0},
			"tors188":{"name":"Ветровка Adidas #12","desc":"Ветровка феолетового цвета в росписе","cost":32600,"donate":0},
			"tors189":{"name":"Ветровка Adidas #13","desc":"Ветровка серого цвета в росписе","cost":32500,"donate":0},
			"tors190":{"name":"Ветровка Adidas #14","desc":"Ветровка бежевого цвета с надписью LECHIEN","cost":32400,"donate":0},
			"tors191":{"name":"Ветровка Adidas #15","desc":"Ветровка черного цвета с надписью LECHIEN","cost":32300,"donate":0},
			"tors192":{"name":"Ветровка Adidas #16","desc":"Ветровка красного цвета с надписью LECHIEN","cost":32200,"donate":0},
			"tors193":{"name":"Ветровка Adidas #17","desc":"Ветровка черного цвета с надписью LECHIEN и ромбами","cost":32100,"donate":0},
			"tors194":{"name":"Ветровка Adidas #18","desc":"Ветровка желтого цвета камуфляж с эмблемой B","cost":32000,"donate":0},
			"tors195":{"name":"Ветровка Adidas #19","desc":"Ветровка зеленого цвета камуфляж с эмблемой B","cost":32100,"donate":0},
			"tors196":{"name":"Ветровка Adidas #20","desc":"Ветровка темно зеленого цвета камуфляж с эмблемой B","cost":32200,"donate":0},
			"tors197":{"name":"Ветровка Adidas #21","desc":"Ветровка красного цвета камуфляж с эмблемой B","cost":32300,"donate":0},
			"tors198":{"name":"Ветровка Adidas #22","desc":"Ветровка серого цвета с эмблемой B","cost":32400,"donate":0},
			"tors199":{"name":"Ветровка Adidas #23","desc":"Ветровка черного цвета с эмблемой B","cost":32500,"donate":0},
			"tors200":{"name":"Ветровка Adidas #24","desc":"Ветровка красного цвета с эмблемой B","cost":32600,"donate":0},
			"tors201":{"name":"Ветровка Adidas #25","desc":"Ветровка бледно зеленого цвета с эмблемой B","cost":32700,"donate":0},
			"tors202":{"name":"Ветровка Adidas #26","desc":"Ветровка феолетового цвета с эмблемой B","cost":32800,"donate":0},
			"tors203":{"name":"Анарак Pull&Bear #1","desc":"Анарак черного цвета с феолетовым карманом и вставками","cost":26100,"donate":0},
			"tors204":{"name":"Анарак Pull&Bear #2","desc":"Анарак голубого цвета с желтым карманом и вставками","cost":26200,"donate":0},
			"tors205":{"name":"Анарак Pull&Bear #3","desc":"Анарак розового цвета с белым карманом и вставками","cost":26300,"donate":0},
			"tors206":{"name":"Анарак Pull&Bear #4","desc":"Анарак красного цвета с серым карманом и вставками","cost":26400,"donate":0},
			"tors207":{"name":"Анарак Pull&Bear #5","desc":"Анарак оранжевого цвета с черным карманом и вставками","cost":26500,"donate":0},
			"tors208":{"name":"Анарак Pull&Bear #6","desc":"Анарак камуфляж с оранжевым карманом и вставками","cost":26600,"donate":0},
			"tors209":{"name":"Анарак Pull&Bear #7","desc":"Анарак камуфляж город болотного цвета с оранжевым карманом и вставками","cost":26700,"donate":0},
			"tors210":{"name":"Анарак Pull&Bear #8","desc":"Анарак камуфляж город бледно розового цвета с оранжевым карманом и вставками","cost":26800,"donate":0},
			"tors211":{"name":"Анарак Pull&Bear #9","desc":"Анарак серого цвета в квадрат с оранжевым карманом и вставками","cost":26900,"donate":0},
			"tors212":{"name":"Анарак Pull&Bear #10","desc":"Анарак камуфляж","cost":26800,"donate":0},
			"tors213":{"name":"Анарак Pull&Bear #11","desc":"Анарак черного цвета с кремовым карманом и вставками","cost":26700,"donate":0},
			"tors214":{"name":"Анарак Pull&Bear #12","desc":"Анарак синего цвета с белым карманом и вставками эмблема В","cost":26600,"donate":0},
			"tors215":{"name":"Анарак Pull&Bear #13","desc":"Анарак серого цвета с черным карманом и вставками узор","cost":26500,"donate":0},
			"tors216":{"name":"Анарак Pull&Bear #14","desc":"Анарак феолетового цвета с белым карманом и вставками узор","cost":26400,"donate":0},
			"tors217":{"name":"Анарак Pull&Bear #15","desc":"Анарак желтого цвета с черным карманом и вставками узор","cost":26300,"donate":0},
			"tors218":{"name":"Анарак Pull&Bear #16","desc":"Анарак желтого цвета узор","cost":26200,"donate":0},
			"tors219":{"name":"Анарак Pull&Bear #17","desc":"Анарак черного цвета с имблемой G","cost":26100,"donate":0},
			"tors220":{"name":"Анарак Pull&Bear #18","desc":"Анарак феолетого цвета с имблемой G","cost":26000,"donate":0},
			"tors221":{"name":"Анарак Pull&Bear #19","desc":"Анарак красного цвета с имблемой G","cost":26100,"donate":0},
			"tors222":{"name":"Анарак Pull&Bear #20","desc":"Анарак красного цвета с феолетовым карманом и вставками FB98","cost":26200,"donate":0},
			"tors223":{"name":"Анарак Pull&Bear #21","desc":"Анарак зеленого цвета с бежевым карманом и вставками FB98","cost":26300,"donate":0},
			"tors224":{"name":"Анарак Pull&Bear #22","desc":"Анарак феолетого цвета с бежевым карманом и вставками FB98","cost":26400,"donate":0},
			"tors225":{"name":"Анарак Pull&Bear #23","desc":"Анарак серого цвета с леопардовым карманом и вставками B","cost":26500,"donate":0},
			"tors226":{"name":"Анарак Pull&Bear #24","desc":"Анарак серого цвета с салатовым карманом и вставками B","cost":26600,"donate":0},
			"tors227":{"name":"Анарак Pull&Bear #25","desc":"Анарак бледно розового цвета с бежевым карманом и вставками B","cost":26700,"donate":0},
			"tors228":{"name":"Анарак Pull&Bear #26","desc":"Анарак розового цвета с зеленым карманом и вставками B","cost":26800,"donate":0},
			"tors229":{"name":"Балахон Calvin Klein #1","desc":"Балахон белого цвета с калокольчиком","cost":25100,"donate":0},
			"tors230":{"name":"Балахон Calvin Klein #2","desc":"Балахон синего цвета с принтом TACO","cost":25200,"donate":0},
			"tors231":{"name":"Балахон Calvin Klein #3","desc":"Балахон оранжевого цвета с принтом CHIKEN","cost":25300,"donate":0},
			"tors232":{"name":"Балахон Calvin Klein #4","desc":"Балахон белого цвета с принтом","cost":25400,"donate":0},
			"tors233":{"name":"Балахон Calvin Klein #5","desc":"Балахон белого цвета с принтом pivasik","cost":25500,"donate":0},
			"tors234":{"name":"Балахон Calvin Klein #6","desc":"Балахон красного цвета с принтом burger","cost":25600,"donate":0},
			"tors235":{"name":"Балахон Calvin Klein #7","desc":"Балахон красного цвета с принтом hot-dog","cost":25700,"donate":0},
			"tors236":{"name":"Балахон Calvin Klein #8","desc":"Балахон красного цвета с принтом Пончик","cost":25800,"donate":0},
			"tors237":{"name":"Балахон Calvin Klein #9","desc":"Балахон белого цвета с принтом петух","cost":25900,"donate":0},
			"tors238":{"name":"Балахон Calvin Klein #10","desc":"Балахон зеленого цвета с принтом Logger","cost":25800,"donate":0},
			"tors239":{"name":"Балахон Calvin Klein #11","desc":"Балахон красного цвета с принтом pizza","cost":25700,"donate":0},
			"tors240":{"name":"Балахон Calvin Klein #12","desc":"Балахон красного цвета с принтом Картофиль фри","cost":25600,"donate":0},
			"tors241":{"name":"Балахон Calvin Klein #13","desc":"Балахон белого цвета с принтом грибы","cost":25500,"donate":0},
			"tors242":{"name":"Балахон Calvin Klein #14","desc":"Балахон красного цвета с принтом Сигареты","cost":25400,"donate":0},
			"tors243":{"name":"Балахон Calvin Klein #15","desc":"Балахон серого цвета с принтом COVID 19","cost":25300,"donate":0},
			"tors244":{"name":"Балахон Calvin Klein #16","desc":"Балахон белого цвета с принтом CHIKEN","cost":25200,"donate":0},
			"tors245":{"name":"Балахон Calvin Klein #17","desc":"Балахон белого цвета с принтом Лимон","cost":25100,"donate":0},
			"tors246":{"name":"Балахон Calvin Klein #18","desc":"Балахон белого цвета с принтом Донер","cost":25000,"donate":0},
			"tors247":{"name":"Бомбер Mango #1","desc":"Бомбер с принтом","cost":22100,"donate":0},
			"tors248":{"name":"Бомбер Mango #2","desc":"Бомбер с принтом","cost":22200,"donate":0},
			"tors249":{"name":"Бомбер Mango #3","desc":"Бомбер с принтом","cost":22300,"donate":0},
			"tors250":{"name":"Бомбер Mango #4","desc":"Бомбер с принтом","cost":22400,"donate":0},
			"tors251":{"name":"Бомбер Mango #5","desc":"Бомбер с лого SN","cost":22500,"donate":0},
			"tors252":{"name":"Бомбер Mango #6","desc":"Бомбер с лого SN","cost":22600,"donate":0},
			"tors253":{"name":"Бомбер Mango #7","desc":"Бомбер с лого SN","cost":22700,"donate":0},
			"tors254":{"name":"Бомбер Mango #8","desc":"Бомбер с лого SN","cost":22800,"donate":0},
			"tors255":{"name":"Бомбер Mango #9","desc":"Бомбер с лого BIGNESS","cost":22900,"donate":0},
			"tors256":{"name":"Бомбер Mango #10","desc":"Бомбер с лого BIGNESS","cost":22800,"donate":0},
			"tors257":{"name":"Бомбер Mango #11","desc":"Бомбер с лого BIGNESS","cost":22700,"donate":0},
			"tors258":{"name":"Бомбер Mango #12","desc":"Бомбер с лого BIGNESS","cost":22600,"donate":0},
			"tors259":{"name":"Бомбер Mango #13","desc":"Бомбер зеленого цвета","cost":22500,"donate":0},
			"tors260":{"name":"Бомбер Mango #14","desc":"Бомбер оранжевого цвета","cost":22400,"donate":0},
			"tors261":{"name":"Бомбер Mango #15","desc":"Бомбер феолетового цвета","cost":22300,"donate":0},
			"tors262":{"name":"Бомбер Mango #16","desc":"Бомбер розового цвета","cost":22200,"donate":0},
			"tors263":{"name":"Пуховик Nike #1","desc":"Куртка красная градиент","cost":21100,"donate":0},
			"tors264":{"name":"Пуховик Nike #2","desc":"Куртка голубая градиент","cost":21200,"donate":0},
			"tors265":{"name":"Пуховик Nike #3","desc":"Куртка серая градиент","cost":21300,"donate":0},
			"tors266":{"name":"Пуховик Nike #4","desc":"Куртка желтая градиент","cost":21400,"donate":0},
			"tors267":{"name":"Пуховик Nike #5","desc":"Куртка зеленая градиент","cost":21500,"donate":0},
			"tors268":{"name":"Пуховик Nike #6","desc":"Куртка феолетовая градиент","cost":21600,"donate":0},
			"tors269":{"name":"Пуховик Nike #7","desc":"Куртка зеленая с каплями","cost":21700,"donate":0},
			"tors270":{"name":"Пуховик Nike #8","desc":"Куртка бежевая с каплями","cost":21800,"donate":0},
			"tors271":{"name":"Пуховик Nike #9","desc":"Куртка берюзовая с каплями","cost":21900,"donate":0},
			"tors272":{"name":"Пуховик Nike #10","desc":"Куртка розовая с каплями","cost":21800,"donate":0},
			"tors273":{"name":"Пуховик Nike #11","desc":"Куртка оранжевая с кляксой","cost":21700,"donate":0},
			"tors274":{"name":"Пуховик Nike #12","desc":"Куртка голубая с кляксой","cost":21600,"donate":0},
			"tors275":{"name":"Пуховик Nike #13","desc":"Куртка черная с кляксой","cost":21500,"donate":0},
			"tors276":{"name":"Пуховик Nike #14","desc":"Куртка темно синяя с кляксой","cost":21400,"donate":0},
			"tors277":{"name":"Пуховик Nike #15","desc":"Куртка черная BIGNESS","cost":21300,"donate":0},
			"tors278":{"name":"Пуховик Nike #16","desc":"Куртка белая BIGNESS","cost":21200,"donate":0},
			"tors279":{"name":"Анарак Anteater #1","desc":"Анарак зеленого цвета","cost":19100,"donate":0},
			"tors280":{"name":"Анарак Anteater #2","desc":"Анарак черного цвета","cost":19200,"donate":0},
			"tors281":{"name":"Анарак Anteater #3","desc":"Анарак светло серого цвета","cost":19300,"donate":0},
			"tors282":{"name":"Анарак Anteater #4","desc":"Анарак темно серого цвета","cost":19400,"donate":0},
			"tors283":{"name":"Анарак Anteater #5","desc":"Анарак серого цвета","cost":19500,"donate":0},
			"tors284":{"name":"Анарак Anteater #6","desc":"Анарак коричнего цвета","cost":19600,"donate":0},
			"tors285":{"name":"Анарак Anteater #7","desc":"Анарак кирпичного цвета","cost":19700,"donate":0},
			"tors286":{"name":"Анарак Anteater #8","desc":"Анарак кирпичного цвета","cost":19800,"donate":0},
			"tors287":{"name":"Анарак Anteater #9","desc":"Анарак кирпичного цвета","cost":19900,"donate":0},
			"tors288":{"name":"Анарак Anteater #10","desc":"Анарак голубого цвета камуфляж","cost":19800,"donate":0},
			"tors289":{"name":"Анарак Anteater #11","desc":"Анарак голубого цвета камуфляж","cost":19700,"donate":0},
			"tors290":{"name":"Анарак Anteater #12","desc":"Анарак красного цвета камуфляж","cost":19600,"donate":0},
			"tors291":{"name":"Анарак Anteater #13","desc":"Анарак серого цвета камуфляж","cost":19500,"donate":0},
			"tors292":{"name":"Анарак Anteater #14","desc":"Анарак серого цвета с коричнивыми вставками","cost":19400,"donate":0},
			"tors293":{"name":"Анарак Anteater #15","desc":"Анарак серого цвета с черными вставками","cost":19300,"donate":0},
			"tors294":{"name":"Анарак Anteater #16","desc":"Анарак бледно голубого цвета с черными вставками","cost":19200,"donate":0},
			"tors295":{"name":"Анарак Anteater #17","desc":"Анарак серого цвета с оранжевыми вставками","cost":19100,"donate":0},
			"tors296":{"name":"Анарак Anteater #18","desc":"Анарак серого цвета с красными вставками","cost":19000,"donate":0},
			"tors297":{"name":"Анарак Anteater #19","desc":"Анарак зеленого цвета с коричнивыми вставками","cost":19100,"donate":0},
			"tors298":{"name":"Анарак Anteater #20","desc":"Анарак джинсого цвета с серыми вставками","cost":19200,"donate":0},
			"tors299":{"name":"Анарак Anteater #21","desc":"Анарак камуфляж военный","cost":19300,"donate":0},
			"tors300":{"name":"Анарак Anteater #22","desc":"Анарак камуфляж городской","cost":19400,"donate":0},
			"tors301":{"name":"Анарак Anteater #23","desc":"Анарак серого цвета с белыми и красными вставками","cost":19500,"donate":0},
			"tors302":{"name":"Анарак Anteater #24","desc":"Анарак серого цвета с черными и красными вставками","cost":19600,"donate":0},
			"tors303":{"name":"Анарак Anteater #25","desc":"Анарак серого цвета с черными и синими вставками","cost":19700,"donate":0},
			"tors304":{"name":"Анарак Anteater #26","desc":"Анарак серого цвета с черными вставками","cost":19800,"donate":0},
			"tors305":{"name":"Футболка SMOTRA #1","desc":"Фирменная футболка SMOTRA чёрного цвета с белыми молниями","cost":0,"donate":250},
			"tors306":{"name":"Футболка SMOTRA #2","desc":"Фирменная футболка SMOTRA белого цвета с чёрными молниями","cost":0,"donate":250},
			"tors307":{"name":"Ветровка SMOTRA #1","desc":"Фирменная ветровка SMOTRA чёрного цвета с белыми молниями","cost":0,"donate":300},
			"tors308":{"name":"Ветровка SMOTRA #2","desc":"Фирменная ветровка SMOTRA белого цвета с чёрными молниями","cost":0,"donate":300},
			"tors309":{"name":"Толстовка SMOTRA #1","desc":"Фирменная толстовка SMOTRA чёрного цвета с белыми молниями","cost":0,"donate":280},
			"tors310":{"name":"Толстовка SMOTRA #2","desc":"Фирменная толстовка SMOTRA чёрного цвета с надписью","cost":0,"donate":280},
			"tors311":{"name":"Толстовка SMOTRA #3","desc":"Фирменная толстовка SMOTRA белого цвета с чёрными молниями","cost":0,"donate":280},
			"tors312":{"name":"Толстовка SMOTRA #4","desc":"Фирменная толстовка SMOTRA белого цвета с надписью","cost":0,"donate":280},
			"tors313":{"name":"Толстовка SMOTRA #5","desc":"Фирменная толстовка SMOTRA чёрного цвета с лого","cost":0,"donate":280},
			"tors314":{"name":"Толстовка TNF #1","desc":"Толстовка от The Nord Face цвета капучино","cost":0,"donate":310},
			"tors315":{"name":"Толстовка TNF #2","desc":"Толстовка от The Nord Face армейский камуфляж","cost":0,"donate":320},
			"tors316":{"name":"Толстовка TNF #3","desc":"Толстовка от The Nord Face красный камуфляж","cost":0,"donate":320},
			"tors317":{"name":"Футболка GUCCI #1","desc":"Эксклювная футболка от Gucci со змеёй","cost":0,"donate":190},
			"tors318":{"name":"Футболка GUCCI #2","desc":"Эксклювная футболка от Gucci с тигром","cost":0,"donate":190},
			"tors319":{"name":"Футболка GUCCI #3","desc":"Эксклювная футболка от Gucci со змеёй Supreme","cost":0,"donate":190},
			"tors320":{"name":"Футболка GUCCI #4","desc":"Эксклювная футболка от Off White кляксы","cost":0,"donate":190},
			"tors321":{"name":"Ветровка Gucci #1","desc":"Фирменная ветровка от Gucci цвет: Black and Yellow","cost":0,"donate":280},
			"tors322":{"name":"Ветровка Gucci #2","desc":"Фирменная ветровка от Gucci цвет: Blue","cost":0,"donate":280},
			"tors323":{"name":"Ветровка Gucci #3","desc":"Фирменная ветровка от Gucci цвет: Black and Gucci","cost":0,"donate":280},
			"tors324":{"name":"Ветровка Gucci #4","desc":"Фирменная ветровка от Gucci цвет: Crema and Gucci","cost":0,"donate":280},
			"tors325":{"name":"Кожанная ветровка","desc":"Качественная натуральная кожанная ветровка","cost":170000,"donate":0},
			"tors326":{"name":"Ветровка Gucci #1","desc":"Эксклювная ветровка от Gucci с тигром Cappucino","cost":0,"donate":310},
			"tors327":{"name":"Ветровка Gucci #2","desc":"Эксклювная ветровка от Gucci с тигром White","cost":0,"donate":310},
			"tors328":{"name":"Ветровка Gucci #3","desc":"Эксклювная ветровка от Gucci с пчелой Cappucino","cost":0,"donate":310},
			"tors329":{"name":"Ветровка Gucci #4","desc":"Эксклювная ветровка от Gucci с пчелой White","cost":0,"donate":310},
			"tors330":{"name":"Водолазка TH #1","desc":"Эксклювная водолазка от Tommy Hilfiger","cost":0,"donate":230},
			"tors331":{"name":"Кофта Nike #1","desc":"Кофта Nike Black текстура 1","cost":140000,"donate":0},
			"tors332":{"name":"Кофта Nike #2","desc":"Кофта Nike Black текстура 2","cost":150000,"donate":0},
			"tors333":{"name":"Кофта Off-White #1","desc":"Кофта Off-White Black","cost":190000,"donate":0},
			"tors334":{"name":"Кофта Supreme #1","desc":"Кофта Supreme Red","cost":220000,"donate":0},
			"tors335":{"name":"Кофта Supreme #2","desc":"Кофта Supreme Green","cost":220000,"donate":0},
			"tors336":{"name":"Кофта Supreme #3","desc":"Кофта Supreme Blue","cost":220000,"donate":0},
			"tors337":{"name":"Кофта Supreme #4","desc":"Кофта Supreme Orange","cost":220000,"donate":0},
			"tors338":{"name":"Кофта Supreme #5","desc":"Кофта Supreme Black","cost":220000,"donate":0},
			"tors339":{"name":"Кофта Supreme #6","desc":"Кофта Supreme White&Blue","cost":220000,"donate":0},
			"tors340":{"name":"Худи BALENCIAGA #1","desc":"Фулл эксклюзивное худи от BALENCIAGA Black&White","cost":0,"donate":450},
			"tors341":{"name":"Худи BALENCIAGA #2","desc":"Фулл эксклюзивное худи от BALENCIAGA White&Black","cost":0,"donate":450},
			"tors342":{"name":"Худи BALENCIAGA #3","desc":"Фулл эксклюзивное худи от BALENCIAGA RED&White","cost":0,"donate":450},
			"tors343":{"name":"Худи BALENCIAGA #4","desc":"Фулл эксклюзивное худи от BALENCIAGA BLUE&White","cost":0,"donate":450},
			"tors344":{"name":"Худи BALENCIAGA #5","desc":"Фулл эксклюзивное худи от BALENCIAGA CREAM&White","cost":0,"donate":450},
			"tors345":{"name":"Футболка Gucci #1","desc":"Эксклюзивная футболка от Gucci с тигром","cost":0,"donate":145},
			"tors346":{"name":"Футболка Gucci #2","desc":"Эксклюзивная футболка от Gucci с пчелой","cost":0,"donate":145},
			"tors347":{"name":"Футболка Gucci #3","desc":"Эксклюзивная футболка от Gucci оригинальный логотип","cost":0,"donate":145},
			"tors348":{"name":"Толстовка LV #1","desc":"Эксклюзивная толстовка от Louis Vuitton RED Supreme edition","cost":0,"donate":345},
			"tors349":{"name":"Толстовка LV #2","desc":"Эксклюзивная толстовка от Louis Vuitton Original Supreme edition","cost":0,"donate":345},
			"tors350":{"name":"Куртка LV #1","desc":"Эксклюзивная куртка от Louis Vuitton Original","cost":0,"donate":400},
			"tors351":{"name":"Куртка LV #2","desc":"Эксклюзивная куртка от Louis Vuitton Crema","cost":0,"donate":400},
			"tors352":{"name":"Куртка LV #3","desc":"Эксклюзивная куртка от Louis Vuitton Gray","cost":0,"donate":400},
			"tors353":{"name":"Куртка LV #4","desc":"Эксклюзивная куртка от Louis Vuitton Red","cost":0,"donate":400},
			"tors354":{"name":"Кожанная куртка","desc":"Качественная натуральная кожанная куртка","cost":190000,"donate":0},
			"tors355":{"name":"Футболка Nike","desc":"Футболка Nike Footbal edition","cost":120000,"donate":0},
			"tors356":{"name":"Толстовка Adidas #1","desc":"Толстовка Adidas Original","cost":175000,"donate":0},
			"tors357":{"name":"Толстовка TRASHER #1","desc":"Толстовка TRASHER Magazine Black","cost":225000,"donate":0},
			"tors358":{"name":"Толстовка TRASHER #2","desc":"Толстовка TRASHER Magazine White","cost":225000,"donate":0},
			"tors359":{"name":"Толстовка Champion #1","desc":"Толстовка Champion Black","cost":205000,"donate":0},
			"tors360":{"name":"Толстовка TNF #1","desc":"Толстовка The Nord Face Black","cost":0,"donate":270},
			"tors361":{"name":"Футболка PRL #1","desc":"Эксклюзивная футболка от Polo Ralph Lauren Original","cost":0,"donate":320},
			"tors362":{"name":"Футболка PRL #2","desc":"Эксклюзивная футболка от Polo Ralph Lauren Yellow","cost":0,"donate":320},
			"tors363":{"name":"Футболка PRL #3","desc":"Эксклюзивная футболка от Polo Ralph Lauren Pink","cost":0,"donate":320},
			"tors364":{"name":"Водолазка Adidas #1","desc":"Водолазка от Adidas Black","cost":180000,"donate":0},
			"tors365":{"name":"Водолазка Adidas #2","desc":"Водолазка от Adidas White","cost":180000,"donate":0},
			"tors366":{"name":"Водолазка Adidas #3","desc":"Водолазка от Adidas RED","cost":180000,"donate":0},
			"tors367":{"name":"Водолазка Adidas #4","desc":"Водолазка от Adidas BLUE","cost":180000,"donate":0},
			"tors368":{"name":"Водолазка Adidas #5","desc":"Водолазка от Adidas GREEN","cost":180000,"donate":0},
			"tors369":{"name":"Футболка Heart #1","desc":"Футболка с сердечками белая","cost":140000,"donate":0},
			"tors370":{"name":"Футболка Heart #2","desc":"Футболка с сердечками белая камуфляж","cost":140000,"donate":0},
			"tors371":{"name":"Футболка Heart #3","desc":"Футболка с сердечками белая с голубым","cost":140000,"donate":0},
			"tors372":{"name":"Футболка ASC #1","desc":"Футболка Anti Social Club Black Tatto","cost":165000,"donate":0},
			"tors373":{"name":"Футболка ASC #2","desc":"Футболка Anti Social Club Japan Car","cost":165000,"donate":0},
			"tors374":{"name":"Футболка ASC #3","desc":"Футболка Anti Social Club White","cost":165000,"donate":0},
			"tors375":{"name":"Футболка ASC #4","desc":"Футболка Anti Social Club Black&Text","cost":165000,"donate":0},
			"tors376":{"name":"Футболка ASC #5","desc":"Футболка Anti Social Club Blue","cost":165000,"donate":0},
			"tors377":{"name":"Футболка ASC #6","desc":"Футболка Anti Social Club Red","cost":165000,"donate":0},
			"tors378":{"name":"Футболка Gucci #4","desc":"Эксклюзивная футболка от Gucci мульти-лого Black","cost":0,"donate":150},
			"tors379":{"name":"Футболка Gucci #5","desc":"Эксклюзивная футболка от Gucci мульти-лого White","cost":0,"donate":150},
			"tors380":{"name":"Кофта LaCoste #1","desc":"Кофта от LaCoste капучино","cost":195000,"donate":0},
			"tors381":{"name":"Кофта LaCoste #2","desc":"Кофта от LaCoste кремовая","cost":195000,"donate":0},
			"tors382":{"name":"Кофта LaCoste #3","desc":"Кофта от LaCoste голубая","cost":195000,"donate":0},
			"tors383":{"name":"Кофта LaCoste #4","desc":"Кофта от LaCoste красная","cost":195000,"donate":0},
			"tors384":{"name":"Кофта LaCoste #5","desc":"Кофта от LaCoste жёлтая","cost":195000,"donate":0},
			"tors385":{"name":"Кофта Armani","desc":"Кофта от Armani тёмно-зелёная","cost":220000,"donate":0},
			"tors386":{"name":"Толстовка ASC #1","desc":"Толстовка Anti Social Club Black","cost":180000,"donate":0},
			"tors387":{"name":"Толстовка TRASHER #3","desc":"Толстовка TRASHER Black Fire","cost":210000,"donate":0},
			"tors388":{"name":"Толстовка TRASHER #4","desc":"Толстовка TRASHER Army","cost":160000,"donate":0},
			"tors389":{"name":"Куртка TNF #1","desc":"Эксклюзивная утеплённая куртка The Nord Face Black","cost":0,"donate":560},
			"tors390":{"name":"Куртка TNF #2","desc":"Эксклюзивная утеплённая куртка The Nord Face Yellow","cost":0,"donate":560},
			"tors391":{"name":"Куртка TNF #3","desc":"Эксклюзивная утеплённая куртка The Nord Face Blue","cost":0,"donate":560},
			"tors392":{"name":"Куртка TNF #4","desc":"Эксклюзивная утеплённая куртка The Nord Face Orange","cost":0,"donate":560},
			"tors393":{"name":"Куртка TNF #5","desc":"Эксклюзивная утеплённая куртка The Nord Face FullBlack","cost":0,"donate":560},
			"tors394":{"name":"Куртка BMW #1","desc":"Эксклюзивная куртка BMW Motorsport","cost":0,"donate":350},
			"tors395":{"name":"Классич. кожанка","desc":"Классическая бандитская кожанка","cost":0,"donate":250},
			"tors396":{"name":"Кофта BMW #1","desc":"Эксклюзивная кофта BMW M","cost":0,"donate":310},
			"tors397":{"name":"Водолазка BMW #1","desc":"Эксклюзивная водолазка BMW M","cost":0,"donate":285},
			"tors398":{"name":"Футболка BMW #1","desc":"Эксклюзивная футболка BMW Motorsport","cost":0,"donate":205},
			"tors399":{"name":"Футболка BMW #2","desc":"Эксклюзивная футболка BMW Motorsport","cost":0,"donate":205},
			"tors400":{"name":"Футболка LV #1","desc":"Эксклюзивная футболка Louis Vuitton Bart Simpson Black","cost":0,"donate":325},
			"tors401":{"name":"Футболка LV #2","desc":"Эксклюзивная футболка Louis Vuitton Bart Simpson White","cost":0,"donate":325},
			"tors402":{"name":"Футболка LV #3","desc":"Эксклюзивная футболка Louis Vuitton Bart Simpson White","cost":0,"donate":325},
			"tors403":{"name":"Футболка LV #4","desc":"Эксклюзивная футболка Louis Vuitton Donut","cost":0,"donate":325},
			"tors404":{"name":"Футболка LV #5","desc":"Эксклюзивная футболка Louis Vuitton Bart Simpson Supreme","cost":0,"donate":325},
			"tors405":{"name":"Кофта LV #1","desc":"Эксклюзивная кофта Louis Vuitton Supreme Black","cost":0,"donate":350},
			"tors406":{"name":"Кофта LV #2","desc":"Эксклюзивная кофта Louis Vuitton Supreme Black","cost":0,"donate":350},
			"tors407":{"name":"Кофта LV #3","desc":"Эксклюзивная кофта Louis Vuitton Supreme Black","cost":0,"donate":350},
			"tors408":{"name":"Кофта LV #4","desc":"Эксклюзивная кофта Louis Vuitton Supreme Black","cost":0,"donate":350},
			"tors409":{"name":"Кофта LV #5","desc":"Эксклюзивная кофта Louis Vuitton Supreme Red","cost":0,"donate":350},
			"tors410":{"name":"Кофта LV #6","desc":"Эксклюзивная кофта Louis Vuitton Supreme Red","cost":0,"donate":350},
			"tors411":{"name":"Кофта LV #7","desc":"Эксклюзивная кофта Louis Vuitton Supreme Red","cost":0,"donate":350},
			"tors412":{"name":"Кофта LV #8","desc":"Эксклюзивная кофта Louis Vuitton Supreme Red","cost":0,"donate":350},
			"tors413":{"name":"Кофта LV #9","desc":"Эксклюзивная кофта Louis Vuitton Supreme Red","cost":0,"donate":350},
			"tors414":{"name":"Водолазка LV #1","desc":"Эксклюзивная водолазка Louis Vuitton Supreme Black&Red","cost":0,"donate":325},
			"tors415":{"name":"Водолазка LV #2","desc":"Эксклюзивная водолазка Louis Vuitton Supreme White&Red","cost":0,"donate":325},
			"tors416":{"name":"Водолазка LV #3","desc":"Эксклюзивная водолазка Louis Vuitton Supreme Blue&White","cost":0,"donate":325},
			"tors417":{"name":"Водолазка LV #4","desc":"Эксклюзивная водолазка Louis Vuitton Supreme Original","cost":0,"donate":325},
			"tors418":{"name":"Водолазка LV #5","desc":"Эксклюзивная водолазка Louis Vuitton Supreme Black&White","cost":0,"donate":325},
			"tors419":{"name":"Футболка LV #1","desc":"Эксклюзивная футболка Louis Vuitton Supreme Black","cost":0,"donate":265},
			"tors420":{"name":"Футболка LV #2","desc":"Эксклюзивная футболка Louis Vuitton Supreme Red","cost":0,"donate":265},
			"tors421":{"name":"Футболка LV #3","desc":"Эксклюзивная футболка Louis Vuitton Supreme Red","cost":0,"donate":265},
			"tors422":{"name":"Футболка LV #4","desc":"Эксклюзивная футболка Louis Vuitton Supreme Black","cost":0,"donate":265},
			"tors423":{"name":"Футболка LV #5","desc":"Эксклюзивная футболка Louis Vuitton Supreme Black","cost":0,"donate":265},
			"tors424":{"name":"Футболка Off-White #1","desc":"Эксклюзивная футболка Off-White белая","cost":0,"donate":265},
			"tors425":{"name":"Футболка Off-White #2","desc":"Эксклюзивная футболка Off-White чёрная","cost":0,"donate":265},
			"tors428":{"name":"Кофта Supreme #1","desc":"Кофта Supreme Bart Simpson White","cost":0,"donate":205},
			"tors429":{"name":"Кофта Supreme #2","desc":"Кофта Supreme Bart Simpson Black","cost":0,"donate":205},
			"tors430":{"name":"Кофта Supreme #3","desc":"Кофта Supreme Bart Simpson Blue","cost":0,"donate":205},
			"tors431":{"name":"Кофта Supreme #4","desc":"Кофта Supreme Bart Simpson Black","cost":0,"donate":205},
			"tors432":{"name":"Кофта Supreme #5","desc":"Кофта Supreme Bart Simpson Red","cost":0,"donate":205},
			"tors433":{"name":"Водолазка Supreme #1","desc":"Водолазка Supreme Bart Simpson White","cost":0,"donate":205},
			"tors434":{"name":"Водолазка Supreme #2","desc":"Водолазка Supreme Bart Simpson White","cost":0,"donate":205},
			"tors435":{"name":"Парка FENDI #1","desc":"Эксклюзивная парка от FENDI Black Edition","cost":0,"donate":530},
			"tors436":{"name":"Парка FENDI #2","desc":"Эксклюзивная парка от FENDI White Edition","cost":0,"donate":530},
			"tors437":{"name":"Парка Vetements #1","desc":"Эксклюзивная парка от Vetements Limited Edition","cost":0,"donate":460},
			"tors438":{"name":"Парка Vetements #2","desc":"Эксклюзивная парка от Vetements A","cost":0,"donate":460},
			"tors439":{"name":"Кофта FENDI #1","desc":"Эксклюзивная кофта от FENDI Black Edition","cost":0,"donate":375},
			"tors440":{"name":"Кофта FENDI #2","desc":"Эксклюзивная кофта от FENDI White Edition","cost":0,"donate":375},
			"tors441":{"name":"Кофта VETEMENTS #1","desc":"Эксклюзивная кофта от VETEMENTS Black Edition","cost":0,"donate":315},
			"tors442":{"name":"Кофта VETEMENTS #2","desc":"Эксклюзивная кофта от VETEMENTS White Edition","cost":0,"donate":315},
			"tors443":{"name":"Кофта OFF-White #1","desc":"Эксклюзивная кофта от OFF-White RED","cost":0,"donate":400},
			"tors444":{"name":"Кофта OFF-White #2","desc":"Эксклюзивная кофта от OFF-White WHITE AND PRINT","cost":0,"donate":400},
			"tors445":{"name":"Кофта OFF-White #3","desc":"Эксклюзивная кофта от OFF-White SKY","cost":0,"donate":400},
			"tors446":{"name":"Кофта OFF-White #4","desc":"Эксклюзивная кофта от OFF-White BLACK","cost":0,"donate":400},
			"tors447":{"name":"Кофта OFF-White #5","desc":"Эксклюзивная кофта от OFF-White WHITE","cost":0,"donate":400},
			"tors448":{"name":"Полиция МВД мл. лейт.","desc":"Верх МВД Полиции, с рукавами, мл. лейтенант","cost":10000,"donate":0},
			"tors449":{"name":"Полиция МВД лейт.","desc":"Верх МВД Полиции, с рукавами, лейтенант","cost":10000,"donate":0},
			"tors450":{"name":"Полиция МВД ст. лейт.","desc":"Верх МВД Полиции, с рукавами, ст. лейтенант","cost":10000,"donate":0},
			"tors451":{"name":"Полиция МВД капитан","desc":"Верх МВД Полиции, с рукавами, капитан","cost":10000,"donate":0},
			"tors452":{"name":"Полиция МВД ст. серж.","desc":"Верх МВД Полиции, с рукавами, ст. сержант","cost":10000,"donate":0},
			"tors453":{"name":"Полиция МВД мл. серж.","desc":"Верх МВД Полиции, с рукавами, мл. сержант","cost":10000,"donate":0},
			"tors454":{"name":"Полиция МВД серж.","desc":"Верх МВД Полиции, с рукавами, сержант","cost":10000,"donate":0},
			"tors455":{"name":"Полиция МВД мл. лейт.","desc":"Верх МВД Полиции, без рукавов, мл. лейтенант","cost":10000,"donate":0},
			"tors456":{"name":"Полиция МВД лейт.","desc":"Верх МВД Полиции, без рукавов, лейтенант","cost":10000,"donate":0},
			"tors457":{"name":"Полиция МВД ст. лейт.","desc":"Верх МВД Полиции, без рукавов, ст. лейтенант","cost":10000,"donate":0},
			"tors458":{"name":"Полиция МВД капитан","desc":"Верх МВД Полиции, без рукавов, капитан","cost":10000,"donate":0},
			"tors459":{"name":"Полиция МВД ст. серж.","desc":"Верх МВД Полиции, без рукавов, ст. сержант","cost":10000,"donate":0},
			"tors460":{"name":"Полиция МВД мл. серж.","desc":"Верх МВД Полиции, без рукавов, мл. сержант","cost":10000,"donate":0},
			"tors461":{"name":"Полиция МВД серж.","desc":"Верх МВД Полиции, без рукавов, сержант","cost":10000,"donate":0},
			"tors462":{"name":"Полиция ДПС лейт.","desc":"Верх ДПС Полиции, лейтенант","cost":10000,"donate":0},
			"tors463":{"name":"Полиция ДПС капитан","desc":"Верх ДПС Полиции, капитан","cost":10000,"donate":0},
			"tors464":{"name":"Куртка пожарника","desc":"Специальная огнеупорная куртка","cost":20000,"donate":0},
			"tors465":{"name":"Пальто De France #1","desc":"Пальто De France с серебрянными пуговицами","cost":165000,"donate":0},
			"tors466":{"name":"Пальто De France #2","desc":"Пальто De France синее с золотыми пуговицами и LV воротом","cost":170000,"donate":0},
			"tors467":{"name":"Пальто De France #3","desc":"Пальто De France чёрное с золотыми пуговицами и LV воротом","cost":170000,"donate":0},
			"tors468":{"name":"Пальто Gucci #1","desc":"Эксклюзивное пальто от Gucci в кремовом цвете","cost":195000,"donate":900},
			"tors469":{"name":"Пальто Gucci #2","desc":"Эксклюзивное пальто от Gucci в психоделическом цвете","cost":180000,"donate":850},
			"tors470":{"name":"Пуховик #1","desc":"Пуховик далматинец","cost":155000,"donate":0},
			"tors471":{"name":"Пуховик #2","desc":"Пуховик в клетку","cost":151000,"donate":0},
			"tors472":{"name":"Пуховик #3","desc":"Пуховик синий камуфляж","cost":152000,"donate":0},
			"tors473":{"name":"Пуховик #4","desc":"Пуховик серый (городской) камуфляж","cost":153000,"donate":0},
			"tors474":{"name":"Пуховик #5","desc":"Пуховик красный Armani","cost":185000,"donate":600},
			"tors475":{"name":"Пуховик #6","desc":"Пуховик оранжевый Armani","cost":175000,"donate":450},
			"tors476":{"name":"Пуховик #7","desc":"Пуховик серый Armani","cost":195000,"donate":700},
			"tors477":{"name":"Пуховик #8","desc":"Пуховик чёрный Stay Oldy (Dragon edition)","cost":167000,"donate":0},
			"tors478":{"name":"Пуховик #9","desc":"Пуховик красный Nike (collab Off White)","cost":192000,"donate":650},
			"tors479":{"name":"Пуховик #10","desc":"Пуховик красный Nike Air","cost":195000,"donate":500}
		},
		"pants":{
			"pants1":{"name":"Штаны","desc":"Штаны Adidas серые с белыми полосками","cost":40000,"donate":0},
			"pants2":{"name":"Джинсы","desc":"Джинсы Versace1: Темно-синие","cost":40000,"donate":0},
			"pants3":{"name":"Джинсы","desc":"Джинсы Versace2: Голубые","cost":40000,"donate":0},
			"pants4":{"name":"Джинсы","desc":"Джинсы Versace3: Бежевые","cost":40000,"donate":0},
			"pants5":{"name":"Джинсы","desc":"Джинсы Versace4: Светло-синие","cost":40000,"donate":0},
			"pants6":{"name":"Джинсы","desc":"Джинсы Versace5: Светло-серые","cost":40000,"donate":0},
			"pants7":{"name":"Джинсы","desc":"Джинсы Versace6: Светло-Голубые","cost":40000,"donate":0},
			"pants8":{"name":"Джинсы","desc":"Джинсы Versace7: Желтые","cost":40000,"donate":0},
			"pants9":{"name":"Джинсы","desc":"Джинсы Versace8: Синие","cost":40000,"donate":0},
			"pants10":{"name":"Джинсы","desc":"Джинсы Versace9: Ярко-черные","cost":40000,"donate":0},
			"pants11":{"name":"Джинсы","desc":"Джинсы Versace10: Светло-синие с дырками","cost":40000,"donate":0},
			"pants12":{"name":"Джинсы","desc":"Джинсы Versace11: Коричневые","cost":40000,"donate":0},
			"pants13":{"name":"Джинсы","desc":"Джинсы Versace12: Светло-черные","cost":40000,"donate":0},
			"pants14":{"name":"Джинсы","desc":"Джинсы Versace13: Бирюзовые","cost":40000,"donate":0},
			"pants15":{"name":"Джинсы","desc":"Джинсы Versace14: Серые","cost":40000,"donate":0},
			"pants16":{"name":"Джинсы","desc":"Джинсы Versace15: Винно-красные","cost":40000,"donate":0},
			"pants17":{"name":"Брюки","desc":"Брюки GUCCI16: Обтягивающие с узорами","cost":49000,"donate":0},
			"pants18":{"name":"Брюки","desc":"Брюки Armani17: Черные","cost":45000,"donate":0},
			"pants19":{"name":"Брюки","desc":"Брюки Armani18: Темно-синие","cost":45000,"donate":0},
			"pants20":{"name":"Брюки","desc":"Брюки Armani19: Синие","cost":45000,"donate":0},
			"pants21":{"name":"Брюки","desc":"Брюки Cortigiani20: Черные","cost":29999,"donate":0},
			"pants22":{"name":"Брюки","desc":"Брюки Cortigiani21: Черные с белой полоской","cost":29999,"donate":0},
			"pants23":{"name":"Брюки","desc":"Брюки Cortigiani22: Красные","cost":29999,"donate":0},
			"pants24":{"name":"Брюки","desc":"Брюки Cortigiani23: Серые","cost":29999,"donate":0},
			"pants25":{"name":"Брюки","desc":"Брюки Cortigiani24: Светло-зеленые","cost":29999,"donate":0},
			"pants26":{"name":"Брюки","desc":"Брюки Cortigiani25: Коричневые","cost":29999,"donate":0},
			"pants27":{"name":"Брюки","desc":"Брюки Cortigiani26: Светло-голубые","cost":29999,"donate":0},
			"pants28":{"name":"Брюки","desc":"Брюки Cortigiani27: Коричневые в клетку","cost":29999,"donate":0},
			"pants29":{"name":"Брюки","desc":"Брюки Cortigiani28: Темно-белые","cost":29999,"donate":0},
			"pants30":{"name":"Брюки","desc":"Брюки Cortigiani29: Фиолетовые","cost":29999,"donate":0},
			"pants31":{"name":"Брюки","desc":"Брюки Cortigiani30: Темно-синие","cost":29999,"donate":0},
			"pants32":{"name":"Брюки","desc":"Брюки Cortigiani31: Синие","cost":29999,"donate":0},
			"pants33":{"name":"Брюки","desc":"Брюки Cortigiani32: Леопардовые","cost":29999,"donate":0},
			"pants34":{"name":"Брюки","desc":"Брюки Cortigiani33: Синие в клетку","cost":29999,"donate":0},
			"pants35":{"name":"Брюки","desc":"Брюки Cortigiani34: Бежевые","cost":29999,"donate":0},
			"pants36":{"name":"Брюки","desc":"Брюки Cortigiani35: Черные с полоской","cost":29999,"donate":0},
			"pants37":{"name":"Шорты","desc":"Шорты Boss36: Светло-коричневые","cost":23000,"donate":0},
			"pants38":{"name":"Шорты","desc":"Шорты Boss37: Черные с разноцветной клеткой","cost":23000,"donate":0},
			"pants39":{"name":"Шорты","desc":"Шорты Boss38: Желтые","cost":23000,"donate":0},
			"pants40":{"name":"Шорты","desc":"Шорты Boss39: Серые с полосками","cost":23000,"donate":0},
			"pants41":{"name":"Шорты","desc":"Шорты Boss40: Светло-голубые","cost":23000,"donate":0},
			"pants42":{"name":"Шорты","desc":"Шорты Boss41: Белые в клетку","cost":23000,"donate":0},
			"pants43":{"name":"Шорты","desc":"Шорты Boss42: Светло-голубые","cost":23000,"donate":0},
			"pants44":{"name":"Шорты","desc":"Шорты Boss43: Черные с зеленой клеткой","cost":23000,"donate":0},
			"pants45":{"name":"Шорты","desc":"Шорты Boss44: Коричневые в клетку","cost":23000,"donate":0},
			"pants46":{"name":"Шорты","desc":"Шорты Boss45: Красные","cost":23000,"donate":0},
			"pants47":{"name":"Шорты","desc":"Шорты Boss46: Темно-зеленые","cost":23000,"donate":0},
			"pants48":{"name":"Джинсы","desc":"Джинсы Jacob Cohen47: Темно-синие","cost":31000,"donate":0},
			"pants49":{"name":"Джинсы","desc":"Джинсы Jacob Cohen48: Темно-черные","cost":31000,"donate":0},
			"pants50":{"name":"Джинсы","desc":"Джинсы Jacob Cohen49: Голубые","cost":31000,"donate":0},
			"pants51":{"name":"Джинсы","desc":"Джинсы Jacob Cohen50: Светло-серые","cost":31000,"donate":0},
			"pants52":{"name":"Джинсы","desc":"Джинсы Jacob Cohen51: Черные","cost":31000,"donate":0},
			"pants53":{"name":"Джинсы","desc":"Джинсы Jacob Cohen52: Светло-синие","cost":31000,"donate":0},
			"pants54":{"name":"Джинсы","desc":"Джинсы Jacob Cohen53: Светло-черные","cost":31000,"donate":0},
			"pants55":{"name":"Джинсы","desc":"Джинсы Jacob Cohen54: Светло-голубые","cost":31000,"donate":0},
			"pants56":{"name":"Джинсы","desc":"Джинсы Jacob Cohen55: Светло-серые","cost":31000,"donate":0},
			"pants57":{"name":"Джинсы","desc":"Джинсы Jacob Cohen56: Черные","cost":31000,"donate":0},
			"pants58":{"name":"Брюки","desc":"Брюки C.P. Company57: Темно-бежевые","cost":28700,"donate":0},
			"pants59":{"name":"Брюки","desc":"Брюки C.P. Company58: Зеленоватые","cost":28700,"donate":0},
			"pants60":{"name":"Шорты","desc":"Шорты Calvin Klein59: Синие с узором","cost":18000,"donate":0},
			"pants61":{"name":"Шорты","desc":"Шорты Calvin Klein60: Черные с надписями","cost":18000,"donate":0},
			"pants62":{"name":"Шорты","desc":"Шорты Calvin Klein61: Желтые с логотипами","cost":18000,"donate":0},
			"pants63":{"name":"Шорты","desc":"Шорты Calvin Klein62: Мятно-коричневые","cost":18000,"donate":0},
			"pants64":{"name":"Шорты","desc":"Шорты Calvin Klein63: Белые с оранжевым цветком","cost":18000,"donate":0},
			"pants65":{"name":"Шорты","desc":"Шорты Calvin Klein64: Черные с голубым цветком","cost":18000,"donate":0},
			"pants66":{"name":"Шорты","desc":"Шорты Calvin Klein65: Желтые с рисунком","cost":18000,"donate":0},
			"pants67":{"name":"Легинсы","desc":"Легинсы Under Armour66: Красные","cost":12000,"donate":0},
			"pants68":{"name":"Легинсы","desc":"Легинсы Under Armour67: Красно-белые","cost":12000,"donate":0},
			"pants69":{"name":"Легинсы","desc":"Легинсы Under Armour68: Черные с белыми оленями","cost":4500,"donate":0},
			"pants70":{"name":"Легинсы","desc":"Легинсы Under Armour69: Синие новогодние","cost":12000,"donate":0},
			"pants71":{"name":"Штаны","desc":"Штаны BALENCIAGA70: Зеленые с цветком","cost":34000,"donate":0},
			"pants72":{"name":"Штаны","desc":"Штаны BALENCIAGA71: Белые с зеленым цветком","cost":34000,"donate":0},
			"pants73":{"name":"Штаны","desc":"Штаны BALENCIAGA72: Белые с красным цветком","cost":34000,"donate":0},
			"pants74":{"name":"Штаны","desc":"Штаны BALENCIAGA73: Белые с мятным узором","cost":34000,"donate":0},
			"pants75":{"name":"Штаны","desc":"Штаны BALENCIAGA74: Синие с зеленым узором","cost":34000,"donate":0},
			"pants76":{"name":"Штаны","desc":"Штаны BALENCIAGA75: С светлым камуфляжем","cost":34000,"donate":0},
			"pants77":{"name":"Штаны","desc":"Штаны BALENCIAGA76: С оранжевым камуфляжем","cost":34000,"donate":0},
			"pants78":{"name":"Штаны","desc":"Штаны BALENCIAGA77: С фиолетовым камуфляжем","cost":34000,"donate":0},
			"pants79":{"name":"Штаны","desc":"Штаны BALENCIAGA78: С оранжево-белым камуфляжем","cost":34000,"donate":0},
			"pants80":{"name":"Штаны","desc":"Штаны BALENCIAGA79: С черно-зеленым камуфляжем","cost":34000,"donate":0},
			"pants81":{"name":"Штаны","desc":"Штаны BALENCIAGA80: С голубым узором","cost":34000,"donate":0},
			"pants82":{"name":"Штаны","desc":"Штаны BALENCIAGA81: С ярко-красным узором","cost":34000,"donate":0},
			"pants83":{"name":"Штаны","desc":"Штаны BALENCIAGA82: Тигровые","cost":34000,"donate":0},
			"pants84":{"name":"Штаны","desc":"Штаны BALENCIAGA83: Леопардовые зеленые","cost":34000,"donate":0},
			"pants85":{"name":"Спортивки SMOTRA #1","desc":"Чёрные спортивные штаны, официальный мерч SMOTRA","cost":0,"donate":300},
			"pants86":{"name":"Спортивки SMOTRA #2","desc":"Белые спортивные штаны, официальный мерч SMOTRA","cost":0,"donate":300},
			"pants87":{"name":"Спортивки Tommy Hilf. #1","desc":"Синие спортивки от Tommy Hilfiger","cost":0,"donate":150},
			"pants88":{"name":"Спортивки TNF","desc":"Спортивки от The Nord Face","cost":0,"donate":275},
			"pants89":{"name":"Спортивки LV","desc":"Спортивки от Louis Vuitton","cost":0,"donate":325},
			"pants90":{"name":"Спортивки Gucci #1","desc":"Спортивки от Gucci чёрные","cost":0,"donate":299},
			"pants91":{"name":"Спортивки Gucci #2","desc":"Спортивки от Gucci светлые","cost":0,"donate":275},
			"pants92":{"name":"Шорты Gucci #1","desc":"Шорты от Gucci чёрные","cost":0,"donate":179},
			"pants93":{"name":"Шорты Gucci #2","desc":"Шорты от Gucci светлые","cost":0,"donate":179},
			"pants94":{"name":"Спортивки Adidas #1","desc":"Спортивные штаны от Adidas, классические чёрные","cost":130000,"donate":0},
			"pants95":{"name":"Спортивки Adidas #2","desc":"Спортивные штаны от Adidas, красные","cost":115000,"donate":0},
			"pants96":{"name":"Спортивки Adidas #3","desc":"Спортивные штаны от Adidas, синие","cost":120000,"donate":0},
			"pants97":{"name":"Спортивки Adidas #4","desc":"Спортивные штаны от Adidas, зелёные","cost":117000,"donate":0},
			"pants98":{"name":"Шорты Adidas #1","desc":"Спортивные шорты от Adidas, классические чёрные","cost":90000,"donate":0},
			"pants99":{"name":"Шорты Adidas #2","desc":"Спортивные шорты от Adidas, синие","cost":80000,"donate":0},
			"pants100":{"name":"Шорты Adidas #3","desc":"Спортивные шорты от Adidas, красные","cost":85000,"donate":0},
			"pants101":{"name":"Шорты Adidas #4","desc":"Спортивные шорты от Adidas, зелёные","cost":87000,"donate":0},
			"pants102":{"name":"Длинные шорты LV #1","desc":"Длинные шорты Louis Vuitton Supreme RED","cost":145000,"donate":0},
			"pants103":{"name":"Длинные шорты LV #2","desc":"Длинные шорты Louis Vuitton Supreme фирменный цвет","cost":127000,"donate":0},
			"pants104":{"name":"Длинные шорты LV #3","desc":"Длинные шорты Louis Vuitton Supreme Blue","cost":132000,"donate":0},
			"pants105":{"name":"Длинные шорты LV #4","desc":"Длинные шорты Louis Vuitton Supreme Green","cost":133000,"donate":0},
			"pants106":{"name":"Рваные джинсы #1","desc":"Тёмные джинсы с потёртостями","cost":87000,"donate":0},
			"pants107":{"name":"Рваные джинсы #2","desc":"Серые джинсы с потёртостями","cost":89000,"donate":0},
			"pants108":{"name":"Рок джинсы #1","desc":"Тёмные рокерские джинсы с ремнём Gucci","cost":93000,"donate":0},
			"pants109":{"name":"Рок джинсы #2","desc":"Серые рокерские джинсы с ремнём Gucci","cost":99000,"donate":0},
			"pants110":{"name":"Спортивки Nike #1","desc":"Серые спортивные штаны от Nike","cost":119000,"donate":0},
			"pants111":{"name":"Спортивки Nike #2","desc":"Чёрные спортивные штаны от Nike","cost":117000,"donate":0},
			"pants112":{"name":"Спортивки Nike #3","desc":"Светло-серые спортивные штаны от Nike версия AirMax","cost":129000,"donate":0},
			"pants113":{"name":"Спортивки Nike #4","desc":"Графитовые спортивные штаны от Nike версия Non-Slim","cost":121000,"donate":0},
			"pants114":{"name":"Спортивки Nike #5","desc":"Цвета асфальта спортивные штаны от Nike версия Non-Slim","cost":121000,"donate":0},
			"pants115":{"name":"Спортивки Nike #6","desc":"Чёрные спортивные штаны от Nike версия Non-Slim","cost":121000,"donate":0},
			"pants116":{"name":"Спортивки Nike #7","desc":"Чёрные спортивные штаны от Nike версия AirMax","cost":121000,"donate":0},
			"pants117":{"name":"Штаны Louis Vuitton #1","desc":"Эксклюзивные штаны от Louis Vuitton в фирменных цветах","cost":0,"donate":450},
			"pants118":{"name":"Штаны Louis Vuitton #2","desc":"Эксклюзивные штаны от Louis Vuitton в светлых цветах","cost":0,"donate":400},
			"pants119":{"name":"Штаны Louis Vuitton #3","desc":"Эксклюзивные штаны от Louis Vuitton в чёрных цветах","cost":0,"donate":425},
			"pants120":{"name":"Спортивки Louis Vuitton #1","desc":"Эксклюзивные спортивки от Louis Vuitton в светлых цветах","cost":0,"donate":325},
			"pants121":{"name":"Спортивки Louis Vuitton #2","desc":"Эксклюзивные спортивки от Louis Vuitton в тёмных цветах","cost":0,"donate":335},
			"pants122":{"name":"Спортивки Louis Vuitton #3","desc":"Эксклюзивные спортивки от Louis Vuitton в красных цветах","cost":0,"donate":330},
			"pants123":{"name":"Спортивки Gucci #1","desc":"Эксклюзивные спортивки от Gucci в светлых цветах","cost":0,"donate":290},
			"pants124":{"name":"Спортивки Gucci #2","desc":"Эксклюзивные спортивки от Gucci в красных цветах с белыми узорами","cost":0,"donate":270},
			"pants125":{"name":"Спортивки Gucci #3","desc":"Эксклюзивные спортивки от Gucci в белых цветах с красными узорами","cost":0,"donate":260},
			"pants126":{"name":"Шорты LV #1","desc":"Шорты от Louis Vuitton светлые","cost":0,"donate":205},
			"pants127":{"name":"Шорты LV #2","desc":"Шорты от Louis Vuitton чёрные","cost":0,"donate":215},
			"pants128":{"name":"Шорты LV #3","desc":"Шорты от Louis Vuitton красные","cost":0,"donate":210},
			"pants129":{"name":"Дутики LV #1","desc":"Дутики от Louis Vuitton светлые с красным ремнем","cost":0,"donate":385},
			"pants130":{"name":"Дутики LV #2","desc":"Дутики от Louis Vuitton светлые с жёлтым ремнем","cost":0,"donate":385},
			"pants131":{"name":"Дутики LV #3","desc":"Дутики от Louis Vuitton чёрные с белым ремнем","cost":0,"donate":385},
			"pants132":{"name":"Дутики LV #4","desc":"Дутики от Louis Vuitton чёрные с жёлтым ремнем","cost":0,"donate":385},
			"pants133":{"name":"Штаны FENDI","desc":"Обтягивающие штаны от FENDI чёрные с узорами","cost":0,"donate":265},
			"pants134":{"name":"Спортивки Tommy Hilf. #2","desc":"Приспущенные спортивки от Tommy Hilfiger в фирменном цвете","cost":0,"donate":145},
			"pants135":{"name":"Спортивки PRL #1","desc":"Приспущенные спортивки от Polo Ralph Lauren в синем цвете","cost":0,"donate":355},
			"pants136":{"name":"Спортивки Tommy Hilf. #3","desc":"Приспущенные спортивки от Tommy Hilfiger в белом цвете","cost":0,"donate":175},
			"pants137":{"name":"Спортивки Tommy Hilf. #4","desc":"Приспущенные спортивки от Tommy Hilfiger в красном цвете","cost":0,"donate":145},
			"pants138":{"name":"Спортивки Tommy Hilf. #5","desc":"Приспущенные спортивки от Tommy Hilfiger в розовом цвете","cost":0,"donate":165},
			"pants139":{"name":"Спортивки PRL #2","desc":"Приспущенные спортивки от Tommy Hilfiger в жёлтом цвете","cost":0,"donate":170},
			"pants140":{"name":"Спортивки PRL #3","desc":"Приспущенные спортивки от Polo Ralph Lauren в тёмно-сером цвете","cost":0,"donate":355},
			"pants141":{"name":"Спортивки PRL #4","desc":"Приспущенные спортивки от Polo Ralph Lauren в чёрном цвете YELLOW","cost":0,"donate":355},
			"pants142":{"name":"Спортивки PRL #5","desc":"Приспущенные спортивки от Polo Ralph Lauren в сером цвете","cost":0,"donate":355},
			"pants143":{"name":"Спортивки PRL #6","desc":"Приспущенные спортивки от Polo Ralph Lauren в чёрном цвете RED","cost":0,"donate":355},
			"pants144":{"name":"Штаны Off-White #1","desc":"Спортивные штаны от Off-White серые с жёлтой полосой","cost":0,"donate":280},
			"pants145":{"name":"Штаны Off-White #2","desc":"Спортивные штаны от Off-White чёрные с жёлтой полосой","cost":0,"donate":290},
			"pants146":{"name":"Спортивки LV #1","desc":"Спортивные штаны от Louis Vuitton синие с жёлтыми логотипами","cost":0,"donate":300},
			"pants147":{"name":"Полиция МВД","desc":"Штаны полиции МВД","cost":10000,"donate":0},
			"pants148":{"name":"Полиция ДПС","desc":"Штаны полиции ДПС","cost":10000,"donate":0},
			"pants149":{"name":"Штаны пожарника","desc":"Специальные огнеупорные штаны","cost":15000,"donate":0}
		},
		"shoes":{
			"shoes1":{"name":"Кеды Nike","desc":"Кеды Nike: Серые с белой подошвой","cost":17250,"donate":0},
			"shoes2":{"name":"Кеды Nike #1","desc":"Кеды Nike: Черные с белой подошвой","cost":17250,"donate":0},
			"shoes3":{"name":"Кеды Nike #2","desc":"Кеды Nike: Черные с черной подошвой","cost":17250,"donate":0},
			"shoes4":{"name":"Кеды Nike #3","desc":"Кеды Nike: Бордовые с белой подошвой","cost":17250,"donate":0},
			"shoes5":{"name":"Кеды Nike #4","desc":"Кеды Nike: Коричневые с белой подошвой","cost":17250,"donate":0},
			"shoes6":{"name":"Кеды Nike #5","desc":"Кеды Nike: Аквомариновые с белой подошвой","cost":17250,"donate":0},
			"shoes7":{"name":"Кеды Nike #6","desc":"Кеды Nike: Светлые джинсовые с белой подошвой","cost":17250,"donate":0},
			"shoes8":{"name":"Кеды Nike #7","desc":"Кеды Nike: Черные с коричневой подошвой и красными шнурками","cost":17250,"donate":0},
			"shoes9":{"name":"Кеды Nike #8","desc":"Кеды Nike: Черные с коричневой подошвой и красными шнурками","cost":17250,"donate":0},
			"shoes10":{"name":"Кеды Nike #9","desc":"Кеды Nike: Красные с белой подошвой","cost":17250,"donate":0},
			"shoes11":{"name":"Кеды Nike #10","desc":"Кеды Nike: Темно зеленые с черной подошвой и белыми шнурками","cost":17250,"donate":0},
			"shoes12":{"name":"Кеды Nike #11","desc":"Кеды Nike: Бежевые с белой подошвой","cost":17250,"donate":0},
			"shoes13":{"name":"Кеды Nike #12","desc":"Кеды Nike: Полностью серые","cost":17250,"donate":0},
			"shoes14":{"name":"Кеды Nike #13","desc":"Кеды Nike: Полностью черные","cost":17250,"donate":0},
			"shoes15":{"name":"Кеды Nike #14","desc":"Кеды Nike: Белые с черной подошвой и белыми шнурками","cost":17250,"donate":0},
			"shoes16":{"name":"Мокасины Prada #15","desc":"Мокасины Prada: Кожаные черно-серые ","cost":48000,"donate":0},
			"shoes17":{"name":"Мокасины Prada #16","desc":"Мокасины Prada: Кожаные темно-синие","cost":48000,"donate":0},
			"shoes18":{"name":"Мокасины Prada #17","desc":"Мокасины Prada: Кожаные черно-коричневые с белой подошвой и коричневыми шнурками","cost":48000,"donate":0},
			"shoes19":{"name":"Мокасины Prada #18","desc":"Мокасины Prada: Кожаные коричневые с белой подошвой","cost":48000,"donate":0},
			"shoes20":{"name":"Мокасины Prada #19","desc":"Мокасины Prada: Кожаные черные с белой подошвой и белыми шнурками","cost":48000,"donate":0},
			"shoes21":{"name":"Мокасины Prada #20","desc":"Мокасины Prada: Кожаные серые с белой подошвой","cost":48000,"donate":0},
			"shoes22":{"name":"Мокасины Prada #21","desc":"Мокасины Prada: Кожаные бардово-черные с белой подошвой и белыми шнурками","cost":48000,"donate":0},
			"shoes23":{"name":"Мокасины Prada #22","desc":"Мокасины Prada: Кожаные болотно-красные с белой подошвой","cost":48000,"donate":0},
			"shoes24":{"name":"Мокасины Prada #23","desc":"Мокасины Prada: Кожаные бежевые с белой подошвой и белыми шнурками","cost":48000,"donate":0},
			"shoes25":{"name":"Мокасины Prada #24","desc":"Мокасины Prada: Кожаные светло-коричневые с красными шнурками и коричневой подошвой","cost":48000,"donate":0},
			"shoes26":{"name":"Мокасины Prada #25","desc":"Мокасины Prada: Кожаные черно-фиолетовые с черными шнурками","cost":48000,"donate":0},
			"shoes27":{"name":"Мокасины Prada #26","desc":"Мокасины Prada: Кожаные черные с серой подошвой и  челноком","cost":48000,"donate":0},
			"shoes28":{"name":"Мокасины Prada #27","desc":"Мокасины Prada: Кожаные бело-красно-синие с белыми шнурками","cost":48000,"donate":0},
			"shoes29":{"name":"Мокасины Prada #28","desc":"Мокасины Prada: Кожаные светло-черные с белой подошвой и коричневыми шнурками","cost":48000,"donate":0},
			"shoes30":{"name":"Мокасины Prada #29","desc":"Мокасины Prada: Кожаные светло-голубые с серой подошвой и белыми шнурками","cost":48000,"donate":0},
			"shoes31":{"name":"Мокасины Prada #30","desc":"Мокасины Prada: Кожаные светло-коричневые с белой подошвой","cost":48000,"donate":0},
			"shoes32":{"name":"Кеды Pull&Bear #31","desc":"Кеды Pull&Bear: Светло синие с белой подошвой","cost":29000,"donate":0},
			"shoes33":{"name":"Кеды Pull&Bear #32","desc":"Кеды Pull&Bear: Полностью черные","cost":29000,"donate":0},
			"shoes34":{"name":"Кеды Pull&Bear #33","desc":"Кеды Pull&Bear: Полностью белые","cost":29000,"donate":0},
			"shoes35":{"name":"Кеды Pull&Bear #34","desc":"Кеды Pull&Bear: Красные с белой подошвой и белыми шнурками","cost":29000,"donate":0},
			"shoes36":{"name":"Сланцы Swallow #35","desc":"Сланцы Swallow: Черно-белые","cost":12300,"donate":0},
			"shoes37":{"name":"Сланцы SHODI #36","desc":"Сланцы SHODI: Полностью серые","cost":12300,"donate":0},
			"shoes38":{"name":"Сланцы Jordan #37","desc":"Сланцы Jordan: Полностью светло-черные","cost":12300,"donate":0},
			"shoes39":{"name":"Сланцы Jordan #38","desc":"Сланцы Jordan: Светло-зеленые","cost":12300,"donate":0},
			"shoes40":{"name":"Сланцы Diesel #39","desc":"Сланцы Diesel: Черные с белыми носками","cost":12300,"donate":0},
			"shoes41":{"name":"Сланцы Adidas #40","desc":"Сланцы Diesel: Фиолетово-сизый с белыми носками","cost":12300,"donate":0},
			"shoes42":{"name":"Крос. Versace #41","desc":"Крос. Versace: Белые с белыми носками","cost":30000,"donate":0},
			"shoes43":{"name":"Крос. Versace #42","desc":"Крос. Versace: Серые с белыми носками","cost":30000,"donate":0},
			"shoes44":{"name":"Крос. Versace #43","desc":"Крос. Versace: Черные с белыми носками","cost":30000,"donate":0},
			"shoes45":{"name":"Крос. Versace #44","desc":"Крос. Versace: Бежевые с белыми носками","cost":30000,"donate":0},
			"shoes46":{"name":"Крос. Versace #45","desc":"Крос. Versace: Черно-голубые с белыми носками","cost":30000,"donate":0},
			"shoes47":{"name":"Крос. Versace #46","desc":"Крос. Versace: Радужные с белыми носками","cost":30000,"donate":0},
			"shoes48":{"name":"Крос. Versace #47","desc":"Крос. Versace: Черно-белые с красной подошвой","cost":30000,"donate":0},
			"shoes49":{"name":"Крос. Versace #48","desc":"Крос. Versace: Оранжево-серые с белой подошвой и белыми носками","cost":30000,"donate":0},
			"shoes50":{"name":"Крос. Versace #49","desc":"Крос. Versace: Салатово-серые с белой подошвой и белыми носками","cost":30000,"donate":0},
			"shoes51":{"name":"Крос. Versace #50","desc":"Крос. Versace: Красно-белые с белой подошвой и белыми носками","cost":30000,"donate":0},
			"shoes52":{"name":"Крос. Versace #51","desc":"Крос. Versace: Перситский синий с белой подошвой и белыми носками","cost":30000,"donate":0},
			"shoes53":{"name":"Крос. Versace #52","desc":"Крос. Versace: Желто-серые с желтой подошвой и белыми носками ","cost":30000,"donate":0},
			"shoes54":{"name":"Крос. Versace #53","desc":"Крос. Versace: Серый камуфляж с белыми носками","cost":30000,"donate":0},
			"shoes55":{"name":"Крос. Versace #54","desc":"Крос. Versace: Камуфляж с черной подошвой и белыми носками","cost":30000,"donate":0},
			"shoes56":{"name":"Крос. Versace #55","desc":"Крос. Versace: Фиолетово-серые с белыми носками","cost":30000,"donate":0},
			"shoes57":{"name":"Крос. Versace #56","desc":"Крос. Versace: Желто-белые с белыми носками","cost":30000,"donate":0},
			"shoes58":{"name":"Ботинки Diesel #57","desc":"Ботинки Diesel: Полностью коричневые","cost":29000,"donate":0},
			"shoes59":{"name":"Ботинки Diesel #58","desc":"Ботинки Diesel: Серый камуфляж","cost":29000,"donate":0},
			"shoes60":{"name":"Ботинки Diesel #59","desc":"Ботинки Diesel: Небесный с белой подошвой","cost":29000,"donate":0},
			"shoes61":{"name":"Ботинки Diesel #60","desc":"Ботинки Diesel: Полностью серые","cost":29000,"donate":0},
			"shoes62":{"name":"Ботинки Diesel #61","desc":"Ботинки Diesel: Вашингтон серые с белой подошвой","cost":29000,"donate":0},
			"shoes63":{"name":"Ботинки Diesel #62","desc":"Ботинки Diesel: Джинсово-синие с черной подошвой","cost":29000,"donate":0},
			"shoes64":{"name":"Ботинки Diesel #63","desc":"Ботинки Diesel: Полностью черные","cost":29000,"donate":0},
			"shoes65":{"name":"Ботинки Diesel #64","desc":"Ботинки Diesel: Черно-серые","cost":29000,"donate":0},
			"shoes66":{"name":"Ботинки Diesel #65","desc":"Ботинки Diesel: Бардово-коричневые","cost":29000,"donate":0},
			"shoes67":{"name":"Ботинки Diesel #66","desc":"Ботинки Diesel: Красные с серой подошвой","cost":29000,"donate":0},
			"shoes68":{"name":"Ботинки Diesel #67","desc":"Ботинки Diesel: Полностью белые","cost":29000,"donate":0},
			"shoes69":{"name":"Ботинки Diesel #68","desc":"Ботинки Diesel: Бело-синие джинсовые","cost":29000,"donate":0},
			"shoes70":{"name":"Ботинки Diesel #69","desc":"Ботинки Diesel: Светло-бежевые с белой подошвой","cost":29000,"donate":0},
			"shoes71":{"name":"Ботинки Diesel #70","desc":"Ботинки Diesel: Бело-розовые с бежевой подошвой","cost":29000,"donate":0},
			"shoes72":{"name":"Ботинки Diesel #71","desc":"Ботинки Diesel: Коричнево-черные с белой подошвой","cost":29000,"donate":0},
			"shoes73":{"name":"Ботинки Diesel #72","desc":"Ботинки Diesel: Черный камуфляж","cost":29000,"donate":0},
			"shoes74":{"name":"Туфли Louis Vuitton #73","desc":"Туфли Louis Vuitton: Кожаные полностью черные","cost":36000,"donate":0},
			"shoes75":{"name":"Туфли Louis Vuitton #74","desc":"Туфли Louis Vuitton: Кожаные темно-розовые","cost":36000,"donate":0},
			"shoes76":{"name":"Туфли Louis Vuitton #75","desc":"Туфли Louis Vuitton: Кожаные полностью коричневые","cost":36000,"donate":0},
			"shoes77":{"name":"Туфли Louis Vuitton #76","desc":"Туфли Louis Vuitton: Кожаные черные с темно-зеленой полоской","cost":36000,"donate":0},
			"shoes78":{"name":"Туфли Louis Vuitton #77","desc":"Туфли Louis Vuitton: Кожаные зеленые","cost":36000,"donate":0},
			"shoes79":{"name":"Туфли Louis Vuitton #78","desc":"Туфли Louis Vuitton: Кожаные коричневые с черной подошвой","cost":36000,"donate":0},
			"shoes80":{"name":"Туфли Louis Vuitton #79","desc":"Туфли Louis Vuitton: Кожаные черные с бежевым и черной полоской","cost":36000,"donate":0},
			"shoes81":{"name":"Туфли Louis Vuitton #80","desc":"Туфли Louis Vuitton: Кожаные персидско-синие с черной подошвой","cost":36000,"donate":0},
			"shoes82":{"name":"Туфли Louis Vuitton #81","desc":"Туфли Louis Vuitton: Кожаные темно-ультрамариновые с серой подошвой","cost":36000,"donate":0},
			"shoes83":{"name":"Туфли Louis Vuitton #82","desc":"Туфли Louis Vuitton: Кожаные белые с черной подошвой","cost":36000,"donate":0},
			"shoes84":{"name":"Туфли Louis Vuitton #83","desc":"Туфли Louis Vuitton: Кожаные светло-коричневые с серой подошвой","cost":36000,"donate":0},
			"shoes85":{"name":"Туфли Louis Vuitton #84","desc":"Туфли Louis Vuitton: Кожаные черно-белые","cost":36000,"donate":0},
			"shoes86":{"name":"Туфли Louis Vuitton #85","desc":"Туфли Louis Vuitton: Кожаные светло-коричневые с желтой подошвой","cost":36000,"donate":0},
			"shoes87":{"name":"Туфли Louis Vuitton #86","desc":"Туфли Louis Vuitton: Кожаные персидско-синие с белой подошвой","cost":36000,"donate":0},
			"shoes88":{"name":"Туфли Louis Vuitton #87","desc":"Туфли Louis Vuitton: Кожаные темно-коричневые с красной подошвой","cost":36000,"donate":0},
			"shoes89":{"name":"Туфли Louis Vuitton #88","desc":"Туфли Louis Vuitton: Кожаные темно-коричневые","cost":36000,"donate":0},
			"shoes90":{"name":"Туфли Louis Vuitton #89","desc":"Туфли Louis Vuitton: Кожаные темно-коричневые с фиолетовой подошвой","cost":36000,"donate":0},
			"shoes91":{"name":"Туфли Louis Vuitton #90","desc":"Туфли Louis Vuitton: Кожаные камуфляжные с синей подошвой","cost":36000,"donate":0},
			"shoes92":{"name":"Туфли Louis Vuitton #91","desc":"Туфли Louis Vuitton: Кожаные черные с фиолетовой подошвой","cost":36000,"donate":0},
			"shoes93":{"name":"Туфли Louis Vuitton #92","desc":"Туфли Louis Vuitton: Кожаные черно-бежевые с коричневой подошвой","cost":36000,"donate":0},
			"shoes94":{"name":"Туфли Louis Vuitton #93","desc":"Туфли Louis Vuitton: Кожаные черные с розовой подошвой","cost":36000,"donate":0},
			"shoes95":{"name":"Туфли Louis Vuitton #94","desc":"Туфли Louis Vuitton: Кожаные светло-коричневые","cost":36000,"donate":0},
			"shoes96":{"name":"Туфли Louis Vuitton #95","desc":"Туфли Louis Vuitton: Кожаные темно-коричневые с оранжевой подошвой","cost":36000,"donate":0},
			"shoes97":{"name":"Туфли Louis Vuitton #96","desc":"Туфли Louis Vuitton: Кожаные темно-коричневые с зеленой подошвой","cost":36000,"donate":0},
			"shoes98":{"name":"Туфли Louis Vuitton #97","desc":"Туфли Louis Vuitton: Кожаные белые с темно-коричневой подошвой","cost":36000,"donate":0},
			"shoes99":{"name":"Туфли Louis Vuitton #98","desc":"Туфли Louis Vuitton: Кожаные зелено-коричневые","cost":36000,"donate":0},
			"shoes100":{"name":"Туфли Louis Vuitton #99","desc":"Туфли Louis Vuitton: Кожаные светло-серые с темно-серым и черной подошвой","cost":36000,"donate":0},
			"shoes101":{"name":"Туфли Louis Vuitton #100","desc":"Туфли Louis Vuitton: Кожаные желтые с бледно-розовой подошвой","cost":36000,"donate":0},
			"shoes102":{"name":"Крос. Adidas #101","desc":"Крос. Adidas: Бело-желтые","cost":26000,"donate":0},
			"shoes103":{"name":"Крос. Adidas #102","desc":"Крос. Adidas: Черные с желтыми шнурками","cost":26000,"donate":0},
			"shoes104":{"name":"Крос. Adidas #103","desc":"Крос. Adidas: Полностью белые","cost":26000,"donate":0},
			"shoes105":{"name":"Крос. Adidas #104","desc":"Крос. Adidas: Темно-серые с белой подошвой","cost":26000,"donate":0},
			"shoes106":{"name":"Крос. Adidas #105","desc":"Крос. Adidas: Желто-серые со смайликом","cost":26000,"donate":0},
			"shoes107":{"name":"Боксёрки PRO #106","desc":"Боксёрки PRO: Черные с желтой подсветкой","cost":4500,"donate":0},
			"shoes108":{"name":"Боксёрки PRO #107","desc":"Боксёрки PRO: Черные с зеленой подсветкой","cost":4500,"donate":0},
			"shoes109":{"name":"Боксёрки PRO #108","desc":"Боксёрки PRO: Черные с оранжевой подсветкой","cost":4500,"donate":0},
			"shoes110":{"name":"Боксёрки PRO #109","desc":"Боксёрки PRO: Черные с фиолетовой подсветкой","cost":4500,"donate":0},
			"shoes111":{"name":"Боксёрки PRO #110","desc":"Боксёрки PRO: Черные с розовой подсветкой","cost":4500,"donate":0},
			"shoes112":{"name":"Боксёрки PRO #111","desc":"Боксёрки PRO: Черные с красной подсветкой","cost":4500,"donate":0},
			"shoes113":{"name":"Боксёрки PRO #112","desc":"Боксёрки PRO: Черно-белые с подсветкой","cost":4500,"donate":0},
			"shoes114":{"name":"Боксёрки PRO #113","desc":"Боксёрки PRO: Черно-тепло белые с подсветкой","cost":4500,"donate":0},
			"shoes115":{"name":"Боксёрки PRO #114","desc":"Боксёрки PRO: Черно-бежевые с подсветкой","cost":4500,"donate":0},
			"shoes116":{"name":"Боксёрки PRO #115","desc":"Боксёрки PRO: Черно-ярко белые с подсветкой.","cost":4500,"donate":0},
			"shoes117":{"name":"Крос. BALENCIAGA #116","desc":"Крос. BALENCIAGA: Голубые с белой подошвой","cost":48000,"donate":0},
			"shoes118":{"name":"Крос. BALENCIAGA #117","desc":"Крос. BALENCIAGA: Коричневые с белой подошвой","cost":48000,"donate":0},
			"shoes119":{"name":"Крос. BALENCIAGA #118","desc":"Крос. BALENCIAGA: Бирюзовые с белой подошвой","cost":48000,"donate":0},
			"shoes120":{"name":"Крос. BALENCIAGA #119","desc":"Крос. BALENCIAGA: Фиолетовые с белой подошвой","cost":48000,"donate":0},
			"shoes121":{"name":"Крос. BALENCIAGA #120","desc":"Крос. BALENCIAGA: Темно-красные с белой подошвой","cost":48000,"donate":0},
			"shoes122":{"name":"Крос. BALENCIAGA #121","desc":"Крос. BALENCIAGA: Серые с черной подошвой и белыми шнурками","cost":48000,"donate":0},
			"shoes123":{"name":"Крос. BALENCIAGA #122","desc":"Крос. BALENCIAGA: Серые с черной подошвой и черными шнурками","cost":48000,"donate":0},
			"shoes124":{"name":"Крос. BALENCIAGA #123","desc":"Крос. BALENCIAGA: Зелено-фиолетовые с белой подошвой","cost":48000,"donate":0},
			"shoes125":{"name":"Крос. BALENCIAGA #124","desc":"Крос. BALENCIAGA: Лилово-желтые с белой подошвой","cost":48000,"donate":0},
			"shoes126":{"name":"Крос. BALENCIAGA #125","desc":"Крос. BALENCIAGA: Лилово-зеленые с белой подошвой","cost":48000,"donate":0},
			"shoes127":{"name":"Крос. BALENCIAGA #126","desc":"Крос. BALENCIAGA: Градиент с белой подошвой","cost":48000,"donate":0},
			"shoes128":{"name":"Крос. BALENCIAGA #127","desc":"Крос. BALENCIAGA: Серые с белой подошвой","cost":48000,"donate":0},
			"shoes129":{"name":"Крос. BALENCIAGA #128","desc":"Крос. BALENCIAGA: Серый с BALENCIAGA подошвой","cost":48000,"donate":0},
			"shoes130":{"name":"Крос. BALENCIAGA #129","desc":"Крос. BALENCIAGA: BALENCIAGA с белой подошвой","cost":48000,"donate":0},
			"shoes131":{"name":"Кеды Dolce&Gabbana #130","desc":"Кеды Dolce&Gabbana: Белые с голубой неоновой подсветкой","cost":4500,"donate":0},
			"shoes132":{"name":"Кеды Dolce&Gabbana #131","desc":"Кеды Dolce&Gabbana: Белые с зеленой неоновой подсветкой","cost":4500,"donate":0},
			"shoes133":{"name":"Кеды Dolce&Gabbana #132","desc":"Кеды Dolce&Gabbana: Белые с розовой неоновой подсветкой","cost":4500,"donate":0},
			"shoes134":{"name":"Кеды Dolce&Gabbana #133","desc":"Кеды Dolce&Gabbana: Белые с красной неоновой подсветкой","cost":4500,"donate":0},
			"shoes135":{"name":"Кеды Dolce&Gabbana #134","desc":"Кеды Dolce&Gabbana: Серые с голубой неоновой подсветкой","cost":4500,"donate":0},
			"shoes136":{"name":"Кеды Dolce&Gabbana #135","desc":"Кеды Dolce&Gabbana: Серые с зеленой неоновой подсветкой","cost":4500,"donate":0},
			"shoes137":{"name":"Кеды Dolce&Gabbana #136","desc":"Кеды Dolce&Gabbana: Серые с фиолетовой неоновой подсветкой","cost":4500,"donate":0},
			"shoes138":{"name":"Кеды Dolce&Gabbana #137","desc":"Кеды Dolce&Gabbana: Серые с красной неоновой подсветкой","cost":4500,"donate":0},
			"shoes139":{"name":"Кеды Dolce&Gabbana #138","desc":"Кеды Dolce&Gabbana: Черные с голубой неоновой подсветкой","cost":4500,"donate":0},
			"shoes140":{"name":"Кеды Dolce&Gabbana #139","desc":"Кеды Dolce&Gabbana: Черные с зеленой неоновой подсветкой","cost":4500,"donate":0},
			"shoes141":{"name":"Кеды Dolce&Gabbana #140","desc":"Кеды Dolce&Gabbana: Черные с фиолетовой неоновой подсветкой","cost":4500,"donate":0},
			"shoes142":{"name":"Кеды Dolce&Gabbana #141","desc":"Кеды Dolce&Gabbana: Черные с красной неоновой подсветкой","cost":4500,"donate":0},
			"shoes143":{"name":"Кеды Dolce&Gabbana #142","desc":"Кеды Dolce&Gabbana: Бело-розовые с голубой неоновой подсветкой","cost":4500,"donate":0},
			"shoes144":{"name":"Кеды Dolce&Gabbana #143","desc":"Кеды Dolce&Gabbana: Черно-розовые с зеленой неоновой подсветкой","cost":4500,"donate":0},
			"shoes145":{"name":"Кеды Dolce&Gabbana #144","desc":"Кеды Dolce&Gabbana: Черно-серые с фиолетовой неоновой подсветкой","cost":4500,"donate":0},
			"shoes146":{"name":"Кеды Dolce&Gabbana #145","desc":"Кеды Dolce&Gabbana: Бело-красные с красной неоновой подсветкой","cost":4500,"donate":0},
			"shoes147":{"name":"Кеды Dolce&Gabbana #146","desc":"Кеды Dolce&Gabbana: Бело-черные с голубой неоновой подсветкой","cost":4500,"donate":0},
			"shoes148":{"name":"Кеды Dolce&Gabbana #147","desc":"Кеды Dolce&Gabbana: Красно-черные с зеленой неоновой подсветкой","cost":4500,"donate":0},
			"shoes149":{"name":"Кеды Dolce&Gabbana #148","desc":"Кеды Dolce&Gabbana: Черно-белые с фиолетовой неоновой подсветкой","cost":4500,"donate":0},
			"shoes150":{"name":"Кеды Dolce&Gabbana #149","desc":"Кеды Dolce&Gabbana: Черно-белые с красной неоновой подсветкой","cost":4500,"donate":0},
			"shoes151":{"name":"Кеды Dolce&Gabbana #150","desc":"Кеды Dolce&Gabbana: Черно-серые с красной неоновой подсветкой","cost":4500,"donate":0},
			"shoes152":{"name":"Кеды Dolce&Gabbana #151","desc":"Кеды Dolce&Gabbana: Серо-коричневые с розовой неоновой подсветкой","cost":4500,"donate":0},
			"shoes153":{"name":"Кеды Dolce&Gabbana #152","desc":"Кеды Dolce&Gabbana: Серо-зеленые с зеленой неоновой подсветкой","cost":4500,"donate":0},
			"shoes154":{"name":"Кеды Dolce&Gabbana #153","desc":"Кеды Dolce&Gabbana: Черно-оранжевые с оранжевой неоновой подсветкой","cost":4500,"donate":0},
			"shoes155":{"name":"Кеды Dolce&Gabbana #154","desc":"Кеды Dolce&Gabbana: Черно-фиолетовые с фиолетовой неоновой подсветкой","cost":4500,"donate":0},
			"shoes156":{"name":"Кеды Dolce&Gabbana #155","desc":"Кеды Dolce&Gabbana: Черно-розовые с розовой неоновой подсветкой","cost":4500,"donate":0},
			"shoes157":{"name":"Кроссы Nike #1","desc":"Кроссы Nike, комбинация: чёрный, белый, синий","cost":140000,"donate":0},
			"shoes158":{"name":"Кроссы Nike #2","desc":"Кроссы Nike, комбинация: чёрный, белый, зелёный","cost":139000,"donate":0},
			"shoes159":{"name":"Кроссы Nike #3","desc":"Кроссы Nike, комбинация: чёрный, белый, фиолетовый","cost":141000,"donate":0},
			"shoes160":{"name":"Кроссы Nike #4","desc":"Кроссы Nike, комбинация: чёрный, белый, красный","cost":145000,"donate":0},
			"shoes161":{"name":"Кроссы Nike #5","desc":"Кроссы Nike, комбинация: чёрный, белый, оранжевый","cost":142000,"donate":0},
			"shoes162":{"name":"Кроссы Nike #6","desc":"Кроссы Nike, комбинация: тёмносерый, белый","cost":140500,"donate":0},
			"shoes163":{"name":"Кроссы Nike #7","desc":"Кроссы Nike, комбинация: тёмносерый, красный, белый","cost":142500,"donate":0},
			"shoes164":{"name":"Кроссы Nike #8","desc":"Кроссы Nike, комбинация: небесный, белый","cost":150000,"donate":0},
			"shoes165":{"name":"Кроссы Nike #9","desc":"Кроссы Nike, полностью белые","cost":155000,"donate":0},
			"shoes166":{"name":"Прем. кроссы Nike #1","desc":"Премиум кроссы Nike, комбинация: чёрный, белый, красный","cost":0,"donate":205},
			"shoes167":{"name":"Прем. кроссы Nike #2","desc":"Премиум кроссы Nike, комбинация: чёрный, белый, жёлтый","cost":0,"donate":210},
			"shoes168":{"name":"Прем. кроссы Nike #3","desc":"Премиум кроссы Nike, full black","cost":0,"donate":235},
			"shoes169":{"name":"Прем. кроссы Nike #4","desc":"Премиум кроссы Nike, Japan edition","cost":0,"donate":220},
			"shoes170":{"name":"Прем. кроссы Nike #5","desc":"Премиум кроссы Nike, Gucci edition","cost":0,"donate":360},
			"shoes171":{"name":"Прем. кроссы Nike #6","desc":"Премиум кроссы Nike, Just Do It","cost":0,"donate":240},
			"shoes172":{"name":"Прем. кроссы Nike #7","desc":"Премиум кроссы Nike, небесно-белые","cost":0,"donate":212},
			"shoes173":{"name":"Прем. кроссы Nike #8","desc":"Премиум кроссы Nike, Louis Vuitton edition","cost":0,"donate":390},
			"shoes174":{"name":"Прем. кроссы Nike #9","desc":"Премиум кроссы Nike, full violet","cost":0,"donate":230},
			"shoes175":{"name":"Прем. кроссы Nike #10","desc":"Премиум кроссы Nike, full red and white logo","cost":0,"donate":235},
			"shoes176":{"name":"Кроссы Nike Air #1","desc":"Кроссы Nike Air, white and black","cost":0,"donate":228},
			"shoes177":{"name":"Кроссы Nike Air #2","desc":"Кроссы Nike Air, white and red","cost":0,"donate":208},
			"shoes178":{"name":"Кроссы Nike Air #3","desc":"Кроссы Nike Air, full yellow","cost":0,"donate":253},
			"shoes179":{"name":"Кроссы Nike Air #4","desc":"Кроссы Nike Air, full red","cost":0,"donate":233},
			"shoes180":{"name":"Кеды VANS #1","desc":"Кеды VANS, тёмные","cost":130000,"donate":0},
			"shoes181":{"name":"Кеды VANS #2","desc":"Кеды VANS, в клетк тёмные","cost":140000,"donate":0},
			"shoes182":{"name":"Кеды VANS #3","desc":"Кеды VANS, в клетку светлые","cost":135000,"donate":0},
			"shoes183":{"name":"Кеды VANS #4","desc":"Кеды VANS, небесные","cost":140000,"donate":0},
			"shoes184":{"name":"Кеды VANS #5","desc":"Кеды VANS, чёрные огненные","cost":150000,"donate":0},
			"shoes185":{"name":"Кроссы Adidas #1","desc":"Кроссы Adidas Flex, red edition","cost":270000,"donate":0},
			"shoes186":{"name":"Кроссы Adidas #2","desc":"Кроссы Adidas Flex, street violet edition","cost":285000,"donate":0},
			"shoes187":{"name":"Кроссы Adidas #3","desc":"Кроссы Adidas Flex, hakki edition","cost":290000,"donate":0},
			"shoes188":{"name":"Кроссы Adidas #4","desc":"Кроссы Adidas Flex, blue edition","cost":260000,"donate":0},
			"shoes189":{"name":"Кроссы Adidas #5","desc":"Кроссы Adidas Flex, black&orange edition","cost":270000,"donate":0},
			"shoes190":{"name":"Выс. кеды WEAPON #1","desc":"Высокие кеды WEAPON, yellow&violet","cost":190000,"donate":0},
			"shoes191":{"name":"Выс. кеды WEAPON #2","desc":"Высокие кеды WEAPON, black&white","cost":210000,"donate":0},
			"shoes192":{"name":"Выс. кеды WEAPON #3","desc":"Высокие кеды WEAPON, white&black","cost":210000,"donate":0},
			"shoes193":{"name":"Выс. кеды WEAPON #4","desc":"Высокие кеды WEAPON, white&sky","cost":195000,"donate":0},
			"shoes194":{"name":"Выс. кеды WEAPON #5","desc":"Высокие кеды WEAPON, white&violet","cost":200000,"donate":0},
			"shoes195":{"name":"Выс. кеды WEAPON #6","desc":"Высокие кеды WEAPON, white&red","cost":210000,"donate":0},
			"shoes196":{"name":"Выс. кеды WEAPON #7","desc":"Высокие кеды WEAPON, white&green","cost":193000,"donate":0},
			"shoes197":{"name":"Кроссы Adidas #6","desc":"Кроссы Adidas Street, black edition","cost":290000,"donate":0},
			"shoes198":{"name":"Кроссы Adidas #7","desc":"Кроссы Adidas Street, army edition","cost":310000,"donate":0},
			"shoes199":{"name":"Кроссы Adidas #8","desc":"Кроссы Adidas Street, red edition","cost":300000,"donate":0},
			"shoes200":{"name":"Кроссы Nike Air #1","desc":"Кроссы Nike Air Premium, full blue","cost":0,"donate":310},
			"shoes201":{"name":"Кроссы Nike Air #2","desc":"Кроссы Nike Air Premium, red&black","cost":0,"donate":320},
			"shoes202":{"name":"Кроссы Nike Air #3","desc":"Кроссы Nike Air Premium, white&black","cost":0,"donate":330},
			"shoes203":{"name":"Кроссы Nike Air #4","desc":"Кроссы Nike Air Premium, sky&yellow","cost":0,"donate":315},
			"shoes204":{"name":"Кроссы Adidas Fit #1","desc":"Кроссы Adidas fit, комбинация: синий, зелёный, чёрный, белый","cost":230000,"donate":0},
			"shoes205":{"name":"Кроссы Adidas Fit #2","desc":"Кроссы Adidas fit, полностью жёлтые","cost":260000,"donate":0},
			"shoes206":{"name":"Кроссы Adidas Fit #3","desc":"Кроссы Adidas fit, комбинация: чёрный, небесный, белый","cost":240000,"donate":0},
			"shoes207":{"name":"Кроссы Adidas Fit #4","desc":"Кроссы Adidas fit, комбинация: полностью синие","cost":255000,"donate":0},
			"shoes208":{"name":"Кроссы Adidas Fit #5","desc":"Кроссы Adidas fit, комбинация: красный, чёрный, оранжевый","cost":245000,"donate":0},
			"shoes209":{"name":"Кроссы Adidas Fit #6","desc":"Кроссы Adidas fit, комбинация: чёрный и белый","cost":225000,"donate":0},
			"shoes210":{"name":"Кроссы Adidas Fit #7","desc":"Кроссы Adidas fit, комбинация: чёрный с небесным градиентом","cost":268000,"donate":0},
			"shoes211":{"name":"Кроссы Adidas Fit #8","desc":"Кроссы Adidas fit, комбинация: чёрный, бордовый, белый","cost":237000,"donate":0},
			"shoes212":{"name":"Кроссы Nike Flex #1","desc":"Кроссы Nike Flex, небесно-белые","cost":190000,"donate":0},
			"shoes213":{"name":"Кроссы Nike Flex #2","desc":"Кроссы Nike Flex, чёрно-белые","cost":195000,"donate":0},
			"shoes214":{"name":"Кроссы Nike Flex #3","desc":"Кроссы Nike Flex, красно-белые","cost":185000,"donate":0},
			"shoes215":{"name":"Кроссы Nike Flex #4","desc":"Кроссы Nike Flex, комбинация: синий, белый, чёрный","cost":196000,"donate":0},
			"shoes216":{"name":"Кроссы Nike Flex #5","desc":"Кроссы Nike Flex, комбинация: зелёный, белый, чёрный","cost":193000,"donate":0},
			"shoes217":{"name":"Кроссы Nike Flex #6","desc":"Кроссы Nike Flex, комбинация: фиолетовый, белый, чёрный","cost":200000,"donate":0},
			"shoes218":{"name":"Кроссы Nike Air #5","desc":"Кроссы Nike Air, white&black","cost":180000,"donate":0},
			"shoes219":{"name":"Кроссы Nike Air #6","desc":"Кроссы Nike Air, небесно-белые с треугольниками","cost":190000,"donate":0},
			"shoes220":{"name":"Кроссы Nike Air #7","desc":"Кроссы Nike Air, салатовые с треугольниками","cost":190000,"donate":0},
			"shoes221":{"name":"Кроссы Nike Air #8","desc":"Кроссы Nike Air, светлые с треугольниками","cost":185000,"donate":0},
			"shoes222":{"name":"Кроссы Nike Air #9","desc":"Кроссы Nike Air, голубые с треугольниками","cost":190000,"donate":0},
			"shoes223":{"name":"Кроссы Nike Air #10","desc":"Кроссы Nike Air, тёмные с треугольниками","cost":187000,"donate":0},
			"shoes224":{"name":"Кроссы Nike AirMax #1","desc":"Кроссы Nike AirMax Classic, зелёные","cost":0,"donate":180},
			"shoes225":{"name":"Кроссы Nike AirMax #2","desc":"Кроссы Nike AirMax Classic, красно-белые","cost":0,"donate":190},
			"shoes226":{"name":"Кроссы Nike AirMax #3","desc":"Кроссы Nike AirMax Classic, серо-белые","cost":0,"donate":180},
			"shoes227":{"name":"Кроссы Nike AirMax #4","desc":"Кроссы Nike AirMax Classic, серо-белые","cost":0,"donate":180},
			"shoes228":{"name":"Кроссы Nike AirMax #5","desc":"Кроссы Nike AirMax Classic, комбинация: чёрный, красный, белый","cost":0,"donate":210},
			"shoes229":{"name":"Кроссы Nike AirMax #6","desc":"Кроссы Nike AirMax Classic, комбинация: чёрный, красный, белый (инверсия)","cost":0,"donate":210},
			"shoes230":{"name":"Кроссы Nike AirMax #7","desc":"Кроссы Nike AirMax Classic, комбинация: чёрный, синий, серый","cost":0,"donate":200},
			"shoes231":{"name":"Кроссы Nike AirMax #8","desc":"Кроссы Nike AirMax Classic, комбинация: чёрный, золотой","cost":0,"donate":260},
			"shoes232":{"name":"Кроссы Nike AirMax #9","desc":"Кроссы Nike AirMax Classic, комбинация: чёрный, салатовый, белый","cost":0,"donate":240},
			"shoes233":{"name":"Ботинки Nike AirMax","desc":"Ботинки Nike AirMax, светлые","cost":230000,"donate":0},
			"shoes234":{"name":"Кроссы Nike Bubble #1","desc":"Кроссы Nike Bubble, комбинация: небесно-зелёно-белый градиент","cost":0,"donate":310},
			"shoes235":{"name":"Кроссы Nike AirMax #10","desc":"Кроссы Nike AirMax Perfomance, комбинация: тёмное золото - серый - белый","cost":0,"donate":265},
			"shoes236":{"name":"Кроссы Nike AirMax #11","desc":"Кроссы Nike AirMax Perfomance, комбинация: тёмно-серый - красный","cost":0,"donate":255},
			"shoes237":{"name":"Кроссы Nike AirMax #12","desc":"Кроссы Nike AirMax Perfomance, комбинация: чёрный, белый","cost":0,"donate":245},
			"shoes238":{"name":"Кроссы Nike AirMax #13","desc":"Кроссы Nike AirMax Perfomance, комбинация: чёрный, радужный градиент","cost":0,"donate":295},
			"shoes239":{"name":"Кроссы Nike AirMax #14","desc":"Кроссы Nike AirMax Perfomance, комбинация: чёрный - серый - белый","cost":0,"donate":255},
			"shoes240":{"name":"Туфли полиции","desc":"Повседневные туфли МВД и ДПС Полиции","cost":10000,"donate":0},
			"shoes241":{"name":"Сапоги пожарника","desc":"Огнеупорные сапоги пожарного департамента","cost":10000,"donate":0}
		},
	},
	"female":{
		"head":{
			"head1":{"name":"Шапка","desc":"Шапка ROMADO: Черная","cost":4500,"donate":0},
			"head2":{"name":"Шапка деда-мороза #1","desc":"Шапка деда-мороза (обычная)","cost":6500,"donate":0},
			"head3":{"name":"Шапка деда-мороза #2","desc":"Шапка деда-мороза (зелёная)","cost":6000,"donate":0},
			"head4":{"name":"Шапка эльфа","desc":"Шапка эльфа (обычная)","cost":10500,"donate":0},
			"head5":{"name":"Шапка рога","desc":"Шапка рога (обычная)","cost":7500,"donate":0},
			"head6":{"name":"Шапка ёлка прем. #1","desc":"Шапка елка светящаяся (обычная)","cost":17000,"donate":0},
			"head7":{"name":"Шапка ёлка прем. #2","desc":"Шапка елка светящаяся (феолетового цвета со снежинками)","cost":17000,"donate":0},
			"head8":{"name":"Шапка ёлка прем. #3","desc":"Шапка елка светящаяся (белого цвета с красно звездой)","cost":17000,"donate":0},
			"head9":{"name":"Шапка ёлка прем. #4","desc":"Шапка елка светящаяся (феолетового, со звездами)","cost":17000,"donate":0},
			"head10":{"name":"Шапка с пунпон.","desc":"Шапка ёлка в снегу, с пумпоном","cost":17000,"donate":0},
			"head11":{"name":"Шапка с дл. пунп.","desc":"Шапка полосатая, с пумпоном","cost":22000,"donate":0},
			"head12":{"name":"Шапка эльфа прем.","desc":"Шапка эльфа (премиум) светится в темноте","cost":21000,"donate":0},
			"head13":{"name":"Шапка NewYear рога","desc":"Рога (премиум) светится в темноте","cost":15000,"donate":0},
			"head14":{"name":"Кепка полицейская","desc":"Государственная кепка полицейского","cost":10000,"donate":0},
			"head15":{"name":"Пожарный шлем","desc":"Специальный шлем пожарного департамента","cost":15000,"donate":0}
		},
		"glasses":{
			"glasses1":{"name":"Очки","desc":"Очки New Wayfarer1: Черные очки с желтой окантовкой","cost":20000,"donate":0},
			"glasses2":{"name":"Очки","desc":"Очки New Wayfarer2: Черные очки с синей окантовкой","cost":20000,"donate":0},
			"glasses3":{"name":"Очки","desc":"Очки New Wayfarer3: Оранжевые очки","cost":20000,"donate":0},
			"glasses4":{"name":"Очки","desc":"Очки New Wayfarer4: Синии очки","cost":20000,"donate":0},
			"glasses5":{"name":"Очки","desc":"Очки New Wayfarer5: Коричневые очки с черным узором","cost":20000,"donate":0},
			"glasses6":{"name":"Очки","desc":"Очки New Wayfarer6: Фиолетовые очки с белой окантовкой","cost":20000,"donate":0},
			"glasses7":{"name":"Очки","desc":"Очки New Wayfarer7: Синии очки с красной окантовкой","cost":20000,"donate":0},
			"glasses8":{"name":"Очки","desc":"Очки New Wayfarer8: Бежевые очки","cost":20000,"donate":0},
			"glasses9":{"name":"Очки","desc":"Очки New Wayfarer9: Огненные очки","cost":20000,"donate":0},
			"glasses10":{"name":"Очки","desc":"Очки New Wayfarer10: Черные очки","cost":20000,"donate":0},
			"glasses11":{"name":"Очки","desc":"Очки Tom Ford11: Коричневые очки с узором","cost":25000,"donate":0},
			"glasses12":{"name":"Очки","desc":"Очки Tom Ford12: Черные очки с синний оптикой","cost":25000,"donate":0},
			"glasses13":{"name":"Очки","desc":"Очки Tom Ford13: Черные очки с черной оптикой","cost":25000,"donate":0},
			"glasses14":{"name":"Очки","desc":"Очки Tom Ford14: Фиолетовые очки с фиолетовой оптикой","cost":25000,"donate":0},
			"glasses15":{"name":"Очки","desc":"Очки Tom Ford15: Зеленые очки с синний оптикой","cost":25000,"donate":0},
			"glasses16":{"name":"Очки","desc":"Очки Tom Ford16: Черные очки с красной оптикой","cost":25000,"donate":0},
			"glasses17":{"name":"Очки","desc":"Очки Tom Ford17: Белые очки с желтой оптикой","cost":25000,"donate":0},
			"glasses18":{"name":"Очки","desc":"Очки Tom Ford18: Белые очки с фиолетовой оптикой","cost":25000,"donate":0},
			"glasses19":{"name":"Очки","desc":"Очки Tom Ford19: Огненные очки с прозрачной оптикой#1","cost":25000,"donate":0},
			"glasses20":{"name":"Очки","desc":"Очки Tom Ford20: Черные очки с прозрачной оптикой#1","cost":25000,"donate":0},
			"glasses21":{"name":"Очки","desc":"Очки Dolce&Gabbana21: Коричневые очки с черной оптикой","cost":35000,"donate":0},
			"glasses22":{"name":"Очки","desc":"Очки Dolce&Gabbana22: Светло коричневые очки с темной оптикой","cost":35000,"donate":0},
			"glasses23":{"name":"Очки","desc":"Очки Dolce&Gabbana23: Серые очки с красной оптикой","cost":35000,"donate":0},
			"glasses24":{"name":"Очки","desc":"Очки Dolce&Gabbana24: Белые очки с фиолетовой оптикой","cost":35000,"donate":0},
			"glasses25":{"name":"Очки","desc":"Очки Dolce&Gabbana25: Леопардовые очки с темной оптикой","cost":35000,"donate":0},
			"glasses26":{"name":"Очки","desc":"Очки Dolce&Gabbana26: Черные очки с темной оптикой","cost":35000,"donate":0},
			"glasses27":{"name":"Очки","desc":"Очки Dolce&Gabbana27: Черные очки с красными дужками с темной оптикой","cost":35000,"donate":0},
			"glasses28":{"name":"Очки","desc":"Очки Dolce&Gabbana28: Желтые очки с черными дужками с темной оптикой","cost":35000,"donate":0},
			"glasses29":{"name":"Очки","desc":"Очки Dolce&Gabbana29: Огненные очки с прозрачной оптикой#2","cost":35000,"donate":0},
			"glasses30":{"name":"Очки","desc":"Очки Dolce&Gabbana30: Черные очки с прозрачной оптикой","cost":35000,"donate":0},
			"glasses31":{"name":"Очки","desc":"Очки Baldinini31: Зебровые очки с красной оптикой","cost":38000,"donate":0},
			"glasses32":{"name":"Очки","desc":"Очки Baldinini32: Огненные очки с красной оптикой","cost":38000,"donate":0},
			"glasses33":{"name":"Очки","desc":"Очки Baldinini33: Черные очки с красной полоской","cost":38000,"donate":0},
			"glasses34":{"name":"Очки","desc":"Очки Baldinini34: Черные очки с белой полоской Фиолетовой оптикой","cost":38000,"donate":0},
			"glasses35":{"name":"Очки","desc":"Очки Baldinini35: Желтые очки с белой полоской прозрачной оптикой","cost":38000,"donate":0},
			"glasses36":{"name":"Очки","desc":"Очки Baldinini36: Черные очки с белой полоской фиолетовой оптикой","cost":38000,"donate":0},
			"glasses37":{"name":"Очки","desc":"Очки Baldinini37: Очки детской радости","cost":38000,"donate":0},
			"glasses38":{"name":"Очки","desc":"Очки Baldinini38: Черные очки с золотой полоской с темной оптикой","cost":38000,"donate":0},
			"glasses39":{"name":"Очки","desc":"Очки Baldinini39: Огненные очки с желтой полоской с прозрачной оптикой","cost":38000,"donate":0},
			"glasses40":{"name":"Очки","desc":"Очки Baldinini40: Черные очки с серой полоской с прозрачной оптикой","cost":38000,"donate":0},
			"glasses41":{"name":"Очки","desc":"Очки Lacoste41: Леопардовые очки с фиолетовой оптикой","cost":23000,"donate":0},
			"glasses42":{"name":"Очки","desc":"Очки Lacoste42: Черно коричневые очки с темной оптикой","cost":23000,"donate":0},
			"glasses43":{"name":"Очки","desc":"Очки Lacoste43: Бежевые очки с прозрачной оптикой","cost":23000,"donate":0},
			"glasses44":{"name":"Очки","desc":"Очки Lacoste44: Бирюзовые очки с прозрачной оптикой","cost":23000,"donate":0},
			"glasses45":{"name":"Очки","desc":"Очки Lacoste45: Черно белые очки с темной оптикой","cost":23000,"donate":0},
			"glasses46":{"name":"Очки","desc":"Очки Lacoste46: Черные очки с белой полоской на дужке и темной оптикой","cost":23000,"donate":0},
			"glasses47":{"name":"Очки","desc":"Очки Lacoste47: Золотые очки с черной бежевой дужками и темной оптикой","cost":23000,"donate":0},
			"glasses48":{"name":"Очки","desc":"Очки Lacoste48: Красные очки с розовой оптикой","cost":23000,"donate":0},
			"glasses49":{"name":"Очки","desc":"Очки Lacoste49: Огненные очки с прозрачной оптикой#2","cost":23000,"donate":0},
			"glasses50":{"name":"Очки","desc":"Очки Lacoste50: Черные очки с прозрачной оптикой#2","cost":23000,"donate":0},
			"glasses51":{"name":"Очки","desc":"Очки Prada51:Черные очки с вставками на дужки с фиолетовой оптикой","cost":50000,"donate":0},
			"glasses52":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses53":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses54":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses55":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses56":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses57":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses58":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses59":{"name":"Очки","desc":"Очки Prada59: Огненные очки с вставками на дужки с прозрачной оптикой","cost":50000,"donate":0},
			"glasses60":{"name":"Очки","desc":"Очки Prada60: Черные очки с вставками на дужки с прозрачной оптикой","cost":50000,"donate":0},
			"glasses61":{"name":"Очки","desc":"Очки Gucci61: Серебристые очки с бежевой оптикой","cost":55000,"donate":0},
			"glasses62":{"name":"Очки","desc":"Очки Gucci62: Серебристые очки с темной оптикой","cost":55000,"donate":0},
			"glasses63":{"name":"Очки","desc":"Очки Gucci63: Серебристые очки с голубой оптикой","cost":55000,"donate":0},
			"glasses64":{"name":"Очки","desc":"Очки Gucci64: Серебристые очки с фиолетовой оптикой","cost":55000,"donate":0},
			"glasses65":{"name":"Очки","desc":"Очки Gucci65: Золотые очки с зеленой оптикой","cost":55000,"donate":0},
			"glasses66":{"name":"Очки","desc":"Очки Gucci66: Белые очки с темной оптикой","cost":55000,"donate":0},
			"glasses67":{"name":"Очки","desc":"Очки Gucci67: Серебристые очки белой оптикой","cost":55000,"donate":0},
			"glasses68":{"name":"Очки","desc":"Очки Gucci68: Серебристые очки с красной оптикой","cost":55000,"donate":0},
			"glasses69":{"name":"Очки","desc":"Очки Gucci69: Огненные очки с прозрачной оптикой","cost":55000,"donate":0},
			"glasses70":{"name":"Очки","desc":"Очки Gucci70: Черные с прозрачной оптикой#3","cost":55000,"donate":0},
			"glasses71":{"name":"Очки","desc":"Очки Ic Berlin71: Черные очки с темно красной оптикой","cost":34000,"donate":0},
			"glasses72":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses73":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses74":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses75":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses76":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses77":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses78":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses79":{"name":"Очки","desc":"Очки Ic Berlin79: Огненные очки с прозрачной оптикой","cost":34000,"donate":0},
			"glasses80":{"name":"Очки","desc":"Очки Ic Berlin80: Черные с прозрачной оптикой: Ic Berlin","cost":34000,"donate":0},
			"glasses81":{"name":"Очки","desc":"очки Adidas81: Серые очки с розовой дужками и салатовой оптикой","cost":22000,"donate":0},
			"glasses82":{"name":"Очки","desc":"очки Adidas82: Черные очки с оранжевой оптикой: Adidas","cost":22000,"donate":0},
			"glasses83":{"name":"Очки","desc":"очки Adidas83: Синии очки с белыми дужками и темной оптикой","cost":22000,"donate":0},
			"glasses84":{"name":"Очки","desc":"очки Adidas84: Красные с белыми дужками и красно-желтой оптикой","cost":22000,"donate":0},
			"glasses85":{"name":"Очки","desc":"очки Adidas85: Черные с белыми дужками и голубо-желтый оптикой","cost":22000,"donate":0},
			"glasses86":{"name":"Очки","desc":"очки Adidas86: Черные с красными дужками и красной оптикой","cost":22000,"donate":0},
			"glasses87":{"name":"Очки","desc":"очки Adidas87: Черные с серыми дужками и зеленой оптикой","cost":22000,"donate":0},
			"glasses88":{"name":"Очки","desc":"очки Adidas88: Розовые с серыми дужками и желтой оптикой","cost":22000,"donate":0},
			"glasses89":{"name":"Очки","desc":"очки Adidas89: Огненные с желтыми дужками и с прозрачной оптикой","cost":22000,"donate":0},
			"glasses90":{"name":"Очки","desc":"очки Adidas90: Черные с прозрачной оптикой","cost":22000,"donate":0},
			"glasses91":{"name":"Очки","desc":"Очки Vogue91: Белые с желто-бирюзовой оптикой","cost":18000,"donate":0},
			"glasses92":{"name":"Очки","desc":"Очки Vogue92: Черные с темной оптикой","cost":18000,"donate":0},
			"glasses93":{"name":"Очки","desc":"Очки Vogue93: Черные зеленой окантовкой и темной оптикой","cost":18000,"donate":0},
			"glasses94":{"name":"Очки","desc":"Очки Vogue94: Бело-черные с серой оптикой","cost":18000,"donate":0},
			"glasses95":{"name":"Очки","desc":"Очки Vogue95: Черно-бежовые с бежевой оптикой","cost":18000,"donate":0},
			"glasses96":{"name":"Очки","desc":"Очки Vogue96: Черные с белом узором и с темной оптикой","cost":18000,"donate":0},
			"glasses97":{"name":"Очки","desc":"Очки Vogue97: Синии с белым узором и темной оптикой","cost":18000,"donate":0},
			"glasses98":{"name":"Очки","desc":"Очки Vogue98: Розовые с белым узором и темной оптикой","cost":18000,"donate":0},
			"glasses99":{"name":"Очки","desc":"Очки Vogue99: Огненные с прозрачной оптикой","cost":18000,"donate":0},
			"glasses100":{"name":"Очки","desc":"Очки Vogue100: Черные с прозрачной оптикой","cost":18000,"donate":0},
			"glasses101":{"name":"Очки","desc":"Очки Fendi101: Черные с темной оптикой","cost":42000,"donate":0},
			"glasses102":{"name":"Очки","desc":"Очки Fendi102: Черные с белой оптикой","cost":42000,"donate":0},
			"glasses103":{"name":"Очки","desc":"Очки Fendi103: Золотые с темной оптикой","cost":42000,"donate":0},
			"glasses104":{"name":"Очки","desc":"Очки Fendi104: Черные с темной оптикой","cost":42000,"donate":0},
			"glasses105":{"name":"Очки","desc":"Очки Fendi105: Желтые и фиолетовой оптикой","cost":42000,"donate":0},
			"glasses106":{"name":"Очки","desc":"Очки Fendi106: Коричневые с зеленой оптикой","cost":42000,"donate":0},
			"glasses107":{"name":"Очки","desc":"Очки Fendi107: Золотые с темной оптикой","cost":42000,"donate":0},
			"glasses108":{"name":"Очки","desc":"Очки Fendi108: Черные с белой оптикой","cost":42000,"donate":0},
			"glasses109":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses110":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses111":{"name":"Очки","desc":"Очки Burberry111: Черные с прозрачной оптикой#1","cost":19000,"donate":0},
			"glasses112":{"name":"Очки","desc":"Очки Burberry112: Черные с прозрачной оптикой#2","cost":19000,"donate":0},
			"glasses113":{"name":"Очки","desc":"Очки Burberry113: Розовые с прозрачной оптикой","cost":19000,"donate":0},
			"glasses114":{"name":"Очки","desc":"Очки Burberry114: Зеленые с прозрачной оптикой","cost":19000,"donate":0},
			"glasses115":{"name":"Очки","desc":"Очки Burberry115: Красные с прозрачной оптикой","cost":19000,"donate":0},
			"glasses116":{"name":"Очки","desc":"Очки Burberry116: Бирюзовые с прозрачной подошвой","cost":19000,"donate":0},
			"glasses117":{"name":"Очки","desc":"Очки Burberry117: Ярко-розовые с прозрачной оптикой","cost":19000,"donate":0},
			"glasses118":{"name":"Очки","desc":"Очки Burberry118: Ярко-синие с прозрачной оптикой","cost":19000,"donate":0},
			"glasses119":{"name":"Очки","desc":"Очки Burberry119: Огненные с прозрачной оптикой","cost":19000,"donate":0},
			"glasses120":{"name":"Очки","desc":"Очки Burberry120: Черные с прозрачной оптикой","cost":19000,"donate":0},
			"glasses121":{"name":"Очки","desc":"Очки Valentin Yudashkin121: Черные с фиолетовой","cost":17000,"donate":0},
			"glasses122":{"name":"Очки","desc":"Очки Valentin Yudashkin122: Темно-зеленой с прозрачной оптикой","cost":17000,"donate":0},
			"glasses123":{"name":"Очки","desc":"Очки Valentin Yudashkin123: фиолетовые с темной оптикой","cost":17000,"donate":0},
			"glasses124":{"name":"Очки","desc":"Очки Valentin Yudashkin124: Черные бирюзовыми дужками и темной оптикой","cost":17000,"donate":0},
			"glasses125":{"name":"Очки","desc":"Очки Valentin Yudashkin125: Бежевые с прозрачной оптикой","cost":17000,"donate":0},
			"glasses126":{"name":"Очки","desc":"Очки Valentin Yudashkin126: Розовые с фиолетовой оптикой","cost":17000,"donate":0},
			"glasses127":{"name":"Очки","desc":"Очки Valentin Yudashkin127: Белые с фиолетовой оптикой","cost":17000,"donate":0},
			"glasses128":{"name":"Очки","desc":"Очки Valentin Yudashkin128: Огненные с прозрачной оптикой","cost":17000,"donate":0},
			"glasses129":{"name":"Очки","desc":"Очки Valentin Yudashkin129: Черные с прозрачной оптикой","cost":17000,"donate":0},
			"glasses130":{"name":"Очки","desc":"Очки Valentin Yudashkin130: Белые с прозрачной оптикой","cost":17000,"donate":0},
			"glasses131":{"name":"Очки","desc":"Очки Serengeti131: Серые с темной оптикой","cost":23500,"donate":0}, 
			"glasses132":{"name":"Очки","desc":"Очки Serengeti132: Серые с темной оптикой","cost":23500,"donate":0}, 
			"glasses133":{"name":"Очки","desc":"Очки Serengeti133: Бежевые с темной оптикой","cost":23500,"donate":0},
			"glasses134":{"name":"Очки","desc":"Очки Serengeti134: Черные с темной оптикой","cost":23500,"donate":0},
			"glasses135":{"name":"Очки","desc":"Очки Serengeti135: Желтые с темной оптикой","cost":23500,"donate":0},
			"glasses136":{"name":"Очки","desc":"Очки Serengeti136: бледно коричневые с зеленой оптикой","cost":23500,"donate":0},
			"glasses137":{"name":"Очки","desc":"Очки Serengeti137: Золотые с темной оптикой","cost":23500,"donate":0},
			"glasses138":{"name":"Очки","desc":"Очки Serengeti138: Черные с серыми дужками и серой оптикой","cost":23500,"donate":0},
			"glasses139":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses140":{"name":"Очки","desc":"Описание","cost":4500,"donate":0},
			"glasses141":{"name":"Очки","desc":"Очки Bvlgari141: Черные с темной оптикой","cost":27000,"donate":0},
			"glasses142":{"name":"Очки","desc":"Очки Bvlgari142: Серые с желтыми дужками темной оптикой","cost":27000,"donate":0},
			"glasses143":{"name":"Очки","desc":"Очки Bvlgari143: Серые с розовыми дужками и темной оптикой","cost":27000,"donate":0},
			"glasses144":{"name":"Очки","desc":"Очки Bvlgari144: Огненные с темной оптикой","cost":27000,"donate":0},
			"glasses145":{"name":"Очки","desc":"Очки Bvlgari145: Бледно желтые с темной оптикой","cost":27000,"donate":0},
			"glasses146":{"name":"Очки","desc":"Очки Bvlgari146: Красные с черными дужками и темной оптикой","cost":27000,"donate":0},
			"glasses147":{"name":"Очки","desc":"Очки Bvlgari147: Желтые с белыми дужками и белой оптикой","cost":27000,"donate":0},
			"glasses148":{"name":"Очки","desc":"Очки Bvlgari148: Темно красные с зелеными дужками и прозрачной оптикой","cost":27000,"donate":0},
			"glasses149":{"name":"Очки","desc":"Очки Bvlgari149: Огненные с прозрачной оптикой","cost":27000,"donate":0},
			"glasses150":{"name":"Очки","desc":"Очки Bvlgari150: Черные с прозрачной оптикой","cost":27000,"donate":0},
			"glasses151":{"name":"Очки","desc":"Очки Persol151: Черные с прозрачной оптикой","cost":41000,"donate":0},
			"glasses152":{"name":"Очки","desc":"Очки Persol152: Бело черные с фиолетовой оптикой","cost":41000,"donate":0},
			"glasses153":{"name":"Очки","desc":"Очки Persol153: Темно красные прозрачной оптикой","cost":41000,"donate":0},
			"glasses154":{"name":"Очки","desc":"Очки Persol154: Радость малышка","cost":41000,"donate":0},
			"glasses155":{"name":"Очки","desc":"Очки Persol155: Бледно красные с желтыми дужками и зеленой оптикой","cost":41000,"donate":0},
			"glasses156":{"name":"Очки","desc":"Очки Persol156: Голубые с прозрачной оптикой","cost":41000,"donate":0},
			"glasses157":{"name":"Очки","desc":"Очки Persol157: Черные с красными дужками и прозрачной оптикой","cost":41000,"donate":0},
			"glasses158":{"name":"Очки","desc":"Очки Persol158: Зеленые с розовыми дужками и прозрачной оптикой","cost":41000,"donate":0}
		},
		"watch":{
			"watch1":{"name":"Часы Corum Miss GOLDEN #1","desc":"Описание","cost":210000,"donate":0}
		},
		"bracelet":{
			"bracelet1":{"name":"Браслет Collare GOLDEN #1","desc":"Описание","cost":38000,"donate":0}
		},
		"tors":{
			"tors1":{"name":"Топик","desc":"Топик серого цвета","cost":37500,"donate":0},
			"tors2":{"name":"Футболка","desc":"Футболка GCDS1: Белая","cost":37500,"donate":0},
			"tors3":{"name":"Футболка","desc":"Футболка GCDS2: Розовая","cost":37500,"donate":0},
			"tors4":{"name":"Футболка","desc":"Футболка GCDS3: Черная","cost":37500,"donate":0},
			"tors5":{"name":"Футболка","desc":"Футболка GCDS4: Желтая","cost":37500,"donate":0},
			"tors6":{"name":"Футболка","desc":"Футболка GCDS5: Красная","cost":37500,"donate":0},
			"tors7":{"name":"Футболка","desc":"Футболка GCDS6: Голубая","cost":37500,"donate":0},
			"tors8":{"name":"Футболка","desc":"Футболка GCDS7: Синяя","cost":37500,"donate":0},
			"tors9":{"name":"Футболка","desc":"Футболка GCDS8: Бежевая","cost":37500,"donate":0},
			"tors10":{"name":"Футболка","desc":"Футболка GCDS9: Ярко-розовая","cost":37500,"donate":0},
			"tors11":{"name":"Футболка","desc":"Футболка GCDS10: Зеленая","cost":37500,"donate":0},
			"tors12":{"name":"Футболка","desc":"Футболка GCDS11: Белая с черными краями","cost":37500,"donate":0},
			"tors13":{"name":"Футболка","desc":"Футболка GCDS12: Серая","cost":37500,"donate":0},
			"tors14":{"name":"Футболка","desc":"Футболка GCDS13: Леопардовая белая","cost":37500,"donate":0},
			"tors15":{"name":"Футболка","desc":"Футболка GCDS14: Черная с белыми краями","cost":37500,"donate":0},
			"tors16":{"name":"Футболка","desc":"Футболка GCDS15: Голубая с белыми краями","cost":37500,"donate":0},
			"tors17":{"name":"Футболка","desc":"Футболка GCDS16: Полосатая черная","cost":37500,"donate":0},
			"tors18":{"name":"Рубашка","desc":"Рубашка Marni17: Белая","cost":46900,"donate":0},
			"tors19":{"name":"Рубашка","desc":"Рубашка Marni18: Черная","cost":46900,"donate":0},
			"tors20":{"name":"Рубашка","desc":"Рубашка Marni19: Бежевая","cost":46900,"donate":0},
			"tors21":{"name":"Рубашка","desc":"Рубашка Marni20: Голубая в полоску","cost":46900,"donate":0},
			"tors22":{"name":"Рубашка","desc":"Рубашка Marni21: Белая в розовую полоску","cost":46900,"donate":0},
			"tors23":{"name":"Рубашка","desc":"Рубашка Marni22: Голубая в клетку","cost":46900,"donate":0},
			"tors24":{"name":"Майка","desc":"Майка EA7 23: Черная с принтом","cost":19000,"donate":0},
			"tors25":{"name":"Майка","desc":"Майка EA7 24: Белая с принтом","cost":19000,"donate":0},
			"tors26":{"name":"Майка","desc":"Майка EA7 25: Розовая с принтом","cost":19000,"donate":0},
			"tors27":{"name":"Майка","desc":"Майка EA7 26: Ярко-синяя с принтом","cost":19000,"donate":0},
			"tors28":{"name":"Майка7","desc":"Майка EA7 27: Темно-синяя с принтом","cost":19000,"donate":0},
			"tors29":{"name":"Балахон","desc":"Балахон Boss28: Темно-серый","cost":45000,"donate":0},
			"tors30":{"name":"Рубашка","desc":"Рубашка Armani29: Черная","cost":51500,"donate":0},
			"tors31":{"name":"Майка","desc":"Майка N21 30: Красная","cost":14300,"donate":0},
			"tors32":{"name":"Майка","desc":"Майка N21 31: Розовая","cost":14300,"donate":0},
			"tors33":{"name":"Майка","desc":"Майка N21 32: Голубая","cost":14300,"donate":0},
			"tors34":{"name":"Майка","desc":"Майка N21 33: Фиолетовая с розовыми полосками","cost":14300,"donate":0},
			"tors35":{"name":"Майка","desc":"Майка N21 34: Желтая с голубыми полосками","cost":14300,"donate":0},
			"tors36":{"name":"Майка","desc":"Майка N21 35: Ярко-красная","cost":14300,"donate":0},
			"tors37":{"name":"Майка","desc":"Майка N21 36: Фиолетовая","cost":14300,"donate":0},
			"tors38":{"name":"Пальто","desc":"Пальто KASSL EDITIONS37: Коричневое","cost":52000,"donate":0},
			"tors39":{"name":"Водолазка","desc":"Водолазка Pinko38: Серая","cost":20999,"donate":0},
			"tors40":{"name":"Водолазка","desc":"Водолазка Pinko39: Темно-красная","cost":20999,"donate":0},
			"tors41":{"name":"Водолазка","desc":"Водолазка Pinko40: Коричневая","cost":20999,"donate":0},
			"tors42":{"name":"Водолазка","desc":"Водолазка Pinko41: Черная","cost":20999,"donate":0},
			"tors43":{"name":"Водолазка","desc":"Водолазка Pinko42: Серая","cost":20999,"donate":0},
			"tors44":{"name":"Водолазка","desc":"Водолазка Pinko43: Бежевая","cost":20999,"donate":0},
			"tors45":{"name":"Топ","desc":"Топ Patrizia Pepe44: Черный","cost":11000,"donate":0},
			"tors46":{"name":"Топ","desc":"Топ Patrizia Pepe45: Серый","cost":11000,"donate":0},
			"tors47":{"name":"Топ","desc":"Топ Patrizia Pepe46: Темно-красный","cost":11000,"donate":0},
			"tors48":{"name":"Топ","desc":"Топ Patrizia Pepe47: Белый","cost":11000,"donate":0},
			"tors49":{"name":"Топ","desc":"Топ Patrizia Pepe48: Хаки","cost":11000,"donate":0},
			"tors50":{"name":"Топ","desc":"Топ Patrizia Pepe49: Камуфляжный","cost":11000,"donate":0},
			"tors51":{"name":"Бомбер","desc":"Бомбер Hugo50: Розово-персиковый","cost":41000,"donate":0},
			"tors52":{"name":"Бомбер","desc":"Бомбер Hugo51: Розово-синий","cost":41000,"donate":0},
			"tors53":{"name":"Бомбер","desc":"Бомбер Hugo52: Мятно-фиолетовый","cost":41000,"donate":0},
			"tors54":{"name":"Бомбер","desc":"Бомбер Hugo53: Желто-серый","cost":41000,"donate":0},
			"tors55":{"name":"Бомбер","desc":"Бомбер Hugo54: Оранжевый","cost":41000,"donate":0},
			"tors56":{"name":"Бомбер","desc":"Бомбер Hugo55: Синий","cost":41000,"donate":0},
			"tors57":{"name":"Бомбер","desc":"Бомбер Hugo56: Мятный","cost":41000,"donate":0},
			"tors58":{"name":"Бомбер","desc":"Бомбер Hugo57: Желто-фиолетовый","cost":41000,"donate":0},
			"tors59":{"name":"Бомбер","desc":"Бомбер Hugo58: Голубо-красный","cost":41000,"donate":0},
			"tors60":{"name":"Бомбер","desc":"Бомбер Hugo59: Оранжево-белый","cost":41000,"donate":0},
			"tors61":{"name":"Бомбер","desc":"Бомбер Hugo60: Оранжево-Желтый","cost":41000,"donate":0},
			"tors62":{"name":"Бомбер","desc":"Бомбер Hugo61: Белый","cost":41000,"donate":0},
			"tors63":{"name":"Бомбер","desc":"Бомбер Hugo62: Красный","cost":41000,"donate":0},
			"tors64":{"name":"Бомбер","desc":"Бомбер Hugo63: Темно-леопардовый","cost":41000,"donate":0},
			"tors65":{"name":"Бомбер","desc":"Бомбер Hugo64: Розово-белый","cost":41000,"donate":0},
			"tors66":{"name":"Бомбер","desc":"Бомбер Hugo65: Персиковый","cost":41000,"donate":0},
			"tors67":{"name":"Бомбер","desc":"Бомбер Hugo66: Черно-белый","cost":41000,"donate":0},
			"tors68":{"name":"Бомбер","desc":"Бомбер Hugo67: Желтый","cost":41000,"donate":0},
			"tors69":{"name":"Бомбер","desc":"Бомбер Hugo68: Голубой","cost":41000,"donate":0},
			"tors70":{"name":"Бомбер","desc":"Бомбер Hugo69: Розоывй","cost":41000,"donate":0},
			"tors71":{"name":"Бомбер","desc":"Бомбер Hugo70: Зеленый","cost":41000,"donate":0},
			"tors72":{"name":"Бомбер","desc":"Бомбер Hugo71: Желтый","cost":41000,"donate":0},
			"tors73":{"name":"Бомбер","desc":"Бомбер Hugo72: Темно-синий","cost":41000,"donate":0},
			"tors74":{"name":"Бомбер","desc":"Бомбер Hugo73: Розовый","cost":41000,"donate":0},
			"tors75":{"name":"Футболка","desc":"Футболка новогодняя (обычная)","cost":16000,"donate":0},
			"tors76":{"name":"Футболка","desc":"Футболка новогодняя (эльфийская)","cost":16500,"donate":0},
			"tors77":{"name":"Футболка","desc":"Футболка новогодняя (белого цвета с шарфом)","cost":16000,"donate":0},
			"tors78":{"name":"Футболка","desc":"Футболка новогодняя (коричневая с колокольчиком)","cost":16000,"donate":0},
			"tors79":{"name":"Кофта","desc":"Кофта дед-мороз (обычная)","cost":23000,"donate":0},
			"tors80":{"name":"Кофта","desc":"Кофта дед-мороз (зеленого цвета) ","cost":24000,"donate":0},
			"tors81":{"name":"Кофта","desc":"Кофта дед-мороз (серого цвета, с белой кляксой)","cost":25000,"donate":0},
			"tors82":{"name":"Куртка","desc":"Куртка помощника санты","cost":38000,"donate":0},
			"tors83":{"name":"Кофта","desc":"Премиум новогодняя кофта (с ремнем)","cost":39000,"donate":0},
			"tors84":{"name":"Кофта","desc":"Премиум новогодняя кофта (зеленого цвета с ремнем)","cost":39000,"donate":0},
			"tors85":{"name":"Кофта","desc":"Премиум новогодняя кофта (серого цвета с кляксой)","cost":39000,"donate":0},
			"tors86":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (синего цвета с елкой)","cost":40000,"donate":0},
			"tors87":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (красного цвета с оленями)","cost":40000,"donate":0},
			"tors88":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (серого цвета с оленями)","cost":40000,"donate":0},
			"tors89":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (зелного цвета с подарками)","cost":40000,"donate":0},
			"tors90":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (темно серого цвета с елкой)","cost":40000,"donate":0},
			"tors91":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (разноцветная с снеговиком)","cost":40000,"donate":0},
			"tors92":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (красного цвета в ромб)","cost":40000,"donate":0},
			"tors93":{"name":"Кофта","desc":"Эксклюзивная новогодняя кофта (зелёного цвета в ромб)","cost":40000,"donate":0},
			"tors94":{"name":"Кофта","desc":"Новогодняя кофта (синего цвета с елкой)","cost":20000,"donate":0},
			"tors95":{"name":"Кофта","desc":"Новогодняя кофта (красного цвета с оленями)","cost":20000,"donate":0},
			"tors96":{"name":"Кофта","desc":"Новогодняя кофта (серого цвета с оленями)","cost":20000,"donate":0},
			"tors97":{"name":"Кофта","desc":"Новогодняя кофта (зелного цвета с подарками)","cost":20000,"donate":0},
			"tors98":{"name":"Кофта","desc":"Новогодняя кофта (темно серого цвета с елкой)","cost":20000,"donate":0},
			"tors99":{"name":"Кофта","desc":"Новогодняя кофта (разноцветная с снеговиком)","cost":20000,"donate":0},
			"tors100":{"name":"Кофта","desc":"Новогодняя кофта (красного цвета в ромб)","cost":20000,"donate":0},
			"tors101":{"name":"Кофта","desc":"Новогодняя кофта (зелёного цвета в ромб)","cost":20000,"donate":0},
			"tors102":{"name":"Балахон Sayonara Boy #1","desc":"Балахон черного цвета с феолетовым карманом","cost":21000,"donate":0},
			"tors103":{"name":"Балахон Sayonara Boy #1","desc":"Балахон черного цвета с эмблемой BIGNESS","cost":21000,"donate":0},
			"tors104":{"name":"Балахон Sayonara Boy #2","desc":"Балахон желтого цвета с эмблемой BIGNESS","cost":22100,"donate":0},
			"tors105":{"name":"Балахон Sayonara Boy #3","desc":"Балахон черного цвета с желтыми руковами","cost":22200,"donate":0},
			"tors106":{"name":"Балахон Sayonara Boy #4","desc":"Балахон черного цвета с принтом","cost":22300,"donate":0},
			"tors107":{"name":"Балахон Sayonara Boy #5","desc":"Балахон желтого цвета с принтом","cost":22400,"donate":0},
			"tors108":{"name":"Балахон Sayonara Boy #6","desc":"Балахон черного цвета с эмблемой Х","cost":22500,"donate":0},
			"tors109":{"name":"Балахон Sayonara Boy #7","desc":"Балахон желтого цвета с эмблемой Х","cost":22600,"donate":0},
			"tors110":{"name":"Бомбер Mango #1","desc":"Бомбер расстегнутый черного цвета с эмблемой BIGNESS","cost":23000,"donate":0},
			"tors111":{"name":"Бомбер Mango #2","desc":"Бомбер расстегнутый желтого цвета с эмблемой BIGNESS","cost":23100,"donate":0},
			"tors112":{"name":"Бомбер Mango #3","desc":"Бомбер расстегнутый черного цвета с желтыми руковами","cost":23200,"donate":0},
			"tors113":{"name":"Бомбер Mango #4","desc":"Бомбер расстегнутый черного цвета с принтом","cost":23300,"donate":0},
			"tors114":{"name":"Бомбер Mango #5","desc":"Бомбер расстегнутый желтого цвета с принтом","cost":23400,"donate":0},
			"tors115":{"name":"Бомбер Mango #6","desc":"Бомбер расстегнутый черного цвета с эмблемой Х","cost":23500,"donate":0},
			"tors116":{"name":"Бомбер Mango #7","desc":"Бомбер расстегнутый желтого цвета с эмблемой Х","cost":23600,"donate":0},
			"tors117":{"name":"Рубашка Stradivar #1","desc":"Рубашка с карманами черного цвета","cost":17000,"donate":0},
			"tors118":{"name":"Рубашка Stradivar #2","desc":"Рубашка с карманами зеленого цвета","cost":17100,"donate":0},
			"tors119":{"name":"Рубашка Stradivar #3","desc":"Рубашка с карманами белого цвета","cost":17200,"donate":0},
			"tors120":{"name":"Рубашка Stradivar #4","desc":"Рубашка с карманами бежевого цвета","cost":17300,"donate":0},
			"tors121":{"name":"Рубашка Stradivar #5","desc":"Рубашка с карманами темно зеленого цвета","cost":17400,"donate":0},
			"tors122":{"name":"Рубашка Stradivar #6","desc":"Рубашка с карманами ярко белово цвета","cost":17500,"donate":0},
			"tors123":{"name":"Рубашка Stradivar #7","desc":"Рубашка с карманами кремового цвета","cost":17600,"donate":0},
			"tors124":{"name":"Рубашка Stradivar #8","desc":"Рубашка с карманами серого цвета","cost":17600,"donate":0},
			"tors125":{"name":"Рубашка Stradivar #9","desc":"Рубашка с карманами выгоревшего черного цвета","cost":17600,"donate":0},
			"tors126":{"name":"Футболка Reebok #1","desc":"Футболка с принтом огонь","cost":15400,"donate":0},
			"tors127":{"name":"Футболка Reebok #2","desc":"Футболка с принтом кубики","cost":15500,"donate":0},
			"tors128":{"name":"Футболка Reebok #3","desc":"Футболка с принтом GET METAL","cost":15600,"donate":0},
			"tors129":{"name":"Футболка Reebok #4","desc":"Футболка синего цвета","cost":15600,"donate":0},
			"tors130":{"name":"Футболка Reebok #5","desc":"Футболка красного цвета","cost":15600,"donate":0},
			"tors131":{"name":"Рубашка Befree1 #1","desc":"Рубашка белого цвета","cost":31000,"donate":0},
			"tors132":{"name":"Рубашка Befree1 #2","desc":"Рубашка бежевого цвета","cost":31100,"donate":0},
			"tors133":{"name":"Рубашка Befree1 #3","desc":"Рубашка темно синего цвета","cost":31200,"donate":0},
			"tors134":{"name":"Рубашка Befree1 #4","desc":"Рубашка черного цвета","cost":31300,"donate":0},
			"tors135":{"name":"Рубашка Befree1 #5","desc":"Рубашка болотного цвета","cost":31400,"donate":0},
			"tors136":{"name":"Рубашка Befree1 #6","desc":"Рубашка ярко белого цвета","cost":31500,"donate":0},
			"tors137":{"name":"Рубашка Befree1 #7","desc":"Рубашка темно зеленого цвета","cost":31600,"donate":0},
			"tors138":{"name":"Рубашка Befree1 #8","desc":"Рубашка бардового цвета","cost":31700,"donate":0},
			"tors139":{"name":"Рубашка Befree1 #9","desc":"Рубашка мятного цвета","cost":31800,"donate":0},
			"tors140":{"name":"Рубашка Befree1 #10","desc":"Рубашка серого цвета","cost":31800,"donate":0},
			"tors141":{"name":"Рубашка Befree1 #11","desc":"Рубашка бледно голубого цвета","cost":31000,"donate":0},
			"tors142":{"name":"Рубашка Befree1 #12","desc":"Рубашка бледно розового цвета","cost":31100,"donate":0},
			"tors143":{"name":"Рубашка Befree1 #13","desc":"Рубашка грязно голубого цвета","cost":31200,"donate":0},
			"tors144":{"name":"Рубашка Befree1 #14","desc":"Рубашка темно синего цвета в горох","cost":31300,"donate":0},
			"tors145":{"name":"Рубашка Befree1 #15","desc":"Рубашка светло синего цвета в снежинку","cost":31400,"donate":0},
			"tors146":{"name":"Рубашка Befree1 #16","desc":"Рубашка голубого цвета с белыми полосками","cost":31500,"donate":0},
			"tors147":{"name":"Рубашка Befree1 #17","desc":"Рубашка серого цвета с белыми полосками","cost":31600,"donate":0},
			"tors148":{"name":"Рубашка Befree1 #18","desc":"Рубашка красного цвета в белый квадрат","cost":31700,"donate":0},
			"tors149":{"name":"Рубашка Befree1 #19","desc":"Рубашка голубого цвета в белый квадрат","cost":31800,"donate":0},
			"tors150":{"name":"Рубашка Befree1 #20","desc":"Рубашка голубого цвета в белый широкий квадрат","cost":31800,"donate":0},
			"tors151":{"name":"Полиция МВД мл. лейт.","desc":"Верх МВД Полиции, с рукавами, мл. лейтенант","cost":10000,"donate":0},
			"tors152":{"name":"Полиция МВД лейт.","desc":"Верх МВД Полиции, с рукавами, лейтенант","cost":10000,"donate":0},
			"tors153":{"name":"Полиция МВД ст. лейт.","desc":"Верх МВД Полиции, с рукавами, ст. лейтенант","cost":10000,"donate":0},
			"tors154":{"name":"Полиция МВД капитан","desc":"Верх МВД Полиции, с рукавами, капитан","cost":10000,"donate":0},
			"tors155":{"name":"Полиция МВД ст. серж.","desc":"Верх МВД Полиции, с рукавами, ст. сержант","cost":10000,"donate":0},
			"tors156":{"name":"Полиция МВД мл. серж.","desc":"Верх МВД Полиции, с рукавами, мл. сержант","cost":10000,"donate":0},
			"tors157":{"name":"Полиция МВД серж.","desc":"Верх МВД Полиции, с рукавами, сержант","cost":10000,"donate":0},
			"tors158":{"name":"Полиция МВД мл. лейт.","desc":"Верх МВД Полиции, без рукавов, мл. лейтенант","cost":10000,"donate":0},
			"tors159":{"name":"Полиция МВД лейт.","desc":"Верх МВД Полиции, без рукавов, лейтенант","cost":10000,"donate":0},
			"tors160":{"name":"Полиция МВД ст. лейт.","desc":"Верх МВД Полиции, без рукавов, ст. лейтенант","cost":10000,"donate":0},
			"tors161":{"name":"Полиция МВД капитан","desc":"Верх МВД Полиции, без рукавов, капитан","cost":10000,"donate":0},
			"tors162":{"name":"Полиция МВД ст. серж.","desc":"Верх МВД Полиции, без рукавов, ст. сержант","cost":10000,"donate":0},
			"tors163":{"name":"Полиция МВД мл. серж.","desc":"Верх МВД Полиции, без рукавов, мл. сержант","cost":10000,"donate":0},
			"tors164":{"name":"Полиция МВД серж.","desc":"Верх МВД Полиции, без рукавов, сержант","cost":10000,"donate":0},
			"tors165":{"name":"Полиция ДПС лейт.","desc":"Верх ДПС Полиции, лейтенант","cost":10000,"donate":0},
			"tors166":{"name":"Полиция ДПС капитан","desc":"Верх ДПС Полиции, капитан","cost":10000,"donate":0},
			"tors167":{"name":"Куртка пожарника","desc":"Специальная огнеупорная куртка","cost":20000,"donate":0}
		},
		"pants":{
			"pants1":{"name":"Штаны","desc":"Штаны городской камуфляж","cost":21500,"donate":0},
			"pants2":{"name":"Джинсы Love Moschino #1","desc":"Джинсы Love Moschino: Коричневые","cost":21500,"donate":0},
			"pants3":{"name":"Джинсы Love Moschino #2","desc":"Джинсы Love Moschino: Серые","cost":21500,"donate":0},
			"pants4":{"name":"Джинсы Love Moschino #3","desc":"Джинсы Love Moschino: Светло-серые","cost":21500,"donate":0},
			"pants5":{"name":"Джинсы Love Moschino #4","desc":"Джинсы Love Moschino: Белые","cost":21500,"donate":0},
			"pants6":{"name":"Джинсы Love Moschino #5","desc":"Джинсы Love Moschino: Бирюзовые","cost":21500,"donate":0},
			"pants7":{"name":"Джинсы Love Moschino #6","desc":"Джинсы Love Moschino: Оранжевые","cost":21500,"donate":0},
			"pants8":{"name":"Джинсы Love Moschino #7","desc":"Джинсы Love Moschino: Фиолетовые","cost":21500,"donate":0},
			"pants9":{"name":"Джинсы Love Moschino #8","desc":"Джинсы Love Moschino: Голубые","cost":21500,"donate":0},
			"pants10":{"name":"Джинсы Love Moschino #9","desc":"Джинсы Love Moschino: Темно-серые","cost":21500,"donate":0},
			"pants11":{"name":"Джинсы Love Moschino #10","desc":"Джинсы Love Moschino: Черные","cost":21500,"donate":0},
			"pants12":{"name":"Джинсы Love Moschino #11","desc":"Джинсы Love Moschino: Темно-красные","cost":21500,"donate":0},
			"pants13":{"name":"Джинсы Love Moschino #12","desc":"Джинсы Love Moschino: Белые в крапинку","cost":21500,"donate":0},
			"pants14":{"name":"Джинсы Love Moschino #13","desc":"Джинсы Love Moschino: Синие с белыми пятнами","cost":21500,"donate":0},
			"pants15":{"name":"Джинсы Love Moschino #14","desc":"Джинсы Love Moschino: Серые с белыми пятнами","cost":21500,"donate":0},
			"pants16":{"name":"Джинсы Love Moschino #15","desc":"Джинсы Love Moschino: Светло-голубые с белыми пятнами","cost":21500,"donate":0},
			"pants17":{"name":"Джинсы Love Moschino #16","desc":"Джинсы Love Moschino: Золотистые с белыми пятнами","cost":21500,"donate":0},
			"pants18":{"name":"Брюки Emporio Armani #17","desc":"Брюки Emporio Armani: Белые","cost":45000,"donate":0},
			"pants19":{"name":"Брюки Emporio Armani #18","desc":"Брюки Emporio Armani: Синие","cost":45000,"donate":0},
			"pants20":{"name":"Брюки Emporio Armani #19","desc":"Брюки Emporio Armani: Фиолетовые","cost":45000,"donate":0},
			"pants21":{"name":"Брюки Emporio Armani #20","desc":"Брюки Emporio Armani: Голубые","cost":45000,"donate":0},
			"pants22":{"name":"Брюки Emporio Armani #21","desc":"Брюки Emporio Armani: Светло-серые с узором","cost":45000,"donate":0},
			"pants23":{"name":"Брюки Emporio Armani #22","desc":"Брюки Emporio Armani: Светло-коричневые","cost":45000,"donate":0},
			"pants24":{"name":"Брюки Emporio Armani #23","desc":"Брюки Emporio Armani: Желтые","cost":45000,"donate":0},
			"pants25":{"name":"Брюки Emporio Armani #24","desc":"Брюки Emporio Armani: Красные","cost":45000,"donate":0},
			"pants26":{"name":"Брюки Emporio Armani #25","desc":"Брюки Emporio Armani: Розовые","cost":45000,"donate":0},
			"pants27":{"name":"Брюки Emporio Armani #26","desc":"Брюки Emporio Armani: Темно-розовые","cost":45000,"donate":0},
			"pants28":{"name":"Брюки Love Moschino #27","desc":"Брюки Love Moschino: Темно-серые","cost":21500,"donate":0},
			"pants29":{"name":"Брюки Love Moschino #28","desc":"Брюки Love Moschino: Темно-красные","cost":21500,"donate":0},
			"pants30":{"name":"Брюки Love Moschino #29","desc":"Брюки Love Moschino: Черные","cost":21500,"donate":0},
			"pants31":{"name":"Юбка Bershka #30","desc":"Юбка Bershka: Красно-белая в полоску","cost":14500,"donate":0},
			"pants32":{"name":"Джинсы Boss #31","desc":"Джинсы Boss: Темно-серые узкие","cost":24900,"donate":0},
			"pants33":{"name":"Джинсы Boss #32","desc":"Джинсы Boss: Черные узкие с красным узором","cost":24900,"donate":0},
			"pants34":{"name":"Джинсы Boss #33","desc":"Джинсы Boss: Белые узкие","cost":24900,"donate":0},
			"pants35":{"name":"Джинсы Boss #34","desc":"Джинсы Boss: Красные узкие","cost":24900,"donate":0},
			"pants36":{"name":"Джинсы Boss #35","desc":"Джинсы Boss: Розовые узкие","cost":24900,"donate":0},
			"pants37":{"name":"Джинсы Boss #36","desc":"Джинсы Boss: Синие узкие","cost":24900,"donate":0},
			"pants38":{"name":"Джинсы Boss #37","desc":"Джинсы Boss: Болотные узкие","cost":24900,"donate":0},
			"pants39":{"name":"Джинсы Boss #38","desc":"Джинсы Boss: Светло-серые узкие","cost":24900,"donate":0},
			"pants40":{"name":"Джинсы Boss #39","desc":"Джинсы Boss: Светло-коричневые узкие","cost":24900,"donate":0},
			"pants41":{"name":"Джинсы Boss #40","desc":"Джинсы Boss: Коричневые узкие","cost":24900,"donate":0},
			"pants42":{"name":"Джинсы Boss #41","desc":"Джинсы Boss: Темно-коричневые узкие","cost":24900,"donate":0},
			"pants43":{"name":"Джинсы Boss #42","desc":"Джинсы Boss: Темно-красные узкие","cost":24900,"donate":0},
			"pants44":{"name":"Джинсы P Jean #43","desc":"Джинсы P Jean: Черные узкие с дырками","cost":19999,"donate":0},
			"pants45":{"name":"Джинсы P Jean #44","desc":"Джинсы P Jean: Красные узкие с дырками","cost":19999,"donate":0},
			"pants46":{"name":"Джинсы P Jean #45","desc":"Джинсы P Jean: Темно-красные узкие с дырками","cost":19999,"donate":0},
			"pants47":{"name":"Джинсы P Jean #46","desc":"Джинсы P Jean: Светло-коричневые узкие с дырками","cost":19999,"donate":0},
			"pants48":{"name":"Джинсы P Jean #47","desc":"Джинсы P Jean: Темно-красные узкие с дырками","cost":19999,"donate":0},
			"pants49":{"name":"Брюки Falconeri #48","desc":"Брюки Falconeri: Белые","cost":33000,"donate":0},
			"pants50":{"name":"Брюки Falconeri #49","desc":"Брюки Falconeri: Темно-серые","cost":33000,"donate":0},
			"pants51":{"name":"Брюки Falconeri #50","desc":"Брюки Falconeri: Бледно-зеленые","cost":33000,"donate":0},
			"pants52":{"name":"Брюки Falconeri #51","desc":"Брюки Falconeri: Светло-серые","cost":33000,"donate":0},
			"pants53":{"name":"Полиция МВД","desc":"Штаны полиции МВД","cost":10000,"donate":0},
			"pants54":{"name":"Полиция ДПС","desc":"Штаны полиции ДПС","cost":10000,"donate":0},
			"pants55":{"name":"Штаны пожарника","desc":"Специальные огнеупорные штаны","cost":15000,"donate":0}
		},
		"shoes":{
			"shoes1":{"name":"Кеды","desc":"Простые серые кеды","cost":59000,"donate":0},
			"shoes2":{"name":"Туфли","desc":"Туфли Casadei1: черные","cost":59000,"donate":0},
			"shoes3":{"name":"Туфли","desc":"Туфли Casadei2: серые","cost":59000,"donate":0},
			"shoes4":{"name":"Туфли","desc":"Туфли Casadei3: бежовые","cost":59000,"donate":0},
			"shoes5":{"name":"Туфли","desc":"Туфли Casadei4: темно синие","cost":59000,"donate":0},
			"shoes6":{"name":"Кеды","desc":"Кеды Nike5: Бело серые с белой подошвой","cost":17250,"donate":0},
			"shoes7":{"name":"Кеды","desc":"Кеды Nike6: Черные с белой подошвой","cost":17250,"donate":0},
			"shoes8":{"name":"Кеды","desc":"Кеды Nike7: Серые с белой подошвой","cost":17250,"donate":0},
			"shoes9":{"name":"Кеды","desc":"Кеды Nike8: Белые","cost":17250,"donate":0},
			"shoes10":{"name":"Кеды","desc":"Кеды Nike9: Синие с оранжевыми шнурками","cost":17250,"donate":0},
			"shoes11":{"name":"Кеды","desc":"Кеды Nike10: Бордовые с белыми шнурками и белой подошвой","cost":17250,"donate":0},
			"shoes12":{"name":"Кеды","desc":"Кеды Nike11: Нежно розовые с белой подошвой","cost":17250,"donate":0},
			"shoes13":{"name":"Кеды","desc":"Кеды Nike12: Нежно Голубые с белой подошвой","cost":17250,"donate":0},
			"shoes14":{"name":"Кеды","desc":"Кеды Nike13: Изумрудные с салатовыми шнурками и белой подошвой","cost":17250,"donate":0},
			"shoes15":{"name":"Кеды","desc":"Кеды Nike14: Леопардовые фиолетовый с белой подошвой","cost":17250,"donate":0},
			"shoes16":{"name":"Кеды","desc":"Кеды Nike15: Бежевые с белой подошвой","cost":17250,"donate":0},
			"shoes17":{"name":"Кеды","desc":"Кеды Nike16: Леопардовые бежево коричневые с белой подошвой","cost":17250,"donate":0},
			"shoes18":{"name":"Кеды","desc":"Кеды Nike17: С цветным принтом с белой подошвой","cost":17250,"donate":0},
			"shoes19":{"name":"Кеды","desc":"Кеды Nike18: Белые с розовыми шнурками с белой подошвой","cost":17250,"donate":0},
			"shoes20":{"name":"Кеды","desc":"Кеды Nike19: Белые с салатовыми шнурками","cost":17250,"donate":0},
			"shoes21":{"name":"Кеды","desc":"Кеды Nike20: Черные с розовыми шнурками","cost":17250,"donate":0},
			"shoes22":{"name":"Ботинки","desc":"Бот. UGG21: Коричневые","cost":14900,"donate":0},
			"shoes23":{"name":"Ботинки","desc":"Бот. UGG22: Черные","cost":14900,"donate":0},
			"shoes24":{"name":"Ботинки","desc":"Бот. UGG23: Серые","cost":14900,"donate":0},
			"shoes25":{"name":"Ботинки","desc":"Бот. UGG24: Бежевые","cost":14900,"donate":0},
			"shoes26":{"name":"Ботинки","desc":"Бот. UGG25: Белые","cost":14900,"donate":0},
			"shoes27":{"name":"Ботинки","desc":"Бот. UGG26: Светло серые","cost":14900,"donate":0},
			"shoes28":{"name":"Ботинки","desc":"Бот. UGG27: Леопардовые","cost":14900,"donate":0},
			"shoes29":{"name":"Ботинки","desc":"Бот. UGG28: С вышивкой#1","cost":14900,"donate":0},
			"shoes30":{"name":"Ботинки","desc":"Бот. UGG29: С вышивкой#2","cost":14900,"donate":0},
			"shoes31":{"name":"Ботинки","desc":"Бот. UGG30: Светло розовые","cost":14900,"donate":0},
			"shoes32":{"name":"Ботинки","desc":"Бот. UGG31: Берюзовые","cost":14900,"donate":0},
			"shoes33":{"name":"Ботинки","desc":"Бот. UGG32: Кислотно розовые","cost":14900,"donate":0},
			"shoes34":{"name":"Ботинки","desc":"Бот. UGG33: Бледно голубой","cost":14900,"donate":0},
			"shoes35":{"name":"Ботинки","desc":"Бот. UGG34: Бордовые","cost":14900,"donate":0},
			"shoes36":{"name":"Ботинки","desc":"Бот. UGG35: Светло коричневые","cost":14900,"donate":0},
			"shoes37":{"name":"Кеды","desc":"Кеды GUCCI36: Синии","cost":37999,"donate":0},
			"shoes38":{"name":"Кеды","desc":"Кеды GUCCI37: Черные с белой подошвой","cost":37999,"donate":0},
			"shoes39":{"name":"Кеды","desc":"Кеды GUCCI38: Белые","cost":37999,"donate":0},
			"shoes40":{"name":"Кеды","desc":"Кеды GUCCI39: Красные с белой подошвой","cost":37999,"donate":0},
			"shoes41":{"name":"Кеды","desc":"Кеды GUCCI40: Темно синии с белой подошвой","cost":37999,"donate":0},
			"shoes42":{"name":"Кеды","desc":"Кеды GUCCI41: Фиолетовые с надписью","cost":37999,"donate":0},
			"shoes43":{"name":"Кеды","desc":"Кеды GUCCI42: Зеленые с белой подошвой","cost":37999,"donate":0},
			"shoes44":{"name":"Кеды","desc":"Кеды GUCCI43: Фиолетовые с белой подошвой","cost":37999,"donate":0},
			"shoes45":{"name":"Кеды","desc":"Кеды GUCCI44: Красные в клетку с белой подошвой","cost":37999,"donate":0},
			"shoes46":{"name":"Кеды","desc":"Кеды GUCCI45: С военной расцветкой#1","cost":37999,"donate":0},
			"shoes47":{"name":"Кеды","desc":"Кеды GUCCI46: Желтые с белошй подошвой","cost":37999,"donate":0},
			"shoes48":{"name":"Кеды","desc":"Кеды GUCCI47: С военной расцветкой#2","cost":37999,"donate":0},
			"shoes49":{"name":"Кеды","desc":"Кеды GUCCI48: Голубые с белой подошвой","cost":37999,"donate":0},
			"shoes50":{"name":"Кеды","desc":"Кеды GUCCI49: Розовые леопардовые","cost":37999,"donate":0},
			"shoes51":{"name":"Кеды","desc":"Кеды GUCCI50: С рисунком#1","cost":37999,"donate":0},
			"shoes52":{"name":"Кеды","desc":"Кеды GUCCI51: С вышивкой#1","cost":37999,"donate":0},
			"shoes53":{"name":"Кеды","desc":"Кеды GUCCI52: Персиковые с белой подошвой","cost":37999,"donate":0},
			"shoes54":{"name":"Сланцы","desc":"Сланцы Jordan53: Черные","cost":12300,"donate":0},
			"shoes55":{"name":"Сланцы","desc":"Сланцы Jordan54: Бело зелёные","cost":12300,"donate":0},
			"shoes56":{"name":"Ботильоны","desc":"Ботил. BALDAN55: Черные","cost":39050,"donate":0},
			"shoes57":{"name":"Ботильоны","desc":"Ботил. BALDAN56: Белые с серыми ремешками","cost":39050,"donate":0},
			"shoes58":{"name":"Ботильоны","desc":"Ботил. BALDAN57: Красно бардовые","cost":39050,"donate":0},
			"shoes59":{"name":"Ботильоны","desc":"Ботил. BALDAN58: Белые","cost":39050,"donate":0},
			"shoes60":{"name":"Ботильоны","desc":"Ботил. BALDAN59: Коричневые","cost":39050,"donate":0},
			"shoes61":{"name":"Ботильоны","desc":"Ботил. BALDAN60: Бежевые","cost":39050,"donate":0},
			"shoes62":{"name":"Ботильоны","desc":"Ботил. BALDAN61: Коричневые с зелеными шнурками","cost":4500,"donate":0},
			"shoes63":{"name":"Ботильоны","desc":"Ботил. BALDAN62: Камуфляжные","cost":4500,"donate":0},
			"shoes64":{"name":"Ботильоны","desc":"Ботил. BALDAN63: Розовые","cost":4500,"donate":0},
			"shoes65":{"name":"Ботильоны","desc":"Ботил. BALDAN64: Зеленые","cost":4500,"donate":0},
			"shoes66":{"name":"Ботильоны","desc":"Ботил. BALDAN65: Темно коричневые","cost":4500,"donate":0},
			"shoes67":{"name":"Ботильоны","desc":"Ботил. BALDAN66: Коричневые с розовой подошвой","cost":4500,"donate":0},
			"shoes68":{"name":"Ботильоны","desc":"Ботил. BALDAN67: Голубые","cost":4500,"donate":0},
			"shoes69":{"name":"Ботильоны","desc":"Ботил. BALDAN68: Бледно коричневые","cost":39050,"donate":0},
			"shoes70":{"name":"Ботильоны","desc":"Ботил. BALDAN69: Ярко коричневые","cost":39050,"donate":0},
			"shoes71":{"name":"Ботильоны","desc":"Ботил. BALDAN70: Коричневые с серыми ремешками","cost":39050,"donate":0},
			"shoes72":{"name":"Кроссовки","desc":"Крос. Adidas71: Черные с фиолетовой подошвой","cost":35050,"donate":0},
			"shoes73":{"name":"Кроссовки","desc":"Крос. Adidas72: Белые","cost":35050,"donate":0},
			"shoes74":{"name":"Кроссовки","desc":"Крос. Adidas73: Темно серые аква","cost":35050,"donate":0},
			"shoes75":{"name":"Кроссовки","desc":"Крос. Adidas74: Белые с темно серой подошвой","cost":35050,"donate":0},
			"shoes76":{"name":"Кеды высокие","desc":"Кеды выс. Pull&Bear75: Белый с фиолетовым","cost":29000,"donate":0},
			"shoes77":{"name":"Кеды высокие","desc":"Кеды выс. Pull&Bear76: Серый с розовым","cost":29000,"donate":0},
			"shoes78":{"name":"Кеды высокие","desc":"Кеды выс. Pull&Bear77: Белые с серые","cost":29000,"donate":0},
			"shoes79":{"name":"Кеды высокие","desc":"Кеды выс. Pull&Bear78: Бело серые с красными шнурками","cost":29000,"donate":0},
			"shoes80":{"name":"Балетки","desc":"Бал. CAVIAR79: Черные","cost":36700,"donate":0},
			"shoes81":{"name":"Балетки","desc":"Бал. CAVIAR80: Черные с золотым мыском","cost":36700,"donate":0},
			"shoes82":{"name":"Балетки","desc":"Бал. CAVIAR81: Оранжывые с клеточным мыском","cost":36700,"donate":0},
			"shoes83":{"name":"Балетки","desc":"Бал. CAVIAR82: Розовые с черным мыском","cost":36700,"donate":0},
			"shoes84":{"name":"Балетки","desc":"Бал. CAVIAR83: Желтые с сером мыском","cost":36700,"donate":0},
			"shoes85":{"name":"Балетки","desc":"Бал. CAVIAR84: Белые с черном мыском","cost":36700,"donate":0},
			"shoes86":{"name":"Балетки","desc":"Бал. CAVIAR85: Белые с оранжевым мыском","cost":36700,"donate":0},
			"shoes87":{"name":"Балетки","desc":"Бал. CAVIAR86: Розовые с бледно красным мыском","cost":36700,"donate":0},
			"shoes88":{"name":"Балетки","desc":"Бал. CAVIAR87: Красные с золотым мыском","cost":36700,"donate":0},
			"shoes89":{"name":"Балетки","desc":"Бал. CAVIAR88: Леопардовые с черным мыском","cost":36700,"donate":0},
			"shoes90":{"name":"Балетки","desc":"Бал. CAVIAR89: Изумрудные","cost":36700,"donate":0},
			"shoes91":{"name":"Балетки","desc":"Бал. CAVIAR90: Синии с серым мыском","cost":36700,"donate":0},
			"shoes92":{"name":"Балетки","desc":"Бал. CAVIAR91: Белые в черную полоску","cost":36700,"donate":0},
			"shoes93":{"name":"Балетки","desc":"Бал. CAVIAR92: Фиолетовые с белым мыском","cost":36700,"donate":0},
			"shoes94":{"name":"Балетки","desc":"Бал. CAVIAR93: Серые с черным мыском","cost":36700,"donate":0},
			"shoes95":{"name":"Балетки","desc":"Бал. CAVIAR94: Желтые","cost":36700,"donate":0},
			"shoes96":{"name":"Босоножки","desc":"Бас. Milana95: Черные","cost":16000,"donate":0},
			"shoes97":{"name":"Босоножки","desc":"Бас. Milana96: Черно коричневые","cost":16000,"donate":0},
			"shoes98":{"name":"Босоножки","desc":"Бас. Milana97: Светло коричневые","cost":16000,"donate":0},
			"shoes99":{"name":"Босоножки","desc":"Бас. Milana98: Бело серые","cost":16000,"donate":0},
			"shoes100":{"name":"Босоножки","desc":"Бас. Milana99: Желтые","cost":16000,"donate":0},
			"shoes101":{"name":"Босоножки","desc":"Бас. Milana100: Синии голубые","cost":16000,"donate":0},
			"shoes102":{"name":"Босоножки","desc":"Бас. Milana101: Фиолетовые","cost":16000,"donate":0},
			"shoes103":{"name":"Босоножки","desc":"Бас. Milana102: Темно фиолетовые","cost":16000,"donate":0},
			"shoes104":{"name":"Босоножки","desc":"Бас. Milana103: Телесные","cost":16000,"donate":0},
			"shoes105":{"name":"Босоножки","desc":"Бас. Milana104: Бело черные","cost":16000,"donate":0},
			"shoes106":{"name":"Босоножки","desc":"Бас. Milana105: Березово черные","cost":16000,"donate":0},
			"shoes107":{"name":"Босоножки","desc":"Бас. Milana106: Умеренно-бирюзовые","cost":16000,"donate":0},
			"shoes108":{"name":"Босоножки","desc":"Бас. Milana107: Розовые","cost":16000,"donate":0},
			"shoes109":{"name":"Босоножки","desc":"Бас. Milana108: Темно зеленые","cost":16000,"donate":0},
			"shoes110":{"name":"Босоножки","desc":"Бас. Milana109: Розовые с оранжевой подошвой","cost":16000,"donate":0},
			"shoes111":{"name":"Босоножки","desc":"Бас. Milana110: Черно красные","cost":16000,"donate":0},
			"shoes112":{"name":"Кроссовки","desc":"Крос. PUMA111: Желто серые с белой подошвой","cost":23000,"donate":0},
			"shoes113":{"name":"Кроссовки","desc":"Крос. PUMA112: Черные с желтыми шнурками","cost":23000,"donate":0},
			"shoes114":{"name":"Кроссовки","desc":"Крос. PUMA113: Белые с черными шнурками","cost":23000,"donate":0},
			"shoes115":{"name":"Кроссовки","desc":"Крос. PUMA114: Желто черные с белой подошвой","cost":23000,"donate":0},
			"shoes116":{"name":"Кроссовки","desc":"Крос. PUMA115: Желтые с рисунком#1","cost":23000,"donate":0},
			"shoes117":{"name":"Кеды","desc":"Кеды Converse116: Желтые","cost":11000,"donate":0},
			"shoes118":{"name":"Кеды","desc":"Кеды Converse117: Черные","cost":11000,"donate":0},
			"shoes119":{"name":"Кеды","desc":"Кеды Converse118: Серые","cost":11000,"donate":0},
			"shoes120":{"name":"Кеды","desc":"Кеды Converse119: Белые","cost":11000,"donate":0},
			"shoes121":{"name":"Кеды","desc":"Кеды Converse120: Красные","cost":11000,"donate":0},
			"shoes122":{"name":"Кеды","desc":"Кеды Converse121: Аква","cost":11000,"donate":0},
			"shoes123":{"name":"Кеды","desc":"Кеды Converse122: Зеленые","cost":11000,"donate":0},
			"shoes124":{"name":"Кеды","desc":"Кеды Converse123: Коричневые","cost":11000,"donate":0},
			"shoes125":{"name":"Туфли","desc":"Туфли Balex124: Желтые","cost":17999,"donate":0},
			"shoes126":{"name":"Туфли","desc":"Туфли Balex125: Черные","cost":17999,"donate":0},
			"shoes127":{"name":"Туфли","desc":"Туфли Balex126: Серые","cost":17999,"donate":0},
			"shoes128":{"name":"Туфли","desc":"Туфли Balex127: Белые","cost":17999,"donate":0},
			"shoes129":{"name":"Туфли","desc":"Туфли Balex128: Красные","cost":17999,"donate":0},
			"shoes130":{"name":"Туфли","desc":"Туфли Balex129: Темно синии","cost":17999,"donate":0},
			"shoes131":{"name":"Туфли","desc":"Туфли Balex130: Зеленые","cost":17999,"donate":0},
			"shoes132":{"name":"Туфли","desc":"Туфли Balex131: Коричневые","cost":17999,"donate":0},
			"shoes133":{"name":"Боксёрки","desc":"Боксёрки PRO132: Черные с желтой подсветкой","cost":4500,"donate":0},
			"shoes134":{"name":"Боксёрки","desc":"Боксёрки PRO133: Черные с зеленой подсветкой","cost":4500,"donate":0},
			"shoes135":{"name":"Боксёрки","desc":"Боксёрки PRO134: Черные с оранжевой подсветкой","cost":4500,"donate":0},
			"shoes136":{"name":"Боксёрки","desc":"Боксёрки PRO135: Черные с фиолетовой подсветкой","cost":4500,"donate":0},
			"shoes137":{"name":"Боксёрки","desc":"Боксёрки PRO136: Черные с розовой подсветкой","cost":4500,"donate":0},
			"shoes138":{"name":"Боксёрки","desc":"Боксёрки PRO137: Черно красные с подсветкой","cost":4500,"donate":0},
			"shoes139":{"name":"Боксёрки","desc":"Боксёрки PRO138: Черно холодно белые с подсветкой","cost":4500,"donate":0},
			"shoes140":{"name":"Боксёрки","desc":"Боксёрки PRO139: Черно тепло белые с подсветкой","cost":4500,"donate":0},
			"shoes141":{"name":"Боксёрки","desc":"Боксёрки PRO140: Черно бежевые с подсветкой","cost":4500,"donate":0},
			"shoes142":{"name":"Боксёрки","desc":"Боксёрки PRO141: Черно ярко белые с подсветкой","cost":4500,"donate":0},
			"shoes143":{"name":"Кеды","desc":"Кеды Pull&Bear142: Бежевые","cost":29000,"donate":0},
			"shoes144":{"name":"Кеды","desc":"Кеды Pull&Bear143: Фиолетовые","cost":29000,"donate":0},
			"shoes145":{"name":"Кеды","desc":"Кеды Pull&Bear144: Бледно голубые","cost":29000,"donate":0},
			"shoes146":{"name":"Кеды","desc":"Кеды Pull&Bear145: Коричневые","cost":29000,"donate":0},
			"shoes147":{"name":"Кеды","desc":"Кеды Pull&Bear146: Серые","cost":29000,"donate":0},
			"shoes148":{"name":"Кеды","desc":"Кеды Pull&Bear147: Ярко Коричневые","cost":29000,"donate":0},
			"shoes149":{"name":"Кеды","desc":"Кеды Pull&Bear148: Белые","cost":29000,"donate":0},
			"shoes150":{"name":"Кеды","desc":"Кеды Pull&Bear149: Зеленые","cost":29000,"donate":0},
			"shoes151":{"name":"Кеды","desc":"Кеды Pull&Bear150: Красные","cost":29000,"donate":0},
			"shoes152":{"name":"Кеды","desc":"Кеды Pull&Bear151: Белые","cost":29000,"donate":0},
			"shoes153":{"name":"Кеды","desc":"Кеды Pull&Bear152: Черные","cost":29000,"donate":0},
			"shoes154":{"name":"Кеды","desc":"Кеды Pull&Bear153: Розовые","cost":29000,"donate":0},
			"shoes155":{"name":"Кроссовки","desc":"Крос. BALENCIAGA154: Голубые с белой подошвой","cost":48000,"donate":0},
			"shoes156":{"name":"Кроссовки","desc":"Крос. BALENCIAGA155: Коричневые с белой подошвой","cost":48000,"donate":0},
            "shoes157":{"name":"Кроссовки","desc":"Крос. BALENCIAGA156: Берюзовый с белой подошвой","cost":48000,"donate":0},
			"shoes158":{"name":"Кроссовки","desc":"Крос. BALENCIAGA157: Фиолетовые с белой подошвой","cost":48000,"donate":0},
			"shoes159":{"name":"Кроссовки","desc":"Крос. BALENCIAGA158: Темно красные с белой подошвой","cost":48000,"donate":0},
			"shoes160":{"name":"Кроссовки","desc":"Крос. BALENCIAGA159: Серые с черной подошвой с белыми шнурками","cost":48000,"donate":0},
			"shoes161":{"name":"Кроссовки","desc":"Крос. BALENCIAGA160: Серые с черной подошвой с черными шнурками","cost":48000,"donate":0},
			"shoes162":{"name":"Кроссовки","desc":"Крос. BALENCIAGA161: Зелено фиолетовый с белой подошвой","cost":48000,"donate":0},
			"shoes163":{"name":"Кроссовки","desc":"Крос. BALENCIAGA162: Лилово желтый с белой подошвой","cost":48000,"donate":0},
			"shoes164":{"name":"Кроссовки","desc":"Крос. BALENCIAGA163: Лилово зеленый с белой подошвой","cost":48000,"donate":0},
			"shoes165":{"name":"Кроссовки","desc":"Крос. BALENCIAGA164: Гридиент с белой подошвой","cost":48000,"donate":0},
			"shoes166":{"name":"Кроссовки","desc":"Крос. BALENCIAGA165: Белые с черной подошвой","cost":48000,"donate":0},
			"shoes167":{"name":"Кроссовки","desc":"Крос. BALENCIAGA166: Серый с белой подошвой","cost":48000,"donate":0},
			"shoes168":{"name":"Кроссовки","desc":"Крос. BALENCIAGA167: Рисунок BALENCIAGA с серой подошвой","cost":48000,"donate":0},
			"shoes169":{"name":"Кроссовки","desc":"Крос. BALENCIAGA168: Рисунок BALENCIAGA с белой подошвой","cost":48000,"donate":0},
			"shoes170":{"name":"Кеды","desc":"Кеды Dolce&Gabbana169: Белые с неоновой голубый подсветкой","cost":4500,"donate":0},
			"shoes171":{"name":"Кеды","desc":"Кеды Dolce&Gabbana170: Белые с неоновой зеленой подсветкой","cost":4500,"donate":0},
			"shoes172":{"name":"Кеды","desc":"Кеды Dolce&Gabbana171: Белые с неоновой розовой подсветкой","cost":4500,"donate":0},
			"shoes173":{"name":"Кеды","desc":"Кеды Dolce&Gabbana172: Белые с неоновой красной подсветкой","cost":4500,"donate":0},
			"shoes174":{"name":"Кеды","desc":"Кеды Dolce&Gabbana173: Серые с неоновой голубой подсветкой","cost":4500,"donate":0},
			"shoes175":{"name":"Кеды","desc":"Кеды Dolce&Gabbana174: Серые с неоновой зеленой подсветкой","cost":4500,"donate":0},
			"shoes176":{"name":"Кеды","desc":"Кеды Dolce&Gabbana175: Серые с неоновой фиолетовой подсветкой","cost":4500,"donate":0},
			"shoes177":{"name":"Кеды","desc":"Кеды Dolce&Gabbana176: Серые с неоновой красные подсветкой","cost":4500,"donate":0},
			"shoes178":{"name":"Кеды","desc":"Кеды Dolce&Gabbana177: Черные с неоновой голубые подсветкой","cost":4500,"donate":0},
			"shoes179":{"name":"Кеды","desc":"Кеды Dolce&Gabbana178: Черные с неоновой зеленые подсветкой","cost":4500,"donate":0},
			"shoes180":{"name":"Кеды","desc":"Кеды Dolce&Gabbana179: Черные с неоновой Фиолетовой подсветкой","cost":4500,"donate":0},
			"shoes181":{"name":"Кеды","desc":"Кеды Dolce&Gabbana180: Черные с неоново Красные с подсветкой","cost":4500,"donate":0},
			"shoes182":{"name":"Кеды","desc":"Кеды Dolce&Gabbana181: Бело розовые с неоново голубой подсветкой","cost":4500,"donate":0},
			"shoes183":{"name":"Кеды","desc":"Кеды Dolce&Gabbana182: Черно розовые с неоново зеленой подсветкой","cost":4500,"donate":0},
			"shoes184":{"name":"Кеды","desc":"Кеды Dolce&Gabbana183: Черно серые с неоново фиолетовой подсветкой","cost":4500,"donate":0},
			"shoes185":{"name":"Кеды","desc":"Кеды Dolce&Gabbana184: Бело красные с неоново красной подсветкой","cost":4500,"donate":0},
			"shoes186":{"name":"Кеды","desc":"Кеды Dolce&Gabbana185: Бело черные с неоново голубая подсветкой","cost":4500,"donate":0},
			"shoes187":{"name":"Кеды","desc":"Кеды Dolce&Gabbana186: Красно черные с неоново зеленой подсветкой","cost":4500,"donate":0},
			"shoes188":{"name":"Кеды","desc":"Кеды Dolce&Gabbana187: Черные белые с неоново фиолетовой подсветкой","cost":4500,"donate":0},
			"shoes189":{"name":"Кеды","desc":"Кеды Dolce&Gabbana188: Черные белые с неоново красной подсветкой","cost":4500,"donate":0},
			"shoes190":{"name":"Кеды","desc":"Кеды Dolce&Gabbana189: Черные серые с неоново красной подсветкой","cost":4500,"donate":0},
			"shoes191":{"name":"Кеды","desc":"Кеды Dolce&Gabbana190: Серые коричневый с неоново розовой подсветкой","cost":4500,"donate":0},
			"shoes192":{"name":"Кеды","desc":"Кеды Dolce&Gabbana191: Серо зеленые с неоново зеленой подсветкой","cost":4500,"donate":0},
			"shoes193":{"name":"Кеды","desc":"Кеды Dolce&Gabbana192: Черно оранжевые с неоново оранжевой подсветкой","cost":4500,"donate":0},
			"shoes194":{"name":"Кеды","desc":"Кеды Dolce&Gabbana193: Черно фиолетовый с неоново фиолетовой подсветкой","cost":4500,"donate":0},
			"shoes195":{"name":"Кеды","desc":"Кеды Dolce&Gabbana194: Черно розовый с неоново розовой подсветкой","cost":4500,"donate":0},
			"shoes196":{"name":"Туфли полиции","desc":"Повседневные туфли МВД и ДПС Полиции","cost":10000,"donate":0},
			"shoes197":{"name":"Сапоги пожарника","desc":"Огнеупорные сапоги пожарного департамента","cost":10000,"donate":0}
		},
	},
	"weapon":{
		"fire":{"name":"Огнетушитель","desc":"Рабочий инструмент пожарного департамента, тушит очаги возгараний","cost":10000,"donate":0},
		"pistol":{"name":"Colt 1911","desc":"Самый слабый пистолет в семействе, однако скорость стрельбы отличная","cost":50000,"donate":0},
		"revolver":{"name":"Revolver","desc":"Классический ASG револьвер, мощная пробивная сила","cost":90000,"donate":0},
		"deagle":{"name":"Deagle","desc":"Пустыный орёл, классика в своём классе, достаточно мощный","cost":80000,"donate":0},
		"pumpshotgun":{"name":"Pump Shutgun","desc":"Помповый дробовик, больше нечего добавить","cost":120000,"donate":0},
		"sawn":{"name":"Sawn Off Shutgun","desc":"Многозарядный дробовик, применений ему - масса","cost":150000,"donate":0},
		"dbshotgun":{"name":"DB Shutgun","desc":"Двухствольный обрез, в чём сила брат?","cost":135000,"donate":0},
		"microsmg":{"name":"UZI","desc":"Легендарный пистолет-пулемёт UZI","cost":150000,"donate":0},
		"tec":{"name":"Tec 9","desc":"Это же Тек Найн, популярный пистолет-пулемёт","cost":145000,"donate":0},
		"smg":{"name":"SMG 45 Pistol","desc":"Пистолет-пулемёт, признан многими силовыми ведомствами","cost":180000,"donate":0},
		"assaultrifle":{"name":"Штурм. винтовка","desc":"Средняя в своём классе штурмовая винтовка","cost":250000,"donate":0},
		"carbine":{"name":"Afford. Carbine","desc":"Affordable Carbine, мощная штурмовая винтовка","cost":280000,"donate":0},
		"compactrifle":{"name":"АК-47 компакт","desc":"Легендарный автомат Калашникова без приклада","cost":240000,"donate":0},
		"sniper":{"name":"Снайп. винт.","desc":"Тактическая штурмовая винтовка для боёв на дальних дистанциях","cost":750000,"donate":0},
		"nightstick":{"name":"Дубинка","desc":"Специальное оружие ближнего боя силовых спец. служб","cost":10000,"donate":0},
		"stungun":{"name":"Тазер","desc":"Паралитическое оружие ближнего боя силовых спец. служб","cost":10000,"donate":0}
	},
	"ammo":{
		"amLL":{"name":"Пист. патроны","cost":200,"donate":0},
		"amBL":{"name":"Крупн. патроны","cost":250,"donate":0},
		"amSG":{"name":"Патр. для дробов.","cost":250,"donate":0}
	},
	"health":{
		"armykit":{"name":"Воен. аптечка","desc":"Полностью восстанавливает здоровье","cost":50000,"donate":0},
		"bandage":{"name":"Бинты","desc":"Восстанавливает 25 hp здоровья","cost":15000,"donate":0}
	},
	"component":{
		"scrap":{"name":"Металлолом","desc":"Обычный, никому не нужный ржавый металл","cost":650,"donate":0},
		"microchips":{"name":"Микрочипы","desc":"Использующийся в военной промышленности компонент","cost":1050,"donate":0},
		"largeskin":{"name":"Шкуры животных","desc":"Хорошая добыча, большие шкуры животных","cost":1000,"donate":0},
		"littleskin":{"name":"Шкурки животных","desc":"Обычная добыча, маленькие шкурки животных","cost":500,"donate":0},
		"animalfat":{"name":"Животный жир","desc":"Это обычный, хороший животный жир","cost":50,"donate":0},
		"animalmeat":{"name":"Животное мясо","desc":"Хорошее, вкусное мясо животных","cost":100,"donate":0},
		"animalbones":{"name":"Кости животных","desc":"Разнообразные кости и хрящи животного происхождения","cost":25,"donate":0},
		"gold":{"name":"Золотой слиток","desc":"Редкий, драгоценный метал! Наивысшей 999 пробы!","cost":94000,"donate":0},
		"bloodworm":{"name":"Личинки мотыля","desc":"Среднего класса наживка для рыбной ловли","cost":500,"donate":0},
		"bread":{"name":"Хлебный мякиш","desc":"Самая простая наживка для рыбной ловли","cost":1000,"donate":0},
		"insects":{"name":"Личинки насеком.","desc":"Низкого класса наживка для рыбной ловли","cost":1500,"donate":0},
		"minifish":{"name":"Мальки","desc":"Наивысшего класса наживка для рыбной ловли","cost":2500,"donate":0},
		"worms":{"name":"Дождевые черви","desc":"Высокого класса наживка для рыбной ловли","cost":3500,"donate":0},
		"stecoil":{"name":"Масло SUPROTEC","desc":"Премиальное моторное масло, максимально долго сохраняет смазывающие свойства","cost":39000,"donate":0},
		"roweoil":{"name":"Масло ROWE","desc":"Хорошее моторное масло, долго сохраняет смазывающие свойства","cost":35000,"donate":0},
		"shelloil":{"name":"Масло Shell","desc":"Среднее моторное масло, медленно теряет смазывающие свойства","cost":30000,"donate":0},
		"lukoiloil":{"name":"Масло Lukoil","desc":"Дешёвое моторное масло, быстро теряет смазывающие свойства","cost":27000,"donate":0},
		"stecgasprem":{"name":"SUPROTEC Актив Премиум","desc":"Присадка в масло, отлично увеличивает ресурс масла","cost":25000,"donate":0},
		"stecgasplus":{"name":"SUPROTEC Актив Плюс","desc":"Присадка в масло, хорошо увеличивает ресурс масла","cost":22500,"donate":0},
		"stecgassga":{"name":"SUPROTEC APROHIM SGA","desc":"Топливная присадка, хорошо снижает расход топлива","cost":28000,"donate":0},
		"oilfilter":{"name":"Масляный фильтр","desc":"Масляный фильтр, обязателен при замене масла в ТС","cost":18000,"donate":0},
		"airfilter":{"name":"Воздушный фильтр","desc":"Воздушный фильтр, обязателен при замене масла в ТС","cost":14000,"donate":0}
	}
}
}