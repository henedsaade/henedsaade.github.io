import Hearts from '../Hearts.png';

const Welcome = () => {
    return ( 
        <nav id="page-top" class="navbar p-3 my-3 bg-gradient" style={{'background':'rgba(204, 224, 255, 1)'}}>
            <h1 style={{'font-size':'50px', 'font-weight':'bold', 'color':'rgba(0, 0, 153, 1)'}}><img src={Hearts} width="300" height="200"/> Bienvenue à Pet Nest</h1>
        </nav>
     );
}
 
export default Welcome;