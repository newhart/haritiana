import EmotionUi from '../ui/JournalBordUi/EmotionUi';
import CopyTraidingUi from './../ui/JournalBordUi/CopyTraidingUi';

export const  dataForJournalBord =  [
    {
         date : '04.10.2020',
         risque : "3%",
         motantRisque : "26CHF",
         copyTraiding : <CopyTraidingUi />,
         emotion : <EmotionUi />,
         resultat : "+50"
    },
     {
         date : '04.10.2020',
         risque : "3%",
         motantRisque : "26CHF",
         copyTraiding : <CopyTraidingUi />,
         emotion : <EmotionUi />,
         resultat : "+50"
    },
     {
         date : '04.10.2020',
         risque : "3%",
         motantRisque : "26CHF",
         copyTraiding : <CopyTraidingUi />,
         emotion : <EmotionUi />,
         resultat : "+50"
    },
     {
         date : '04.10.2020',
         risque : "3%",
         motantRisque : "26CHF",
         copyTraiding : <CopyTraidingUi />,
         emotion : <EmotionUi />,
         resultat : "+50"
    },
     {
         date : '04.10.2020',
         risque : "3%",
         motantRisque : "26CHF",
         copyTraiding : <CopyTraidingUi />,
         emotion : <EmotionUi />,
         resultat : "+50"
    },
    
]

export const rows = dataForJournalBord.map(data => {
     return  <tr className="tr mt-4">
        <td>{data.date}</td>
        <td className="primary">{data.risque}</td>
        <td className="primary">{data.motantRisque}</td>
        <td>{data.copyTraiding}</td>
        <td>{data.emotion}</td>
        <td className="primary">{data.resultat}</td>
    </tr>
})