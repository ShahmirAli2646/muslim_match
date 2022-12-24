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
        var perPage = 3
        var page = Math.max(0, req.params.page)
        //run matching algorithm
        const profiletomatch = await Profile.findOne({ user: userId })
        //now return profiles that match this profile fully
        const PartialMatches = await Profile.find({})
        const FinalResult = PartialMatches.filter(function (item) {

            var count = 0;
            let result = equals(item.followingforspouse, profiletomatch.followingforspouse)
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
            let result2 = equals(item.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc, profiletomatch.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc)
            if (result2 === true) {
                count++
            }
            let result3 = equals(item.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc, profiletomatch.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc)
            if (result3 === true) {
                count++
            }
            let result4 = equals(item.Whichbeardstylemeetyourpreferences, profiletomatch.Whichbeardstylemeetyourpreferences)
            if (result4 === true) {
                count++
            }
            if (item.Doyouwantawifewhowearsmakeupinfrontofnonmahrams === profiletomatch.Doyouwantawifewhowearsmakeupinfrontofnonmahrams) {
                count++;
            }
            let result5 = equals(item.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply, profiletomatch.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply)
            if (result5 === true) {
                count++
            }
            if (item.Doyoufreemixwithnonmahramfemales === profiletomatch.Doyoufreemixwithnonmahramfemales)
                count++;
            if (item.Doyoufreemixwithnonmahrammen === profiletomatch.Doyoufreemixwithnonmahrammen) {
                count++;
            }
            let result6 = equals(item.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc, profiletomatch.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc)
            if (result6 === true) {
                count++
            }
            let result7 = equals(item.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc, profiletomatch.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc)
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
            let result8 = equals(item.Whattypeofhijabmatcheswithwhatyourelookingforinawife, profiletomatch.Whattypeofhijabmatcheswithwhatyourelookingforinawife)
            if (result8 === true) {
                count++
            }
            if (item.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab === profiletomatch.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab) {
                count++;
            }
            let result9 = equals(item.Whichmaritalstatusmatchwithwhatyouarelookingformen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingformen)
            if (result9 === true) {
                count++
            }
            let result10 = equals(item.Whichmaritalstatusmatchwithwhatyouarelookingforwomen, profiletomatch.Whichmaritalstatusmatchwithwhatyouarelookingforwomen)
            if (result10 === true) {
                count++
            }
            if(item.Wouldyouconsidermarryingsomeonewhoisalreadymarried===profiletomatch.Wouldyouconsidermarryingsomeonewhoisalreadymarried){
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