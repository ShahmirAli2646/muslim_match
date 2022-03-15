import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from "@mui/icons-material/StarBorderOutlined"
import CompassIcon from '@mui/icons-material/CompassCalibrationOutlined'
import FilesIcon from '@mui/icons-material/FileCopySharp'
import AtomIcon from '@mui/icons-material/VerifiedUserOutlined'
import FamilyIcon from '@mui/icons-material/PeopleOutline'
import FriendsIcon from '@mui/icons-material/ContactsOutlined'
import ProfessionIcon from '@mui/icons-material/LocalPostOfficeOutlined'
import { Container } from '@mui/material';
import SectionHelper from './SectionHelper';
import UserService from '../../services/user.service'
import { useSelector } from 'react-redux';



const DataBlock = () => {
  const styles = {
    question:{
      color: 'rgb(255, 74, 131)',
      fontFamily: 'fantasy',
      fontSize: '25px',
      textAlign: 'center'
    },
    answer:{
      color: '#f3a2a2',
      textAlign: 'center',
      fontSize:'20px'
    }
  }
  const [profiledata, setProfileData] = React.useState('');
  const user = useSelector(state => state.auth.user)
  React.useEffect(() => {
    const result = UserService.getuserProfile(user?._id).then(
      (response) => {
        console.log('response', response)
        setProfileData(response)
        return response;
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log('message', message)

      }
    )

    console.log('profiledata', profiledata?.data)

  }, [])
  const Sections = [
    {
      title: 'Deen',
      description: [
        '30'
      ],

    },
    {
      title: 'Lifestyle',
      description: [
        'Mobeen'
      ],
    },
    {
      title: 'Basics',
      description: [
        'Birmingham Uk'
      ],
    },
    {
      title: 'Apearance',
      description: [
        'Birmingham Uk'
      ],
    },
    {
      title: 'Family',
      description: [
        'Birmingham Uk'
      ],
    },
    {
      title: 'Friendships',
      description: [
        'Birmingham Uk'
      ],
    },
    {
      title: 'Profession',
      description: [
        'Birmingham Uk'
      ],
    },
  ];
  return (
    <Container maxWidth='md' disableGutters={true}>
      {Sections.map((item) => (
        <div>
          <Card sx={{
            maxWidth: 980, marginTop: '50px',
            borderRadius: '20px',
            boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)'
          }}>
            <CardHeader style={{ fontFamily: 'fantasy',textAlign:'center' , fontSize: 30, color: 'rgba(21, 135, 135, 0.8)' }}
              title={item.title}></CardHeader>

            <CardContent>{item.title === 'Deen' ? (
              <React.Fragment>
                <ul>
                  <Typography style={styles.question}>{"Which followings of Islam match with what you're looking for in a spouse"}</Typography>
                  <li style={styles.answer}>{profiledata?.data?.followingforspouse}</li>
                  <Typography style={styles.question}>{"What type and level of Islamic studying would you want a marriage match to have completed"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted}
                  </li>
                  <Typography style={styles.question}>{"TheIslamicteachingssectthatyoufollow"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.TheIslamicteachingssectthatyoufollow}
                  </li>
                  <Typography style={styles.question}>{"Which scholars do you take knowledge from"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whichscholarsdoyoutakeknowledgefrom}
                  </li>
                  <Typography style={styles.question}>{"Are you currently studying Islam, or have you in the past? Do you have the intention to study Islamic studies in the future?"}</Typography>
                  <li  style={styles.answer}> {profiledata?.data?.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails}</li>
                  <Typography style={styles.question}>{"How many of the 5 prayers a day do you usually pray in the masjid"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid}</li>
                  <Typography style={styles.question}>{"Do you make dua TO the Prophet (SAW) or dua to pirs or saints (there is strong evidence that this type of dua is sinful shirk)"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk}</li>
                  <Typography style={styles.question}>{"Do you want to make hijra one day insha'Allah"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.DoyouwanttomakehijraonedayinshaAllah}</li>
                  <Typography style={styles.question}>{"Do you voluntary Fast"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.DoyouvoluntaryFast}</li>
                  <Typography style={styles.question}>{"Can you read and/or understand any Arabic"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.CanyoureadandorunderstandanyArabic}</li>
                  <Typography style={styles.question}>{"Do you read Qur’an"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.DoyoureadQuran}</li>
                  <Typography style={styles.question}>{"Memorized any Qur’an - if so how much"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.MemorizedanyQuranifsohowmuch}</li>
                </ul>

              </React.Fragment>
            ) : item.title === 'Lifestyle' ? (
              <React.Fragment>
                <ul>
                  <Typography style={styles.question}>{"What style of men's clothing would you prefer your future husband wear when around non mahrams (i.e. when going to the shop or at work etc.)"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whatstyleofmensclothingwouldyoupreferyourfuturehusbandwearwhenaroundnonmahramswhengoingtotheshoporatworketc}</li>
                  <Typography style={styles.question}>{"What style of women's clothing would you prefer your future wife to wear when around non-mahrams (i.e. when going to the shop, or park etc.)"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whatstyleofwomensclothingwouldyoupreferyourfuturewifetowearwhenaroundnonmahramswhengoingtotheshoporparketc}
                  </li>
                  <Typography style={styles.question}>{"Which beard style/s meet your preferences"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whichbeardstylemeetyourpreferences}
                  </li>
                  <Typography style={styles.question}>{"Do you want a wife who wears makeup in front of non-mahrams"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Doyouwantawifewhowearsmakeupinfrontofnonmahrams}
                  </li>
                  <Typography style={styles.question}>{"Do you eat haram, drink alcohol, smoke cigarettes, smoke shisha, or use e-cigarettes"}</Typography>
                  <li  style={styles.answer}> {profiledata?.data?.DoyoueatharamdrinkalcoholsmokecigarettessmokeshishaoruseecigarettesSelectallthatapply}</li>
                  <Typography style={styles.question}>{"Do you free-mix with non-mahram females?"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyoufreemixwithnonmahramfemales}</li>
                  <Typography style={styles.question}>{"Do you free-mix with non-mahram men?"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyoufreemixwithnonmahrammen}</li>
                  <Typography style={styles.question}>{"Type of clothing worn in front of non-mahram men (i.e. when going to the shop, work, or park etc.) "}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Typeofclothingworninfrontofnonmahrammenwhengoingtotheshopworkorparketc}</li>
                  <Typography style={styles.question}>{"Type of clothing worn in front of non-mahram woman (i.e. when going to the shop or work etc.) "}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Typeofclothingworninfrontofnonmahramwomanwhengoingtotheshoporworketc}</li>
                  <Typography style={styles.question}>{"Do you watch TV"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.DoyouwatchTV}</li>
                  <Typography style={styles.question}>{"Do you listen to Music"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.DoyoulistentoMusic}</li>
                  <Typography style={styles.question}>{"Do you wear makeup in front of non-mahrams"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyouwearmakeupinfrontofnonmahrams}</li>
                </ul>

              </React.Fragment>
            ) : item.title === 'Basics' ? (
              <React.Fragment>
                <ul>
                  <Typography style={styles.question}>{"youngest age you are looking for"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.youngestageyouarelookingfor}</li>
                  <Typography style={styles.question}>{"oldest age you are looking for"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.oldestageyouarelookingfor}
                  </li>
                  <Typography style={styles.question}>{"What type of hijab matches with what you're looking for in a wife"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whattypeofhijabmatcheswithwhatyourelookingforinawife}
                  </li>
                  <Typography style={styles.question}>{"Would you consider marrage to a Muslima who does not wear Niqaab?"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab}
                  </li>
                  <Typography style={styles.question}>{"Which marital status match with what you are looking for"}</Typography>
                  <li  style={styles.answer}> {profiledata?.data?.Whichmaritalstatusmatchwithwhatyouarelookingformen}</li>
                  <Typography style={styles.question}>{"Which marital status match with what you are looking for"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whichmaritalstatusmatchwithwhatyouarelookingforwomen}</li>
                  <Typography style={styles.question}>{"Would you consider marrying someone who is already married"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Wouldyouconsidermarryingsomeonewhoisalreadymarried}</li>
                  <Typography style={styles.question}>{"Would you marry someone who already has children"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Wouldyoumarrysomeonewhoalreadyhaschildren}</li>
                  <Typography style={styles.question}>{"Would you marry someone who had mental health problems"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Wouldyoumarrysomeonewhohadmentalhealthproblems}</li>
                  <Typography style={styles.question}>{"Would you marry someone who had physical disabilities"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Wouldyoumarrysomeonewhohadphysicaldisabilities}</li>
                  <Typography style={styles.question}>{"Which countries would you prefer your marriage partner to hold citizenship"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship?.label}</li>
                  <Typography style={styles.question}>{"Do you have specific requirements with regards to the ethnicity of a future marriage partner?"}</Typography>

                  <li  style={styles.answer}>{profiledata?.data?.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner?.label}</li>
                  <Typography style={styles.question}>{"What is your preference when it comes to marrying a Muslim who found Islam later on in life (a revert/covert to Islam)"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife}</li>
                  <Typography style={styles.question}>{"Which country, or countries do you live in?"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whichcountryorcountriesdoyoulivein?.label}
                  </li>
                  <Typography style={styles.question}>{"Which city/town/village do you live in?"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whichcitytownvillagedoyoulivein?.label}
                  </li>
                  <Typography style={styles.question}>{"Which country, or countries do you hold citizenship"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whichcountryorcountriesdoyouholdcitizenship?.label}
                  </li>
                  <Typography style={styles.question}>{"What is your marital status Men"}</Typography>
                  <li  style={styles.answer}> {profiledata?.data?.Whatisyourmaritalstatusmen}</li>
                  <Typography style={styles.question}>{"What is your marital status Women"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whatisyourmaritalstatuswomen}</li>
                  <Typography style={styles.question}>{"Do you pray all of the 5 daily prayers"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyouprayallofthe5dailyprayers}</li>
                  <Typography style={styles.question}>{"Do you cover your hair from non-mahrams"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyoucoveryourhairfromnonmahrams}</li>
                  <Typography style={styles.question}>{"What are your preferred living arrangements after marriage"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whatareyourpreferredlivingarrangementsaftermarriage}</li>
                  <Typography style={styles.question}>{"Do you have any physical disabilities"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyouhaveanyphysicaldisabilities}</li>
                  <Typography style={styles.question}>{"Do you have any mental health problems"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyouhaveanymentalhealthproblems}</li>
                  <Typography style={styles.question}>{"Do you have any children"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyouhaveanychildren}</li>
                  <Typography style={styles.question}>{"Do you want children after marriage"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Doyouwantchildrenaftermarriage}</li>
                  <Typography style={styles.question}>{"Are you willing to relocate after marriage"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Areyouwillingtorelocateaftermarriage}</li>
                  <Typography style={styles.question}>{"Did you revert/convert to Islam"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.DidyourevertconverttoIslam}</li>
                </ul>
              </React.Fragment>

            ) : item.title === 'Apearance' ? (


              <React.Fragment>
                <ul>
                  <Typography style={styles.question}>{"What is the shortest height you find compatible"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whatistheshortestheightyoufindcompatible}</li>
                  <Typography style={styles.question}>{"What's the tallest height you find compatible?"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whatsthetallestheightyoufindcompatible}
                  </li>
                  <Typography style={styles.question}>{"What is your preference when it comes to the waist size of your future husband insha'Allah (in inches)"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches}
                  </li>
                  <Typography style={styles.question}>{"Smallest dress size that meets your requirements for a wife"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Smallestdresssizethatmeetsyourrequirementsforawife}
                  </li>
                  <Typography style={styles.question}>{"Largest dress size that meets your requirements for a wife"}</Typography>
                  <li  style={styles.answer}> {profiledata?.data?.Largestdresssizethatmeetsyourrequirementsforawife}</li>
                  <Typography style={styles.question}>{"Which build matches your preference"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whichbuildmatchesyourpreference}</li>
                  <Typography style={styles.question}>{"What is your height"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whatisyourheight}</li>
                  <Typography style={styles.question}>{"Your dress size"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Yourdresssize}</li>
                  <Typography style={styles.question}>{"Your waist size (in inches)"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Yourwaistsizeininches}</li>
                  <Typography style={styles.question}>{"Which build best describes you"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whichbuildbestdescribesyou}</li>
                  <Typography style={styles.question}>{"Which style of beard do you have"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whichstyleofbearddoyouhave}</li>
                  <Typography style={styles.question}>{"What is your ethnicity"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whatisyourethnicity}</li>
                </ul>

              </React.Fragment>
            ) : item.title === 'Family' ? (
              <React.Fragment>
                <ul>
                  <Typography style={styles.question}>{"Are your family religious"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Areyourfamilyreligious}</li>
                  <Typography style={styles.question}>{"What sect/following of Islam are your family practising"}</Typography>

                  <li  style={styles.answer}>
                    {profiledata?.data?.WhatsectfollowingofIslamareyourfamilypractising}
                  </li>
                  <Typography style={styles.question}>{"How is your relationship with your family"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Howisyourrelationshipwithyourfamily}
                  </li>
                  <Typography style={styles.question}>{"What might the relationship between your family and your new marriage partner be like insha’Allah"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah}
                  </li>

                </ul>
              </React.Fragment>

            ) : item.title === 'Friendships' ? (
              <React.Fragment>
                <ul>
                  <Typography style={styles.question}>{"Do you spend a lot of time with friends What activities do you do with your friends"}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.DoyouspendalotoftimewithfriendsWhatactivitiesdoyoudowithyourfriends}</li>
                  <Typography style={styles.question}>{"Are your friends religious"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Areyourfriendsreligious}
                  </li>
                  <Typography style={styles.question}>{"What sect/following of Islam do your friends practice"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.WhatsectfollowingofIslamdoyourfriendspractice}
                  </li>
                  <Typography style={styles.question}>{"How might your friends describe your personality"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Howmightyourfriendsdescribeyourpersonality}
                  </li>
                  <Typography style={styles.question}>{"Would you want your future husband to free-mix with your friends"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Wouldyouwantyourfuturehusbandtofreemixwithyourfriends}
                  </li>
                  <Typography style={styles.question}>{"Would you want your future wife to free-mix with your friends"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Wouldyouwantyourfuturewifetofreemixwithyourfriends}
                  </li>
                </ul>
              </React.Fragment>
            ) : item.title === 'Profession' ? (
              <React.Fragment>
                <ul>
                  <Typography style={styles.question}>{"Which profession status describe what you want your future wife to have "}</Typography>
                  <li  style={styles.answer}>{profiledata?.data?.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply}</li>
                  <Typography style={styles.question}>{"Which profession status/s describe what you want your future husband to have"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply}
                  </li>
                  <Typography style={styles.question}>{"The minimum level of education you want your marriage partner to have completed"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted}
                  </li>
                  <Typography style={styles.question}>{"What is your profession"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whatisyourprofession}
                  </li>
                  <Typography style={styles.question}>{"What is your level of education"}</Typography>
                  <li  style={styles.answer}>
                    {profiledata?.data?.Whatisyourlevelofeducation}
                  </li>

                </ul>
              </React.Fragment>
            ) : ''

            }</CardContent>
          </Card>
          <Card sx={{
            maxWidth: 980, height: 150, marginTop: '50px',
            borderRadius: '20px',
            boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)'
          }}>

            <CardContent>{'Advertisement'}</CardContent>
          </Card>
        </div>

      ))}


    </Container>
  )
}
export default DataBlock