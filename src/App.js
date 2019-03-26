import React, { Component } from 'react';
import './App.css';
import {CommentFactory} from "./component/factory";
import {Summary, Detail} from "./component";
import {CommentModel} from "./component/model";

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Model/ModelFactory Proposed Implementation</h1>
                <p>The Factory Component configures, loads and exposes the Model Components. From which the relevant Properties and Methods can be combined with whatever child Components we require.</p>
                <CommentFactory>
                    {
                        ({ models, load }) => (
                            <ul id={'RebuildableListMock'}>

                                { models.map((model) => (

                                    <CommentModel comment={model}>
                                        {({model, method}) => (
                                            <li>
                                                <Summary
                                                    title={model.name}
                                                    email={model.email}
                                                    onClick={method}/>
                                            </li>
                                            )}
                                    </CommentModel>

                                ))}

                                <button onClick={load}>Load All</button>
                            </ul>
                        )
                    }
                </CommentFactory>
                <h2>Tailoring Factories</h2>
                <p>Factories themselves can be given props which will resolve different outcomes.</p>
                <p>In practice these would actually be enclosed in a similar implementation of a <strong>Filter</strong> Component.</p>
                <CommentFactory ids={[4]} message={'Load Single'}>
                    {
                        ({ models, load }) => <article>
                                {
                            models.map((model) => {
                                return <CommentModel comment={model}>

                                    {({ model, method }) => <Detail
                                        id={model.id}
                                        title={model.name}
                                        content={model.body}
                                        email={model.email}
                                        onClick={method} />}

                                </CommentModel>
                            })
                        }

                        <button onClick={load}>Load Single Comment</button>

                        </article>

                    }
                </CommentFactory>
                <h2>Benefits</h2>
                <p>The above approach has several benefits:</p>
                <ul>
                    <li>
                        <h4>Remove Hydration/Dehydration Concerns</h4>
                        <p>Unlike constantly hydrating and dehydrating Models between multiple different stores, in this implementation the Model as a <em>prop</em> is immutable, whilst the Model as it's Component <em>state</em> can be edited/altered (exactly like a state controlled Form).</p>
                    </li>
                    <li>
                        <h4>Removing Separation of Data/Output</h4>
                        <p>Unlike where Components are entirely separate from Factories/Models, all of the information tied to them almost has to be represented in twice the locations. For example, A Filter Component will have to locally maintain what it's Properties are, it will also have to separately interact and update a FilterModel which actually interacts with the Factory/API. In this implementation, the Filter state is represented only within the Component where it is interacted with (although it can be <em>expressed</em> through whatever configuration of children required).</p>
                    </li>
                    <li>
                        <h4>Prevent An Application Having Multiple Personalities</h4>
                        <p>Rather than separating Loading/Data concerns into TS classes which champion <strong>inheritance</strong>, meanwhile all of our Components are trying to handle their concerns via <strong>composition</strong>, we can have a more fluid interaction where both follow the same "laws".</p>
                    </li>
                    <li>
                        <h4>Greatly Increased Reusability of Components</h4>
                        <p>This is possible to improve regardless of this implementation, Component reusability <em>outside of the core UI Components</em>, this implementation however does almost require that it be done in such a way.</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
