import { updateObjectInArray } from "../components/utils/object-helper"

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const CHANGE_SHELF = 'CHANGE_SHELF'
const CHANGE_GROUP = 'CHANGE_GROUP'

let InitialState = {
    products: [
        {
            "id": 2157,
            "ean_plu": "7394264112009",
            "name": "1/2-burk SurstrГ¶mming",
            "producer": "RГ¶da Ulven",
            "wt_vol_pce": "475g",
            "product_group_id": 757,
            "shelf_id": 1416
        },
        {
            "id": 8916,
            "ean_plu": "7310865068170",
            "name": "2% Jordgubb",
            "producer": "YoggiВ®",
            "wt_vol_pce": "200 g",
            "product_group_id": 764,
            "shelf_id": 1423
        },
        {
            "id": 13130,
            "ean_plu": "7310865068293",
            "name": "2% Jordgubb, Jordg/smultron 4-p",
            "producer": "YoggiВ®",
            "wt_vol_pce": "4x125g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10705,
            "ean_plu": "7310865068361",
            "name": "2% Jordgubb, SkogsbГ¤r 4-p",
            "producer": "YoggiВ®",
            "wt_vol_pce": "4x125g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 29638,
            "ean_plu": "7310100684943",
            "name": "3-pack FullkornsvГ¤lling 1 ГҐr drickf",
            "producer": "Semper",
            "wt_vol_pce": "600ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 10,
            "ean_plu": "7311170014111",
            "name": "5-minutersill",
            "producer": "Abba",
            "wt_vol_pce": "420g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 8660,
            "ean_plu": "7392672000697",
            "name": "500g Turk 10% Laktosfri",
            "producer": "LINDAHLS",
            "wt_vol_pce": "500 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8806,
            "ean_plu": "7318690114925",
            "name": "A-fil 3% EKO",
            "producer": "ICA I love eco",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 13106,
            "ean_plu": "7310865088376",
            "name": "A-fil eko Jordgubb, 2,6%",
            "producer": "Arla KoВ® Ekologisk",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 30394,
            "ean_plu": "7318690140146",
            "name": "A-fil Naturell 3 %",
            "producer": "ICA",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8807,
            "ean_plu": "7310865088390",
            "name": "A-LГ¤ttfil eko 0,5%",
            "producer": "Arla Ko",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 9770,
            "ean_plu": "7340073300458",
            "name": "Active BlГҐb/Hal/Ci",
            "producer": "Proviva",
            "wt_vol_pce": "350ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 1618,
            "ean_plu": "7311878172311",
            "name": "Г„del 30%",
            "producer": "KvibilleВ®",
            "wt_vol_pce": "140g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 1615,
            "ean_plu": "7311878172335",
            "name": "Г„del GrГ¤dd 36%",
            "producer": "KvibilleВ®",
            "wt_vol_pce": "140g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 1617,
            "ean_plu": "7311878172458",
            "name": "Г„del Special 45%",
            "producer": "KvibilleВ®",
            "wt_vol_pce": "140g",
            "product_group_id": 757,
            "shelf_id": 1415
          },
          {
            "id": 1619,
            "ean_plu": "7311877008925",
            "name": "Г„delost GrГ¤dd 36%",
            "producer": "Kvibille",
            "wt_vol_pce": "240 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 18493,
            "ean_plu": "7310100561763",
            "name": "Г„GGTAGLIATELLE GL.FRI",
            "producer": "Semper",
            "wt_vol_pce": "250 gram",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 955,
            "ean_plu": "7318690100782",
            "name": "Aioli ",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 9823,
            "ean_plu": "2324509200000",
            "name": "Allerum PrГ¤st 35% 18 mГҐn nb",
            "producer": "AllerumВ®",
            "wt_vol_pce": "ca 450g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 49188,
            "ean_plu": "8714801410761",
            "name": "Am Pannkakor",
            "producer": "POP! Bakery",
            "wt_vol_pce": "160g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 49189,
            "ean_plu": "8714801410785",
            "name": "Am Pannkakor Choco",
            "producer": "POP! Bakery",
            "wt_vol_pce": "180g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 14097,
            "ean_plu": "5290074002238",
            "name": "Ananas Juice",
            "producer": "Fontana",
            "wt_vol_pce": "1 l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 657,
            "ean_plu": "7311170022123",
            "name": "Ansjovis benfri",
            "producer": "Grebbestad",
            "wt_vol_pce": "55g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 656,
            "ean_plu": "7311170022116",
            "name": "Ansjovis Original FilГ©er",
            "producer": "Grebbestads",
            "wt_vol_pce": "125 g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 7075,
            "ean_plu": "7311171006542",
            "name": "Ansjoviskrydd sill",
            "producer": "Abba",
            "wt_vol_pce": "500 g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 877,
            "ean_plu": "7318690101093",
            "name": "Antipasto",
            "producer": "ICA",
            "wt_vol_pce": "120 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 30956,
            "ean_plu": "7318690135135",
            "name": "Apel.ju konc Eko",
            "producer": "ICA I love eco",
            "wt_vol_pce": "2dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 20422,
            "ean_plu": "7318690094678",
            "name": "Apel/Г„ppel konc",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 9731,
            "ean_plu": "7318690116783",
            "name": "Apel/hallonjuice",
            "producer": "ICA Selection",
            "wt_vol_pce": "1 l",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 15550,
            "ean_plu": "7318690135159",
            "name": "Apelsi fr.konc Eko",
            "producer": "ICA I love eco",
            "wt_vol_pce": "1L",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 9014,
            "ean_plu": "7313613011015",
            "name": "Apelsin",
            "producer": "BrГ¤mhults",
            "wt_vol_pce": "1 L",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 20419,
            "ean_plu": "7318690047049",
            "name": "Apelsin & Ananasjuice",
            "producer": "Ica",
            "wt_vol_pce": "1 liter",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 20423,
            "ean_plu": "7318690094685",
            "name": "Apelsin & RГ¶d Grape koncentrat",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 20444,
            "ean_plu": "7318690133933",
            "name": "Apelsin juice",
            "producer": "ICA",
            "wt_vol_pce": "1,75L",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 8991,
            "ean_plu": "7318690081210",
            "name": "Apelsin nektar",
            "producer": "ICA",
            "wt_vol_pce": "2 l",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 9001,
            "ean_plu": "7310860007259",
            "name": "Apelsin RГ¶d Grape",
            "producer": "God MorgonВ®",
            "wt_vol_pce": "1 liter",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 9730,
            "ean_plu": "7318690056126",
            "name": "Apelsin/Mango/Passionsfr juice",
            "producer": "ICA Selection",
            "wt_vol_pce": "1 l",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 8967,
            "ean_plu": "7310867561402",
            "name": "Apelsinjuice",
            "producer": "Bravo",
            "wt_vol_pce": "1,0 l",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 20421,
            "ean_plu": "7318690052166",
            "name": "Apelsinjuice",
            "producer": "ICA",
            "wt_vol_pce": "1 l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 20445,
            "ean_plu": "7318690080015",
            "name": "Apelsinjuice",
            "producer": "ICA Basic",
            "wt_vol_pce": "2 l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 20424,
            "ean_plu": "7318690077152",
            "name": "Apelsinjuice koncentrat",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 9003,
            "ean_plu": "7310867564106",
            "name": "Apelsinjuice KRAV",
            "producer": "BRAVO",
            "wt_vol_pce": "1,75 l",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 9491,
            "ean_plu": "7318690037422",
            "name": "Apelsinjuice med fruktkГ¶tt",
            "producer": "ICA",
            "wt_vol_pce": "1 l",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 20446,
            "ean_plu": "7318690080374",
            "name": "Apelsinnektar",
            "producer": "ICA Basic",
            "wt_vol_pce": "2 l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 15551,
            "ean_plu": "7318690135166",
            "name": "Г„ppelj fr.konc Eko",
            "producer": "ICA I love eco",
            "wt_vol_pce": "1L",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 30954,
            "ean_plu": "7318690135142",
            "name": "Г„ppeljuic konc Eko",
            "producer": "ICA I love eco",
            "wt_vol_pce": "2dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 20427,
            "ean_plu": "7318690052173",
            "name": "Г„ppeljuice",
            "producer": "ICA",
            "wt_vol_pce": "1 l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 20438,
            "ean_plu": "7318690080398",
            "name": "Г„ppeljuice",
            "producer": "ICA Basic",
            "wt_vol_pce": "2 l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 20425,
            "ean_plu": "7318690077169",
            "name": "Г„ppeljuice koncentrat",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 9490,
            "ean_plu": "7318690116769",
            "name": "Г„ppeljuice m fr.k",
            "producer": "ICA",
            "wt_vol_pce": "1 l",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 20379,
            "ean_plu": "7314720719597",
            "name": "Г„ppelmust med fruktkГ¶tt",
            "producer": "Kiviks Musteri",
            "wt_vol_pce": "1l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 15483,
            "ean_plu": "7314720719450",
            "name": "Г„ppelmust utan fruktkГ¶tt",
            "producer": "Kiviks Musteri",
            "wt_vol_pce": "1l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 7264,
            "ean_plu": "7318690124160",
            "name": "Appenzeller 4-6 mГҐ",
            "producer": "ICA",
            "wt_vol_pce": "210g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8975,
            "ean_plu": "7310867561419",
            "name": "Г„pple",
            "producer": "Bravo",
            "wt_vol_pce": "1 L",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 18661,
            "ean_plu": "4062300110809",
            "name": "Г„pple & Katrinplommon 4m",
            "producer": "Hipp",
            "wt_vol_pce": "125 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8818,
            "ean_plu": "7310865018489",
            "name": "Г¤pple/vanilj/kanel 2%",
            "producer": "YoggiВ®",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 35466,
            "ean_plu": "7310100405432",
            "name": "Г„PPLEDRYCK",
            "producer": "Semper",
            "wt_vol_pce": "200 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 43483,
            "ean_plu": "7350060701946",
            "name": "Arrabbiata",
            "producer": "Paolos",
            "wt_vol_pce": "150 g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 516,
            "ean_plu": "7310090752691",
            "name": "Г„rter med flГ¤sk",
            "producer": "Felix",
            "wt_vol_pce": "500 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 936,
            "ean_plu": "7318690037552",
            "name": "Г„rter med flГ¤sk",
            "producer": "ICA",
            "wt_vol_pce": "500 g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 7475,
            "ean_plu": "5711953018275",
            "name": "Г…seda GrГ¤ddost",
            "producer": "Arla",
            "wt_vol_pce": "500g",
            "product_group_id": 760,
            "shelf_id": 3478
          },
          {
            "id": 22421,
            "ean_plu": "4062300190719",
            "name": "Baby Combiotik 1 pulver",
            "producer": "Hipp",
            "wt_vol_pce": "450 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22415,
            "ean_plu": "7310100398598",
            "name": "BabySemp 1",
            "producer": "Semper",
            "wt_vol_pce": "200ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18573,
            "ean_plu": "7312170039678",
            "name": "BabySemp 1",
            "producer": "Semper",
            "wt_vol_pce": "500 gram",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22419,
            "ean_plu": "7310100395863",
            "name": "BabySemp 1 Lemolac SensiPro",
            "producer": "Semper",
            "wt_vol_pce": "500g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18575,
            "ean_plu": "7310100370280",
            "name": "BabySemp 2",
            "producer": "Semper",
            "wt_vol_pce": "500 gram",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 39111,
            "ean_plu": "7310100395948",
            "name": "BabySemp 2 Lemolac SensiPro",
            "producer": "Semper",
            "wt_vol_pce": "500g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22416,
            "ean_plu": "7310100397928",
            "name": "BabySemp 2, drickfГ¤rdig",
            "producer": "Semper",
            "wt_vol_pce": "200 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 29103,
            "ean_plu": "7310100396020",
            "name": "BabySemp 3, drickfГ¤rdig",
            "producer": "Semper",
            "wt_vol_pce": "200 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 938,
            "ean_plu": "7318690004035",
            "name": "Bacon",
            "producer": "ICA",
            "wt_vol_pce": "3x140 g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 937,
            "ean_plu": "7318690004004",
            "name": "Bacon",
            "producer": "ICA",
            "wt_vol_pce": "140 g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 1312,
            "ean_plu": "7331044002839",
            "name": "Bacon av kalkon",
            "producer": "Ingelsta Kalkon",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 2299,
            "ean_plu": "7300208345006",
            "name": "BACON PIGGHAM SE",
            "producer": "Scan",
            "wt_vol_pce": "140g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 2300,
            "ean_plu": "7300201883000",
            "name": "Bacon skivat EKO",
            "producer": "Scan",
            "wt_vol_pce": "120 g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 2301,
            "ean_plu": "7300205753002",
            "name": "Bacon tГ¤rnat",
            "producer": "Scan",
            "wt_vol_pce": "140 g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 36239,
            "ean_plu": "7318690146032",
            "name": "Baconwurst med Г¤pp",
            "producer": "ICA",
            "wt_vol_pce": "240g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 6941,
            "ean_plu": "7313160001309",
            "name": "Baguettesallad kyc",
            "producer": "Rydbergs",
            "wt_vol_pce": "175g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 21559,
            "ean_plu": "7312170029129",
            "name": "BanangrГ¶t 4mГҐn 6x480 g",
            "producer": "Semper",
            "wt_vol_pce": "480g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 2195,
            "ean_plu": "7313161430207",
            "name": "Bearnaise",
            "producer": "Rydbergs",
            "wt_vol_pce": "225 ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 432,
            "ean_plu": "7350042720002",
            "name": "Bearnaise",
            "producer": "Eriks SГҐser",
            "wt_vol_pce": "230 ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 2196,
            "ean_plu": "7313161430214",
            "name": "Bearnaise Chili",
            "producer": "Rydbergs",
            "wt_vol_pce": "225 ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 6975,
            "ean_plu": "7318690100546",
            "name": "BearnaisesГҐs ",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 36105,
            "ean_plu": "7313160004317",
            "name": "BearnaisesГҐs Chili",
            "producer": "RYDBERGS",
            "wt_vol_pce": "250 ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 1548,
            "ean_plu": "8722700032847",
            "name": "BГ©chamel Sauce",
            "producer": "Knorr",
            "wt_vol_pce": "500 ml",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 9451,
            "ean_plu": "7311877015626",
            "name": "Billinge 26% skivad",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 9236,
            "ean_plu": "7311877015633",
            "name": "Billinge Mager 17% skivad",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8963,
            "ean_plu": "7310867008624",
            "name": "BlГҐbГ¤r",
            "producer": "Proviva",
            "wt_vol_pce": "1 L",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 8954,
            "ean_plu": "7310090776628",
            "name": "BlГҐbГ¤r",
            "producer": "Risifrutti",
            "wt_vol_pce": "175 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 22441,
            "ean_plu": "7310100962065",
            "name": "BlГҐbГ¤r & Г¤pple 4 mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "125g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 9716,
            "ean_plu": "7311443210400",
            "name": "BlГҐbГ¤r 2,7%",
            "producer": "BГ¤rry",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 20416,
            "ean_plu": "7310861006930",
            "name": "BlГҐbГ¤r Konc",
            "producer": "Jokk",
            "wt_vol_pce": "250 ml",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 14706,
            "ean_plu": "7314720721811",
            "name": "BlГҐbГ¤r Lime Frukt & BГ¤rdryck Konc",
            "producer": "Kiviks Musteri",
            "wt_vol_pce": "2 dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 9013,
            "ean_plu": "7313613063427",
            "name": "BlГҐbГ¤r/SvartvinbГ¤r",
            "producer": "BrГ¤mhults",
            "wt_vol_pce": "1 L",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 18963,
            "ean_plu": "7310861007654",
            "name": "BlГҐbГ¤rdryck",
            "producer": "Jokk",
            "wt_vol_pce": "1 L",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 17302,
            "ean_plu": "7392128810016",
            "name": "BlГҐbГ¤rsdryck KRAV",
            "producer": "FinnerГ¶dja",
            "wt_vol_pce": "1 liter",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 1151,
            "ean_plu": "7318690026945",
            "name": "BlГҐmusslor",
            "producer": "ICA",
            "wt_vol_pce": "360g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 9000,
            "ean_plu": "7310860007396",
            "name": "Blodgrape",
            "producer": "God MorgonВ®",
            "wt_vol_pce": "1 liter",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 627,
            "ean_plu": "7310943092523",
            "name": "Blodpudding",
            "producer": "GeaВґs",
            "wt_vol_pce": "500g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 625,
            "ean_plu": "7310943092530",
            "name": "Blodpudding utan socker",
            "producer": "GeaВґs",
            "wt_vol_pce": "500g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 9830,
            "ean_plu": "7318690128939",
            "name": "BlomkГҐlsoppa",
            "producer": "ICA",
            "wt_vol_pce": "425g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 321,
            "ean_plu": "5740200001012",
            "name": "Blue 42%",
            "producer": "CastelloВ®",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 166,
            "ean_plu": "73501602",
            "name": "BГ¶cklingpastej",
            "producer": "Biggans",
            "wt_vol_pce": "120 g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 39069,
            "ean_plu": "4062300043749",
            "name": "Bondgryta m grГ¶nsaker & kalvkГ¶tt 6m",
            "producer": "Hipp",
            "wt_vol_pce": "190 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8493,
            "ean_plu": "7350020131516",
            "name": "Boveteflingor Г„pple&kokos",
            "producer": "Naturens Skafferi",
            "wt_vol_pce": "375 g",
            "product_group_id": 757,
            "shelf_id": 1421
          },
          {
            "id": 797,
            "ean_plu": "2319208100000",
            "name": "BrГ¤nnv.ost 31% 15m",
            "producer": "ICA",
            "wt_vol_pce": "c 540 g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 13151,
            "ean_plu": "7394376616204",
            "name": "Breakfast Passionfruit Mango",
            "producer": "Oatly",
            "wt_vol_pce": "250 ml",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 13402,
            "ean_plu": "7394376616198",
            "name": "Breakfast Pineapple Coconut Banana",
            "producer": "Oatly",
            "wt_vol_pce": "250 ml",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 6470,
            "ean_plu": "7318690115052",
            "name": "Bredbar Leverpastej",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 107,
            "ean_plu": "7310941801707",
            "name": "Bredbar Leverpastej",
            "producer": "Arboga",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 6642,
            "ean_plu": "7318690115069",
            "name": "Bredbar Leverpastej Gurka",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1967,
            "ean_plu": "7310941801424",
            "name": "Bredbar Leverpastej Mini",
            "producer": "PastejkГ¶ket",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1966,
            "ean_plu": "7310941801066",
            "name": "Bredbar leverpastej Original",
            "producer": "PastejkГ¶ket",
            "wt_vol_pce": "2x75g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1969,
            "ean_plu": "7310941801301",
            "name": "Bredbar Leverpastej Original",
            "producer": "PastejkГ¶ket",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 9657,
            "ean_plu": "7318690125808",
            "name": "Bredbart mjГ¶lkfritt margarin",
            "producer": "ICA",
            "wt_vol_pce": "400g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8825,
            "ean_plu": "7310860005811",
            "name": "Bregott mellan",
            "producer": "Bregott",
            "wt_vol_pce": "300 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 2007,
            "ean_plu": "3228020232028",
            "name": "Brie",
            "producer": "President",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 43242,
            "ean_plu": "7318690153344",
            "name": "Brie",
            "producer": "ICA",
            "wt_vol_pce": "450 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 36638,
            "ean_plu": "7318690140924",
            "name": "Brie",
            "producer": "ICA Basic",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 7242,
            "ean_plu": "7318690124139",
            "name": "Brie Double Cream",
            "producer": "ICA Selection",
            "wt_vol_pce": "220g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8082,
            "ean_plu": "7394079018381",
            "name": "Brie du Grand PГ©re",
            "producer": "Falbygdens rekomm.",
            "wt_vol_pce": "500 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 28596,
            "ean_plu": "7318690144168",
            "name": "Broccoli,- blomkГҐls & ostbiff",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 1326,
            "ean_plu": "7391196007151",
            "name": "Bror Jakobs rГ¶kta skinka PLB ST",
            "producer": "Jakobsdals",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1327,
            "ean_plu": "7391196007137",
            "name": "Bror Jakobs svartrГ¶kta skinka",
            "producer": "Jakobsdals",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 6597,
            "ean_plu": "7391196007199",
            "name": "Bror Jakobs svartvinbГ¤rsskinka",
            "producer": "Jakobsdals",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 514,
            "ean_plu": "7310090750697",
            "name": "Bruna bГ¶nor",
            "producer": "Felix",
            "wt_vol_pce": "500 g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 8444,
            "ean_plu": "7318690097693",
            "name": "BrungrГ¤ddat knГ¤cke",
            "producer": "Ica",
            "wt_vol_pce": "170 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 697,
            "ean_plu": "7350037191596",
            "name": "Cabanossy",
            "producer": "H. Karlssons Charkuterier",
            "wt_vol_pce": "260g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 9250,
            "ean_plu": "7300324050006",
            "name": "Caesar Stekt & Skivad kyckling",
            "producer": "KronfГҐgel",
            "wt_vol_pce": "0,2kg",
            "product_group_id": 791,
            "shelf_id": 3476
          },
          {
            "id": 9541,
            "ean_plu": "5760466961110",
            "name": "Caffe Latte",
            "producer": "StarbucksВ®",
            "wt_vol_pce": "220 ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9186,
            "ean_plu": "7318690124122",
            "name": "Camembert Petit",
            "producer": "ICA Selection",
            "wt_vol_pce": "150g.",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 18481,
            "ean_plu": "7312170057207",
            "name": "Cantucci Mandel",
            "producer": "Semper",
            "wt_vol_pce": "200g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8907,
            "ean_plu": "5711953023996",
            "name": "Cappuccino",
            "producer": "StarbucksВ®",
            "wt_vol_pce": "220 ml",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 10435,
            "ean_plu": "7310130004193",
            "name": "Cashewdryck",
            "producer": "GoGreen",
            "wt_vol_pce": "1 l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 15978,
            "ean_plu": "5411188122890",
            "name": "Cashewdryck",
            "producer": "Alpro",
            "wt_vol_pce": "1l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 6,
            "ean_plu": "7311171005699",
            "name": "Caviar svart finko",
            "producer": "Abba",
            "wt_vol_pce": "80 g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 13247,
            "ean_plu": "7318690132424",
            "name": "Champinjonburgare",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 38894,
            "ean_plu": "7318690143215",
            "name": "ChГ©vre",
            "producer": "ICA",
            "wt_vol_pce": "170g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 6744,
            "ean_plu": "2022058400000",
            "name": "Chevrette Mature",
            "producer": "Falbygdens Rekommenderar",
            "wt_vol_pce": "ca 280g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 435,
            "ean_plu": "7350042720132",
            "name": "Chili Bearnaise",
            "producer": "Eriks SГҐser",
            "wt_vol_pce": "230 ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 957,
            "ean_plu": "7318690100553",
            "name": "Chilibearnaise ",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 15972,
            "ean_plu": "7310240034073",
            "name": "Chipotle Chili Bowl",
            "producer": "FELIX",
            "wt_vol_pce": "470 g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 8489,
            "ean_plu": "7350020131578",
            "name": "Choco Corn fullkornsmajspuffar",
            "producer": "Naturens Skafferi",
            "wt_vol_pce": "375g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 18451,
            "ean_plu": "7312170056248",
            "name": "Chocolate Sticks",
            "producer": "Semper",
            "wt_vol_pce": "110g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 18988,
            "ean_plu": "7310130004636",
            "name": "Chokladkaka Glutenfri",
            "producer": "KungsГ¶rnen",
            "wt_vol_pce": "400g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 18444,
            "ean_plu": "7310100565808",
            "name": "CHOKLADKAKOR GLUT.FRIA",
            "producer": "Semper",
            "wt_vol_pce": "150g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8913,
            "ean_plu": "7311672272255",
            "name": "ChokladmjГ¶lk ekologisk",
            "producer": "Smakis",
            "wt_vol_pce": "250 ml",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 879,
            "ean_plu": "7318690104513",
            "name": "Chorizo",
            "producer": "ICA",
            "wt_vol_pce": "100 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 699,
            "ean_plu": "7350037191572",
            "name": "Chorizo",
            "producer": "H. Karlssons Charkuterier",
            "wt_vol_pce": "260g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 2232,
            "ean_plu": "7300208373009",
            "name": "CHORIZO SE",
            "producer": "Scan",
            "wt_vol_pce": "300g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 698,
            "ean_plu": "7350037191589",
            "name": "Chorizo smal",
            "producer": "H. Karlssons Charkuterier",
            "wt_vol_pce": "400g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 37,
            "ean_plu": "7311171006658",
            "name": "Cit/dillsГҐ ubak la",
            "producer": "Abba",
            "wt_vol_pce": "250 g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 38,
            "ean_plu": "7311171006221",
            "name": "CitronsГҐs fГ¶r lax",
            "producer": "Abba",
            "wt_vol_pce": "250g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 15492,
            "ean_plu": "7314720730431",
            "name": "Citrus Fruktdryck",
            "producer": "Kiviks Musteri",
            "wt_vol_pce": "1.5 l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 9251,
            "ean_plu": "7300324052000",
            "name": "Classic Stekt & Skivad kyckling",
            "producer": "KronfГҐgel",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 8726,
            "ean_plu": "7310390065750",
            "name": "Cocos",
            "producer": "Cocos",
            "wt_vol_pce": "500 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 881,
            "ean_plu": "7318690022763",
            "name": "Cognacsmedw svart",
            "producer": "ICA",
            "wt_vol_pce": "300 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1931,
            "ean_plu": "7330797088855",
            "name": "Cognacsmedwurst",
            "producer": "PГ¤rsons",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 883,
            "ean_plu": "7318690107163",
            "name": "Cognacsmedwurst Pl",
            "producer": "ICA",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 16154,
            "ean_plu": "7318690137092",
            "name": "Cot Ch laktosfri naturell 1,5%",
            "producer": "Ica",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8637,
            "ean_plu": "7310865068668",
            "name": "Cottage Che Laktos",
            "producer": "Keso",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9357,
            "ean_plu": "7310865071880",
            "name": "Cottage Cheese Ekologisk 4%",
            "producer": "KESOВ®",
            "wt_vol_pce": "250g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 15999,
            "ean_plu": "7310865096159",
            "name": "Cottage Cheese Laktosfri 1,5%",
            "producer": "KESOВ®",
            "wt_vol_pce": "500g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8763,
            "ean_plu": "7310865043368",
            "name": "Cottage Cheese Mini 1,5 %",
            "producer": "KESOВ®",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8767,
            "ean_plu": "7310865051998",
            "name": "Cottage Cheese Mini 1,5%",
            "producer": "KESOВ®",
            "wt_vol_pce": "500g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 18275,
            "ean_plu": "7318690134299",
            "name": "Cottage cheese naturell 1,5%",
            "producer": "Ica",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 15852,
            "ean_plu": "7318690134305",
            "name": "Cottage Cheese naturell 1,5%",
            "producer": "Ica",
            "wt_vol_pce": "500 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8765,
            "ean_plu": "7318690104254",
            "name": "Cottage cheese naturell 4%",
            "producer": "Ica",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8764,
            "ean_plu": "7310865008084",
            "name": "Cottage Cheese Naturell 4%",
            "producer": "KESOВ®",
            "wt_vol_pce": "250g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8768,
            "ean_plu": "7318690104261",
            "name": "Cottage cheese naturell 4%",
            "producer": "Ica",
            "wt_vol_pce": "500 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8766,
            "ean_plu": "7310865008060",
            "name": "Cottage Cheese Naturell 4%",
            "producer": "KESOВ®",
            "wt_vol_pce": "500g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 18677,
            "ean_plu": "4062300228948",
            "name": "Couscous, GrГ¶nsaker & Kyckling 8m",
            "producer": "Hipp",
            "wt_vol_pce": "190 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 817,
            "ean_plu": "7318690054849",
            "name": "Cream cheese naturell 23%",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 818,
            "ean_plu": "7318690054856",
            "name": "Cream cheese naturell 9%",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 819,
            "ean_plu": "7318690054863",
            "name": "Cream cheese vitlГ¶k/Г¶rter 23%",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 10348,
            "ean_plu": "7350044609596",
            "name": "Cream Jeezly - Original",
            "producer": "Astrid och aporna",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 7981,
            "ean_plu": "5711953018947",
            "name": "Creamy Brie 34%",
            "producer": "CastelloВ®",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 10564,
            "ean_plu": "7310865083456",
            "name": "crГЁme fr gourmet feta&solt.tomater",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "2 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 35237,
            "ean_plu": "7318690140429",
            "name": "Creme Fraiche",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 35450,
            "ean_plu": "7318690140436",
            "name": "Creme Fraiche",
            "producer": "ICA",
            "wt_vol_pce": "5 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 13403,
            "ean_plu": "5425000191124",
            "name": "Cuisine - risbaserad matbas",
            "producer": "Rice Dream",
            "wt_vol_pce": "200 ml",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 14788,
            "ean_plu": "5411188121435",
            "name": "Cuisine vispgrГ¤dde Soja",
            "producer": "Alpro",
            "wt_vol_pce": "250 ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10534,
            "ean_plu": "8712566256976",
            "name": "Culinesse Flytande margarin",
            "producer": "Milda",
            "wt_vol_pce": "750 ml",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 2173,
            "ean_plu": "7313161311650",
            "name": "Dallassallad",
            "producer": "Rydbergs",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 327,
            "ean_plu": "5760466966788",
            "name": "Danablu 29%",
            "producer": "Castello",
            "wt_vol_pce": "125 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 11145,
            "ean_plu": "5707196191523",
            "name": "Danskinspirerad Salami skivad",
            "producer": "GГL",
            "wt_vol_pce": "400 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 640,
            "ean_plu": "5701251851100",
            "name": "Danskinspirerad Salami skivad",
            "producer": "GГL",
            "wt_vol_pce": "250 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 2234,
            "ean_plu": "7300201321007",
            "name": "DELI FALUKORV",
            "producer": "Scan",
            "wt_vol_pce": "550g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 2289,
            "ean_plu": "7300201375000",
            "name": "DELIKATESSKГ–TTBULLAR",
            "producer": "Scan",
            "wt_vol_pce": "450g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 18614,
            "ean_plu": "5060107330030",
            "name": "Den gula Smoothie",
            "producer": "Ella's Kitchen",
            "wt_vol_pce": "90 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 779,
            "ean_plu": "7318690026181",
            "name": "Dillkaviar mildrГ¶kt",
            "producer": "ICA",
            "wt_vol_pce": "250 g",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 18718,
            "ean_plu": "7312170095223",
            "name": "Djungeldessert 8 mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 30313,
            "ean_plu": "7310867542043",
            "name": "Dr yog BlГҐb&Ac LF",
            "producer": "SkГҐnemejerier",
            "wt_vol_pce": "330ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10696,
            "ean_plu": "5410146964954",
            "name": "Drickyoghurt Jordgubb",
            "producer": "Actimel",
            "wt_vol_pce": "8x100g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8886,
            "ean_plu": "5410146413605",
            "name": "Drickyogurt Dino Jordgubb",
            "producer": "Danonino",
            "wt_vol_pce": "4x100g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 416,
            "ean_plu": "7311170037066",
            "name": "Drottkaviar Orgin",
            "producer": "Ejderns",
            "wt_vol_pce": "150 g",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 1169,
            "ean_plu": "7318690081487",
            "name": "Edamer skivor",
            "producer": "ICA Basic",
            "wt_vol_pce": "400 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8987,
            "ean_plu": "7318690125419",
            "name": "EKO apelsinjuice",
            "producer": "ICA I love eco",
            "wt_vol_pce": "1750ml",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 8986,
            "ean_plu": "7318690125402",
            "name": "EKO Г¤pplejuice",
            "producer": "ICA I love eco",
            "wt_vol_pce": "1750ml",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 7241,
            "ean_plu": "7318690124115",
            "name": "Eko Brie",
            "producer": "ICA Selection",
            "wt_vol_pce": "250g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 18668,
            "ean_plu": "7310100970978",
            "name": "EKO Chili con carne 6m",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 10642,
            "ean_plu": "7310865066763",
            "name": "Eko Creme Fraiche",
            "producer": "Arla KГ¶ket",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 30418,
            "ean_plu": "7318690140948",
            "name": "Eko drickyoghurt Jordg & Smultron",
            "producer": "ICA I love eco",
            "wt_vol_pce": "330 ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 29160,
            "ean_plu": "7318690144076",
            "name": "EKO Falukorv",
            "producer": "ICA I love eco",
            "wt_vol_pce": "400g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 22430,
            "ean_plu": "7310100954718",
            "name": "EKO GrГ¶nsaker & kyckling 6 mГҐn KRAV",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 39094,
            "ean_plu": "7310100971395",
            "name": "EKO Lasagne 1 ГҐr",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22429,
            "ean_plu": "7310100954305",
            "name": "EKO Lasagne 6 mГҐn KRAV",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8668,
            "ean_plu": "7318690125884",
            "name": "Eko LF CrГ©m fr 34%",
            "producer": "ICA I love eco",
            "wt_vol_pce": "200ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 15612,
            "ean_plu": "7318690134466",
            "name": "Eko LF grГ¤ddfil",
            "producer": "ICA I love eco",
            "wt_vol_pce": "3dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 18663,
            "ean_plu": "7310100953490",
            "name": "EKO Majs & sГ¶tpotatis 4 mГҐn KRAV",
            "producer": "Semper",
            "wt_vol_pce": "125g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 43285,
            "ean_plu": "7318690152149",
            "name": "Eko pizzakit",
            "producer": "ICA I love eco",
            "wt_vol_pce": "600g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 18674,
            "ean_plu": "7310100971210",
            "name": "EKO Risotto 8m",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 6938,
            "ean_plu": "7310240035308",
            "name": "Eko Rotfrukter och ramslГ¶ksoppa",
            "producer": "FELIX",
            "wt_vol_pce": "480 g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 30381,
            "ean_plu": "7318690140085",
            "name": "Eko SmГ¶r NS 82%",
            "producer": "ICA I love eco",
            "wt_vol_pce": "500g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 10638,
            "ean_plu": "7318690122326",
            "name": "Eko Yoghurt nature",
            "producer": "ICA I love eco",
            "wt_vol_pce": "1000 g",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 10399,
            "ean_plu": "7310865075192",
            "name": "EkoLaktosfri mella",
            "producer": "Arla Ko",
            "wt_vol_pce": "1 l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 30268,
            "ean_plu": "8714100399798",
            "name": "Ekologisk",
            "producer": "Flora",
            "wt_vol_pce": "400g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8977,
            "ean_plu": "7318690007067",
            "name": "Ekologisk Г¤ppeljuice",
            "producer": "ICA I Love eco",
            "wt_vol_pce": "1 l",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 7481,
            "ean_plu": "7350020130977",
            "name": "Ekologisk BlГҐ Kornblomst 36%",
            "producer": "Naturens Skafferi",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8691,
            "ean_plu": "7318690114949",
            "name": "Ekologisk CrГЁme fraiche 34%",
            "producer": "ICA I love eco",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 1250,
            "ean_plu": "7318690073710",
            "name": "Ekologisk feta",
            "producer": "ICA I love eco",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 10653,
            "ean_plu": "7310861011231",
            "name": "Ekologisk Fil 4,2% Naturell",
            "producer": "FjГ¤llfil",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8713,
            "ean_plu": "7318690122104",
            "name": "Ekologisk GrГ¤ddfil",
            "producer": "ICA I love eco",
            "wt_vol_pce": "300ml",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 9378,
            "ean_plu": "7310865084897",
            "name": "ekologisk grГ¤ddfil 12%",
            "producer": "Arla KoВ® Ekologisk",
            "wt_vol_pce": "3 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 14412,
            "ean_plu": "2319242200000",
            "name": "Ekologisk GrevГ©",
            "producer": "ICA I love eco",
            "wt_vol_pce": "ca450g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 14411,
            "ean_plu": "2319242100000",
            "name": "Ekologisk HerrgГҐrd",
            "producer": "ICA I love Eco",
            "wt_vol_pce": "ca 450 g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 9365,
            "ean_plu": "7318690122197",
            "name": "Ekologisk LГ¤tt CrГЁ",
            "producer": "ICA I love eco",
            "wt_vol_pce": "200ml",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 2490,
            "ean_plu": "7350002403884",
            "name": "Ekologisk Mozzarella",
            "producer": "Zeta",
            "wt_vol_pce": "100 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8833,
            "ean_plu": "7310860560662",
            "name": "Ekologisk Normalsaltat",
            "producer": "BregottВ®",
            "wt_vol_pce": "600 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8831,
            "ean_plu": "7310860005606",
            "name": "Ekologisk Normalsaltat",
            "producer": "BregottВ®",
            "wt_vol_pce": "300g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 14413,
            "ean_plu": "2319242000000",
            "name": "Ekologisk PrГ¤st",
            "producer": "ICA I love eco",
            "wt_vol_pce": "ca450g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 10655,
            "ean_plu": "7310865073921",
            "name": "ekologisk turkisk yoghurt 10 %",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "5 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 50481,
            "ean_plu": "5701977062316",
            "name": "Ekologisk vegan  bredbart",
            "producer": "Naturli' ",
            "wt_vol_pce": "225 g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 10641,
            "ean_plu": "7310865003461",
            "name": "Ekologisk VispgrГ¤dde 40%",
            "producer": "Arla KoВ® Ekologisk",
            "wt_vol_pce": "3 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 11138,
            "ean_plu": "7318690130703",
            "name": "Ekologisk Yoghurt Vanilj",
            "producer": "ICA I Love Eco",
            "wt_vol_pce": "1000 g",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 8491,
            "ean_plu": "7350020130151",
            "name": "Ekologiska Boveteflingor glutenfria",
            "producer": "Naturens Skafferi",
            "wt_vol_pce": "375 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 39109,
            "ean_plu": "7318690131847",
            "name": "Ekologiska Majskrokar",
            "producer": "ICA I love eco",
            "wt_vol_pce": "90 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 1556,
            "ean_plu": "6409630005234",
            "name": "Ekosalami",
            "producer": "Kotivara",
            "wt_vol_pce": "100 gram",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 2889,
            "ean_plu": "7318690112075",
            "name": "Extra fin Falukorv",
            "producer": "ICA",
            "wt_vol_pce": "550g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 6389,
            "ean_plu": "7393914031301",
            "name": "ExtrarГ¶kt korv",
            "producer": "Onsala",
            "wt_vol_pce": "250g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 921,
            "ean_plu": "7318690091899",
            "name": "ExtrarГ¶kt skinka Tunna Skivor",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 8830,
            "ean_plu": "7310860005842",
            "name": "Extrasaltat",
            "producer": "BregottВ®",
            "wt_vol_pce": "600g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8824,
            "ean_plu": "7310860005859",
            "name": "Extrasaltat",
            "producer": "BregottВ®",
            "wt_vol_pce": "300g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 296,
            "ean_plu": "3073780410830",
            "name": "FГ¤. ost vitlГ¶k Г¶rt",
            "producer": "Cantadou",
            "wt_vol_pce": "125 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 297,
            "ean_plu": "3073780824637",
            "name": "FГ¤.ost 4 sort pepp",
            "producer": "Cantadou",
            "wt_vol_pce": "125 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8563,
            "ean_plu": "7331217011286",
            "name": "Falafel FГ¤rsk",
            "producer": "Sevan",
            "wt_vol_pce": "230g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 7710,
            "ean_plu": "7350037191770",
            "name": "Falukorv",
            "producer": "HГ¤rryda Karlsson",
            "wt_vol_pce": "500g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 850,
            "ean_plu": "7318690022275",
            "name": "Falukorv",
            "producer": "ICA",
            "wt_vol_pce": "800g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 2237,
            "ean_plu": "7300206787006",
            "name": "FALUKORV",
            "producer": "Scan",
            "wt_vol_pce": "800g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 6808,
            "ean_plu": "7350037191879",
            "name": "Falukorv Bit Eko",
            "producer": "H. Karlssons Charkuterier",
            "wt_vol_pce": "400g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 129,
            "ean_plu": "2340380300000",
            "name": "Familjefavoriter Port Salut 26%",
            "producer": "ArlaВ®",
            "wt_vol_pce": "ca 375g",
            "product_group_id": 761,
            "shelf_id": 3478
          },
          {
            "id": 39059,
            "ean_plu": "7318690144823",
            "name": "FГ¤rdigstekt bacon",
            "producer": "ICA",
            "wt_vol_pce": "60 g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 15884,
            "ean_plu": "7310865095671",
            "name": "FГ¤rsk laktosfri mellanmjГ¶lkdr 1,5%",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "1 liter",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 15883,
            "ean_plu": "7310865095695",
            "name": "FГ¤rsk laktosfri standardmjГ¶lkdr 3%",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "1 liter",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 984,
            "ean_plu": "7318690090663",
            "name": "FГ¤rsk pajdeg",
            "producer": "ICA",
            "wt_vol_pce": "250g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 976,
            "ean_plu": "7318690095033",
            "name": "FГ¤rska Fettuccine",
            "producer": "ICA",
            "wt_vol_pce": "500 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 978,
            "ean_plu": "7318690034865",
            "name": "FГ¤rska Fettuccine med spenat",
            "producer": "ICA",
            "wt_vol_pce": "250 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 6428,
            "ean_plu": "7318690111627",
            "name": "FГ¤rska Gnocchi",
            "producer": "ICA",
            "wt_vol_pce": "400 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 981,
            "ean_plu": "7318690039297",
            "name": "FГ¤rska Lasagneplattor",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 211,
            "ean_plu": "3175460000017",
            "name": "FГ¤rskost  med vitlГ¶k & Г–rter",
            "producer": "Boursin",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 7245,
            "ean_plu": "5711953029912",
            "name": "FГ¤rskost Naturell 25%",
            "producer": "ArlaВ®",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 7266,
            "ean_plu": "5711953029875",
            "name": "FГ¤rskost Paprika 23%",
            "producer": "ArlaВ®",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 301,
            "ean_plu": "3073780410984",
            "name": "FГ¤rskost pepparrot",
            "producer": "Cantadou",
            "wt_vol_pce": "125 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 50368,
            "ean_plu": "3073781091120",
            "name": "FГ¤rskost Pepparrot",
            "producer": "Cantadou",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 39049,
            "ean_plu": "5711953066818",
            "name": "FГ¤rskost RucPesto",
            "producer": "Arla",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 6879,
            "ean_plu": "5740200023564",
            "name": "FГ¤rskost v.lГ¶k Eko",
            "producer": "Castello",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 15059,
            "ean_plu": "8008698005576",
            "name": "FГ¤rskt BrГ¶d Classic",
            "producer": "SchГ¤r",
            "wt_vol_pce": "300 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8450,
            "ean_plu": "8008698011065",
            "name": "FГ¤rskt BrГ¶d Vital",
            "producer": "SchГ¤r",
            "wt_vol_pce": "350 g",
            "product_group_id": 757,
            "shelf_id": 1421
          },
          {
            "id": 1403,
            "ean_plu": "5787810000875",
            "name": "Favorit sГҐs",
            "producer": "Jensens KГёkken ",
            "wt_vol_pce": "250ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 580,
            "ean_plu": "5201083329513",
            "name": "Feta",
            "producer": "Mevgal",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 825,
            "ean_plu": "7318690073727",
            "name": "Feta",
            "producer": "ICA",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 578,
            "ean_plu": "7316150970586",
            "name": "Feta Ekologisk KRAV",
            "producer": "FONTANA",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 6876,
            "ean_plu": "7318690018728",
            "name": "Feta i lake",
            "producer": "ICA",
            "wt_vol_pce": "400 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 7463,
            "ean_plu": "7316150976519",
            "name": "Feta Lagrad Ekolog",
            "producer": "Fontana",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 10103,
            "ean_plu": "7316150976847",
            "name": "Feta Laktosfri",
            "producer": "Fontana",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 579,
            "ean_plu": "7316150970340",
            "name": "Feta Original",
            "producer": "FONTANA",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 2471,
            "ean_plu": "7350002402658",
            "name": "Fetaost",
            "producer": "Zeta",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 1251,
            "ean_plu": "7318690059523",
            "name": "Fettuccine",
            "producer": "ICA I love eco",
            "wt_vol_pce": "250 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 977,
            "ean_plu": "7318690034889",
            "name": "Fettuccine naturell",
            "producer": "ICA",
            "wt_vol_pce": "250 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 8485,
            "ean_plu": "7320880010146",
            "name": "Fiberhusk",
            "producer": "HUSK",
            "wt_vol_pce": "100 gr",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 10612,
            "ean_plu": "7310861011217",
            "name": "Fil 3,7% Hallon",
            "producer": "FjГ¤llfil",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 10613,
            "ean_plu": "7310861011200",
            "name": "Fil 3,7% Hjortron",
            "producer": "FjГ¤llfil",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 32135,
            "ean_plu": "7318690140122",
            "name": "Fil Naturell 3%",
            "producer": "ICA",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 9394,
            "ean_plu": "7310865088116",
            "name": "FilmjГ¶lk Citron/vanilj 2,7% -GT",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8784,
            "ean_plu": "7310865088222",
            "name": "FilmjГ¶lk jordgubb 2,7% - GT",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 17636,
            "ean_plu": "7310100565983",
            "name": "FIN MIX",
            "producer": "Semper",
            "wt_vol_pce": "500 gram",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 17636,
            "ean_plu": "7310100565983",
            "name": "FIN MIX",
            "producer": "Semper",
            "wt_vol_pce": "500 gram",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 22437,
            "ean_plu": "7312170095605",
            "name": "FISKGRATГ„NG 8M",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 30895,
            "ean_plu": "7314720733326",
            "name": "FlГ¤derblom Original med druva",
            "producer": "Kiviks Musteri",
            "wt_vol_pce": "1 l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 8514,
            "ean_plu": "7312170056217",
            "name": "FLAKES & RED BERRIES",
            "producer": "Semper",
            "wt_vol_pce": "300g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 13420,
            "ean_plu": "7318690125815",
            "name": "Flytande mjГ¶lkfritt margarin",
            "producer": "ICA",
            "wt_vol_pce": "500 ml",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8736,
            "ean_plu": "5709176183412",
            "name": "Flytande Vita",
            "producer": "KRONГ„GG",
            "wt_vol_pce": "1 kg",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 522,
            "ean_plu": "7310240035025",
            "name": "Fransk Fisksoppa",
            "producer": "Felix",
            "wt_vol_pce": "470g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 6780,
            "ean_plu": "3228020231670",
            "name": "Fransk Getost",
            "producer": "President",
            "wt_vol_pce": "120g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8441,
            "ean_plu": "7392050123918",
            "name": "FRASBRГ–D NATURELL",
            "producer": "OLDA",
            "wt_vol_pce": "130g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 51801,
            "ean_plu": "7393006003278",
            "name": "FrГ¶horn Ost&skinka",
            "producer": "LillesjГ¶",
            "wt_vol_pce": "150g",
            "product_group_id": 791,
            "shelf_id": 3480
          },
          {
            "id": 38930,
            "ean_plu": "5705001524726",
            "name": "Frugtdrik",
            "producer": "Rynkeby",
            "wt_vol_pce": "1500 ml",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 20397,
            "ean_plu": "5705001524641",
            "name": "Frugtdrik",
            "producer": "Rynkeby",
            "wt_vol_pce": "1500 ml",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 39103,
            "ean_plu": "4062300062566",
            "name": "Fruit Break Г„pple m Jordg/BlГҐbГ¤r 6m",
            "producer": "Hipp",
            "wt_vol_pce": "4x100 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18656,
            "ean_plu": "4062300242012",
            "name": "Fruit Drink Г„pple 12m",
            "producer": "Hipp",
            "wt_vol_pce": "3x200 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 39102,
            "ean_plu": "5060107339460",
            "name": "Frukt Yoghurt + Havre Banan",
            "producer": "Ella's Kitchen",
            "wt_vol_pce": "100 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 36406,
            "ean_plu": "5060107339491",
            "name": "Frukt Yoghurt + Havre Mango",
            "producer": "Ella's Kitchen",
            "wt_vol_pce": "100 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 21531,
            "ean_plu": "7312170029174",
            "name": "FruktgrГ¶t 8mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "480g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18590,
            "ean_plu": "7312170029204",
            "name": "FruktgrГ¶t Fullkorn 1 ГҐr",
            "producer": "Semper",
            "wt_vol_pce": "480g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18587,
            "ean_plu": "7312170029150",
            "name": "FruktgrГ¶t med Г¤pple och pГ¤ron 6m",
            "producer": "Semper",
            "wt_vol_pce": "480 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8867,
            "ean_plu": "5410146408632",
            "name": "Fruktkvarg, jordgubb/banan mix",
            "producer": "Danonino",
            "wt_vol_pce": "4x95g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 21569,
            "ean_plu": "7310100703262",
            "name": "FRUKTMUMS HALLON 6M",
            "producer": "Semper",
            "wt_vol_pce": "110g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 21571,
            "ean_plu": "7310100703187",
            "name": "FRUKTMUMS PГ„RON 6M",
            "producer": "Semper",
            "wt_vol_pce": "110g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 21570,
            "ean_plu": "7310100703347",
            "name": "FRUKTMUMS PERSIKA 6M",
            "producer": "Semper",
            "wt_vol_pce": "110g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8508,
            "ean_plu": "5765228126912",
            "name": "FruktmГјsli GF EKO",
            "producer": "URTEKRAM",
            "wt_vol_pce": "400 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 21596,
            "ean_plu": "5060107332836",
            "name": "Fruktris med pГ¤ron o Г¤pple",
            "producer": "Ella's Kitchen",
            "wt_vol_pce": "120 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8971,
            "ean_plu": "7310860007877",
            "name": "Fruktsoppa",
            "producer": "Rynkeby",
            "wt_vol_pce": "1000 ml",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 9650,
            "ean_plu": "7318690119838",
            "name": "Fruktyo 2,5% Skogs",
            "producer": "ICA",
            "wt_vol_pce": "1L",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8876,
            "ean_plu": "7318690018957",
            "name": "Fruktyoghurt 2,5% Jordgubb/Van",
            "producer": "ICA",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8878,
            "ean_plu": "7318690055341",
            "name": "Fruktyoghurt 2,5% Persika/Passion",
            "producer": "ICA",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 22412,
            "ean_plu": "7310100680648",
            "name": "Fullk vГ¤lling 1,5 ГҐr Naturell",
            "producer": "Semper",
            "wt_vol_pce": "725g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22406,
            "ean_plu": "7310100684295",
            "name": "Fullk vГ¤lling mild 8m drf 200 ml",
            "producer": "Semper",
            "wt_vol_pce": "200ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22534,
            "ean_plu": "7310100684523",
            "name": "Fullk. vГ¤lling 1ГҐr",
            "producer": "Semper",
            "wt_vol_pce": "30 l",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 21532,
            "ean_plu": "7312170029525",
            "name": "Fullk.grГ¶t Г„pple Jordg. 2ГҐr 6x470g",
            "producer": "Semper",
            "wt_vol_pce": "470g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22407,
            "ean_plu": "7310100685698",
            "name": "Fullk.vГ¤ll ban & plom 15 ГҐr drickf",
            "producer": "Semper",
            "wt_vol_pce": "250 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22413,
            "ean_plu": "7310100685933",
            "name": "Fullk.vГ¤ll ban plom 1,5ГҐr 5l",
            "producer": "Semper",
            "wt_vol_pce": "725g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18655,
            "ean_plu": "7312170068708",
            "name": "Fullk.vГ¤ll Frukt & Dinkel 3ГҐr 5l",
            "producer": "Semper",
            "wt_vol_pce": "700g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22408,
            "ean_plu": "7312170068579",
            "name": "Fullk.vГ¤ll frukt & yogh 2 ГҐr drickf",
            "producer": "Semper",
            "wt_vol_pce": "250 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18654,
            "ean_plu": "7312170068500",
            "name": "Fullk.vГ¤ll frukt yogh 2ГҐr 5l",
            "producer": "Semper",
            "wt_vol_pce": "725g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18653,
            "ean_plu": "7310100684370",
            "name": "Fullk.vГ¤ll.1ГҐr 5l",
            "producer": "Semper",
            "wt_vol_pce": "725g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 21533,
            "ean_plu": "7312170029211",
            "name": "FullkgrГ¶t Frukt 1,5ГҐr 6x470g",
            "producer": "Semper",
            "wt_vol_pce": "480g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 21558,
            "ean_plu": "7312170029198",
            "name": "FullkornsgrГ¶t 1ГҐr",
            "producer": "Semper",
            "wt_vol_pce": "480g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 21500,
            "ean_plu": "7613035642744",
            "name": "FullkornsgrГ¶t Katrinpl Г„pple 6 M",
            "producer": "NESTLГ‰",
            "wt_vol_pce": "16 port",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 39106,
            "ean_plu": "4062300204607",
            "name": "FullkornsgrГ¶t m Banan & Plommon 8m",
            "producer": "Hipp",
            "wt_vol_pce": "270 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18580,
            "ean_plu": "7310100685285",
            "name": "FullkornsvГ¤lling 1 ГҐr drickf",
            "producer": "Semper",
            "wt_vol_pce": "200 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18581,
            "ean_plu": "4062300172234",
            "name": "FullkornsvГ¤lling 12m",
            "producer": "Hipp",
            "wt_vol_pce": "608 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22404,
            "ean_plu": "7613035622289",
            "name": "FullkornsvГ¤lling Г„pple Banan 2 Г…r",
            "producer": "NESTLГ‰",
            "wt_vol_pce": "750 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18597,
            "ean_plu": "7310100683953",
            "name": "FullkornsvГ¤lling mild 8 mГҐn 5l",
            "producer": "Semper",
            "wt_vol_pce": "725g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 15822,
            "ean_plu": "7318690138679",
            "name": "Fusilli m basilika",
            "producer": "ICA",
            "wt_vol_pce": "300g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 8448,
            "ean_plu": "7310100565723",
            "name": "Gf KnГ¤ckebrГ¶d Rekt",
            "producer": "Semper",
            "wt_vol_pce": "215g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 7536,
            "ean_plu": "7318690011194",
            "name": "Girasole tomat & mozzarella",
            "producer": "ICA Selection",
            "wt_vol_pce": "250 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 39065,
            "ean_plu": "720516021442",
            "name": "Gluten Substitute",
            "producer": "Orgran",
            "wt_vol_pce": "200g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8442,
            "ean_plu": "7300400109215",
            "name": "Glutenfri",
            "producer": "Wasa",
            "wt_vol_pce": "275g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8533,
            "ean_plu": "5765228127957",
            "name": "Glutenfri C-Flakes EKO",
            "producer": "URTEKRAM",
            "wt_vol_pce": "375 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 18461,
            "ean_plu": "7318690094036",
            "name": "Glutenfri Casarecce",
            "producer": "ICA",
            "wt_vol_pce": "500 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 18994,
            "ean_plu": "7318690109389",
            "name": "Glutenfri Chokladkex",
            "producer": "ICA",
            "wt_vol_pce": "64.5 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8500,
            "ean_plu": "7311143200107",
            "name": "Glutenfri FruktmГјsli",
            "producer": "Finax",
            "wt_vol_pce": "550g",
            "product_group_id": 757,
            "shelf_id": 1421
          },
          {
            "id": 18462,
            "ean_plu": "7318690094029",
            "name": "Glutenfri Fusilli",
            "producer": "ICA",
            "wt_vol_pce": "500 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 17646,
            "ean_plu": "7310100604422",
            "name": "Glutenfri Fusilli",
            "producer": "Semper",
            "wt_vol_pce": "500g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 15080,
            "ean_plu": "8033087771800",
            "name": "Glutenfri gnocchi",
            "producer": "Da Carla",
            "wt_vol_pce": "500g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 18499,
            "ean_plu": "7311143100308",
            "name": "Glutenfri LГҐgprotein MjГ¶lmix",
            "producer": "Finax",
            "wt_vol_pce": "900g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 17645,
            "ean_plu": "7310100604590",
            "name": "GLUTENFRI LASAGNE",
            "producer": "Semper",
            "wt_vol_pce": "250 gram",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 17648,
            "ean_plu": "7311143100117",
            "name": "Glutenfri MjГ¶lmix",
            "producer": "Finax",
            "wt_vol_pce": "900 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 19001,
            "ean_plu": "5391521690289",
            "name": "Glutenfri pitabrГ¶d",
            "producer": "Bfree",
            "wt_vol_pce": "4 st",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 9465,
            "ean_plu": "3392590203785",
            "name": "Glutenfri pizzadeg",
            "producer": "POP! Bakery",
            "wt_vol_pce": "260",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 17644,
            "ean_plu": "7310100604262",
            "name": "GLUTENFRI SPAGHETTI",
            "producer": "Semper",
            "wt_vol_pce": "500 gram",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 17693,
            "ean_plu": "7310130006203",
            "name": "Glutenfri VГҐffelmix",
            "producer": "KungsГ¶rnen",
            "wt_vol_pce": "300g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8480,
            "ean_plu": "7310130004926",
            "name": "Glutenfria Havregryn",
            "producer": "AXA",
            "wt_vol_pce": "750g",
            "product_group_id": 757,
            "shelf_id": 1421
          },
          {
            "id": 18443,
            "ean_plu": "7310100571588",
            "name": "Glutenfria Kolakakor 6x150g",
            "producer": "Semper",
            "wt_vol_pce": "150g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8443,
            "ean_plu": "7318690097686",
            "name": "Glutenfritt HavreknГ¤cke",
            "producer": "Ica",
            "wt_vol_pce": "170 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 17671,
            "ean_plu": "7311149105505",
            "name": "Glutenfritt StrГ¶brГ¶d",
            "producer": "Finax",
            "wt_vol_pce": "200 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 22392,
            "ean_plu": "4005500051619",
            "name": "God Natt VГ¤lling Drf 6 MГҐn",
            "producer": "NESTLГ‰",
            "wt_vol_pce": "200 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 9735,
            "ean_plu": "7310860007563",
            "name": "Golden Grape",
            "producer": "Tropicana",
            "wt_vol_pce": "1 L",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 7479,
            "ean_plu": "7318690124177",
            "name": "Gorgonzola",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 6777,
            "ean_plu": "7350002403419",
            "name": "Gorgonzola Eko",
            "producer": "Zeta",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 608,
            "ean_plu": "8000430058666",
            "name": "Gorgonzola Intenso",
            "producer": "Galbani",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 6672,
            "ean_plu": "2319179100000",
            "name": "Gouda bit",
            "producer": "ICA Basic",
            "wt_vol_pce": "ca850g",
            "product_group_id": 760,
            "shelf_id": 3478
          },
          {
            "id": 9841,
            "ean_plu": "2319240100000",
            "name": "Gouda cheese 30%",
            "producer": "ICA",
            "wt_vol_pce": "ca 700g",
            "product_group_id": 761,
            "shelf_id": 3478
          },
          {
            "id": 3365,
            "ean_plu": "7318690081623",
            "name": "Goudaost i skivor",
            "producer": "ICA Basic",
            "wt_vol_pce": "400 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 2181,
            "ean_plu": "7313161405328",
            "name": "Gourmetpotatissallad",
            "producer": "RYDBERGS",
            "wt_vol_pce": "350g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 8717,
            "ean_plu": "7318690055990",
            "name": "GrГ¤ddfil",
            "producer": "ICA",
            "wt_vol_pce": "500 ml",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 8719,
            "ean_plu": "7318690055983",
            "name": "GrГ¤ddfil 12%",
            "producer": "ICA",
            "wt_vol_pce": "3 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 8714,
            "ean_plu": "7310865004703",
            "name": "GrГ¤ddfil 12%",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "3 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 6654,
            "ean_plu": "7300201481008",
            "name": "GrГ¤ddleverpastej",
            "producer": "Scan",
            "wt_vol_pce": "200 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 9372,
            "ean_plu": "7310865094476",
            "name": "grГ¤ddmjГ¶lk",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "3 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 7181,
            "ean_plu": "7318690105220",
            "name": "GrГ¤ddost",
            "producer": "ICA",
            "wt_vol_pce": "400 g",
            "product_group_id": 760,
            "shelf_id": 3478
          },
          {
            "id": 183,
            "ean_plu": "8002004211927",
            "name": "Gran Biraghi f.riv",
            "producer": "Biraghi",
            "wt_vol_pce": "50 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 9433,
            "ean_plu": "7318690127109",
            "name": "Grana Padano 12mГҐn",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 2477,
            "ean_plu": "7350002401828",
            "name": "Grana Padano 16 mГҐn.",
            "producer": "Zeta",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 6441,
            "ean_plu": "7350027793229",
            "name": "Grana Padano Flarn",
            "producer": "Zeta",
            "wt_vol_pce": "100g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 17303,
            "ean_plu": "7392128810047",
            "name": "GranatГ¤ppeldryck KRAV",
            "producer": "FinnerГ¶dja",
            "wt_vol_pce": "1 liter",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 14108,
            "ean_plu": "5290074002412",
            "name": "GranatГ¤pple Fruktdryck",
            "producer": "Fontana",
            "wt_vol_pce": "1 l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 20409,
            "ean_plu": "7392128900045",
            "name": "GranatГ¤ppledryck konc KRAV",
            "producer": "FinnerГ¶dja",
            "wt_vol_pce": "200 ml",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 38921,
            "ean_plu": "7391835917193",
            "name": "GranatГ¤pplejui EKO",
            "producer": "Kung markatta",
            "wt_vol_pce": "1L",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 8618,
            "ean_plu": "4002971234602",
            "name": "Grand Dessert Double Choc",
            "producer": "Ehrmann",
            "wt_vol_pce": "200g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 1141,
            "ean_plu": "7318690027720",
            "name": "Gravad lax skivad",
            "producer": "ICA",
            "wt_vol_pce": "180gram",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 8153,
            "ean_plu": "7318690037712",
            "name": "Gravad lax skivad",
            "producer": "ICA",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 13437,
            "ean_plu": "5411188121213",
            "name": "Greek StyleВ naturell",
            "producer": "ALPRO",
            "wt_vol_pce": "400g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10336,
            "ean_plu": "5411188121237",
            "name": "GREEK STYLE PASSIONSFRUKT",
            "producer": "ALPRO",
            "wt_vol_pce": "150g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8752,
            "ean_plu": "7318690123934",
            "name": "Grekis Yoghurt 10%",
            "producer": "ICA Selection",
            "wt_vol_pce": "450g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 7368,
            "ean_plu": "2319232900000",
            "name": "GrevГ© 17% lagr vav",
            "producer": "ICA",
            "wt_vol_pce": "500g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 9170,
            "ean_plu": "2324528600000",
            "name": "GrevГ© 28% 18mГҐn",
            "producer": "Allerum",
            "wt_vol_pce": "c700 g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 889,
            "ean_plu": "7318690107125",
            "name": "Grillad kyckling Plb",
            "producer": "ICA",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 6377,
            "ean_plu": "7318690112563",
            "name": "Grillkorv Ekologisk",
            "producer": "ICA I love eco",
            "wt_vol_pce": "400g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 827,
            "ean_plu": "7318690092759",
            "name": "Grillost",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1419
          },
          {
            "id": 1520,
            "ean_plu": "5760466878210",
            "name": "GrГ¶n sparrissoppa 4%",
            "producer": "KeldaВ®",
            "wt_vol_pce": "5 dl",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 15511,
            "ean_plu": "4002160092617",
            "name": "GrГ¶nsaks juice",
            "producer": "Granini",
            "wt_vol_pce": "0,5 L",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 22481,
            "ean_plu": "4062300329522",
            "name": "GrГ¶nsaks- & Kycklingrisotto 8m",
            "producer": "Hipp",
            "wt_vol_pce": "190 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18672,
            "ean_plu": "4062300326521",
            "name": "GrГ¶nsakslasagne 8m",
            "producer": "Hipp",
            "wt_vol_pce": "190 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18477,
            "ean_plu": "5765228121511",
            "name": "Grova havreflingor EKO Glutenfri",
            "producer": "Urtekram",
            "wt_vol_pce": "600 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 7263,
            "ean_plu": "7318690124153",
            "name": "Gruyere 5-6 mГҐn",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 2467,
            "ean_plu": "7038010028830",
            "name": "GUDBRANDSDALEN MESOST 29%",
            "producer": "TINE",
            "wt_vol_pce": "500g",
            "product_group_id": 761,
            "shelf_id": 3478
          },
          {
            "id": 2176,
            "ean_plu": "7313161311667",
            "name": "Gurksallad",
            "producer": "Rydbergs",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 1331,
            "ean_plu": "7391196007304",
            "name": "Haga Petters GrГ¶npeppar Salami",
            "producer": "Jakobsdals",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1337,
            "ean_plu": "7391196007359",
            "name": "Haga Petters Olivmortadella",
            "producer": "Jakobsdals",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1342,
            "ean_plu": "7391196007298",
            "name": "Haga Petters Salami",
            "producer": "Jakobsdals ",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 43266,
            "ean_plu": "7392555400156",
            "name": "Halkidikioliver i Г¶rtmarinad",
            "producer": "Ridderheims",
            "wt_vol_pce": "160g",
            "product_group_id": 759,
            "shelf_id": 1420
          },
          {
            "id": 8955,
            "ean_plu": "7310090772620",
            "name": "Hallon",
            "producer": "Risifrutti",
            "wt_vol_pce": "175 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 14707,
            "ean_plu": "7314720724416",
            "name": "Hallon BlГҐbГ¤r BГ¤rdryck Konc",
            "producer": "Kiviks Musteri",
            "wt_vol_pce": "2 dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 14718,
            "ean_plu": "7314720724317",
            "name": "Hallon Persika Frukt & BГ¤rdryck Kon",
            "producer": "Kiviks Musteri",
            "wt_vol_pce": "2 dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 8970,
            "ean_plu": "7310867578912",
            "name": "Hallon/GranatГ¤pp",
            "producer": "Proviva",
            "wt_vol_pce": "1 L",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 9015,
            "ean_plu": "7313613011183",
            "name": "Hallondryck",
            "producer": "BrГ¤mhults",
            "wt_vol_pce": "1 L",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 581,
            "ean_plu": "7316150974393",
            "name": "Halloumi",
            "producer": "Fontana",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 15829,
            "ean_plu": "7316150510102",
            "name": "Halloumi",
            "producer": "Fontana",
            "wt_vol_pce": "225g",
            "product_group_id": 760,
            "shelf_id": 1419
          },
          {
            "id": 2482,
            "ean_plu": "7350002402719",
            "name": "Halloumi",
            "producer": "Zeta",
            "wt_vol_pce": "250g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 6873,
            "ean_plu": "7316150974836",
            "name": "Halloumi Eko",
            "producer": "Fontana",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 2991,
            "ean_plu": "7318690097242",
            "name": "Halloumi med chili",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 1263,
            "ean_plu": "7318690103950",
            "name": "Halloumiburgare",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8791,
            "ean_plu": "7310861002697",
            "name": "HГ¤lsofil BlГҐbГ¤r 3,5%",
            "producer": "Verum",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 10604,
            "ean_plu": "7310861002949",
            "name": "HГ¤lsofil Naturell 4%",
            "producer": "Verum",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 829,
            "ean_plu": "7318690053736",
            "name": "Hamb.ost m cheddar",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 1811,
            "ean_plu": "7350042721689",
            "name": "Hamburgerdressing Original",
            "producer": "Max",
            "wt_vol_pce": "220 ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 6628,
            "ean_plu": "7318690089018",
            "name": "HamburgerkГ¶tt Plb",
            "producer": "ICA",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1146,
            "ean_plu": "7318690084693",
            "name": "Handskalade rГ¤kor",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 1147,
            "ean_plu": "7318690090267",
            "name": "Handskalade rГ¤kor",
            "producer": "ICA",
            "wt_vol_pce": "280 g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 36396,
            "ean_plu": "7392555853006",
            "name": "Happy Soy Skewers",
            "producer": "Tzay",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 679,
            "ean_plu": "7350037190421",
            "name": "HГ¤rryda falu",
            "producer": "H. Karlssons Charkuterier",
            "wt_vol_pce": "800g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 8674,
            "ean_plu": "7394376614804",
            "name": "Havredryck Choklad",
            "producer": "Oatly",
            "wt_vol_pce": "250 ml",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 10444,
            "ean_plu": "7394376616105",
            "name": "Havredryck Ekologisk KRAV",
            "producer": "Oatly",
            "wt_vol_pce": "1l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 10434,
            "ean_plu": "7310130004902",
            "name": "Havredryck Glutenf",
            "producer": "GoGreen",
            "wt_vol_pce": "1 l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 13404,
            "ean_plu": "7318690123804",
            "name": "Havredryck naturel",
            "producer": "ICA",
            "wt_vol_pce": "1L",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 13405,
            "ean_plu": "7318690123811",
            "name": "Havredryck vanilj",
            "producer": "ICA",
            "wt_vol_pce": "1L",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 21528,
            "ean_plu": "7310100291165",
            "name": "HavregrГ¶t 6mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "480g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8484,
            "ean_plu": "7310100600202",
            "name": "HAVREGRYN REN",
            "producer": "Semper",
            "wt_vol_pce": "500g",
            "product_group_id": 757,
            "shelf_id": 1421
          },
          {
            "id": 9436,
            "ean_plu": "7394376615757",
            "name": "Havregurt Jordgubb",
            "producer": "Oatly",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9437,
            "ean_plu": "7394376615740",
            "name": "Havregurt Naturell",
            "producer": "Oatly",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 17613,
            "ean_plu": "7310100600387",
            "name": "Havrekakor",
            "producer": "Semper",
            "wt_vol_pce": "150g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 8447,
            "ean_plu": "7310100600462",
            "name": "HavreknГ¤cke",
            "producer": "Semper",
            "wt_vol_pce": "215g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 18652,
            "ean_plu": "7310100683533",
            "name": "HavrevГ¤lling 6 mГҐn 5l",
            "producer": "Semper",
            "wt_vol_pce": "725g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22405,
            "ean_plu": "7310100683878",
            "name": "HavrevГ¤lling mild 6 mГҐn drf",
            "producer": "Semper",
            "wt_vol_pce": "200ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8826,
            "ean_plu": "7310860005583",
            "name": "Havssalt",
            "producer": "BregottВ®",
            "wt_vol_pce": "300 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 15481,
            "ean_plu": "7314720733951",
            "name": "Havtorn m druva o apelsin Fruktdryc",
            "producer": "Kiviks Musteri",
            "wt_vol_pce": "1 l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 20407,
            "ean_plu": "7392128810054",
            "name": "Havtornsdryck KRAV",
            "producer": "FinnerГ¶dja",
            "wt_vol_pce": "1 liter",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 7646,
            "ean_plu": "2319233000000",
            "name": "Herrg 17% lagr vav",
            "producer": "ICA",
            "wt_vol_pce": "500g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 7647,
            "ean_plu": "2319232700000",
            "name": "HerrgГҐrd 28% lagra",
            "producer": "ICA",
            "wt_vol_pce": "500g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 6723,
            "ean_plu": "7318690120544",
            "name": "HerrgГҐrd 28% skiv",
            "producer": "ICA",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 139,
            "ean_plu": "7311871023061",
            "name": "HerrgГҐrd 28% skivad",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 6665,
            "ean_plu": "2324500200000",
            "name": "HerrgГҐrdВ® 17% vГ¤llagrad nb",
            "producer": "AllerumВ®",
            "wt_vol_pce": "ca 450g",
            "product_group_id": 761,
            "shelf_id": 1415
          },
          {
            "id": 15971,
            "ean_plu": "7318690138983",
            "name": "Het rГ¤krГ¶ra",
            "producer": "ICA",
            "wt_vol_pce": "175g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 21527,
            "ean_plu": "4062300249479",
            "name": "Hippis GrГ¶t Г„pple Persika 6m",
            "producer": "Hipp",
            "wt_vol_pce": "100 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18627,
            "ean_plu": "4062300249509",
            "name": "Hippis GrГ¶t Fruktmix 6m",
            "producer": "Hipp",
            "wt_vol_pce": "100 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 21526,
            "ean_plu": "4062300249448",
            "name": "Hippis GrГ¶t PГ¤ron Г„pple Aprikos 6m",
            "producer": "Hipp",
            "wt_vol_pce": "100 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 436,
            "ean_plu": "7350042720019",
            "name": "Hollandaise",
            "producer": "Eriks sГҐser",
            "wt_vol_pce": "230 ml",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 2247,
            "ean_plu": "7300206275008",
            "name": "HOT DOGS",
            "producer": "Hot Dogs",
            "wt_vol_pce": "500g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 13755,
            "ean_plu": "7300200068002",
            "name": "HOTDOGS",
            "producer": "Hot Dogs",
            "wt_vol_pce": "500g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 13264,
            "ean_plu": "7331217011941",
            "name": "Hummus FГ¤rsk Hot & Spicy",
            "producer": "Sevan",
            "wt_vol_pce": "250g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 6448,
            "ean_plu": "7331217011248",
            "name": "Hummus FГ¤rsk Origi",
            "producer": "Sevan",
            "wt_vol_pce": "250g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 7340,
            "ean_plu": "7331217011255",
            "name": "Hummus Soltorkade",
            "producer": "Sevan",
            "wt_vol_pce": "250g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 6725,
            "ean_plu": "7318690120551",
            "name": "HushГҐll 26% skiv",
            "producer": "ICA",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 39045,
            "ean_plu": "7318690146643",
            "name": "HushГҐllsost  26%",
            "producer": "ICA",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 125,
            "ean_plu": "2340375400000",
            "name": "HushГҐllsost 26%",
            "producer": "ArlaВ®",
            "wt_vol_pce": "ca1,1 kg",
            "product_group_id": 760,
            "shelf_id": 3478
          },
          {
            "id": 39173,
            "ean_plu": "2319257000000",
            "name": "HushГҐllsost mild 26%",
            "producer": "ICA",
            "wt_vol_pce": "ca 2200g",
            "product_group_id": 761,
            "shelf_id": 3478
          },
          {
            "id": 39174,
            "ean_plu": "2319256900000",
            "name": "HushГҐllsost mild 26%",
            "producer": "ICA",
            "wt_vol_pce": "ca 1100g",
            "product_group_id": 761,
            "shelf_id": 3478
          },
          {
            "id": 1648,
            "ean_plu": "7310941802704",
            "name": "Husmorspastej GrГ¤dd",
            "producer": "LINDBERGS",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1649,
            "ean_plu": "7310941802223",
            "name": "Husmorspastej SkГҐnsk",
            "producer": "LINDBERGS",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 6974,
            "ean_plu": "7318690109235",
            "name": "I <3 eco Bearnaise KRAV",
            "producer": "ICA I love eco",
            "wt_vol_pce": "200g",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 6623,
            "ean_plu": "7318690116370",
            "name": "I love eco Kokt sk",
            "producer": "ICA I love eco",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 8112,
            "ean_plu": "7318690017073",
            "name": "I love Eco PlГ¤ttar",
            "producer": "ICA",
            "wt_vol_pce": "300 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 6621,
            "ean_plu": "7318690116387",
            "name": "I love eco RГ¶kt skinka",
            "producer": "ICA",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 10449,
            "ean_plu": "7394376616037",
            "name": "iKaffe",
            "producer": "Oatly",
            "wt_vol_pce": "1l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 8673,
            "ean_plu": "7394376615627",
            "name": "iMat Ekologisk KRAV",
            "producer": "Oatly",
            "wt_vol_pce": "250 ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10421,
            "ean_plu": "7394376616174",
            "name": "iMat Fraiche",
            "producer": "Oatly",
            "wt_vol_pce": "500 ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8667,
            "ean_plu": "7394376615290",
            "name": "iMat Fraiche",
            "producer": "OATLY",
            "wt_vol_pce": "200 ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 524,
            "ean_plu": "7310240035032",
            "name": "Indisk Masalasoppa",
            "producer": "FELIX",
            "wt_vol_pce": "475 g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 18607,
            "ean_plu": "5705001432052",
            "name": "IngefГ¤rsshot",
            "producer": "Rynkeby",
            "wt_vol_pce": "500ml",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 525,
            "ean_plu": "7310240035049",
            "name": "Italiensk Tomatsoppa",
            "producer": "FELIX",
            "wt_vol_pce": "475 g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 2302,
            "ean_plu": "7300201226005",
            "name": "JГ„GARBACON",
            "producer": "Scan",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 6571,
            "ean_plu": "7350027792116",
            "name": "JamГіn Serrano",
            "producer": "Zeta",
            "wt_vol_pce": "300 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 891,
            "ean_plu": "7318690104469",
            "name": "JamГіn Serrano",
            "producer": "ICA",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 394,
            "ean_plu": "7350027793724",
            "name": "JamГіn Serrano",
            "producer": "Zeta",
            "wt_vol_pce": "70g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 2463,
            "ean_plu": "7331494124617",
            "name": "JARLSBERG 27%",
            "producer": "TINE",
            "wt_vol_pce": "500 g",
            "product_group_id": 761,
            "shelf_id": 3478
          },
          {
            "id": 17294,
            "ean_plu": "7330857000247",
            "name": "JГ¤st fГ¶r matbrГ¶d",
            "producer": "KronjГ¤st",
            "wt_vol_pce": "50 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 17295,
            "ean_plu": "7330857000261",
            "name": "JГ¤st fГ¶r sГ¶ta degar",
            "producer": "KronjГ¤st",
            "wt_vol_pce": "50 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 10346,
            "ean_plu": "7350044609923",
            "name": "Jeezly - Jeezly+ skivad",
            "producer": "Astrid och aporna",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 8108,
            "ean_plu": "7350044603105",
            "name": "Jeezly - original skivad",
            "producer": "Astrid och Aporna",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 6506,
            "ean_plu": "7350044603112",
            "name": "Jeezly - Perfekt pizza",
            "producer": "Astrid och Aporna",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 6792,
            "ean_plu": "7350044603099",
            "name": "Jeezly Orginal",
            "producer": "Astrid och aporna",
            "wt_vol_pce": "400 g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 10055,
            "ean_plu": "7318690128861",
            "name": "JordГ¤rtskockssoppa",
            "producer": "ICA",
            "wt_vol_pce": "425g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 8956,
            "ean_plu": "7310090771623",
            "name": "Jordgubb",
            "producer": "Risifrutti",
            "wt_vol_pce": "175 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8926,
            "ean_plu": "7310090781622",
            "name": "Jordgubb",
            "producer": "Mannafrutti",
            "wt_vol_pce": "165 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 31114,
            "ean_plu": "7312631410534",
            "name": "Jordgubb & Mandel MГјsli",
            "producer": "Risenta",
            "wt_vol_pce": "350g",
            "product_group_id": 757,
            "shelf_id": 1421
          },
          {
            "id": 8636,
            "ean_plu": "7310090761525",
            "name": "Jordgubb Laktosfri",
            "producer": "RisiFrutti",
            "wt_vol_pce": "165 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 21588,
            "ean_plu": "5060107330368",
            "name": "Jordgubb och Г„pple purГ©",
            "producer": "Ella's Kitchen",
            "wt_vol_pce": "120 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8814,
            "ean_plu": "7310865018465",
            "name": "jordgubb/smultron 2%",
            "producer": "YoggiВ®",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9495,
            "ean_plu": "7310867561006",
            "name": "Juice Apelsin",
            "producer": "BRAVO",
            "wt_vol_pce": "2 liter",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 9485,
            "ean_plu": "7310867561013",
            "name": "Juice Г„pple",
            "producer": "BRAVO",
            "wt_vol_pce": "2 liter",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 14101,
            "ean_plu": "5290074002474",
            "name": "Juice Tomat",
            "producer": "Fontana",
            "wt_vol_pce": "1 l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 9493,
            "ean_plu": "7310867561020",
            "name": "Juice Tropisk",
            "producer": "BRAVO",
            "wt_vol_pce": "2 liter",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 858,
            "ean_plu": "7318690075196",
            "name": "Kabanoss",
            "producer": "ICA",
            "wt_vol_pce": "240g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 860,
            "ean_plu": "7318690075226",
            "name": "Kabanoss smal",
            "producer": "ICA",
            "wt_vol_pce": "225g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 8742,
            "ean_plu": "7310865066756",
            "name": "KaffegrГ¤dde 10%",
            "producer": "Kelda",
            "wt_vol_pce": "250 ml",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 1317,
            "ean_plu": "7331044008602",
            "name": "Kalkon Kung Ingels",
            "producer": "Ingelsta Kalkon",
            "wt_vol_pce": "500g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 1319,
            "ean_plu": "7331044008619",
            "name": "Kalkon Wienerkorv",
            "producer": "Ingelsta Kalkon",
            "wt_vol_pce": "300g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 1308,
            "ean_plu": "7331044075901",
            "name": "KalkonbrГ¶st alspГҐnsrГ¶kt",
            "producer": "Ingelsta",
            "wt_vol_pce": "110g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 36460,
            "ean_plu": "7331044075932",
            "name": "KalkonbrГ¶st kokt",
            "producer": "Ingelsta kalkon",
            "wt_vol_pce": "110g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 7508,
            "ean_plu": "7331044075925",
            "name": "KalkonbrГ¶st pastra",
            "producer": "Ingelsta",
            "wt_vol_pce": "110 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 1437,
            "ean_plu": "7311170031149",
            "name": "Kalles kaviar orig",
            "producer": "Kalles",
            "wt_vol_pce": "300g",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 895,
            "ean_plu": "7318690088974",
            "name": "KallrГ¶kt Lantskinka Plb",
            "producer": "ICA",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 11225,
            "ean_plu": "2319241600000",
            "name": "KallrГ¶kt lax bit",
            "producer": "ICA",
            "wt_vol_pce": "c350 g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 8152,
            "ean_plu": "7318690037699",
            "name": "KallrГ¶kt lax skivad",
            "producer": "ICA",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 1142,
            "ean_plu": "7318690037705",
            "name": "KallrГ¶kt lax skivad",
            "producer": "ICA",
            "wt_vol_pce": "180g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 348,
            "ean_plu": "7310390030000",
            "name": "Kantarell",
            "producer": "CrГЁme Bonjour",
            "wt_vol_pce": "100g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 22440,
            "ean_plu": "7312170095001",
            "name": "Katrinplommon, pГ¤ron & Г¤pple 4 mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "125g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 15519,
            "ean_plu": "7310186010278",
            "name": "Katrinplommonjuice",
            "producer": "Friggs",
            "wt_vol_pce": "500 ml",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 2381,
            "ean_plu": "7311171006436",
            "name": "Kaviar tub",
            "producer": "Svennes",
            "wt_vol_pce": "300 g",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 2204,
            "ean_plu": "7313161408503",
            "name": "KebabsГҐs vit",
            "producer": "RYDBERGS",
            "wt_vol_pce": "250ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 8777,
            "ean_plu": "7310865088277",
            "name": "Kefir 3%",
            "producer": "Arla Ko",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8744,
            "ean_plu": "7310865008268",
            "name": "Kesella 10%",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8745,
            "ean_plu": "7310865008343",
            "name": "Kesella lГ¤tt 0,3%",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8747,
            "ean_plu": "7310865014269",
            "name": "Kesella Vanilj 7,5%",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 17626,
            "ean_plu": "7310100561503",
            "name": "Kex & chocklad",
            "producer": "Semper",
            "wt_vol_pce": "45 gram",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 17619,
            "ean_plu": "8008698003947",
            "name": "Kex Maria",
            "producer": "SchГ¤r",
            "wt_vol_pce": "200 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 39107,
            "ean_plu": "4062300229679",
            "name": "Kex med Г„pple & Fullkorn 12m",
            "producer": "Hipp",
            "wt_vol_pce": "150 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 17627,
            "ean_plu": "8008698002049",
            "name": "Kex Salti",
            "producer": "SchГ¤r",
            "wt_vol_pce": "175 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 22447,
            "ean_plu": "7312170095247",
            "name": "Kiwi, Г¤pple & pГ¤ron 8 mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18464,
            "ean_plu": "7310130004629",
            "name": "Kladdkaka Glutenfri kakmix",
            "producer": "KUNGSГ–RNEN",
            "wt_vol_pce": "500 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 1509,
            "ean_plu": "5760466877541",
            "name": "Klassisk grГ¤ddsГҐs 6%",
            "producer": "KeldaВ®",
            "wt_vol_pce": "3 dl",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 8701,
            "ean_plu": "8712100676727",
            "name": "Kockens Val",
            "producer": "Milda",
            "wt_vol_pce": "500ml",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 9480,
            "ean_plu": "7310860561249",
            "name": "Kockserien SmГ¶rstav",
            "producer": "ArlaВ®",
            "wt_vol_pce": "100 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 10450,
            "ean_plu": "5411188118732",
            "name": "Kokos & mandeldryc",
            "producer": "Alpro",
            "wt_vol_pce": "1 l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 10451,
            "ean_plu": "5411188116592",
            "name": "Kokos/Risdryck",
            "producer": "Alpro",
            "wt_vol_pce": "1000.0 g",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 13412,
            "ean_plu": "7310130004209",
            "name": "Kokosdryck",
            "producer": "GoGreen",
            "wt_vol_pce": "1 l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 15545,
            "ean_plu": "7318690134725",
            "name": "Kokosdryck med ris",
            "producer": "ICA",
            "wt_vol_pce": "1L",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 894,
            "ean_plu": "7318690088967",
            "name": "Kokt Lantskinka Plb",
            "producer": "ICA",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 6593,
            "ean_plu": "7391196007663",
            "name": "Kokt Saltrulle PLB ST",
            "producer": "Jakobsdals",
            "wt_vol_pce": "100gr",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 922,
            "ean_plu": "7318690039792",
            "name": "Kokt skinka Tunna Skivor",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 8918,
            "ean_plu": "7311443210509",
            "name": "KГ¶rsbГ¤r 2,7%",
            "producer": "BГ¤rry",
            "wt_vol_pce": "250 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 1862,
            "ean_plu": "7393914031554",
            "name": "Korv Original",
            "producer": "Onsala",
            "wt_vol_pce": "300g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 7114,
            "ean_plu": "7350027521914",
            "name": "Korvstroganoff",
            "producer": "Gooh",
            "wt_vol_pce": "400 g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 2293,
            "ean_plu": "7300200301000",
            "name": "KГ–TTBULLAR EKOLOGISKA SE",
            "producer": "Scan",
            "wt_vol_pce": "300g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 933,
            "ean_plu": "7318690031994",
            "name": "KГ–TTBULLAR KYLD",
            "producer": "ICA",
            "wt_vol_pce": "350g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 932,
            "ean_plu": "7318690032144",
            "name": "KГ–TTBULLAR KYLD",
            "producer": "ICA",
            "wt_vol_pce": "1000g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 36187,
            "ean_plu": "7318690145479",
            "name": "KГ¶ttbullar m mos",
            "producer": "ICA I love eco",
            "wt_vol_pce": "400g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 2291,
            "ean_plu": "7300207348008",
            "name": "KГ–TTBULLAR MAMMAS SE",
            "producer": "Scan",
            "wt_vol_pce": "1000g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 1311,
            "ean_plu": "7331044000811",
            "name": "KГ¶ttbullar stekta",
            "producer": "Ingelsta kalkon",
            "wt_vol_pce": "400g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 1149,
            "ean_plu": "7318690026921",
            "name": "KrГ¤ftstjГ¤rtar med dillsmak",
            "producer": "ICA",
            "wt_vol_pce": "360g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 18685,
            "ean_plu": "7310100957290",
            "name": "KrГ¤mig laxpasta 1ГҐr",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18582,
            "ean_plu": "7310100290823",
            "name": "KRAV Eko havregrГ¶t Г¤pple 6 mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "240g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22410,
            "ean_plu": "7310100710680",
            "name": "KRAV Eko havrevГ¤ll fullkorn, 1 ГҐr",
            "producer": "Semper",
            "wt_vol_pce": "270g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22409,
            "ean_plu": "7310100710505",
            "name": "KRAV Eko havrevГ¤lling, 6 mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "240g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 39074,
            "ean_plu": "7310100955883",
            "name": "KRAV Pot & lax 8M",
            "producer": "Semper",
            "wt_vol_pce": "190g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 24318,
            "ean_plu": "7318690144151",
            "name": "Krispig vegoschnitzel",
            "producer": "ICA",
            "wt_vol_pce": "200 g",
            "product_group_id": 757,
            "shelf_id": 3479
          },
          {
            "id": 2290,
            "ean_plu": "7300207204007",
            "name": "KRYDDJГ„RPAR",
            "producer": "Scan",
            "wt_vol_pce": "300g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 10724,
            "ean_plu": "6408432095863",
            "name": "Kvarg Citron Laktosfri",
            "producer": "VALIO",
            "wt_vol_pce": "200 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8737,
            "ean_plu": "7392672002059",
            "name": "Kvarg hallon",
            "producer": "Lindahls",
            "wt_vol_pce": "500 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9554,
            "ean_plu": "7392672001724",
            "name": "Kvarg hallonsmak",
            "producer": "Lindahls",
            "wt_vol_pce": "150 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 15898,
            "ean_plu": "7318690137993",
            "name": "Kvarg kokos Lfri",
            "producer": "ICA",
            "wt_vol_pce": "500g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8756,
            "ean_plu": "7392672001403",
            "name": "Kvarg natur 0,2%",
            "producer": "Lindahls",
            "wt_vol_pce": "500 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9556,
            "ean_plu": "7392672001748",
            "name": "Kvarg persika/passionsmak",
            "producer": "Lindahls",
            "wt_vol_pce": "150 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 15986,
            "ean_plu": "5711953057922",
            "name": "Kvarg vanilj 0,2%",
            "producer": "Arla",
            "wt_vol_pce": "1000g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10726,
            "ean_plu": "6408432095856",
            "name": "Kvarg Vanilj Laktosfri",
            "producer": "VALIO",
            "wt_vol_pce": "200 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9579,
            "ean_plu": "7392672002448",
            "name": "Kvarg vaniljsmak uts",
            "producer": "Lindahls",
            "wt_vol_pce": "500 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 652,
            "ean_plu": "7350027526162",
            "name": "Kyckl basilikasГҐs",
            "producer": "Gooh",
            "wt_vol_pce": "400 g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 7236,
            "ean_plu": "7318690124436",
            "name": "Kyckl.kГ¶ttbu ex fi",
            "producer": "ICA",
            "wt_vol_pce": "350g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 9262,
            "ean_plu": "7300321391003",
            "name": "Kycklingbacon",
            "producer": "KronfГҐgel",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 16371,
            "ean_plu": "7313940027000",
            "name": "Kycklingbr.filГ© gr",
            "producer": "GuldfГҐgeln",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 861,
            "ean_plu": "7318690020899",
            "name": "Kycklinggrillkorv",
            "producer": "ICA",
            "wt_vol_pce": "400 g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 2279,
            "ean_plu": "7300202617000",
            "name": "LГ„CKГ–KORV",
            "producer": "Scan",
            "wt_vol_pce": "300g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 6726,
            "ean_plu": "7318690119579",
            "name": "Lagr ost skiv KRAV",
            "producer": "ICA I love eco",
            "wt_vol_pce": "150g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 9426,
            "ean_plu": "7318690086659",
            "name": "Laktosfri A-fil 3%",
            "producer": "ICA",
            "wt_vol_pce": "1,0 l",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9420,
            "ean_plu": "7318690090137",
            "name": "Laktosfri CrГЁme Fraiche 34%",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9421,
            "ean_plu": "7318690091998",
            "name": "Laktosfri CrГЁme Fraiche 34%",
            "producer": "ICA",
            "wt_vol_pce": "5 dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 13275,
            "ean_plu": "6408432087936",
            "name": "Laktosfri eko lГ¤ttmjГ¶lkdryck",
            "producer": "VALIO",
            "wt_vol_pce": "1l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8681,
            "ean_plu": "7310865094155",
            "name": "Laktosfri eko mild yoghurt naturell",
            "producer": "Arla KoВ® Ekologisk",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9425,
            "ean_plu": "6408432087943",
            "name": "Laktosfri eko mjГ¶lkdryck",
            "producer": "VALIO",
            "wt_vol_pce": "1l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8680,
            "ean_plu": "7310865094117",
            "name": "Laktosfri ekologisk filmjГ¶lk",
            "producer": "Arla KoВ® Ekologisk",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8679,
            "ean_plu": "7310865094131",
            "name": "Laktosfri ekologisk lГ¤ttfil",
            "producer": "Arla KoВ® Ekologisk",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8684,
            "ean_plu": "7318690113966",
            "name": "Laktosfri Ekologisk MjГ¶lkdryck 1,5%",
            "producer": "ICA I love eco",
            "wt_vol_pce": "1 liter",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 10384,
            "ean_plu": "7318690075721",
            "name": "Laktosfri FilmjГ¶lk 3%",
            "producer": "ICA",
            "wt_vol_pce": "1,0 l",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10388,
            "ean_plu": "6408432102493",
            "name": "Laktosfri fruktyogh sommarbГ¤r",
            "producer": "Valio",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10417,
            "ean_plu": "7318690090731",
            "name": "Laktosfri GrГ¤ddfil 12%",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 10392,
            "ean_plu": "6408432096013",
            "name": "Laktosfri Kefir Hallon",
            "producer": "Valio",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8650,
            "ean_plu": "6408432096006",
            "name": "Laktosfri Kefir Naturell",
            "producer": "Valio",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8686,
            "ean_plu": "7318690094159",
            "name": "Laktosfri LГ¤ttmjГ¶lkdryck 0,5%",
            "producer": "ICA",
            "wt_vol_pce": "1 l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 9444,
            "ean_plu": "7318690102403",
            "name": "Laktosfri MatlagningsgrГ¤dde 15%",
            "producer": "ICA",
            "wt_vol_pce": "5 dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8643,
            "ean_plu": "7318690075684",
            "name": "Laktosfri MatlagningsgrГ¤dde 15%",
            "producer": "ICA",
            "wt_vol_pce": "2,5 dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9429,
            "ean_plu": "7318690075707",
            "name": "Laktosfri MellanmjГ¶lkdryck 1,5%",
            "producer": "ICA",
            "wt_vol_pce": "1 l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8685,
            "ean_plu": "7318690075691",
            "name": "Laktosfri MjГ¶lkdryck 3%",
            "producer": "ICA",
            "wt_vol_pce": "1 l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 1992,
            "ean_plu": "7622210166692",
            "name": "Laktosfri Orginal",
            "producer": "Philadelphia",
            "wt_vol_pce": "175 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 10404,
            "ean_plu": "7310865079978",
            "name": "laktosfri Samoa 2%",
            "producer": "YoggiВ®",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8664,
            "ean_plu": "7318690102397",
            "name": "Laktosfri VispgrГ¤dde 36%",
            "producer": "ICA",
            "wt_vol_pce": "5 dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8670,
            "ean_plu": "7318690075714",
            "name": "Laktosfri VispgrГ¤dde 36%",
            "producer": "ICA",
            "wt_vol_pce": "2,5 dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8661,
            "ean_plu": "6408432061042",
            "name": "Laktosfritt SmГ¶r",
            "producer": "Valio Eila",
            "wt_vol_pce": "200 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 36041,
            "ean_plu": "7318690145813",
            "name": "Lammkorv",
            "producer": "ICA",
            "wt_vol_pce": "180g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 13092,
            "ean_plu": "7310867000109",
            "name": "LantmjГ¶lk Gammeldags 2,9-3,1%",
            "producer": "Г…sens",
            "wt_vol_pce": "2 l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 13091,
            "ean_plu": "7310867001021",
            "name": "LantmjГ¶lk Original 1,7-1,9%",
            "producer": "Г…sens",
            "wt_vol_pce": "2 l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 7378,
            "ean_plu": "3425703603858",
            "name": "Lantpate",
            "producer": "Tante Juliette",
            "wt_vol_pce": "150 g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 896,
            "ean_plu": "7318690088950",
            "name": "Lantskinka ex.rГ¶kt",
            "producer": "ICA",
            "wt_vol_pce": "120g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 10847,
            "ean_plu": "5413848094509",
            "name": "Lasagne",
            "producer": "Bella Riviera",
            "wt_vol_pce": "400 g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 28691,
            "ean_plu": "7318690143338",
            "name": "Lasagne Ricotta & Spenat",
            "producer": "ICA",
            "wt_vol_pce": "400 g",
            "product_group_id": 791,
            "shelf_id": 1414
          },
          {
            "id": 28611,
            "ean_plu": "7318690138938",
            "name": "Lasagneplattor",
            "producer": "ICA I love eco",
            "wt_vol_pce": "200g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 9369,
            "ean_plu": "7310865072771",
            "name": "LГ¤tt Cr Fraiche parmesan vitlГ¶k 14%",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "2 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 35238,
            "ean_plu": "7318690140405",
            "name": "LГ¤tt Creme Fraiche",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 35447,
            "ean_plu": "7318690140412",
            "name": "LГ¤tt Creme Fraiche",
            "producer": "ICA",
            "wt_vol_pce": "5 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 8710,
            "ean_plu": "7310865003812",
            "name": "LГ¤tt CrГЁme Fraiche Tomat & basilika",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 10571,
            "ean_plu": "7310865092441",
            "name": "LГ¤tt CrFr karljohansvamp timjan",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "2 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 8813,
            "ean_plu": "7310865093356",
            "name": "LГ¤tt KungsbГ¤r 0,5%",
            "producer": "YoggiВ®",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8854,
            "ean_plu": "7310860005927",
            "name": "LГ¤tt matfettsblandning 40%",
            "producer": "LГ¤tt & LagomВ®",
            "wt_vol_pce": "400g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8864,
            "ean_plu": "7310390011481",
            "name": "LГ¤tta ask",
            "producer": "LГ¤tta",
            "wt_vol_pce": "600 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8669,
            "ean_plu": "7318690075677",
            "name": "LГ¤ttcr.fr lakt-fri",
            "producer": "ICA",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8692,
            "ean_plu": "7310865003782",
            "name": "LГ¤ttCrГЁme Fraiche Franska Г¶rter 13%",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8711,
            "ean_plu": "7310865003607",
            "name": "LГ¤ttCrГЁme Fraiche Paprika&Chili 13%",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "2 dl",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 9360,
            "ean_plu": "7310865094629",
            "name": "Latte Art EKO 2,6%",
            "producer": "ArlaВ®",
            "wt_vol_pce": "1 l",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 32136,
            "ean_plu": "7318690140139",
            "name": "LГ¤ttfil Naturell 0,5 %",
            "producer": "ICA",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 15991,
            "ean_plu": "7318690137979",
            "name": "LГ¤ttkvarg Kokos",
            "producer": "ICA",
            "wt_vol_pce": "500g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 16067,
            "ean_plu": "7318690137870",
            "name": "LГ¤ttkvarg Natur LF",
            "producer": "ICA",
            "wt_vol_pce": "500g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 15989,
            "ean_plu": "7318690137849",
            "name": "LГ¤ttkvarg Naturell",
            "producer": "ICA",
            "wt_vol_pce": "500g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8837,
            "ean_plu": "7318690032120",
            "name": "LГ¤ttmargarin 39%",
            "producer": "ICA Handlarna",
            "wt_vol_pce": "600g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8860,
            "ean_plu": "7310390011702",
            "name": "LГ¤ttmargarin, 35%",
            "producer": "Becel pro.active",
            "wt_vol_pce": "250g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8823,
            "ean_plu": "7310394000054",
            "name": "LГ¤ttmatfett, 38%",
            "producer": "BECEL",
            "wt_vol_pce": "600 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8771,
            "ean_plu": "7310865057792",
            "name": "LГ¤ttmjГ¶lk 0,5% Eko TT",
            "producer": "Arla KoВ® Ekologisk",
            "wt_vol_pce": "3 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 32131,
            "ean_plu": "7318690142300",
            "name": "LГ¤ttyoghurt BlГҐbГ¤r & Vanilj",
            "producer": "ICA",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 32133,
            "ean_plu": "7318690142287",
            "name": "LГ¤ttyoghurt Jordgubb",
            "producer": "ICA",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 16241,
            "ean_plu": "7318690138075",
            "name": "LГ¤ttyoghurt Nature",
            "producer": "ICA",
            "wt_vol_pce": "1000g",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 9431,
            "ean_plu": "7023531801017",
            "name": "Laxburgare",
            "producer": "Lofoten",
            "wt_vol_pce": "250 g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 2170,
            "ean_plu": "7313161414481",
            "name": "Leverkorv Original",
            "producer": "GOTTFRIDS",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 15856,
            "ean_plu": "7310941801400",
            "name": "Leverpastej Ekologisk ",
            "producer": "PASTEJKГ–KET",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 2274,
            "ean_plu": "7300201884007",
            "name": "LEVERPASTEJ UGNSB EKOLOGISK SE",
            "producer": "Scan",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 2278,
            "ean_plu": "7300206303008",
            "name": "LEVERPASTEJ UGNSBAKAD",
            "producer": "Scan",
            "wt_vol_pce": "200g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 14349,
            "ean_plu": "7318690133025",
            "name": "LF MellanmjГ¶l 1,5%",
            "producer": "ICA",
            "wt_vol_pce": "1,5L",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 9449,
            "ean_plu": "6408432102486",
            "name": "LF Yog Tb Mang/Van",
            "producer": "Valio Eila",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8645,
            "ean_plu": "6408432102523",
            "name": "Lfri Vaniljyog Org",
            "producer": "Valio",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 1976,
            "ean_plu": "7310700676492",
            "name": "Light GrГ¤slГ¶k",
            "producer": "Philadelphia",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 1982,
            "ean_plu": "5700419083360",
            "name": "Light Original fГ¤rskost",
            "producer": "Philadelphia",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 1978,
            "ean_plu": "7310700676485",
            "name": "Light VitlГ¶k & Г–rter",
            "producer": "Philadelphia",
            "wt_vol_pce": "200g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 8503,
            "ean_plu": "7310100566898",
            "name": "LinfrГ¶knГ¤cke frГҐn Dalarna",
            "producer": "Semper",
            "wt_vol_pce": "230g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 20399,
            "ean_plu": "7318690100461",
            "name": "Lingondryck",
            "producer": "ICA",
            "wt_vol_pce": "1 liter",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 14527,
            "ean_plu": "7310861008934",
            "name": "Lingondryck konc",
            "producer": "Jokk",
            "wt_vol_pce": "250 ml",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 20410,
            "ean_plu": "7392128900021",
            "name": "Lingondryck konc KRAV",
            "producer": "FinnerГ¶dja",
            "wt_vol_pce": "200 ml",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 10558,
            "ean_plu": "7310865086259",
            "name": "Ljus ChokladmjГ¶lk 1,5%",
            "producer": "Cocio",
            "wt_vol_pce": "1 liter",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 18982,
            "ean_plu": "7331787001113",
            "name": "Ljust gl. och la. fritt basmjГ¶l",
            "producer": "MixWell",
            "wt_vol_pce": "500 g",
            "product_group_id": 763,
            "shelf_id": 1421
          },
          {
            "id": 901,
            "ean_plu": "7318690104537",
            "name": "Lomo",
            "producer": "ICA",
            "wt_vol_pce": "100g",
            "product_group_id": 757,
            "shelf_id": 1420
          },
          {
            "id": 8815,
            "ean_plu": "7310865070456",
            "name": "madagaskar vanilj 2%",
            "producer": "YoggiВ®",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 22391,
            "ean_plu": "4005500031550",
            "name": "MajsvГ¤lling DrickfГ¤rdig 6 mГҐn",
            "producer": "NESTLГ‰",
            "wt_vol_pce": "200 ml",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18651,
            "ean_plu": "7310100697578",
            "name": "MajsvГ¤lling, 6mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "5l",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 39070,
            "ean_plu": "4062300004221",
            "name": "MakaronigratГ¤ng m tomat & skinka 6m",
            "producer": "Hipp",
            "wt_vol_pce": "190 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 14138,
            "ean_plu": "2319136300000",
            "name": "Makrill VarmrГ¶kt FilГ© JГ¤ger KFP",
            "producer": "ICA",
            "wt_vol_pce": "190-260g",
            "product_group_id": 757,
            "shelf_id": 3476
          },
          {
            "id": 38934,
            "ean_plu": "7318690135050",
            "name": "MГҐltidsdr Citron",
            "producer": "ICA",
            "wt_vol_pce": "2dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 38939,
            "ean_plu": "7318690135043",
            "name": "MГҐltidsdr Hall/BjГ¶",
            "producer": "ICA",
            "wt_vol_pce": "2dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 38937,
            "ean_plu": "7318690135036",
            "name": "MГҐltidsdryck Г„pple",
            "producer": "ICA",
            "wt_vol_pce": "2dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 38938,
            "ean_plu": "7318690135029",
            "name": "MГҐltidsdryck PГ¤ron",
            "producer": "ICA",
            "wt_vol_pce": "2dl",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 2292,
            "ean_plu": "7300208283001",
            "name": "MAMMAS KГ–TTBULLAR",
            "producer": "Scan",
            "wt_vol_pce": "350g",
            "product_group_id": 757,
            "shelf_id": 1417
          },
          {
            "id": 12937,
            "ean_plu": "8437002679163",
            "name": "Manchego 35,8%",
            "producer": "Gran Valle de Montec",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 10436,
            "ean_plu": "7310130003851",
            "name": "Mandeldryck",
            "producer": "GoGreen",
            "wt_vol_pce": "1 L",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 10441,
            "ean_plu": "5411188110835",
            "name": "Mandeldryck",
            "producer": "Alpro",
            "wt_vol_pce": "1l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 13407,
            "ean_plu": "7318690131977",
            "name": "Mandeldryck Nature",
            "producer": "ICA",
            "wt_vol_pce": "1L",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 30257,
            "ean_plu": "5411188122661",
            "name": "Mandeldryck orostad, osГ¶tad",
            "producer": "Alpro",
            "wt_vol_pce": "1l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 10440,
            "ean_plu": "5411188112709",
            "name": "Mandeldryck osГ¶tad",
            "producer": "Alpro",
            "wt_vol_pce": "1l",
            "product_group_id": 766,
            "shelf_id": 1425
          },
          {
            "id": 8965,
            "ean_plu": "7310867578394",
            "name": "Mango",
            "producer": "Proviva",
            "wt_vol_pce": "1 L",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 21589,
            "ean_plu": "5060107336841",
            "name": "Mango PГ¤ron + Papaya purГ©",
            "producer": "Ella's Kitchen",
            "wt_vol_pce": "120 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 39072,
            "ean_plu": "4062300228979",
            "name": "Mango, Banan, Yoghurt & Vanilj 8m",
            "producer": "Hipp",
            "wt_vol_pce": "160 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 49145,
            "ean_plu": "7318690157021",
            "name": "Mango/curry sГҐs",
            "producer": "ICA",
            "wt_vol_pce": "200g",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 8994,
            "ean_plu": "7310865085498",
            "name": "Mango/Passion juice",
            "producer": "God MorgonВ®",
            "wt_vol_pce": "1 liter",
            "product_group_id": 765,
            "shelf_id": 1424
          },
          {
            "id": 2211,
            "ean_plu": "7313161404987",
            "name": "Mangoraja kall sГҐs",
            "producer": "RYDBERGS",
            "wt_vol_pce": "250ml",
            "product_group_id": 758,
            "shelf_id": 1416
          },
          {
            "id": 8730,
            "ean_plu": "7310310010761",
            "name": "Margarin",
            "producer": "Milda",
            "wt_vol_pce": "1 kg",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8732,
            "ean_plu": "7310310010716",
            "name": "Margarin",
            "producer": "Milda",
            "wt_vol_pce": "500 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 43260,
            "ean_plu": "7392555400248",
            "name": "Marinerade vitlГ¶ksklyftor",
            "producer": "Ridderheims",
            "wt_vol_pce": "160g",
            "product_group_id": 759,
            "shelf_id": 1420
          },
          {
            "id": 329,
            "ean_plu": "5740200003016",
            "name": "Marquis 42%",
            "producer": "CastelloВ®",
            "wt_vol_pce": "150 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 2485,
            "ean_plu": "7350027791867",
            "name": "Mascarpone",
            "producer": "Zeta",
            "wt_vol_pce": "250 g",
            "product_group_id": 760,
            "shelf_id": 1415
          },
          {
            "id": 9658,
            "ean_plu": "7318690125792",
            "name": "Mat & Bak mjГ¶lkfritt margarin",
            "producer": "ICA",
            "wt_vol_pce": "500 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8703,
            "ean_plu": "7318690071723",
            "name": "Mat&Bak margarin",
            "producer": "ICA",
            "wt_vol_pce": "1000 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 9484,
            "ean_plu": "7318690071716",
            "name": "Mat&bak margarine",
            "producer": "ICA",
            "wt_vol_pce": "500 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8663,
            "ean_plu": "8712566484584",
            "name": "Matfett mjГ¶lkfri",
            "producer": "Flora",
            "wt_vol_pce": "400 g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8827,
            "ean_plu": "8712100621291",
            "name": "Matfettsblandning",
            "producer": "FLORA",
            "wt_vol_pce": "400 gr",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 7059,
            "ean_plu": "7311360102406",
            "name": "Matjessill i bit",
            "producer": "KlГ¤desholmen",
            "wt_vol_pce": "200 g",
            "product_group_id": 757,
            "shelf_id": 1416
          },
          {
            "id": 35383,
            "ean_plu": "5411188115410",
            "name": "Matlagningsgr.Soja",
            "producer": "Alpro",
            "wt_vol_pce": "1l",
            "product_group_id": 759,
            "shelf_id": 1425
          },
          {
            "id": 10591,
            "ean_plu": "7318690130420",
            "name": "MatlagningsgrГ¤ 15%",
            "producer": "ICA",
            "wt_vol_pce": "500ml",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 16065,
            "ean_plu": "7318690140184",
            "name": "MatlagningsgrГ¤dde 15%",
            "producer": "ICA",
            "wt_vol_pce": "2.5 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8741,
            "ean_plu": "7310865066732",
            "name": "MatlagningsgrГ¤dde 15%",
            "producer": "KeldaВ®",
            "wt_vol_pce": "250 ml",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 16251,
            "ean_plu": "5411188121374",
            "name": "MATLAGNINGSGRГ„DDE SOJA",
            "producer": "Alpro",
            "wt_vol_pce": "250ml",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9380,
            "ean_plu": "7310865004482",
            "name": "matyoghurt 8%",
            "producer": "Arla KГ¶ketВ®",
            "wt_vol_pce": "2 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 9576,
            "ean_plu": "7310867541503",
            "name": "MГҐVГ¤l Yoghurtkvarg Jordg Lime",
            "producer": "SkГҐnemejerier",
            "wt_vol_pce": "500 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 9577,
            "ean_plu": "7310867541510",
            "name": "MГҐVГ¤l Yoghurtkvarg Tahiti Vanilj",
            "producer": "SkГҐnemejerier",
            "wt_vol_pce": "500 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8835,
            "ean_plu": "8712100807602",
            "name": "med SmГ¶r",
            "producer": "Flora",
            "wt_vol_pce": "600g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 18673,
            "ean_plu": "4062300212169",
            "name": "MedelhavsgratГ¤ng 8m",
            "producer": "Hipp",
            "wt_vol_pce": "190 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 8820,
            "ean_plu": "7310860005804",
            "name": "Mellan",
            "producer": "BregottВ®",
            "wt_vol_pce": "600g",
            "product_group_id": 765,
            "shelf_id": 1423
          },
          {
            "id": 8798,
            "ean_plu": "7310865087980",
            "name": "Mellanfil 1,5% - GT",
            "producer": "Arla KoВ®",
            "wt_vol_pce": "1000 g",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 16066,
            "ean_plu": "7318690140191",
            "name": "MellangrГ¤dde 27%",
            "producer": "ICA",
            "wt_vol_pce": "2,5dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8759,
            "ean_plu": "5760466878470",
            "name": "MellangrГ¤dde 27%",
            "producer": "Kelda",
            "wt_vol_pce": "250 ml",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 8921,
            "ean_plu": "7310865074355",
            "name": "MellanmГҐl Cashew/an/ap/papaya",
            "producer": "KESOВ®",
            "wt_vol_pce": "150 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8920,
            "ean_plu": "7310865074362",
            "name": "MellanmГҐl Hassel/blГҐb/tranbГ¤r",
            "producer": "KESOВ®",
            "wt_vol_pce": "150 g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8773,
            "ean_plu": "7310865058058",
            "name": "MellanmjГ¶lk 1,5% Eko TT",
            "producer": "Arla KoВ® Ekologisk",
            "wt_vol_pce": "3 dl",
            "product_group_id": 764,
            "shelf_id": 1424
          },
          {
            "id": 22396,
            "ean_plu": "7310100715227",
            "name": "MELLIS-VГ¤ll Hav,ban,jord,hal 6m",
            "producer": "Semper",
            "wt_vol_pce": "120g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 22395,
            "ean_plu": "7310100715142",
            "name": "MELLIS-VГ¤lling 6 m",
            "producer": "Semper",
            "wt_vol_pce": "120g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 571,
            "ean_plu": "7340043070886",
            "name": "MessmГ¶r Original 5%",
            "producer": "FjГ¤llbrynt",
            "wt_vol_pce": "350g",
            "product_group_id": 761,
            "shelf_id": 3478
          },
          {
            "id": 572,
            "ean_plu": "7340043070473",
            "name": "MessmГ¶r Original 5%",
            "producer": "FjГ¤llbrynt",
            "wt_vol_pce": "450 g",
            "product_group_id": 761,
            "shelf_id": 3478
          },
          {
            "id": 5013,
            "ean_plu": "7318690011200",
            "name": "Mezze Luna m fГ¤rsk spen o parme",
            "producer": "ICA Selection",
            "wt_vol_pce": "250 g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 6906,
            "ean_plu": "7318690052555",
            "name": "Mezze Lune Karljoh",
            "producer": "ICA Selection",
            "wt_vol_pce": "250g",
            "product_group_id": 791,
            "shelf_id": 1417
          },
          {
            "id": 10464,
            "ean_plu": "5411188110743",
            "name": "MIld & Creamy BlГҐbГ¤r",
            "producer": "Alpro",
            "wt_vol_pce": "750g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8627,
            "ean_plu": "5411188110675",
            "name": "Mild & Creamy Naturell",
            "producer": "Alpro",
            "wt_vol_pce": "750g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 8626,
            "ean_plu": "5411188110712",
            "name": "Mild & Creamy Vanilj",
            "producer": "Alpro",
            "wt_vol_pce": "750g",
            "product_group_id": 764,
            "shelf_id": 1423
          },
          {
            "id": 21501,
            "ean_plu": "7613035689473",
            "name": "Mild FullkornsgrГ¶t Naturell 8M",
            "producer": "NESTLГ‰",
            "wt_vol_pce": "16 port",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 39112,
            "ean_plu": "4062300172203",
            "name": "Mild FullkornsvГ¤lling 8m",
            "producer": "Hipp",
            "wt_vol_pce": "608 g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 9403,
            "ean_plu": "7310865095053",
            "name": "Mild Greki.yo pass",
            "producer": "Arla Ko",
            "wt_vol_pce": "1000g",
            "product_group_id": 757,
            "shelf_id": 1424
          },
          {
            "id": 21529,
            "ean_plu": "7312170029136",
            "name": "Mild HavregrГ¶t 4mГҐn",
            "producer": "Semper",
            "wt_vol_pce": "480g",
            "product_group_id": 763,
            "shelf_id": 1422
          },
          {
            "id": 18584,
            "ean_plu": "4062300204485",
            "name": "Mild HavregrГ¶t 6m",
            "producer": "Hipp",
            "wt_vol_pce": "270 g",
            "product_group_id": 763,
            "shelf_id": 1422
          }
    ],
    totalProductCount: 700,
    isFetchingProducts: true
}

const productReducer = (state = InitialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetchingProducts: action.isFetchingProducts }
        }
        case CHANGE_SHELF: {
          
          return {...state,
            products: updateObjectInArray(state.products, action.productId, "id", {shelf_id:action.shelfId})}
        }
        case CHANGE_GROUP: {
          
          return {...state,
            products: updateObjectInArray(state.products, action.productId, "id", {product_group_id:action.productGroupId})}
        }

        default:
            return state
    }
}

//toggle Is Fetching Products Action Creator
export const toggleIsFetching = (isFetchingProducts) => {
    return ({ type: TOGGLE_IS_FETCHING, isFetchingProducts })
}

export const changeShelf = (productId, shelfId) => {
  return ({type: CHANGE_SHELF, productId, shelfId})
}

export const changeProductGroup = (productId, productGroupId) => {
  return ({type: CHANGE_GROUP, productId, productGroupId})
}
// // Replace ./data.json with your JSON feed
// fetch('./data.json').then(response => {
//     return response.json();
//   }).then(data => {
//     // Work with JSON data here
//     console.log(data);
//   }).catch(err => {
//     // Do something for an error here
//   });


export default productReducer