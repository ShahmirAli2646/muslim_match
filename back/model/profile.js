const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  phone:{type:String , default:null},
  purpose:{type:String , default:null},
  gender:{type:String , default:null},
  birthdate:{type:String , default:null},
  followingforspouse:[{type:String , default:null}],
  WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted:{type:String , default:null},
  TheIslamicteachingssectthatyoufollow:{type:String , default:null},
  Whichscholarsdoyoutakeknowledgefrom:{type:String ,default:null},
  AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails:{type:String , default:null},
  Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid:{type:String , default:null},
  DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk:{type:String , default:null},
  DoyouwanttomakehijraonedayinshaAllah:{type:String , default:null},
  DoyouvoluntaryFast:{type:String , default:null},
  CanyoureadandorunderstandanyArabic:{type:String , default:null},
  DoyoureadQuran:{type:String , default:null},
  MemorizedanyQuranifsohowmuch:{type:String , default:null},
  Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc:[{type:String , default:null}],
  Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc:[{type:String, default:null}],
  Whichbeardstylemeetyourpreferences:[{type:String , default:null}],
  Doyouwantawifewhowearsmakeupinfrontofnonmahrams:{type:String , default:null},
  DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply:[{type:Array , default:null}],
  Doyoufreemixwithnonmahramfemales:{type:String , default:null},
  Doyoufreemixwithnonmahrammen:{type:String , default:null},
  Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc:[{type:String , default:null}],
  Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc:[{type:Array , default:null}],
  DoyouwatchTV:{type:String , default:null},
  DoyoulistentoMusic:{type:String , default:null},
  Doyouwearmakeupinfrontofnonmahrams:{type:String , default:null},
  youngestageyouarelookingfor:{type:String ,default:null},
  oldestageyouarelookingfor:{type:String , default:null},
  Whattypeofhijabmatcheswithwhatyourelookingforinawife:[{type:String , default:null}],
  WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab:{type:String , default:null},
  Whichmaritalstatusmatchwithwhatyouarelookingformen :[{type:String , default:null}],
  Whichmaritalstatusmatchwithwhatyouarelookingforwomen :[{type:String , default:null}],
  Wouldyouconsidermarryingsomeonewhoisalreadymarried:{type:String , default:null},
  Wouldyoumarrysomeonewhoalreadyhaschildren:{type:String  ,default:null},
  Wouldyoumarrysomeonewhohadmentalhealthproblems:{type:String , default:null},
  Wouldyoumarrysomeonewhohadphysicaldisabilities:{type:String  ,default:null},
  Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship:{type:Object , default:null},
  Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner:{type:Object , default:null},
  WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife:{type:String , default:null},
  Whichcountryorcountriesdoyoulivein:{type:Object , default:null},
  Whichcitytownvillagedoyoulivein:{type:Object , default:null},
  Whichcountryorcountriesdoyouholdcitizenship:{type:Object , default:null},
  Whatisyourmaritalstatusmen:{type:String , default:null},
  Whatisyourmaritalstatuswomen:{type:String , default:null},
  Doyouprayallofthe5dailyprayers:{type:String , default:null},
  Doyoucoveryourhairfromnonmahrams:{type:String , default:null},
  Whatareyourpreferredlivingarrangementsaftermarriage:{type:String , default:null},
  Doyouhaveanyphysicaldisabilities:{type:String , default:null},
  Doyouhaveanymentalhealthproblems:{type:String , default:null},
  Doyouhaveanychildren:{type:String , default:null},
  Doyouwantchildrenaftermarriage:{type:String , default:null},
  Areyouwillingtorelocateaftermarriage:{type:String  ,default:null},
  DidyourevertconverttoIslam:{type:String , default:null},
  Whatistheshortestheightyoufindcompatible:{type:String , default:null},
  Whatsthetallestheightyoufindcompatible:{type:String , default:null},
  WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches:{type:String , default:null},
  Smallestdresssizethatmeetsyourrequirementsforawife:{type:String , default:null},
  Largestdresssizethatmeetsyourrequirementsforawife:{type:String , default:null},
  Whichbuildmatchesyourpreference:{type:String , default:null},
  Whatisyourheight:{type:String , default:null},
  Yourdresssize:{type:String  , default:null},
  Yourwaistsizeininches:{type:String , default:null},
  Whichbuildbestdescribesyou:{type:String , default:null},
  Whichstyleofbearddoyouhave:{type:String , default:null},
  Whatisyourethnicity:{type:String , default:null},
  Areyourfamilyreligious:{type:String , default:null},
  WhatsectfollowingofIslamareyourfamilypractising:{type:String , default:null},
  Howisyourrelationshipwithyourfamily:{type:String , default:null},
  WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah:{type:String , default:null},
  DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends:{type:String , default:null},
  Areyourfriendsreligious:{type:String , default:null},
  WhatsectfollowingofIslamdoyourfriendspractice:{type:String , default:null},
  Howmightyourfriendsdescribeyourpersonality:{type:String , default:null},
  Wouldyouwantyourfuturehusbandtofreemixwithyourfriends:{type:String , default:null},
  Wouldyouwantyourfuturewifetofreemixwithyourfriends:{type:String , default:null},
  Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply:{type:String , default:null},
  Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply:{type:String , default:null},
  Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted:{type:String , default:null},
  Whatisyourprofession:{type:String , default:null},
  Whatisyourlevelofeducation:{type:String ,default:null},
  WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole:{type:String , default:null},
  Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor:{type:String , default:null},
  suggestions:{type:String , default:null},
  newsletter:{type:String , default:null},
  user: {type:mongoose.Schema.Types.ObjectId,
    ref:'user'
 },
});



module.exports = mongoose.model("profile", profileSchema);