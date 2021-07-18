import Hened from '../Hened.jpg';
import Sarah from '../Sarah.jpg';
import Marie from '../Marie.jpg';

const Team = () => {
    return ( 
        <div id="team" class=" p-3 my-3 border bg-gradient" style={{'background':'rgba(204, 224, 255, 1)'}}>
            <br></br>
            <h1 style={{'color':'rgba(0, 0, 153, 1)', 'font-weight':'bold'}}> Rencontrez nos docteurs qui réhabilitent les animaux!</h1>
            <br></br>
            <div class="row justify-content-around">
                <div class="card" style={{'width':'18rem', 'height':'30rem', 'color':'rgba(0, 0, 153, 1)'}}>
                    <img src={Hened} width="600px" height="300px" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <p class="card-text" style={{'font-size':'22px', 'color':'rgba(0, 0, 153, 1)'}}/><strong>Dr. Hened Saade</strong>
                    <br></br>Dr. Hened Saade a gradué de l'université Harvard en BioMed.
                </div>
            </div>
            <div class="card" style={{'width': '18rem', 'height':'30rem', 'color':'rgba(0, 0, 153, 1)'}}>
                <img src={Sarah} width="600px" height="300px" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"/><strong> <b>Dr. Sarah Saade</b> </strong>
                    <br></br>Dr. Sarah Saade a gradué de l'université Princeton en Santé Vétérinaire.
                </div>
            </div>
        <div class="card" style={{'width': '18rem', 'height':'30rem', 'color':'rgba(0, 0, 153, 1)'}}>
            <img src={Marie} width="600px" height="300px" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text"/><strong><b>Dr. Marie-Josée Saade</b></strong>
                <br></br>Dr. Marie-Josée Saade a gradué de l'université Stanford en Sciences de la santé. 
            </div>
        </div>
        
    </div>
    <br></br><br></br>
    </div>
     );
}
 
export default Team;