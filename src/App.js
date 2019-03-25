import React, { Component } from 'react';
import './App.css';
import {CommentFactory} from "./component/factory";
import {Summary, Detail} from "./component";

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Model/ModelFactory Proposed Implementation</h1>
                <p>The Factory Component configures, loads and exposes the Model Components. From which the relevant Properties and Methods can be combined with whatever child Components we require.</p>
                <CommentFactory>
                    {
                        ({ model, method }) => <li><Summary email={model.email} title={model.name} onClick={method} /></li>
                    }
                </CommentFactory>
                <h2>Tailoring Factories</h2>
                <p>Factories themselves can be given props which will resolve different outcomes.</p>
                <p>In practice these would actually be enclosed in a similar implementation of a <strong>Filter</strong> Component.</p>
                <CommentFactory ids={[4]} message={'Load Single'}>
                    {
                        ({ model, method }) => <Detail id={model.id} title={model.name} content={model.body} email={model.email} onClick={method} />
                    }
                </CommentFactory>
                <h2>Benefits</h2>
                <p>The above approach has several benefits:</p>
                <ul>
                    <li>
                        <h4>Remove Hydration/Dehydration Concerns</h4>
                        <p>We are currently constantly hydrating and dehydrating Models between multiple different stores, in this implementation the Model as a <em>prop</em> is immutable, whilst the Model as it's Component <em>state</em> can be edited/altered (exactly like a state controlled Form).</p>
                    </li>
                    <li>
                        <h4>Removing Separation of Data/Output</h4>
                        <p>Where our Components are entirely separate from our Factories/Models, all of the information tied to them almost has to be represented in twice the locations. For example, A Filter Component will have to locally maintain what it's Properties are, it will also have to separately interact and update a FilterModel which actually interacts with the Factory/API. In this implementation, the Filter state is represented only within the Component where it is interacted with (although it can be <em>expressed</em> through whatever configuration of children required).</p>
                    </li>
                    <li>
                        <h4>Our Application Has Multiple Personalities</h4>
                        <p>The approach we are currently taking separates all of our Loading/Data concerns into our TS classes which champion <strong>inheritance</strong>, meanwhile all of our Components are trying to handle their concerns via <strong>composition</strong>.</p>
                    </li>
                    <li>
                        <h4>Greatly Increased Reusability of Component</h4>
                        <p>Regardless of this implementation, our Component reusability <em>outside of the core UI Components</em> could be much improved. This implementation however does almost require that it be done.</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
