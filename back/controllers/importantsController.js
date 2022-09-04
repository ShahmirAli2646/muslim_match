const User = require("../model/user");
const Profile = require("../model/profile")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const importants = require("../model/importants");
require("dotenv").config();

module.exports={
    submitImportants:  async (req, res) => {
        try {
            console.log('response' , req)
            const {   phone,
                purpose,
                gender,
                birthdate,
                followingforspouse,
                WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted,
                TheIslamicteachingssectthatyoufollow,
                Whichscholarsdoyoutakeknowledgefrom,
                AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails,
                Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid,
                DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk,
                DoyouwanttomakehijraonedayinshaAllah,
                DoyouvoluntaryFast,
                CanyoureadandorunderstandanyArabic,
                DoyoureadQuran,
                MemorizedanyQuranifsohowmuch,
                Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc,
                Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc,
                Whichbeardstylemeetyourpreferences,
                Doyouwantawifewhowearsmakeupinfrontofnonmahrams,
                DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply,
                Doyoufreemixwithnonmahramfemales,
                Doyoufreemixwithnonmahrammen,
                Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc,
                Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc,
                DoyouwatchTV,
                DoyoulistentoMusic,
                Doyouwearmakeupinfrontofnonmahrams,
                youngestageyouarelookingfor,
                oldestageyouarelookingfor,
                Whattypeofhijabmatcheswithwhatyourelookingforinawife,
                WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab,
                Whichmaritalstatusmatchwithwhatyouarelookingformen,
                Whichmaritalstatusmatchwithwhatyouarelookingforwomen,
                Wouldyouconsidermarryingsomeonewhoisalreadymarried,
                Wouldyoumarrysomeonewhoalreadyhaschildren,
                Wouldyoumarrysomeonewhohadmentalhealthproblems,
                Wouldyoumarrysomeonewhohadphysicaldisabilities,
                Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship,
                Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner,
                WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife,
                Whichcountryorcountriesdoyoulivein,
                Whichcitytownvillagedoyoulivein,
                Whichcountryorcountriesdoyouholdcitizenship,
                Whatisyourmaritalstatusmen,
                Whatisyourmaritalstatuswomen,
                Doyouprayallofthe5dailyprayers,
                Doyoucoveryourhairfromnonmahrams,
                Whatareyourpreferredlivingarrangementsaftermarriage,
                Doyouhaveanyphysicaldisabilities,
                Doyouhaveanymentalhealthproblems,
                Doyouhaveanychildren,
                Doyouwantchildrenaftermarriage,
                Areyouwillingtorelocateaftermarriage,
                DidyourevertconverttoIslam,
                Whatistheshortestheightyoufindcompatible,
                Whatsthetallestheightyoufindcompatible,
                WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches,
                Smallestdresssizethatmeetsyourrequirementsforawife,
                Largestdresssizethatmeetsyourrequirementsforawife,
                Whichbuildmatchesyourpreference,
                Whatisyourheight,
                Yourdresssize,
                Yourwaistsizeininches,
                Whichbuildbestdescribesyou,
                Whichstyleofbearddoyouhave,
                Whatisyourethnicity,
                Areyourfamilyreligious,
                WhatsectfollowingofIslamareyourfamilypractising,
                Howisyourrelationshipwithyourfamily,
                WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah,
                DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends,
                Areyourfriendsreligious,
                WhatsectfollowingofIslamdoyourfriendspractice,
                Howmightyourfriendsdescribeyourpersonality,
                Wouldyouwantyourfuturehusbandtofreemixwithyourfriends,
                Wouldyouwantyourfuturewifetofreemixwithyourfriends,
                Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply,
                Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply,
                Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted,
                Whatisyourprofession,
                Whatisyourlevelofeducation,
                WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole,
                Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor,
                suggestions,
                newsletter  , user_id} = req.body;
                const profile = await importants.findOneAndUpdate({user:user_id},
                    {phone:phone,
                        purpose:purpose,
                        gender:gender,
                        birthdate:birthdate,
                        followingforspouse:followingforspouse,
                        WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted:WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted,
                        TheIslamicteachingssectthatyoufollow:TheIslamicteachingssectthatyoufollow,
                        Whichscholarsdoyoutakeknowledgefrom:Whichscholarsdoyoutakeknowledgefrom,
                        AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails:AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails,
                        Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid:Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid,
                        DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk:DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk,
                        DoyouwanttomakehijraonedayinshaAllah:DoyouwanttomakehijraonedayinshaAllah,
                        DoyouvoluntaryFast:DoyouvoluntaryFast,
                        CanyoureadandorunderstandanyArabic:CanyoureadandorunderstandanyArabic,
                        DoyoureadQuran:DoyoureadQuran,
                        MemorizedanyQuranifsohowmuch:MemorizedanyQuranifsohowmuch,
                        Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc:Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc,
                        Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc:Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc,
                        Whichbeardstylemeetyourpreferences:Whichbeardstylemeetyourpreferences,
                        Doyouwantawifewhowearsmakeupinfrontofnonmahrams:Doyouwantawifewhowearsmakeupinfrontofnonmahrams,
                        DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply:DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply,
                        Doyoufreemixwithnonmahramfemales:Doyoufreemixwithnonmahramfemales,
                        Doyoufreemixwithnonmahrammen:Doyoufreemixwithnonmahrammen,
                        Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc:Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc,
                        Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc:Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc,
                        DoyouwatchTV:DoyouwatchTV,
                        DoyoulistentoMusic:DoyoulistentoMusic,
                        Doyouwearmakeupinfrontofnonmahrams:Doyouwearmakeupinfrontofnonmahrams,
                        youngestageyouarelookingfor:youngestageyouarelookingfor,
                        oldestageyouarelookingfor:oldestageyouarelookingfor,
                        Whattypeofhijabmatcheswithwhatyourelookingforinawife:Whattypeofhijabmatcheswithwhatyourelookingforinawife,
                        WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab:WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab,
                        Whichmaritalstatusmatchwithwhatyouarelookingformen:Whichmaritalstatusmatchwithwhatyouarelookingformen,
                        Whichmaritalstatusmatchwithwhatyouarelookingforwomen:Whichmaritalstatusmatchwithwhatyouarelookingforwomen,
                        Wouldyouconsidermarryingsomeonewhoisalreadymarried:Wouldyouconsidermarryingsomeonewhoisalreadymarried,
                        Wouldyoumarrysomeonewhoalreadyhaschildren:Wouldyoumarrysomeonewhoalreadyhaschildren,
                        Wouldyoumarrysomeonewhohadmentalhealthproblems:Wouldyoumarrysomeonewhohadmentalhealthproblems,
                        Wouldyoumarrysomeonewhohadphysicaldisabilities:Wouldyoumarrysomeonewhohadphysicaldisabilities,
                        Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship:Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship,
                        Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner:Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner,
                        WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife:WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife,
                        Whichcountryorcountriesdoyoulivein:Whichcountryorcountriesdoyoulivein,
                        Whichcitytownvillagedoyoulivein:Whichcitytownvillagedoyoulivein,
                        Whichcountryorcountriesdoyouholdcitizenship:Whichcountryorcountriesdoyouholdcitizenship,
                        Whatisyourmaritalstatusmen:Whatisyourmaritalstatusmen,
                        Whatisyourmaritalstatuswomen:Whatisyourmaritalstatuswomen,
                        Doyouprayallofthe5dailyprayers:Doyouprayallofthe5dailyprayers,
                        Doyoucoveryourhairfromnonmahrams:Doyoucoveryourhairfromnonmahrams,
                        Whatareyourpreferredlivingarrangementsaftermarriage:Whatareyourpreferredlivingarrangementsaftermarriage,
                        Doyouhaveanyphysicaldisabilities:Doyouhaveanyphysicaldisabilities,
                        Doyouhaveanymentalhealthproblems:Doyouhaveanymentalhealthproblems,
                        Doyouhaveanychildren: Doyouhaveanychildren,
                        Doyouwantchildrenaftermarriage:Doyouwantchildrenaftermarriage,
                        Areyouwillingtorelocateaftermarriage:Areyouwillingtorelocateaftermarriage,
                        DidyourevertconverttoIslam:DidyourevertconverttoIslam,
                        Whatistheshortestheightyoufindcompatible:Whatistheshortestheightyoufindcompatible,
                        Whatsthetallestheightyoufindcompatible:Whatsthetallestheightyoufindcompatible,
                        WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches: WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches,
                        Smallestdresssizethatmeetsyourrequirementsforawife:Smallestdresssizethatmeetsyourrequirementsforawife,
                        Largestdresssizethatmeetsyourrequirementsforawife:Largestdresssizethatmeetsyourrequirementsforawife,
                        Whichbuildmatchesyourpreference:Whichbuildmatchesyourpreference,
                        Whatisyourheight:Whatisyourheight,
                        Yourdresssize:Yourdresssize,
                        Yourwaistsizeininches:Yourwaistsizeininches,
                        Whichbuildbestdescribesyou:Whichbuildbestdescribesyou,
                        Whichstyleofbearddoyouhave:Whichstyleofbearddoyouhave,
                        Whatisyourethnicity:Whatisyourethnicity,
                        Areyourfamilyreligious:Areyourfamilyreligious,
                        WhatsectfollowingofIslamareyourfamilypractising:WhatsectfollowingofIslamareyourfamilypractising,
                        Howisyourrelationshipwithyourfamily:Howisyourrelationshipwithyourfamily,
                        WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah:WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah,
                        DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends:DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends,
                        Areyourfriendsreligious:Areyourfriendsreligious,
                        WhatsectfollowingofIslamdoyourfriendspractice:WhatsectfollowingofIslamdoyourfriendspractice,
                        Howmightyourfriendsdescribeyourpersonality:Howmightyourfriendsdescribeyourpersonality,
                        Wouldyouwantyourfuturehusbandtofreemixwithyourfriends:Wouldyouwantyourfuturehusbandtofreemixwithyourfriends,
                        Wouldyouwantyourfuturewifetofreemixwithyourfriends:Wouldyouwantyourfuturewifetofreemixwithyourfriends,
                        Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply:Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply,
                        Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply:Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply,
                        Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted:Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted,
                        Whatisyourprofession:Whatisyourprofession,
                        Whatisyourlevelofeducation:Whatisyourlevelofeducation,
                        WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole:WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole,
                        Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor:Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor,
                        suggestions:suggestions,
                        newsletter:newsletter  ,
                        user:user_id
                    }, {upsert: true});
                
               
                  res.status(201).json(profile);
        }catch(err){
            console.log(err);
        }
       
      },

      FetchUserImportants :async (req, res) => {
        try{
            const userId = req.params.user;
            const important = await importants.findOne({user:userId},);
            res.status(201).json(important);
        }
        catch(err){
          console.log(err)
        }

    },

}