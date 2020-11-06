import React from 'react'
import { Modal, Button } from 'react-materialize'
import {  Card, Icon } from 'react-materialize'



export default function AboutFatima() {
    return (
        <div >
            

            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="About Me"
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
                trigger={<Button node="button">ABOUT ME</Button>}
            >
                    <div className="mypic">
                        <img src="/Fat3.jpg" alt="fatimaprofile" id="fatima"/>
                    </div>
                  
                        <Card
                            actions={[
                               <div>
                                    <h3>Skill Set</h3>
                                    <h5>Front End:</h5>
                                    <div>
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/html-5.676e8188.svg"  alt="html5" width="50px" height="50px"/>
                                        </span>  
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/css3.3707da3c.svg" alt="html5" width="50px" height="50px"/>
                                        </span> 
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/javascript.2d2e31cc.svg" alt="html5" width="50px" height="50px"/>
                                        </span> 
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/bootstrap-4.ffded238.svg" alt="html5" width="50px" height="50px"/>
                                        </span> 
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/react.4009eef3.svg" alt="html5" width="50px" height="50px"/>
                                        </span> 
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/react-router.02419671.svg" alt="html5" width="50px" height="50px"/>
                                        </span> 
                                       
                                        <span>
                                            <img src=" https://akjha96.github.io/ReactifolioBs4_Akj/static/media/react-bootstrap.83fe61b0.svg" alt="html5" width="50px" height="50px"/>
                                        </span>   
                                    </div>
                                    <h5>Development Tools:</h5>
                                    <div>
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/heroku.b38ff61a.svg" alt="html5" width="50px" height="50px"/>
                                        </span>  
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/github.0ff1a6f0.svg" alt="html5" width="50px" height="50px"/>
                                        </span> 
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/git-icon.1190a19c.svg" alt="html5" width="50px" height="50px"/>
                                        </span> 
                                    </div>
                                    <h5>Programming Language:</h5>
                                    <div>
                                        <span>
                                            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/javascript.2d2e31cc.svg" alt="html5" width="50px" height="50px"/>
                                        </span>  
                                        
                                    </div>
                               </div>
                             
                               
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            // header={<CardTitle image="/Fatim5.jpg" width="300px" height="300px">Fatima Olasunkanmi-Ojo</CardTitle>}
                            revealIcon={<Icon>more_vert</Icon>}
                        >
                            <p style={{fontSize:"25px"}}> I'm a self-disciplined, growth-oriented and passionate being. I'm a good person with good values and ability to work in a team. I'm a Front-end developer currently seeking for Front-end developer role. I love creating responsive websites. I'm very familiar with HTML5, CSS3, Javascript language and ReactJs.</p>
                           
                        </Card>
                    
            </Modal>





        </div>
    )
}
