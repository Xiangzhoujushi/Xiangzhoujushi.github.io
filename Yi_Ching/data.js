	var trigram = [[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]];

	var gua =['乾',
			'坤',
			'屯',
			'蒙',
			'需',
			'訟',
			'師',
			'比',
			'小畜',
			'履',
			'泰',
			'否',
			'同人',
			'大有',
			'謙',
			'豫',
			'隨',
			'蠱',
			'臨',
			'觀',
			'噬嗑',
			'賁',
			'剝',
			'復',
			'无妄',
			'大畜',
			'頤',
			'大過',
			'習坎',
			'離',
			'咸',
			'恒',
			'遯',
			'大',
			'晉',
			'明夷',
			'家人',
			'睽',
			'蹇',
			'解',
			'損',
			'益',
			'夬',
			'姤',
			'萃',
			'升',
			'困',
			'井',
			'革',
			'鼎',
			'震',
			'艮',
			'漸',
			'歸妹',
			'豐',
			'旅',
			'巽',
			'兌',
			'渙',
			'節',
			'中孚',
			'小過',
			'既濟',
			'未濟'];
			
			// order of wen wang 64 gua
			var hexagrams = [
				// first 30
				[1,1,1,1,1,1],[0,0,0,0,0,0],[0,1,0,0,0,1],[1,0,0,0,1,0],[0,1,0,1,1,1],
				[1,1,1,0,1,0],[0,0,0,0,1,0],[0,1,0,0,0,0],[1,1,0,1,1,1],[1,1,1,0,1,1],[0,0,0,1,1,1],
				[1,1,1,0,0,0],[1,1,1,1,0,1],[1,0,1,1,1,1],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,1,0,0,1],
				[1,0,0,1,1,0],[0,0,0,0,1,1],[1,1,0,0,0,0],[1,0,1,0,0,1],[1,0,0,1,0,1],[1,0,0,0,0,0],[0,0,0,0,0,1],[1,1,1,0,0,1],[1,0,0,1,1,1],[1,0,0,0,0,1],[0,1,1,1,1,0],[0,1,0,0,1,0],[1,0,1,1,0,1],
				//next 34
				[0,1,1,1,0,0], [0,0,1,1,1,0],[1,1,1,1,0,0],[0,0,1,1,1,1],[1,0,1,0,0,0],[0,0,0,1,0,1],[1,1,0,1,0,1],[1,0,1,0,1,1],[0,1,0,1,0,0],[0,0,1,0,1,0],[1,0,0,0,1,1],[1,1,0,0,0,1],[0,1,1,1,1,1],[1,1,1,1,1,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,1,1,0,1,0],[0,1,0,1,1,0],[0,1,1,1,0,1],[1,0,1,1,1,0],[0,0,1,0,0,1],[1,0,0,1,0,0],[1,1,0,1,0,0],[0,0,1,0,1,1],[0,0,1,1,0,1],[1,0,1,1,0,0],[1,1,0,1,1,0],[0,1,1,0,1,1],[1,1,0,0,1,0],[0,1,0,0,1,1],[1,1,0,0,1,1],[0,0,1,1,0,0],[0,1,0,1,0,1],[1,0,1,0,1,0]
			]

			for (var i = 0; i<hexagrams.length;i++){
				hexagrams[i].reverse()
			}

			var colorForGua = ['#8e8e8e','#5e5e5e','#000000'];
			var guaci =[
			'乾元亨利貞',
			'坤元亨利牝馬之貞君子有攸往先迷後得主利西南得朋東北喪朋安貞吉',
			'屯元亨利貞勿用有攸往利建侯',
			'蒙亨匪我求童蒙童蒙求我初筮告再三瀆瀆則不告利貞',
			'需有孚光亨貞吉利涉大川',
			'訟有孚窒惕中吉終凶利見大人不利涉大川',
			'師貞丈人吉无咎',
			'比吉原筮元永貞无咎不寧方來後夫凶',
			'小畜亨密雲不雨自我西郊',
			'履虎尾不咥人亨',
			'泰小往大來吉亨',
			'否之匪人不利君子貞大往小來',
			'同人于野亨利涉大川利君子貞',
			'大有元亨',
			'謙亨君子有終',
			'豫利建侯行師',
			'隨元亨利貞无咎',
			'蠱元亨利涉大川先甲三日後甲三日',
			'臨元亨利貞至于八月有凶',
			'觀盥而不薦有孚顒若',
			'噬嗑亨利用獄',
			'賁亨小利有攸往',
			'剝不利有攸往',
			'復亨出入无疾朋來无咎反復其道七日來復利有攸往',
			'无妄元亨利貞其匪正有眚不利有攸往',
			'大畜利貞不家食吉利涉大川',
			'頤貞吉觀頤自求口實',
			'大過棟撓利有攸往亨',
			'習坎有孚維心亨行有尚',
			'離利貞亨畜牝牛吉',
			'咸亨利貞取女吉',
			'恒亨无咎利貞利有攸往',
			'遯亨小利貞',
			'大壯利貞',
			'晉康侯用錫馬蕃庶晝日三接',
			'明夷利艱貞',
			'家人利女貞',
			'睽小事吉',
			'蹇利西南不利東北利見大人貞吉',
			'解利西南无所往其來復吉有攸往夙吉',
			'損有孚元吉无咎可貞利有攸往曷之用二簋可用享',
			'益利有攸往利涉大川',
			'夬揚于王庭孚號有厲告自邑不利即戎利有攸往',
			'姤女壯勿用取女',
			'萃亨王假有廟利見大人亨利貞用大牲吉利有攸往',
			'升元亨用見大人勿恤南征吉',
			'困亨貞大人吉无咎有言不信',
			'井改邑不改井无喪无得往來井井汔至亦未繘井羸其瓶凶',
			'革已日乃孚元亨利貞悔亡',
			'鼎元吉亨',
			'震亨震來虩虩笑言啞啞震驚百里不喪七鬯',
			'艮其背不獲其身行其庭不見其人无咎',
			'漸女歸吉利貞',
			'歸妹征凶无攸利',
			'豐亨王假之勿憂宜日中',
			'旅小亨旅貞吉',
			'巽小亨利有攸往利見大',
			'兌亨利貞',
			'渙亨王假有廟利涉大川利貞',
			'節亨苦節不可貞',
			'中孚豚魚吉利涉大川利貞',
			'小過亨利貞可小事不可大事飛鳥遺之音不宜上宜下大吉',
			'既濟亨小，利貞',
			'未濟亨小狐汔濟濡其尾无攸利'
			];