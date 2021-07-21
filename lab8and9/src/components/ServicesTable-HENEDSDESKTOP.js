import Maltese from '../Maltese.png';
import Golden from '../Golden.jpg';

const ServicesTable = () => {
    return ( 
        <div id="adoption" class=" p-3 my-3 border bg-gradient">
            <h1 class="" style={{'color':'rgb(66, 51, 122)', 'font-weight':'bold'}}> Voici les animaux disponibles pour l'adoption: </h1>
            <table class="table table-hover" style={{'color':'rgb(66, 51, 122)'}}>
                <thead>
                    <tr>
                        <th scope="col"><h2>Nom des animaux</h2></th>
                        <th scope="col"><h2></h2></th>
                        <th scope="col"><h2>Descriptions</h2></th>
                        <th scope="col"><h2>Prix</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Annie</strong></td>
                        <td><img src={Maltese} width="150" height="200"></img></td>
                        <td>Annie est une femelle bichon maltais, âgé de 6 mois. Elle a reçu tous ses vaccins obligatoires et est prête à être adoptée.</td>
                        <td><strong>100$</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Spencer</strong></td>
                        <td><img src={Golden} width="150" height="130"></img></td>
                        <td>Spencer est un mâle golden retriever, âgé de 1 an. Il a reçu tous ses vaccins obligatoires et est prêt à être adopté.</td>
                        <td><strong>150$</strong></td>
                    </tr>
                </tbody>
            </table>
        </div> 
    );
}
 
export default ServicesTable;