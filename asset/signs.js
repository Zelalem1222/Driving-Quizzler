const signs = [
        {
            id: 1,
            src: require('../image/curves.png'),
            text: 'አደገኛ ጠምዛዛ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 2,
            src: require('../image/u-turn.png'),
            text: 'ቀስቱ ወደሚያመለክተው በስተግራ ወደ ኋላ ዞሮ መመለስ ክልክል መሆኑን'
        },
        {
            id: 3,
            src: require('../image/curve-right.png'),
            text: 'የምታሽከረክርበት መንገድ ወደ ቀኝ ስለሚታጠፍ የቀኝ ረድፍህን ይዘህ በጥንቃቄ እለፍ'
        },
        {
            id: 4,
            src: require('../image/curve.png'),
            text: 'የምታሽከረክርበት መንገድ ወደ ግራ ስለሚታጠፍ የግራ ረድፍህን ይዘህ በጥንቃቄ እለፍ'
        },
        {
            id: 5,
            src: require('../image/curves-zigzag.png'),
            text: 'አደገኛ ጠምዛዛ መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 6,
            src: require('../image/descending.png'),
            text: 'አደገኛ ቁልቁለት ስለሚያጋጥምህ ከባድ ማርሽ በማስገባት ተጠንቅቀህ እለፍ'
        },
        {
            id: 7,
            src: require('../image/falling-rocks.png'),
            text: 'ናዳ ያለበት መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 8,
            src: require('../image/go-straight-or-right.png'),
            text: 'ፊት ለፊትና ወደ ግራ የሚያስኬድ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር'
        },
        {
            id: 9,
            src: require('../image/hump.png'),
            text: 'የተበላሸ መንገድ ስለሚያጋጥምህ ፍጥነትህ በመቀነስ ተጠንቅቀህ አሽከርክር'
        },
        {
            id: 10,
            src: require('../image/narrow-bridge.png'),
            text: 'በመንገዱ ላይ ጠባብ ድልድይ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር'
        },
        {
            id: 11,
            src: require('../image/narrow.png'),
            text: 'መንገዱ እየጠበበ የሚሄድ ስለሆነ ተጠንቅቀህ እለፍ'
        },
        {
            id: 12,
            src: require('../image/no-bicycle.png'),
            text: 'ብስክሌት እያሽከረከሩ ማለፍ ክልክ ነው'
        },
        {
            id: 13,
            src: require('../image/no-car.png'),
            text: 'መኪና እያሽከረከሩ ማለፍ ክልክ ነው'
        },
        {
            id: 14,
            src: require('../image/no-motorcycles.png'),
            text: 'ሞተር ብስክሌት እያሽከረከሩ ማለፍ የተከለከለ ነው'
        },
        {
            id: 15,
            src: require('../image/pedestrian.png'),
            text: 'እግረኞች ማቋረጫ አካባቢ ስለሆነ ተጠንቅቀህ እለፍ'
        },
        {
            id: 16,
            src: require('../image/priority.png'),
            text: 'ፊት ለፊትና ወደ ግራ የሚያስኬድ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር'
        },
        {
            id: 17,
            src: require('../image/railway.png'),
            text: 'መዚጊያ ያለው የባቡር ሐዲድ ማቋረጫ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ'
        },
        {
            id: 18,
            src: require('../image/road-closed.png'),
            text: 'ማናቸውም አይነት ተሽከርካሪና በእጅ የሚገፉትም ጭምር እንዳያልፍበት የተከተከለ'
        },
        {
            id: 19,
            src: require('../image/road-work.png'),
            text: 'መንገዱን የሚጠግኑ ሠራተኞች ስለአሉ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 20,
            src: require('../image/roundabout.png'),
            text: 'ወደ ፊት ክብ አደባባይ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ'
        },
        {
            id: 21,
            src: require('../image/slippery-sign.png'),
            text: ' የሚያሸራትት መንገድ ስለሚያጋጥምህ ፍጥነትህን በመቀነስ ተጠንቅቀህ አሽከርክር'
        },
        {
            id: 22,
            src: require('../image/two-way-street.png'),
            text: 'በአንድ አቅጣጫ ብቻ ላማሽከርከር በተፈቀደበት መንገድ ላይ ለጊዜዉ በሁለቱም አቅጣጫ በኩል ተሽከርካሪዎች እንዲተላለፉበት ስለተፈቀደ ተጠንቅቀህ እለፍ'
        },
        {
            id: 23,
            src: require('../image/wild-animals.png'),
            text: 'መንገዱን የሚያቋርጡ የዱር እንስሳት ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር'
        },
        {
            id: 24,
            src: require('../image/icon-11.png'),
            text: 'የአካል ጉዳተኞች ስለአሉ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 25,
            src: require('../image/icon-4.png'),
            text: 'ወደ ፊት የህፃናት መጫዎቻ ቦታ ስለ አለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 26,
            src: require('../image/icon-6.png'),
            text: 'ወደ ፊት የትራፊክ መጨናነቅ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 27,
            src: require('../image/icon-34.png'),
            text: 'ሁለት ነጠላ መንገድ ወደ አንድ ነጠላ መንገድ የሚለወጥ ስለሆነ ፍጥነትህን ቀንሰህ ተጠንቅቀህ እለፍ'
        },
        {
            id: 28,
            src: require('../image/icon-33.png'),
            text: 'ወደ ፊት የእርሻ መሳሪያዎች /መንገዱን ስለሚያቋርጡ/ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 29,
            src: require('../image/icon-17.png'),
            text: 'በመንገድ ላይ የሚፈናጠሩ ድንጋይ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 30,
            src: require('../image/icon-20.png'),
            text: 'ተማሪዎች የሚበዙበት አካባቢ ስለሆነ ተጠንቅቀህ እለፍ'
        },
        {
            id: 31,
            src: require('../image/icon-32.png'),
            text: 'መዝጊያ የሌለዉ የባቡር ሐዲድ ማቋረጫ ስለሚያጋጥምህ ቆመህ ባቡር አለመኖሩን አረጋግጠህ በጥንቃቄ እለፍ'
        },
        {
            id: 32,
            src: require('../image/icon-18.png'),
            text: 'ወደ ግራ የሚታጠፍ ኩርባ ስላለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 33,
            src: require('../image/icon-26.png'),
            text: 'ጠቅላላ ስፋቱ በሜትር በምልክቱ ላይ ከተመለከተው በላይ ስለሆነ ተሽከርካሪ ማለፍ የተከለከለ ነው'
        },
        {
            id: 34,
            src: require('../image/icon-23.png'),
            text: 'መኪና ለማቆም የሚከለክለው ምልክት ትዕዛዝ መጨረሻ መሆኑን የሚገልጽ ምልክት'
        },
        {
            id: 35,
            src: require('../image/icon-22.png'),
            text: 'ማንኛውም አይነት የማስጠንቀቂያና የጡሩንባ ድምጽ ማሰማት የተከለከለ ነው'
        },
        {
            id: 36,
            src: require('../image/icon-21.png'),
            text: 'ፊት ለፊትና ወደ ግራ የሚያስኬድ መገናኛ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ አሽከርክር'
        },
        {
            id: 37,
            src: require('../image/icon-19.png'),
            text: 'ወደ ፊት የትራፊክ መብራት ስላለ ተጠንቅቀህ አሽከርክር'
        },
        {
            id: 38,
            src: require('../image/icon-16.png'),
            text: 'የአስፋልት መንገድ መጨረሻ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 39,
            src: require('../image/icon-15.png'),
            text: 'የአስፋልት መንገድ መጨረሻ ስለአለው ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 40,
            src: require('../image/icon-12.png'),
            text: 'ከፊት ለፊት ለሚመጣ ተሽከርካሪ ቅድሚያ ሣይሰጡ ማሽከርከር ክልክል ነው'
        },
        {
            id: 41,
            src: require('../image/icon-10.png'),
            text: 'በመንገዱ ላይ ባለሁለት የባቡር ሐዲድ መስመር ስለአለ ተጠንቅቀህ እለፍ'
        },
        {
            id: 42,
            src: require('../image/የተበላሸ-ተሽከርካሪ.png'),
            text: 'የተበላሸ ተሽከርካሪ እየጎተቱ መጓዝ የተከለከለበት መንገድ መሆኑን'
        },
        {
            id: 43,
            src: require('../image/icon-8.png'),
            text: 'አደገኛ ፍንዳታ የሚያስከትል ጭነት ለጫነ ተሽከርካሪ የተከለከለ መንገድ መሆኑን'
        },
        {
            id: 44,
            src: require('../image/icon-7.png'),
            text: 'ለሁለት ተከፍሎ የነበረው መንገድ ማብቂያ ስለሆነ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 45,
            src: require('../image/icon-35.png'),
            text: 'ከፊት ለፊትህ ትራፊክን የሚያስተናግድ ትራፊክ ፖሊስ ስለ አለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 46,
            src: require('../image/icon-36.png'),
            text: 'መንገድ ቀያሽ ስለአለ ፍጥነትህን በመቀነስ ተጠንቅቀህ እለፍ'
        },
        {
            id: 47,
            src: require('../image/crossroads-2.png'),
            text: 'መገናኛ መንገድ ወደ ግራና ወደ ቀኝ የሚታጠፍ ፊት ለፊት የሚያስኬድ መንገድ የሌላ መሆኑን ተረድተህ ፍጥነትህን ቀንሰህ ተጠንቅቀህ እለፍ'
        },
        {
            id: 48,
            src: require('../image/intersection.png'),
            text: 'ባለ 4 አቅጣጫ መንገድ ስለሚያጋጥምህ ቆመህ ለተሽከርካሪዎችና ለተላላፊዎች ቅድሚያ በመስጠት ተጠንቅቀህ እለፍ'
        },
        {
            id: 49,
            src: require('../image/warning.png'),
            text: 'በመንገድ ላይ አስጊ ወይም አደገኛ ሁኔታ ስለአለ በጥንቃቄ አሽከርክር'
        },
        {
            id: 50,
            src: require('../image/icon-37.png'),
            text: 'መጀመሪያ ወደ ቀኝ ቀጥሎ ወደ ግራ የሚታጠፍ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ'
        },
        {
            id: 51,
            src: require('../image/icon-38.png'),
            text: 'መጀመሪያ ወደ ግራ ቀጥሎ ወደ ቀኝ የሚታጠፍ መንገድ ስለሚያጋጥምህ ተጠንቅቀህ እለፍ'
        },
        {
            id: 52,
            src: require('../image/icon-39.png'),
            text: 'ቁም! ይህ ምልክት ባለበት ማንኛውም የሚመጣ ተሽከርካሪ መስቀለኛ ወይም መገናኛ መንገድ ከመግባቱ በፊት ለተላላፊ ቅድሚያ ሳይሰጡ ማለፍ ክልክል ነዉ'
        },
        {
            id: 53,
            src: require('../image/icon-40.png'),
            text: 'የከተማ ክልል ምግቢያ ስለሆነ የከተማ ህግና ደንብ ሳያከብሩ ማሽከርከር የተከለከለ ነው'
        },
        {
            id: 54,
            src: require('../image/icon-41.png'),
            text: 'የከተማ ክልል የፍጥነት ወሰን መጨረሻ'
        },
        {
            id: 55,
            src: require('../image/icon-42.png'),
            text: 'ለረጅምም ሆነ ለአጭር ጊዚ በፍጹም መቆም የተከለከለ ነው'
        },
        {
            id: 56,
            src: require('../image/icon-b9.png'),
            text: 'የአነስተኛ ፍጥነት መጨረሻ'
        },
        {
            id: 57,
            src: require('../image/icon-b13.png'),
            text: 'የደሴቱን ቀኝ በመያዝ አሽከርከር'
        },
        {
            id: 58,
            src: require('../image/icon-b24.png'),
            text: 'የጭነት ተሽከርካሪዎች እንዲተላለፍበት የተፈቀደ መንገድ ነው'
        },
        {
            id: 59,
            src: require('../image/icon-b25.png'),
            text: 'ብስክሌት ብቻ ለማሽከርክር የተፈቀደ መንገድ'
        },
        {
            id: 60,
            src: require('../image/icon-b30.png'),
            text: 'የጥገና አገልግሎት መስጫ መኖሩን'
        },
        {
            id: 61,
            src: require('../image/icon-b31.png'),
            text: 'ይህ ምልክት ባለበት አካባቢ ለተሽከርካሪዎች ማቆሚያ የተዘጋጀ ወይም የተወሰነ ሥፍራ ስላለ መኪናህን ቀስቱ ወደሚያመለክተው በኩል በሚገኘው የማቆሚያ ክልል ውሰጥ ብቻ ማቆም አለብህ'
        },
        {
            id: 62,
            src: require('../image/icon-b35.png'),
            text: 'ቀስቱ እንደሚያመለክተው በሁለቱም በኩል አሽከርክር'
        },
        {
            id: 63,
            src: require('../image/icon-b29.png'),
            text: 'የቀስት ምልክቱ እንደሚያመለክተው በስተቀኝ በኩል ብቻ እለፍ'
        },
        {
            id: 64,
            src: require('../image/icon-b33.png'),
            text: 'የቀስት ምልክት እንደሚያመለከተው በስተግራ በኩል ብቻ እለፍ'
        },
        {
            id: 65,
            src: require('../image/icon-b28.png'),
            text: 'የቀስት ምልክቱ እንደሚያመለክተው በስተግራ በኩል ብቻ እለፍ'
        },
        {
            id: 66,
            src: require('../image/icon-b34.png'),
            text: 'ይህ ምልክት ባለበት ቦታ ላይ ወደ ትራፊክ ክብ ወይም ደሴት አስቀደሞ ለገባ ተሽከርካሪ ቅድሚያ ስጥ'
        },
        {
            id: 67,
            src: require('../image/icon-b32.png'),
            text: 'ለአንድ ረድፍ ከተቀመጠው አነስተኛ ፍጥነት በላይ ማሽከርከር የሚያስገድድ'
        },
        {
            id: 68,
            src: require('../image/icon-y27.png'),
            text: 'ቅድሚያ ያለው መንገድ'
        },
        {
            id: 69,
            src: require('../image/icon-3.png'),
            text: 'ቅድሚያ ያለዉ መንገድ የሚለው ምልክት ትዕዛዝ መጨረሻ'
        },
        
        
]

export default signs