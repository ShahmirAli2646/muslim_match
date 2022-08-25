const mongoose = require("mongoose");

const importantSchema = new mongoose.Schema({
  phone:{type:Boolean , default:false},
  purpose:{type:Boolean , default:false},
  gender:{type:Boolean , default:false},
  birthdate:{type:Boolean , default:false},
  followingforspouse:{type:Boolean , default:false},
  WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted:{type:Boolean , default:false},
  TheIslamicteachingssectthatyoufollow:{type:Boolean , default:false},
  Whichscholarsdoyoutakeknowledgefrom:{type:Boolean , default:false},
  AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails:{type:Boolean , default:false},
  Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid:{type:Boolean , default:false},
  DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk:{type:Boolean , default:false},
  DoyouwanttomakehijraonedayinshaAllah:{type:Boolean , default:false},
  DoyouvoluntaryFast:{type:Boolean , default:false},
  CanyoureadandorunderstandanyArabic:{type:Boolean , default:false},
  DoyoureadQuran:{type:Boolean , default:false},
  MemorizedanyQuranifsohowmuch:{type:Boolean , default:false},
  Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc:{type:Boolean , default:false},
  Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc:{type:Boolean , default:false},
  Whichbeardstylemeetyourpreferences:{type:Boolean , default:false},
  Doyouwantawifewhowearsmakeupinfrontofnonmahrams:{type:Boolean , default:false},
  DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply:{type:Boolean , default:false},
  Doyoufreemixwithnonmahramfemales:{type:Boolean , default:false},
  Doyoufreemixwithnonmahrammen:{type:Boolean , default:false},
  Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc:{type:Boolean , default:false},
  Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc:{type:Boolean , default:false},
  DoyouwatchTV:{type:Boolean , default:false},
  DoyoulistentoMusic:{type:Boolean , default:false},
  Doyouwearmakeupinfrontofnonmahrams:{type:Boolean , default:false},
  youngestageyouarelookingfor:{type:Boolean , default:false},
  oldestageyouarelookingfor:{type:Boolean , default:false},
  Whattypeofhijabmatcheswithwhatyourelookingforinawife:{type:Boolean , default:false},
  WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab:{type:Boolean , default:false},
  Whichmaritalstatusmatchwithwhatyouarelookingformen :{type:Boolean , default:false},
  Whichmaritalstatusmatchwithwhatyouarelookingforwomen :{type:Boolean , default:false},
  Wouldyouconsidermarryingsomeonewhoisalreadymarried:{type:Boolean , default:false},
  Wouldyoumarrysomeonewhoalreadyhaschildren:{type:String  ,default:null},
  Wouldyoumarrysomeonewhohadmentalhealthproblems:{type:Boolean , default:false},
  Wouldyoumarrysomeonewhohadphysicaldisabilities:{type:String  ,default:null},
  Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship:{type:Boolean , default:false},
  Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner:{type:Boolean , default:false},
  WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife:{type:Boolean , default:false},
  Whichcountryorcountriesdoyoulivein:{type:Boolean , default:false},
  Whichcitytownvillagedoyoulivein:{type:Boolean , default:false},
  Whichcountryorcountriesdoyouholdcitizenship:{type:Boolean , default:false},
  Whatisyourmaritalstatusmen:{type:Boolean , default:false},
  Whatisyourmaritalstatuswomen:{type:Boolean , default:false},
  Doyouprayallofthe5dailyprayers:{type:Boolean , default:false},
  Doyoucoveryourhairfromnonmahrams:{type:Boolean , default:false},
  Whatareyourpreferredlivingarrangementsaftermarriage:{type:Boolean , default:false},
  Doyouhaveanyphysicaldisabilities:{type:Boolean , default:false},
  Doyouhaveanymentalhealthproblems:{type:Boolean , default:false},
  Doyouhaveanychildren:{type:Boolean , default:false},
  Doyouwantchildrenaftermarriage:{type:Boolean , default:false},
  Areyouwillingtorelocateaftermarriage:{type:String  ,default:null},
  DidyourevertconverttoIslam:{type:Boolean , default:false},
  Whatistheshortestheightyoufindcompatible:{type:Boolean , default:false},
  Whatsthetallestheightyoufindcompatible:{type:Boolean , default:false},
  WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches:{type:Boolean , default:false},
  Smallestdresssizethatmeetsyourrequirementsforawife:{type:Boolean , default:false},
  Largestdresssizethatmeetsyourrequirementsforawife:{type:Boolean , default:false},
  Whichbuildmatchesyourpreference:{type:Boolean , default:false},
  Whatisyourheight:{type:Boolean , default:false},
  Yourdresssize:{type:String  , default:null},
  Yourwaistsizeininches:{type:Boolean , default:false},
  Whichbuildbestdescribesyou:{type:Boolean , default:false},
  Whichstyleofbearddoyouhave:{type:Boolean , default:false},
  Whatisyourethnicity:{type:Boolean , default:false},
  Areyourfamilyreligious:{type:Boolean , default:false},
  WhatsectfollowingofIslamareyourfamilypractising:{type:Boolean , default:false},
  Howisyourrelationshipwithyourfamily:{type:Boolean , default:false},
  WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah:{type:Boolean , default:false},
  DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends:{type:Boolean , default:false},
  Areyourfriendsreligious:{type:Boolean , default:false},
  WhatsectfollowingofIslamdoyourfriendspractice:{type:Boolean , default:false},
  Howmightyourfriendsdescribeyourpersonality:{type:Boolean , default:false},
  Wouldyouwantyourfuturehusbandtofreemixwithyourfriends:{type:Boolean , default:false},
  Wouldyouwantyourfuturewifetofreemixwithyourfriends:{type:Boolean , default:false},
  Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply:{type:Boolean , default:false},
  Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply:{type:Boolean , default:false},
  Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted:{type:Boolean , default:false},
  Whatisyourprofession:{type:Boolean , default:false},
  Whatisyourlevelofeducation:{type:Boolean , default:false},
  WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole:{type:Boolean , default:false},
  Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor:{type:Boolean , default:false},
  suggestions:{type:Boolean , default:false},
  newsletter:{type:Boolean , default:false},
  user: {type:mongoose.Schema.Types.ObjectId,
    ref:'user'
 },
});





module.exports = mongoose.model("important", importantSchema);