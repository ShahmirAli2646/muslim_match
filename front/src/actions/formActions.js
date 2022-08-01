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
} from "./types";
import UserService from '../services/user.service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SubmitStartForm = (phone, purpose, gender, birthdate) => (dispatch) => {
  dispatch({
    type: START_FORM,
    payload: {
      phone: phone,
      purpose: purpose,
      gender: gender,
      birthdate: birthdate
    },
  });
  toast('step1 complete')
};

export const SubmitAppearanceForm = (Whatistheshortestheightyoufindcompatible, Whatsthetallestheightyoufindcompatible, WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches,
  Smallestdresssizethatmeetsyourrequirementsforawife,
  Largestdresssizethatmeetsyourrequirementsforawife, Whichbuildmatchesyourpreference, Whatisyourheight, Yourdresssize,
  Yourwaistsizeininches, Whichbuildbestdescribesyou, Whichstyleofbearddoyouhave, Whatisyourethnicity
) => (dispatch) => {
  dispatch({
    type: APPEARANCE_FORM,
    payload: {
      Whatistheshortestheightyoufindcompatible: Whatistheshortestheightyoufindcompatible,
      Whatsthetallestheightyoufindcompatible: Whatsthetallestheightyoufindcompatible,
      WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches: WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches,
      Smallestdresssizethatmeetsyourrequirementsforawife: Smallestdresssizethatmeetsyourrequirementsforawife,
      Largestdresssizethatmeetsyourrequirementsforawife: Largestdresssizethatmeetsyourrequirementsforawife,
      Whichbuildmatchesyourpreference: Whichbuildmatchesyourpreference,
      Whatisyourheight: Whatisyourheight,
      Yourdresssize: Yourdresssize,
      Yourwaistsizeininches: Yourwaistsizeininches,
      Whichbuildbestdescribesyou: Whichbuildbestdescribesyou,
      Whichstyleofbearddoyouhave: Whichstyleofbearddoyouhave,
      Whatisyourethnicity: Whatisyourethnicity,
    },
  });
  toast('step2 complete')
};


export const SubmitBasicsForm = (youngestageyouarelookingfor, oldestageyouarelookingfor,
  Whattypeofhijabmatcheswithwhatyourelookingforinawife, WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab,
  Whichmaritalstatusmatchwithwhatyouarelookingformen, Whichmaritalstatusmatchwithwhatyouarelookingforwomen,
  Wouldyouconsidermarryingsomeonewhoisalreadymarried, Wouldyoumarrysomeonewhoalreadyhaschildren, Wouldyoumarrysomeonewhohadmentalhealthproblems,
  Wouldyoumarrysomeonewhohadphysicaldisabilities, Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship,
  Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner, WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife,
  Whichcountryorcountriesdoyoulivein, Whichcitytownvillagedoyoulivein, Whichcountryorcountriesdoyouholdcitizenship,
  Whatisyourmaritalstatusmen, Whatisyourmaritalstatuswomen, Doyouprayallofthe5dailyprayers, Doyoucoveryourhairfromnonmahrams,
  Whatareyourpreferredlivingarrangementsaftermarriage, Doyouhaveanyphysicaldisabilities, Doyouhaveanymentalhealthproblems, Doyouhaveanychildren,
  Doyouwantchildrenaftermarriage, Areyouwillingtorelocateaftermarriage, DidyourevertconverttoIslam

) => (dispatch) => {
  dispatch({
    type: BASICS_FORM,
    payload: {
      youngestageyouarelookingfor: youngestageyouarelookingfor,
      oldestageyouarelookingfor: oldestageyouarelookingfor,
      Whattypeofhijabmatcheswithwhatyourelookingforinawife: Whattypeofhijabmatcheswithwhatyourelookingforinawife,
      WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab: WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab,
      Whichmaritalstatusmatchwithwhatyouarelookingformen: Whichmaritalstatusmatchwithwhatyouarelookingformen,
      Whichmaritalstatusmatchwithwhatyouarelookingforwomen: Whichmaritalstatusmatchwithwhatyouarelookingforwomen,
      Wouldyouconsidermarryingsomeonewhoisalreadymarried: Wouldyouconsidermarryingsomeonewhoisalreadymarried,
      Wouldyoumarrysomeonewhoalreadyhaschildren: Wouldyoumarrysomeonewhoalreadyhaschildren,
      Wouldyoumarrysomeonewhohadmentalhealthproblems: Wouldyoumarrysomeonewhohadmentalhealthproblems,
      Wouldyoumarrysomeonewhohadphysicaldisabilities: Wouldyoumarrysomeonewhohadphysicaldisabilities,
      Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship: Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship,
      Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner: Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner,
      WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife: WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife,
      Whichcountryorcountriesdoyoulivein: Whichcountryorcountriesdoyoulivein,
      Whichcitytownvillagedoyoulivein: Whichcitytownvillagedoyoulivein,
      Whichcountryorcountriesdoyouholdcitizenship: Whichcountryorcountriesdoyouholdcitizenship,
      Whatisyourmaritalstatusmen: Whatisyourmaritalstatusmen,
      Whatisyourmaritalstatuswomen: Whatisyourmaritalstatuswomen,
      Doyouprayallofthe5dailyprayers: Doyouprayallofthe5dailyprayers,
      Doyoucoveryourhairfromnonmahrams: Doyoucoveryourhairfromnonmahrams,
      Whatareyourpreferredlivingarrangementsaftermarriage: Whatareyourpreferredlivingarrangementsaftermarriage,
      Doyouhaveanyphysicaldisabilities: Doyouhaveanyphysicaldisabilities,
      Doyouhaveanymentalhealthproblems: Doyouhaveanymentalhealthproblems,
      Doyouhaveanychildren: Doyouhaveanychildren,
      Doyouwantchildrenaftermarriage: Doyouwantchildrenaftermarriage,
      Areyouwillingtorelocateaftermarriage: Areyouwillingtorelocateaftermarriage,
      DidyourevertconverttoIslam: DidyourevertconverttoIslam
    },
  });
  toast('step3 complete')
};

export const SubmitDeenForm = (followingforspouse, WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted,
  TheIslamicteachingssectthatyoufollow, Whichscholarsdoyoutakeknowledgefrom, AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails,
  Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid, DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk,
  DoyouwanttomakehijraonedayinshaAllah, DoyouvoluntaryFast, CanyoureadandorunderstandanyArabic, DoyoureadQuran,
  MemorizedanyQuranifsohowmuch

) => (dispatch) => {
  dispatch({
    type: DEEN_FORM,
    payload: {
      followingforspouse: followingforspouse,
      WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted: WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted,
      TheIslamicteachingssectthatyoufollow: TheIslamicteachingssectthatyoufollow,
      Whichscholarsdoyoutakeknowledgefrom: Whichscholarsdoyoutakeknowledgefrom,
      AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails: AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails,
      Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid: Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid,
      DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk: DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk,
      DoyouwanttomakehijraonedayinshaAllah: DoyouwanttomakehijraonedayinshaAllah,
      DoyouvoluntaryFast: DoyouvoluntaryFast,
      CanyoureadandorunderstandanyArabic: CanyoureadandorunderstandanyArabic,
      DoyoureadQuran: DoyoureadQuran,
      MemorizedanyQuranifsohowmuch: MemorizedanyQuranifsohowmuch,
    },
  });
  toast('step4 complete')
};

export const SubmitFinishForm = (WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole
  , Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor, suggestions, newsletter) => (dispatch) => {
    dispatch({
      type: FINISH_FORM,
      payload: {
        WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole: WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole,
        Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor: Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor,
        suggestions: suggestions,
        newsletter: newsletter,
      },
    });
    toast('step5 complete')
  };

export const SubmitProfressionForm = (Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply, Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply,
  Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted, Whatisyourprofession, Whatisyourlevelofeducation) => (dispatch) => {
    dispatch({
      type: PROFESSION_FORM,
      payload: {
        Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply: Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply,
        Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply: Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply,
        Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted: Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted,
        Whatisyourprofession: Whatisyourprofession,
        Whatisyourlevelofeducation: Whatisyourlevelofeducation,
      },
    });
    toast('step6 complete')
  };


export const SubmitFamilyRelationsForm = (Areyourfamilyreligious, WhatsectfollowingofIslamareyourfamilypractising, Howisyourrelationshipwithyourfamily, WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah) => (dispatch) => {
  dispatch({
    type: FAMILY_RELATIONS_FORM,
    payload: {
      Areyourfamilyreligious: Areyourfamilyreligious,
      WhatsectfollowingofIslamareyourfamilypractising: WhatsectfollowingofIslamareyourfamilypractising,
      Howisyourrelationshipwithyourfamily: Howisyourrelationshipwithyourfamily,
      WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah: WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah,

    },
  });
  toast('step7 complete')
};

export const SubmitFriendshipsForm = (DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends, Areyourfriendsreligious, WhatsectfollowingofIslamdoyourfriendspractice,
  Howmightyourfriendsdescribeyourpersonality, Wouldyouwantyourfuturehusbandtofreemixwithyourfriends, Wouldyouwantyourfuturewifetofreemixwithyourfriends) => (dispatch) => {
    dispatch({
      type: FRIENDSHIPS_FORM,
      payload: {
        DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends: DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends,
        Areyourfriendsreligious: Areyourfriendsreligious,
        WhatsectfollowingofIslamdoyourfriendspractice: WhatsectfollowingofIslamdoyourfriendspractice,
        Howmightyourfriendsdescribeyourpersonality: Howmightyourfriendsdescribeyourpersonality,
        Wouldyouwantyourfuturehusbandtofreemixwithyourfriends: Wouldyouwantyourfuturehusbandtofreemixwithyourfriends,
        Wouldyouwantyourfuturewifetofreemixwithyourfriends: Wouldyouwantyourfuturewifetofreemixwithyourfriends,

      },
    });
    toast('step8 complete')
  };

export const SubmitLifestyleForm = (Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc, Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc,
  Whichbeardstylemeetyourpreferences, Doyouwantawifewhowearsmakeupinfrontofnonmahrams, DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply,
  Doyoufreemixwithnonmahramfemales, Doyoufreemixwithnonmahrammen, Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc, Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc,
  DoyouwatchTV, DoyoulistentoMusic, Doyouwearmakeupinfrontofnonmahrams) => (dispatch) => {
    dispatch({
      type: LIFESTYLE_FORM,
      payload: {
        Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc: Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc,
        Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc: Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc,
        Whichbeardstylemeetyourpreferences: Whichbeardstylemeetyourpreferences,
        Doyouwantawifewhowearsmakeupinfrontofnonmahrams: Doyouwantawifewhowearsmakeupinfrontofnonmahrams,
        DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply: DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply,
        Doyoufreemixwithnonmahramfemales: Doyoufreemixwithnonmahramfemales,
        Doyoufreemixwithnonmahrammen: Doyoufreemixwithnonmahrammen,
        Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc: Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc,
        Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc: Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc,
        DoyouwatchTV: DoyouwatchTV,
        DoyoulistentoMusic: DoyoulistentoMusic,
        Doyouwearmakeupinfrontofnonmahrams: Doyouwearmakeupinfrontofnonmahrams,
      },
    });
    toast('step9 complete')
  };

  export const FinishAndSubmitForm = (formdata) => (dispatch) => {
    return UserService.submitProfileData(formdata).then(
      (response) => {
        console.log('response' , response)
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
       console.log('message' , message)
        return Promise.reject();
      }
    );
  };