const User = require("../model/user");
const Profile = require("../model/profile")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const equals = require('./equalityhelper')
const _ = require('lodash');
const profile = require("../model/profile");

module.exports = {
    FullMatches: async (req, res) => {
        const userId = req.params.userId;
        var perPage = 5
        var page = Math.max(0, req.params.page)
        //run matching algorithm
        const profiletomatch = await Profile.findOne({ user: userId })
        //now return profiles that match this profile fully
        const FullMatches = await Profile.find({})
        const FinalResult = FullMatches.filter(function (item) {

            var count = 0;
            let result = equals.equals(FullMatches.followingforspouse, profiletomatch.followingforspouse)
            if (result === true) {
                count++
            }

            if (FullMatches.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted === profiletomatch.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted) {
                count++
            }
            if (FullMatches.TheIslamicteachingssectthatyoufollow === profiletomatch.TheIslamicteachingssectthatyoufollow) {
                count++
            }
            if (FullMatches.Whichscholarsdoyoutakeknowledgefrom === profiletomatch.Whichscholarsdoyoutakeknowledgefrom) {
                count++
            }
            if (FullMatches.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails === profiletomatch.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails)
                count++;
            if (FullMatches.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid === profiletomatch.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid)
                count++;
            if (FullMatches.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk === profiletomatch.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk)
                count++;
            if (FullMatches.DoyouwanttomakehijraonedayinshaAllah === profiletomatch.DoyouwanttomakehijraonedayinshaAllah)
                count++;
            if (FullMatches.DoyouvoluntaryFast === profiletomatch.DoyouvoluntaryFast)
                count++;
            if (FullMatches.CanyoureadandorunderstandanyArabic === profiletomatch.CanyoureadandorunderstandanyArabic)
                count++;
            if (FullMatches.DoyoureadQuran === profiletomatch.DoyoureadQuran)
                count++;
            if (FullMatches.MemorizedanyQuranifsohowmuch === profiletomatch.MemorizedanyQuranifsohowmuch) {
                count++;
            }
            let result2 = equals.equals(FullMatches.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc, profiletomatch.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc)
            if (result2 === true) {
                count++
            }
            let result3 = equals.equals(FullMatches.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc, profiletomatch.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc)
            if (result3 === true) {
                count++
            }
            let result4 = equals.equals(FullMatches.Whichbeardstylemeetyourpreferences, profiletomatch.Whichbeardstylemeetyourpreferences)
            if (result4 === true) {
                count++
            }
            if (FullMatches.Doyouwantawifewhowearsmakeupinfrontofnonmahrams === profiletomatch.Doyouwantawifewhowearsmakeupinfrontofnonmahrams) {
                count++;
            }
            let result5 = equals.equals(FullMatches.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply, profiletomatch.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply)
            if (result5 === true) {
                count++
            }
            if (FullMatches.Doyoufreemixwithnonmahramfemales === profiletomatch.Doyoufreemixwithnonmahramfemales)
                count++;
            if (FullMatches.Doyoufreemixwithnonmahrammen === profiletomatch.Doyoufreemixwithnonmahrammen) {
                count++;
            }
            let result6 = equals.equals(FullMatches.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc, profiletomatch.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc)
            if (result6 === true) {
                count++
            }
            let result7 = equals.equals(FullMatches.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc, profiletomatch.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc)
            if (result7 === true) {
                count++
            }
            if (FullMatches.DoyouwatchTV === profiletomatch.DoyouwatchTV)
                count++;
            if (FullMatches.DoyoulistentoMusic === profiletomatch.DoyoulistentoMusic)
                count++;
            if (FullMatches.Doyouwearmakeupinfrontofnonmahrams === profiletomatch.Doyouwearmakeupinfrontofnonmahrams)
                count++;
            if (FullMatches.youngestageyouarelookingfor === profiletomatch.youngestageyouarelookingfor)
                count++;
            if (FullMatches.oldestageyouarelookingfor === profiletomatch.oldestageyouarelookingfor) {
                count++;
            }
            let result8 = equals.equals(FullMatches.Whattypeofhijabmatcheswithwhatyourelookingforinawife, profiletomatch.Whattypeofhijabmatcheswithwhatyourelookingforinawife)
            if (result8 === true) {
                count++
            }
            if (FullMatches.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab === profiletomatch.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab) {
                count++;
            }
            let result9 = equals.equals(FullMatches.Whichmaritalstatusmatchwithwhatyouarelookingformen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingformen)
            if (result9 === true) {
                count++
            }
            let result10 = equals.equals(FullMatches.Whichmaritalstatusmatchwithwhatyouarelookingforwomen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingforwomen)
            if (result10 === true) {
                count++
            }
            let result11 = equals.equals(FullMatches.Wouldyouconsidermarryingsomeonewhoisalreadymarried, profiletomatch.Wouldyouconsidermarryingsomeonewhoisalreadymarried)
            if (result11 === true) {
                count++
            }
            if (FullMatches.Wouldyoumarrysomeonewhoalreadyhaschildren === profiletomatch.Wouldyoumarrysomeonewhoalreadyhaschildren)
                count++;
            if (FullMatches.Wouldyoumarrysomeonewhohadmentalhealthproblems === profiletomatch.Wouldyoumarrysomeonewhohadmentalhealthproblems)
                count++;
            if (FullMatches.Wouldyoumarrysomeonewhohadphysicaldisabilities === profiletomatch.Wouldyoumarrysomeonewhohadphysicaldisabilities) {
                count++;
            }
            let result12 = _.isEqual(FullMatches.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship, profiletomatch.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship)
            if (result12 === true) {
                count++;
            }
            let result13 = _.isEqual(FullMatches.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner, profiletomatch.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner)
            if (result13 === true) {
                count++;
            }
            if (FullMatches.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife === profiletomatch.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife) {
                count++;
            }
            let result14 = _.isEqual(FullMatches.Whichcountryorcountriesdoyoulivein, profiletomatch.Whichcountryorcountriesdoyoulivein)
            if (result14 === true) {
                count++;
            }
            let result15 = _.isEqual(FullMatches.Whichcitytownvillagedoyoulivein, profiletomatch.Whichcitytownvillagedoyoulivein)
            if (result15 === true) {
                count++;
            }
            let result16 = _.isEqual(FullMatches.Whichcountryorcountriesdoyouholdcitizenship, profiletomatch.Whichcountryorcountriesdoyouholdcitizenship)
            if (result16 === true) {
                count++;
            }
            if (FullMatches.Whatisyourmaritalstatusmen === profiletomatch.Whatisyourmaritalstatusmen)
                count++;
            if (FullMatches.Whatisyourmaritalstatuswomen === profiletomatch.Whatisyourmaritalstatuswomen)
                count++;
            if (FullMatches.Doyouprayallofthe5dailyprayers === profiletomatch.Doyouprayallofthe5dailyprayers)
                count++;
            if (FullMatches.Doyoucoveryourhairfromnonmahrams === profiletomatch.Doyoucoveryourhairfromnonmahrams)
                count++;
            if (FullMatches.Whatareyourpreferredlivingarrangementsaftermarriage === profiletomatch.Whatareyourpreferredlivingarrangementsaftermarriage)
                count++;
            if (FullMatches.Doyouhaveanyphysicaldisabilities === profiletomatch.Doyouhaveanyphysicaldisabilities)
                count++;
            if (FullMatches.Doyouhaveanymentalhealthproblems === profiletomatch.Doyouhaveanymentalhealthproblems)
                count++;
            if (FullMatches.Doyouhaveanychildren === profiletomatch.Doyouhaveanychildren)
                count++;
            if (FullMatches.Doyouwantchildrenaftermarriage === profiletomatch.Doyouwantchildrenaftermarriage)
                count++;
            if (FullMatches.Areyouwillingtorelocateaftermarriage === profiletomatch.Areyouwillingtorelocateaftermarriage)
                count++;
            if (FullMatches.DidyourevertconverttoIslam === profiletomatch.DidyourevertconverttoIslam)
                count++;
            if (FullMatches.Whatistheshortestheightyoufindcompatible === profiletomatch.Whatistheshortestheightyoufindcompatible)
                count++;
            if (FullMatches.Whatsthetallestheightyoufindcompatible === profiletomatch.Whatsthetallestheightyoufindcompatible)
                count++;
            if (FullMatches.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches === profiletomatch.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches)
                count++;
            if (FullMatches.Smallestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Smallestdresssizethatmeetsyourrequirementsforawife)
                count++;
            if (FullMatches.Largestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Largestdresssizethatmeetsyourrequirementsforawife)
                count++;
            if (FullMatches.Whichbuildmatchesyourpreference === profiletomatch.Whichbuildmatchesyourpreference)
                count++;
            if (FullMatches.Whatisyourheight === profiletomatch.Whatisyourheight)
                count++;
            if (FullMatches.Yourdresssize === profiletomatch.Yourdresssize)
                count++;
            if (FullMatches.Yourwaistsizeininches === profiletomatch.Yourwaistsizeininches)
                count++;
            if (FullMatches.Whichbuildbestdescribesyou === profiletomatch.Whichbuildbestdescribesyou)
                count++;
            if (FullMatches.Whichstyleofbearddoyouhave === profiletomatch.Whichstyleofbearddoyouhave)
                count++;
            if (FullMatches.Whatisyourethnicity === profiletomatch.Whatisyourethnicity)
                count++;
            if (FullMatches.Areyourfamilyreligious === profiletomatch.Areyourfamilyreligious)
                count++;
            if (FullMatches.WhatsectfollowingofIslamareyourfamilypractising === profiletomatch.WhatsectfollowingofIslamareyourfamilypractising)
                count++;
            if (FullMatches.Howisyourrelationshipwithyourfamily === profiletomatch.Howisyourrelationshipwithyourfamily)
                count++;
            if (FullMatches.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah === profiletomatch.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah)
                count++;
            if (FullMatches.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends === profiletomatch.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends)
                count++;
            if (FullMatches.Areyourfriendsreligious === profiletomatch.Areyourfriendsreligious)
                count++;
            if (FullMatches.WhatsectfollowingofIslamdoyourfriendspractice === profiletomatch.WhatsectfollowingofIslamdoyourfriendspractice)
                count++;
            if (FullMatches.Howmightyourfriendsdescribeyourpersonality === profiletomatch.Howmightyourfriendsdescribeyourpersonality)
                count++;
            if (FullMatches.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends)
                count++;
            if (FullMatches.Wouldyouwantyourfuturewifetofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturewifetofreemixwithyourfriends)
                count++;
            if (FullMatches.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply)
                count++;
            if (FullMatches.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply)
                count++;
            if (FullMatches.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted === profiletomatch.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted)
                count++;
            if (FullMatches.Whatisyourprofession === profiletomatch.Whatisyourprofession)
                count++;
            if (FullMatches.Whatisyourlevelofeducation === profiletomatch.Whatisyourlevelofeducation)
                count++;
            if (FullMatches.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole === profiletomatch.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole)
                count++;
            if ((count<=78) && (count>=65)) {
                return item
            }



        }
        )
        const paginate = (FinalResult, perPage, page) => {
            return FinalResult.slice((page - 1) * perPage, page * perPage);
        }
        const response = paginate(FinalResult, perPage, page)
        res.status(201).json(response);
    },

    
}