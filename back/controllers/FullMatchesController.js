const User = require("../model/user");
const Profile = require("../model/profile")
const Match = require("../model/matches")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const equals = require('./equalityhelper')
const _ = require('lodash');
const profile = require("../model/profile");
const Important = require("../model/importants")

module.exports = {
    FullMatches: async (req, res) => {
        const userId = req.params.userId;
        var perPage = 3
        var page = Math.max(0, req.params.page)
        //run matching algorithm
        const profiletomatch = await Profile.findOne({ user: userId })
        const importantToMatch = await Important.findOne({ user: userId })
        //now return profiles that match this profile fully
        const FullMatches = await Profile.find({})
        const AllImportants = await Important.find({})
        let FinalResult = FullMatches.filter(async function (item) {
            var count = 0;
            let result = equals.equals(item.followingforspouse, profiletomatch.followingforspouse)
            if (result === true) {
                count++
            }

            if (item.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted === profiletomatch.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted) {
                count++
            }
            if (item.TheIslamicteachingssectthatyoufollow === profiletomatch.TheIslamicteachingssectthatyoufollow) {
                count++
            }
            if (item.Whichscholarsdoyoutakeknowledgefrom === profiletomatch.Whichscholarsdoyoutakeknowledgefrom) {
                count++
            }
            if (item.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails === profiletomatch.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails)
                count++;
            if (item.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid === profiletomatch.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid)
                count++;
            if (item.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk === profiletomatch.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk)
                count++;
            if (item.DoyouwanttomakehijraonedayinshaAllah === profiletomatch.DoyouwanttomakehijraonedayinshaAllah)
                count++;
            if (item.DoyouvoluntaryFast === profiletomatch.DoyouvoluntaryFast)
                count++;
            if (item.CanyoureadandorunderstandanyArabic === profiletomatch.CanyoureadandorunderstandanyArabic)
                count++;
            if (item.DoyoureadQuran === profiletomatch.DoyoureadQuran)
                count++;
            if (item.MemorizedanyQuranifsohowmuch === profiletomatch.MemorizedanyQuranifsohowmuch) {
                count++;
            }
            let result2 = equals.equals(item.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc, profiletomatch.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc)
            if (result2 === true) {
                count++
            }
            let result3 = equals.equals(item.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc, profiletomatch.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc)
            if (result3 === true) {
                count++
            }
            let result4 = equals.equals(item.Whichbeardstylemeetyourpreferences, profiletomatch.Whichbeardstylemeetyourpreferences)
            if (result4 === true) {
                count++
            }
            if (item.Doyouwantawifewhowearsmakeupinfrontofnonmahrams === profiletomatch.Doyouwantawifewhowearsmakeupinfrontofnonmahrams) {
                count++;
            }
            let result5 = equals.equals(item.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply, profiletomatch.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply)
            if (result5 === true) {
                count++
            }
            if (item.Doyoufreemixwithnonmahramfemales === profiletomatch.Doyoufreemixwithnonmahramfemales)
                count++;
            if (item.Doyoufreemixwithnonmahrammen === profiletomatch.Doyoufreemixwithnonmahrammen) {
                count++;
            }
            let result6 = equals.equals(item.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc, profiletomatch.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc)
            if (result6 === true) {
                count++
            }
            let result7 = equals.equals(item.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc, profiletomatch.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc)
            if (result7 === true) {
                count++
            }
            if (item.DoyouwatchTV === profiletomatch.DoyouwatchTV)
                count++;
            if (item.DoyoulistentoMusic === profiletomatch.DoyoulistentoMusic)
                count++;
            if (item.Doyouwearmakeupinfrontofnonmahrams === profiletomatch.Doyouwearmakeupinfrontofnonmahrams)
                count++;
            if (item.youngestageyouarelookingfor === profiletomatch.youngestageyouarelookingfor)
                count++;
            if (item.oldestageyouarelookingfor === profiletomatch.oldestageyouarelookingfor) {
                count++;
            }
            let result8 = equals.equals(item.Whattypeofhijabmatcheswithwhatyourelookingforinawife, profiletomatch.Whattypeofhijabmatcheswithwhatyourelookingforinawife)
            if (result8 === true) {
                count++
            }
            if (item.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab === profiletomatch.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab) {
                count++;
            }
            let result9 = equals.equals(item.Whichmaritalstatusmatchwithwhatyouarelookingformen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingformen)
            if (result9 === true) {
                count++
            }
            let result10 = equals.equals(item.Whichmaritalstatusmatchwithwhatyouarelookingforwomen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingforwomen)
            if (result10 === true) {
                count++
            }
            if (item.Wouldyouconsidermarryingsomeonewhoisalreadymarried === profiletomatch.Wouldyouconsidermarryingsomeonewhoisalreadymarried) {
                count++
            }
            if (item.Wouldyoumarrysomeonewhoalreadyhaschildren === profiletomatch.Wouldyoumarrysomeonewhoalreadyhaschildren)
                count++;
            if (item.Wouldyoumarrysomeonewhohadmentalhealthproblems === profiletomatch.Wouldyoumarrysomeonewhohadmentalhealthproblems)
                count++;
            if (item.Wouldyoumarrysomeonewhohadphysicaldisabilities === profiletomatch.Wouldyoumarrysomeonewhohadphysicaldisabilities) {
                count++;
            }
            let result12 = _.isEqual(item.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship, profiletomatch.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship)
            if (result12 === true) {
                count++;
            }
            let result13 = _.isEqual(item.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner, profiletomatch.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner)
            if (result13 === true) {
                count++;
            }
            if (item.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife === profiletomatch.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife) {
                count++;
            }
            let result14 = _.isEqual(item.Whichcountryorcountriesdoyoulivein, profiletomatch.Whichcountryorcountriesdoyoulivein)
            if (result14 === true) {
                count++;
            }
            let result15 = _.isEqual(item.Whichcitytownvillagedoyoulivein, profiletomatch.Whichcitytownvillagedoyoulivein)
            if (result15 === true) {
                count++;
            }
            let result16 = _.isEqual(item.Whichcountryorcountriesdoyouholdcitizenship, profiletomatch.Whichcountryorcountriesdoyouholdcitizenship)
            if (result16 === true) {
                count++;
            }
            if (item.Whatisyourmaritalstatusmen === profiletomatch.Whatisyourmaritalstatusmen)
                count++;
            if (item.Whatisyourmaritalstatuswomen === profiletomatch.Whatisyourmaritalstatuswomen)
                count++;
            if (item.Doyouprayallofthe5dailyprayers === profiletomatch.Doyouprayallofthe5dailyprayers)
                count++;
            if (item.Doyoucoveryourhairfromnonmahrams === profiletomatch.Doyoucoveryourhairfromnonmahrams)
                count++;
            if (item.Whatareyourpreferredlivingarrangementsaftermarriage === profiletomatch.Whatareyourpreferredlivingarrangementsaftermarriage)
                count++;
            if (item.Doyouhaveanyphysicaldisabilities === profiletomatch.Doyouhaveanyphysicaldisabilities)
                count++;
            if (item.Doyouhaveanymentalhealthproblems === profiletomatch.Doyouhaveanymentalhealthproblems)
                count++;
            if (item.Doyouhaveanychildren === profiletomatch.Doyouhaveanychildren)
                count++;
            if (item.Doyouwantchildrenaftermarriage === profiletomatch.Doyouwantchildrenaftermarriage)
                count++;
            if (item.Areyouwillingtorelocateaftermarriage === profiletomatch.Areyouwillingtorelocateaftermarriage)
                count++;
            if (item.DidyourevertconverttoIslam === profiletomatch.DidyourevertconverttoIslam)
                count++;
            if (item.Whatistheshortestheightyoufindcompatible === profiletomatch.Whatistheshortestheightyoufindcompatible)
                count++;
            if (item.Whatsthetallestheightyoufindcompatible === profiletomatch.Whatsthetallestheightyoufindcompatible)
                count++;
            if (item.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches === profiletomatch.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches)
                count++;
            if (item.Smallestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Smallestdresssizethatmeetsyourrequirementsforawife)
                count++;
            if (item.Largestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Largestdresssizethatmeetsyourrequirementsforawife)
                count++;
            if (item.Whichbuildmatchesyourpreference === profiletomatch.Whichbuildmatchesyourpreference)
                count++;
            if (item.Whatisyourheight === profiletomatch.Whatisyourheight)
                count++;
            if (item.Yourdresssize === profiletomatch.Yourdresssize)
                count++;
            if (item.Yourwaistsizeininches === profiletomatch.Yourwaistsizeininches)
                count++;
            if (item.Whichbuildbestdescribesyou === profiletomatch.Whichbuildbestdescribesyou)
                count++;
            if (item.Whichstyleofbearddoyouhave === profiletomatch.Whichstyleofbearddoyouhave)
                count++;
            if (item.Whatisyourethnicity === profiletomatch.Whatisyourethnicity)
                count++;
            if (item.Areyourfamilyreligious === profiletomatch.Areyourfamilyreligious)
                count++;
            if (item.WhatsectfollowingofIslamareyourfamilypractising === profiletomatch.WhatsectfollowingofIslamareyourfamilypractising)
                count++;
            if (item.Howisyourrelationshipwithyourfamily === profiletomatch.Howisyourrelationshipwithyourfamily)
                count++;
            if (item.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah === profiletomatch.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah)
                count++;
            if (item.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends === profiletomatch.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends)
                count++;
            if (item.Areyourfriendsreligious === profiletomatch.Areyourfriendsreligious)
                count++;
            if (item.WhatsectfollowingofIslamdoyourfriendspractice === profiletomatch.WhatsectfollowingofIslamdoyourfriendspractice)
                count++;
            if (item.Howmightyourfriendsdescribeyourpersonality === profiletomatch.Howmightyourfriendsdescribeyourpersonality)
                count++;
            if (item.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends)
                count++;
            if (item.Wouldyouwantyourfuturewifetofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturewifetofreemixwithyourfriends)
                count++;
            if (item.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply)
                count++;
            if (item.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply)
                count++;
            if (item.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted === profiletomatch.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted)
                count++;
            if (item.Whatisyourprofession === profiletomatch.Whatisyourprofession)
                count++;
            if (item.Whatisyourlevelofeducation === profiletomatch.Whatisyourlevelofeducation)
                count++;
            if (item.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole === profiletomatch.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole)
                count++;
            if ((count <= 78) && (count >= 65)) {
                const user = await User.findOne({ _id: item.user })
                console.log('what the user', user)
                if (user) {
                    setTimeout(() => {
                        item.user_first_name = user.first_name
                        return item
                    }, 5000);
                }
            }
        }
        )
        if (req.params.important === 'true') {
            //filter by importants

            FinalResult = FinalResult.filter((item , index)=>{
                let result = equals.equals(item.followingforspouse, profiletomatch.followingforspouse)
                if (result === true) {
                    if(importantToMatch.followingforspouse === true){
                       return item
                    }
                }
                
                if (item.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted === profiletomatch.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted) {
                    if(importantToMatch.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted === true){
                        return item
                    }
                }
                if (item.TheIslamicteachingssectthatyoufollow === profiletomatch.TheIslamicteachingssectthatyoufollow) {
                    if(importantToMatch.TheIslamicteachingssectthatyoufollow === true){
                      return item
                    }
                    
                }
                if (item.Whichscholarsdoyoutakeknowledgefrom === profiletomatch.Whichscholarsdoyoutakeknowledgefrom) {
                    if(importantToMatch.Whichscholarsdoyoutakeknowledgefrom === true){
                         return item
                    }
                }
                if (item.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails === profiletomatch.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails){
                    if(importantToMatch.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails === true){
                        return item
                    }
                }
                    
                if (item.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid === profiletomatch.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid){
                    if(importantToMatch.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid === true ){
                         return item
                    }
                }
                   
                if (item.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk === profiletomatch.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk){
                    if(importantToMatch.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk === true){
                        return item
                    }
                }
                   
                if (item.DoyouwanttomakehijraonedayinshaAllah === profiletomatch.DoyouwanttomakehijraonedayinshaAllah){
                    if(importantToMatch.DoyouwanttomakehijraonedayinshaAllah){
                      return item
                    }
                }
                   
                if (item.DoyouvoluntaryFast === profiletomatch.DoyouvoluntaryFast){
                    if(importantToMatch.DoyouvoluntaryFast === true){
                        return item
                    }
                }
                   
                if (item.CanyoureadandorunderstandanyArabic === profiletomatch.CanyoureadandorunderstandanyArabic){
                    if(importantToMatch.CanyoureadandorunderstandanyArabic === true){
                       return item
                    }
                }
                   
                if (item.DoyoureadQuran === profiletomatch.DoyoureadQuran){
                    if(importantToMatch.DoyoureadQuran === true){
                      return item
                    }
                }
                   
                if (item.MemorizedanyQuranifsohowmuch === profiletomatch.MemorizedanyQuranifsohowmuch) {
                    if(importantToMatch.MemorizedanyQuranifsohowmuch === true){
                       return item
                    }
                   
                }
                let result2 = equals.equals(item.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc, profiletomatch.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc)
                if (result2 === true) {
                    if(importantToMatch.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc === true){
                       return item
                    }
                }
                let result3 = equals.equals(item.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc, profiletomatch.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc)
                if (result3 === true) {
                    if(importantToMatch.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc === true){
                       return item
                    }
                }
                let result4 = equals.equals(item.Whichbeardstylemeetyourpreferences, profiletomatch.Whichbeardstylemeetyourpreferences)
                if (result4 === true) {
                    if(importantToMatch.Whichbeardstylemeetyourpreferences === true){
                        return item
                    }
                }
                if (item.Doyouwantawifewhowearsmakeupinfrontofnonmahrams === profiletomatch.Doyouwantawifewhowearsmakeupinfrontofnonmahrams) {
                   if(importantToMatch.Doyouwantawifewhowearsmakeupinfrontofnonmahrams){
                      return item
                   }
                }
                let result5 = equals.equals(item.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply, profiletomatch.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply)
                if (result5 === true) {
                     if(importantToMatch.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply === true){
                         return item
                     }
                }
                if (item.Doyoufreemixwithnonmahramfemales === profiletomatch.Doyoufreemixwithnonmahramfemales){
                    if(importantToMatch.Doyoufreemixwithnonmahramfemales === true){
                      return item
                    }
                }
                   
                if (item.Doyoufreemixwithnonmahrammen === profiletomatch.Doyoufreemixwithnonmahrammen) {
                   if(importantToMatch.Doyoufreemixwithnonmahrammen === true){
                     return item
                   }
                }
                let result6 = equals.equals(item.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc, profiletomatch.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc)
                if (result6 === true) {
                    if(importantToMatch.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc === true){
                       return item
                    }
                }
                let result7 = equals.equals(item.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc, profiletomatch.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc)
                if (result7 === true) {
                    if(importantToMatch.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc === true){
                        return item
                    }
                }
                if (item.DoyouwatchTV === profiletomatch.DoyouwatchTV){
                    if(importantToMatch.DoyouwatchTV === true){
                      return item
                    }
                }
                   
                if (item.DoyoulistentoMusic === profiletomatch.DoyoulistentoMusic){
                    if(importantToMatch.DoyoulistentoMusic === true){
                        return item
                    }
                }
                   
                if (item.Doyouwearmakeupinfrontofnonmahrams === profiletomatch.Doyouwearmakeupinfrontofnonmahrams){
                    if(importantToMatch.Doyouwearmakeupinfrontofnonmahrams === true){
                        return item
                    }
                }
                   
                if (item.youngestageyouarelookingfor === profiletomatch.youngestageyouarelookingfor){
                    if(importantToMatch.youngestageyouarelookingfor === true){
                        return item
                    }
                }
                   
                if (item.oldestageyouarelookingfor === profiletomatch.oldestageyouarelookingfor) {
                   if(importantToMatch.oldestageyouarelookingfor === true){
                       return item
                   }
                }
                let result8 = equals.equals(item.Whattypeofhijabmatcheswithwhatyourelookingforinawife, profiletomatch.Whattypeofhijabmatcheswithwhatyourelookingforinawife)
                if (result8 === true) {
                    if(importantToMatch.Whattypeofhijabmatcheswithwhatyourelookingforinawife === true){
                        return item
                    }
                }
                if (item.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab === profiletomatch.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab) {
                   if(importantToMatch.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab === true){
                      return item
                   }
                }
                let result9 = equals.equals(item.Whichmaritalstatusmatchwithwhatyouarelookingformen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingformen)
                if (result9 === true) {
                    if(importantToMatch.Whichmaritalstatusmatchwithwhatyouarelookingformen === true){
                         return item
                    }
                }
                let result10 = equals.equals(item.Whichmaritalstatusmatchwithwhatyouarelookingforwomen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingforwomen)
                if (result10 === true) {
                    if(importantToMatch.Whichmaritalstatusmatchwithwhatyouarelookingforwomen === true){
                        return item
                    }
                }
                if (item.Wouldyouconsidermarryingsomeonewhoisalreadymarried === profiletomatch.Wouldyouconsidermarryingsomeonewhoisalreadymarried) {
                    if(importantToMatch.Wouldyouconsidermarryingsomeonewhoisalreadymarried === true){
                        return item
                    }
                }
                if (item.Wouldyoumarrysomeonewhoalreadyhaschildren === profiletomatch.Wouldyoumarrysomeonewhoalreadyhaschildren){
                    if(importantToMatch.Wouldyoumarrysomeonewhoalreadyhaschildren === true){
                         return item
                    }
                }
                   
                if (item.Wouldyoumarrysomeonewhohadmentalhealthproblems === profiletomatch.Wouldyoumarrysomeonewhohadmentalhealthproblems){
                    if(importantToMatch.Wouldyoumarrysomeonewhohadmentalhealthproblems === true){
                        return item
                    }
                }
                   
                if (item.Wouldyoumarrysomeonewhohadphysicaldisabilities === profiletomatch.Wouldyoumarrysomeonewhohadphysicaldisabilities) {
                    if(importantToMatch.Wouldyoumarrysomeonewhohadphysicaldisabilities === true){
                      return item
                    }
                   
                }
                let result12 = _.isEqual(item.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship, profiletomatch.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship)
                if (result12 === true) {
                   if(importantToMatch.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship === true){
                     return item
                   }
                }
                let result13 = _.isEqual(item.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner, profiletomatch.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner)
                if (result13 === true) {
                   if(importantToMatch.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner === true){
                     return item
                   }
                }
                if (item.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife === profiletomatch.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife) {
                   if(importantToMatch.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife === true){
                       return item
                   }
                }
                let result14 = _.isEqual(item.Whichcountryorcountriesdoyoulivein, profiletomatch.Whichcountryorcountriesdoyoulivein)
                if (result14 === true) {
                   if(importantToMatch.Whichcountryorcountriesdoyoulivein === true){
                       return item
                   }                }
                let result15 = _.isEqual(item.Whichcitytownvillagedoyoulivein, profiletomatch.Whichcitytownvillagedoyoulivein)
                if (result15 === true) {
                   if(importantToMatch.Whichcitytownvillagedoyoulivein === true){
                     return item
                   }
                }
                let result16 = _.isEqual(item.Whichcountryorcountriesdoyouholdcitizenship, profiletomatch.Whichcountryorcountriesdoyouholdcitizenship)
                if (result16 === true) {
                    if(importantToMatch.Whichcountryorcountriesdoyouholdcitizenship === true){
                        return item
                      }
                }
                if (item.Whatisyourmaritalstatusmen === profiletomatch.Whatisyourmaritalstatusmen){
                    if(importantToMatch.Whatisyourmaritalstatusmen === true){
                        return item
                      }
                }
                   
                if (item.Whatisyourmaritalstatuswomen === profiletomatch.Whatisyourmaritalstatuswomen){
                    if(importantToMatch.Whatisyourmaritalstatuswomen === true){
                        return item
                      }
                }
                   
                if (item.Doyouprayallofthe5dailyprayers === profiletomatch.Doyouprayallofthe5dailyprayers){
                    if(importantToMatch.Doyouprayallofthe5dailyprayers === true){
                        return item
                      }
                }
                   
                if (item.Doyoucoveryourhairfromnonmahrams === profiletomatch.Doyoucoveryourhairfromnonmahrams){
                    if(importantToMatch.Doyoucoveryourhairfromnonmahrams === true){
                        return item
                      }
                }
                   
                if (item.Whatareyourpreferredlivingarrangementsaftermarriage === profiletomatch.Whatareyourpreferredlivingarrangementsaftermarriage){
                    if(importantToMatch.Whatareyourpreferredlivingarrangementsaftermarriage === true){
                        return item
                      }
                }
                   
                if (item.Doyouhaveanyphysicaldisabilities === profiletomatch.Doyouhaveanyphysicaldisabilities){
                    if(importantToMatch.Doyouhaveanyphysicaldisabilities === true){
                        return item
                      }
                }
                   
                if (item.Doyouhaveanymentalhealthproblems === profiletomatch.Doyouhaveanymentalhealthproblems){
                    if(importantToMatch.Doyouhaveanymentalhealthproblems === true){
                        return item
                      }
                }
                   
                if (item.Doyouhaveanychildren === profiletomatch.Doyouhaveanychildren){
                    if(importantToMatch.Doyouhaveanychildren === true){
                        return item
                      }
                }
                   
                if (item.Doyouwantchildrenaftermarriage === profiletomatch.Doyouwantchildrenaftermarriage){
                    if(importantToMatch.Doyouwantchildrenaftermarriage === true){
                        return item
                      }
                }
                   
                if (item.Areyouwillingtorelocateaftermarriage === profiletomatch.Areyouwillingtorelocateaftermarriage){
                    if(importantToMatch.Areyouwillingtorelocateaftermarriage === true){
                        return item
                      }
                }
                   
                if (item.DidyourevertconverttoIslam === profiletomatch.DidyourevertconverttoIslam){
                    if(importantToMatch.DidyourevertconverttoIslam === true){
                        return item
                      }
                }
                   
                if (item.Whatistheshortestheightyoufindcompatible === profiletomatch.Whatistheshortestheightyoufindcompatible){
                    if(importantToMatch.Whatistheshortestheightyoufindcompatible === true){
                        return item
                      }
                }
                   
                if (item.Whatsthetallestheightyoufindcompatible === profiletomatch.Whatsthetallestheightyoufindcompatible){
                    if(importantToMatch.Whatsthetallestheightyoufindcompatible === true){
                        return item
                      }
                }
                   
                if (item.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches === profiletomatch.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches){
                    if(importantToMatch.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches === true){
                        return item
                      }
                }
                   
                if (item.Smallestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Smallestdresssizethatmeetsyourrequirementsforawife){
                    if(importantToMatch.Smallestdresssizethatmeetsyourrequirementsforawife === true){
                        return item
                      }
                }
                   
                if (item.Largestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Largestdresssizethatmeetsyourrequirementsforawife){
                    if(importantToMatch.Largestdresssizethatmeetsyourrequirementsforawife === true){
                        return item
                      }
                }
                   
                if (item.Whichbuildmatchesyourpreference === profiletomatch.Whichbuildmatchesyourpreference){
                    if(importantToMatch.Whichbuildmatchesyourpreference === true){
                        return item
                      }
                }
                   
                if (item.Whatisyourheight === profiletomatch.Whatisyourheight){
                    if(importantToMatch.Whatisyourheight === true){
                        return item
                      }
                }
                   
                if (item.Yourdresssize === profiletomatch.Yourdresssize){
                    if(importantToMatch.Yourdresssize === true){
                        return item
                      }
                }
                   
                if (item.Yourwaistsizeininches === profiletomatch.Yourwaistsizeininches){
                    if(importantToMatch.Yourwaistsizeininches === true){
                        return item
                      }
                }
                   
                if (item.Whichbuildbestdescribesyou === profiletomatch.Whichbuildbestdescribesyou){
                    if(importantToMatch.Whichbuildbestdescribesyou === true){
                        return item
                      }
                }
                   
                if (item.Whichstyleofbearddoyouhave === profiletomatch.Whichstyleofbearddoyouhave){
                    if(importantToMatch.Whichstyleofbearddoyouhave === true){
                        return item
                      }
                }
                   
                if (item.Whatisyourethnicity === profiletomatch.Whatisyourethnicity){
                    if(importantToMatch.Whatisyourethnicity === true){
                        return item
                      }
                }
                   
                if (item.Areyourfamilyreligious === profiletomatch.Areyourfamilyreligious){
                    if(importantToMatch.Areyourfamilyreligious === true){
                        return item
                      }
                }
                   
                if (item.WhatsectfollowingofIslamareyourfamilypractising === profiletomatch.WhatsectfollowingofIslamareyourfamilypractising){
                    if(importantToMatch.WhatsectfollowingofIslamareyourfamilypractising === true){
                        return item
                      }
                }
                   
                if (item.Howisyourrelationshipwithyourfamily === profiletomatch.Howisyourrelationshipwithyourfamily){
                    if(importantToMatch.Howisyourrelationshipwithyourfamily === true){
                        return item
                      }
                }
                   
                if (item.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah === profiletomatch.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah){
                    if(importantToMatch.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah === true){
                        return item
                      }
                }
                   
                if (item.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends === profiletomatch.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends){
                    if(importantToMatch.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends === true){
                        return item
                      }
                }
                   
                if (item.Areyourfriendsreligious === profiletomatch.Areyourfriendsreligious){
                    if(importantToMatch.Areyourfriendsreligious === true){
                        return item
                      }
                }
                   
                if (item.WhatsectfollowingofIslamdoyourfriendspractice === profiletomatch.WhatsectfollowingofIslamdoyourfriendspractice){
                    if(importantToMatch.WhatsectfollowingofIslamdoyourfriendspractice === true){
                        return item
                      }
                }
                   
                if (item.Howmightyourfriendsdescribeyourpersonality === profiletomatch.Howmightyourfriendsdescribeyourpersonality){
                    if(importantToMatch.Howmightyourfriendsdescribeyourpersonality === true){
                        return item
                      }
                }
                   
                if (item.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends){
                    if(importantToMatch.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends === true){
                        return item
                      }
                }
                   
                if (item.Wouldyouwantyourfuturewifetofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturewifetofreemixwithyourfriends){
                    if(importantToMatch.Wouldyouwantyourfuturewifetofreemixwithyourfriends === true){
                        return item
                      }
                }
                   
                if (item.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply){
                    if(importantToMatch.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply === true){
                        return item
                      }
                }
                   
                if (item.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply){
                    if(importantToMatch.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply === true){
                        return item
                      }
                }
                   
                if (item.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted === profiletomatch.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted){
                    if(importantToMatch.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted === true){
                        return item
                      }
                }
                   
                if (item.Whatisyourprofession === profiletomatch.Whatisyourprofession){
                    if(importantToMatch.Whatisyourprofession === true){
                        return item
                      }
                }
                   
                if (item.Whatisyourlevelofeducation === profiletomatch.Whatisyourlevelofeducation){
                    if(importantToMatch.Whatisyourlevelofeducation === true){
                        return item
                      }
                }
                   
                if (item.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole === profiletomatch.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole){
                    if(importantToMatch.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole === true){
                        return item
                      }
                }
                   
            })

            const matchedUsers = FinalResult.map((item, index) => {
                return item.user
            })
            const matches = await Match.findOneAndUpdate({ user_id: userId }, { match_id: matchedUsers }, { upsert: true })

            const paginate = (FinalResult, perPage, page) => {
                return FinalResult.slice((page - 1) * perPage, page * perPage);
            }
            const response = paginate(FinalResult, perPage, page)
            res.status(201).json(response);
        }
        else if (req.params.important === 'false') {
            const matchedUsers = FinalResult.map((item, index) => {
                return item.user
            })
            const matches = await Match.findOneAndUpdate({ user_id: userId }, { match_id: matchedUsers }, { upsert: true })

            const paginate = (FinalResult, perPage, page) => {
                return FinalResult.slice((page - 1) * perPage, page * perPage);
            }
            const response = paginate(FinalResult, perPage, page)
            res.status(201).json(response);
        }

    },
}