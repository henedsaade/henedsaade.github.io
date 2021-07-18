import React from 'react';
import './app.css';

class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName:"", lastName:"", email:"", phoneNumber:"", date:"", time:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emptyCheck(key, value) {
        if(value === "") {
            document.getElementById(key).innerHTML = "Ne peut pas être vide.";
        }
    }

    validateEmail(value) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(String(value).toLowerCase());
    }

    validateTime(value) {
        let upperB = Date.parse("12/09/1999 18:00");
        let lowerB = Date.parse("12/09/1999 9:00");
        return (Date.parse("12/09/1999 "+value) > lowerB && Date.parse("12/09/1999 "+value) < upperB);
    }

    validateDate(value) {
        var dateString = value.split("-");
        let date = new Date(dateString[0], dateString[1], dateString[2]);
        return (date.getDay() != 2 && date.getDay() != 3);
    }

    handleExceptions(key, value) {
        let errorName = key+"Errors";
        console.log("Key: "+key, "Value: "+value);
        switch(key) {
            case "firstName":
                break;
            case "lastName":
                break;
            case "email":
                if(this.validateEmail(value) === false) {
                    document.getElementById(errorName).innerHTML = "SVP entrer votre courriel comme suit: xxxx@xxxx.xxx."
                }
                break;
            case "phoneNumber":
                if(value.length != 10) {
                    document.getElementById(errorName).innerHTML = "SVP entrer votre numéro de téléphone comme suit: xxxxxxxxxx (10 numéros)."
                }
                break;
            case "date":
                if(this.validateDate(value) === false) {
                    document.getElementById(errorName).innerHTML = "Nos jours de services sont du Lundi au Vendredi.";
                }
                break;
            case "time":
                if(this.validateTime(value) === false) {
                    document.getElementById(errorName).innerHTML = "Nos heures de services sont de 10:00AM à 6:00PM.";
                }
                break;
        }
        this.emptyCheck(errorName, value);
    }

    handleChange(event) {
        const {id, value} = event.target;
        console.log("id: "+id, "Value: "+value);
        this.setState({[id]: value});
    }

    handleSubmit(event) {
        let errors = document.getElementsByName("error");
        for(let i=0; i < errors.length; i++) {
            errors[i].innerHTML = "";
        }
        Object.entries(this.state).forEach(
            ([key, value]) => {
                this.handleExceptions(key, value);
            }
        )
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2 style={{'color':'rgba(0, 0, 153, 1)'}}>Rentrez vos informations ci-dessous: </h2>
                <div class="row"> 
                    <label class="column">Premier Nom: </label>
                    <input class="column" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    <label class="column" id="firstNameErrors" name="error"/>
                </div>
                <div class="row">
                    <label class="column">Dernier Nom: </label>
                    <input class="column" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    <label class="column" id="lastNameErrors" name="error"/>
                </div>
                <div class="row">
                    <label class="column">Courriel Électronique: </label>
                    <input class="column" id="email" value={this.state.email} onChange={this.handleChange}/>
                    <label class="column" id="emailErrors" name="error"/>
                </div> 
                <div class="row">
                    <label class="column">Numéro de Téléphone: </label>
                    <input class="column" id="phoneNumber" value={this.state.phoneNumber} type="number" onChange={this.handleChange}/>
                    <label class="column" id="phoneNumberErrors" name="error"/>
                </div>
                <div class="row">
                    <label class="column">Date: </label>
                    <input class="column" id="date" value={this.state.date} type="date" onChange={this.handleChange}/>
                    <label class="column" id="dateErrors" name="error"/>
                </div>
                <div class="row">
                    <label class="column">Temps: </label>
                    <input class="column" id="time" value={this.state.time} type="time" onChange={this.handleChange}/>
                    <label class="column" id="timeErrors" name="error"/>
                </div>
                <input style={{'background':'rgba(204, 224, 255, 1)', 'font-weight':'bold', 'color':'rgba(0, 0, 153, 1)'}} type="submit" value="Soumettre"/>
                
            </form>
        );
    }
}
 
export default Information;