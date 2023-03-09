const http = require('node:http')
const https = require('node:https')
let minimist
let WebSocket

const getAccHistory = {id: 0, jsonrpc: "2.0", method: "call", params: ["account_history","get_account_history", ["lex","-1","10000"]]}
const getAccs1 = {id: 0, jsonrpc: "2.0", method: "call", params: ["database_api", "get_accounts", [[
    "aerostorm1"
]]]}
const getAccs100 = {id: 0, jsonrpc: "2.0", method: "call", params: ["database_api", "get_accounts", [[
    "a-bastrichkin", "a-dyx", "a-kharatsidi", "a-n-n-a", "a000", "a002", "a003", "a004", "a005", "a006", "a007", "a008", "a009", "a010", "a011", "a012", "a013", "a014", "a015", "a0de6qzchbut", "a1enka", "a48", "a4i-13e23a94", "aadsteemed", "aantonov", "aaron-brodie", "aaronkoenig", "aaronplando", "aasmanov", "aballod", "abalor", "abcalan", "abcde2000", "abcdf", "abderus", "abdul", "abdullar", "abechobi", "abhinavsolan", "abigor", "abit", "abloud", "aboutagirl", "aboutlinux", "abracadabra", "abrakadabra", "abrikos1", "abulbd", "abyfycbcn007", "academy", "acassity", "accopmu", "acidgarry", "acidium", "acidsun", "acir", "ackza", "acptkim", "actionprinciple", "activist", "actual", "aculeated", "adamsmith", "adbb", "adelja", "adelya89", "adiron", "adm", "admin", "administrator", "admiralanatoli4", "adodor", "adodora", "adojurus", "adol", "adolace", "adolas", "adolmeena", "adomeena", "adoradwyn", "adoranadar", "adorarana", "adorardred", "adrenolitik", "adrian", "adrian-vox", "adriano", "adriansky", "adrichel", "adriedar", "adriegas", "adrielmeena", "adriemand", "adriewield", "adsactly", "adulter", "advt.golos", "aem", "aerostorm1", "aetka"
]]]}
const getAccs1000 = {id: 0, jsonrpc: "2.0", method: "call", params: ["database_api", "get_accounts", [[
    "a-bastrichkin", "a-dyx", "a-kharatsidi", "a-n-n-a", "a000", "a002", "a003", "a004", "a005", "a006", "a007", "a008", "a009", "a010", "a011", "a012", "a013", "a014", "a015", "a0de6qzchbut", "a1enka", "a48", "a4i-13e23a94", "aadsteemed", "aantonov", "aaron-brodie", "aaronkoenig", "aaronplando", "aasmanov", "aballod", "abalor", "abcalan", "abcde2000", "abcdf", "abderus", "abdul", "abdullar", "abechobi", "abhinavsolan", "abigor", "abit", "abloud", "aboutagirl", "aboutlinux", "abracadabra", "abrakadabra", "abrikos1", "abulbd", "abyfycbcn007", "academy", "acassity", "accopmu", "acidgarry", "acidium", "acidsun", "acir", "ackza", "acptkim", "actionprinciple", "activist", "actual", "aculeated", "adamsmith", "adbb", "adelja", "adelya89", "adiron", "adm", "admin", "administrator", "admiralanatoli4", "adodor", "adodora", "adojurus", "adol", "adolace", "adolas", "adolmeena", "adomeena", "adoradwyn", "adoranadar", "adorarana", "adorardred", "adrenolitik", "adrian", "adrian-vox", "adriano", "adriansky", "adrichel", "adriedar", "adriegas", "adrielmeena", "adriemand", "adriewield", "adsactly", "adulter", "advt.golos", "aem", "aerostorm1", "aetka", "afanasyevaelena1", "afarbomac", "afew", "afoninak", "africaner", "afrinsultana", "afterglow", "aftergut", "agage", "agalak", "agamador", "agamaghma", "agamagra", "agamaswyn", "agape", "agasida", "aggroed", "aglo", "agornostaeva", "agrias", "aguilar", "aidancloquell", "aidar888", "aider", "aig", "aigents", "ailita", "aim", "aiparnyuk", "airbnb", "airbrush", "airdroplegko", "airlift", "aivanouski", "aizensou", "aizuki", "ajv", "ajvest", "ak2020", "aka-svat", "akamagodx", "akareyon", "akasaka", "akash", "akatcuki", "akatsuki", "akazloy", "akela", "akijar", "akilar", "akinogami", "akinosar", "akinoshicage", "akinotaxe", "akizragore", "akledirs", "akolonin", "akonomia", "akronim", "aksan42", "aksena", "aksial", "akudelka", "akva22", "akveresov", "alakasingh", "alanna27", "alatartsev", "albensilverberg", "alber", "albert1706", "albertogm", "albion", "alchemical", "alchemist", "alcotester", "ale-pilnik", "aleco", "alecvert", "alef", "alefora", "alejandr", "alek333", "aleks", "aleks.protsyuk", "aleks77", "aleksa", "aleksanda", "aleksandr1", "aleksandr111", "aleksandr313", "aleksandr92", "aleksandra", "aleksandra21", "aleksandraz", "aleksandraz111", "aleksandrd", "aleksandrminter", "aleksandro", "alekseiserov", "aleksey-f", "alekseynikkel", "aleksrav", "aleksvip15", "aleksw", "alena.maslyakova", "alena4e", "alena87", "alenafish", "alenana", "alenevaa", "alenka88", "alenkaaa", "alenkafifa", "alenushka", "alenywka", "aleos", "alernate", "alesik", "aless", "alessandarus", "alessandro", "alex", "alex-firsov", "alex-hunter", "alex-ice", "alex-inf", "alex-m", "alex-pu", "alex-siya", "alex-zaikin", "alex-zi", "alex.katz", "alex0874", "alex131313", "alex14", "alex2016", "alex4741991", "alex78pro", "alex7cg", "alex90342fastn1", "alexabakan57", "alexada", "alexal", "alexan20011", "alexander-gr", "alexander-r", "alexander3", "alexander56", "alexandergolos", "alexandervozhan", "alexandr", "alexandr-11", "alexandra-renee", "alexandre", "alexandrkein", "alexasha", "alexbestuzhev", "alexbeyman", "alexbogachev", "alexbulatovru", "alexc", "alexdondrad", "alexdrey", "alexey-readman", "alexey.af400", "alexey2954", "alexeybokov", "alexeykrol", "alexeynefedov", "alexeyosokin", "alexeypetrov", "alexeyspb", "alexeyvoron", "alexfisher", "alexfortin", "alexft", "alexgr", "alexisakov", "alexivanov", "alexketies", "alexko", "alexmove", "alexmurin", "alexna", "alexnazimov", "alexp", "alexpmorris", "alexriethmeier", "alexright", "alexsashka", "alexsey", "alexsmart", "alexsochi", "alexsoros", "alexux", "alexwhite33", "alexxela", "alexxs82", "alez", "alfa", "alfagravity", "algebra", "algen", "algrigo", "alia", "aliaksandr", "alighti", "alikssandra", "alimarina", "alin04kasilver", "alina-milachki", "alina12", "alina65", "alinacvetochek", "alinlin", "alino4ka", "alinohka", "alisa22", "alisakrasinskaya", "alisaroma", "alisawonder", "alise-dog", "alisherkoshekov2", "alissa", "alita", "alitis", "alittle", "alivia", "alja", "alla-lantarnaya", "alla1985kostya", "allag", "allahhh", "allakravets", "allapavlova", "allasyummyfood", "allatt", "allforyou", "allmylife", "allsaleman", "almahinoa-dacal", "almakedonskij", "almo", "alms", "alnikbor", "alpet-m", "alpha", "alpha-cash", "alphabet", "alpvision", "alsagamand", "alsanius", "alsatus", "alsech", "alt", "altai", "altbtc", "altcoin", "alte", "altenor", "alterak", "altergott", "alternativa", "altoz", "alvaro", "alvik", "alvisx", "alyonas", "alytical", "amalinavia", "amalinavia.art", "amanitha", "amar.tohamy", "amarizento", "amartinezque", "amazon", "amberwhi", "amcq", "amecsanin", "amelia", "amelia72", "amelina.elena", "ami", "amidabudda", "amik", "amikphoto", "amimohan", "amina", "amirl", "amironov", "ammatar", "ammo", "ammystr", "amputator2000", "amrit", "amunra", "amurchanka", "amy-goodrich", "amy-oestreicher", "an-ka", "an0nym0us", "an0nymous", "ana", "anage", "analbine", "analisa", "analise", "analore", "analytics", "anaman", "anameowing", "anamul", "ananadar", "ananasov", "ananius", "anaralas", "anaramand", "anarasius", "anarathis", "anarchist", "anarchyhasnogods", "anardred", "anariel", "anaril", "anasius", "anasta", "anastacia", "anastasi-os", "anastasia-hr", "anastasiabusko", "anastasiakire", "anastasiakuskova", "anastasiia", "anastasiiia", "anastassiya-yun", "anasya", "anat44", "anatolich", "anatollll", "anatolyevich", "anatworld", "anaya", "anayanadar", "anayara", "anazar", "anazius", "anca3drandom", "anchib", "andergriff", "anderiuz", "andeyz", "andrarchy", "andrb", "andreask", "andrei", "andrei0375", "andreikom", "andrejkakov", "andrew.dizz", "andrew48", "andrewawerdna", "andrewby", "andrewfoodist", "andrewswift", "andrey-rudikov", "andrey-spb", "andrey.golos", "andrey10", "andrey1986", "andreybezryadin", "andreyhusenak", "andreyn", "andreynoch", "andreyorlov", "andreyprosto", "andreysobol", "andreytrushnikov", "andristrendnews", "andriy4sk", "androdi", "androlanim", "andromadora", "andromalanim", "andromann", "andromarim", "andromawyn", "andromazan", "androshchuk", "androwield", "andruhapes", "andrvik", "andry1377", "andu1974", "anduweb", "andygon", "anech512", "angel-elf", "angelavolkova", "angelblack", "angelina.akhaeva", "angelina888", "angelinka", "angelnazemle", "angenoir", "angor", "angrybuh", "angstroem", "angus", "ani-el", "ani.vartanova", "anikimi", "anima", "animeshki", "anjar", "ankier", "ankorneykova", "ann", "ann09k", "anna-magred", "anna-pycckux", "anna-vitalevna", "anna.ivanik", "anna.rogachova", "annaanikeevna", "annaart", "annabaum", "annadolphin", "annagelmer", "annaklub", "annamelatieberz", "annarianna", "annasanjana", "annash", "annasvet", "annats", "annauk", "anneta", "annyshkashalnaya", "anon", "anonimous", "anonpic", "anonymario", "anonymint", "anonymous", "anonymous.author", "another", "anotherjoe", "anpush", "anr", "anri", "anryze", "anshar", "ant", "antino", "antiwar", "antizvuk", "antlesfoto", "anton.karelin", "anton2ov", "antonafanasev", "antonio.spb.rus", "antonkostroma", "antonromashov", "antons38", "antonstih2018", "antonyanda", "antosha", "antropocentrist", "antuan", "anus", "anvar111", "anverlayshev", "anwenbaumeister", "anybodyhere", "anykeycheg", "anyone", "anyuta", "anyx", "anzhelinasahiner", "ap6y3uk", "apasionado", "apelmon", "apetivan", "aphrodite", "api-boliviano", "apnigrich", "apollo", "apple", "applecrisp", "appreciator", "apriori1993", "apteka", "aptyp", "aquarius.com", "arabadji", "arabika", "aracieli", "aradal", "aradwyn", "arall", "arama", "aramath", "aramharutyunyan", "arantrius", "arara", "araramar", "arardred", "araron", "arashishakar", "arashizahn", "arashizuru", "aratius", "arayampa", "arcanestone", "arcange", "archai", "archibald116", "architektor", "archual", "arcurus", "areporter", "aretanya", "areyosi", "arget07", "argo", "arhag", "arhangel", "arhiopteriks", "arhont", "aridwyn", "ariem", "arigelv", "arina-fili99", "arirdin", "ariron", "arisida", "ariuris", "ariuron", "ariusius", "arizel", "arjun", "ark44", "arkanoid", "arkvoronoff", "arlekenon", "armageddon", "armey37", "arni", "arnold", "arom113", "aroma", "aroundb", "arroyo", "arsahk", "arsar", "arseniy123", "arslan786", "arslanbajwa", "art", "art-auction", "art-id", "art-study-pro", "artak777gsm", "artangor", "artdigital", "artdor", "artem.shinin", "artem.timofeev", "artemgukasov", "artemmaka", "artemslucky", "artemsurf", "artifex", "artific", "artikkassa", "artmaks", "artmovd", "artosha", "artpower", "artpro", "artsiomkatulski", "artugroza206", "artuniar", "arturchik", "arturka", "arturpilipenko", "artwea", "artyom", "arum", "arystarch", "aryuna", "asabovesobelow", "asaf", "ascandant", "asch", "aschatria777", "asdfghjkl", "asechkina", "ash", "ashleigh", "asholom", "asia", "asij", "asket13", "asksisk", "asmolokalo", "asol", "aspects", "assasin", "assholefinder", "assir", "assol", "assol76", "ast", "astaroth", "astashkozifa", "astralbat", "astramar", "astrofilosof", "astropix", "asya-sikder", "ataman86", "aten", "athemon", "atlantico", "atlantida", "atlantis", "atom", "atrov-211", "atsyba", "attorney-aya", "atush", "atvalevsky", "au1nethyb1", "audd", "auditor", "aufyn", "augsburg", "augusta", "aulas", "aunrad", "aura", "aurel", "auriginn", "aurillador", "aurintrius", "ausbitbank", "ausida", "author", "autofant", "autogolos", "automedia", "avarice", "avdiapolice", "aver", "avestan", "avlion", "avoice", "avpmining23", "avral", "avtor8904", "awdawd22", "awerta", "awfuture", "awrelll", "axbezzub", "axecap", "axefang", "axekiller", "axesmith", "axewood", "ayevdoshenko", "ayrat72", "azarod", "azarovskiy", "azazel.hell", "azenkovich", "azeroth", "azony", "b0y2k", "b0y2k31", "b14ckb0x", "b1acksun", "b2435493", "b4bb4r-5h3r", "bababoy", "babai", "babenkonickolay", "babsboard", "babymetal", "bacchist", "back", "background", "badassmother", "badi", "baev", "bag", "bagamand", "bagdan8211", "bagrinn", "baguio", "baidu", "bailey", "bailey16", "bak", "bakh-domalak", "bakli", "baksheev", "bakus", "balakinaann", "bale42", "balen", "balidai", "balis", "balkis", "ballaath", "balladogelv", "balladoginn", "balladohelm", "balladohuginn", "balladolanim", "balladosida", "ballahuginn", "ballalbine", "ballaswyn", "ballathris", "ballawield", "ballinconscious", "balllabanov", "balls21", "baltin", "baltiyka", "bambr", "bambuk", "banadar", "bandi", "bandikelv", "bandilas", "bandinadar", "bandirius", "bandith", "bandito", "bandiwyn", "bang9", "bangking", "banis", "banjo", "banker1", "bankir", "bankirviz", "bankovskaya", "bann", "bantikova", "barabeq", "barbadosso", "barbro", "bargyzin89y", "barin", "barinov", "barmablo", "barnaba", "barne", "baronofbitcoin", "barracuda68", "barrakuda", "barrie", "barrycooper", "barsik", "bashura741", "basicbeing", "bastet", "bastiat", "batcila", "batel", "batoport", "bavak", "bavard", "bavihm", "bayareacoins", "baydakova", "bazragore", "bbqbear", "beagda", "beage", "bealis", "beanz", "beara", "beariel", "beathis", "beatius", "beatrice", "beauty", "beaze", "beazel", "beazeron", "beazesius", "bebrave", "becerra18", "bee-tollworthy", "beep", "beepgroover", "beerbloke", "beervangeer", "begemot91", "bekpeurhobrhob", "belana77", "belaz1983", "belcy", "beleidigte-engel", "belina", "belka83", "belkino", "bell1982", "bellca", "bellochka", "belorusianin", "belovit", "belyaefff", "bemymusic", "ben", "bender", "bender46", "bendixen", "bendjmiller222", "bendy", "benhoneywell", "benita", "benjojo", "benken", "benken-love", "benslayton", "benyaminengel", "beowulfoflegend", "bereznikovets", "berkah", "berniesanders", "bess", "besser", "bestbodyblog.com", "bestcookever28", "bestcrypto", "besuchers", "betax", "bezborodkin", "bezruk", "bhagavat", "bhuz", "biblionic", "big-brother", "big.brother", "bigbang", "bigbangtheory", "bigblind38", "biggest", "bighead", "bigler", "bigm", "bike", "billbutler", "billy1", "billyrocks", "billywilliam", "binahfetish", "binwah-de-rese", "biolog", "biophil", "biorad", "biowealth", "bip91", "bipline", "bipolyarocka", "bird", "birds", "birzhareklam", "bit", "bit.block.news", "bitacer", "bitaps.com", "bitbarrie", "bitbtc", "bitcalm", "bitcoin", "bitcoin2016", "bitcoinking", "bitcoinman", "bitcoinparadise", "bitcoinsig", "bitcointalker", "bitcointer", "bitcony", "bitcube", "bitfinex", "bithunter", "bitland09", "bitlle", "bitnovosti", "bitonaugust", "bitrex", "bitrrex"
]]]}

let node, isHttps, isWs
let defAgent
let makeHttpReq

const delay = (msec) => new Promise((resolve) => {
    setTimeout(resolve, msec)
})

const printSize = (msec, bytes) => {
    const totalKb = bytes / 1024
    const kbSec = Math.ceil(totalKb * 1000 / msec)
    console.log(kbSec, 'KB/sec')
    console.log('(' + bytes + ' bytes in ' + msec/1000 + ' sec)')
}

async function httpReq({ node, data, agent, doPrintSize }) {
    data = JSON.stringify(data)
    return new Promise((resolve, reject) => {
        const req = makeHttpReq(node, {
            agent: agent || defAgent,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        }, res => {
            const startTime = Date.now()
            let totalBytes = 0
            res.on('data', (chunk) => {
                totalBytes += chunk.length
            })
            res.on('end', () => {
                if (doPrintSize) {
                    const msec = Date.now() - startTime
                    printSize(msec, totalBytes)
                }
                if (res.statusCode !== 200) {
                    reject(new Error(res.statusCode.toString()))
                    return
                }
                resolve(res)
            })
        })
        req.write(data)
        req.end()
    })
}

function wsReq({ node, data, doPrintSize }) {
    data = JSON.stringify(data)
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(node)

        let startTime
        ws.addEventListener('error', (err) => {
            reject(err)
        })
        ws.addEventListener('open', () => {
            ws.addEventListener('message', (message) => {
                if (doPrintSize) {
                    const msec = Date.now() - startTime
                    const bytes = Buffer.byteLength(message.data)
                    printSize(msec, bytes)
                }
                resolve()
            })
            ws.send(data)
            startTime = Date.now()
        })
    })
}

async function main() {
    try {
        minimist = require('minimist')
        WebSocket = require('ws')
    } catch (err) {
        console.error('Run yarn install in ui-api before run')
        process.exit(1)
    }
    const argv = minimist(process.argv.slice(2))

    node = argv._[0]
    if (!node) {
        console.log('Usage is:')
        console.log('node weigher wss://golos.node/ws')
        console.log('node weigher https://golos.node/ --conn           // Test only connections')
        console.log('node weigher https://golos.node/ --req            // Test only requests')
        console.log('node weigher https://golos.node/ --speed          // Test only speed, use get_account_history')
        console.log('node weigher https://golos.node/ --speed=gah      // Test only speed, use get_account_history')
        console.log('node weigher https://golos.node/ --speed=gac100   // Test only speed, use get_accounts(100)')
        console.log('node weigher https://golos.node/ --speed=gac1000  // Test only speed, use get_accounts(1000)')
        process.exit(1)
    }
    isHttps = node.startsWith('https:')
    isWs = node.startsWith('ws')
    if (isHttps) {
        defAgent = new https.Agent({ maxSockets: 1 })
        makeHttpReq = https.request
    } else {
        defAgent = new http.Agent({ maxSockets: 1 })
        makeHttpReq = http.request
    }

    const { req, conn, speed } = argv
    if (req && isWs) {
        throw new Error('Cannot test requests on WebSocket node')
    }
    const testAll = !req && !conn && !speed
    if (req || (testAll && !isWs)) {
        await fewRequests()
    }
    if (conn || testAll) {
        await fewConnections()
    }
    if (speed || testAll) {
        await speedTest(speed || true)
    }
}

async function fewRequests() {
    const runTest = async (perSec) => {
        console.log('-- Testing requests:', perSec, 'per second...')
        let success = 0
        let errors = new Set()
        for (let i = 0; i < perSec; ++i) {
            const cOk = () => {
                ++success
            }
            const cErr = (err) => {
                errors.add(err.message)
            }
            httpReq({ node, data: getAccs1 }).then(cOk, cErr)
            await delay(1000 / perSec)
        }
        console.log('Requests spawned, checking them...')
        await delay(3000)
        if (success < perSec) {
            console.log('RESULT:', success, 'of', perSec, 'are success, and others are failed with:')
            if (!errors.size) errors.add('(just hang)')
            errors.forEach(err => console.log(err))
        } else {
            console.log('RESULT: All success unfortunately!')
        }
        console.log('')
        return perSec - success
    }
    if (!await runTest(20)) {
        await runTest(200)
    }
}

async function fewConnections() {
    const count = 20
    console.log('-- Testing connections:', count, '...')
    let success = 0
    let errors = new Set()
    for (let i = 0; i < count; ++i) {
        const cOk = () => {
            ++success
        }
        const cErr = (err) => {
            errors.add(err.message)
        }
        if (isWs) {
            wsReq({ node, data: getAccs1 }).then(cOk, cErr)
        } else {
            let agent
            if (isHttps) {
                agent = new https.Agent({})
            } else {
                agent = new http.Agent({})
            }
            httpReq({ node, agent, data: getAccs1 }).then(cOk, cErr)
        }
    }
    console.log('Connections spawned, checking them...')
    await delay(3000)
    if (success < count) {
        console.log('RESULT:', success, 'of', count, 'are success, and others are failed with:')
        if (!errors.size) errors.add('(just hang)')
        errors.forEach(err => console.log(err))
    } else {
        console.log('RESULT: All success unfortunately!')
    }
    console.log('')
}

async function speedTest(speed) {
    console.log('-- Testing speed...')
    let data
    if (speed === 'gac100') {
        data = getAccs100
    } else if (speed === 'gac1000') {
        data = getAccs1000
    } else if (speed === true || speed === 'gah') {
        data = getAccHistory
    } else {
        console.error('ERROR: unknown --speed', speed)
        return
    }
    if (isWs) {
        await wsReq({ node, data, doPrintSize: true })
    } else {
        await httpReq({ node, data, doPrintSize: true })
    }
}

main()
