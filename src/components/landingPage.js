import React from 'react';
import 'materialize-css';
import { Slider, Slide, Caption, Icon } from 'react-materialize';
import particles from '../images/particles.png'
import AboutMe from './aboutMe'


function LandingPage() {
    return (
        <div>
            <Slider
                fullscreen={false}
                options={{
                    duration: 500,
                    backgroundSize: "cover",
                    indicators: false,
                    height: 920,
                    interval: 6000
                }}
            >
                <Slide image={<img alt="sparkling" src={particles} />}>
                    <Caption placement="center">
                        <h3>
                            HELLO, I'M
                         </h3>
                        <h2>
                            FATIMA OLASUNKANMI-OJO
                         </h2>
                        <h5 className="light grey-text text-lighten-3">
                            A Software Engineer based in Lagos, Nigeria..
                        </h5>
                        <AboutMe />
                        <div style={{ marginTop: "150px" }}>
                            <Icon small>
                                cloud
                            </Icon>
                        </div>
                    </Caption>

                </Slide>

            </Slider>

        </div>

    )
}

export default LandingPage