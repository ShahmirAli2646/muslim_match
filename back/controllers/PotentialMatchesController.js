const User = require("../model/user");
const Profile = require("../model/profile")
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const { equals } = require("./equalityhelper");
const _ = require('lodash');
const profile = require("../model/profile");

module.exports = {
    PotentialMatches: async (req, res) => {
        const userId = req.params.userId;
        var perPage = 5
        var page = Math.max(0, req.params.page)
        //run matching algorithm
        const profiletomatch = await Profile.findOne({ user: userId })
        //now return profiles that match this profile fully
        const PotentialMatches = await Profile.find({})
        const FinalResult = PotentialMatches.filter(function (item) {

            var count = 0;
            let result = equals(PotentialMatches.followingforspouse, profiletomatch.followingforspouse)
            if (result === true) {
                count++
            }

            if (PotentialMatches.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted === profiletomatch.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted) {
                count++
            }
            if (PotentialMatches.TheIslamicteachingssectthatyoufollow === profiletomatch.TheIslamicteachingssectthatyoufollow) {
                count++
            }
            if (PotentialMatches.Whichscholarsdoyoutakeknowledgefrom === profiletomatch.Whichscholarsdoyoutakeknowledgefrom) {
                count++
            }
            if (PotentialMatches.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails === profiletomatch.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails)
                count++;
            if (PotentialMatches.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid === profiletomatch.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid)
                count++;
            if (PotentialMatches.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk === profiletomatch.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk)
                count++;
            if (PotentialMatches.DoyouwanttomakehijraonedayinshaAllah === profiletomatch.DoyouwanttomakehijraonedayinshaAllah)
                count++;
            if (PotentialMatches.DoyouvoluntaryFast === profiletomatch.DoyouvoluntaryFast)
                count++;
            if (PotentialMatches.CanyoureadandorunderstandanyArabic === profiletomatch.CanyoureadandorunderstandanyArabic)
                count++;
            if (PotentialMatches.DoyoureadQuran === profiletomatch.DoyoureadQuran)
                count++;
            if (PotentialMatches.MemorizedanyQuranifsohowmuch === profiletomatch.MemorizedanyQuranifsohowmuch) {
                count++;
            }
            let result2 = equals(PotentialMatches.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc, profiletomatch.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc)
            if (result2 === true) {
                count++
            }
            let result3 = equals(PotentialMatches.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc, profiletomatch.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc)
            if (result3 === true) {
                count++
            }
            let result4 = equals(PotentialMatches.Whichbeardstylemeetyourpreferences, profiletomatch.Whichbeardstylemeetyourpreferences)
            if (result4 === true) {
                count++
            }
            if (PotentialMatches.Doyouwantawifewhowearsmakeupinfrontofnonmahrams === profiletomatch.Doyouwantawifewhowearsmakeupinfrontofnonmahrams) {
                count++;
            }
            let result5 = equals(PotentialMatches.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply, profiletomatch.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply)
            if (result5 === true) {
                count++
            }
            if (PotentialMatches.Doyoufreemixwithnonmahramfemales === profiletomatch.Doyoufreemixwithnonmahramfemales)
                count++;
            if (PotentialMatches.Doyoufreemixwithnonmahrammen === profiletomatch.Doyoufreemixwithnonmahrammen) {
                count++;
            }
            let result6 = equals(PotentialMatches.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc, profiletomatch.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc)
            if (result6 === true) {
                count++
            }
            let result7 = equals(PotentialMatches.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc, profiletomatch.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc)
            if (result7 === true) {
                count++
            }
            if (PotentialMatches.DoyouwatchTV === profiletomatch.DoyouwatchTV)
                count++;
            if (PotentialMatches.DoyoulistentoMusic === profiletomatch.DoyoulistentoMusic)
                count++;
            if (PotentialMatches.Doyouwearmakeupinfrontofnonmahrams === profiletomatch.Doyouwearmakeupinfrontofnonmahrams)
                count++;
            if (PotentialMatches.youngestageyouarelookingfor === profiletomatch.youngestageyouarelookingfor)
                count++;
            if (PotentialMatches.oldestageyouarelookingfor === profiletomatch.oldestageyouarelookingfor) {
                count++;
            }
            let result8 = equals(PotentialMatches.Whattypeofhijabmatcheswithwhatyourelookingforinawife, profiletomatch.Whattypeofhijabmatcheswithwhatyourelookingforinawife)
            if (result8 === true) {
                count++
            }
            if (PotentialMatches.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab === profiletomatch.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab) {
                count++;
            }
            let result9 = equals(PotentialMatches.Whichmaritalstatusmatchwithwhatyouarelookingformen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingformen)
            if (result9 === true) {
                count++
            }
            let result10 = equals(PotentialMatches.Whichmaritalstatusmatchwithwhatyouarelookingforwomen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingforwomen)
            if (result10 === true) {
                count++
            }
            let result11 = equals(PotentialMatches.Wouldyouconsidermarryingsomeonewhoisalreadymarried, profiletomatch.Wouldyouconsidermarryingsomeonewhoisalreadymarried)
            if (result11 === true) {
                count++
            }
            if (PotentialMatches.Wouldyoumarrysomeonewhoalreadyhaschildren === profiletomatch.Wouldyoumarrysomeonewhoalreadyhaschildren)
                count++;
            if (PotentialMatches.Wouldyoumarrysomeonewhohadmentalhealthproblems === profiletomatch.Wouldyoumarrysomeonewhohadmentalhealthproblems)
                count++;
            if (PotentialMatches.Wouldyoumarrysomeonewhohadphysicaldisabilities === profiletomatch.Wouldyoumarrysomeonewhohadphysicaldisabilities) {
                count++;
            }
            let result12 = _.isEqual(PotentialMatches.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship, profiletomatch.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship)
            if (result12 === true) {
                count++;
            }
            let result13 = _.isEqual(PotentialMatches.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner, profiletomatch.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner)
            if (result13 === true) {
                count++;
            }
            if (PotentialMatches.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife === profiletomatch.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife) {
                count++;
            }
            let result14 = _.isEqual(PotentialMatches.Whichcountryorcountriesdoyoulivein, profiletomatch.Whichcountryorcountriesdoyoulivein)
            if (result14 === true) {
                count++;
            }
            let result15 = _.isEqual(PotentialMatches.Whichcitytownvillagedoyoulivein, profiletomatch.Whichcitytownvillagedoyoulivein)
            if (result15 === true) {
                count++;
            }
            let result16 = _.isEqual(PotentialMatches.Whichcountryorcountriesdoyouholdcitizenship, profiletomatch.Whichcountryorcountriesdoyouholdcitizenship)
            if (result16 === true) {
                count++;
            }
            if (PotentialMatches.Whatisyourmaritalstatusmen === profiletomatch.Whatisyourmaritalstatusmen)
                count++;
            if (PotentialMatches.Whatisyourmaritalstatuswomen === profiletomatch.Whatisyourmaritalstatuswomen)
                count++;
            if (PotentialMatches.Doyouprayallofthe5dailyprayers === profiletomatch.Doyouprayallofthe5dailyprayers)
                count++;
            if (PotentialMatches.Doyoucoveryourhairfromnonmahrams === profiletomatch.Doyoucoveryourhairfromnonmahrams)
                count++;
            if (PotentialMatches.Whatareyourpreferredlivingarrangementsaftermarriage === profiletomatch.Whatareyourpreferredlivingarrangementsaftermarriage)
                count++;
            if (PotentialMatches.Doyouhaveanyphysicaldisabilities === profiletomatch.Doyouhaveanyphysicaldisabilities)
                count++;
            if (PotentialMatches.Doyouhaveanymentalhealthproblems === profiletomatch.Doyouhaveanymentalhealthproblems)
                count++;
            if (PotentialMatches.Doyouhaveanychildren === profiletomatch.Doyouhaveanychildren)
                count++;
            if (PotentialMatches.Doyouwantchildrenaftermarriage === profiletomatch.Doyouwantchildrenaftermarriage)
                count++;
            if (PotentialMatches.Areyouwillingtorelocateaftermarriage === profiletomatch.Areyouwillingtorelocateaftermarriage)
                count++;
            if (PotentialMatches.DidyourevertconverttoIslam === profiletomatch.DidyourevertconverttoIslam)
                count++;
            if (PotentialMatches.Whatistheshortestheightyoufindcompatible === profiletomatch.Whatistheshortestheightyoufindcompatible)
                count++;
            if (PotentialMatches.Whatsthetallestheightyoufindcompatible === profiletomatch.Whatsthetallestheightyoufindcompatible)
                count++;
            if (PotentialMatches.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches === profiletomatch.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches)
                count++;
            if (PotentialMatches.Smallestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Smallestdresssizethatmeetsyourrequirementsforawife)
                count++;
            if (PotentialMatches.Largestdresssizethatmeetsyourrequirementsforawife === profiletomatch.Largestdresssizethatmeetsyourrequirementsforawife)
                count++;
            if (PotentialMatches.Whichbuildmatchesyourpreference === profiletomatch.Whichbuildmatchesyourpreference)
                count++;
            if (PotentialMatches.Whatisyourheight === profiletomatch.Whatisyourheight)
                count++;
            if (PotentialMatches.Yourdresssize === profiletomatch.Yourdresssize)
                count++;
            if (PotentialMatches.Yourwaistsizeininches === profiletomatch.Yourwaistsizeininches)
                count++;
            if (PotentialMatches.Whichbuildbestdescribesyou === profiletomatch.Whichbuildbestdescribesyou)
                count++;
            if (PotentialMatches.Whichstyleofbearddoyouhave === profiletomatch.Whichstyleofbearddoyouhave)
                count++;
            if (PotentialMatches.Whatisyourethnicity === profiletomatch.Whatisyourethnicity)
                count++;
            if (PotentialMatches.Areyourfamilyreligious === profiletomatch.Areyourfamilyreligious)
                count++;
            if (PotentialMatches.WhatsectfollowingofIslamareyourfamilypractising === profiletomatch.WhatsectfollowingofIslamareyourfamilypractising)
                count++;
            if (PotentialMatches.Howisyourrelationshipwithyourfamily === profiletomatch.Howisyourrelationshipwithyourfamily)
                count++;
            if (PotentialMatches.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah === profiletomatch.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah)
                count++;
            if (PotentialMatches.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends === profiletomatch.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends)
                count++;
            if (PotentialMatches.Areyourfriendsreligious === profiletomatch.Areyourfriendsreligious)
                count++;
            if (PotentialMatches.WhatsectfollowingofIslamdoyourfriendspractice === profiletomatch.WhatsectfollowingofIslamdoyourfriendspractice)
                count++;
            if (PotentialMatches.Howmightyourfriendsdescribeyourpersonality === profiletomatch.Howmightyourfriendsdescribeyourpersonality)
                count++;
            if (PotentialMatches.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends)
                count++;
            if (PotentialMatches.Wouldyouwantyourfuturewifetofreemixwithyourfriends === profiletomatch.Wouldyouwantyourfuturewifetofreemixwithyourfriends)
                count++;
            if (PotentialMatches.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply)
                count++;
            if (PotentialMatches.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply === profiletomatch.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply)
                count++;
            if (PotentialMatches.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted === profiletomatch.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted)
                count++;
            if (PotentialMatches.Whatisyourprofession === profiletomatch.Whatisyourprofession)
                count++;
            if (PotentialMatches.Whatisyourlevelofeducation === profiletomatch.Whatisyourlevelofeducation)
                count++;
            if (PotentialMatches.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole === profiletomatch.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole)
                count++;
            if ((count>=20)&&(count<=45)) {
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