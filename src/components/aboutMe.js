import React from 'react'
import { Modal, Button, CardPanel, Card, Icon, CardTitle, TextInput, Textarea } from 'react-materialize'
import AboutFatima from './aboutFatima'


function AboutMe() {
    return (
        <div>
            <div>
                <AboutFatima />
            </div>

            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Experience And Achievements"
                id="Modal-0"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                // root={[object HTMLBodyElement]}
                trigger={<Button node="button">EXPERIENCE</Button>}
            >
               <CardPanel >
                    <span className="blacke-text"><p><strong>Company Name:</strong> Pearls Africa</p></span>
                    <span className="blacke-text"><p><strong>ROLE:</strong> Front End Developer Intern</p></span>
                    <span className="blacke-text"><p><strong>Date Employed:</strong> October 2020 - Present</p></span>
                    <span className="blacke-text"><p><strong>Location:</strong>Lagos, Nigeria</p></span>
                </CardPanel>
                <CardPanel >
                    <span className="blacke-text"><p><strong>Company Name:</strong> She Code Africa</p></span>
                    <span className="blacke-text"><p><strong>ROLE:</strong> Front End Developer Intern</p></span>
                    <span className="blacke-text"><p><strong>Date Employed:</strong> June 2020 - August 2020</p></span>
                    <span className="blacke-text"><p><strong>Location:</strong>Lagos, Nigeria</p></span>
                </CardPanel>
                <CardPanel >
                    <span className="blacke-text"><p><strong>Company Name:</strong> Kreateng Africa</p></span>
                    <span className="blacke-text"><p><strong>ROLE:</strong> Front End Developer Intern</p></span>
                    <span className="blacke-text"><p><strong>Date Employed:</strong>November 2019 - April 2019</p></span>
                    <span className="blacke-text"><p><strong>Location:</strong>Lagos, Nigeria</p></span>
                </CardPanel>
                <CardPanel >
                    <span className="blacke-text"><p><strong>School Name:</strong>Obafemi Awolowo University</p></span>
                    <span className="blacke-text"><p><strong>ROLE:</strong> Electronics and Electrical Engineering</p></span>
                    <span className="blacke-text"><p><strong>Date Employed:</strong>August 2014 - September 2018</p></span>
                    <span className="blacke-text"><p><strong>Location:</strong>Osun-State, Nigeria</p></span>
                </CardPanel>
            </Modal>
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Projects"
                id="Modal-0"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                // root={[object HTMLBodyElement]}
                trigger={<Button node="button">PROJECTS</Button>}
            >
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="./project1.png" reveal waves="light"/>}
                    reveal={<p>This application is built with react.js. Counter app can count numbers up by clicking a button. It can also count down by clicking a button</p>}
                    revealIcon={<Icon>more_vert</Icon>}
                    title="CounterProgram"
                    >
                    <p>
                        <a href="https://fatima-ola.github.io/counter-app/">
                        Project Link
                        </a>
                    </p>
                </Card>
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="./project2.png" reveal waves="light"/>}
                    reveal={<p>fatima facebook app was built with Reactjs. It has signup, login, welcome page, logout page. It has no database, but makes use of local storage.</p>}
                    revealIcon={<Icon>more_vert</Icon>}
                    title="Fatima-Facebook"
                    >
                    <p>
                        <a href="https://fatima-facebook-app.netlify.app/">
                       Project link
                        </a>
                    </p>
                </Card>
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="./project3.png" reveal waves="light"/>}
                    reveal={<p>Motocare provide fast and easy access to reliable automobile engineers for vehicle users that are in need of prompt response to their mechanical breakdown through technology.</p>}
                    revealIcon={<Icon>more_vert</Icon>}
                    title="Motocare"
                    >
                    <p>
                        <a href="motocare.com.ng">
                        Project link
                        </a>
                    </p>
                </Card>
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="./project5.png" reveal waves="light"/>}
                    reveal={<p>I built my portfolio with ReactJs during my internship training at PearlsAfrica.</p>}
                    revealIcon={<Icon>more_vert</Icon>}
                    title="My Portfolio"
                    >
                    <p>
                        <a href="#portfolio">
                        Project link
                        </a>
                    </p>
                </Card>
            </Modal>
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Contact Me"
                id="Modal-0"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                // root={[object HTMLBodyElement]}
                trigger={<Button node="button">HIRE ME</Button>}
            >
              <form>
              <TextInput id="TextInput-4" label="Full Name" />
              <TextInput email id="TextInput-4" label="Email" validate />
              <Textarea id="Textarea-12" label="Talk to me..."/>
              <Button node="button" type="submit" waves="light"> Submit<Icon right> send</Icon></Button>
              </form>
            </Modal>
        </div>
    )
}

export default AboutMe