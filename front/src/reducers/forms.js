import {
    START_FORM,
    APPEARANCE_FORM,
    BASICS_FORM,
    DEEN_FORM,
    FINISH_FORM,
    PROFESSION_FORM,
    FAMILY_RELATIONS_FORM,
    FRIENDSHIPS_FORM,
    LIFESTYLE_FORM,
} from "../actions/types";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    phone: null,
    purpose: null,
    gender: null,
    birthdate: null,
    followingforspouse: [],
    WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted: null,
    TheIslamicteachingssectthatyoufollow: null,
    Whichscholarsdoyoutakeknowledgefrom: null,
    AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails: null,
    Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid: null,
    DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk: null,
    DoyouwanttomakehijraonedayinshaAllah: null,
    DoyouvoluntaryFast: null,
    CanyoureadandorunderstandanyArabic: null,
    DoyoureadQuran: null,
    MemorizedanyQuranifsohowmuch: null,
    Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc: [],
    Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc: [],
    Whichbeardstylemeetyourpreferences: [],
    Doyouwantawifewhowearsmakeupinfrontofnonmahrams: null,
    DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply: [],
    Doyoufreemixwithnonmahramfemales: null,
    Doyoufreemixwithnonmahrammen: null,
    Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc: [],
    Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc: [],
    DoyouwatchTV: null,
    DoyoulistentoMusic: null,
    Doyouwearmakeupinfrontofnonmahrams: null,
    youngestageyouarelookingfor: null,
    oldestageyouarelookingfor: null,
    Whattypeofhijabmatcheswithwhatyourelookingforinawife: [],
    WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab: null,
    Whichmaritalstatusmatchwithwhatyouarelookingfor: [],
    Whichmaritalstatusmatchwithwhatyouarelookingfor: [],
    Wouldyouconsidermarryingsomeonewhoisalreadymarried: null,
    Wouldyoumarrysomeonewhoalreadyhaschildren: null,
    Wouldyoumarrysomeonewhohadmentalhealthproblems: null,
    Wouldyoumarrysomeonewhohadphysicaldisabilities: null,
    Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship: [],
    Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner: [],
    WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife: null,
    Whichcountryorcountriesdoyoulivein: [],
    Whichcitytownvillagedoyoulivein: [],
    Whichcountryorcountriesdoyouholdcitizenship: [],
    Whatisyourmaritalstatus: null,
    Whatisyourmaritalstatus: null,
    Doyouprayallofthe5dailyprayers: null,
    Doyoucoveryourhairfromnonmahrams: null,
    Whatareyourpreferredlivingarrangementsaftermarriage: null,
    Doyouhaveanyphysicaldisabilities: null,
    Doyouhaveanymentalhealthproblems: null,
    Doyouhaveanychildren: null,
    Doyouwantchildrenaftermarriage: null,
    Areyouwillingtorelocateaftermarriage: null,
    DidyourevertconverttoIslam: null,
    Whatistheshortestheightyoufindcompatible: null,
    Whatsthetallestheightyoufindcompatible: null,
    WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches: null,
    Smallestdresssizethatmeetsyourrequirementsforawife: null,
    Largestdresssizethatmeetsyourrequirementsforawife: null,
    Whichbuildmatchesyourpreference: null,
    Whatisyourheight: null,
    Yourdresssize: null,
    Yourwaistsizeininches: null,
    Whichbuildbestdescribesyou: null,
    Whichstyleofbearddoyouhave: null,
    Whatisyourethnicity: null,
    Areyourfamilyreligious: null,
    WhatsectfollowingofIslamareyourfamilypractising: null,
    Howisyourrelationshipwithyourfamily: null,
    WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah: null,
    DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends: null,
    Areyourfriendsreligious: null,
    WhatsectfollowingofIslamdoyourfriendspractice: null,
    Howmightyourfriendsdescribeyourpersonality: null,
    Wouldyouwantyourfuturehusbandtofreemixwithyourfriends: null,
    Wouldyouwantyourfuturewifetofreemixwithyourfriends: null,
    Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply: null,
    Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply: null,
    Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted: null,
    Whatisyourprofession: null,
    Whatisyourlevelofeducation: null,
    WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole: null,
    Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor: null,
    suggestions: null,
    newsletter: null,
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case START_FORM:
            return {
                ...state,
                phone: payload.phone,
                purpose: payload.purpose,
                gender: payload.gender,
                birthdate: payload.birthdate

            };
        case APPEARANCE_FORM:
            return {
                ...state,
                Whatistheshortestheightyoufindcompatible: payload.Whatistheshortestheightyoufindcompatible,
                Whatsthetallestheightyoufindcompatible: payload.Whatsthetallestheightyoufindcompatible,
                WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches: payload.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches,
                Smallestdresssizethatmeetsyourrequirementsforawife: payload.Smallestdresssizethatmeetsyourrequirementsforawife,
                Largestdresssizethatmeetsyourrequirementsforawife: payload.Largestdresssizethatmeetsyourrequirementsforawife,
                Whichbuildmatchesyourpreference: payload.Whichbuildmatchesyourpreference,
                Whatisyourheight: payload.Whatisyourheight,
                Yourdresssize: payload.Yourdresssize,
                Yourwaistsizeininches: payload.Yourwaistsizeininches,
                Whichbuildbestdescribesyou: payload.Whichbuildbestdescribesyou,
                Whichstyleofbearddoyouhave: payload.Whichstyleofbearddoyouhave,
                Whatisyourethnicity: payload.Whatisyourethnicity,
            };
        case BASICS_FORM:
            return {
                ...state,
                youngestageyouarelookingfor: payload.youngestageyouarelookingfor,
                oldestageyouarelookingfor: payload.oldestageyouarelookingfor,
                Whattypeofhijabmatcheswithwhatyourelookingforinawife: payload.Whattypeofhijabmatcheswithwhatyourelookingforinawife,
                WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab: payload.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab,
                Whichmaritalstatusmatchwithwhatyouarelookingfor: payload.Whichmaritalstatusmatchwithwhatyouarelookingfor,
                Whichmaritalstatusmatchwithwhatyouarelookingfor: payload.Whichmaritalstatusmatchwithwhatyouarelookingfor,
                Wouldyouconsidermarryingsomeonewhoisalreadymarried: payload.Wouldyouconsidermarryingsomeonewhoisalreadymarried,
                Wouldyoumarrysomeonewhoalreadyhaschildren: payload.Wouldyoumarrysomeonewhoalreadyhaschildren,
                Wouldyoumarrysomeonewhohadmentalhealthproblems: payload.Wouldyoumarrysomeonewhohadmentalhealthproblems,
                Wouldyoumarrysomeonewhohadphysicaldisabilities: payload.Wouldyoumarrysomeonewhohadphysicaldisabilities,
                Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship: payload.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship,
                Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner: payload.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner,
                WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife: payload.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife,
                Whichcountryorcountriesdoyoulivein: payload.Whichcountryorcountriesdoyoulivein,
                Whichcitytownvillagedoyoulivein: payload.Whichcitytownvillagedoyoulivein,
                Whichcountryorcountriesdoyouholdcitizenship: payload.Whichcountryorcountriesdoyouholdcitizenship,
                Whatisyourmaritalstatus: payload.Whatisyourmaritalstatus,
                Whatisyourmaritalstatus: payload.Whatisyourmaritalstatus,
                Doyouprayallofthe5dailyprayers: payload.Doyouprayallofthe5dailyprayers,
                Doyoucoveryourhairfromnonmahrams: payload.Doyoucoveryourhairfromnonmahrams,
                Whatareyourpreferredlivingarrangementsaftermarriage: payload.Whatareyourpreferredlivingarrangementsaftermarriage,
                Doyouhaveanyphysicaldisabilities: payload.Doyouhaveanyphysicaldisabilities,
                Doyouhaveanymentalhealthproblems: payload.Doyouhaveanymentalhealthproblems,
                Doyouhaveanychildren: payload.Doyouhaveanychildren,
                Doyouwantchildrenaftermarriage: payload.Doyouwantchildrenaftermarriage,
                Areyouwillingtorelocateaftermarriage: payload.Areyouwillingtorelocateaftermarriage,
                DidyourevertconverttoIslam: payload.DidyourevertconverttoIslam
            };
        case DEEN_FORM:
            return {
                ...state,
                followingforspouse: payload.followingforspouse,
                WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted: payload.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted,
                TheIslamicteachingssectthatyoufollow: payload.TheIslamicteachingssectthatyoufollow,
                Whichscholarsdoyoutakeknowledgefrom: payload.Whichscholarsdoyoutakeknowledgefrom,
                AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails: payload.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails,
                Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid: payload.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid,
                DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk: payload.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk,
                DoyouwanttomakehijraonedayinshaAllah: payload.DoyouwanttomakehijraonedayinshaAllah,
                DoyouvoluntaryFast: payload.DoyouvoluntaryFast,
                CanyoureadandorunderstandanyArabic: payload.CanyoureadandorunderstandanyArabic,
                DoyoureadQuran: payload.DoyoureadQuran,
                MemorizedanyQuranifsohowmuch: payload.MemorizedanyQuranifsohowmuch,
            };
        case FINISH_FORM:
            return {
                ...state,
                WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole: payload.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole,
                Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor: payload.Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor,
                suggestions: payload.suggestions,
                newsletter: payload.newsletter,
            };
        case PROFESSION_FORM:
            return {
                ...state,
                Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply: payload.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply,
                Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply: payload.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply,
                Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted: payload.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted,
                Whatisyourprofession: payload.Whatisyourprofession,
                Whatisyourlevelofeducation: payload.Whatisyourlevelofeducation,
            };
        case FAMILY_RELATIONS_FORM:
            return {
                ...state,
                Areyourfamilyreligious: payload.Areyourfamilyreligious,
                WhatsectfollowingofIslamareyourfamilypractising: payload.WhatsectfollowingofIslamareyourfamilypractising,
                Howisyourrelationshipwithyourfamily: payload.Howisyourrelationshipwithyourfamily,
                WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah: payload.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah,
            };
        case FRIENDSHIPS_FORM:
            return {
                ...state,
                DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends: payload.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends,
                Areyourfriendsreligious: payload.Areyourfriendsreligious,
                WhatsectfollowingofIslamdoyourfriendspractice: payload.WhatsectfollowingofIslamdoyourfriendspractice,
                Howmightyourfriendsdescribeyourpersonality: payload.Howmightyourfriendsdescribeyourpersonality,
                Wouldyouwantyourfuturehusbandtofreemixwithyourfriends: payload.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends,
                Wouldyouwantyourfuturewifetofreemixwithyourfriends: payload.Wouldyouwantyourfuturewifetofreemixwithyourfriends,
            };
        case LIFESTYLE_FORM:
            return {
                ...state,
                Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc: payload.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc,
                Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc: payload.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc,
                Whichbeardstylemeetyourpreferences: payload.Whichbeardstylemeetyourpreferences,
                Doyouwantawifewhowearsmakeupinfrontofnonmahrams: payload.Doyouwantawifewhowearsmakeupinfrontofnonmahrams,
                DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply: payload.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply,
                Doyoufreemixwithnonmahramfemales: payload.Doyoufreemixwithnonmahramfemales,
                Doyoufreemixwithnonmahrammen: payload.Doyoufreemixwithnonmahrammen,
                Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc: payload.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc,
                Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc: payload.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc,
                DoyouwatchTV: payload.DoyouwatchTV,
                DoyoulistentoMusic: payload.DoyoulistentoMusic,
                Doyouwearmakeupinfrontofnonmahrams: payload.Doyouwearmakeupinfrontofnonmahrams,
            };
        default:
            return state;
    }
}