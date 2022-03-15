const User = require("../model/user");
const Profile = require("../model/profile")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const _ = require('lodash');
const profile = require("../model/profile");
const { equals } = require("./equalityhelper");

module.exports = {
    PartialMatches: async (req, res) => {
        const userId = req.params.userId;
        var perPage = 5
        var page = Math.max(0, req.params.page)
        //run matching algorithm
        const profiletomatch = await Profile.findOne({ user: userId })
        //now return profiles that match this profile fully
        const PartialMatches = await Profile.find({})
        const FinalResult = PartialMatches.filter(function (item) {

            var count = 0;
            let result = equals(PartialMatches.followingforspouse, profiletomatch.followingforspouse)
            if (result === true) {
                count++
            }

            if (PartialMatches.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted === profiletomatch.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted) {
                count++
            }
            if (PartialMatches.TheIslamicteachingssectthatyoufollow === profiletomatch.TheIslamicteachingssectthatyoufollow) {
                count++
            }
            if (PartialMatches.Whichscholarsdoyoutakeknowledgefrom === profiletomatch.Whichscholarsdoyoutakeknowledgefrom) {
                count++
            }
            if (PartialMatches.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails === profiletomatch.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails)
                count++;
            if (PartialMatches.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid === profiletomatch.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid)
                count++;
            if (PartialMatches.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk === profiletomatch.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk)
                count++;
            if (PartialMatches.DoyouwanttomakehijraonedayinshaAllah === profiletomatch.DoyouwanttomakehijraonedayinshaAllah)
                count++;
            if (PartialMatches.DoyouvoluntaryFast === profiletomatch.DoyouvoluntaryFast)
                count++;
            if (PartialMatches.CanyoureadandorunderstandanyArabic === profiletomatch.CanyoureadandorunderstandanyArabic)
                count++;
            if (PartialMatches.DoyoureadQuran === profiletomatch.DoyoureadQuran)
                count++;
            if (PartialMatches.MemorizedanyQuranifsohowmuch === profiletomatch.MemorizedanyQuranifsohowmuch) {
                count++;
            }
            let result2 = equals(PartialMatches.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc, profiletomatch.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc)
            if (result2 === true) {
                count++
            }
            let result3 = equals(PartialMatches.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc, profiletomatch.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc)
            if (result3 === true) {
                count++
            }
            let result4 = equals(PartialMatches.Whichbeardstylemeetyourpreferences, profiletomatch.Whichbeardstylemeetyourpreferences)
            if (result4 === true) {
                count++
            }
            if (PartialMatches.Doyouwantawifewhowearsmakeupinfrontofnonmahrams === profiletomatch.Doyouwantawifewhowearsmakeupinfrontofnonmahrams) {
                count++;
            }
            let result5 = equals(PartialMatches.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply, profiletomatch.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply)
            if (result5 === true) {
                count++
            }
            if (PartialMatches.Doyoufreemixwithnonmahramfemales === profiletomatch.Doyoufreemixwithnonmahramfemales)
                count++;
            if (PartialMatches.Doyoufreemixwithnonmahrammen === profiletomatch.Doyoufreemixwithnonmahrammen) {
                count++;
            }
            let result6 = equals(PartialMatches.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc, profiletomatch.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc)
            if (result6 === true) {
                count++
            }
            let result7 = equals(PartialMatches.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc, profiletomatch.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc)
            if (result7 === true) {
                count++
            }
            if (PartialMatches.DoyouwatchTV === profiletomatch.DoyouwatchTV)
                count++;
            if (PartialMatches.DoyoulistentoMusic === profiletomatch.DoyoulistentoMusic)
                count++;
            if (PartialMatches.Doyouwearmakeupinfrontofnonmahrams === profiletomatch.Doyouwearmakeupinfrontofnonmahrams)
                count++;
            if (PartialMatches.youngestageyouarelookingfor === profiletomatch.youngestageyouarelookingfor)
                count++;
            if (PartialMatches.oldestageyouarelookingfor === profiletomatch.oldestageyouarelookingfor) {
                count++;
            }
            let result8 = equals(PartialMatches.Whattypeofhijabmatcheswithwhatyourelookingforinawife, profiletomatch.Whattypeofhijabmatcheswithwhatyourelookingforinawife)
            if (result8 === true) {
                count++
            }
            if (PartialMatches.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab === profiletomatch.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab) {
                count++;
            }
            let result9 = equals(PartialMatches.Whichmaritalstatusmatchwithwhatyouarelookingformen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingformen)
            if (result9 === true) {
                count++
            }
            let result10 = equals(PartialMatches.Whichmaritalstatusmatchwithwhatyouarelookingforwomen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingforwomen)
            if (result10 === true) {
                count++
            }
            let result11 = equals(PartialMatches.Wouldyouconsidermarryingsomeonewhoisalreadymarried, profiletomatch.Wouldyouconsidermarryingsomeonewhoisalreadymarried)
            if (result11 === true) {
                count++
            }
            if (PartialMatches.Wouldyoumarrysomeonewhoalreadyhaschildren === profiletomatch.Wouldyoumarrysomeonewhoalreadyhaschildren)
                count++;
            if (PartialMatches.Wouldyoumarrysomeonewhohadmentalhealthproblems === profiletomatch.Wouldyoumarrysomeonewhohadmentalhealthproblems)
                count++;
            if (PartialMatches.Wouldyoumarrysomeonewhohadphysicaldisabilities === profiletomatch.Wouldyoumarrysomeonewhohadphysicaldisabilities) {
                count++;
            }
            let result12 = _.isEqual(PartialMatches.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship, profiletomatch.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship)
            if (result12 === true) {
                count++;
            }
            let result13 = _.isEqual(PartialMatches.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner, profiletomatch.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner)
            if (result13 === true) {
                count++;
            }
            if (PartialMatches.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife === profiletomatch.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife) {
                count++;
            }
            let result14 = _.isEqual(PartialMatches.Whichcountryorcountriesdoyoulivein, profiletomatch.Whichcountryorcountriesdoyoulivein)
            if (result14 === true) {
                count++;
            }
            let result15 = _.isEqual(PartialMatches.Whichcitytownvillagedoyoulivein, profiletomatch.Whichcitytownvillagedoyoulivein)
            if (result15 === true) {
                count++;
            }
            let result16 = _.isEqual(PartialMatches.Whichcountryorcountriesdoyouholdcitizenship, profiletomatch.Whichcountryorcountriesdoyouholdcitizenship)
            if (result16 === true) {
                count++;
            }
            if (PartialMatches.Whatisyourmaritalstatusmen === profiletomatch.Whatisyourmaritalstatusmen)
                count++;
            if (PartialMatches.Whatisyourmaritalstatuswomen === profiletomatch.Whatisyourmaritalstatuswomen)
                count++;
            if (PartialMatches.Doyouprayallofthe5dailyprayers === profiletomatch.Doyouprayallofthe5dailyprayers)
                count++;
            if (PartialMatches.Doyoucoveryourhairfromnonmahrams === profiletomatch.Doyoucoveryourhairfromnonmahrams)
                count++;
            if (PartialMatches.Whatareyourpreferredlivingarrangementsaftermarriage === profiletomatch.Whatareyourpreferredlivingarrangementsaftermarriage)
                count++;
            if (PartialMatches.Doyouhaveanyphysicaldisabilities === profiletomatch.Doyouhaveanyphysicaldisabilities)
                count++;
            if (PartialMatches.Doyouhaveanymentalhealthproblems === profiletomatch.Doyouhaveanymentalhealthproblems)
                count++;
            if (PartialMatches.Doyouhaveanychildren === profiletomatch.Doyouhaveanychildren)
                count++;
            if (PartialMatches.Doyouwantchildrenaftermarriage === profiletomatch.Doyouwantchildrenaftermarriage)
                count++;
            if (PartialMatches.Areyouwillingtorelocateaftermarriage === profiletomatch.Areyouwillingtorelocateaftermarriage)
                count++;
            if (PartialMatches.DidyourevertconverttoIslam === profiletomatch.DidyourevertconverttoIslam)
                count++;
            if (PartialMatches.Whatistheshortestheightyoufindcompatible === profiletomatch.Whatistheshortestheightyoufindcompatible)
                count++;
            if (PartialMatches.Whatsthetallestheightyoufindcompatible === profiletomatch.Whatsthetallestheightyoufindcompatible)
                count++;
            if (PartialMatches.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches === profiletomatch.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches)
                count++;
            if (PartialMatches.Smallestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Smallestdresssizethatmeetsyourrequirementsforawife)
                count++;
            if (PartialMatches.Largestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Largestdresssizethatmeetsyourrequirementsforawife)
                count++;
            if (PartialMatches.Whichbuildmatchesyourpreference === profiletomatch.Whichbuildmatchesyourpreference)
                count++;
            if (PartialMatches.Whatisyourheight === profiletomatch.Whatisyourheight)
                count++;
            if (PartialMatches.Yourdresssize === profiletomatch.Yourdresssize)
                count++;
            if (PartialMatches.Yourwaistsizeininches === profiletomatch.Yourwaistsizeininches)
                count++;
            if (PartialMatches.Whichbuildbestdescribesyou === profiletomatch.Whichbuildbestdescribesyou)
                count++;
            if (PartialMatches.Whichstyleofbearddoyouhave === profiletomatch.Whichstyleofbearddoyouhave)
                count++;
            if (PartialMatches.Whatisyourethnicity === profiletomatch.Whatisyourethnicity)
                count++;
            if (PartialMatches.Areyourfamilyreligious === profiletomatch.Areyourfamilyreligious)
                count++;
            if (PartialMatches.WhatsectfollowingofIslamareyourfamilypractising === profiletomatch.WhatsectfollowingofIslamareyourfamilypractising)
                count++;
            if (PartialMatches.Howisyourrelationshipwithyourfamily === profiletomatch.Howisyourrelationshipwithyourfamily)
                count++;
            if (PartialMatches.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah === profiletomatch.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah)
                count++;
            if (PartialMatches.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends === profiletomatch.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends)
                count++;
            if (PartialMatches.Areyourfriendsreligious === profiletomatch.Areyourfriendsreligious)
                count++;
            if (PartialMatches.WhatsectfollowingofIslamdoyourfriendspractice === profiletomatch.WhatsectfollowingofIslamdoyourfriendspractice)
                count++;
            if (PartialMatches.Howmightyourfriendsdescribeyourpersonality === profiletomatch.Howmightyourfriendsdescribeyourpersonality)
                count++;
            if (PartialMatches.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends)
                count++;
            if (PartialMatches.Wouldyouwantyourfuturewifetofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturewifetofreemixwithyourfriends)
                count++;
            if (PartialMatches.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply)
                count++;
            if (PartialMatches.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply)
                count++;
            if (PartialMatches.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted === profiletomatch.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted)
                count++;
            if (PartialMatches.Whatisyourprofession === profiletomatch.Whatisyourprofession)
                count++;
            if (PartialMatches.Whatisyourlevelofeducation === profiletomatch.Whatisyourlevelofeducation)
                count++;
            if (PartialMatches.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole === profiletomatch.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole)
                count++;
            if ((count<=65)&&(count>=45)) {
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